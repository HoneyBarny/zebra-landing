import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

import { authorProfiles, categoryMeta, entityMetaBySlug, knowledgeEntities } from '../data/content-taxonomy';
import { localeRoutes } from '../data/locales';
import { alternatesForPath, localeAlternates } from '../data/locales/shared';
import {
  alternatesForSearchPage,
  localizedSearchPageSlugs,
  localizedSearchPageUrl,
  type SearchLocale,
} from '../data/locales/search-pages';
import { localizedArticleUrl, type ArticleLocale } from '../data/locales/article-translations';
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

type SitemapAlternate = {
  hreflang: string;
  href: string;
};

type SitemapUrl = {
  route: string;
  lastmod: string | Date;
  alternates?: readonly SitemapAlternate[];
};

function absoluteAlternates(alternates: readonly SitemapAlternate[]) {
  return alternates.map((alternate) => ({
    ...alternate,
    href: toAbsoluteUrl(alternate.href),
  }));
}

function sitemapEntry({ route, lastmod, alternates = [] }: SitemapUrl) {
  const alternateLinks = absoluteAlternates(alternates)
    .map(
      (alternate) =>
        `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`,
    )
    .join('\n');

  return [
    '  <url>',
    `    <loc>${toAbsoluteUrl(route)}</loc>`,
    alternateLinks,
    `    <lastmod>${toDateOnly(lastmod)}</lastmod>`,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
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
  const localizedArticles = getPublishedArticles(await getCollection('localizedArticles') as never);
  const indexableArticles = articles.filter((article) => !article.data.noindex);
  const indexableLocalizedArticles = localizedArticles.filter((article) => !article.data.noindex);
  const localizedArticleSlugsByOriginal = new Map<string, Set<ArticleLocale>>();
  indexableLocalizedArticles.forEach((article) => {
    const locales = localizedArticleSlugsByOriginal.get(article.data.originalSlug) ?? new Set<ArticleLocale>();
    locales.add(article.data.locale as ArticleLocale);
    localizedArticleSlugsByOriginal.set(article.data.originalSlug, locales);
  });

  const alternatesForArticle = (originalSlug: string) => {
    const locales = localizedArticleSlugsByOriginal.get(originalSlug);

    if (!locales?.size) {
      return [];
    }

    return [
      { hreflang: 'x-default', href: articleUrl(originalSlug) },
      { hreflang: 'en', href: articleUrl(originalSlug) },
      ...(locales.has('de-de') ? [{ hreflang: 'de-DE', href: localizedArticleUrl('de-de', originalSlug) }] : []),
      ...(locales.has('es-es') ? [{ hreflang: 'es-ES', href: localizedArticleUrl('es-es', originalSlug) }] : []),
      ...(locales.has('fr-fr') ? [{ hreflang: 'fr-FR', href: localizedArticleUrl('fr-fr', originalSlug) }] : []),
    ];
  };

  const articleLastmodByRoute = new Map(
    indexableArticles.map((article) => [
      articleUrl(article.id),
      article.data.updatedAt || article.data.publishedAt || article.data.scheduledAt,
    ]),
  );

  const allArticleDates = indexableArticles.map(
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
        .filter((article) => !article.data.noindex)
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
        .filter((article) => !article.data.noindex)
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
        .filter((article) => !article.data.noindex)
        .filter((article) => article.data.author === author.slug)
        .map((article) => article.data.updatedAt || article.data.publishedAt)
        .sort()
      .at(-1) ?? latestArticleDate;

    return { route, lastmod };
  });

  const urls: SitemapUrl[] = [
    ...indexableRoutes.map((route) => ({
      route,
      lastmod: staticRouteDates.get(route) ?? latestArticleDate,
      alternates: route === '/' ? localeAlternates : alternatesForPath(route),
    })),
    ...Object.values(localeRoutes)
      .filter((route) => route !== '/')
      .map((route) => ({
        route,
        lastmod: staticRouteDates.get('/') ?? latestArticleDate,
        alternates: localeAlternates,
      })),
    ...Object.values(localeRoutes)
      .filter((route) => route !== '/')
      .flatMap((localeRoute) =>
        ['/blog/', '/knowledge/', '/privacy/', '/terms/', '/support/'].map((route) => ({
          route: `${localeRoute}${route.replace(/^\//, '')}`,
          lastmod: staticRouteDates.get(route) ?? latestArticleDate,
          alternates: alternatesForPath(route),
        })),
      ),
    ...Object.values(localeRoutes)
      .filter((route) => route !== '/')
      .flatMap((localeRoute) =>
        knowledgeEntities.map((entity) => ({
          route: `${localeRoute}knowledge/${entity.slug}/`,
          lastmod: staticRouteDates.get('/knowledge/') ?? latestArticleDate,
          alternates: alternatesForPath(`/knowledge/${entity.slug}/`),
        })),
      ),
    ...searchPageRoutes.map((route) => {
      const slug = route.replace(/^\/|\/$/g, '');

      return {
        route,
        lastmod: staticRouteDates.get('/') ?? latestArticleDate,
        alternates: alternatesForSearchPage(slug),
      };
    }),
    ...(['de-de', 'es-es', 'fr-fr'] as const satisfies readonly SearchLocale[]).flatMap((locale) =>
      localizedSearchPageSlugs.map((slug) => ({
        route: localizedSearchPageUrl(locale, slug),
        lastmod: staticRouteDates.get('/') ?? latestArticleDate,
        alternates: alternatesForSearchPage(slug),
      })),
    ),
    { route: '/authors/', lastmod: staticRouteDates.get('/authors/') ?? latestArticleDate },
    ...authorRoutes,
    ...categoryRoutes,
    ...knowledgeRoutes,
    ...indexableArticles.map((article) => ({
      route: articleUrl(article.id),
      lastmod: articleLastmodByRoute.get(articleUrl(article.id)) ?? latestArticleDate,
      alternates: alternatesForArticle(article.id),
    })),
    ...indexableLocalizedArticles.map((article) => ({
      route: localizedArticleUrl(article.data.locale as ArticleLocale, article.data.originalSlug),
      lastmod: article.data.updatedAt || article.data.publishedAt || latestArticleDate,
      alternates: alternatesForArticle(article.data.originalSlug),
    })),
  ]
    .map((url) => sitemapEntry(url))
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
