import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  clusterMeta,
  entityMetaBySlug,
  knowledgeEntities,
} from '../src/data/content-taxonomy.ts';
import { parseFrontmatter } from './frontmatter.ts';

export type ArticleRecord = {
  slug: string;
  filePath: string;
  url: string;
  title: string;
  status: string;
  subtitle: string;
  description: string;
  excerpt: string;
  cluster: string;
  category: string;
  categories: string[];
  tags: string[];
  entities: string[];
  schemaTypes: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroImage: string;
  heroImageAlt: string;
  seoTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  author: string;
  priority: number;
  publishedAt?: string;
  scheduledAt?: string;
  reviewedAt?: string;
  updatedAt?: string;
  reviewedBy?: string;
  lastReviewed?: string;
  nextReview?: string;
  featured: boolean;
  faq: Array<{ question: string; answer: string }>;
  links: string[];
  body: string;
  bodyText: string;
};

type HealthFinding = {
  slug: string;
  title: string;
  issues: string[];
};

type EntityCoverageRow = {
  entity: (typeof knowledgeEntities)[number];
  articleCount: number;
  inboundLinks: number;
  outboundLinks: number;
  relatedEntities: number;
  clusterMembership: number;
  authorityScore: number;
};

type ClusterReport = {
  cluster: (typeof clusterMeta)[keyof typeof clusterMeta];
  cornerstonePage: string;
  supportingArticles: ArticleRecord[];
  comparisonPages: ArticleRecord[];
  glossaryCoverage: number;
  missingTopics: string[];
  missingEntities: string[];
  faqCoverage: number;
  missingComparisons: string[];
  missingWorkflows: string[];
  authorityScore: number;
};

type OpportunitySeed = {
  id: string;
  title: string;
  primaryKeyword: string;
  searchIntent: 'definition' | 'workflow' | 'comparison' | 'appointment' | 'support';
  cluster: string;
  relatedEntities: string[];
  contentType: 'definition' | 'workflow' | 'comparison' | 'appointment' | 'entity-support';
  missingTopics?: string[];
  rationale: string;
};

export type OpportunityRow = {
  seed: OpportunitySeed;
  relatedEntitySlugs: string[];
  relatedKnowledgePages: (typeof knowledgeEntities)[number][];
  strengthenedArticles: ArticleRecord[];
  strengthenedKnowledgePages: (typeof knowledgeEntities)[number][];
  internalLinksCreated: number;
  entityStrengthGain: number;
  clusterCompletionGain: number;
  aiSearchImpact: number;
  googleSeoImpact: number;
  conversionImpact: number;
  editorialEffort: number;
  authorityGain: number;
  opportunityScore: number;
  overallPriority: number;
  orphanEntitiesResolved: number;
  summaryReason: string;
};

type RefreshRow = {
  article: ArticleRecord;
  refreshScore: number;
  expectedAuthorityGain: number;
  expectedAiGain: number;
  reasons: string[];
};

type TopicAuthorityRow = {
  topic: string;
  currentStrength: number;
  contentDepth: number;
  entityDepth: number;
  knowledgeCoverage: number;
  clusterCompleteness: number;
  aiSearchReadiness: number;
  weakAreas: string[];
};

type IntelligenceAudit = {
  intelligenceExists: string[];
  metricsExist: string[];
  recommendationsExist: string[];
  gapsRemain: string[];
};

const rootDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const productRoot = resolve(rootDir, '..');
const articlesDir = join(rootDir, 'src/content/articles');
const growthDir = join(productRoot, '30_MARKETING/GROWTH_STRATEGY');
const clusterReportsDir = join(growthDir, 'CLUSTER_REPORTS');
const siteUrl = 'https://zebra-landing.pages.dev';
const today = new Date().toISOString().slice(0, 10);
const queueRules = {
  minScheduled: 2,
  targetScheduled: 4,
  publishingCadencePerWeek: 2,
  forecastSlots: 4,
} as const;

const conditionClusterSlugs = ['pots', 'dysautonomia', 'eds', 'fibromyalgia', 'long-covid', 'me-cfs'];

const clusterTopicRequirements: Record<string, string[]> = {
  pots: ['symptoms', 'orthostatic test', 'doctor', 'medication', 'heart rate', 'report'],
  dysautonomia: ['symptoms', 'orthostatic', 'doctor', 'medication', 'report'],
  eds: ['symptoms', 'overlap', 'doctor', 'function', 'report'],
  fibromyalgia: ['fatigue', 'flare', 'doctor', 'function', 'report'],
  'long-covid': ['fatigue', 'dizziness', 'post-exertional', 'doctor', 'report'],
  'me-cfs': ['pem', 'fatigue', 'brain fog', 'doctor', 'report'],
};

const opportunitySeeds: OpportunitySeed[] = [
  {
    id: 'track-fatigue-pots',
    title: 'How to Track Fatigue with POTS',
    primaryKeyword: 'track fatigue with POTS',
    searchIntent: 'workflow',
    cluster: 'pots',
    relatedEntities: ['POTS', 'Fatigue', 'Functional Impact'],
    contentType: 'workflow',
    missingTopics: ['symptoms'],
    rationale: 'Extends the strongest condition cluster into one of its weakest symptom entities.',
  },
  {
    id: 'track-dizziness-lightheadedness',
    title: 'How to Track Dizziness and Lightheadedness Together',
    primaryKeyword: 'track dizziness and lightheadedness',
    searchIntent: 'workflow',
    cluster: 'dysautonomia',
    relatedEntities: ['Dizziness', 'Lightheadedness', 'Orthostatic Intolerance'],
    contentType: 'workflow',
    missingTopics: ['symptoms'],
    rationale: 'Connects high-friction symptom language to the dysautonomia cluster and symptom-tracking workflow.',
  },
  {
    id: 'what-is-symptom-severity',
    title: 'What Is Symptom Severity in a Symptom Tracker?',
    primaryKeyword: 'symptom severity tracker',
    searchIntent: 'definition',
    cluster: 'symptom-tracking',
    relatedEntities: ['Symptom Severity', 'Baseline Symptoms', 'Flare'],
    contentType: 'definition',
    rationale: 'Builds a missing canonical definition around one of the weakest core tracking entities.',
  },
  {
    id: 'track-triggers',
    title: 'How to Track Triggers Without Overcomplicating Your Day',
    primaryKeyword: 'how to track symptom triggers',
    searchIntent: 'workflow',
    cluster: 'symptom-tracking',
    relatedEntities: ['Trigger', 'Flare', 'Brain Fog'],
    contentType: 'workflow',
    rationale: 'Covers a foundational tracking behavior that is present in the product graph but underdeveloped in the article graph.',
  },
  {
    id: 'set-symptom-baseline',
    title: 'How to Set a Symptom Baseline Before a Specialist Visit',
    primaryKeyword: 'symptom baseline before specialist visit',
    searchIntent: 'appointment',
    cluster: 'appointment-preparation',
    relatedEntities: ['Baseline Symptoms', 'Health History', 'Doctor-Ready Report'],
    contentType: 'appointment',
    rationale: 'Bridges daily tracking and appointment preparation with a missing baseline concept.',
  },
  {
    id: 'track-medications-side-effects',
    title: 'How to Track Medications and Side Effects for Chronic Illness',
    primaryKeyword: 'track medications and side effects',
    searchIntent: 'workflow',
    cluster: 'doctor-reports',
    relatedEntities: ['Medication Tracking', 'Doctor-Ready Report', 'Functional Impact'],
    contentType: 'workflow',
    missingTopics: ['medication'],
    rationale: 'Expands a product-adjacent workflow that improves report quality and appointment usefulness.',
  },
  {
    id: 'what-is-mcas',
    title: 'What Is MCAS and Why Do Symptoms Seem to Change So Fast?',
    primaryKeyword: 'what is MCAS',
    searchIntent: 'definition',
    cluster: 'dysautonomia',
    relatedEntities: ['MCAS', 'Trigger', 'Flare'],
    contentType: 'definition',
    rationale: 'Adds a missing overlap-condition definition that already appears in Zebra’s entity graph.',
  },
  {
    id: 'track-mcas-triggers',
    title: 'How to Track MCAS Triggers and Reactions',
    primaryKeyword: 'track MCAS triggers',
    searchIntent: 'workflow',
    cluster: 'dysautonomia',
    relatedEntities: ['MCAS', 'Trigger', 'Flare'],
    contentType: 'workflow',
    rationale: 'Turns a weak overlap entity into a practical workflow page with strong internal-link potential.',
  },
  {
    id: 'what-is-pem',
    title: 'What Is PEM and How Should You Track It?',
    primaryKeyword: 'what is PEM',
    searchIntent: 'definition',
    cluster: 'me-cfs',
    relatedEntities: ['PEM', 'ME/CFS', 'Fatigue'],
    contentType: 'definition',
    missingTopics: ['pem'],
    rationale: 'Fills the clearest definition gap in the ME/CFS cluster and strengthens Long COVID adjacency.',
  },
  {
    id: 'track-long-covid-fatigue-dizziness',
    title: 'How to Track Long COVID Fatigue and Dizziness',
    primaryKeyword: 'track Long COVID fatigue and dizziness',
    searchIntent: 'workflow',
    cluster: 'long-covid',
    relatedEntities: ['Long COVID', 'Fatigue', 'Dizziness'],
    contentType: 'workflow',
    missingTopics: ['fatigue', 'dizziness'],
    rationale: 'Builds a missing practical workflow inside a condition cluster with strong future expansion value.',
  },
  {
    id: 'track-mecfs-without-triggering-pem',
    title: 'How to Track ME/CFS Symptoms Without Triggering PEM',
    primaryKeyword: 'track ME/CFS symptoms without triggering PEM',
    searchIntent: 'workflow',
    cluster: 'me-cfs',
    relatedEntities: ['ME/CFS', 'PEM', 'Fatigue', 'Brain Fog'],
    contentType: 'workflow',
    missingTopics: ['pem', 'fatigue', 'brain fog'],
    rationale: 'Addresses a core tracking objection while expanding two weak entities at once.',
  },
  {
    id: 'track-fibromyalgia-flares',
    title: 'How to Track Fibromyalgia Flares and Daily Function',
    primaryKeyword: 'track fibromyalgia flares',
    searchIntent: 'workflow',
    cluster: 'fibromyalgia',
    relatedEntities: ['Fibromyalgia', 'Flare', 'Functional Impact', 'Fatigue'],
    contentType: 'workflow',
    missingTopics: ['fatigue', 'flare', 'function'],
    rationale: 'Creates the practical fibromyalgia workflow that the current cluster still lacks.',
  },
  {
    id: 'track-eds-overlap',
    title: 'How to Track EDS Symptoms When They Overlap with Dysautonomia',
    primaryKeyword: 'track EDS symptoms with dysautonomia',
    searchIntent: 'workflow',
    cluster: 'eds',
    relatedEntities: ['EDS', 'hEDS', 'Dysautonomia', 'Functional Impact'],
    contentType: 'workflow',
    missingTopics: ['symptoms', 'overlap', 'function'],
    rationale: 'Targets the weakest condition cluster with a workflow tied directly to Zebra’s overlap positioning.',
  },
  {
    id: 'eds-specialist-appointment',
    title: 'What to Track Before an EDS Specialist Appointment',
    primaryKeyword: 'what to track before an EDS specialist appointment',
    searchIntent: 'appointment',
    cluster: 'eds',
    relatedEntities: ['EDS', 'hEDS', 'Health History', 'Doctor-Ready Report'],
    contentType: 'appointment',
    missingTopics: ['doctor', 'report'],
    rationale: 'Adds the missing appointment-prep page required to make the EDS cluster feel complete.',
  },
  {
    id: 'long-covid-appointment',
    title: 'What to Track Before a Long COVID Appointment',
    primaryKeyword: 'what to track before a long covid appointment',
    searchIntent: 'appointment',
    cluster: 'long-covid',
    relatedEntities: ['Long COVID', 'Health History', 'Doctor-Ready Report', 'Fatigue'],
    contentType: 'appointment',
    missingTopics: ['doctor', 'report'],
    rationale: 'Builds conversion-oriented appointment prep in a condition cluster that currently lacks depth.',
  },
  {
    id: 'mecfs-appointment',
    title: 'What to Track Before an ME/CFS Appointment',
    primaryKeyword: 'what to track before an ME/CFS appointment',
    searchIntent: 'appointment',
    cluster: 'me-cfs',
    relatedEntities: ['ME/CFS', 'PEM', 'Health History', 'Doctor-Ready Report'],
    contentType: 'appointment',
    missingTopics: ['doctor', 'report'],
    rationale: 'Creates a clear appointment-prep page for a cluster that currently leans too heavily on shared overlap content.',
  },
  {
    id: 'fibromyalgia-appointment',
    title: 'What to Track Before a Fibromyalgia Appointment',
    primaryKeyword: 'what to track before a fibromyalgia appointment',
    searchIntent: 'appointment',
    cluster: 'fibromyalgia',
    relatedEntities: ['Fibromyalgia', 'Health History', 'Doctor-Ready Report', 'Fatigue'],
    contentType: 'appointment',
    missingTopics: ['doctor', 'report'],
    rationale: 'Pairs fibromyalgia symptom context with Zebra’s strongest conversion narrative.',
  },
  {
    id: 'pots-vs-orthostatic-hypotension',
    title: 'POTS vs Orthostatic Hypotension: What Should You Track?',
    primaryKeyword: 'pots vs orthostatic hypotension',
    searchIntent: 'comparison',
    cluster: 'pots',
    relatedEntities: ['POTS', 'Orthostatic Hypotension', 'Orthostatic Intolerance'],
    contentType: 'comparison',
    rationale: 'Adds a condition comparison that strengthens diagnosis-adjacent search intent without making diagnostic claims.',
  },
  {
    id: 'pots-vs-ist',
    title: 'POTS vs Orthostatic Tachycardia: What Changes Matter?',
    primaryKeyword: 'pots vs orthostatic tachycardia',
    searchIntent: 'comparison',
    cluster: 'pots',
    relatedEntities: ['POTS', 'Orthostatic Tachycardia', 'Tachycardia', 'Palpitations'],
    contentType: 'comparison',
    rationale: 'Introduces a comparison page that supports retrieval around high-intent symptom language.',
  },
  {
    id: 'track-palpitations-tachycardia',
    title: 'How to Track Palpitations and Tachycardia Episodes',
    primaryKeyword: 'track palpitations and tachycardia',
    searchIntent: 'workflow',
    cluster: 'pots',
    relatedEntities: ['Palpitations', 'Tachycardia', 'POTS', 'Orthostatic Intolerance'],
    contentType: 'workflow',
    rationale: 'Converts two currently unsupported symptom entities into a practical tracking page.',
  },
  {
    id: 'track-hydration-salt-compression',
    title: 'How to Track Hydration, Salt, and Compression Garments Together',
    primaryKeyword: 'track hydration salt and compression garments',
    searchIntent: 'workflow',
    cluster: 'dysautonomia',
    relatedEntities: ['Hydration', 'Salt Loading', 'Compression Garments', 'Dysautonomia'],
    contentType: 'workflow',
    missingTopics: ['medication'],
    rationale: 'Captures a high-context self-management workflow with strong relevance to POTS and dysautonomia readers.',
  },
  {
    id: 'track-syncope',
    title: 'How to Track Syncope and Near-Syncope for a Doctor',
    primaryKeyword: 'track syncope for a doctor',
    searchIntent: 'workflow',
    cluster: 'dysautonomia',
    relatedEntities: ['Syncope', 'Lightheadedness', 'Orthostatic Intolerance', 'Doctor-Ready Report'],
    contentType: 'workflow',
    rationale: 'Adds a practical tracking page around a currently unsupported high-friction symptom concept.',
  },
  {
    id: 'track-exercise-intolerance',
    title: 'How to Track Exercise Intolerance Without Losing Context',
    primaryKeyword: 'track exercise intolerance',
    searchIntent: 'workflow',
    cluster: 'long-covid',
    relatedEntities: ['Exercise Intolerance', 'Long COVID', 'ME/CFS', 'Functional Impact'],
    contentType: 'workflow',
    rationale: 'Supports both Long COVID and ME/CFS with a missing functional-tracking workflow.',
  },
  {
    id: 'questions-when-pattern-changes',
    title: 'What Questions to Ask When Your Symptom Pattern Changes',
    primaryKeyword: 'questions to ask when symptom pattern changes',
    searchIntent: 'support',
    cluster: 'appointment-preparation',
    relatedEntities: ['Doctor-Ready Report', 'Health History', 'Trigger'],
    contentType: 'appointment',
    rationale: 'Strengthens conversion around appointment readiness and report usage without introducing medical claims.',
  },
  {
    id: 'build-flare-timeline',
    title: 'How to Build a Doctor-Ready Timeline of Flares',
    primaryKeyword: 'doctor ready flare timeline',
    searchIntent: 'workflow',
    cluster: 'doctor-reports',
    relatedEntities: ['Flare', 'Doctor-Ready Report', 'Health History', 'Symptom Severity'],
    contentType: 'workflow',
    missingTopics: ['report'],
    rationale: 'Connects reporting, symptom severity, and flare context in one conversion-adjacent page.',
  },
  {
    id: 'track-activities-daily-living',
    title: 'How to Track Activities of Daily Living with Chronic Illness',
    primaryKeyword: 'track activities of daily living chronic illness',
    searchIntent: 'workflow',
    cluster: 'symptom-tracking',
    relatedEntities: ['Activities of Daily Living', 'Functional Impact', 'Quality of Life'],
    contentType: 'workflow',
    rationale: 'Builds out functional-impact language that specialists and reports often need but users rarely reconstruct well later.',
  },
  {
    id: 'track-quality-of-life',
    title: 'How to Track Quality of Life Changes for a Specialist',
    primaryKeyword: 'track quality of life for a specialist',
    searchIntent: 'workflow',
    cluster: 'appointment-preparation',
    relatedEntities: ['Quality of Life', 'Functional Impact', 'Health History'],
    contentType: 'workflow',
    rationale: 'Turns an underdeveloped but high-value entity into a practical prep workflow.',
  },
  {
    id: 'what-is-orthostatic-tachycardia',
    title: 'What Is Orthostatic Tachycardia?',
    primaryKeyword: 'what is orthostatic tachycardia',
    searchIntent: 'definition',
    cluster: 'pots',
    relatedEntities: ['Orthostatic Tachycardia', 'Orthostatic Intolerance', 'POTS'],
    contentType: 'definition',
    rationale: 'Adds a missing definition that supports better comparison and symptom-explanation coverage.',
  },
  {
    id: 'what-is-orthostatic-hypotension',
    title: 'What Is Orthostatic Hypotension?',
    primaryKeyword: 'what is orthostatic hypotension',
    searchIntent: 'definition',
    cluster: 'dysautonomia',
    relatedEntities: ['Orthostatic Hypotension', 'Orthostatic Intolerance', 'Dysautonomia'],
    contentType: 'definition',
    rationale: 'Improves definitional coverage in a cluster where symptom-language specificity matters for retrieval.',
  },
  {
    id: 'compare-good-days-bad-days',
    title: 'How to Compare Good Days and Bad Days in a Symptom Journal',
    primaryKeyword: 'compare good days and bad days symptom journal',
    searchIntent: 'workflow',
    cluster: 'symptom-tracking',
    relatedEntities: ['Symptom Severity', 'Baseline Symptoms', 'Health History'],
    contentType: 'workflow',
    rationale: 'Builds practical pattern-recognition content from two weak core tracking entities.',
  },
];

function ensureDir(pathname: string) {
  mkdirSync(pathname, { recursive: true });
}

function stripMarkdown(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractLinks(body: string) {
  return Array.from(body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)).map((match) => match[1]);
}

function asStringArray(value: FrontmatterValue | undefined) {
  return Array.isArray(value) ? (value as string[]) : [];
}

function asFaqArray(value: FrontmatterValue | undefined) {
  return Array.isArray(value) ? (value as Array<{ question: string; answer: string }>) : [];
}

function normalizeToken(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function findEntityByName(name: string) {
  const normalized = normalizeToken(name);
  return knowledgeEntities.find((entity) => {
    if (normalizeToken(entity.name) === normalized) return true;
    return entity.aliases?.some((alias) => normalizeToken(alias) === normalized);
  });
}

function impactLabel(score: number) {
  if (score >= 80) return 'High';
  if (score >= 60) return 'Medium';
  return 'Low';
}

function compareDateDesc(a?: string, b?: string) {
  return new Date(`${b ?? '1970-01-01'}T12:00:00`).getTime() - new Date(`${a ?? '1970-01-01'}T12:00:00`).getTime();
}

function compareDateAsc(a?: string, b?: string) {
  return new Date(`${a ?? '9999-12-31'}T12:00:00`).getTime() - new Date(`${b ?? '9999-12-31'}T12:00:00`).getTime();
}

function addDays(dateValue: string, days: number) {
  const date = new Date(`${dateValue}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatRunwayWeeks(value: number) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : `${rounded.toFixed(1)}`;
}

function formatDateLabel(value?: string) {
  if (!value) return '—';

  return new Date(`${value}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function nextWeekday(startDate: string, weekday: number) {
  const start = new Date(`${startDate}T12:00:00Z`);
  const date = new Date(start);

  do {
    date.setUTCDate(date.getUTCDate() + 1);
  } while (date.getUTCDay() !== weekday);

  return date.toISOString().slice(0, 10);
}

function getQueueHealthIcon(level: 'healthy' | 'warning' | 'critical') {
  if (level === 'healthy') return '🟢';
  if (level === 'warning') return '🟡';
  return '🔴';
}

function getQueueHealthLabel(level: 'healthy' | 'warning' | 'critical') {
  if (level === 'healthy') return 'Healthy';
  if (level === 'warning') return 'Warning';
  return 'Critical';
}

export function loadArticles() {
  return readdirSync(articlesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = join(articlesDir, file);
      const source = readFileSync(filePath, 'utf8');
      const { data, body } = parseFrontmatter(source);
      const slug = file.replace(/\.md$/, '');

      return {
        slug,
        filePath,
        url: `${siteUrl}/blog/${slug}/`,
        title: String(data.title ?? slug),
        status: String(data.status ?? 'published'),
        subtitle: String(data.subtitle ?? ''),
        description: String(data.description ?? ''),
        excerpt: String(data.excerpt ?? ''),
        cluster: String(data.cluster ?? ''),
        category: String(data.category ?? ''),
        categories: asStringArray(data.categories),
        tags: asStringArray(data.tags),
        entities: asStringArray(data.entities),
        schemaTypes: asStringArray(data.schemaTypes),
        primaryKeyword: String(data.primaryKeyword ?? ''),
        secondaryKeywords: asStringArray(data.secondaryKeywords),
        heroImage: String(data.heroImage ?? ''),
        heroImageAlt: String(data.heroImageAlt ?? ''),
        seoTitle: String(data.seoTitle ?? ''),
        metaDescription: String(data.metaDescription ?? ''),
        ogTitle: String(data.ogTitle ?? ''),
        ogDescription: String(data.ogDescription ?? ''),
        author: String(data.author ?? ''),
        priority: Number(data.priority ?? 3),
        publishedAt: data.publishedAt ? String(data.publishedAt) : undefined,
        scheduledAt: data.scheduledAt ? String(data.scheduledAt) : undefined,
        reviewedAt: data.reviewedAt ? String(data.reviewedAt) : undefined,
        updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
        reviewedBy: data.reviewedBy ? String(data.reviewedBy) : undefined,
        lastReviewed: data.lastReviewed ? String(data.lastReviewed) : undefined,
        nextReview: data.nextReview ? String(data.nextReview) : undefined,
        featured: Boolean(data.featured),
        faq: asFaqArray(data.faq),
        links: extractLinks(body),
        body,
        bodyText: stripMarkdown(body),
      } satisfies ArticleRecord;
    });
}

export function getPublishedArticles(articles: ArticleRecord[]) {
  return articles.filter((article) => article.status === 'published' && article.publishedAt);
}

export function getArticleEntitySlugs(article: ArticleRecord) {
  return article.entities
    .map((entityName) => findEntityByName(entityName)?.slug)
    .filter(Boolean) as string[];
}

export function getRelatedArticles(current: ArticleRecord, articles: ArticleRecord[]) {
  const currentEntitySlugs = getArticleEntitySlugs(current);
  const currentCategorySlugs = current.categories.map((value) => value.toLowerCase());

  return articles
    .filter((article) => article.slug !== current.slug)
    .map((article) => {
      let score = 0;
      const articleEntitySlugs = getArticleEntitySlugs(article);
      const articleCategorySlugs = article.categories.map((value) => value.toLowerCase());

      if (article.cluster === current.cluster) score += 5;
      if (article.category === current.category) score += 3;

      const sharedCategories = articleCategorySlugs.filter((value) =>
        currentCategorySlugs.includes(value),
      ).length;
      const sharedEntities = articleEntitySlugs.filter((slug) =>
        currentEntitySlugs.includes(slug),
      ).length;

      score += sharedCategories * 2;
      score += sharedEntities * 4;

      return { article, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return compareDateDesc(a.article.publishedAt, b.article.publishedAt);
    })
    .map((entry) => entry.article);
}

function getEntityRelatedSlugs(entitySlug: string) {
  const entity = entityMetaBySlug[entitySlug];
  if (!entity) return [];

  return knowledgeEntities
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
    .slice(0, 4)
    .map((entry) => entry.candidate.slug);
}

export function getEntityArticles(entitySlug: string, articles: ArticleRecord[]) {
  const entity = entityMetaBySlug[entitySlug];
  if (!entity) return [];
  return articles.filter((article) => getArticleEntitySlugs(article).includes(entitySlug) || article.entities.includes(entity.name));
}

function daysBetween(dateValue: string) {
  const now = new Date(`${today}T00:00:00Z`).getTime();
  const target = new Date(`${dateValue}T00:00:00Z`).getTime();
  return Math.floor((target - now) / (1000 * 60 * 60 * 24));
}

export function countEntityMentionsWithoutLinks(article: ArticleRecord) {
  const linkSet = new Set(article.links);
  const findings: string[] = [];

  for (const entity of knowledgeEntities) {
    const pattern = new RegExp(`\\b${entity.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = article.bodyText.match(pattern);
    if (!matches?.length) continue;

    const expectedPath = `/knowledge/${entity.slug}/`;
    const hasLink = Array.from(linkSet).some((link) => link.includes(expectedPath));

    if (!hasLink) {
      findings.push(`${entity.name} mentioned ${matches.length} time(s) without a knowledge-hub link`);
    }
  }

  return findings;
}

export function buildHealthReport(articles: ArticleRecord[], publishedArticles: ArticleRecord[]) {
  const findings: HealthFinding[] = [];
  const orphanArticles: ArticleRecord[] = [];
  const weakRelated: ArticleRecord[] = [];
  const staleArticles: ArticleRecord[] = [];
  const missingFaq: ArticleRecord[] = [];
  const missingSchema: ArticleRecord[] = [];
  const outdatedMetadata: ArticleRecord[] = [];
  const orphanEntities: string[] = [];

  for (const article of publishedArticles) {
    const issues: string[] = [];
    const related = getRelatedArticles(article, publishedArticles);

    if (related.length === 0) {
      orphanArticles.push(article);
      issues.push('No related articles found from current cluster/category/entity graph');
    }

    if (related.length < 3) {
      weakRelated.push(article);
      issues.push(`Weak related-article set (${related.length} found, target 3+)`);
    }

    if (!article.faq.length) {
      missingFaq.push(article);
      issues.push('Missing FAQ block');
    }

    const needsSchema =
      !article.schemaTypes.length ||
      (article.faq.length > 0 && !article.schemaTypes.includes('FAQPage'));

    if (needsSchema) {
      missingSchema.push(article);
      issues.push('Missing or incomplete schemaTypes');
    }

    const metadataGaps = [
      !article.seoTitle && 'seoTitle',
      !article.metaDescription && 'metaDescription',
      !article.ogTitle && 'ogTitle',
      !article.ogDescription && 'ogDescription',
      !article.heroImageAlt && 'heroImageAlt',
      !article.updatedAt && 'updatedAt',
    ].filter(Boolean) as string[];

    if (metadataGaps.length > 0) {
      outdatedMetadata.push(article);
      issues.push(`Metadata gaps: ${metadataGaps.join(', ')}`);
    }

    if (!article.lastReviewed || !article.nextReview) {
      staleArticles.push(article);
      issues.push('Missing lastReviewed and/or nextReview');
    } else if (daysBetween(article.nextReview) <= 0) {
      staleArticles.push(article);
      issues.push(`Past due for review since ${article.nextReview}`);
    }

    const unlinkedMentions = countEntityMentionsWithoutLinks(article);
    if (unlinkedMentions.length > 0) {
      issues.push(...unlinkedMentions.slice(0, 3));
    }

    if (issues.length > 0) {
      findings.push({
        slug: article.slug,
        title: article.title,
        issues,
      });
    }
  }

  for (const entity of knowledgeEntities) {
    if (getEntityArticles(entity.slug, publishedArticles).length === 0) {
      orphanEntities.push(entity.name);
    }
  }

  const healthScore = Math.max(
    0,
    Math.round(
      100 -
        (
          orphanArticles.length * 4 +
          orphanEntities.length * 1.5 +
          weakRelated.length * 2 +
          staleArticles.length * 1.5 +
          missingFaq.length * 1.5 +
          missingSchema.length * 2 +
          outdatedMetadata.length * 1
        ),
    ),
  );

  return {
    healthScore,
    findings,
    orphanArticles,
    orphanEntities,
    weakRelated,
    staleArticles,
    missingFaq,
    missingSchema,
    outdatedMetadata,
  };
}

export function buildEntityCoverage(articles: ArticleRecord[]) {
  const publishedArticles = getPublishedArticles(articles);

  return knowledgeEntities
    .map((entity) => {
      const relatedArticles = getEntityArticles(entity.slug, publishedArticles);
      const inboundLinks = publishedArticles.filter((article) => {
        const expectedPath = `/knowledge/${entity.slug}/`;
        return article.links.some((link) => link.includes(expectedPath)) || article.entities.includes(entity.name);
      }).length;
      const outboundLinks =
        getEntityRelatedSlugs(entity.slug).length + entity.clusters.length + entity.relatedCategorySlugs.length;
      const authorityScore = Math.min(
        100,
        Math.round(
          relatedArticles.length * 12 +
            inboundLinks * 6 +
            outboundLinks * 3 +
            entity.clusters.length * 5,
        ),
      );

      return {
        entity,
        articleCount: relatedArticles.length,
        inboundLinks,
        outboundLinks,
        relatedEntities: getEntityRelatedSlugs(entity.slug).length,
        clusterMembership: entity.clusters.length,
        authorityScore,
      } satisfies EntityCoverageRow;
    })
    .sort((a, b) => b.authorityScore - a.authorityScore);
}

export function buildClusterReports(articles: ArticleRecord[]) {
  const publishedArticles = getPublishedArticles(articles);

  return Object.values(clusterMeta)
    .filter((cluster) => conditionClusterSlugs.includes(cluster.slug))
    .map((cluster) => {
      const clusterEntities = knowledgeEntities.filter((entity) => entity.clusters.includes(cluster.slug));
      const supportingArticles = publishedArticles.filter((article) => {
        const entitySlugs = getArticleEntitySlugs(article);
        return (
          article.cluster.toLowerCase() === cluster.name.toLowerCase() ||
          article.category.toLowerCase() === cluster.name.toLowerCase() ||
          article.categories.some((category) => category.toLowerCase() === cluster.name.toLowerCase()) ||
          entitySlugs.some((slug) => clusterEntities.some((entity) => entity.slug === slug))
        );
      });
      const comparisonPages = publishedArticles.filter(
        (article) =>
          article.categories.some((category) => category.toLowerCase() === 'comparisons') &&
          `${article.title} ${article.bodyText}`.toLowerCase().includes(cluster.name.toLowerCase()),
      );
      const glossaryCoverage = clusterEntities.length;
      const cornerstonePage = entityMetaBySlug[cluster.slug]?.name ?? supportingArticles[0]?.title ?? cluster.name;
      const haystack = [
        ...supportingArticles.map((article) => `${article.title} ${article.bodyText}`.toLowerCase()),
        ...clusterEntities.map((entity) => `${entity.name} ${entity.summary} ${entity.definition}`.toLowerCase()),
      ].join(' ');
      const missingTopics = (clusterTopicRequirements[cluster.slug] ?? []).filter(
        (topic) => !haystack.includes(topic.toLowerCase()),
      );
      const missingEntities = clusterEntities
        .filter((entity) => getEntityArticles(entity.slug, publishedArticles).length === 0)
        .map((entity) => entity.name);
      const faqCoverage = supportingArticles.filter((article) => article.faq.length > 0).length;
      const missingComparisons =
        comparisonPages.length > 0 ? [] : [`Add at least one comparison page for ${cluster.name}`];
      const missingWorkflows = supportingArticles.some((article) => article.title.toLowerCase().includes('how to track'))
        ? []
        : [`Add a practical tracking workflow for ${cluster.name}`];
      const authorityScore = Math.min(
        100,
        Math.round(supportingArticles.length * 10 + glossaryCoverage * 6 + comparisonPages.length * 8),
      );

      return {
        cluster,
        cornerstonePage,
        supportingArticles,
        comparisonPages,
        glossaryCoverage,
        missingTopics,
        missingEntities,
        faqCoverage,
        missingComparisons,
        missingWorkflows,
        authorityScore,
      } satisfies ClusterReport;
    });
}

export function buildAiSearchAudit(articles: ArticleRecord[]) {
  const publishedArticles = getPublishedArticles(articles);

  const rows = publishedArticles.map((article) => {
    const intro = article.body.split(/\n##\s+/)[0];
    const introWords = stripMarkdown(intro).split(/\s+/).filter(Boolean).length;
    const answerFirst = introWords >= 40 && introWords <= 180 ? 100 : introWords > 0 ? 70 : 0;
    const entityCoverage = Math.min(100, article.entities.length * 18);
    const faqQuality = article.faq.length >= 4 ? 100 : article.faq.length > 0 ? 60 : 0;
    const extractability =
      introWords >= 45 && introWords <= 90 ? 95 : introWords >= 25 && introWords <= 140 ? 75 : 45;
    const semanticCompleteness = Math.min(
      100,
      article.categories.length * 18 + article.entities.length * 10 + article.schemaTypes.length * 6,
    );
    const comparisonReady =
      article.title.toLowerCase().includes(' vs ') || article.body.includes('| --- |')
        ? 100
        : article.categories.some((category) => category === 'Comparisons')
          ? 80
          : 55;
    const definitionQuality = /^what is\b/i.test(article.title)
      ? 100
      : intro.toLowerCase().includes(' is ')
        ? 82
        : 60;

    const score = Math.round(
      (answerFirst +
        entityCoverage +
        faqQuality +
        extractability +
        semanticCompleteness +
        comparisonReady +
        definitionQuality) /
        7,
    );

    return {
      article,
      answerFirst,
      entityCoverage,
      faqQuality,
      extractability,
      semanticCompleteness,
      comparisonReady,
      definitionQuality,
      score,
    };
  });

  const overallScore = rows.length
    ? Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length)
    : 0;

  return { rows, overallScore };
}

export function buildReviewQueue(articles: ArticleRecord[]) {
  const publishedArticles = getPublishedArticles(articles);

  return publishedArticles
    .map((article) => {
      const reason = !article.nextReview
        ? 'Missing nextReview'
        : daysBetween(article.nextReview) <= 0
          ? 'Past due'
          : !article.lastReviewed
            ? 'Missing lastReviewed'
            : '';

      return {
        article,
        reason,
      };
    })
    .filter((entry) => entry.reason)
    .sort((a, b) => a.article.priority - b.article.priority || compareDateDesc(a.article.nextReview, b.article.nextReview));
}

export function buildDashboard(
  articles: ArticleRecord[],
  healthScore: number,
  entityCoverageScore: number,
  aiScore: number,
  clusterReports: ClusterReport[],
) {
  const statuses = ['draft', 'review', 'scheduled', 'published', 'archived'] as const;
  const publishedArticles = getPublishedArticles(articles);
  const statusCounts = Object.fromEntries(
    statuses.map((status) => [status, articles.filter((article) => article.status === status).length]),
  ) as Record<(typeof statuses)[number], number>;
  const scheduledArticles = articles
    .filter((article) => article.status === 'scheduled' && article.scheduledAt)
    .sort((a, b) => compareDateAsc(a.scheduledAt, b.scheduledAt));
  const nextScheduled = scheduledArticles[0];
  const orphanPages = publishedArticles.filter((article) => getRelatedArticles(article, publishedArticles).length === 0).length;
  const clusterCoverage = Math.round(
    clusterReports.reduce((sum, cluster) => sum + cluster.authorityScore, 0) / Math.max(1, clusterReports.length),
  );
  const runwayWeeks = statusCounts.scheduled / queueRules.publishingCadencePerWeek;
  const queueHealthLevel =
    statusCounts.scheduled === 0
      ? 'critical'
      : statusCounts.scheduled >= queueRules.targetScheduled
        ? 'healthy'
      : 'warning';
  const queueHealthReasons: string[] = [];

  if (statusCounts.scheduled === 0) {
    queueHealthReasons.push('Publishing has stopped because there are no scheduled articles.');
  } else if (statusCounts.scheduled < queueRules.minScheduled) {
    queueHealthReasons.push('Publishing queue running low.');
  } else if (statusCounts.scheduled < queueRules.targetScheduled) {
    queueHealthReasons.push(`Scheduled queue is below the target of ${queueRules.targetScheduled}.`);
  }

  if (runwayWeeks < 1) {
    queueHealthReasons.push('Publishing runway is below one week and needs attention.');
  }

  const recommendation =
    statusCounts.scheduled === 0
      ? 'Generate new scheduled content immediately.'
      : statusCounts.scheduled === 1
        ? 'Publishing queue is running low. Generate scheduled content immediately.'
        : statusCounts.scheduled === 2
          ? 'Generate 2 new scheduled articles.'
          : statusCounts.scheduled === 3
            ? 'Generate 1 scheduled article.'
            : 'No action required.';

  const forecastDates = [
    nextWeekday(today, 2),
    nextWeekday(nextWeekday(today, 2), 5),
    nextWeekday(nextWeekday(nextWeekday(today, 2), 5), 2),
    nextWeekday(nextWeekday(nextWeekday(nextWeekday(today, 2), 5), 2), 5),
  ];
  const forecastLabels = ['Next Tuesday', 'Next Friday', 'Following Tuesday', 'Following Friday'] as const;
  const queueForecast = forecastDates.map((date, index) => {
    const article = scheduledArticles.find((entry) => entry.scheduledAt === date);
    return {
      slot: forecastLabels[index],
      date,
      article,
      gap: !article,
    };
  });

  return {
    statusCounts,
    scheduledArticles,
    totalArticles: articles.length,
    publishedThisMonth: publishedArticles.filter((article) => article.publishedAt?.startsWith(today.slice(0, 7))).length,
    nextScheduled,
    totalEntities: knowledgeEntities.length,
    missingEntities: knowledgeEntities.filter((entity) => getEntityArticles(entity.slug, publishedArticles).length === 0).length,
    clusterCoverage,
    orphanPages,
    schemaCoverage: Math.round(
      (publishedArticles.filter((article) => article.schemaTypes.length > 0).length / Math.max(1, publishedArticles.length)) *
        100,
    ),
    internalLinkCoverage: Math.round(
      (publishedArticles.filter((article) => article.links.some((link) => link.includes('/blog/') || link.includes('/knowledge/'))).length /
        Math.max(1, publishedArticles.length)) *
        100,
    ),
    queueHealthLevel,
    queueHealthLabel: getQueueHealthLabel(queueHealthLevel),
    queueHealthIcon: getQueueHealthIcon(queueHealthLevel),
    queueHealthReasons,
    publishingRunwayWeeks: runwayWeeks,
    publishingRunwayLabel: `${formatRunwayWeeks(runwayWeeks)} week${Math.round(runwayWeeks * 10) / 10 === 1 ? '' : 's'}`,
    queueForecast,
    recommendation,
    healthScore,
    entityCoverageScore,
    aiScore,
    overallReadiness: Math.round((healthScore + entityCoverageScore + aiScore + clusterCoverage) / 4),
  };
}

function normalizeLinksToScore(linkCount: number) {
  return Math.min(100, linkCount * 4);
}

function getEntityCoverageMap(rows: EntityCoverageRow[]) {
  return new Map(rows.map((row) => [row.entity.slug, row]));
}

function getClusterReportMap(rows: ClusterReport[]) {
  return new Map(rows.map((row) => [row.cluster.slug, row]));
}

function buildIntelligenceAudit(): IntelligenceAudit {
  return {
    intelligenceExists: [
      'Content health scoring for orphans, schema, FAQ, metadata, and review state',
      'Entity coverage scoring with article, link, and authority signals',
      'Cluster reports for six major condition clusters',
      'AI Search scoring at the article level',
      'Organic dashboard covering publishing, knowledge, SEO, and AI Search',
    ],
    metricsExist: [
      'Health score',
      'Entity authority score',
      'Cluster authority score',
      'AI Search score',
      'Internal-link coverage',
      'Schema coverage',
      'Review status metadata',
    ],
    recommendationsExist: [
      'Weak entities to expand',
      'Unlinked entity mentions to fix',
      'Missing cluster topics',
      'Articles needing review metadata or refresh',
    ],
    gapsRemain: [
      'No scored next-best article engine',
      'No topical authority map across conditions, symptoms, and workflows',
      'No cluster-completion engine that explains what would make each cluster authoritative',
      'No internal-link impact forecasting for future articles',
      'No command-center dashboard that resolves one clear next action',
    ],
  };
}

function countUnlinkedEntityMentionsForEntity(article: ArticleRecord, entitySlug: string) {
  const entity = entityMetaBySlug[entitySlug];
  if (!entity) return 0;
  const expectedPath = `/knowledge/${entity.slug}/`;
  if (article.links.some((link) => link.includes(expectedPath))) return 0;
  const pattern = new RegExp(`\\b${entity.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
  return article.bodyText.match(pattern)?.length ?? 0;
}

function scoreOpportunity(
  seed: OpportunitySeed,
  publishedArticles: ArticleRecord[],
  entityCoverageMap: Map<string, EntityCoverageRow>,
  clusterReportMap: Map<string, ClusterReport>,
) {
  const relatedKnowledgePages = seed.relatedEntities
    .map((name) => findEntityByName(name))
    .filter(Boolean) as (typeof knowledgeEntities)[number][];
  const relatedEntitySlugs = relatedKnowledgePages.map((entity) => entity.slug);

  const strengthenedArticles = publishedArticles
    .map((article) => {
      let score = 0;
      if (article.cluster.toLowerCase() === seed.cluster.toLowerCase()) score += 4;
      if (article.categories.some((category) => normalizeToken(category) === normalizeToken(seed.cluster))) score += 2;
      const articleEntitySlugs = getArticleEntitySlugs(article);
      const sharedEntities = articleEntitySlugs.filter((slug) => relatedEntitySlugs.includes(slug)).length;
      score += sharedEntities * 4;
      const matchingMentions = relatedEntitySlugs.reduce(
        (sum, entitySlug) => sum + countUnlinkedEntityMentionsForEntity(article, entitySlug),
        0,
      );
      score += Math.min(4, matchingMentions);
      if (normalizeToken(`${article.title} ${article.bodyText}`).includes(normalizeToken(seed.primaryKeyword))) score += 1;
      return { article, score, matchingMentions };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return compareDateDesc(a.article.publishedAt, b.article.publishedAt);
    });

  const strengthenedKnowledgePages = relatedKnowledgePages;
  const directInternalLinks = strengthenedArticles.reduce(
    (sum, entry) => sum + (entry.matchingMentions > 0 ? 1 : 0),
    0,
  );
  const internalLinksCreated =
    strengthenedArticles.length + strengthenedKnowledgePages.length + directInternalLinks;

  const entityStrengthGain = Math.min(
    100,
    relatedEntitySlugs.reduce((sum, slug) => {
      const row = entityCoverageMap.get(slug);
      if (!row) return sum + 10;
      if (row.articleCount === 0) return sum + 22;
      if (row.authorityScore < 35) return sum + 18;
      if (row.authorityScore < 50) return sum + 14;
      return sum + 8;
    }, 0),
  );

  const clusterReport = clusterReportMap.get(seed.cluster);
  const matchedMissingTopics = (seed.missingTopics ?? []).filter((topic) =>
    clusterReport?.missingTopics.includes(topic),
  ).length;
  const clusterCompletionGain = Math.min(
    100,
    matchedMissingTopics * 20 +
      (clusterReport ? Math.max(0, 100 - clusterReport.authorityScore) / 2 : 18) +
      (clusterReport?.missingEntities.some((name) => seed.relatedEntities.includes(name)) ? 16 : 0),
  );

  const definitionBonus = seed.contentType === 'definition' ? 18 : 0;
  const comparisonBonus = seed.contentType === 'comparison' ? 14 : 0;
  const answerGapBonus = relatedEntitySlugs.some((slug) => (entityCoverageMap.get(slug)?.articleCount ?? 0) === 0) ? 12 : 0;
  const aiSearchImpact = Math.min(
    100,
    44 + definitionBonus + comparisonBonus + answerGapBonus + Math.round(entityStrengthGain * 0.28),
  );

  const googleSeoImpact = Math.min(
    100,
    42 +
      matchedMissingTopics * 11 +
      Math.round(entityStrengthGain * 0.24) +
      Math.round(normalizeLinksToScore(internalLinksCreated) * 0.18),
  );

  const conversionImpact = Math.min(
    100,
    seed.contentType === 'appointment'
      ? 92
      : seed.contentType === 'workflow'
        ? 82
        : seed.contentType === 'comparison'
          ? 72
          : seed.relatedEntities.includes('Doctor-Ready Report')
            ? 88
            : 62,
  );

  const editorialEffort =
    seed.contentType === 'definition'
      ? 28
      : seed.contentType === 'comparison'
        ? 52
        : seed.relatedEntities.length >= 4
          ? 48
          : 38;

  const authorityGain = Math.min(
    100,
    Math.round(entityStrengthGain * 0.55 + clusterCompletionGain * 0.45),
  );

  const opportunityScore = Math.round(
    (aiSearchImpact +
      googleSeoImpact +
      normalizeLinksToScore(internalLinksCreated) +
      entityStrengthGain +
      clusterCompletionGain +
      conversionImpact) /
      6,
  );

  const overallPriority = Math.round(opportunityScore * 0.8 + (100 - editorialEffort) * 0.2);
  const orphanEntitiesResolved = relatedEntitySlugs.filter(
    (slug) => (entityCoverageMap.get(slug)?.articleCount ?? 0) === 0,
  ).length;
  const summaryReason = `${orphanEntitiesResolved} unsupported entities, ${strengthenedArticles.length} existing articles, ${internalLinksCreated} likely links, ${impactLabel(aiSearchImpact)} AI impact`;

  return {
    seed,
    relatedEntitySlugs,
    relatedKnowledgePages,
    strengthenedArticles: strengthenedArticles.map((entry) => entry.article),
    strengthenedKnowledgePages,
    internalLinksCreated,
    entityStrengthGain,
    clusterCompletionGain,
    aiSearchImpact,
    googleSeoImpact,
    conversionImpact,
    editorialEffort,
    authorityGain,
    opportunityScore,
    overallPriority,
    orphanEntitiesResolved,
    summaryReason,
  } satisfies OpportunityRow;
}

export function buildOpportunityEngine(articles: ArticleRecord[]) {
  const publishedArticles = getPublishedArticles(articles);
  const entityCoverage = buildEntityCoverage(articles);
  const clusterReports = buildClusterReports(articles);
  const entityCoverageMap = getEntityCoverageMap(entityCoverage);
  const clusterReportMap = getClusterReportMap(clusterReports);
  const existingTopics = new Set(
    articles
      .filter((article) => article.status !== 'archived')
      .flatMap((article) => [
        normalizeToken(article.slug),
        normalizeToken(article.title),
        normalizeToken(article.primaryKeyword),
      ]),
  );

  return opportunitySeeds
    .filter((seed) => {
      const topicKeys = [
        normalizeToken(seed.id),
        normalizeToken(seed.title),
        normalizeToken(seed.primaryKeyword),
      ];

      return !topicKeys.some((key) => existingTopics.has(key));
    })
    .map((seed) => scoreOpportunity(seed, publishedArticles, entityCoverageMap, clusterReportMap))
    .sort((a, b) => {
      if (b.overallPriority !== a.overallPriority) return b.overallPriority - a.overallPriority;
      return b.opportunityScore - a.opportunityScore;
    });
}

export function buildTopicalAuthorityMap(
  articles: ArticleRecord[],
  entityCoverage: EntityCoverageRow[],
  clusterReports: ClusterReport[],
  aiAudit: ReturnType<typeof buildAiSearchAudit>,
) {
  const publishedArticles = getPublishedArticles(articles);
  const entityCoverageMap = getEntityCoverageMap(entityCoverage);
  const clusterReportMap = getClusterReportMap(clusterReports);

  const topicDefinitions = [
    { topic: 'POTS', cluster: 'pots', entity: 'pots' },
    { topic: 'Dysautonomia', cluster: 'dysautonomia', entity: 'dysautonomia' },
    { topic: 'EDS', cluster: 'eds', entity: 'eds' },
    { topic: 'Fibromyalgia', cluster: 'fibromyalgia', entity: 'fibromyalgia' },
    { topic: 'Long COVID', cluster: 'long-covid', entity: 'long-covid' },
    { topic: 'ME/CFS', cluster: 'me-cfs', entity: 'me-cfs' },
    { topic: 'Brain Fog', entity: 'brain-fog' },
    { topic: 'Fatigue', entity: 'fatigue' },
    { topic: 'Medication Tracking', entity: 'medication-tracking' },
    { topic: 'Doctor Reports', cluster: 'doctor-reports' },
    { topic: 'Appointment Preparation', cluster: 'appointment-preparation' },
  ];

  return topicDefinitions.map((definition) => {
    const cluster = definition.cluster ? clusterReportMap.get(definition.cluster) : undefined;
    const entity = definition.entity ? entityCoverageMap.get(definition.entity) : undefined;
    const clusterConfig = definition.cluster ? clusterMeta[definition.cluster as keyof typeof clusterMeta] : undefined;
    const relatedArticles = publishedArticles.filter((article) => {
      const entitySlugs = getArticleEntitySlugs(article);
      const normalizedCluster = definition.cluster ? normalizeToken(definition.cluster) : '';
      return (
        (definition.cluster &&
          (normalizeToken(article.cluster) === normalizedCluster ||
            normalizeToken(article.category) === normalizedCluster ||
            article.categories.some((category) => normalizeToken(category) === normalizedCluster) ||
            (clusterConfig ? normalizeToken(article.cluster) === normalizeToken(clusterConfig.name) : false) ||
            (clusterConfig ? normalizeToken(article.category) === normalizeToken(clusterConfig.name) : false) ||
            (clusterConfig
              ? article.categories.some((category) => normalizeToken(category) === normalizeToken(clusterConfig.name))
              : false))) ||
        (definition.entity && entitySlugs.includes(definition.entity))
      );
    });
    const relatedAiRows = aiAudit.rows.filter((row) =>
      relatedArticles.some((article) => article.slug === row.article.slug),
    );
    const aiSearchReadiness = relatedAiRows.length
      ? Math.round(relatedAiRows.reduce((sum, row) => sum + row.score, 0) / relatedAiRows.length)
      : 40;
    const clusterCompleteness = cluster
      ? Math.max(0, 100 - cluster.missingTopics.length * 12 - cluster.missingEntities.length * 4)
      : definition.cluster
        ? Math.min(
            100,
            relatedArticles.length * 12 +
              relatedArticles.filter((article) => article.faq.length > 0).length * 6 +
              relatedArticles.filter((article) => article.schemaTypes.length > 0).length * 4,
          )
      : entity
        ? Math.min(100, entity.authorityScore + entity.articleCount * 5)
        : 0;
    const knowledgeCoverage = definition.entity
      ? 100
      : cluster
        ? Math.min(100, cluster.glossaryCoverage * 14)
        : definition.cluster
          ? 70
        : 0;
    const currentStrength = Math.round(
      ((cluster?.authorityScore ?? 50) + (entity?.authorityScore ?? 50) + aiSearchReadiness + clusterCompleteness) /
        4,
    );
    const weakAreas: string[] = [];
    if (cluster && cluster.missingTopics.length > 0) weakAreas.push(`Missing topics: ${cluster.missingTopics.join(', ')}`);
    if (cluster && cluster.missingEntities.length > 0) weakAreas.push(`Weak entities: ${cluster.missingEntities.join(', ')}`);
    if (!entity && relatedArticles.length < 2) weakAreas.push('Low article depth');
    if (entity && entity.articleCount === 0) weakAreas.push('No dedicated article support yet');
    if (aiSearchReadiness < 80) weakAreas.push('AI-answer coverage can improve');

    return {
      topic: definition.topic,
      currentStrength,
      contentDepth: relatedArticles.length,
      entityDepth: definition.entity
        ? 1 + getEntityRelatedSlugs(definition.entity).length
        : cluster?.glossaryCoverage ?? 0,
      knowledgeCoverage,
      clusterCompleteness,
      aiSearchReadiness,
      weakAreas,
    } satisfies TopicAuthorityRow;
  });
}

export function buildRefreshPriority(articles: ArticleRecord[], aiAudit: ReturnType<typeof buildAiSearchAudit>) {
  const publishedArticles = getPublishedArticles(articles);

  return publishedArticles
    .map((article) => {
      const aiRow = aiAudit.rows.find((row) => row.article.slug === article.slug);
      const missingEntityLinks = countEntityMentionsWithoutLinks(article);
      const reasons: string[] = [];

      if ((aiRow?.faqQuality ?? 100) < 100) reasons.push('FAQ block could be expanded for better extraction');
      if ((aiRow?.comparisonReady ?? 100) < 80 && article.categories.includes('Comparisons')) {
        reasons.push('Comparison structure can be made more extractable');
      }
      if (missingEntityLinks.length > 0) reasons.push(`Add inline knowledge links for ${missingEntityLinks.length} entity mention groups`);
      if ((aiRow?.definitionQuality ?? 100) < 82) reasons.push('Intro can become a cleaner definition or answer-first summary');

      const refreshScore = Math.round(
        Math.max(
          0,
          100 -
            ((aiRow?.score ?? 100) * 0.45 + Math.max(0, 100 - missingEntityLinks.length * 12) * 0.55),
        ),
      );

      return {
        article,
        refreshScore,
        expectedAuthorityGain: Math.min(100, 28 + missingEntityLinks.length * 8),
        expectedAiGain: Math.min(100, 20 + Math.max(0, 90 - (aiRow?.score ?? 90))),
        reasons,
      } satisfies RefreshRow;
    })
    .filter((row) => row.reasons.length > 0)
    .sort((a, b) => b.refreshScore - a.refreshScore)
    .slice(0, 12);
}

export function buildBundle(articles = loadArticles()) {
  const publishedArticles = getPublishedArticles(articles);
  const health = buildHealthReport(articles, publishedArticles);
  const entityCoverage = buildEntityCoverage(articles);
  const entityCoverageScore = entityCoverage.length
    ? Math.round(entityCoverage.reduce((sum, row) => sum + row.authorityScore, 0) / entityCoverage.length)
    : 0;
  const clusterReports = buildClusterReports(articles);
  const aiAudit = buildAiSearchAudit(articles);
  const reviewQueue = buildReviewQueue(articles);
  const dashboard = buildDashboard(
    articles,
    health.healthScore,
    entityCoverageScore,
    aiAudit.overallScore,
    clusterReports,
  );
  const intelligenceAudit = buildIntelligenceAudit();
  const opportunities = buildOpportunityEngine(articles);
  const topicalAuthorityMap = buildTopicalAuthorityMap(articles, entityCoverage, clusterReports, aiAudit);
  const refreshPriority = buildRefreshPriority(articles, aiAudit);

  return {
    today,
    articles,
    publishedArticles,
    health,
    entityCoverage,
    entityCoverageScore,
    clusterReports,
    aiAudit,
    reviewQueue,
    dashboard,
    intelligenceAudit,
    opportunities,
    topicalAuthorityMap,
    refreshPriority,
  };
}

function renderContentHealthReport(health: ReturnType<typeof buildHealthReport>) {
  return `# Content Health Report

Updated: ${today}

## Overall health score

${health.healthScore}/100

## Summary

- Orphan articles: ${health.orphanArticles.length}
- Orphan entities: ${health.orphanEntities.length}
- Weak related-article sets: ${health.weakRelated.length}
- Stale or review-incomplete articles: ${health.staleArticles.length}
- Articles missing FAQ: ${health.missingFaq.length}
- Articles missing schema coverage: ${health.missingSchema.length}
- Articles with metadata gaps: ${health.outdatedMetadata.length}

## High-priority findings

${health.findings.slice(0, 12).map((finding) => `### ${finding.title}\n- ${finding.issues.join('\n- ')}`).join('\n\n') || 'No critical content-health issues found.'}

## Orphan entities

${health.orphanEntities.length ? health.orphanEntities.map((entity) => `- ${entity}`).join('\n') : 'None'}
`;
}

function renderEntityCoverageReport(rows: EntityCoverageRow[]) {
  const score = rows.length
    ? Math.round(rows.reduce((sum, row) => sum + row.authorityScore, 0) / rows.length)
    : 0;
  const weak = rows.filter((row) => row.authorityScore < 35);

  return `# Entity Coverage Report

Updated: ${today}

## Overall entity coverage score

${score}/100

## Coverage table

| Entity | Article count | Inbound links | Outbound links | Related entities | Cluster membership | Authority score |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
${rows.map((row) => `| ${row.entity.name} | ${row.articleCount} | ${row.inboundLinks} | ${row.outboundLinks} | ${row.relatedEntities} | ${row.clusterMembership} | ${row.authorityScore} |`).join('\n')}

## Weak entities

${weak.length ? weak.map((row) => `- ${row.entity.name}: ${row.authorityScore}/100`).join('\n') : 'None'}

## Recommended next expansions

${weak.slice(0, 10).map((row) => `- ${row.entity.name}`).join('\n') || 'Current entity coverage is balanced.'}
`;
}

function renderInternalLinkAudit(articles: ArticleRecord[]) {
  const publishedArticles = getPublishedArticles(articles);
  const sections = publishedArticles.map((article) => {
    const missingEntityLinks = countEntityMentionsWithoutLinks(article);
    const relatedCount = getRelatedArticles(article, publishedArticles).length;
    const issues: string[] = [];

    if (missingEntityLinks.length > 0) {
      issues.push(...missingEntityLinks.slice(0, 5));
    }

    if (relatedCount < 3) {
      issues.push(`Related-article section is weak (${relatedCount} suggestions)`);
    }

    if (!article.links.some((link) => link.includes('/knowledge/'))) {
      issues.push('No manual knowledge-hub links found in body copy');
    }

    if (!article.links.some((link) => link.includes('/blog/'))) {
      issues.push('No manual article-to-article links found in body copy');
    }

    return { article, issues };
  });

  return `# Internal Link Audit

Updated: ${today}

## Summary

- Articles checked: ${publishedArticles.length}
- Articles with opportunities: ${sections.filter((section) => section.issues.length > 0).length}

## Recommendations by article

${sections
  .filter((section) => section.issues.length > 0)
  .map((section) => `### ${section.article.title}\n- ${section.issues.join('\n- ')}`)
  .join('\n\n') || 'No internal-link issues detected.'}
`;
}

function renderClusterReport(entry: ClusterReport) {
  return `# ${entry.cluster.name} Cluster Report

Updated: ${today}

## Authority score

${entry.authorityScore}/100

## Cornerstone page

- ${entry.cornerstonePage}

## Supporting articles

${entry.supportingArticles.length ? entry.supportingArticles.map((article) => `- ${article.title}`).join('\n') : 'None'}

## Comparison pages

${entry.comparisonPages.length ? entry.comparisonPages.map((article) => `- ${article.title}`).join('\n') : 'None'}

## Glossary coverage

- ${entry.glossaryCoverage} entity page(s)

## Missing topics

${entry.missingTopics.length ? entry.missingTopics.map((topic) => `- ${topic}`).join('\n') : 'No major coverage gaps detected from the current requirement set.'}
`;
}

function renderAiSearchReport(audit: ReturnType<typeof buildAiSearchAudit>) {
  return `# AI Search Report

Updated: ${today}

## Overall AI Search score

${audit.overallScore}/100

## Article scores

| Article | Answer-first | Entity coverage | FAQ quality | Extractability | Semantic completeness | Comparison readiness | Definition quality | Score |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
${audit.rows.map((row) => `| ${row.article.title} | ${row.answerFirst} | ${row.entityCoverage} | ${row.faqQuality} | ${row.extractability} | ${row.semanticCompleteness} | ${row.comparisonReady} | ${row.definitionQuality} | ${row.score} |`).join('\n')}
`;
}

function renderReviewQueue(queue: ReturnType<typeof buildReviewQueue>) {
  return `# Content Review Queue

Updated: ${today}

## Articles needing review metadata or refresh

| Article | Status | Last reviewed | Next review | Priority | Reason |
| --- | --- | --- | --- | ---: | --- |
${queue.length ? queue.map((entry) => `| ${entry.article.title} | ${entry.article.status} | ${entry.article.lastReviewed ?? '—'} | ${entry.article.nextReview ?? '—'} | ${entry.article.priority} | ${entry.reason} |`).join('\n') : '| None | — | — | — | — | No current review actions due |'}
`;
}

function renderDashboard(dashboard: ReturnType<typeof buildDashboard>) {
  return `# Organic Growth Dashboard

Updated: ${today}

## Queue Health

- Status: ${dashboard.queueHealthIcon} ${dashboard.queueHealthLabel}
- Publishing runway: ${dashboard.publishingRunwayLabel}
- Next publication: ${dashboard.nextScheduled ? formatDateLabel(dashboard.nextScheduled.scheduledAt) : 'None scheduled'}
- Next topic: ${dashboard.nextScheduled ? dashboard.nextScheduled.title : 'No scheduled topic'}

${dashboard.queueHealthReasons.length ? `### Queue warnings\n\n${dashboard.queueHealthReasons.map((reason) => `- ${reason}`).join('\n')}\n` : ''}

## Publishing

- Draft: ${dashboard.statusCounts.draft}
- Review: ${dashboard.statusCounts.review}
- Scheduled: ${dashboard.statusCounts.scheduled}
- Published: ${dashboard.statusCounts.published}
- Archived: ${dashboard.statusCounts.archived}

## Knowledge

- Entities: ${dashboard.totalEntities}
- Missing entities with article support: ${dashboard.missingEntities}
- Cluster coverage: ${dashboard.clusterCoverage}/100

## Articles

- Total: ${dashboard.totalArticles}
- Published this month: ${dashboard.publishedThisMonth}
- Next scheduled: ${dashboard.nextScheduled ? `${dashboard.nextScheduled.title} (${dashboard.nextScheduled.scheduledAt})` : 'None scheduled'}

## SEO

- Schema coverage: ${dashboard.schemaCoverage}/100
- Internal-link coverage: ${dashboard.internalLinkCoverage}/100
- Orphan pages: ${dashboard.orphanPages}

## AI Search

- AI search score: ${dashboard.aiScore}/100

## Overall readiness

${dashboard.overallReadiness}/100

## Supporting system scores

- Content health: ${dashboard.healthScore}/100
- Entity coverage: ${dashboard.entityCoverageScore}/100
`;
}

function renderQueueHealthReport(dashboard: ReturnType<typeof buildDashboard>) {
  return `# Queue Health Report

Updated: ${today}

## Current queue

| Status | Count |
| --- | ---: |
| Published | ${dashboard.statusCounts.published} |
| Scheduled | ${dashboard.statusCounts.scheduled} |
| Review | ${dashboard.statusCounts.review} |
| Draft | ${dashboard.statusCounts.draft} |
| Archived | ${dashboard.statusCounts.archived} |

## Target queue

- Minimum scheduled articles: ${queueRules.minScheduled}
- Target scheduled articles: ${queueRules.targetScheduled}
- Review and draft states are editorial-only and do not affect queue health.

## Publishing runway

- Publishing cadence: ${queueRules.publishingCadencePerWeek}/week
- Runway: ${dashboard.publishingRunwayLabel}
- Status: ${dashboard.queueHealthIcon} ${dashboard.queueHealthLabel}

${dashboard.publishingRunwayWeeks < 1 ? '- Needs attention: runway is below one week.\n' : ''}${dashboard.queueHealthReasons.length ? `\n## Why this status\n\n${dashboard.queueHealthReasons.map((reason) => `- ${reason}`).join('\n')}\n` : '\n## Why this status\n\n- Queue meets current operating targets.\n'}
`;
}

function renderQueueForecast(dashboard: ReturnType<typeof buildDashboard>) {
  return `# Queue Forecast

Updated: ${today}

| Slot | Date | Expected article | Status |
| --- | --- | --- | --- |
${dashboard.queueForecast
  .map((entry) => `| ${entry.slot} | ${entry.date} | ${entry.article?.title ?? 'Publishing gap detected.'} | ${entry.gap ? 'Gap' : 'Scheduled'} |`)
  .join('\n')}

## Recommendation

- ${dashboard.recommendation}
`;
}

function renderOpportunityEngine(bundle: ReturnType<typeof buildBundle>) {
  return `# Content Opportunity Engine

Updated: ${today}

## Existing intelligence

${bundle.intelligenceAudit.intelligenceExists.map((item) => `- ${item}`).join('\n')}

## Existing metrics

${bundle.intelligenceAudit.metricsExist.map((item) => `- ${item}`).join('\n')}

## Existing recommendations

${bundle.intelligenceAudit.recommendationsExist.map((item) => `- ${item}`).join('\n')}

## Remaining gaps

${bundle.intelligenceAudit.gapsRemain.map((item) => `- ${item}`).join('\n')}

## Opportunity table

| Topic | Opportunity Score | AI Search Impact | Google SEO Impact | Internal Link Gain | Entity Strength Gain | Cluster Completion Gain | Conversion Impact | Editorial Effort | Overall Priority |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
${bundle.opportunities.map((row) => `| ${row.seed.title} | ${row.opportunityScore} | ${row.aiSearchImpact} | ${row.googleSeoImpact} | ${row.internalLinksCreated} | ${row.entityStrengthGain} | ${row.clusterCompletionGain} | ${row.conversionImpact} | ${row.editorialEffort} | ${row.overallPriority} |`).join('\n')}

## Why the top recommendations were selected

${bundle.opportunities.slice(0, 10).map((row) => `### ${row.seed.title}\n- Cluster: ${row.seed.cluster}\n- Related entities: ${row.seed.relatedEntities.join(', ')}\n- Why now: ${row.seed.rationale}\n- Evidence: strengthens ${row.strengthenedArticles.length} articles, supports ${row.orphanEntitiesResolved} unsupported entities, and creates about ${row.internalLinksCreated} internal links.`).join('\n\n')}
`;
}

function renderNextBestArticles(opportunities: OpportunityRow[]) {
  return `# Next Best Articles

Updated: ${today}

## Top 25 ranked opportunities

| Rank | Working title | Primary keyword | Search intent | Cluster | Related entities | Existing articles strengthened | Knowledge pages strengthened | Internal links created | Estimated authority gain | AI Search impact | Conversion potential | Overall Priority Score |
| ---: | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- | ---: | ---: |
${opportunities.slice(0, 25).map((row, index) => `| ${index + 1} | ${row.seed.title} | ${row.seed.primaryKeyword} | ${row.seed.searchIntent} | ${row.seed.cluster} | ${row.seed.relatedEntities.join(', ')} | ${row.strengthenedArticles.length} | ${row.strengthenedKnowledgePages.length} | ${row.internalLinksCreated} | ${row.authorityGain} | ${impactLabel(row.aiSearchImpact)} | ${row.conversionImpact} | ${row.overallPriority} |`).join('\n')}

## Notes

${opportunities.slice(0, 10).map((row, index) => `### ${index + 1}. ${row.seed.title}\n- Priority score: ${row.overallPriority}\n- Why it ranks here: ${row.summaryReason}\n- Strongest articles lifted: ${row.strengthenedArticles.slice(0, 4).map((article) => article.title).join(', ') || 'None'}\n- Knowledge pages strengthened: ${row.strengthenedKnowledgePages.map((entity) => entity.name).join(', ') || 'None'}`).join('\n\n')}
`;
}

function renderTopicalAuthorityMap(rows: TopicAuthorityRow[]) {
  return `# Topical Authority Map

Updated: ${today}

| Topic | Current strength | Content depth | Entity depth | Knowledge coverage | Cluster completeness | AI Search readiness |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
${rows.map((row) => `| ${row.topic} | ${row.currentStrength} | ${row.contentDepth} | ${row.entityDepth} | ${row.knowledgeCoverage} | ${row.clusterCompleteness} | ${row.aiSearchReadiness} |`).join('\n')}

## Weak areas

${rows
  .filter((row) => row.currentStrength < 75 || row.weakAreas.length > 0)
  .map((row) => `### ${row.topic}\n- ${row.weakAreas.join('\n- ') || 'General depth still needs expansion.'}`)
  .join('\n\n')}
`;
}

function renderClusterCompletionReport(clusterReports: ClusterReport[], opportunities: OpportunityRow[]) {
  return `# Cluster Completion Report

Updated: ${today}

${clusterReports.map((cluster) => {
  const clusterOpportunities = opportunities.filter((row) => row.seed.cluster === cluster.cluster.slug);
  return `## ${cluster.cluster.name}

- Cornerstone page: ${cluster.cornerstonePage}
- Supporting articles: ${cluster.supportingArticles.length}
- Glossary pages: ${cluster.glossaryCoverage}
- Comparison pages: ${cluster.comparisonPages.length}
- FAQ-supported pages: ${cluster.faqCoverage}

### Missing entities

${cluster.missingEntities.length ? cluster.missingEntities.map((item) => `- ${item}`).join('\n') : 'None'}

### Missing comparisons

${cluster.missingComparisons.length ? cluster.missingComparisons.map((item) => `- ${item}`).join('\n') : 'None'}

### Missing workflows

${cluster.missingWorkflows.length ? cluster.missingWorkflows.map((item) => `- ${item}`).join('\n') : 'None'}

### Best completion opportunities

${clusterOpportunities.slice(0, 4).map((row) => `- ${row.seed.title} (${row.overallPriority})`).join('\n') || 'No current recommendations'}
`;
}).join('\n\n')}
`;
}

function renderLinkingImpactReport(opportunities: OpportunityRow[]) {
  const bestLinks = opportunities.reduce((best, current) =>
    current.internalLinksCreated > best.internalLinksCreated ? current : best,
  );
  const bestEntityLift = opportunities.reduce((best, current) =>
    current.entityStrengthGain > best.entityStrengthGain ? current : best,
  );
  const bestOrphanResolver = opportunities.reduce((best, current) =>
    current.orphanEntitiesResolved > best.orphanEntitiesResolved ? current : best,
  );

  return `# Linking Impact Report

Updated: ${today}

## Highest internal-link opportunity

- ${bestLinks.seed.title}
- Estimated links created: ${bestLinks.internalLinksCreated}

## Highest entity-strength opportunity

- ${bestEntityLift.seed.title}
- Entity strength gain: ${bestEntityLift.entityStrengthGain}/100

## Best orphan-entity resolver

- ${bestOrphanResolver.seed.title}
- Unsupported entities improved: ${bestOrphanResolver.orphanEntitiesResolved}

## Ranked linking opportunities

| Article | Internal links created | Existing articles strengthened | Knowledge pages strengthened | Orphan entities resolved |
| --- | ---: | ---: | ---: | ---: |
${opportunities.slice(0, 15).map((row) => `| ${row.seed.title} | ${row.internalLinksCreated} | ${row.strengthenedArticles.length} | ${row.strengthenedKnowledgePages.length} | ${row.orphanEntitiesResolved} |`).join('\n')}
`;
}

function renderAiSearchOpportunities(opportunities: OpportunityRow[]) {
  const definitions = opportunities.filter((row) => row.seed.contentType === 'definition').slice(0, 8);
  const comparisons = opportunities.filter((row) => row.seed.contentType === 'comparison').slice(0, 8);
  const workflows = opportunities.filter((row) => row.seed.contentType === 'workflow').slice(0, 8);
  const appointments = opportunities.filter((row) => row.seed.contentType === 'appointment').slice(0, 8);

  return `# AI Search Opportunities

Updated: ${today}

## Missing definitions

${definitions.map((row) => `- ${row.seed.title}: improves canonical entity coverage for ${row.seed.relatedEntities.join(', ')}`).join('\n')}

## Missing comparisons

${comparisons.map((row) => `- ${row.seed.title}: adds comparison-ready retrieval for ${row.seed.relatedEntities.join(', ')}`).join('\n')}

## Missing answer-first workflows

${workflows.map((row) => `- ${row.seed.title}: practical workflow content with ${impactLabel(row.aiSearchImpact)} AI impact`).join('\n')}

## Missing appointment-prep answers

${appointments.map((row) => `- ${row.seed.title}: connects symptom tracking to care-prep intent with strong conversion overlap`).join('\n')}
`;
}

function renderContentRefreshPriority(refreshRows: RefreshRow[]) {
  return `# Content Refresh Priority

Updated: ${today}

| Article | Refresh score | Expected authority gain | Expected AI Search gain | Why refresh |
| --- | ---: | ---: | ---: | --- |
${refreshRows.map((row) => `| ${row.article.title} | ${row.refreshScore} | ${row.expectedAuthorityGain} | ${row.expectedAiGain} | ${row.reasons.join('; ')} |`).join('\n')}
`;
}

function renderEditorialPriorityDashboard(bundle: ReturnType<typeof buildBundle>) {
  const nextArticle = bundle.opportunities[0];
  const nextEntity = bundle.entityCoverage
    .filter((row) => row.articleCount === 0)
    .sort((a, b) => a.authorityScore - b.authorityScore)[0];
  const nextCluster = [...bundle.clusterReports].sort((a, b) => a.authorityScore - b.authorityScore)[0];
  const highestAi = [...bundle.opportunities].sort((a, b) => b.aiSearchImpact - a.aiSearchImpact)[0];
  const highestSeo = [...bundle.opportunities].sort((a, b) => b.googleSeoImpact - a.googleSeoImpact)[0];
  const highestConversion = [...bundle.opportunities].sort((a, b) => b.conversionImpact - a.conversionImpact)[0];
  const highestLinking = [...bundle.opportunities].sort((a, b) => b.internalLinksCreated - a.internalLinksCreated)[0];
  const highestAuthority = [...bundle.opportunities].sort((a, b) => b.authorityGain - a.authorityGain)[0];

  return `# Editorial Priority Dashboard

Updated: ${today}

## Queue Health

- ${bundle.dashboard.queueHealthIcon} ${bundle.dashboard.queueHealthLabel}
- Publishing runway: ${bundle.dashboard.publishingRunwayLabel}
- Next publication: ${bundle.dashboard.nextScheduled ? formatDateLabel(bundle.dashboard.nextScheduled.scheduledAt) : 'None scheduled'}
- Next topic: ${bundle.dashboard.nextScheduled ? bundle.dashboard.nextScheduled.title : 'No scheduled topic'}

${bundle.dashboard.statusCounts.scheduled < queueRules.minScheduled ? '- Publishing queue running low.\n' : ''}${bundle.dashboard.statusCounts.scheduled === 0 ? '- Publishing has stopped. Generate new scheduled content immediately.\n' : ''}

## Next Article

- ${nextArticle.seed.title}
- Why: ${nextArticle.summaryReason}

## Next Entity

- ${nextEntity.entity.name}
- Why: ${nextEntity.articleCount === 0 ? 'No dedicated article support yet.' : 'Still under-supported in the current graph.'}

## Next Cluster

- ${nextCluster.cluster.name}
- Why: ${nextCluster.missingTopics.length} missing topic(s), ${nextCluster.missingEntities.length} weak entity gap(s), authority ${nextCluster.authorityScore}/100

## Highest AI Search Opportunity

- ${highestAi.seed.title}
- Why: ${highestAi.aiSearchImpact}/100 AI Search impact

## Highest Google SEO Opportunity

- ${highestSeo.seed.title}
- Why: ${highestSeo.googleSeoImpact}/100 Google SEO impact

## Highest Conversion Opportunity

- ${highestConversion.seed.title}
- Why: ${highestConversion.conversionImpact}/100 conversion impact

## Highest Internal Linking Opportunity

- ${highestLinking.seed.title}
- Why: creates about ${highestLinking.internalLinksCreated} internal links

## Highest Authority Opportunity

- ${highestAuthority.seed.title}
- Why: authority gain ${highestAuthority.authorityGain}/100

## Weekly Recommendation

- If the team only has time for one task this week, create **${nextArticle.seed.title}**.
- Evidence: it strengthens ${nextArticle.strengthenedArticles.length} existing articles, improves ${nextArticle.orphanEntitiesResolved} unsupported entities, and closes cluster gaps in ${nextArticle.seed.cluster}.
`;
}

function renderWeeklyContentPlan(bundle: ReturnType<typeof buildBundle>) {
  const top = bundle.opportunities.slice(0, 8);
  const refresh = bundle.refreshPriority.slice(0, 4);
  const scheduled = bundle.dashboard.scheduledArticles;
  return `# Weekly Content Plan

Updated: ${today}

## Week 1

- publish: ${scheduled[0]?.title ?? top[0]?.seed.title ?? 'TBD'}
- create: ${top[1]?.seed.title ?? 'TBD'}
- refresh: ${refresh[0]?.article.title ?? 'No refresh needed'}

## Week 2

- publish: ${scheduled[1]?.title ?? top[2]?.seed.title ?? 'TBD'}
- create: ${top[3]?.seed.title ?? 'TBD'}
- refresh: ${refresh[1]?.article.title ?? 'No refresh needed'}

## Week 3

- publish: ${scheduled[2]?.title ?? top[4]?.seed.title ?? 'TBD'}
- create: ${top[5]?.seed.title ?? 'TBD'}
- refresh: ${refresh[2]?.article.title ?? 'No refresh needed'}

## Week 4

- publish: ${scheduled[3]?.title ?? top[6]?.seed.title ?? 'TBD'}
- create: ${top[7]?.seed.title ?? 'TBD'}
- refresh: ${refresh[3]?.article.title ?? 'No refresh needed'}

## Planning notes

- Balance cluster completion first, especially ${bundle.clusterReports.sort((a, b) => a.authorityScore - b.authorityScore)[0]?.cluster.name ?? 'EDS'}.
- Use refreshes to improve extractability and internal linking without waiting for new production.
- Keep Tuesday/Friday publishing cadence, but avoid scheduling two articles from the same weak cluster in the same week.
`;
}

function writeMarkdownFile(pathname: string, contents: string) {
  ensureDir(join(pathname, '..'));
  writeFileSync(pathname, contents.trimEnd() + '\n');
}

export function renderNextAction(bundle: ReturnType<typeof buildBundle>) {
  const next = bundle.opportunities[0];
  return `Next Best Action

Write:
${next.seed.title}

Reason:
• completes priority gaps in the ${next.seed.cluster} cluster
• strengthens ${next.strengthenedArticles.length} existing articles
• improves ${next.orphanEntitiesResolved} unsupported entities
• creates about ${next.internalLinksCreated} internal links
• AI Search impact: ${impactLabel(next.aiSearchImpact)}
• SEO impact: ${impactLabel(next.googleSeoImpact)}

Priority Score: ${next.overallPriority}

Queue Health:
${bundle.dashboard.queueHealthIcon} ${bundle.dashboard.queueHealthLabel}

Scheduled:
${bundle.dashboard.statusCounts.scheduled}

Recommended minimum:
${queueRules.targetScheduled}

Publishing Runway:
${bundle.dashboard.publishingRunwayLabel}

Action:
${bundle.dashboard.recommendation}`;
}

export function writeAllReports(bundle: ReturnType<typeof buildBundle>) {
  if (!existsSync(growthDir)) {
    return false;
  }

  ensureDir(clusterReportsDir);

  writeMarkdownFile(join(growthDir, 'CONTENT_HEALTH_REPORT.md'), renderContentHealthReport(bundle.health));
  writeMarkdownFile(join(growthDir, 'ENTITY_COVERAGE_REPORT.md'), renderEntityCoverageReport(bundle.entityCoverage));
  writeMarkdownFile(join(growthDir, 'INTERNAL_LINK_AUDIT.md'), renderInternalLinkAudit(bundle.articles));
  writeMarkdownFile(join(growthDir, 'CONTENT_REVIEW_QUEUE.md'), renderReviewQueue(bundle.reviewQueue));
  writeMarkdownFile(join(growthDir, 'AI_SEARCH_REPORT.md'), renderAiSearchReport(bundle.aiAudit));
  writeMarkdownFile(join(growthDir, 'ORGANIC_GROWTH_DASHBOARD.md'), renderDashboard(bundle.dashboard));
  writeMarkdownFile(join(growthDir, 'QUEUE_HEALTH_REPORT.md'), renderQueueHealthReport(bundle.dashboard));
  writeMarkdownFile(join(growthDir, 'QUEUE_FORECAST.md'), renderQueueForecast(bundle.dashboard));
  writeMarkdownFile(join(growthDir, 'CONTENT_OPPORTUNITY_ENGINE.md'), renderOpportunityEngine(bundle));
  writeMarkdownFile(join(growthDir, 'NEXT_BEST_ARTICLES.md'), renderNextBestArticles(bundle.opportunities));
  writeMarkdownFile(join(growthDir, 'TOPICAL_AUTHORITY_MAP.md'), renderTopicalAuthorityMap(bundle.topicalAuthorityMap));
  writeMarkdownFile(join(growthDir, 'CLUSTER_COMPLETION_REPORT.md'), renderClusterCompletionReport(bundle.clusterReports, bundle.opportunities));
  writeMarkdownFile(join(growthDir, 'LINKING_IMPACT_REPORT.md'), renderLinkingImpactReport(bundle.opportunities));
  writeMarkdownFile(join(growthDir, 'AI_SEARCH_OPPORTUNITIES.md'), renderAiSearchOpportunities(bundle.opportunities));
  writeMarkdownFile(join(growthDir, 'CONTENT_REFRESH_PRIORITY.md'), renderContentRefreshPriority(bundle.refreshPriority));
  writeMarkdownFile(join(growthDir, 'EDITORIAL_PRIORITY_DASHBOARD.md'), renderEditorialPriorityDashboard(bundle));
  writeMarkdownFile(join(growthDir, 'WEEKLY_CONTENT_PLAN.md'), renderWeeklyContentPlan(bundle));

  for (const entry of bundle.clusterReports) {
    const filename = `${entry.cluster.name.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}_CLUSTER_REPORT.md`;
    writeMarkdownFile(join(clusterReportsDir, filename), renderClusterReport(entry));
  }

  return true;
}

export function getSummary(bundle: ReturnType<typeof buildBundle>) {
  return {
    articles: bundle.articles.length,
    published: bundle.publishedArticles.length,
    scheduled: bundle.dashboard.statusCounts.scheduled,
    review: bundle.dashboard.statusCounts.review,
    draft: bundle.dashboard.statusCounts.draft,
    archived: bundle.dashboard.statusCounts.archived,
    queueHealth: bundle.dashboard.queueHealthLabel,
    publishingRunway: bundle.dashboard.publishingRunwayLabel,
    recommendation: bundle.dashboard.recommendation,
    contentHealth: bundle.health.healthScore,
    entityCoverage: bundle.entityCoverageScore,
    aiSearch: bundle.aiAudit.overallScore,
    dashboard: bundle.dashboard.overallReadiness,
    next: bundle.opportunities[0]?.seed.title ?? null,
    nextScore: bundle.opportunities[0]?.overallPriority ?? null,
  };
}
