import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

import { authorProfiles, categoryMeta, entityMetaBySlug } from '../data/content-taxonomy';
import { searchPageRoutes } from '../data/search-pages';
import { indexableRoutes, toAbsoluteUrl } from '../data/site-config';
import {
  articleUrl,
  authorUrl,
  categoryUrl,
  entityUrl,
  getPublishedArticles,
} from '../lib/content';

function toDateOnly(value: string | Date) {
  const date = typeof value === 'string' ? new Date(`${value}T12:00:00`) : value;
  return date.toISOString().slice(0, 10);
}

async function getFileDate(...paths: string[]) {
  const stats = await Promise.all(paths.map((path) => stat(join(process.cwd(), path))));
  const latest = stats.reduce(
    (max, entry) => (entry.mtime > max ? entry.mtime : max),
    stats[0].mtime,
  );

  return toDateOnly(latest);
}

export const GET: APIRoute = async () => {
  const articles = getPublishedArticles(await getCollection('articles'));
  const articleLastmodByRoute = new Map(
    articles.map((article) => [
      articleUrl(article.id),
      article.data.updatedAt || article.data.publishedAt || article.data.scheduledAt,
    ]),
  );

  const allArticleDates = articles.map(
    (article) => article.data.updatedAt || article.data.publishedAt || article.data.scheduledAt,
  );
  const latestArticleDate = allArticleDates.sort().at(-1) ?? toDateOnly(new Date());

  const staticRouteDates = new Map<string, string>([
    [
      '/',
      await getFileDate(
        'src/pages/index.astro',
        'src/data/site-content.ts',
      ),
    ],
    [
      '/blog/',
      latestArticleDate,
    ],
    [
      '/knowledge/',
      await getFileDate(
        'src/pages/knowledge/index.astro',
        'src/data/content-taxonomy.ts',
      ),
    ],
    [
      '/privacy/',
      await getFileDate(
        'src/pages/privacy.astro',
        'src/data/site-content.ts',
      ),
    ],
    [
      '/terms/',
      await getFileDate(
        'src/pages/terms.astro',
        'src/data/site-content.ts',
      ),
    ],
    [
      '/support/',
      await getFileDate(
        'src/pages/support.astro',
        'src/data/site-content.ts',
      ),
    ],
    [
      '/authors/',
      await getFileDate(
        'src/pages/authors/index.astro',
        'src/data/content-taxonomy.ts',
      ),
    ],
  ]);

  const categoryRoutes = Object.values(categoryMeta)
    .filter((category) => articles.some((article) => article.data.categories.includes(category.name)))
    .map((category) => {
      const route = categoryUrl(category.slug);
      const lastmod = articles
        .filter((article) => article.data.categories.includes(category.name))
        .map((article) => article.data.updatedAt || article.data.publishedAt)
        .sort()
        .at(-1) ?? latestArticleDate;

      return { route, lastmod };
    });

  const knowledgeRoutes = Object.values(entityMetaBySlug)
    .map((entity) => {
      const route = entityUrl(entity.slug);
      const lastmod = articles
        .filter((article) =>
          article.data.entities.some((articleEntity) => articleEntity.toLowerCase() === entity.name.toLowerCase()),
        )
        .map((article) => article.data.updatedAt || article.data.publishedAt || article.data.scheduledAt)
        .sort()
        .at(-1) ?? staticRouteDates.get('/knowledge/') ?? latestArticleDate;

      return { route, lastmod };
    });

  const authorRoutes = Object.values(authorProfiles).map((author) => {
    const route = authorUrl(author.slug);
    const lastmod = articles
      .filter((article) => article.data.author === author.slug)
      .map((article) => article.data.updatedAt || article.data.publishedAt)
      .sort()
      .at(-1) ?? latestArticleDate;

    return { route, lastmod };
  });

  const urls = [
    ...indexableRoutes.map((route) => ({ route, lastmod: staticRouteDates.get(route) ?? latestArticleDate })),
    ...searchPageRoutes.map((route) => ({ route, lastmod: staticRouteDates.get('/') ?? latestArticleDate })),
    { route: '/authors/', lastmod: staticRouteDates.get('/authors/') ?? latestArticleDate },
    ...authorRoutes,
    ...categoryRoutes,
    ...knowledgeRoutes,
    ...articles.map((article) => ({
      route: articleUrl(article.id),
      lastmod: articleLastmodByRoute.get(articleUrl(article.id)) ?? latestArticleDate,
    })),
  ]
    .map(
      ({ route, lastmod }) =>
        `  <url>\n    <loc>${toAbsoluteUrl(route)}</loc>\n    <lastmod>${toDateOnly(lastmod)}</lastmod>\n  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
