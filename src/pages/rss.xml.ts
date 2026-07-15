import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { siteConfig } from '../data/site-config';
import { articleUrl, getPublishedArticles, sortArticles } from '../lib/content';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const articles = sortArticles(getPublishedArticles(await getCollection('articles')));

  const items = articles
    .map((article) => {
      const link = new URL(articleUrl(article.id), siteConfig.siteUrl).toString();
      const pubDate = new Date(`${article.data.publishedAt}T12:00:00`).toUTCString();

      return `  <item>
    <title>${escapeXml(article.data.title)}</title>
    <link>${link}</link>
    <guid>${link}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${escapeXml(article.data.metaDescription)}</description>
  </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Zebra Blog</title>
  <link>${siteConfig.siteUrl}/blog/</link>
  <description>Published Zebra articles about symptom tracking, appointment preparation, POTS, dysautonomia, and doctor-ready reports.</description>
${items}
</channel>
</rss>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
