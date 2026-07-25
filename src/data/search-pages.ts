import { siteConfig, toAbsoluteUrl } from './site-config';

export interface SearchPage {
  slug: string;
  kind: 'condition' | 'feature' | 'comparison';
  lastReviewed: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  directAnswer: string;
  summary: string[];
  whyTitle: string;
  why: string[];
  tracksTitle: string;
  tracks: string[];
  bestFor: string[];
  notFor: string[];
  trust: string;
  cta: string;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  comparison?: {
    columns: [string, string];
    rows: Array<{ factor: string; first: string; second: string }>;
  };
}

export const trustedReferences = [
  {
    label: 'Johns Hopkins Medicine: POTS',
    href: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/postural-orthostatic-tachycardia-syndrome-pots',
  },
  {
    label: 'Dysautonomia International',
    href: 'https://dysautonomiainternational.org/',
  },
  {
    label: 'The Ehlers-Danlos Society: What is EDS?',
    href: 'https://www.ehlers-danlos.com/what-is-eds/',
  },
  {
    label: 'EDS UK: What is EDS?',
    href: 'https://www.ehlers-danlos.org/what-is-eds/',
  },
  {
    label: 'CDC: Fibromyalgia',
    href: 'https://www.cdc.gov/chronic-disease/fibromyalgia/index.html',
  },
  {
    label: 'NIAMS: Fibromyalgia',
    href: 'https://www.niams.nih.gov/health-topics/fibromyalgia',
  },
  {
    label: 'CDC: Long COVID symptoms',
    href: 'https://www.cdc.gov/long-covid/signs-symptoms/index.html',
  },
  {
    label: 'NICE ME/CFS guideline',
    href: 'https://www.nice.org.uk/guidance/ng206/chapter/recommendations',
  },
] as const;

const lastReviewed = 'July 25, 2026';

const defaultFaqs = [
  {
    question: 'Does Zebra diagnose POTS, EDS, Fibromyalgia, or dysautonomia?',
    answer:
      'No. Zebra does not diagnose, treat, prevent, or cure any condition. It helps you track patient-entered history so you can prepare for care conversations.',
  },
  {
    question: 'Can I use Zebra before I am diagnosed?',
    answer:
      'Yes. Zebra can help you track flares, symptoms, notes, and appointment questions before or after a diagnosis. It is not a substitute for professional medical care.',
  },
  {
    question: 'Is Zebra available on Android?',
    answer: 'Not yet. Zebra is currently available for iPhone on the Apple App Store.',
  },
  {
    question: 'Is Zebra a fitness or wellness app?',
    answer:
      'No. Zebra is built for invisible illness tracking, brain fog, flare days, orthostatic vitals, and doctor report preparation. It is not a fitness app or streak-based wellness app.',
  },
] as const;

const commonTracks = [
  'Daily flares, severity, duration, and notes',
  'Symptoms, triggers, notes, and appointment context',
  'Medications, salt, water, and questions to bring up',
  'Orthostatic vitals with lying, sitting, and standing observations',
  'Optional HealthKit heart-rate support for the orthostatic flow',
  'Gentle daily reminders users can control',
  'Doctor-ready PDF report export with Premium',
];

const commonRelated = [
  { label: 'POTS tracker', href: '/pots-tracker/' },
  { label: 'Orthostatic vitals test', href: '/orthostatic-vitals-test/' },
  { label: 'Flare tracker', href: '/flare-tracker/' },
  { label: 'EDS tracker', href: '/eds-tracker/' },
  { label: 'Fibromyalgia tracker', href: '/fibromyalgia-tracker/' },
  { label: 'Doctor report', href: '/doctor-report/' },
  { label: 'Zebra vs Bearable', href: '/zebra-vs-bearable/' },
  { label: 'Zebra vs Visible', href: '/zebra-vs-visible/' },
  { label: 'Best POTS tracker apps', href: '/best-pots-symptom-tracker-apps/' },
  { label: 'Invisible illness tracker', href: '/symptom-tracker-for-invisible-illness/' },
];

function withDefaults(page: SearchPage): SearchPage {
  return {
    ...page,
    lastReviewed: page.lastReviewed || lastReviewed,
    bestFor:
      page.bestFor.length > 0
        ? page.bestFor
        : [
            'You want POTS, EDS/hEDS, Fibromyalgia, dysautonomia, and overlap symptoms in one iPhone app.',
            'You are preparing for a doctor appointment and need a clearer history than memory or scattered notes.',
            'You need low-energy flare tracking with symptoms, meds, salt, water, triggers, and orthostatic vitals together.',
          ],
    notFor:
      page.notFor.length > 0
        ? page.notFor
        : [
            'You are looking for diagnosis, treatment advice, urgent care, or medication recommendations.',
            'You primarily want fitness goals, habit streaks, workouts, or a generic wellness dashboard.',
            'You need Android support today.',
          ],
    faqs: [...page.faqs, ...defaultFaqs],
    related: page.related.length > 0 ? page.related : commonRelated,
  };
}

export const searchPages: SearchPage[] = [
  withDefaults({
    slug: 'pots-tracker',
    kind: 'condition',
    lastReviewed,
    title: 'POTS Tracker App for iPhone | Zebra Symptom Tracker',
    description:
      'Track POTS flares, symptoms, salt, water, medications, orthostatic vitals, and doctor-ready reports in one iPhone app.',
    eyebrow: 'POTS tracker',
    h1: 'POTS tracker app for flares, orthostatic vitals, and appointment proof.',
    directAnswer:
      'Zebra is an iPhone POTS tracker for people who need symptoms, salt, water, medications, orthostatic vitals, and flare notes in one place before a cardiology or specialist appointment.',
    summary: [
      'POTS symptoms often connect to upright posture, heart-rate changes, fatigue, dizziness, palpitations, and brain fog. Zebra keeps that context together instead of splitting symptoms, vitals, and notes across different apps.',
      'Use Zebra to track what happened, when it happened, and what you want to bring up before the appointment.',
    ],
    whyTitle: 'Why POTS tracking needs more than a blank note',
    why: [
      'Orthostatic symptoms can change with standing, heat, illness, skipped fluids, medication changes, and daily context.',
      'A structured tracker reduces the memory load when brain fog makes it hard to explain the last month.',
      'Keeping salt, water, medications, symptoms, and orthostatic vitals together makes the report easier to review.',
    ],
    tracksTitle: 'What Zebra helps track for POTS',
    tracks: commonTracks,
    bestFor: [],
    notFor: [],
    trust:
      'Talk with a clinician before changing salt, fluids, medications, compression, or activity. Zebra helps organize your history; it does not interpret symptoms or provide medical advice.',
    cta: 'Get Zebra for iPhone',
    related: [],
    faqs: [
      {
        question: 'Can Zebra track orthostatic vitals for POTS?',
        answer:
          'Yes. Zebra includes a guided lying, sitting, and standing orthostatic vitals flow so those observations stay connected to symptoms and daily context.',
      },
      {
        question: 'Can Zebra help before a POTS cardiology appointment?',
        answer:
          'Yes. Zebra helps organize recent flares, symptoms, medications, salt, water, orthostatic vitals, and notes into a doctor-ready report you can review before the visit.',
      },
    ],
  }),
  withDefaults({
    slug: 'eds-tracker',
    kind: 'condition',
    lastReviewed,
    title: 'EDS Tracker App for iPhone | Zebra Symptom Tracker',
    description:
      'Track EDS and hEDS pain, fatigue, instability, overlap symptoms, flares, medications, notes, and doctor reports with Zebra.',
    eyebrow: 'EDS / hEDS tracker',
    h1: 'EDS tracker app for invisible symptoms, overlap, and appointment prep.',
    directAnswer:
      'Zebra is an iPhone EDS and hEDS tracker for people who need pain, fatigue, instability, dysautonomia overlap, medications, flares, and notes in one body-wide record.',
    summary: [
      'EDS and HSD can involve symptoms across many body systems, and many symptoms are not visible from the outside. Zebra gives the overlap a single place to land.',
      'The goal is not to prove a diagnosis. The goal is to reduce appointment memory work and keep a clearer history.',
    ],
    whyTitle: 'Why EDS tracking needs an overlap view',
    why: [
      'Pain, fatigue, dizziness, palpitations, digestive issues, mobility limits, and brain fog can appear connected even when they are tracked separately.',
      'A calm tracker can help preserve context before the appointment asks for it.',
      'Zebra is built around invisible illness and specialist prep, not exercise goals or wellness streaks.',
    ],
    tracksTitle: 'What Zebra helps track for EDS and hEDS',
    tracks: commonTracks,
    bestFor: [],
    notFor: [],
    trust:
      'EDS and HSD care decisions belong with qualified healthcare professionals. Zebra helps you track what you experience and prepare questions for care conversations.',
    cta: 'Start tracking EDS symptoms',
    related: [],
    faqs: [
      {
        question: 'Can Zebra track EDS and dysautonomia overlap?',
        answer:
          'Yes. Zebra keeps pain, fatigue, orthostatic symptoms, medications, triggers, notes, and appointment context in one timeline so overlap is easier to review.',
      },
      {
        question: 'Is Zebra only for hypermobile EDS?',
        answer:
          'No. Zebra is not subtype-specific or diagnostic. It is a tracker for patient-entered symptoms, flares, context, and appointment preparation.',
      },
    ],
  }),
  withDefaults({
    slug: 'fibromyalgia-tracker',
    kind: 'condition',
    lastReviewed,
    title: 'Fibromyalgia Tracker App for Flares, Pain & Brain Fog | Zebra',
    description:
      'Track fibromyalgia flares, pain, fatigue, brain fog, medications, triggers, notes, and doctor-ready reports on iPhone.',
    eyebrow: 'Fibromyalgia tracker',
    h1: 'Fibromyalgia tracker for flares, pain, fatigue, and brain fog.',
    directAnswer:
      'Zebra is an iPhone fibromyalgia tracker for people who need a low-energy way to track flares, pain, fatigue, brain fog, medications, triggers, and appointment notes.',
    summary: [
      'Fibromyalgia commonly involves pain, fatigue, sleep problems, and thinking or memory issues. Zebra keeps those changes in one dated record for appointment prep.',
      'On a hard day, one quick check-in is enough. You can add more context later if you have the energy.',
    ],
    whyTitle: 'Why fibromyalgia flare tracking matters',
    why: [
      'Flares are easy to remember in the moment and hard to summarize weeks later.',
      'Pain, fatigue, medications, brain fog, and notes are more useful when they stay connected.',
      'A doctor-ready report helps you review recent history without relying on perfect recall.',
    ],
    tracksTitle: 'What Zebra helps track for fibromyalgia',
    tracks: commonTracks,
    bestFor: [],
    notFor: [],
    trust:
      'Zebra does not interpret pain or recommend treatment. Talk with a healthcare professional about diagnosis, medication, therapy, concerning symptoms, and care decisions.',
    cta: 'Track fibromyalgia flares',
    related: [],
    faqs: [
      {
        question: 'Can Zebra track fibro fog?',
        answer:
          'Yes. Zebra is built for brain fog and low-energy days, with short check-ins and doctor reports that reduce memory work before appointments.',
      },
      {
        question: 'Can I note sleep problems beside pain and fatigue?',
        answer:
          'Yes. Zebra can keep symptoms, flare severity, sleep-related notes, medications, triggers, and appointment context in one timeline. It is not a dedicated sleep tracker.',
      },
    ],
  }),
  withDefaults({
    slug: 'orthostatic-vitals-test',
    kind: 'feature',
    lastReviewed,
    title: 'Orthostatic Vitals Test Tracker for iPhone | Zebra',
    description:
      'Use Zebra to track lying, sitting, and standing orthostatic vitals beside symptoms, flares, salt, water, medications, and doctor reports.',
    eyebrow: 'Orthostatic vitals',
    h1: 'Orthostatic vitals test tracking that stays connected to the rest of the day.',
    directAnswer:
      'Zebra helps people track orthostatic vitals in a guided lying, sitting, and standing flow, then keeps those observations beside symptoms, medications, salt, water, flares, and notes.',
    summary: [
      'Orthostatic testing is often used in POTS and orthostatic intolerance evaluation, but numbers alone can lose the surrounding context.',
      'Zebra keeps the position-based observations with the rest of the timeline so they are easier to review before a clinician visit.',
    ],
    whyTitle: 'Why orthostatic vitals need daily context',
    why: [
      'Standing symptoms, heart-rate changes, hydration, salt, medications, heat, and illness can all be relevant context to discuss with a clinician.',
      'Keeping the test inside the same app as symptoms reduces the need to reconcile screenshots and notes.',
      'The report can include orthostatic observations alongside flares and daily context.',
    ],
    tracksTitle: 'What the Zebra orthostatic flow helps preserve',
    tracks: ['Lying observations', 'Sitting observations', 'Standing observations', ...commonTracks.slice(1)],
    bestFor: [
      'People who want a guided place to record lying, sitting, and standing observations.',
      'People who want orthostatic vitals connected to symptoms, meds, salt, water, triggers, and notes.',
      'People preparing for a cardiology or specialist visit who do not want vitals stuck in screenshots.',
    ],
    notFor: [
      'People looking for Zebra to diagnose POTS or interpret whether a test result is normal.',
      'People who need clinician-directed testing, emergency care, or treatment advice.',
      'People who need Android support today.',
    ],
    trust:
      'Zebra tracks observations you enter. It does not diagnose POTS, determine whether a test is normal, or replace clinician-directed testing.',
    cta: 'Track orthostatic vitals',
    related: [],
    faqs: [
      {
        question: 'Does Zebra run a medical test?',
        answer:
          'No. Zebra provides a guided tracking flow for patient-entered orthostatic observations. A clinician decides what testing means.',
      },
      {
        question: 'Can orthostatic vitals appear in the doctor report?',
        answer:
          'Yes. Zebra can include orthostatic vitals history in the doctor-ready report with symptoms and daily context.',
      },
    ],
  }),
  withDefaults({
    slug: 'doctor-report',
    kind: 'feature',
    lastReviewed,
    title: 'Doctor-Ready Symptom Report App for iPhone | Zebra',
    description:
      'Create a doctor-ready report from flares, symptoms, meds, salt, water, orthostatic vitals, triggers, notes, and appointment context.',
    eyebrow: 'Doctor report',
    h1: 'A doctor-ready symptom report from the history you already tracked.',
    directAnswer:
      'Zebra turns patient-entered flares, symptoms, medications, salt, water, orthostatic vitals, triggers, notes, and appointment context into a doctor-ready PDF report for appointments.',
    summary: [
      'The report is designed for the moment when memory gets thin and the appointment clock is running.',
      'It gives you a clearer way to show what happened between appointments without promising a diagnosis or specific outcome.',
    ],
    whyTitle: 'Why a doctor-ready report helps',
    why: [
      'A dated summary is easier to review than scattered notes, screenshots, and app exports.',
      'Recent symptoms, medications, orthostatic context, salt, water, triggers, and notes can stay in one report.',
      'You can use the report to prepare questions before the visit and spend less energy rebuilding the timeline.',
    ],
    tracksTitle: 'What Zebra can include in the report',
    tracks: commonTracks,
    bestFor: [
      'People who want a 30-day symptom summary before a doctor or specialist appointment.',
      'People who forget details under appointment pressure and want flares, meds, salt, water, triggers, notes, and orthostatic vitals in one report.',
      'People who want a Premium PDF export after tracking their own history.',
    ],
    notFor: [
      'People looking for a diagnostic report, clinician interpretation, treatment plan, or guaranteed doctor response.',
      'People who need full export formats beyond the current PDF report workflow.',
      'People who need Android support today.',
    ],
    trust:
      'A report can support a clearer conversation, but it does not ensure belief, diagnosis, treatment, or any specific medical outcome.',
    cta: 'Create your first doctor report',
    related: [],
    faqs: [
      {
        question: 'Can I export a PDF report?',
        answer:
          'Yes. Doctor-ready PDF report export is included with Premium, while the free tier includes core tracking and 30 days of history.',
      },
      {
        question: 'What should I track before an appointment?',
        answer:
          'Start with flares, symptoms, medications, salt, water, orthostatic vitals, triggers, notes, and questions you want to ask.',
      },
    ],
  }),
  withDefaults({
    slug: 'flare-tracker',
    kind: 'feature',
    lastReviewed,
    title: 'Flare Tracker App for Invisible Illness | Zebra',
    description:
      'Track chronic illness flares, severity, symptoms, triggers, medications, notes, and doctor-ready reports in under 60 seconds.',
    eyebrow: 'Flare tracker',
    h1: 'A flare tracker for bad days, brain fog, and appointment proof.',
    directAnswer:
      'Zebra is an iPhone flare tracker that helps people quickly track severity, duration, symptoms, medications, triggers, and notes, then use that history for a doctor report.',
    summary: [
      'A flare tracker only works if it is usable during the flare. Zebra keeps the check-in short so a dizzy, exhausted, foggy, or painful day can still be captured.',
      'Later, those short check-ins become a clearer timeline for appointments.',
    ],
    whyTitle: 'Why flare tracking fails on hard days',
    why: [
      'Blank notes ask you to decide what matters while you are already low on energy.',
      'Long forms create guilt when symptoms are worst.',
      'Zebra lets one quick check-in be enough, then organizes the history for later.',
    ],
    tracksTitle: 'What Zebra helps track during a flare',
    tracks: commonTracks,
    bestFor: [],
    notFor: [],
    trust:
      'Zebra is not an emergency tool. Seek urgent care or emergency services for concerning, severe, or rapidly worsening symptoms.',
    cta: 'Start tracking flares',
    related: [],
    faqs: [
      {
        question: 'Can I track only one thing on a bad day?',
        answer:
          'Yes. Zebra is designed so one quick check-in can still preserve the day without requiring a full diary.',
      },
      {
        question: 'Can flare history help with appointments?',
        answer:
          'Yes. Flare history can make it easier to review what changed, what repeated, and what questions you want to bring to a clinician.',
      },
    ],
  }),
  withDefaults({
    slug: 'symptom-tracker-for-invisible-illness',
    kind: 'feature',
    lastReviewed,
    title: 'Symptom Tracker for Invisible Illness | Zebra',
    description:
      'Zebra is an iPhone symptom tracker for invisible illness, brain fog, flare days, orthostatic vitals, and doctor-ready reports.',
    eyebrow: 'Invisible illness tracker',
    h1: 'A symptom tracker for invisible illness that does not feel like homework.',
    directAnswer:
      'Zebra is an iPhone symptom tracker for invisible illness, built for people who need low-energy tracking, brain fog support, flare history, orthostatic vitals, and a doctor-ready report.',
    summary: [
      'Invisible illness can make the hardest part of care feel like proving what happened when nobody else saw it.',
      'Zebra helps you track your own history calmly and bring clearer proof to the appointment without turning your body into a wellness project.',
    ],
    whyTitle: 'Why invisible illness tracking needs to feel different',
    why: [
      'Symptoms may not be visible during the visit, even when they affected your whole month.',
      'Brain fog can make recall unreliable at the exact moment you need clarity.',
      'A tracker built for flare days should save taps, decisions, typing, time, and energy.',
    ],
    tracksTitle: 'What Zebra keeps in one place',
    tracks: commonTracks,
    bestFor: [],
    notFor: [],
    trust:
      'Zebra supports self-organization and care conversations. It is not a diagnostic tool, treatment plan, or replacement for medical advice.',
    cta: 'Download Zebra',
    related: [],
    faqs: [
      {
        question: 'Can Zebra help if my symptoms are invisible during the appointment?',
        answer:
          'Zebra can help you bring a clearer patient-entered history of what happened between appointments, but it cannot control how any clinician will respond.',
      },
      {
        question: 'Is Zebra built for brain fog?',
        answer:
          'Yes. Zebra uses short, structured check-ins and report summaries so you do not have to rebuild everything from memory.',
      },
    ],
  }),
  withDefaults({
    slug: 'zebra-vs-bearable',
    kind: 'comparison',
    lastReviewed,
    title: 'Zebra vs Bearable for POTS, EDS & Fibromyalgia Tracking',
    description:
      'Compare Zebra vs Bearable for chronic illness tracking, POTS, EDS, Fibromyalgia, orthostatic vitals, and doctor reports.',
    eyebrow: 'Comparison',
    h1: 'Zebra vs Bearable: which symptom tracker fits POTS, EDS, and Fibromyalgia?',
    directAnswer:
      'Bearable is a flexible general tracker. Zebra is built specifically for POTS, EDS, Fibromyalgia, flare days, orthostatic vitals, salt and water context, and doctor-ready reports.',
    summary: [
      'Choose Bearable if you want a broad customizable tracker. Choose Zebra if the job is lower-effort invisible illness tracking and a clearer report before appointments.',
    ],
    whyTitle: 'The real decision',
    why: [
      'Will I keep using it on bad days?',
      'Will it already understand POTS, EDS, Fibromyalgia, orthostatic vitals, salt, water, and flare context?',
      'Will it help me prepare for an appointment instead of creating another pile of entries?',
    ],
    tracksTitle: 'Where Zebra is strongest',
    tracks: commonTracks,
    bestFor: [
      'Choose Zebra if you want condition-aware tracking for POTS, EDS/hEDS, Fibromyalgia, orthostatic vitals, and appointment reports.',
      'Choose Zebra if heavy setup or blank-page tracking is hard on flare days.',
      'Choose Zebra if the main payoff is a doctor-ready PDF report with Premium.',
    ],
    notFor: [
      'Bearable may be a better fit if you want a broad, highly customizable tracker across many personal factors.',
      'Bearable may be a better fit if you already have a setup that works and do not need POTS/EDS/Fibromyalgia-specific structure.',
      'Zebra is not a diagnosis, treatment, or emergency tool.',
    ],
    trust:
      'This comparison is based on product positioning and public-facing feature fit. It is not medical advice and does not attack competitor users.',
    cta: 'Try Zebra for appointment prep',
    related: [],
    faqs: [
      {
        question: 'Is Zebra a Bearable alternative for POTS?',
        answer:
          'Zebra can be a better fit if you want POTS-specific tracking, orthostatic vitals, salt and water context, and a doctor-ready report without heavy setup.',
      },
      {
        question: 'Should I switch if Bearable already works for me?',
        answer:
          'Not necessarily. If Bearable fits your routine, keep what works. Zebra is for people who need less setup and more appointment-prep structure.',
      },
    ],
    comparison: {
      columns: ['Bearable', 'Zebra'],
      rows: [
        { factor: 'Best fit', first: 'Broad custom health tracking', second: 'POTS, EDS, Fibromyalgia, and appointment prep' },
        { factor: 'Setup burden', first: 'Highly customizable, which can take setup', second: 'Condition-aware structure from the start' },
        { factor: 'Orthostatic vitals', first: 'Not the core workflow', second: 'Guided lying, sitting, standing tracking' },
        { factor: 'Doctor report', first: 'Useful exports depending on setup', second: 'Doctor-ready report is the product payoff' },
      ],
    },
  }),
  withDefaults({
    slug: 'zebra-vs-visible',
    kind: 'comparison',
    lastReviewed,
    title: 'Zebra vs Visible for Chronic Illness Tracking',
    description:
      'Compare Zebra vs Visible for POTS, EDS, Fibromyalgia, pacing, flare tracking, orthostatic vitals, and doctor appointment reports.',
    eyebrow: 'Comparison',
    h1: 'Zebra vs Visible: pacing support or appointment-ready symptom tracking?',
    directAnswer:
      'Visible is known for pacing support, especially in energy-limiting illness. Zebra is built for symptom tracking, POTS/EDS/Fibromyalgia overlap, orthostatic vitals, flare context, and doctor reports.',
    summary: [
      'Both tools can matter to chronic illness users, but they solve different jobs. Zebra is for keeping the record you want before an appointment.',
    ],
    whyTitle: 'The real decision',
    why: [
      'Do you need pacing support, or do you need a symptom history and report?',
      'Do you need POTS, EDS, Fibromyalgia, salt, water, medication, and orthostatic context in one app?',
      'Do you want a report that helps you prepare for a clinician visit?',
    ],
    tracksTitle: 'Where Zebra is strongest',
    tracks: commonTracks,
    bestFor: [
      'Choose Zebra if you need symptom tracking, orthostatic context, medications, salt, water, and appointment reports in one place.',
      'Choose Zebra if your next job is preparing a clearer history for a doctor visit.',
      'Choose Zebra if you want an iPhone app without separate Zebra hardware.',
    ],
    notFor: [
      'Visible may be a better fit if your primary need is pacing support for energy-limiting illness.',
      'Visible may be a better fit if you specifically want a pacing-first workflow rather than appointment-prep tracking.',
      'Zebra is not a pacing coach, diagnosis tool, or treatment plan.',
    ],
    trust:
      'This comparison is about use case fit. Zebra does not replace pacing guidance, clinical care, or medical advice.',
    cta: 'Download Zebra for iPhone',
    related: [],
    faqs: [
      {
        question: 'Is Zebra a Visible alternative?',
        answer:
          'Zebra may be an alternative if your main need is symptom tracking and doctor reports. Visible may fit better if your main need is pacing support.',
      },
      {
        question: 'Does Zebra require extra hardware?',
        answer:
          'No. Zebra is an iPhone app and does not require a separate armband or dedicated hardware.',
      },
    ],
    comparison: {
      columns: ['Visible', 'Zebra'],
      rows: [
        { factor: 'Best fit', first: 'Pacing and energy management support', second: 'Symptom tracking and appointment reports' },
        { factor: 'Condition focus', first: 'Energy-limiting chronic illness', second: 'POTS, EDS, Fibromyalgia, dysautonomia overlap' },
        { factor: 'Hardware', first: 'Pacing workflows may use additional wearable context', second: 'iPhone app; no separate Zebra hardware required' },
        { factor: 'Doctor report', first: 'Not the primary promise', second: 'Core workflow and Premium payoff' },
      ],
    },
  }),
  withDefaults({
    slug: 'zebra-vs-apple-notes',
    kind: 'comparison',
    lastReviewed,
    title: 'Zebra vs Apple Notes for Symptom Tracking',
    description:
      'Compare Zebra vs Apple Notes for tracking POTS, EDS, Fibromyalgia, flares, orthostatic vitals, and doctor reports.',
    eyebrow: 'Comparison',
    h1: 'Zebra vs Apple Notes: structured symptom tracking or scattered notes?',
    directAnswer:
      'Apple Notes is flexible but blank. Zebra gives symptoms, flares, meds, salt, water, orthostatic vitals, triggers, notes, and doctor reports a structure built for invisible illness.',
    summary: [
      'Notes can work for quick thoughts. Zebra is better when the goal is a consistent history you can review before an appointment.',
    ],
    whyTitle: 'The real decision',
    why: [
      'Can you find the important detail when the appointment starts?',
      'Do your notes connect symptoms with meds, salt, water, and orthostatic vitals?',
      'Can you turn the month into a report without rebuilding it manually?',
    ],
    tracksTitle: 'Where Zebra is strongest',
    tracks: commonTracks,
    bestFor: [
      'Choose Zebra if Notes have become too scattered to review before appointments.',
      'Choose Zebra if you want structured fields for flares, symptoms, meds, salt, water, triggers, notes, and orthostatic vitals.',
      'Choose Zebra if you want Premium PDF report export instead of manually summarizing a note.',
    ],
    notFor: [
      'Apple Notes may be enough if you only need occasional free-form thoughts.',
      'Apple Notes may be better if you want a completely unstructured writing space.',
      'Zebra is not a replacement for emergency care, diagnosis, or treatment advice.',
    ],
    trust: 'Zebra helps organize information you enter. It does not decide what your symptoms mean.',
    cta: 'Replace scattered notes',
    related: [],
    faqs: [
      {
        question: 'Is Apple Notes enough for symptom tracking?',
        answer:
          'It can be enough for simple notes. Zebra is built for people who need structure, repeatable check-ins, orthostatic context, and a doctor-ready report.',
      },
      {
        question: 'Can I still use Notes with Zebra?',
        answer:
          'Yes. Zebra can hold the structured health history while Notes can still hold general thoughts or questions.',
      },
    ],
    comparison: {
      columns: ['Apple Notes', 'Zebra'],
      rows: [
        { factor: 'Structure', first: 'Blank page', second: 'Condition-aware tracking fields' },
        { factor: 'Bad-day effort', first: 'Requires writing', second: 'Short guided check-in' },
        { factor: 'Orthostatic vitals', first: 'Manual and disconnected', second: 'Guided flow in the same timeline' },
        { factor: 'Report', first: 'Manual summary', second: 'Doctor-ready PDF export with Premium' },
      ],
    },
  }),
  withDefaults({
    slug: 'zebra-vs-spreadsheet',
    kind: 'comparison',
    lastReviewed,
    title: 'Zebra vs Spreadsheet for Symptom Tracking',
    description:
      'Compare Zebra vs spreadsheets for chronic illness symptom tracking, POTS, EDS, Fibromyalgia, flares, and doctor reports.',
    eyebrow: 'Comparison',
    h1: 'Zebra vs spreadsheet: symptom tracking that works on flare days.',
    directAnswer:
      'Spreadsheets can store anything, but they ask you to design and maintain the system. Zebra gives invisible illness tracking structure and a doctor-ready report without spreadsheet upkeep.',
    summary: [
      'A spreadsheet is powerful on a good day. Zebra is built for the day when you are dizzy, foggy, exhausted, or in pain.',
    ],
    whyTitle: 'The real decision',
    why: [
      'Do you want to maintain formulas and columns during a flare?',
      'Do you need phone-first tracking that takes under 60 seconds?',
      'Do you want the report to be ready without formatting work?',
    ],
    tracksTitle: 'Where Zebra is strongest',
    tracks: commonTracks,
    bestFor: [
      'Choose Zebra if spreadsheet upkeep falls apart on dizzy, foggy, painful, or exhausted days.',
      'Choose Zebra if you want iPhone-first check-ins and a Premium doctor-ready PDF report.',
      'Choose Zebra if you want less setup and more appointment-prep structure.',
    ],
    notFor: [
      'A spreadsheet may be better if you want custom formulas, custom charts, or full control over every column.',
      'A spreadsheet may be better if you want raw data modeling more than low-energy tracking.',
      'Zebra is not a medical calculator or diagnostic spreadsheet.',
    ],
    trust: 'Zebra is not a medical spreadsheet or diagnostic calculator. It is a patient-entered tracking and report tool.',
    cta: 'Track without spreadsheet upkeep',
    related: [],
    faqs: [
      {
        question: 'Is a spreadsheet more flexible than Zebra?',
        answer:
          'Yes, a spreadsheet can be more flexible. Zebra trades some flexibility for lower effort, condition-aware structure, and report preparation.',
      },
      {
        question: 'Can Zebra export everything?',
        answer:
          'Zebra focuses on doctor-ready PDF report export with Premium. Check the current app for available export options.',
      },
    ],
    comparison: {
      columns: ['Spreadsheet', 'Zebra'],
      rows: [
        { factor: 'Setup', first: 'Build your own columns', second: 'Ready-to-use tracking structure' },
        { factor: 'Mobile use', first: 'Can be fiddly on phone', second: 'Built for iPhone check-ins' },
        { factor: 'Brain fog', first: 'High decision load', second: 'Short guided flow' },
        { factor: 'Appointment output', first: 'Manual formatting', second: 'Doctor-ready PDF report with Premium' },
      ],
    },
  }),
  withDefaults({
    slug: 'best-pots-symptom-tracker-apps',
    kind: 'comparison',
    lastReviewed,
    title: 'Best POTS Symptom Tracker Apps | Zebra',
    description:
      'Compare what to look for in a POTS symptom tracker app: orthostatic vitals, salt, water, meds, flares, and doctor-ready reports.',
    eyebrow: 'Best apps',
    h1: 'Best POTS symptom tracker apps: what actually matters before appointments.',
    directAnswer:
      'The best POTS symptom tracker app should keep upright symptoms, orthostatic vitals, salt, water, medications, flares, triggers, notes, and appointment questions in one reviewable history.',
    summary: [
      'For POTS, the app matters less than whether you can keep using it on low-energy days and bring a clear history to the clinician who asks what changed.',
    ],
    whyTitle: 'What to look for in a POTS tracker',
    why: [
      'Orthostatic vitals should stay connected to symptoms and daily context.',
      'Salt, water, medications, heat, illness, and flare notes should be easy to add.',
      'The app should help with appointment prep, not only daily tracking.',
    ],
    tracksTitle: 'Why Zebra is a strong fit',
    tracks: commonTracks,
    bestFor: [
      'People comparing POTS tracker apps for orthostatic vitals, salt, water, meds, symptoms, and appointment prep.',
      'People who want condition-aware structure without building a tracker from scratch.',
      'People who want an iPhone app focused on doctor report preparation.',
    ],
    notFor: [
      'People who need Android support today.',
      'People who mainly want fitness, workouts, or habit streaks.',
      'People looking for diagnosis, treatment advice, or clinician interpretation.',
    ],
    trust:
      'This page helps compare tracking features. Ask a clinician about diagnosis, treatment, salt/fluid changes, medications, and concerning symptoms.',
    cta: 'Try Zebra for POTS tracking',
    related: [],
    faqs: [
      {
        question: 'What should a POTS tracker include?',
        answer:
          'A useful POTS tracker should include symptoms, flares, orthostatic vitals, salt, water, medications, triggers, notes, and a way to prepare for appointments.',
      },
      {
        question: 'Is Zebra only for POTS?',
        answer:
          'No. Zebra is built for POTS, dysautonomia, EDS/hEDS, Fibromyalgia, Long COVID, ME/CFS, and overlapping invisible illness symptoms.',
      },
    ],
    comparison: {
      columns: ['Generic tracker', 'Zebra'],
      rows: [
        { factor: 'POTS context', first: 'Often requires custom setup', second: 'POTS-aware from the start' },
        { factor: 'Orthostatic vitals', first: 'May be separate or missing', second: 'Built into the tracking flow' },
        { factor: 'Salt and water', first: 'May need workarounds', second: 'Tracked beside symptoms' },
        { factor: 'Appointment prep', first: 'Often requires manual summary', second: 'Doctor-ready report workflow' },
      ],
    },
  }),
  withDefaults({
    slug: 'best-chronic-illness-symptom-tracker-apps',
    kind: 'comparison',
    lastReviewed,
    title: 'Best Chronic Illness Symptom Tracker Apps | Zebra',
    description:
      'Compare chronic illness symptom tracker apps for invisible illness, brain fog, flares, POTS, EDS, Fibromyalgia, and doctor reports.',
    eyebrow: 'Best apps',
    h1: 'Best chronic illness symptom tracker apps for invisible illness and doctor reports.',
    directAnswer:
      'The best chronic illness symptom tracker app should work on bad days, reduce memory work, track overlap symptoms, and help create a clear appointment summary rather than another wellness dashboard.',
    summary: [
      'For invisible illness, tracking has to respect energy. Zebra is built around quick check-ins, overlap symptoms, orthostatic vitals, and doctor-ready reports.',
    ],
    whyTitle: 'What matters for chronic illness tracking',
    why: [
      'Low-energy check-ins matter more than complex dashboards.',
      'Overlap symptoms should stay together instead of living in separate apps.',
      'A doctor report gives the tracking a practical appointment payoff.',
    ],
    tracksTitle: 'Why Zebra is a strong fit',
    tracks: commonTracks,
    bestFor: [
      'People comparing chronic illness symptom trackers for invisible illness, brain fog, flares, and appointment reports.',
      'People who want POTS, EDS/hEDS, Fibromyalgia, dysautonomia, Long COVID, and ME/CFS context in one iPhone app.',
      'People who need a lower-effort alternative to scattered notes or complex trackers.',
    ],
    notFor: [
      'People who need Android support today.',
      'People who want a broad fitness, wellness, or workout app.',
      'People looking for diagnosis, treatment advice, or guaranteed medical outcomes.',
    ],
    trust:
      'Zebra helps organize patient-entered history. It does not replace care, diagnose conditions, or tell you what symptoms mean.',
    cta: 'Download Zebra for iPhone',
    related: [],
    faqs: [
      {
        question: 'What is the best symptom tracker for invisible illness?',
        answer:
          'The best tracker is one you can keep using on hard days. Zebra is built for low-energy chronic illness tracking, brain fog, flares, and doctor report preparation.',
      },
      {
        question: 'Can one app track POTS, EDS, and Fibromyalgia together?',
        answer:
          'Yes. Zebra is built specifically around POTS, EDS/hEDS, Fibromyalgia, dysautonomia, and overlapping invisible illness symptoms.',
      },
    ],
    comparison: {
      columns: ['Generic chronic illness apps', 'Zebra'],
      rows: [
        { factor: 'Main framing', first: 'Often broad wellness or routine tracking', second: 'Invisible illness and appointment prep' },
        { factor: 'Overlap support', first: 'May require custom setup', second: 'POTS, EDS, Fibromyalgia together' },
        { factor: 'Bad-day use', first: 'Can become too much', second: 'Under-60-second check-ins' },
        { factor: 'Report payoff', first: 'Varies by app', second: 'Doctor-ready PDF report with Premium' },
      ],
    },
  }),
];

export const searchPageRoutes = searchPages.map((page) => `/${page.slug}/`);

export function getSearchPageUrl(page: SearchPage) {
  return toAbsoluteUrl(`/${page.slug}/`);
}

export function getSoftwareApplicationSchema(page: SearchPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.brand.productName,
    applicationCategory: 'HealthApplication',
    applicationSubCategory: 'Symptom tracker',
    operatingSystem: 'iOS',
    url: getSearchPageUrl(page),
    downloadUrl: siteConfig.appStore.url,
    installUrl: siteConfig.appStore.url,
    description: page.directAnswer,
    featureList: page.tracks,
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
        description:
          'Monthly Premium unlocks unlimited history, doctor-ready PDF report export, and the full orthostatic archive.',
      },
      {
        '@type': 'Offer',
        price: '39.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: siteConfig.appStore.url,
        description:
          'Annual Premium unlocks unlimited history, doctor-ready PDF report export, and the full orthostatic archive.',
      },
    ],
  };
}
