// INTERIM COPY — assembled from existing approved site-content.ts.
// Final ad copy is pending the research-first gate in CLAUDE.md
// (PAIN_POINT_DATABASE.md, CUSTOMER_LANGUAGE_DICTIONARY.md).
// Do not treat this as final.
import { homePageEnglish as en } from './site-content';
import { siteConfig } from './site-config';
import { homePageEn } from './locales/en';

// Ad landing pages. Each one is a content object read by a page template, so
// adding an angle means adding an object here, not building a new page.
export const appPage = {
  seo: {
    title: en.seo.title,
    description: en.seo.description,
    noindex: true,
  },
  header: {
    brand: en.header.brand,
    links: [],
  },
  appStore: {
    url: homePageEn.appStore.url,
    badgeUrl: homePageEn.appStore.badgeUrl,
    badgeAlt: homePageEn.appStore.badgeAlt,
  },
  consentBanner: homePageEn.consentBanner,
  // Hook and first CTA. Reuses the homepage hero copy as-is.
  hero: {
    ...en.hero,
    answerStrip: [],
    quickLinks: [],
  },
  problem: {
    ...en.problem,
  },
  // Proof. Reuses the homepage doctor-report copy. The media is the rendered
  // first page of public/sample-doctor-report.pdf, which carries fake data.
  doctorReport: {
    eyebrow: en.doctorReport.eyebrow,
    title: en.doctorReport.title,
    answer: en.doctorReport.answer,
    body: en.doctorReport.body,
    flow: en.doctorReport.flow,
    bullets: en.doctorReport.bullets,
    preview: en.doctorReport.preview,
    proofLabel: en.doctorReport.proofLabel,
    proofTitle: en.doctorReport.proofTitle,
    proofBody: en.doctorReport.proofBody,
    outcomesLabel: en.doctorReport.outcomesLabel,
    outcomes: en.doctorReport.outcomes,
    comparison: [],
    ctaNote: en.doctorReport.ctaNote,
    media: {
      kind: 'image' as const,
      src: '/app/doctor-report-page-1.webp',
      alt: 'First page of a sample Zebra doctor report, using fake patient data',
      width: 900,
      height: 1165,
      label: 'Sample doctor report',
      meta: 'Fake patient data',
    },
  },
  // What it does: four of the seven homepage tracking items, not the full tour.
  whatItDoes: {
    eyebrow: en.whatZebraTracks.eyebrow,
    title: en.whatZebraTracks.title,
    intro: en.whatZebraTracks.intro,
    items: [0, 2, 3, 6].map((index) => en.whatZebraTracks.items[index]),
    note: en.whatZebraTracks.note,
  },
  // Trust and second CTA. Price is taken from the existing pricing copy.
  finalCta: {
    eyebrow: en.finalCta.eyebrow,
    title: en.finalCta.title,
    body: en.finalCta.body,
    points: ['No account needed', 'Data stays on your iPhone', 'Premium from $4.99/month'],
    pointsLabel: en.finalCta.pointsLabel,
    endState: en.finalCta.endState,
    trustLine:
      'Free to track. Premium is $4.99 a month or $39.99 a year. No Zebra health-data server. Not medical advice.',
  },
  mobileStickyCta: {
    label: en.mobileStickyCta.label,
    note: en.mobileStickyCta.note,
  },
  footer: {
    body: en.footer.body,
    trustLine: en.footer.trustLine,
    links: [
      { href: siteConfig.routes.privacy, label: 'Privacy' },
      { href: siteConfig.routes.terms, label: 'Terms' },
    ],
  },
};
