import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    status: z.enum(['draft', 'review', 'scheduled', 'published', 'archived']).default('published'),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    excerpt: z.string(),
    author: z.string(),
    publishedAt: z.string().optional(),
    scheduledAt: z.string().optional(),
    reviewedAt: z.string().optional(),
    updatedAt: z.string().optional(),
    reviewedBy: z.string().default('Zebra Editorial Team'),
    lastReviewed: z.string().optional(),
    nextReview: z.string().optional(),
    featured: z.boolean().default(false),
    cluster: z.string(),
    category: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    entities: z.array(z.string()),
    priority: z.number().int().min(1).max(5).default(3),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    seoTitle: z.string(),
    metaDescription: z.string(),
    ogTitle: z.string(),
    ogDescription: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    ctaNote: z.string(),
    schemaTypes: z.array(z.string()),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { articles };
