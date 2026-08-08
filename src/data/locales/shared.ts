import { siteConfig } from '../site-config';

export const localeRoutes = {
  en: '/',
  deDe: '/de-de/',
  esEs: '/es-es/',
  frFr: '/fr-fr/',
} as const;

export const localeAlternates = [
  { hreflang: 'x-default', href: localeRoutes.en },
  { hreflang: 'en', href: localeRoutes.en },
  { hreflang: 'de-DE', href: localeRoutes.deDe },
  { hreflang: 'es-ES', href: localeRoutes.esEs },
  { hreflang: 'fr-FR', href: localeRoutes.frFr },
] as const;

export const localeSwitcherLinks = [
  { href: localeRoutes.en, label: 'English', locale: 'en', flag: '🇬🇧' },
  { href: localeRoutes.deDe, label: 'Deutsch', locale: 'de-DE', flag: '🇩🇪' },
  { href: localeRoutes.esEs, label: 'Español', locale: 'es-ES', flag: '🇪🇸' },
  { href: localeRoutes.frFr, label: 'Français', locale: 'fr-FR', flag: '🇫🇷' },
] as const;

export function localizedAppStore(locale: 'en-us' | 'de-de' | 'es-es' | 'fr-fr', badgeAlt: string) {
  return {
    ...siteConfig.appStore,
    badgeUrl: `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/${locale}?releaseDate=1776124800`,
    badgeAlt,
  };
}

export function localizedPath(localePath: string, path: string) {
  const localizedRoots = new Set([
    siteConfig.routes.blog,
    siteConfig.routes.knowledge,
    siteConfig.routes.privacy,
    siteConfig.routes.terms,
    siteConfig.routes.support,
  ]);

  if (localePath !== localeRoutes.en && localizedRoots.has(path)) {
    return `${localePath}${path.replace(/^\//, '')}`;
  }

  return path;
}

export function alternatesForPath(path: string) {
  const normalizedPath = path.replace(/^\//, '');

  return [
    { hreflang: 'x-default', href: `/${normalizedPath}` },
    { hreflang: 'en', href: `/${normalizedPath}` },
    { hreflang: 'de-DE', href: `${localeRoutes.deDe}${normalizedPath}` },
    { hreflang: 'es-ES', href: `${localeRoutes.esEs}${normalizedPath}` },
    { hreflang: 'fr-FR', href: `${localeRoutes.frFr}${normalizedPath}` },
  ];
}

export function localizedFooterLinks(localePath: string, labels: {
  blog: string;
  knowledge: string;
  symptomTracking: string;
  fatigue: string;
  dizziness: string;
  brainFog: string;
  doctorReports: string;
  authors: string;
  support: string;
  privacy: string;
  terms: string;
  contact: string;
}) {
  return [
    { href: localizedPath(localePath, siteConfig.routes.blog), label: labels.blog },
    { href: localizedPath(localePath, siteConfig.routes.knowledge), label: labels.knowledge },
    { href: localizedPath(localePath, '/blog/category/symptom-tracking/'), label: labels.symptomTracking },
    { href: localizedPath(localePath, '/knowledge/pots/'), label: 'POTS' },
    { href: localizedPath(localePath, '/knowledge/dysautonomia/'), label: 'Dysautonomia' },
    { href: localizedPath(localePath, '/knowledge/eds/'), label: 'EDS / hEDS' },
    { href: localizedPath(localePath, '/knowledge/fatigue/'), label: labels.fatigue },
    { href: localizedPath(localePath, '/knowledge/dizziness/'), label: labels.dizziness },
    { href: localizedPath(localePath, '/knowledge/brain-fog/'), label: labels.brainFog },
    { href: localizedPath(localePath, '/knowledge/doctor-ready-report/'), label: labels.doctorReports },
    { href: localizedPath(localePath, '/authors/'), label: labels.authors },
    { href: localizedPath(localePath, siteConfig.routes.support), label: labels.support },
    { href: localizedPath(localePath, siteConfig.routes.privacy), label: labels.privacy },
    { href: localizedPath(localePath, siteConfig.routes.terms), label: labels.terms },
    { href: `mailto:${siteConfig.support.email}`, label: labels.contact },
  ];
}

export function createHomeSchema({
  localePath,
  appDescription,
  webPageName,
  webPageDescription,
  faqItems,
  offerCurrency = 'USD',
  offerDescriptions,
  featureList,
}: {
  localePath: string;
  appDescription: string;
  webPageName: string;
  webPageDescription: string;
  faqItems: ReadonlyArray<{ question: string; answer: string }>;
  offerCurrency?: string;
  offerDescriptions: { free: string; monthly: string; annual: string };
  featureList: string[];
}) {
  const pageUrl = new URL(localePath, siteConfig.siteUrl).toString();

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: siteConfig.brand.productName,
      applicationCategory: 'HealthApplication',
      applicationSubCategory: 'Symptom tracker',
      operatingSystem: 'iOS',
      description: appDescription,
      url: pageUrl,
      downloadUrl: siteConfig.appStore.url,
      installUrl: siteConfig.appStore.url,
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: offerCurrency,
          availability: 'https://schema.org/InStock',
          url: siteConfig.appStore.url,
          description: offerDescriptions.free,
        },
        {
          '@type': 'Offer',
          price: '4.99',
          priceCurrency: offerCurrency,
          availability: 'https://schema.org/InStock',
          url: siteConfig.appStore.url,
          description: offerDescriptions.monthly,
        },
        {
          '@type': 'Offer',
          price: '39.99',
          priceCurrency: offerCurrency,
          availability: 'https://schema.org/InStock',
          url: siteConfig.appStore.url,
          description: offerDescriptions.annual,
        },
      ],
      featureList,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.brand.name,
      url: siteConfig.siteUrl,
      logo: new URL(siteConfig.brand.logo.src, siteConfig.siteUrl).toString(),
      contactPoint: {
        '@type': 'ContactPoint',
        email: siteConfig.support.email,
        contactType: 'customer support',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.brand.name,
      url: siteConfig.siteUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: webPageName,
      url: pageUrl,
      description: webPageDescription,
      about: [
        'POTS',
        'EDS',
        'Dysautonomia',
        'Fibromyalgia',
        'Long COVID',
        'ME/CFS',
        'Orthostatic test',
        'Symptom tracking',
        'Doctor-ready report',
        'Chronic illness appointment preparation',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];
}
