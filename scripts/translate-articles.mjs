import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const sourceDir = join(process.cwd(), 'src/content/articles');
const outputDir = join(process.cwd(), 'src/content/localized-articles');

const locales = {
  'de-de': {
    label: 'German for Germany',
    ctaLabel: 'Zebra laden',
    ctaNoteSuffix: 'Nutzen Sie Zebra, wenn Sie Ihre Symptomgeschichte strukturiert erfassen und spaeter leichter pruefen moechten.',
  },
  'es-es': {
    label: 'Spanish for Spain',
    ctaLabel: 'Descargar Zebra',
    ctaNoteSuffix: 'Usa Zebra cuando quieras registrar tu historia de sintomas con estructura y revisarla con mas facilidad despues.',
  },
  'fr-fr': {
    label: 'French for France',
    ctaLabel: 'Telecharger Zebra',
    ctaNoteSuffix: 'Utilisez Zebra si vous voulez garder un historique de symptomes structure et plus facile a relire ensuite.',
  },
};

const translateKeys = new Set([
  'title',
  'subtitle',
  'description',
  'excerpt',
  'cluster',
  'category',
  'categories',
  'tags',
  'entities',
  'primaryKeyword',
  'secondaryKeywords',
  'seoTitle',
  'metaDescription',
  'ogTitle',
  'ogDescription',
  'heroImageAlt',
  'ctaNote',
  'faq',
]);

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('Missing frontmatter block.');

  return { frontmatter: match[1], body: match[2].trim() };
}

function parseYamlValue(value) {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^-?\d+$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^"|"$/g, '');
}

function parseSimpleYaml(yaml) {
  const lines = yaml.split('\n');
  const data = {};
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const topLevel = line.match(/^([A-Za-z0-9_-]+):(.*)$/);

    if (!topLevel) {
      index += 1;
      continue;
    }

    const [, key, rawValue] = topLevel;

    if (rawValue.trim()) {
      data[key] = parseYamlValue(rawValue);
      index += 1;
      continue;
    }

    const items = [];
    index += 1;

    while (index < lines.length && lines[index].startsWith('  - ')) {
      const itemLine = lines[index].slice(4);

      if (itemLine.includes(': ')) {
        const item = {};
        const [itemKey, ...itemValueParts] = itemLine.split(': ');
        item[itemKey] = parseYamlValue(itemValueParts.join(': '));
        index += 1;

        while (index < lines.length && lines[index].startsWith('    ')) {
          const nested = lines[index].trim().match(/^([A-Za-z0-9_-]+):(.*)$/);
          if (nested) item[nested[1]] = parseYamlValue(nested[2]);
          index += 1;
        }

        items.push(item);
      } else {
        items.push(parseYamlValue(itemLine));
        index += 1;
      }
    }

    data[key] = items;
  }

  return data;
}

function quoteYaml(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function stringifyYaml(data) {
  const lines = [];

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      lines.push(`${key}:`);

      for (const item of value) {
        if (typeof item === 'object' && item !== null) {
          const entries = Object.entries(item);
          const [firstKey, firstValue] = entries[0];
          lines.push(`  - ${firstKey}: ${quoteYaml(firstValue)}`);
          for (const [nestedKey, nestedValue] of entries.slice(1)) {
            lines.push(`    ${nestedKey}: ${quoteYaml(nestedValue)}`);
          }
        } else {
          lines.push(`  - ${quoteYaml(item)}`);
        }
      }
      continue;
    }

    if (typeof value === 'boolean' || typeof value === 'number') {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${quoteYaml(value)}`);
    }
  }

  return lines.join('\n');
}

function pickTranslatableFrontmatter(frontmatter) {
  return Object.fromEntries(Object.entries(frontmatter).filter(([key]) => translateKeys.has(key)));
}

function mergeFrontmatter(original, translated, locale, originalSlug) {
  return {
    locale,
    originalSlug,
    ...original,
    ...translated,
    ctaHref: original.ctaHref,
    ctaLabel: translated.ctaLabel ?? locales[locale].ctaLabel,
    status: 'published',
  };
}

function localePrompt(locale, frontmatter, body) {
  return [
    {
      role: 'system',
      content:
        'You translate Zebra health-app SEO articles. Preserve meaning, medical caution, calm tone, Markdown structure, links, tables, and product claims. Do not add claims. Do not translate brand names, app names, URLs, file paths, POTS, EDS, hEDS, ME/CFS, MCAS, PEM, or HealthKit. Return strict JSON only.',
    },
    {
      role: 'user',
      content: JSON.stringify({
        targetLocale: locales[locale].label,
        instructions: [
          'Translate all user-facing frontmatter values and the Markdown body.',
          'Use plain, natural language for chronic illness readers with low energy and brain fog.',
          'Keep headings as Markdown headings.',
          'Keep links and URL paths unchanged.',
          'Keep tables as Markdown tables.',
          'Return JSON with keys frontmatter and body.',
        ],
        frontmatter,
        body,
      }),
    },
  ];
}

async function translateWithOpenAI(locale, frontmatter, body) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is required to translate articles.');

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.ZEBRA_TRANSLATION_MODEL ?? 'gpt-4.1-mini',
      input: localePrompt(locale, frontmatter, body),
      text: { format: { type: 'json_object' } },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI translation failed: ${response.status} ${await response.text()}`);
  }

  const payload = await response.json();
  const text = payload.output_text ?? payload.output?.flatMap((item) => item.content ?? [])?.map((item) => item.text).join('');
  if (!text) throw new Error('OpenAI response did not include output_text.');

  return JSON.parse(text);
}

async function main() {
  const requestedLocale = process.argv.find((arg) => arg.startsWith('--locale='))?.split('=')[1];
  const requestedSlug = process.argv.find((arg) => arg.startsWith('--slug='))?.split('=')[1];
  const selectedLocales = requestedLocale ? [requestedLocale] : Object.keys(locales);
  const files = (await readdir(sourceDir)).filter((file) => file.endsWith('.md'));

  for (const locale of selectedLocales) {
    if (!locales[locale]) throw new Error(`Unsupported locale: ${locale}`);
    await mkdir(join(outputDir, locale), { recursive: true });

    for (const file of files) {
      const slug = basename(file, '.md');
      if (requestedSlug && slug !== requestedSlug) continue;

      const source = await readFile(join(sourceDir, file), 'utf8');
      const { frontmatter: yaml, body } = parseFrontmatter(source);
      const frontmatter = parseSimpleYaml(yaml);
      const translated = await translateWithOpenAI(locale, pickTranslatableFrontmatter(frontmatter), body);
      const merged = mergeFrontmatter(frontmatter, translated.frontmatter, locale, slug);
      const output = `---\n${stringifyYaml(merged)}\n---\n\n${translated.body.trim()}\n`;

      await writeFile(join(outputDir, locale, file), output);
      console.log(`Translated ${slug} -> ${locale}`);
    }
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
