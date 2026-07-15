type FrontmatterValue = string | number | boolean | string[] | Array<Record<string, string>>;

export function parseScalar(raw: string): FrontmatterValue {
  const value = raw.trim();

  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  }

  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+$/.test(value)) return Number(value);

  return value;
}

export function parseBlock(lines: string[]): FrontmatterValue {
  const trimmed = lines.map((line) => line.replace(/^  /, ''));

  if (!trimmed.length) return [];

  if (trimmed[0].startsWith('- ')) {
    const objectList = trimmed.some((line) => /^- [a-zA-Z0-9_-]+:/.test(line));

    if (!objectList) {
      return trimmed
        .filter((line) => line.startsWith('- '))
        .map((line) => parseScalar(line.slice(2)) as string);
    }

    const items: Array<Record<string, string>> = [];
    let current: Record<string, string> | null = null;

    for (const line of trimmed) {
      if (line.startsWith('- ')) {
        if (current) items.push(current);
        current = {};
        const payload = line.slice(2);
        const separator = payload.indexOf(':');
        if (separator !== -1) {
          const key = payload.slice(0, separator).trim();
          const value = payload.slice(separator + 1).trim();
          current[key] = String(parseScalar(value));
        }
      } else if (current && line.startsWith('  ')) {
        const payload = line.trim();
        const separator = payload.indexOf(':');
        if (separator !== -1) {
          const key = payload.slice(0, separator).trim();
          const value = payload.slice(separator + 1).trim();
          current[key] = String(parseScalar(value));
        }
      }
    }

    if (current) items.push(current);
    return items;
  }

  return trimmed.join('\n');
}

export function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!match) {
    throw new Error('Missing frontmatter');
  }

  const frontmatter = match[1];
  const body = source.slice(match[0].length);
  const lines = frontmatter.split('\n');
  const data: Record<string, FrontmatterValue> = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.trim()) continue;
    if (line.startsWith('  ')) continue;

    const separator = line.indexOf(':');
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1);

    if (rawValue.trim()) {
      data[key] = parseScalar(rawValue);
      continue;
    }

    const blockLines: string[] = [];
    let cursor = index + 1;

    while (cursor < lines.length && (lines[cursor].startsWith('  ') || !lines[cursor].trim())) {
      if (lines[cursor].trim()) blockLines.push(lines[cursor]);
      cursor += 1;
    }

    data[key] = parseBlock(blockLines);
    index = cursor - 1;
  }

  return { data, body };
}

export function readFrontmatterParts(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) throw new Error('Missing YAML frontmatter.');

  return {
    frontmatter: match[1],
    body: source.slice(match[0].length),
    block: match[0],
  };
}

export function readField(frontmatter: string, field: string) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*"?([^"\\n]+)"?$`, 'm'));
  return match?.[1]?.trim() ?? null;
}

export function upsertField(frontmatter: string, field: string, value: string, afterField?: string) {
  const line = `${field}: "${value}"`;
  const fieldPattern = new RegExp(`^${field}:.*$`, 'm');

  if (fieldPattern.test(frontmatter)) {
    return frontmatter.replace(fieldPattern, line);
  }

  if (afterField) {
    const afterPattern = new RegExp(`^${afterField}:.*$`, 'm');
    const match = frontmatter.match(afterPattern);

    if (match?.[0]) {
      return frontmatter.replace(afterPattern, `${match[0]}\n${line}`);
    }
  }

  return `${line}\n${frontmatter}`;
}
