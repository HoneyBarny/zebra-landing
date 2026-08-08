import { heroShowcase, screenshots, screenshotStory } from './screenshots';
import { siteConfig } from './site-config';

const faqItems = [
  {
    question: 'What is Zebra?',
    answer:
      'Zebra is an iPhone symptom tracker for POTS, EDS, and Fibromyalgia. It helps you track patient-entered history and turn it into a doctor-ready report for specialist appointments.',
  },
  {
    question: 'What does Zebra track?',
    answer:
      'Zebra tracks daily flares, symptoms, medications, salt, water, orthostatic vitals, triggers, notes, and doctor-ready PDF reports.',
  },
  {
    question: 'Can Zebra help prepare for appointments?',
    answer:
      'Yes. Zebra keeps your symptom history organized, shows patterns over time, and exports a doctor-ready report you can review before a specialist visit.',
  },
  {
    question: 'How is Zebra different from Notes or a generic tracker?',
    answer:
      'Notes and spreadsheets start blank. Zebra gives you condition-specific structure, orthostatic vitals tracking, and a one-tap doctor report — without wellness streaks or generic setup.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'App health data is stored on your iPhone and may sync through your personal iCloud account. Zebra does not require a Zebra account or run a separate health-data server.',
  },
  {
    question: 'Does Zebra diagnose or treat anything?',
    answer:
      'No. Zebra does not diagnose, treat, or provide medical advice. It helps you organize your history for care conversations.',
  },
  {
    question: 'What does Premium include?',
    answer:
      'The free tier includes core tracking and 30 days of history. Premium unlocks unlimited history, doctor-ready PDF report export, and the full orthostatic archive.',
  },
] as const;

export const homePage = {
  seo: {
    title: 'Zebra: POTS, EDS & Fibromyalgia Symptom Tracker for iPhone',
    description:
      'Track POTS, EDS & Fibromyalgia symptoms, flares, orthostatic vitals, and meds — then turn the history into a doctor-ready report. Free to track.',
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
    eyebrow: 'For POTS, EDS & Fibromyalgia',
    title: 'Finally have proof for your doctor.',
    body:
      'Track symptoms, flares, orthostatic vitals, meds, salt, water, and notes in one calm place — then turn the history into a doctor-ready report.',
    answerStrip: [],
    quickLinks: [],
    quickLinksTitle: '',
    trustLine:
      'Free to track. Private by design. Your data stays on your device.',
    ctaSupport: ['Private by design', 'No account required', 'Not medical advice'],
    bullets: [
      'One app for POTS, EDS, and Fibromyalgia',
      'Under-60-second check-ins',
      'Doctor-ready PDF report',
    ],
    showcase: heroShowcase,
    supportCard: {
      eyebrow: 'The report is the payoff',
      title: 'Open Zebra before the appointment instead of rebuilding the month from memory.',
      body: 'Daily flare tracking becomes proof: symptoms, meds, salt, water, orthostatic vitals, and notes organized into a report you can review.',
    },
  },
  leadMagnets: {
    eyebrow: 'Free appointment-prep tools',
    title: 'Free tools you can open right now',
    intro:
      'Start with the exact asset you need: a POTS appointment blog guide, a sample doctor report PDF, or a simple guide on what to track after diagnosis.',
    items: [
      {
        title: '7-Day Appointment Prep Checklist',
        audience: 'For appointment prep and diagnostic limbo',
        body:
          'A simple checklist for flares, top symptoms, medication changes, salt, water, orthostatic vitals, function impact, and the questions you do not want to forget in the room.',
        href: '/appointment-prep-checklist/',
        cta: 'Open the checklist',
      },
      {
        title: '30-Day Doctor Report Sample',
        audience: 'For seeing what doctor-ready proof looks like',
        body:
          'Preview how tracked flares, symptoms, orthostatic vitals, medications, salt, water, triggers, and notes can turn into a calmer summary.',
        href: '/sample-doctor-report.pdf',
        cta: 'Open the sample PDF',
      },
      {
        title: 'What To Track After Diagnosis',
        audience: 'For newly diagnosed users who need a starting point',
        body:
          'A short starter guide for deciding what to track first, what can wait, and how to avoid turning symptom tracking into another exhausting project.',
        href: '/blog/what-to-track-before-a-specialist-appointment/',
        cta: 'Get the guide',
      },
    ],
    note:
      'These tools are educational and organizational only. They do not diagnose, replace medical advice, or promise what a clinician will conclude.',
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
        body: 'Keep dizziness, pain, fatigue, brain fog, palpitations, notes, and overlap symptoms in one dated history.',
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
          'EDS and hypermobility spectrum disorders can affect multiple body systems. Zebra gives pain, fatigue, notes, and overlap symptoms one calm place to land.',
      },
      {
        source: 'Fibromyalgia',
        title: 'Pain, fatigue, notes, and brain fog belong together.',
        body:
          'Fibromyalgia commonly involves widespread pain, fatigue, sleep problems, and thinking or memory issues. Zebra helps keep flares, symptoms, medications, triggers, and notes reviewable before an appointment.',
      },
      {
        source: 'Long COVID and ME/CFS overlap',
        title: 'Timing can matter when symptoms worsen later.',
        body:
          'Long COVID and ME/CFS guidance highlights post-exertional symptom worsening and flare history. Zebra helps preserve timing, possible triggers, and recovery notes without turning tracking into homework.',
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
  trackingPaths: {
    eyebrow: 'Choose your tracking path',
    title: 'Start with the symptom story your appointment actually needs.',
    intro:
      'Different conditions create different kinds of appointment stress. Zebra gives each path a clearer starting point, so you can track what matters without building a system from scratch.',
    items: [
      {
        label: 'POTS and dysautonomia',
        title: 'Track upright symptoms with orthostatic context.',
        body:
          'Use Zebra as a POTS symptom tracker for dizziness, palpitations, fatigue, brain fog, hydration, salt, medication notes, and lying-sitting-standing observations.',
        pain: 'Best when you need to explain what happens after standing, heat, dehydration, medication changes, or a flare.',
        href: '/knowledge/pots/',
        cta: 'Open the POTS hub',
      },
      {
        label: 'EDS / hEDS',
        title: 'Keep pain, instability, fatigue, and overlap symptoms together.',
        body:
          'Use Zebra as an EDS symptom tracker when joint pain, injuries, dysautonomia symptoms, fatigue, and notes are too scattered to summarize quickly.',
        pain: 'Best when one specialist asks about one body system, but your month involved several.',
        href: '/knowledge/eds/',
        cta: 'Open the EDS hub',
      },
      {
        label: 'Fibromyalgia',
        title: 'Preserve flare patterns before brain fog erases the details.',
        body:
          'Use Zebra as a fibromyalgia symptom tracker for pain, fatigue, sleep context, brain fog, medication changes, triggers, and function impact.',
        pain: 'Best when pain and fatigue changed your day, but the exact timeline is hard to rebuild later.',
        href: '/knowledge/fibromyalgia/',
        cta: 'Open the fibromyalgia hub',
      },
      {
        label: 'Doctor appointment prep',
        title: 'Turn recent symptoms into a doctor-ready report.',
        body:
          'Use Zebra before a specialist visit to gather flares, top symptoms, orthostatic vitals, medication changes, questions, and daily-life impact in one place.',
        pain: 'Best when the visit is short and you do not want to spend it searching notes or guessing from memory.',
        href: '/knowledge/chronic-illness-appointment-prep/',
        cta: 'Open appointment prep',
      },
    ],
    note:
      'Zebra is an organizing tool for patient-entered history. It does not diagnose, treat, or replace medical care.',
  },
  proofBridge: {
    eyebrow: 'What changes with Zebra',
    title: 'From scattered symptoms to one doctor-ready story.',
    intro:
      'Zebra is not just a place to track. It is the bridge between a hard month and a clearer appointment, especially when symptoms overlap and memory gets unreliable.',
    items: [
      {
        label: 'One body, one timeline',
        title: 'Overlap symptoms stop living in separate places.',
        before:
          'POTS notes in one app, pain somewhere else, medication changes in memory, and screenshots buried in Photos.',
        after:
          'Flares, orthostatic vitals, meds, salt, water, triggers, notes, and overlap symptoms stay connected in one record.',
      },
      {
        label: 'Proof under pressure',
        title: 'Appointment prep takes less rebuilding.',
        before:
          'You try to summarize weeks of symptoms while tired, foggy, rushed, or worried about being dismissed again.',
        after:
          'Zebra gives you a recent timeline and doctor-ready PDF so the important parts are easier to review and share.',
      },
      {
        label: 'Bad-day friendly',
        title: 'A partial entry still counts.',
        before:
          'The days that matter most are often the days with the least energy to type, sort, and explain.',
        after:
          'A quick flare-day check-in can stand on its own, without streaks, guilt, or a demand to catch up perfectly.',
      },
    ],
    note:
      'Zebra organizes patient-entered history for care conversations. It does not diagnose, treat, or promise what a clinician will conclude.',
  },
  searchContent: {
    eyebrow: 'Why Zebra is different',
    title: 'Built for invisible illness, not generic wellness tracking.',
    intro:
      'Most tracker apps make you build your own system or frame the body like a wellness project. Zebra is built for the harder job: tracking POTS, EDS, Fibromyalgia, dysautonomia, and overlapping symptoms when you are already tired.',
    answer:
      'Zebra is an iPhone symptom tracker for invisible illness. It keeps symptoms, flares, orthostatic vitals, medications, salt, water, triggers, notes, and appointment context in one record so you can create proof for appointments. The goal is not diagnosis. The goal is less memory work and a clearer doctor report.',
    differencesTitle: 'Why use Zebra instead of Notes, spreadsheets, or a generic symptom tracker app?',
    differences: [
      {
        label: 'Structure',
        generic: 'Notes and spreadsheets start blank, so you have to invent the system while you are already tired and trying to remember what matters.',
        zebra: 'Zebra gives symptom tracking structure from the start: flares, symptoms, triggers, meds, salt, water, orthostatic vitals, and notes.',
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
        body: 'Keep autonomic symptoms, position changes, triggers, medications, and notes in one timeline instead of scattered notes.',
      },
      {
        name: 'EDS and hEDS symptom tracking',
        body: 'Record pain, fatigue, overlap symptoms, and notes so variability is easier to explain later.',
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
        body: 'Use lower-effort check-ins to preserve history around fatigue, post-exertional worsening, and recovery notes.',
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
    eyebrow: 'The payoff',
    title: 'The report is what changes the appointment.',
    answer:
      'Daily tracking becomes a doctor-ready PDF: symptoms, orthostatic vitals, medications, salt, water, triggers, and notes — organized for your specialist.',
    body: [
      'Instead of retelling the month from memory, you can review a dated record of what happened, how often, and what changed.',
    ],
    bullets: [
      'Symptoms, flares, meds, and triggers in one dated history',
      'Orthostatic vitals and hydration beside the timeline',
      'Notes preserved before brain fog erases detail',
      'Questions worth discussing before the visit ends',
    ],
    preview: {
      eyebrow: 'Report preview',
      title: 'What the doctor-ready report includes',
      body:
        'A plain-language appointment summary built from the history you tracked.',
      items: [
        {
          label: 'Symptom timeline',
          body: 'Dated changes, flares, and symptom frequency.',
        },
        {
          label: 'Orthostatic vitals',
          body: 'Lying, sitting, and standing observations beside symptoms.',
        },
        {
          label: 'Meds, hydration, and salt',
          body: 'The context that helps explain what changed around a flare.',
        },
        {
          label: 'Notes and questions',
          body: 'Symptom context and appointment questions worth discussing.',
        },
      ],
    },
    sampleReport: {
      href: '/sample-doctor-report.pdf',
      label: 'View a sample doctor report',
      note: 'Uses fake patient data for preview only.',
    },
    proofLabel: 'The outcome',
    proofTitle: 'The doctor report is the payoff.',
    proofBody:
      'Daily logs become useful when they help you prepare, explain what changed, and hand over a record a specialist can review quickly.',
    outcomesLabel: 'What you have after 30 days',
    outcomes: [
      'A clearer symptom history instead of scattered notes',
      'A timeline of flares, changes, and notes',
      'Context around triggers, medications, and orthostatic changes',
      'A doctor-ready report you can review or share before the visit',
    ],
    comparison: [
      {
        label: 'Before Zebra',
        title: 'Rebuild the month from memory',
        points: ['Open Notes', 'Search screenshots', 'Hope you remember the important part'],
      },
      {
        label: 'With Zebra',
        title: 'Walk in with the record already made',
        points: ['Review the timeline', 'Export the doctor report', 'Spend the visit talking, not reconstructing'],
      },
    ],
    ctaNote: 'Track free. Export your report with Premium.',
    media: screenshotStory.doctorReport,
  },
  appointmentPrep: {
    eyebrow: 'Appointment prep',
    title: 'Seven days before the visit, track the parts you do not want to rebuild from memory.',
    intro:
      'Zebra helps you turn the week before an appointment into a clearer story: what changed, what repeated, what affected daily life, and what you want to ask while you are in the room.',
    checklistTitle: 'What to capture first',
    checklist: [
      {
        label: 'Recent flares',
        body: 'Track severity, duration, and what changed so the worst days do not disappear once the flare passes.',
      },
      {
        label: 'Top symptoms',
        body: 'Choose the symptoms that matter most instead of trying to document every sensation perfectly.',
      },
      {
        label: 'Medication changes',
        body: 'Keep timing, dose notes, side effects, and questions beside the symptom timeline.',
      },
      {
        label: 'Salt, water, and context',
        body: 'Track hydration and salt beside symptoms when they are relevant to your care plan.',
      },
      {
        label: 'Orthostatic vitals',
        body: 'Save lying, sitting, and standing observations with the same day’s symptoms and notes.',
      },
      {
        label: 'Function impact',
        body: 'Capture what symptoms changed about standing, working, school, sleep, errands, or recovery.',
      },
      {
        label: 'Questions for the room',
        body: 'Write the questions you do not want brain fog, stress, or a short appointment to erase.',
      },
    ],
    pathsTitle: 'Condition-specific proof paths',
    paths: [
      {
        condition: 'POTS and dysautonomia',
        body: 'Bring upright symptoms, orthostatic observations, salt and water context, medication notes, and flare timing into one view.',
      },
      {
        condition: 'EDS / hEDS',
        body: 'Keep pain, instability, fatigue, injuries, notes, and overlap symptoms connected instead of scattered across separate trackers.',
      },
      {
        condition: 'Fibromyalgia and overlap flares',
        body: 'Preserve pain, fatigue, brain fog, medication changes, sleep context, and functional impact for a clearer follow-up conversation.',
      },
    ],
    samplePreview: {
      eyebrow: 'Sample report',
      title: 'What a one-page appointment view can look like',
      meta: 'Example only, using fake patient data.',
      rows: [
        { label: 'Main change', value: 'More dizziness and fatigue after short standing tasks' },
        { label: 'Recent flares', value: '3 notable flare days, recovery slower than usual' },
        { label: 'Context', value: 'Medication change, lower hydration, two high-heat days' },
        { label: 'Ask at visit', value: 'What should I track before the next follow-up?' },
      ],
      note: 'The report preview is not a diagnosis. It shows how Zebra can organize patient-entered history for a clearer conversation.',
    },
    note:
      'Use this as an organizing aid, not a diagnostic checklist. Zebra does not diagnose, treat, or tell you what a clinician should conclude.',
  },
  howItWorks: {
    eyebrow: 'How Zebra works',
    title: 'Three simple steps, even on low-energy days.',
    intro: 'The flow stays short on bad days and gets more useful as the appointment gets closer.',
    timeline: ['Track symptoms and context', 'See patterns over time', 'Export or review the report'],
    steps: [
      {
        label: 'Track symptoms and context',
        body: 'Log symptoms, flares, orthostatic vitals, meds, salt, water, triggers, and notes in one quick check-in.',
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
        body: 'Track symptoms, triggers, hydration, meds, and notes.',
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
    appStoreBadgeURL: siteConfig.appStore.badgeUrl,
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
    appStoreBadgeURL: siteConfig.appStore.badgeUrl,
    media: screenshotStory.trends,
  },
  careContext: {
    id: 'care-context',
    eyebrow: 'Medication, hydration, salt, triggers, and notes',
    title: 'Keep the context that usually gets lost.',
    intro: 'Symptoms make more sense when the surrounding context is still attached to the same day.',
    body: [
      'Zebra keeps medications, hydration, salt, triggers, and notes beside symptoms so flares are easier to review later and appointment prep takes less reconstructing.',
    ],
    momentLabel: 'The context that stays attached',
    sequence: ['Medication changes', 'Hydration and salt', 'Triggers', 'Notes for later'],
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
        body: 'App health data is stored on your iPhone and may sync through your personal iCloud account, depending on Apple/iCloud settings and the current app build. Zebra does not require a Zebra account or run a separate Zebra health-data server.',
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
          'want better context around symptoms, heart rate, medications, and notes',
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
        href: '/appointment-prep-checklist/',
        label: '7-day appointment prep checklist',
        description: 'A focused landing page for what to track before a chronic illness appointment, especially when memory and energy are limited.',
      },
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
        description: 'A focused page for tracking fibro flares, pain, fatigue, brain fog, medications, and appointment notes.',
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
        description: 'A practical checklist for symptoms, flares, meds, notes, and questions.',
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
        description: 'A connected guide to EDS/hEDS overlap symptoms, notes, and specialist appointment preparation.',
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
        body: 'Used for pain, fatigue, notes, and fibro fog context.',
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
    title: 'Finally have proof for your doctor.',
    body:
      'Start tracking today with the free tier. Upgrade when you want unlimited history and doctor-ready PDF reports.',
    endState: 'A calmer appointment starts with a record you do not have to rebuild.',
    trustLine:
      'Track free · Private by design · Cancel anytime',
  },
  mobileStickyCta: {
    label: 'Get Zebra',
    note: 'Bring proof to your doctor',
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
    'The app and the website are separate. The app holds your health data and sends it nowhere. The website is marketing, and — only if you agree to it — measures how well our ads work. Nothing connects the two: this website cannot see anything you enter in the app, and the app does not report back to this website.',
  ],
  sections: [
    {
      heading: 'App health data',
      paragraphs: [
        "All health information you enter in the Zebra app — including daily check-ins, flare logs, orthostatic test results, symptoms, medications, and salt and hydration entries — is stored locally on your device using Apple's SwiftData framework. Depending on Apple/iCloud settings and the current app build, this data may sync privately to your personal iCloud account via CloudKit. We never receive, access, or store your health data on our servers.",
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
      heading: 'Website advertising measurement',
      paragraphs: [
        'We run ads on Meta (Facebook and Instagram). To see whether those ads reach people who find Zebra useful, this website can load the Meta pixel — a small script from Meta that reports back that a visit happened.',
        'It only loads if you press Accept in the banner shown on your first visit. Until you do, it is not loaded and no request is made to Meta. Declining is a real choice with no reduced version of the site behind it: everything works the same either way.',
        'If you accept, Meta receives that you viewed a page on this site, and that you pressed a button to open Zebra on the App Store — including which button, so we can tell one ad placement from another. It also receives the information any website receives when your browser makes a request, such as your IP address and browser type, and it may match that against a Meta account if you have one.',
        'It does not receive anything about your health. This website has no access to your check-ins, flares, symptoms, medications, orthostatic tests, or doctor reports — that information never leaves your device and this site was never able to see it. We do not send Meta the page you were reading or the address you were heading to, and we do not send your name, email address, or any identifier we hold.',
        'App Store links on this site also carry an Apple campaign parameter, which tells App Store Connect which ad a download came from. Apple reads it when the App Store opens. It runs no script in your browser, stores nothing on your device, and identifies a campaign rather than a person, so it is not covered by the consent banner.',
      ],
    },
    {
      heading: 'Changing your mind about advertising measurement',
      paragraphs: [
        'Select "Cookie preferences" — at the end of this page, and in the footer of the main site. That clears your stored choice and shows the banner again so you can choose afresh. Choosing Decline stops the pixel loading on every page from then on. It cannot unload a script already running in the tab you are looking at, so reload the page if you want it gone immediately.',
        'Your choice is kept in your browser\'s local storage under "zebra_consent_v1" and nowhere else. We do not have a copy of it. Clearing your browser data clears it too, and you will be asked again.',
      ],
    },
    {
      heading: 'Data retention',
      paragraphs: [
        'We retain website contact information only as long as necessary to communicate with users and respond to support requests. App health data is stored on your device and may sync through your personal iCloud account, depending on Apple/iCloud settings and the current app build. It is not held by us.',
        'Advertising measurement data collected through the Meta pixel is held by Meta under their own retention terms, not ours. We see it only as aggregate campaign reporting.',
      ],
    },
    {
      heading: 'Your choices',
      appendContactEmail: true,
      paragraphs: [
        'You can delete all app data by deleting the Zebra app from your device. You can accept or decline advertising measurement on this website at any time using the "Cookie preferences" control at the end of this page. To request removal of website contact information, email us using the contact link below.',
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
        'Prices are in USD and may vary by region as determined by Apple. The app paywall is built around a 7-day free trial for eligible new subscribers; confirm the current Apple purchase sheet before subscribing. After the trial period, payment is charged through your Apple ID account. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription at any time in iOS Settings → Apple ID → Subscriptions.',
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
