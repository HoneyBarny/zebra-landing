import type { CollectionEntry } from 'astro:content';

import {
  categoryMeta,
  clusterMeta,
  entityMeta,
  entityMetaBySlug,
  knowledgeEntities,
} from '../data/content-taxonomy';
import { siteConfig } from '../data/site-config';

export type ArticleEntry = CollectionEntry<'articles'>;
export type ArticleStatus = ArticleEntry['data']['status'];
export type KnowledgeEntity = (typeof knowledgeEntities)[number];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function articleUrl(slug: string) {
  return `${siteConfig.routes.blog}${slug}/`;
}

export function categoryUrl(slug: string) {
  return `${siteConfig.routes.blog}category/${slug}/`;
}

export function entityUrl(slug: string) {
  return `${siteConfig.routes.knowledge}${slug}/`;
}

export function authorUrl(slug: string) {
  return `/authors/${slug}/`;
}

export function estimateReadingTime(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function parseDateValue(value?: string) {
  if (!value) return null;
  return value.includes('T') ? new Date(value) : new Date(`${value}T12:00:00`);
}

export function getArticlePublishedDate(article: ArticleEntry) {
  return parseDateValue(article.data.publishedAt) ?? parseDateValue(article.data.scheduledAt) ?? new Date();
}

export function getArticleUpdatedDate(article: ArticleEntry) {
  return parseDateValue(article.data.updatedAt) ?? getArticlePublishedDate(article);
}

export function isArticlePublished(article: ArticleEntry) {
  return article.data.status === 'published' && Boolean(article.data.publishedAt);
}

export function getPublishedArticles(articles: ArticleEntry[]) {
  return articles.filter(isArticlePublished);
}

export function sortArticles(articles: ArticleEntry[]) {
  return [...articles].sort(
    (a, b) => getArticlePublishedDate(b).getTime() - getArticlePublishedDate(a).getTime(),
  );
}

export function getFeaturedArticle(articles: ArticleEntry[]) {
  return sortArticles(articles).find((article) => article.data.featured) ?? sortArticles(articles)[0];
}

function uniqueBySlug<T extends { slug: string }>(items: T[]) {
  return items.filter((item, index) => items.findIndex((candidate) => candidate.slug === item.slug) === index);
}

export function categorySlugFromName(name: string) {
  const match = Object.values(categoryMeta).find((category) => category.name === name);
  return match?.slug ?? slugify(name);
}

export function entitySlugFromName(name: string) {
  const match = entityMeta[name];
  return match?.slug ?? slugify(name);
}

export function getEntityBySlug(slug: string) {
  return entityMetaBySlug[slug];
}

export function getEntities() {
  return [...knowledgeEntities];
}

export function getClusterBySlug(slug: string) {
  return clusterMeta[slug as keyof typeof clusterMeta];
}

export function getEntityClusters(entity: KnowledgeEntity) {
  return entity.clusters
    .map((slug) => getClusterBySlug(slug))
    .filter(Boolean);
}

export function getArticlesForCategory(categorySlug: string, articles: ArticleEntry[]) {
  const category = categoryMeta[categorySlug as keyof typeof categoryMeta];

  if (!category) return [];

  return sortArticles(
    getPublishedArticles(articles).filter((article) => article.data.categories.includes(category.name)),
  );
}

function getArticleEntitySlugs(article: ArticleEntry) {
  return article.data.entities.map(entitySlugFromName);
}

export function getArticlesForEntity(entitySlug: string, articles: ArticleEntry[], count?: number) {
  const entity = getEntityBySlug(entitySlug);

  if (!entity) return [];

  const scored = getPublishedArticles(articles)
    .map((article) => {
      let score = 0;
      const articleCategorySlugs = article.data.categories.map(categorySlugFromName);
      const articleEntitySlugs = getArticleEntitySlugs(article);

      if (articleEntitySlugs.includes(entity.slug)) score += 14;

      const sharedClusters = entity.clusters.filter(
        (cluster) =>
          articleCategorySlugs.includes(cluster) ||
          articleEntitySlugs.some((slug) => getEntityBySlug(slug)?.clusters.includes(cluster)),
      ).length;

      score += sharedClusters * 4;

      const sharedCategories = articleCategorySlugs.filter((slug) =>
        entity.relatedCategorySlugs.includes(slug),
      ).length;
      score += sharedCategories * 3;

      if (slugify(article.data.cluster) === entity.clusters[0]) score += 2;

      return { article, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return getArticlePublishedDate(b.article).getTime() - getArticlePublishedDate(a.article).getTime();
    })
    .map((entry) => entry.article);

  return typeof count === 'number' ? scored.slice(0, count) : scored;
}

export function getEntitiesForArticle(article: ArticleEntry) {
  return uniqueBySlug(
    article.data.entities
      .map(entitySlugFromName)
      .map((slug) => getEntityBySlug(slug))
      .filter(Boolean),
  );
}

export function getRelatedArticles(current: ArticleEntry, articles: ArticleEntry[], count = 4) {
  const currentEntities = getArticleEntitySlugs(current);
  const currentCategorySlugs = current.data.categories.map(categorySlugFromName);

  return getPublishedArticles(articles)
    .filter((article) => article.id !== current.id)
    .map((article) => {
      let score = 0;
      const articleEntities = getArticleEntitySlugs(article);
      const articleCategorySlugs = article.data.categories.map(categorySlugFromName);

      if (slugify(article.data.cluster) === slugify(current.data.cluster)) score += 5;
      if (article.data.category === current.data.category) score += 3;

      const sharedCategories = articleCategorySlugs.filter((slug) =>
        currentCategorySlugs.includes(slug),
      ).length;
      const sharedEntities = articleEntities.filter((slug) => currentEntities.includes(slug)).length;

      score += sharedCategories * 2;
      score += sharedEntities * 4;

      return { article, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return getArticlePublishedDate(b.article).getTime() - getArticlePublishedDate(a.article).getTime();
    })
    .slice(0, count)
    .map((entry) => entry.article);
}

export function getEntityChildren(entity: KnowledgeEntity) {
  return uniqueBySlug(
    knowledgeEntities.filter(
      (candidate) =>
        candidate.slug !== entity.slug &&
        candidate.clusters.some((cluster) => entity.clusters.includes(cluster)),
    ),
  );
}

export function getRelatedEntities(entity: KnowledgeEntity, count = 4) {
  const related = knowledgeEntities
    .filter((candidate) => candidate.slug !== entity.slug)
    .map((candidate) => {
      let score = 0;

      const sharedClusters = candidate.clusters.filter((cluster) =>
        entity.clusters.includes(cluster),
      ).length;
      score += sharedClusters * 4;

      if (candidate.entityType === entity.entityType) score += 2;
      if (candidate.hubSection === entity.hubSection) score += 1;

      return { candidate, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.candidate);

  return uniqueBySlug(related);
}

export function getConditionHubSections(entity: KnowledgeEntity) {
  const children = getEntityChildren(entity);

  const sectionOrder: Array<{
    key: KnowledgeEntity['hubSection'];
    title: string;
  }> = [
    { key: 'symptoms', title: 'Symptoms' },
    { key: 'testing', title: 'Orthostatic testing and vitals' },
    { key: 'doctor-visits', title: 'Doctor visits and appointment prep' },
    { key: 'medication-tracking', title: 'Medication tracking' },
    { key: 'reports', title: 'Reports and summaries' },
    { key: 'daily-management', title: 'Daily management context' },
    { key: 'overlap', title: 'Overlap conditions' },
  ];

  return sectionOrder
    .map((section) => ({
      ...section,
      items: children.filter((child) => child.hubSection === section.key),
    }))
    .filter((section) => section.items.length > 0);
}

export function getFaqSchema(article: ArticleEntry): Record<string, unknown> | null {
  if (!article.data.faq.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.data.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: new URL(entry.item, siteConfig.siteUrl).toString(),
    })),
  };
}

export function getArticleSchema(article: ArticleEntry, canonical: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.data.title,
    description: article.data.metaDescription,
    datePublished: article.data.publishedAt,
    dateModified: article.data.updatedAt ?? article.data.publishedAt,
    image: [new URL(article.data.heroImage, siteConfig.siteUrl).toString()],
    author: {
      '@type': 'Organization',
      name: 'Zebra Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zebra',
      logo: {
        '@type': 'ImageObject',
        url: new URL('/zebra-logo.png', siteConfig.siteUrl).toString(),
      },
    },
    mainEntityOfPage: canonical,
    about: article.data.entities,
    keywords: [article.data.primaryKeyword, ...article.data.secondaryKeywords].join(', '),
  };
}

export function dateLabel(value?: string) {
  if (!value) return 'Not published';

  const stableDate = value.includes('T') ? new Date(value) : new Date(`${value}T12:00:00`);

  return stableDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
