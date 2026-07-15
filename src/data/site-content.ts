import { heroShowcase, screenshots, screenshotStory } from './screenshots';
import { siteConfig } from './site-config';

const faqItems = [
  {
    question: 'What is Zebra symptom tracker?',
    answer:
      'Zebra is an iPhone symptom tracker for POTS, dysautonomia, EDS, Fibromyalgia, and overlapping chronic illness. It turns patient-entered symptom history into a doctor-ready report for appointments.',
  },
  {
    question: 'Who is Zebra for?',
    answer:
      'It is built for people managing POTS, dysautonomia, EDS, Fibromyalgia, Long COVID, ME/CFS, and overlapping symptoms that are hard to explain in appointments.',
  },
  {
    question: 'What does Zebra track?',
    answer:
      'Flares, symptoms, medications, triggers, salt, water, function, notes, and orthostatic vitals all stay in one timeline.',
  },
  {
    question: 'How is Zebra different from a generic symptom tracker app?',
    answer:
      'Zebra is built for chronic illness tracking rather than generic wellness streaks. It keeps symptoms, flares, orthostatic vitals, medications, salt, water, function, and notes in one timeline so you can prepare a doctor-ready report.',
  },
  {
    question: 'Can I use Zebra as a POTS symptom tracker app?',
    answer:
      'Yes. Zebra can help people with POTS track upright symptoms, flares, hydration, salt, medications, heart-rate context, and orthostatic test notes before appointments.',
  },
  {
    question: 'Can Zebra help with EDS, dysautonomia, Fibromyalgia, Long COVID, or ME/CFS?',
    answer:
      'Yes. Zebra is designed for overlapping chronic illness patterns where symptoms, function, triggers, medications, and appointment context are hard to summarize from memory.',
  },
  {
    question: 'Why use Zebra instead of Notes or a spreadsheet?',
    answer:
      'Notes and spreadsheets start blank. Zebra gives symptom tracking structure, keeps orthostatic vitals beside daily context, and turns patient-entered history into a report you can review before a specialist visit.',
  },
  {
    question: 'How does Zebra help with appointment preparation?',
    answer:
      'Zebra keeps patient-entered symptom history, orthostatic vitals, medications, and notes in one place so you can review what changed and export a doctor-ready report before a specialist visit.',
  },
  {
    question: 'Where is Zebra data stored?',
    answer:
      'Your data stays on your iPhone and iCloud. Zebra does not require an account or run a health-data server.',
  },
  {
    question: 'Does Zebra diagnose or treat anything?',
    answer:
      'No. Zebra does not diagnose, treat, or provide medical advice. It helps you organize your history for care conversations.',
  },
  {
    question: 'What does Premium include?',
    answer:
      'Premium unlocks doctor report export, unlimited history, and the full orthostatic archive. The free tier includes core tracking and 30 days of history.',
  },
  {
    question: 'How do I get Zebra support?',
    answer: `Use the Zebra support page or email ${siteConfig.support.email} if you need help with the app, billing, or privacy questions.`,
  },
] as const;

export const homePage = {
  seo: {
    title: 'Zebra Symptom Tracker for POTS, EDS & Dysautonomia',
    description:
      'Track POTS, EDS, dysautonomia, Fibromyalgia, and symptoms on iPhone. Build a doctor-ready report from vitals, meds, flares, and notes.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Zebra doctor-ready report preview built from tracked symptoms, orthostatic vitals, medications, and appointment notes.',
  },
  header: {
    brand: {
      name: siteConfig.brand.name,
      subtitle: 'For invisible chronic illness',
      href: siteConfig.routes.home,
      logo: siteConfig.brand.logo,
    },
    links: [
      { href: `${siteConfig.routes.home}#doctor-report`, label: 'Report' },
      { href: `${siteConfig.routes.home}#daily-tracking`, label: 'Tracking' },
      { href: siteConfig.routes.privacy, label: 'Privacy' },
      { href: siteConfig.routes.blog, label: 'Guides' },
    ],
  },
  hero: {
    eyebrow: 'Built for invisible chronic illness',
    title: 'The iPhone symptom tracker for POTS, EDS, dysautonomia, and doctor-ready reports.',
    body:
      'Track your days. Show the pattern. Walk in with proof. Zebra keeps symptoms, orthostatic vitals, medications, salt, water, function, and notes in one place so you can stop rebuilding the month before an appointment.',
    answerStrip: [
      {
        label: 'What it is',
        value: 'An iPhone symptom tracker that turns patient-entered history into a doctor-ready report.',
      },
      {
        label: 'Who it is for',
        value: 'People managing POTS, dysautonomia, EDS, Fibromyalgia, Long COVID, ME/CFS, and overlapping symptoms.',
      },
      {
        label: 'Why it is different',
        value: 'Built for chronic illness check-ins, orthostatic tracking, and appointment prep instead of blank notes or generic wellness streaks.',
      },
    ],
    trustLine:
      'Track free. Export the doctor report with Premium. Your data stays on your device and iCloud. Not medical advice or diagnosis.',
    ctaSupport: ['Private by design', 'No account required', 'Patient-entered history only', 'Not medical advice'],
    bullets: [
      'Built for brain fog',
      'Made for specialist appointments',
      'Not a generic wellness tracker',
    ],
    showcase: heroShowcase,
    supportCard: {
      eyebrow: 'The report is the payoff',
      title: 'The appointment starts with the month already organized.',
      body: 'The daily tracker is there so the report has something useful to say when the specialist asks what changed.',
    },
  },
  problem: {
    eyebrow: 'Recognize the problem',
    title: 'The hard part is not noticing symptoms. It is explaining them later.',
    statement: 'By the time the appointment starts, the story is split across Notes, screenshots, half-finished trackers, and memory.',
    support:
      'That is why real symptom history still turns into guesswork, especially on brain-fog days or when the worst flare is already over.',
    flowLabel: 'What the month feels like',
    bullets: [
      'You remember the worst day, not the timeline',
      'You tracked pieces, not the whole month',
      'Nothing is clean enough to hand over',
    ],
    quotes: [
      'I have pieces of it everywhere.',
      'I knew it mattered, but I forgot by the appointment.',
      'Nothing showed the full picture when I needed it.',
    ],
  },
  searchContent: {
    eyebrow: 'Why Zebra is different',
    title: 'A chronic illness symptom tracker built for appointments, not wellness streaks.',
    intro:
      'Most symptom tracker apps help you log a day. Zebra is built for the harder job: keeping enough context to explain POTS, EDS, dysautonomia, Fibromyalgia, Long COVID, ME/CFS, and overlapping symptoms later.',
    answer:
      'Zebra is a chronic illness symptom tracker for iPhone that keeps symptoms, flares, orthostatic vitals, medications, salt, water, function, and notes in one record. The goal is not diagnosis. The goal is a clearer doctor-ready report before a specialist appointment.',
    differencesTitle: 'Why use Zebra instead of Notes, spreadsheets, or a generic symptom tracker?',
    differences: [
      {
        label: 'Structure',
        generic: 'Notes and spreadsheets start blank, so you have to invent the system while you are already tired.',
        zebra: 'Zebra gives chronic illness tracking structure from the start: symptoms, flares, function, triggers, meds, salt, water, and notes.',
      },
      {
        label: 'Orthostatic tracking',
        generic: 'Generic trackers often separate vitals from symptoms, which makes POTS and dysautonomia context harder to review.',
        zebra: 'Zebra keeps lying, sitting, and standing orthostatic vitals beside the symptom timeline and daily context.',
      },
      {
        label: 'Appointment prep',
        generic: 'A month of notes can still turn into a rushed explanation when the doctor asks what changed.',
        zebra: 'Zebra turns patient-entered history into a doctor-ready symptom report for specialist appointments.',
      },
      {
        label: 'Privacy',
        generic: 'Many health tools require an account, sync through a service, or feel broader than the problem you need solved.',
        zebra: 'Zebra is private by design, requires no account, and keeps the focus on your own record for care conversations.',
      },
    ],
    conditionsTitle: 'Built for POTS, EDS, dysautonomia, Fibromyalgia, Long COVID, and ME/CFS.',
    conditionsIntro:
      'Zebra is most useful when symptoms overlap, change by position or activity, and become hard to summarize from memory.',
    conditions: [
      {
        name: 'POTS symptom tracker app',
        body: 'Track upright symptoms, heart-rate context, hydration, salt, flares, and orthostatic test notes before a cardiology or specialist visit.',
      },
      {
        name: 'Dysautonomia symptom tracker',
        body: 'Keep autonomic symptoms, position changes, triggers, medications, and daily function in one timeline instead of scattered notes.',
      },
      {
        name: 'EDS and hEDS symptom tracking',
        body: 'Record pain, fatigue, mobility limits, overlap symptoms, and functional impact so variability is easier to explain later.',
      },
      {
        name: 'Fibromyalgia symptom tracker',
        body: 'Track pain, fatigue, brain fog, flares, medication context, and the day-to-day impact that can be hard to reconstruct.',
      },
      {
        name: 'Long COVID tracker',
        body: 'Capture fatigue, dizziness, brain fog, orthostatic symptoms, activity changes, and patterns between follow-up appointments.',
      },
      {
        name: 'ME/CFS symptom journal',
        body: 'Use lower-effort check-ins to preserve history around fatigue, post-exertional worsening, function, and recovery windows.',
      },
    ],
    trustTitle: 'Zebra helps organize health history. It does not diagnose or replace medical care.',
    trustBody:
      'For medical and AI-search clarity, Zebra should be understood as an appointment-preparation and patient-history tool. It summarizes what you enter so you can review it and discuss it with a clinician.',
    trustItems: [
      'Not for diagnosis, treatment, prevention, or emergency symptoms',
      'Not a replacement for a doctor, specialist, or medical advice',
      'Useful for preparing a clearer symptom history and doctor-ready report',
    ],
  },
  doctorReport: {
    eyebrow: 'Doctor-report proof',
    title: 'What do I have after 30 days?',
    answer:
      'A clearer symptom history, a stronger timeline, and a doctor-ready report you can actually use in a specialist appointment.',
    body: [
      'Instead of retelling the month from memory, you can review a dated record of what happened, how often, and what changed.',
      'The report is built from patient-entered symptoms, orthostatic vitals, medications, salt, water, notes, and functional impact so the visit can start from a cleaner shared picture.',
    ],
    bullets: [
      '30-day symptom history, flares, meds, and triggers together',
      'Salt, water, and orthostatic vitals in the same timeline',
      'Questions and changes worth discussing before the visit',
      'Clean enough to review quickly in an appointment',
      'Careful in its claims and not a diagnostic tool',
    ],
    preview: {
      eyebrow: 'Report preview',
      title: 'What the doctor-ready report includes',
      body:
        'A plain-language appointment summary built from the history you tracked, with context a specialist can scan quickly.',
      items: [
        {
          label: 'Symptom timeline',
          body: 'Dated changes, flares, and symptom frequency across the month.',
        },
        {
          label: 'Orthostatic vitals',
          body: 'Lying, sitting, and standing observations kept beside symptoms.',
        },
        {
          label: 'Meds, salt, and water',
          body: 'The context that helps explain what changed around a flare.',
        },
        {
          label: 'Appointment notes',
          body: 'Questions and changes worth discussing before the visit ends.',
        },
      ],
    },
    proofLabel: 'The outcome',
    proofTitle: 'The doctor report is the payoff.',
    proofBody:
      'Daily logs become useful when they help you prepare, explain what changed, and hand over a record a specialist can review quickly.',
    outcomesLabel: 'What you have after 30 days',
    outcomes: [
      'A clearer symptom history instead of scattered notes',
      'A timeline of flares, changes, and function impact',
      'Context around triggers, medications, salt, and water',
      'Orthostatic test history connected to the rest of the month',
      'A doctor-ready report you can review or share before the visit',
    ],
    comparison: [
      {
        label: 'Before Zebra',
        title: 'Rebuild the month from memory',
        points: ['Open Notes', 'Search screenshots', 'Hope you do not forget the important part'],
      },
      {
        label: 'With Zebra',
        title: 'Walk in with the record already made',
        points: ['Review the timeline', 'Export the doctor report', 'Spend the visit talking, not reconstructing'],
      },
    ],
    ctaNote: 'Start free now. Upgrade only when you want to export the report.',
    media: screenshotStory.doctorReport,
  },
  howItWorks: {
    eyebrow: 'How Zebra works',
    title: 'Track. Understand. Prepare. Share.',
    intro: 'The flow stays short on bad days and gets more useful as the appointment gets closer.',
    timeline: ['Track', 'Understand', 'Prepare', 'Share'],
    steps: [
      {
        label: 'Track',
        body: 'Log symptoms, flares, meds, salt, water, and notes in one quick check-in.',
      },
      {
        label: 'Understand',
        body: 'Keep orthostatic vitals and daily context in the same timeline so patterns are easier to review later.',
      },
      {
        label: 'Prepare',
        body: 'Review what changed before the visit instead of rebuilding the month from memory.',
      },
      {
        label: 'Share',
        body: 'Export the doctor-ready report when you want something clean to bring into the room.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'App preview',
    title: 'See the full tracking-to-report flow.',
    intro:
      'The page now leads with the report, but the whole product is still built around short check-ins that stay usable on bad days.',
    items: [
      {
        ...screenshotStory.doctorReport,
        title: 'Doctor report preview',
        body: 'Review a consultation brief before the appointment.',
      },
      {
        ...screenshotStory.dailyTracking,
        title: 'Daily check-in',
        body: 'Track symptoms, triggers, hydration, meds, function, and notes.',
      },
      {
        ...screenshotStory.orthostaticTest,
        title: 'Orthostatic evidence',
        body: 'Keep position-based vitals connected to the rest of the day.',
      },
      {
        ...screenshotStory.trends,
        title: 'Pattern history',
        body: 'See repeat patterns and saved insights build over time.',
      },
      {
        ...screenshots.todaySummary,
        meta: 'Today summary',
        title: 'Today summary',
        body: 'Check the current pattern without rebuilding the story.',
      },
    ],
  },
  dailyTracking: {
    id: 'daily-tracking',
    eyebrow: 'Daily tracking',
    title: 'What can I track in one check-in?',
    intro: 'Symptoms, triggers, hydration, medications, function, and notes stay in one low-effort flow.',
    body: [
      'You open Zebra, log what matters, and move on. No blank setup. No wellness homework. No second app just for notes.',
    ],
    momentLabel: 'What happens in under a minute',
    sequence: ['Open Zebra', 'Tap what changed', 'Return to your day'],
    bullets: [
      'Flares and symptoms',
      'Meds and notes',
      'Salt, water, and triggers',
    ],
    cards: [
      {
        eyebrow: 'Why it feels lighter',
        title: 'Condition-aware from the start',
        body: 'You do not have to invent the structure first.',
      },
      {
        eyebrow: 'Why it matters later',
        title: 'Everything lands in one timeline',
        body: 'That is what makes the doctor report possible.',
      },
    ],
    ctaLabel: 'Start tracking on iPhone',
    ctaHref: siteConfig.appStore.url,
    ctaNote: 'One calm place for the daily record.',
    media: screenshotStory.dailyTracking,
  },
  orthostaticTest: {
    id: 'orthostatic-test',
    eyebrow: 'Orthostatic test',
    title: 'Where do my vitals fit?',
    intro: 'In the same record as everything else, not in a separate tool you have to reconcile later.',
    body: [
      'Zebra keeps lying, sitting, and standing vitals connected to your symptoms instead of splitting them into another tool.',
    ],
    momentLabel: 'The guided sequence',
    sequence: ['Lie down', 'Sit up', 'Stand', 'Save to the same timeline'],
    bullets: [
      'Guided lying, sitting, standing flow',
      'Same timeline as symptoms and meds',
      'Easier to review later with context',
    ],
    cards: [
      {
        eyebrow: 'Why that helps',
        title: 'Your numbers are not isolated',
        body: 'Doctors can see them beside the rest of the day.',
      },
      {
        eyebrow: 'Why it matters',
        title: 'Less juggling, more clarity',
        body: 'You are not bouncing between multiple health tools.',
      },
    ],
    ctaLabel: 'See how the report comes together',
    ctaHref: '#doctor-report',
    ctaNote: 'Vitals stay useful because they stay connected.',
    layout: 'reverse',
    media: screenshotStory.orthostaticTest,
  },
  trends: {
    id: 'trends-patterns',
    eyebrow: 'Trends and patterns',
    title: 'How do I stop losing the bigger picture?',
    intro: 'Your history becomes easier to read before you have to explain it under pressure.',
    body: [
      'Over time, scattered bad days become a pattern you can review and turn into a stronger appointment summary.',
    ],
    momentLabel: 'What changes over time',
    sequence: ['Daily entries', 'One timeline', 'Clearer patterns', 'Doctor report'],
    bullets: [
      'Spot repeat patterns faster',
      'Prepare without rebuilding the month',
      'Move naturally toward the doctor report',
    ],
    cards: [
      {
        eyebrow: 'The shift',
        title: 'From daily log to usable history',
        body: 'The app helps you keep the thread between appointments.',
      },
      {
        eyebrow: 'The payoff',
        title: 'Better recall under stress',
        body: 'You can review what happened before the room gets overwhelming.',
      },
    ],
    ctaLabel: 'Download Zebra',
    ctaHref: siteConfig.appStore.url,
    ctaNote: 'The clearer the history, the better the report.',
    media: screenshotStory.trends,
  },
  trust: {
    eyebrow: 'Trust',
    title: 'Why should I trust this with my health story?',
    intro: 'Because Zebra stays private, careful in its claims, and focused on the real appointment problem instead of pretending to diagnose or fix it.',
    highlight: {
      eyebrow: 'Trust at a glance',
      title: 'Private by design. Built for brain fog. Maintained carefully.',
      body:
        'Zebra is designed to help you keep a clearer record for specialist appointments. The app and knowledge hub are built to support self-organization and care conversations, not diagnosis, treatment, or health-data selling.',
    },
    calmState: {
      eyebrow: 'The end state',
      title: 'More prepared. Less overwhelmed.',
      body:
        'The goal is not to make illness feel tidy. It is to help the appointment feel calmer because your record is already there.',
    },
    items: [
      {
        title: 'Privacy-first',
        body: 'Your data stays on your iPhone and private iCloud account.',
      },
      {
        title: 'You own the record',
        body: 'No account, no health-data server, and no rebuilding your history in someone else’s system.',
      },
      {
        title: 'Brain-fog-friendly',
        body: 'Short flows, clear hierarchy, low-energy use.',
      },
      {
        title: 'Specialist focused',
        body: 'Built around appointments, not self-optimization or wellness streaks.',
      },
      {
        title: 'Medically careful',
        body: 'No diagnosis, no treatment advice, and no overclaiming about what your data means.',
      },
      {
        title: 'Patient-entered data',
        body: 'What Zebra summarizes comes from the history you track and review yourself.',
      },
    ],
    links: [
      { label: 'Meet Zebra Editorial', href: '/authors/zebra-editorial/' },
      { label: 'Browse the knowledge hub', href: siteConfig.routes.knowledge },
      { label: 'Read the privacy policy', href: siteConfig.routes.privacy },
      { label: 'Visit support', href: siteConfig.routes.support },
    ],
    resources: [
      {
        eyebrow: 'Editorial standards',
        title: 'See how Zebra content is reviewed',
        body: 'Meet the editorial team, review process, update policy, and medical-language guardrails behind the knowledge hub.',
        href: '/authors/zebra-editorial/',
      },
      {
        eyebrow: 'Knowledge hub',
        title: 'Browse connected condition and symptom definitions',
        body: 'See how POTS, dysautonomia, brain fog, fatigue, doctor reports, and appointment prep connect across the site.',
        href: siteConfig.routes.knowledge,
      },
      {
        eyebrow: 'Blog',
        title: 'Read the strongest practical guides first',
        body: 'Use the blog to compare Zebra with Notes, learn what to track, and understand how the report works before you download.',
        href: siteConfig.routes.blog,
      },
    ],
  },
  audience: {
    id: 'who-its-for',
    eyebrow: 'Who Zebra is for',
    title: 'Is this built for someone like me?',
    intro: 'Yes, if the hard part is not tracking once. The hard part is remembering, explaining, and organizing it later.',
    groups: [
      {
        title: 'Zebra is especially helpful if you...',
        items: [
          'forget which symptoms changed before the appointment',
          'deal with brain fog or low-energy days',
          'track flares and symptom changes across the month',
          'need better appointment preparation before a specialist visit',
          'want better context around symptoms, heart rate, medications, and daily function',
        ],
      },
      {
        title: 'Conditions often tracked in Zebra',
        items: [
          'POTS',
          'Dysautonomia',
          'EDS / hEDS',
          'Fibromyalgia',
          'Long COVID, ME/CFS, and overlapping conditions',
        ],
      },
    ],
    quickAnswer: [
      'Built for people who already tried Notes, screenshots, or generic trackers',
      'Made for specialist appointments, not wellness streaks',
      'Designed to stay usable on bad days',
    ],
    items: [
      'POTS',
      'Dysautonomia',
      'EDS / hEDS',
      'Long COVID',
      'Fibromyalgia',
      'ME/CFS',
      'Overlapping conditions',
      'Brain fog and low-energy days',
    ],
    footnote: 'Zebra is for people who need a clearer record, not a generic wellness dashboard.',
  },
  guides: {
    eyebrow: 'Popular guides',
    title: 'Compare the workflow before you download.',
    intro:
      'If you are comparing Zebra with Notes, preparing for an appointment, or looking for a condition hub, these are the best places to start.',
    items: [
      {
        href: '/blog/what-to-track-before-a-specialist-appointment/',
        label: 'What to track before a specialist appointment',
        description: 'A practical checklist for symptoms, flares, meds, function changes, and questions.',
      },
      {
        href: '/blog/how-to-track-pots-symptoms-and-orthostatic-changes/',
        label: 'How to track POTS symptoms and orthostatic changes',
        description: 'A clearer way to keep heart rate, position changes, and daily context together.',
      },
      {
        href: '/blog/what-is-a-doctor-ready-symptom-report/',
        label: 'What is a doctor-ready symptom report?',
        description: 'A plain-language explanation of what the report contains and why it helps in appointments.',
      },
      {
        href: '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/',
        label: 'Symptom tracker vs Notes app vs spreadsheet',
        description: 'A clear comparison for people deciding whether Zebra solves a real problem or just adds another tool.',
      },
      {
        href: '/knowledge/pots/',
        label: 'POTS condition hub',
        description: 'A connected hub for upright symptoms, orthostatic tracking, hydration, and specialist prep.',
      },
      {
        href: '/knowledge/dysautonomia/',
        label: 'Dysautonomia condition hub',
        description: 'Definitions, related symptoms, orthostatic concepts, and the connected pages most relevant to appointments.',
      },
      {
        href: '/blog/best-symptom-tracker-apps-for-pots-2026/',
        label: 'Best symptom tracker apps for POTS in 2026',
        description: 'A careful tool comparison for people deciding between Zebra, Notes, and other trackers.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions about Zebra.',
    items: faqItems,
  },
  finalCta: {
    eyebrow: 'Download Zebra',
    title: 'Start tracking before the next appointment asks you to remember everything.',
    body:
      'Begin with the free tracker today. Upgrade only when you want the doctor report and deeper history.',
    endState: 'A calmer appointment starts with a record you do not have to rebuild.',
    trustLine:
      'Track free. No account required. Doctor report export with Premium. Your data stays on your device. Not medical advice.',
  },
  footer: {
    body: 'Zebra is an iPhone symptom tracker for POTS, dysautonomia, EDS, Fibromyalgia, and overlapping chronic illness, built for clearer records and specialist appointments.',
    trustLine: 'Private by design. Built for iPhone. Patient-entered data only. Not a diagnostic tool.',
    links: [
      { href: siteConfig.routes.blog, label: 'Blog' },
      { href: siteConfig.routes.knowledge, label: 'Knowledge Hub' },
      { href: '/blog/category/symptom-tracking/', label: 'Symptom Tracking' },
      { href: '/knowledge/pots/', label: 'POTS' },
      { href: '/knowledge/dysautonomia/', label: 'Dysautonomia' },
      { href: '/knowledge/eds/', label: 'EDS / hEDS' },
      { href: '/knowledge/fatigue/', label: 'Fatigue' },
      { href: '/knowledge/dizziness/', label: 'Dizziness' },
      { href: '/knowledge/brain-fog/', label: 'Brain Fog' },
      { href: '/knowledge/doctor-ready-report/', label: 'Doctor Reports' },
      { href: '/authors/', label: 'Authors' },
      { href: siteConfig.routes.support, label: 'Support' },
      { href: siteConfig.routes.privacy, label: 'Privacy' },
      { href: siteConfig.routes.terms, label: 'Terms' },
      { href: `mailto:${siteConfig.support.email}`, label: 'Contact' },
    ],
  },
  appStore: siteConfig.appStore,
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: siteConfig.brand.productName,
      applicationCategory: 'HealthApplication',
      applicationSubCategory: 'Symptom tracker',
      operatingSystem: 'iOS',
      description:
        'Zebra is an iPhone symptom tracker for POTS, dysautonomia, EDS, Fibromyalgia, and overlapping chronic illness. Track symptoms, orthostatic vitals, medications, salt, water, and notes, then export a doctor-ready report for appointments.',
      url: siteConfig.siteUrl,
      downloadUrl: siteConfig.appStore.url,
      featureList: [
        'Track symptoms, flares, triggers, hydration, and medications',
        'Record orthostatic vitals in one guided flow',
        'Organize POTS, EDS, dysautonomia, Fibromyalgia, Long COVID, and ME/CFS symptom history',
        'Export a doctor-ready report for appointments',
      ],
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
      name: 'Zebra landing page',
      url: siteConfig.siteUrl,
      description:
        'Landing page for Zebra, an iPhone symptom tracker for POTS, dysautonomia, EDS, Fibromyalgia, and overlapping chronic illness.',
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
  ],
} as const;

export const privacyPage = {
  seo: {
    title: 'Privacy Policy — Zebra',
    description: 'Privacy policy for Zebra, a symptom tracker for POTS, EDS, and Fibromyalgia.',
  },
  backHref: siteConfig.routes.home,
  backLabel: 'Back to Zebra',
  eyebrow: 'Privacy',
  title: 'Privacy Policy',
  updated: 'Last updated: May 18, 2026',
  intro: [
    'Zebra is a symptom tracker for people with POTS, EDS, and Fibromyalgia. This policy covers both the Zebra app and this website.',
  ],
  sections: [
    {
      heading: 'App health data',
      paragraphs: [
        "All health information you enter in the Zebra app — including daily check-ins, flare logs, orthostatic test results, symptoms, medications, and salt and hydration entries — is stored locally on your device using Apple's SwiftData framework. This data is synced privately to your personal iCloud account via CloudKit. We never receive, access, or store your health data on our servers.",
      ],
    },
    {
      heading: 'Apple Health (HealthKit)',
      paragraphs: [
        'If you grant permission, Zebra reads heart rate data from Apple Health to support the orthostatic test flow. Zebra does not write data back to Apple Health and does not share HealthKit data with any third party. You can revoke this permission at any time in iOS Settings → Health → Data Access & Devices.',
      ],
    },
    {
      heading: 'Notifications',
      paragraphs: [
        'If you enable daily reminders, Zebra uses local notifications delivered entirely on your device. No notification content leaves your device. You can manage or disable notifications in iOS Settings → Zebra.',
      ],
    },
    {
      heading: 'Doctor reports',
      paragraphs: [
        'PDF doctor reports are generated on your device from the data you have entered. Zebra does not upload, transmit, or store these reports. You decide if and where to share any export.',
      ],
    },
    {
      heading: 'Subscriptions',
      paragraphs: [
        'Zebra Premium subscriptions are processed entirely through Apple. We do not collect, see, or store your payment information. Subscription management is handled through your Apple ID account.',
      ],
    },
    {
      heading: 'Website and waitlist',
      paragraphs: [
        'If you join the waitlist or contact us via this website, we may collect your email address and any information you voluntarily include. We use this to send updates about Zebra and reply to questions. We do not sell your personal information. We may use third-party services such as email or hosting providers to manage communications.',
      ],
    },
    {
      heading: 'Data retention',
      paragraphs: [
        'We retain waitlist and contact information only as long as necessary to communicate with interested users. App health data lives on your device and iCloud account and is not held by us.',
      ],
    },
    {
      heading: 'Your choices',
      appendContactEmail: true,
      paragraphs: [
        'You can delete all app data by deleting the Zebra app from your device. To request removal of waitlist or contact information, email us using the contact link below.',
      ],
    },
    {
      heading: 'Medical information',
      paragraphs: [
        'Zebra is not a medical provider. Nothing in this app or on this website constitutes medical advice, diagnosis, or treatment. Always consult a qualified medical professional for medical decisions.',
      ],
    },
  ],
  relatedLinks: [
    { href: siteConfig.routes.home, label: 'Landing page' },
    { href: siteConfig.routes.support, label: 'Support' },
    { href: siteConfig.routes.terms, label: 'Terms of Use' },
  ],
  contactEmail: siteConfig.support.email,
} as const;

export const termsPage = {
  seo: {
    title: 'Terms of Use — Zebra',
    description: 'Terms of use for Zebra, a symptom tracker for POTS, EDS, and Fibromyalgia.',
  },
  backHref: siteConfig.routes.home,
  backLabel: 'Back to Zebra',
  eyebrow: 'Terms',
  title: 'Terms of Use',
  updated: 'Last updated: May 18, 2026',
  intro: [
    'By downloading or using the Zebra app or this website, you agree to these terms. If you do not agree, please do not use Zebra.',
  ],
  sections: [
    {
      heading: 'App purpose',
      paragraphs: [
        'Zebra is a personal symptom-tracking tool for people with POTS, EDS, and Fibromyalgia. It is designed to help you record and review your own health information and generate summaries to share with your healthcare providers.',
      ],
    },
    {
      heading: 'Medical disclaimer',
      paragraphs: [
        'Zebra does not provide medical advice, diagnosis, or treatment. Nothing in the app or on this website is intended to substitute for the advice of a qualified medical professional. Always seek guidance from a licensed clinician before making any medical decisions. If you are experiencing a medical emergency, contact emergency services immediately.',
      ],
    },
    {
      heading: 'Subscriptions',
      paragraphs: [
        'Zebra offers auto-renewable subscriptions under the name Zebra Premium:',
        'Prices are in USD and may vary by region as determined by Apple. Eligible new subscribers receive a 7-day free trial. After the trial period, payment is charged through your Apple ID account. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription at any time in iOS Settings → Apple ID → Subscriptions.',
      ],
      listItems: ['Monthly — $4.99 per month', 'Annual — $39.99 per year'],
    },
    {
      heading: 'Free tier',
      paragraphs: [
        'The free tier includes all tracking features and 30 days of history. No payment information is required to use the free tier.',
      ],
    },
    {
      heading: 'Acceptable use',
      paragraphs: [
        'You agree not to misuse the app or website, interfere with their operation, or submit false or harmful information.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'Unless otherwise stated, the content, branding, design, and materials in the app and on this website belong to Zebra and may not be copied or redistributed without permission.',
      ],
    },
    {
      heading: 'Third-party services',
      paragraphs: [
        "The app uses Apple services including CloudKit, HealthKit, StoreKit, and local notifications. Your use of those services is also subject to Apple's terms and policies.",
      ],
    },
    {
      heading: 'Contact',
      appendContactEmail: true,
      paragraphs: ['If you have questions about these terms, contact us using the email link below.'],
    },
  ],
  relatedLinks: [
    { href: siteConfig.routes.home, label: 'Landing page' },
    { href: siteConfig.routes.support, label: 'Support' },
    { href: siteConfig.routes.privacy, label: 'Privacy Policy' },
  ],
  contactEmail: siteConfig.support.email,
} as const;

export const supportPage = {
  seo: {
    title: 'Support — Zebra',
    description: 'Support resources for Zebra, the symptom tracker for POTS, EDS, and Fibromyalgia.',
  },
  backHref: siteConfig.routes.home,
  backLabel: 'Back to Zebra',
  eyebrow: 'Support',
  title: 'Zebra support',
  intro:
    'Need help with Zebra, the doctor report, or your subscription? This page covers the quickest ways to get unstuck.',
  columns: {
    primary: [
      {
        heading: 'How to get help',
        listItems: [
          'For product help, email us with a short description of what happened.',
          'For billing or subscription management, use the App Store subscription settings on your iPhone.',
          'For doctor-report questions, include what you were trying to export and what happened right before the issue.',
        ],
      },
      {
        heading: 'What Zebra does not do',
        paragraphs: [
          'Zebra is not a medical provider, diagnostic tool, or emergency service. It helps you track and organize information for specialist appointments. It does not provide medical advice.',
        ],
      },
    ],
    secondary: [
      {
        kind: 'contact-list',
        heading: 'Contact',
        links: [
          {
            href: `mailto:${siteConfig.support.email}`,
            label: siteConfig.support.email,
          },
          {
            href: siteConfig.appStore.url,
            label: 'App Store listing',
            external: true,
          },
        ],
      },
      {
        kind: 'link-nav',
        heading: 'Related pages',
        ariaLabel: 'Support links',
        links: [
          { href: siteConfig.routes.privacy, label: 'Privacy Policy' },
          { href: siteConfig.routes.terms, label: 'Terms of Use' },
          { href: siteConfig.routes.home, label: 'Landing page' },
        ],
      },
    ],
  },
} as const;
