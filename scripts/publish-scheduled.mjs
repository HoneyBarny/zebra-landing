import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readField, readFrontmatterParts, upsertField } from './frontmatter.ts';

const rootDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const articlesDir = join(rootDir, 'src/content/articles');
const siteUrl = 'https://zebra-landing.pages.dev';
const projectName = 'zebra-landing';

const args = new Set(process.argv.slice(2));
const shouldDeploy = args.has('--deploy');
const shouldValidate = args.has('--validate');
const validateOnly = args.has('--validate-only');
const dryRun = args.has('--dry-run');
const validationAttempts = Number.parseInt(process.env.VALIDATION_ATTEMPTS ?? '6', 10);
const validationDelayMs = Number.parseInt(process.env.VALIDATION_DELAY_MS ?? '10000', 10);
const publishTimeZone = process.env.PUBLISH_TIME_ZONE ?? 'America/Winnipeg';

function todayLabel() {
  if (process.env.PUBLISH_DATE) {
    return process.env.PUBLISH_DATE;
  }

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: publishTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function addDays(value, days) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function parseDueDate(value) {
  if (!value) return null;
  return value.includes('T') ? new Date(value) : new Date(`${value}T00:00:00Z`);
}

function publishDueArticle(pathname) {
  const source = readFileSync(pathname, 'utf8');
  const { frontmatter, body } = readFrontmatterParts(source);
  const status = readField(frontmatter, 'status') ?? 'published';
  const scheduledAt = readField(frontmatter, 'scheduledAt');
  const dueDate = parseDueDate(scheduledAt);

  if (status !== 'scheduled' || !dueDate || dueDate.getTime() > Date.now()) {
    return null;
  }

  let nextFrontmatter = frontmatter;
  const today = todayLabel();

  nextFrontmatter = upsertField(nextFrontmatter, 'status', 'published');
  nextFrontmatter = upsertField(
    nextFrontmatter,
    'publishedAt',
    readField(frontmatter, 'publishedAt') ?? today,
    'status',
  );
  nextFrontmatter = upsertField(nextFrontmatter, 'reviewedAt', today, 'scheduledAt');
  nextFrontmatter = upsertField(nextFrontmatter, 'updatedAt', today, 'publishedAt');
  nextFrontmatter = upsertField(nextFrontmatter, 'lastReviewed', today, 'reviewedBy');
  nextFrontmatter = upsertField(nextFrontmatter, 'nextReview', readField(frontmatter, 'nextReview') ?? addDays(today, 180), 'lastReviewed');

  const nextSource = `---\n${nextFrontmatter}\n---\n${body}`;

  return {
    pathname,
    slug: pathname.replace(`${articlesDir}/`, '').replace(/\.md$/, ''),
    source: nextSource,
  };
}

function run(command, commandArgs) {
  execFileSync(command, commandArgs, {
    cwd: rootDir,
    stdio: 'inherit',
  });
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function validateUrl(url) {
  execFileSync('curl', ['-sSfL', '-o', '/dev/null', url], {
    cwd: rootDir,
    stdio: 'inherit',
  });
}

function fetchText(url) {
  return execFileSync('curl', ['-sSfL', url], {
    cwd: rootDir,
    encoding: 'utf8',
  });
}

function validateWithRetry(url, label) {
  for (let attempt = 1; attempt <= validationAttempts; attempt += 1) {
    try {
      validateUrl(url);
      console.log(`Validated ${label} on attempt ${attempt}.`);
      return;
    } catch (error) {
      const isLastAttempt = attempt === validationAttempts;
      console.error(`Validation attempt ${attempt}/${validationAttempts} failed for ${label}.`);

      if (isLastAttempt) {
        throw error;
      }

      console.log(`Waiting ${validationDelayMs}ms before retrying ${label}...`);
      sleep(validationDelayMs);
    }
  }
}

function validateDeployment(slugs) {
  for (const slug of slugs) {
    validateWithRetry(`${siteUrl}/blog/${slug}/`, `article ${slug}`);
  }

  validateWithRetry(`${siteUrl}/sitemap.xml`, 'sitemap');

  const sitemap = fetchText(`${siteUrl}/sitemap.xml`);
  for (const slug of slugs) {
    const articleUrl = `${siteUrl}/blog/${slug}/`;

    if (!sitemap.includes(articleUrl)) {
      throw new Error(`Sitemap does not include ${articleUrl}`);
    }

    console.log(`Sitemap includes article ${slug}.`);
  }
}

function articleFiles() {
  return readdirSync(articlesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => join(articlesDir, file));
}

function publishedTodaySlugs(files) {
  const today = todayLabel();

  return files.flatMap((pathname) => {
    const source = readFileSync(pathname, 'utf8');
    const { frontmatter } = readFrontmatterParts(source);
    const status = readField(frontmatter, 'status') ?? 'published';
    const publishedAt = readField(frontmatter, 'publishedAt');

    if (status !== 'published' || publishedAt !== today) {
      return [];
    }

    return pathname.replace(`${articlesDir}/`, '').replace(/\.md$/, '');
  });
}

const files = articleFiles();

if (validateOnly) {
  const slugs = publishedTodaySlugs(files);

  if (!slugs.length) {
    console.log(`No articles with publishedAt ${todayLabel()} are available to validate.`);
    process.exit(0);
  }

  console.log(`Validating ${slugs.length} published article(s):`);
  for (const slug of slugs) {
    console.log(`- ${slug}`);
  }

  validateDeployment(slugs);
  console.log('Scheduled publishing validation complete.');
  process.exit(0);
}

const dueArticles = files
  .map((file) => publishDueArticle(file))
  .filter(Boolean);

if (!dueArticles.length) {
  console.log('No scheduled articles are due.');
  process.exit(0);
}

console.log(`Publishing ${dueArticles.length} scheduled article(s):`);
for (const article of dueArticles) {
  console.log(`- ${article.slug}`);
}

if (dryRun) {
  process.exit(0);
}

for (const article of dueArticles) {
  writeFileSync(article.pathname, article.source);
}

run('npm', ['run', 'content:ops']);
run('npm', ['run', 'build']);

if (shouldDeploy) {
  run('npx', ['wrangler', 'pages', 'deploy', 'dist', '--project-name', projectName]);
}

if (shouldValidate) {
  validateDeployment(dueArticles.map((article) => article.slug));
}

console.log('Scheduled publishing complete.');
