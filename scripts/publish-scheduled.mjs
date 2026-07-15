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
const dryRun = args.has('--dry-run');

function todayLabel() {
  return new Date().toISOString().slice(0, 10);
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

function validateDeployment(slugs) {
  for (const slug of slugs) {
    execFileSync('curl', ['-I', '-s', `${siteUrl}/blog/${slug}/`], {
      cwd: rootDir,
      stdio: 'inherit',
    });
  }

  execFileSync('curl', ['-I', '-s', `${siteUrl}/sitemap.xml`], {
    cwd: rootDir,
    stdio: 'inherit',
  });
}

const files = readdirSync(articlesDir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => join(articlesDir, file));

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
