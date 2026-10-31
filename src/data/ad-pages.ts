// Copy is reused from the B2 homepage (site-content.ts) except where noted.
// Checked against the research-first gate in CLAUDE.md on 2026-10-17; the
// overrides below are the places the reused copy failed it. Two decisions are
// still open and are Roman's: the hero hook (it depends on the ad creative)
// and whether the price line should mention lifetime.
// Rule for this page: second person about the product, never about the
// condition. "Your check-ins" is fine; "your flares" is not.
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
    // Override: the homepage line says "your recent flares" and "nerves".
    // "Nerves" reads as an anxiety attribution, which is the dismissal this
    // audience most often reports (PAIN_POINT_DATABASE #3, #42).
    answer:
      'Appointments are short, and brain fog makes it easy to lose what you meant to say. Zebra’s Prepare tab gathers what changed most, recent flares and symptoms, medication changes, orthostatic tests, and your own notes into a 30-day summary you can review before you go.',
    body: en.doctorReport.body,
    flow: en.doctorReport.flow,
    bullets: en.doctorReport.bullets,
    preview: en.doctorReport.preview,
    proofLabel: en.doctorReport.proofLabel,
    proofTitle: en.doctorReport.proofTitle,
    proofBody: en.doctorReport.proofBody,
    outcomesLabel: en.doctorReport.outcomesLabel,
    // Override: the homepage bullet says "beside your symptoms".
    outcomes: [
      'Dated history instead of scattered notes',
      'What shifted, counted from your own check-ins',
      'Medication changes beside symptoms',
      'A summary ready to review before the visit',
    ],
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
  // What it does. Not reused: the homepage block is titled around POTS and
  // dysautonomia only, which tells an EDS or Fibromyalgia visitor the page is
  // not for them, and its fourth card repeats the report section above.
  // Every card below is a shipped feature (ZEBRA_PROJECT_MEMORY.md §7).
  whatItDoes: {
    eyebrow: 'What Zebra tracks',
    title: 'Everything in one place, with nothing to set up.',
    intro:
      'Short, structured, and written for POTS, EDS, and Fibromyalgia. Skip whatever you do not have the energy for.',
    items: [
      {
        title: 'Symptoms from a ready-made list',
        body: 'Pick from symptoms written for POTS, EDS, and Fibromyalgia. There is no blank page and no system to design.',
      },
      {
        title: 'Salt, water, and medications',
        body: 'Log them beside symptoms, and mark the day a medication starts or its dose changes.',
      },
      {
        title: 'What the day stopped you doing',
        body: 'Note when you could not shower, work, or leave home. It can say more than a number out of ten.',
      },
      {
        title: 'A guided orthostatic test',
        body: 'Lying, standing, and recovery, each stage timed. Stop any time, and a partial test still saves.',
      },
    ],
    note: en.whatZebraTracks.note,
  },
  // Trust and second CTA. Price is taken from the existing pricing copy.
  finalCta: {
    eyebrow: en.finalCta.eyebrow,
    title: en.finalCta.title,
    body: en.finalCta.body,
    points: ['No account needed', 'On your iPhone and your own iCloud', 'Premium from $4.99/month'],
    pointsLabel: en.finalCta.pointsLabel,
    endState: en.finalCta.endState,
    trustLine:
      'Free to track. Premium is $4.99 a month, $39.99 a year, or $59.99 once. No Zebra health-data server. Not medical advice.',
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
