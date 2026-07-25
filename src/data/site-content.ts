import { heroShowcase, screenshots, screenshotStory } from './screenshots';
import { siteConfig } from './site-config';

const faqItems = [
  {
    question: 'What is Zebra?',
    answer:
      'Zebra is an iPhone symptom tracker for POTS, EDS/hEDS, Fibromyalgia, dysautonomia, and overlapping invisible illness symptoms. It helps you track patient-entered history and turn it into proof for doctor appointments.',
  },
  {
    question: 'Who is Zebra for?',
    answer:
      'It is built for people managing POTS, dysautonomia, EDS/hEDS, Fibromyalgia, Long COVID, ME/CFS, and overlapping symptoms that are hard to explain from memory in specialist appointments.',
  },
  {
    question: 'Is Zebra a POTS symptom tracker?',
    answer:
      'Yes. Zebra can be used as a POTS symptom tracker on iPhone for upright symptoms, orthostatic vitals, hydration, salt, medications, flares, and appointment notes.',
  },
  {
    question: 'What does Zebra track?',
    answer:
      'Zebra tracks daily flares, symptoms, medications, salt, water, orthostatic vitals, triggers, notes, functional impact, and doctor-ready PDF reports.',
  },
  {
    question: 'Can Zebra help prepare for appointments?',
    answer:
      'Yes. Zebra is built to help you prepare for appointments by keeping patient-entered history organized, showing patterns over time, and exporting a doctor-ready report you can review before a specialist visit.',
  },
  {
    question: 'How is Zebra different from a generic symptom tracker app?',
    answer:
      'Zebra is built for chronic illness tracking and appointment preparation rather than generic wellness streaks. It keeps symptoms, flares, orthostatic vitals, medications, salt, water, function, and notes in one timeline so the history is easier to review later.',
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
      'The free tier includes core tracking and 30 days of history. Premium unlocks unlimited history, doctor-ready PDF report export, and the full orthostatic archive. Eligible new subscribers may receive a 7-day free trial through Apple.',
  },
  {
    question: 'Is Zebra available on Android?',
    answer:
      'Not yet. Zebra is currently built for iPhone and available on the Apple App Store.',
  },
  {
    question: 'Can I use Zebra before I am diagnosed?',
    answer:
      'Yes. Zebra can help you track symptoms, flares, and appointment notes before or after a diagnosis. It does not diagnose conditions or replace medical care.',
  },
  {
    question: 'Can I export a doctor report?',
    answer:
      'Yes. Zebra can turn your tracked history into a doctor-ready PDF report with symptoms, flares, medications, salt, water, orthostatic vitals, notes, and functional impact.',
  },
  {
    question: 'Is Zebra a fitness app?',
    answer:
      'No. Zebra is not a fitness app or streak-based wellness app. It is built for invisible illness tracking and appointment preparation.',
  },
  {
    question: 'How do I get Zebra support?',
    answer: `Use the Zebra support page or email ${siteConfig.support.email} if you need help with the app, billing, or privacy questions.`,
  },
] as const;

export const homePage = {
  seo: {
    title: 'Download Zebra: POTS, EDS & Fibromyalgia Symptom Tracker for iPhone',
    description:
      'Download Zebra for iPhone to track POTS, EDS, Fibromyalgia, flares, meds, salt, water, orthostatic vitals, and doctor-ready reports.',
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
    eyebrow: 'Now available on the App Store',
    title: 'Track your flares. Bring proof to your doctor.',
    body:
      'Zebra is live on iPhone for people tracking POTS, EDS, Fibromyalgia, dysautonomia, and overlapping invisible illness. Track symptoms, meds, salt, water, orthostatic vitals, flares, and notes in under 60 seconds, then turn the history into a doctor-ready report.',
    answerStrip: [
      {
        label: 'What it is',
        value: 'A live iPhone app for tracking POTS, EDS, Fibromyalgia, dysautonomia, flares, and appointment proof.',
      },
      {
        label: 'Who it is for',
        value: 'People with invisible illness, brain fog, chronic flares, and symptoms that are hard to explain from memory.',
      },
      {
        label: 'Why it is different',
        value: 'It keeps daily tracking, orthostatic context, and doctor reports in one place without wellness streaks or generic setup.',
      },
    ],
    quickLinks: [
      {
        label: 'Symptom tracker for doctor appointments',
        href: '/blog/symptom-tracker-for-doctor-appointments/',
      },
      {
        label: 'Best symptom tracker apps for POTS',
        href: '/blog/best-symptom-tracker-apps-for-pots-2026/',
      },
      {
        label: 'What is a doctor-ready symptom report?',
        href: '/blog/what-is-a-doctor-ready-symptom-report/',
      },
    ],
    trustLine:
      'Now available on the App Store. Track free. Export doctor-ready PDF reports with Premium. Built for iPhone, invisible illness, and appointment prep, not diagnosis.',
    ctaText: 'Start tracking today',
    ctaSupport: ['Available for iPhone', 'Built for flare days', 'Private by design', 'Not medical advice'],
    bullets: [
      'Under-60-second check-ins',
      'POTS + EDS + Fibromyalgia in one app',
      'Doctor-ready proof',
    ],
    showcase: heroShowcase,
    supportCard: {
      eyebrow: 'The report is the payoff',
      title: 'Open Zebra before the appointment instead of rebuilding the month from memory.',
      body: 'Daily flare tracking becomes proof: symptoms, meds, salt, water, orthostatic vitals, and notes organized into a report you can review.',
    },
  },
  whatZebraTracks: {
    eyebrow: 'What Zebra tracks',
    title: 'One calm place for the details that usually get scattered.',
    intro:
      'Zebra keeps the daily record short, structured, and useful later. On a hard day, track only what matters and leave.',
    items: [
      {
        title: 'Daily flares',
        body: 'Track severity, duration, and what changed so a bad day does not have to be reconstructed from memory later.',
      },
      {
        title: 'Symptoms',
        body: 'Keep dizziness, pain, fatigue, brain fog, palpitations, sleep issues, and overlap symptoms in one dated history.',
      },
      {
        title: 'Medications',
        body: 'Record timing and notes so medication changes are easier to discuss with a clinician.',
      },
      {
        title: 'Salt and water',
        body: 'Track hydration and salt beside symptoms, while leaving medical decisions about salt and fluids to your care team.',
      },
      {
        title: 'Orthostatic vitals',
        body: 'Save lying, sitting, and standing observations with the symptoms and context from the same day.',
      },
      {
        title: 'Triggers and notes',
        body: 'Capture possible triggers, activity, stress, infection, heat, or notes when they matter, and skip them when you are tired.',
      },
      {
        title: 'Doctor-ready PDF reports',
        body: 'Turn recent tracking into a clearer appointment summary instead of handing over a pile of disconnected notes.',
      },
    ],
    note: 'Zebra is for tracking and appointment preparation. It does not diagnose, treat, or replace medical care.',
  },
  invisibleNeeds: {
    eyebrow: 'Built around real invisible illness needs',
    title: 'Zebra keeps the details that matter when symptoms overlap.',
    intro:
      'The page stays product-led, but the tracking structure is grounded in common needs described by trusted medical and patient-education sources.',
    items: [
      {
        source: 'POTS and dysautonomia',
        title: 'Upright symptoms deserve context.',
        body:
          'POTS can involve dizziness, fatigue, brain fog, palpitations, and symptoms that worsen when upright. Zebra keeps orthostatic vitals beside daily symptoms instead of separating the numbers from the day.',
      },
      {
        source: 'EDS / HSD',
        title: 'Invisible disability is rarely one symptom.',
        body:
          'EDS and hypermobility spectrum disorders can affect multiple body systems and daily function. Zebra gives pain, fatigue, mobility impact, notes, and overlap symptoms one calm place to land.',
      },
      {
        source: 'Fibromyalgia',
        title: 'Pain, fatigue, sleep, and brain fog belong together.',
        body:
          'Fibromyalgia commonly involves widespread pain, fatigue, sleep problems, and thinking or memory issues. Zebra helps keep those changes reviewable before an appointment.',
      },
      {
        source: 'Long COVID and ME/CFS overlap',
        title: 'Timing can matter when symptoms worsen later.',
        body:
          'Long COVID and ME/CFS guidance highlights post-exertional symptom worsening and flare history. Zebra helps preserve timing, possible triggers, function changes, and recovery notes without turning tracking into homework.',
      },
    ],
    note:
      'This section is educational context, not medical advice. Talk with a healthcare professional about diagnosis, treatment, medication, salt or fluid changes, and concerning symptoms.',
  },
  problem: {
    eyebrow: 'Recognize the problem',
    title: 'The hard part is not noticing symptoms. It is explaining them later.',
    statement: 'By the time the appointment starts, the story is split across Notes, screenshots, half-finished trackers, and memory.',
    support:
      'That is why real symptom history still turns into guesswork, especially when brain fog makes recall harder or the worst flare is already over.',
    flowLabel: 'What the month feels like',
    bullets: [
      'You remember fragments, not the timeline',
      'Brain fog makes appointment prep harder',
      'Flares are hard to reconstruct later',
    ],
    quotes: [
      'I have pieces of it everywhere.',
      'I knew it mattered, but I forgot by the appointment.',
      'Nothing showed the full picture when I needed it.',
    ],
  },
  searchContent: {
    eyebrow: 'Why Zebra is different',
    title: 'Built for invisible illness, not generic wellness tracking.',
    intro:
      'Most tracker apps make you build your own system or frame the body like a wellness project. Zebra is built for the harder job: tracking POTS, EDS, Fibromyalgia, dysautonomia, and overlapping symptoms when you are already tired.',
    answer:
      'Zebra is an iPhone symptom tracker for invisible illness. It keeps symptoms, flares, orthostatic vitals, medications, salt, water, function, triggers, and notes in one record so you can create proof for appointments. The goal is not diagnosis. The goal is less memory work and a clearer doctor report.',
    differencesTitle: 'Why use Zebra instead of Notes, spreadsheets, or a generic symptom tracker app?',
    differences: [
      {
        label: 'Structure',
        generic: 'Notes and spreadsheets start blank, so you have to invent the system while you are already tired and trying to remember what matters.',
        zebra: 'Zebra gives symptom tracking structure from the start: flares, symptoms, function, triggers, meds, salt, water, orthostatic vitals, and notes.',
      },
      {
        label: 'Orthostatic tracking',
        generic: 'Generic trackers often separate vitals from symptoms, which makes POTS and dysautonomia history harder to review later.',
        zebra: 'Zebra keeps lying, sitting, and standing orthostatic vitals beside the symptom timeline and daily context.',
      },
      {
        label: 'Appointment prep',
        generic: 'A month of notes can still turn into a rushed explanation when the doctor asks what changed, how often it happened, and what seemed related.',
        zebra: 'Zebra turns patient-entered history into a doctor-ready symptom report for specialist and cardiology appointments.',
      },
      {
        label: 'Privacy',
        generic: 'Many health tools require an account, sync through a service, or feel broader than the problem you need solved.',
        zebra: 'Zebra is private by design and keeps the focus on your own record for care conversations.',
      },
      {
        label: 'Flare days',
        generic: 'Wellness and habit apps can make tracking feel like another task you failed to complete.',
        zebra: 'Zebra is designed for dizzy, exhausted, foggy, or painful days where one quick check-in is enough.',
      },
    ],
    conditionsTitle: 'Built first for POTS, EDS, and dysautonomia, with support for overlapping conditions too.',
    conditionsIntro:
      'Zebra is most useful when symptoms overlap, change by position or activity, and become hard to summarize from memory before an appointment.',
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
      'For search clarity and medical safety, Zebra should be understood as an appointment-preparation and patient-history tool. It summarizes what you enter so you can review it and discuss it with a clinician.',
    trustItems: [
      'Not for diagnosis, treatment, prevention, or emergency symptoms',
      'Not a replacement for a doctor, specialist, or medical advice',
      'Best for preparing a clearer symptom history and doctor-ready report',
    ],
  },
  doctorReport: {
    eyebrow: 'Doctor-ready report',
    title: 'A clearer way to show what happened between appointments.',
    answer:
      'Zebra turns patient-entered symptom history into a doctor-ready PDF report you can review before a specialist appointment instead of reconstructing the month from memory.',
    body: [
      'Instead of retelling the month from memory, you can review a dated record of what happened, how often, and what changed.',
      'The 30-day summary can include flares, symptoms, medications, salt, water, orthostatic vitals, triggers, notes, and functional impact so appointment prep depends less on perfect recall.',
    ],
    bullets: [
      'Symptoms, flares, meds, and triggers together in one dated history',
      'Orthostatic vitals, hydration, and salt kept beside the rest of the timeline',
      'Functional impact and notes preserved before brain fog erases detail',
      'Questions and changes worth discussing before the visit',
      'Careful in its claims and not a diagnostic or treatment tool',
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
          label: 'Meds, hydration, and salt',
          body: 'The context that helps explain what changed around a flare.',
        },
        {
          label: 'Function and notes',
          body: 'Functional impact, notes, and appointment questions worth discussing before the visit ends.',
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
      'Context around triggers, medications, salt, water, and orthostatic changes',
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
    ctaNote: 'Download Zebra and create your first report. Track free; report export is included with Premium.',
    media: screenshotStory.doctorReport,
  },
  howItWorks: {
    eyebrow: 'How Zebra works',
    title: 'Three simple steps, even on low-energy days.',
    intro: 'The flow stays short on bad days and gets more useful as the appointment gets closer.',
    timeline: ['Track symptoms and context', 'See patterns over time', 'Export or review the report'],
    steps: [
      {
        label: 'Track symptoms and context',
        body: 'Log symptoms, flares, orthostatic vitals, meds, salt, water, function, and notes in one quick check-in.',
      },
      {
        label: 'See patterns over time',
        body: 'Keep orthostatic vitals and daily context in the same timeline so patterns are easier to review later.',
      },
      {
        label: 'Export or review a doctor-ready report',
        body: 'Review what changed before the visit and export a doctor-ready report when you want something clean to bring into the room.',
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
    eyebrow: 'Built for flare days',
    title: 'On a hard day, one quick check-in is enough.',
    intro: 'Zebra is designed to stay usable when you are dizzy, exhausted, foggy, or in pain.',
    body: [
      'Open Zebra, tap what changed, and leave. No blank setup. No wellness homework. No streaks. The goal is a usable record, not more time in the app.',
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
    ctaLabel: 'Start tracking today',
    ctaHref: siteConfig.appStore.url,
    ctaNote: 'One calm place for the daily record.',
    media: screenshotStory.dailyTracking,
  },
  orthostaticTest: {
    id: 'orthostatic-test',
    eyebrow: 'Orthostatic test',
    title: 'Track orthostatic vitals where they actually belong.',
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
    title: 'See the bigger picture before the appointment asks for it.',
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
    ctaLabel: 'Get Zebra for iPhone',
    ctaHref: siteConfig.appStore.url,
    ctaNote: 'The clearer the history, the better the report.',
    media: screenshotStory.trends,
  },
  careContext: {
    id: 'care-context',
    eyebrow: 'Medication, hydration, salt, function, and notes',
    title: 'Keep the context that usually gets lost.',
    intro: 'Symptoms make more sense when the surrounding context is still attached to the same day.',
    body: [
      'Zebra keeps medications, hydration, salt, function changes, and notes beside symptoms so flares are easier to review later and appointment prep takes less reconstructing.',
    ],
    momentLabel: 'The context that stays attached',
    sequence: ['Medication changes', 'Hydration and salt', 'Function impact', 'Notes for later'],
    bullets: [
      'Medication context beside symptoms',
      'Salt and water tracked with the rest of the day',
      'Function and notes preserved for appointment prep',
    ],
    cards: [
      {
        eyebrow: 'Why it matters',
        title: 'You do not lose the surrounding context',
        body: 'The details that help explain a flare stay connected instead of scattered across multiple apps.',
      },
      {
        eyebrow: 'Why it converts to a report',
        title: 'The history is already organized for review',
        body: 'That makes the doctor-ready report more useful when you need to summarize quickly.',
      },
    ],
    ctaLabel: 'Read how Zebra compares with Notes',
    ctaHref: '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/',
    ctaNote: 'Useful context beats a blank document every time.',
    layout: 'reverse',
    media: screenshots.todaySummary,
  },
  trust: {
    eyebrow: 'Trust, safety, and privacy',
    title: 'Private, medically careful, and clear about what Zebra is and is not for.',
    intro: 'Zebra stays focused on organizing patient-entered history for care conversations and specialist appointments. It does not diagnose, treat, prevent, or replace medical care.',
    highlight: {
      eyebrow: 'Trust at a glance',
      title: 'Private by design. Built for brain fog. Best for appointment prep.',
      body:
        'Zebra is designed to help you keep a clearer record for specialist appointments, especially when symptoms overlap and recall is unreliable. The app and knowledge hub support self-organization and care conversations, not diagnosis, treatment, prevention, or health-data selling.',
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
        body: 'Your app health data stays on your iPhone and private iCloud account. Zebra does not require an account or run a health-data server.',
      },
      {
        title: 'Best for specialist prep',
        body: 'Zebra fits best when you need a clearer symptom history before cardiology, specialist, or follow-up appointments.',
      },
      {
        title: 'You own the record',
        body: 'No account required, no health-data server, and no rebuilding your history in someone else’s system.',
      },
      {
        title: 'Brain-fog-friendly',
        body: 'Short flows, clear hierarchy, and low-energy use for flare days.',
      },
      {
        title: 'Specialist focused',
        body: 'Built around appointments, not self-optimization or wellness streaks.',
      },
      {
        title: 'Medically careful',
        body: 'No diagnosis, no treatment advice, no prevention claims, and no overclaiming about what your data means.',
      },
      {
        title: 'Not for emergencies',
        body: 'Zebra is not an emergency tool, symptom checker, or replacement for urgent or professional medical care.',
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
        eyebrow: 'Feedback',
        title: 'Send feedback or request a feature',
        body: 'Tell us what would make Zebra easier to use before appointments, especially on flare days.',
        href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback`,
      },
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
    title: 'Built for overlapping chronic illness and specialist appointment prep.',
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
        title: 'Conditions and use cases often tracked in Zebra',
        items: [
          'POTS',
          'Dysautonomia',
          'EDS / hEDS',
          'Fibromyalgia',
          'Long COVID',
          'ME/CFS',
          'Preparation for specialist appointments',
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
    eyebrow: 'Guides and condition hubs',
    title: 'Keep exploring the exact questions people ask before they download a symptom tracker.',
    intro:
      'If you are comparing apps, preparing for an appointment, or trying to track POTS, EDS, and dysautonomia more clearly, these are the best places to start.',
    items: [
      {
        href: '/pots-tracker/',
        label: 'POTS tracker app',
        description: 'A top-level product page for tracking POTS flares, orthostatic vitals, salt, water, medications, and appointment proof.',
      },
      {
        href: '/eds-tracker/',
        label: 'EDS / hEDS tracker app',
        description: 'A condition-aware page for EDS overlap symptoms, pain, fatigue, instability, invisible illness, and doctor report prep.',
      },
      {
        href: '/fibromyalgia-tracker/',
        label: 'Fibromyalgia tracker app',
        description: 'A focused page for tracking fibro flares, pain, fatigue, sleep problems, brain fog, medications, and appointment notes.',
      },
      {
        href: '/orthostatic-vitals-test/',
        label: 'Orthostatic vitals test tracker',
        description: 'A product page for tracking lying, sitting, and standing observations beside symptoms and daily context.',
      },
      {
        href: '/doctor-report/',
        label: 'Doctor-ready symptom report',
        description: 'A conversion page explaining how Zebra turns recent symptom history into a clearer appointment summary.',
      },
      {
        href: '/flare-tracker/',
        label: 'Flare tracker app',
        description: 'A low-energy tracking page for bad days, symptom severity, triggers, notes, and report-ready history.',
      },
      {
        href: '/symptom-tracker-for-invisible-illness/',
        label: 'Symptom tracker for invisible illness',
        description: 'A page for people searching for proof, brain fog support, low-energy check-ins, and appointment preparation.',
      },
      {
        href: '/zebra-vs-visible/',
        label: 'Zebra vs Visible',
        description: 'A top-level comparison for people deciding between pacing support and doctor-ready symptom tracking.',
      },
      {
        href: '/zebra-vs-bearable/',
        label: 'Zebra vs Bearable',
        description: 'A top-level comparison for people choosing between flexible general tracking and POTS/EDS/Fibro appointment prep.',
      },
      {
        href: '/zebra-vs-apple-notes/',
        label: 'Zebra vs Apple Notes',
        description: 'A comparison for people deciding whether structured tracking is better than scattered notes before appointments.',
      },
      {
        href: '/zebra-vs-spreadsheet/',
        label: 'Zebra vs spreadsheet',
        description: 'A comparison for people who want symptom history without maintaining columns, formulas, and manual summaries.',
      },
      {
        href: '/best-pots-symptom-tracker-apps/',
        label: 'Best POTS symptom tracker apps',
        description: 'A decision-stage page explaining what matters in a POTS tracker before cardiology or specialist appointments.',
      },
      {
        href: '/best-chronic-illness-symptom-tracker-apps/',
        label: 'Best chronic illness symptom tracker apps',
        description: 'A broad comparison page for invisible illness, brain fog, flare tracking, and doctor-ready reports.',
      },
      {
        href: '/blog/best-symptom-tracker-for-pots-dysautonomia-eds/',
        label: 'Best symptom tracker for POTS, dysautonomia, and EDS',
        description: 'The central comparison hub for overlapping symptoms, upright context, appointment prep, and doctor-ready reports.',
      },
      {
        href: '/blog/symptom-tracker-for-doctor-appointments/',
        label: 'Symptom tracker for doctor appointments',
        description: 'What to look for in a tracker when the real goal is a clearer specialist or follow-up visit.',
      },
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
        href: '/blog/symptom-tracking-for-chronic-illness-doctor-ready-proof/',
        label: 'Symptom tracking for chronic illness and doctor-ready proof',
        description: 'Why symptom tracking works better when it leads to a clearer report instead of a pile of disconnected notes.',
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
        href: '/blog/best-symptom-tracker-for-dysautonomia/',
        label: 'Best symptom tracker for dysautonomia',
        description: 'A practical comparison for people deciding between appointment-prep tracking, pacing tools, and generic trackers.',
      },
      {
        href: '/blog/best-app-for-autonomic-symptom-tracking/',
        label: 'Best app for autonomic symptom tracking',
        description: 'A practical comparison for people tracking autonomic symptoms, upright context, flares, and appointment questions.',
      },
      {
        href: '/blog/zebra-vs-bearable-for-pots-tracking/',
        label: 'Zebra vs Bearable for POTS tracking',
        description: 'A focused comparison for people choosing between customization-first tracking and cleaner POTS appointment prep.',
      },
      {
        href: '/blog/best-app-for-pots-cardiology-appointment-prep/',
        label: 'Best app for POTS cardiology appointment prep',
        description: 'A practical guide to choosing an app that keeps orthostatic history, meds, salt, and questions reviewable before cardiology visits.',
      },
      {
        href: '/blog/best-app-for-dysautonomia-cardiology-appointment-prep/',
        label: 'Best app for dysautonomia cardiology appointment prep',
        description: 'A practical guide to keeping dysautonomia symptoms, orthostatic context, and visit questions in one cardiology-ready summary.',
      },
      {
        href: '/blog/best-app-for-orthostatic-symptom-tracking/',
        label: 'Best app for orthostatic symptom tracking',
        description: 'A practical guide to keeping upright symptoms, orthostatic observations, and daily context in one record.',
      },
      {
        href: '/blog/best-symptom-tracker-for-orthostatic-intolerance/',
        label: 'Best symptom tracker for orthostatic intolerance',
        description: 'A practical guide to keeping upright symptoms, position changes, and flare context reviewable before appointments.',
      },
      {
        href: '/blog/best-symptom-tracker-for-upright-intolerance/',
        label: 'Best symptom tracker for upright intolerance',
        description: 'A patient-language guide to tracking symptoms that worsen sitting or standing and need a clearer visit summary.',
      },
      {
        href: '/blog/best-symptom-tracker-for-eds-and-dysautonomia-overlap/',
        label: 'Best symptom tracker for EDS and dysautonomia overlap',
        description: 'A practical comparison for people dealing with symptom blur, overlap flares, and specialist appointment prep.',
      },
      {
        href: '/knowledge/eds/',
        label: 'EDS / hEDS condition hub',
        description: 'A connected guide to EDS/hEDS overlap symptoms, daily function, and specialist appointment preparation.',
      },
      {
        href: '/blog/best-symptom-tracker-apps-for-pots-2026/',
        label: 'Best symptom tracker apps for POTS in 2026',
        description: 'A careful tool comparison for people deciding between Zebra, Notes, and other trackers.',
      },
      {
        href: '/blog/zebra-vs-visible-for-chronic-illness-tracking/',
        label: 'Zebra vs Visible for chronic illness tracking',
        description: 'A practical comparison for people deciding between pacing support and appointment-prep symptom tracking.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions about Zebra.',
    items: faqItems,
  },
  trustedReferences: {
    eyebrow: 'Trusted references',
    title: 'The condition context on this page is intentionally careful.',
    intro:
      'Zebra uses trusted sources for plain-language framing, then keeps the product promise narrow: track your own history, prepare for appointments, and talk with a clinician.',
    items: [
      {
        label: 'Johns Hopkins Medicine: POTS',
        href: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/postural-orthostatic-tachycardia-syndrome-pots',
        body: 'Used for POTS symptom and orthostatic context.',
      },
      {
        label: 'Dysautonomia International',
        href: 'https://dysautonomiainternational.org/',
        body: 'Used for dysautonomia education and patient-resource framing.',
      },
      {
        label: 'The Ehlers-Danlos Society: What is EDS?',
        href: 'https://www.ehlers-danlos.com/what-is-eds/',
        body: 'Used for EDS and HSD multi-system context.',
      },
      {
        label: 'EDS UK: What is EDS?',
        href: 'https://www.ehlers-danlos.org/what-is-eds/',
        body: 'Used as an additional EDS patient-education reference.',
      },
      {
        label: 'CDC: Fibromyalgia',
        href: 'https://www.cdc.gov/chronic-disease/fibromyalgia/index.html',
        body: 'Used for fibromyalgia symptoms and chronic-disease framing.',
      },
      {
        label: 'NIAMS: Fibromyalgia',
        href: 'https://www.niams.nih.gov/health-topics/fibromyalgia',
        body: 'Used for pain, fatigue, sleep, and fibro fog context.',
      },
      {
        label: 'CDC: Long COVID symptoms',
        href: 'https://www.cdc.gov/long-covid/signs-symptoms/index.html',
        body: 'Used for symptom variability, brain fog, disability, and post-exertional worsening context.',
      },
      {
        label: 'NICE: ME/CFS guideline',
        href: 'https://www.nice.org.uk/guidance/ng206/chapter/recommendations',
        body: 'Used for flare-up, relapse, and post-exertional malaise language safety.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Download Zebra',
    title: 'Get Zebra for iPhone before your next appointment.',
    body:
      'Start tracking today with the free tier. Upgrade only when you want unlimited history, doctor-ready PDF reports, and the full orthostatic archive.',
    endState: 'A calmer appointment starts with a record you do not have to rebuild.',
    trustLine:
      'Available now on the App Store. Track free. Premium includes doctor report export and full history. Not medical advice.',
  },
  mobileStickyCta: {
    label: 'Get Zebra',
    note: 'iPhone app available now',
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
        'Zebra is an iPhone symptom tracker for POTS, EDS, Fibromyalgia, dysautonomia, and overlapping invisible illness. Track flares, symptoms, orthostatic vitals, medications, salt, water, and notes, then export a doctor-ready PDF report for appointments.',
      url: siteConfig.siteUrl,
      downloadUrl: siteConfig.appStore.url,
      installUrl: siteConfig.appStore.url,
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: siteConfig.appStore.url,
          description: 'Free tracking tier with core tracking features and 30 days of history.',
        },
        {
          '@type': 'Offer',
          price: '4.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: siteConfig.appStore.url,
          description: 'Monthly Premium unlocks unlimited history, doctor-ready PDF report export, and the full orthostatic archive.',
        },
        {
          '@type': 'Offer',
          price: '39.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: siteConfig.appStore.url,
          description: 'Annual Premium unlocks unlimited history, doctor-ready PDF report export, and the full orthostatic archive.',
        },
      ],
      featureList: [
        'Track daily flares, symptoms, triggers, hydration, salt, and medications',
        'Record orthostatic vitals in one guided flow',
        'Organize POTS, EDS, dysautonomia, Fibromyalgia, Long COVID, and ME/CFS symptom history',
        'Export a doctor-ready PDF report for appointments',
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
      name: 'Zebra symptom tracker for POTS, EDS, and dysautonomia',
      url: siteConfig.siteUrl,
      description:
        'Landing page for Zebra, an iPhone symptom tracker for POTS, EDS, dysautonomia, and appointment preparation.',
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
      heading: 'Website contact',
      paragraphs: [
        'If you contact us via this website, we may collect your email address and any information you voluntarily include. We use this to reply to questions and send product-related support when requested. We do not sell your personal information. We may use third-party services such as email or hosting providers to manage communications.',
      ],
    },
    {
      heading: 'Data retention',
      paragraphs: [
        'We retain website contact information only as long as necessary to communicate with users and respond to support requests. App health data lives on your device and iCloud account and is not held by us.',
      ],
    },
    {
      heading: 'Your choices',
      appendContactEmail: true,
      paragraphs: [
        'You can delete all app data by deleting the Zebra app from your device. To request removal of website contact information, email us using the contact link below.',
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
