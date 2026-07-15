export const authorProfiles = {
  'zebra-editorial': {
    slug: 'zebra-editorial',
    name: 'Zebra Editorial Team',
    role: 'Research-led patient education',
    bio: 'Zebra Editorial Team translates chronic-illness research, customer language, and product workflows into practical guidance for symptom tracking, appointment preparation, and doctor-ready reports.',
    editorialPolicy:
      'Every Zebra article is written to clarify tracking, appointment preparation, and doctor-ready reporting without making diagnostic or treatment claims.',
    researchMethodology:
      'Content is based on Zebra product truth, customer language, community research, and reputable medical references when definitions or condition context require them.',
    reviewMethodology:
      'Each page is reviewed against product accuracy, customer language, medical-language safety, and search-intent usefulness before publication or refresh.',
    updatePolicy:
      'Pages are reviewed when product workflows change, when canonical research documents are updated, or when the editorial team finds accuracy gaps.',
    medicalDisclaimer:
      'Zebra content supports self-organization and care conversations. It does not diagnose, treat, or replace medical advice.',
    reviewProcess:
      'Drafts move through Content Factory, SEO review, AI-search review, editorial review, and publishing validation before release.',
    sourcesPolicy:
      'Product claims must match canonical Zebra documents. Medical context should be cautious, referenced, and limited to explanation rather than advice.',
    citationStandards:
      'Condition definitions and medical context should rely on reputable sources, while product behavior must cite Zebra’s canonical product and operating documents.',
    contentFreshnessPolicy:
      'Published pages display updated dates and should be refreshed when product features, medical language safety, or search intent changes materially.',
  },
} as const;

export const categoryMeta = {
  'symptom-tracking': {
    slug: 'symptom-tracking',
    name: 'Symptom Tracking',
    description: 'Practical guidance for tracking symptoms, flares, function changes, and patterns without creating more work on hard days.',
  },
  pots: {
    slug: 'pots',
    name: 'POTS',
    description: 'POTS-focused tracking, appointment prep, and pattern-building content built for upright symptoms and specialist visits.',
  },
  dysautonomia: {
    slug: 'dysautonomia',
    name: 'Dysautonomia',
    description: 'Resources for orthostatic symptoms, autonomic dysfunction, and the practical side of keeping a usable record.',
  },
  'appointment-preparation': {
    slug: 'appointment-preparation',
    name: 'Appointment Preparation',
    description: 'Checklists, summaries, and workflows that help you walk into appointments with a clearer story and fewer gaps.',
  },
  'doctor-reports': {
    slug: 'doctor-reports',
    name: 'Doctor Reports',
    description: 'Explainers and supporting guides around Zebra’s doctor-ready report workflow and how to build a useful symptom summary.',
  },
  'brain-fog': {
    slug: 'brain-fog',
    name: 'Brain Fog',
    description: 'Low-friction tracking guidance for cognitive symptoms, missed days, and harder-to-explain changes.',
  },
  fatigue: {
    slug: 'fatigue',
    name: 'Fatigue',
    description: 'Energy-limited tracking strategies that keep symptom history useful even when daily logging feels hard.',
  },
  comparisons: {
    slug: 'comparisons',
    name: 'Comparisons',
    description: 'Decision support for choosing between apps, notes, spreadsheets, and condition-specific tracking tools.',
  },
} as const;

export const clusterMeta = {
  'symptom-tracking': {
    slug: 'symptom-tracking',
    name: 'Symptom Tracking',
    description: 'The core tracking workflow: symptoms, context, daily function, and enough structure to make the history useful later.',
  },
  'appointment-preparation': {
    slug: 'appointment-preparation',
    name: 'Appointment Preparation',
    description: 'Pages that help people turn symptom history into a usable visit summary, question list, or doctor-ready report.',
  },
  'doctor-reports': {
    slug: 'doctor-reports',
    name: 'Doctor Reports',
    description: 'The report workflow, why it matters, and which pieces of tracked history make it easier to review.',
  },
  pots: {
    slug: 'pots',
    name: 'POTS',
    description: 'The POTS cluster connects upright symptoms, orthostatic tracking, flares, hydration, and specialist preparation.',
  },
  dysautonomia: {
    slug: 'dysautonomia',
    name: 'Dysautonomia',
    description: 'The dysautonomia cluster groups autonomic symptoms, orthostatic changes, and low-friction ways to keep context together.',
  },
  eds: {
    slug: 'eds',
    name: 'EDS / hEDS',
    description: 'The EDS cluster centers overlap symptoms, pacing, daily-function impact, and the challenge of explaining variability clearly.',
  },
  fibromyalgia: {
    slug: 'fibromyalgia',
    name: 'Fibromyalgia',
    description: 'The fibromyalgia cluster focuses on pain, fatigue, flare context, daily-function impact, and symptom summarization.',
  },
  'long-covid': {
    slug: 'long-covid',
    name: 'Long COVID',
    description: 'The Long COVID cluster connects fatigue, post-exertional worsening, orthostatic symptoms, and appointment preparation.',
  },
  'me-cfs': {
    slug: 'me-cfs',
    name: 'ME/CFS',
    description: 'The ME/CFS cluster centers post-exertional malaise, fatigue, functional limits, and practical ways to keep a symptom history usable.',
  },
  comparisons: {
    slug: 'comparisons',
    name: 'Comparisons',
    description: 'The comparisons cluster helps people decide between Zebra, other apps, notes, spreadsheets, and generic tracking systems.',
  },
} as const;

type EntityType =
  | 'condition'
  | 'symptom'
  | 'measurement'
  | 'workflow'
  | 'support'
  | 'comparison';

type HubSection =
  | 'symptoms'
  | 'testing'
  | 'doctor-visits'
  | 'medication-tracking'
  | 'reports'
  | 'daily-management'
  | 'overlap'
  | 'definitions';

type KnowledgeEntity = {
  slug: string;
  name: string;
  summary: string;
  definition: string;
  entityType: EntityType;
  clusters: string[];
  hubSection: HubSection;
  relatedCategorySlugs: string[];
  aliases?: string[];
  featured?: boolean;
};

export const knowledgeEntities: KnowledgeEntity[] = [
  {
    slug: 'pots',
    name: 'POTS',
    summary: 'A central Zebra condition hub for upright symptoms, orthostatic changes, daily tracking, and specialist appointment prep.',
    definition:
      'POTS is one of Zebra’s core condition hubs. On Zebra, it usually connects symptom tracking, orthostatic context, hydration and salt changes, daily function, and the need for a clearer appointment-ready record.',
    entityType: 'condition',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    featured: true,
  },
  {
    slug: 'dysautonomia',
    name: 'Dysautonomia',
    summary: 'A broad autonomic-nervous-system hub for orthostatic symptoms, upright intolerance, and related daily-tracking workflows.',
    definition:
      'Dysautonomia is a broad umbrella term for autonomic-nervous-system dysfunction. In Zebra it acts as a cluster hub for orthostatic symptoms, heart-rate changes, flares, and appointment preparation.',
    entityType: 'condition',
    clusters: ['dysautonomia', 'pots', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['dysautonomia', 'pots', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'eds',
    name: 'EDS',
    summary: 'A condition hub for EDS-related overlap, symptom variability, daily-function limits, and visit preparation.',
    definition:
      'EDS is a Zebra knowledge-hub condition page for people tracking complex overlap symptoms, fluctuating function, and chronic-illness appointment history.',
    entityType: 'condition',
    clusters: ['eds', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'brain-fog'],
    featured: true,
  },
  {
    slug: 'heds',
    name: 'hEDS',
    summary: 'A hypermobile EDS hub that supports overlap tracking, pain and function context, and clearer history before care visits.',
    definition:
      'hEDS is the hypermobile EDS knowledge page in Zebra’s entity graph. It supports overlap-oriented tracking and better context for specialist appointments.',
    entityType: 'condition',
    clusters: ['eds', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'overlap',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation'],
    aliases: ['Hypermobile Ehlers-Danlos syndrome'],
  },
  {
    slug: 'fibromyalgia',
    name: 'Fibromyalgia',
    summary: 'A condition hub for pain, fatigue, flare patterns, and the challenge of summarizing changes clearly over time.',
    definition:
      'Fibromyalgia is one of Zebra’s overlap condition hubs. The page connects fatigue, flares, daily-function change, and the need for a usable long-term symptom history.',
    entityType: 'condition',
    clusters: ['fibromyalgia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'long-covid',
    name: 'Long COVID',
    summary: 'A condition hub for fatigue, dizziness, post-exertional worsening, orthostatic symptoms, and care-conversation prep.',
    definition:
      'Long COVID is a Zebra knowledge-hub condition page for tracking persistent symptoms, energy limits, orthostatic changes, and the context needed for follow-up care.',
    entityType: 'condition',
    clusters: ['long-covid', 'me-cfs', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking', 'appointment-preparation', 'dysautonomia'],
    featured: true,
  },
  {
    slug: 'me-cfs',
    name: 'ME/CFS',
    summary: 'A condition hub for post-exertional malaise, fatigue, function limits, and low-friction symptom history.',
    definition:
      'ME/CFS is a Zebra condition hub for post-exertional worsening, fatigue, cognitive symptoms, and the need to preserve a usable health history even on low-energy days.',
    entityType: 'condition',
    clusters: ['me-cfs', 'long-covid', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['fatigue', 'brain-fog', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'mcas',
    name: 'MCAS',
    summary: 'An overlap-condition knowledge page for fluctuating symptom patterns, triggers, and context that is often hard to reconstruct later.',
    definition:
      'MCAS is included in Zebra’s entity graph as an overlap condition where timing, triggers, flares, and symptom context often matter as much as the symptom list itself.',
    entityType: 'condition',
    clusters: ['dysautonomia', 'symptom-tracking'],
    hubSection: 'overlap',
    relatedCategorySlugs: ['symptom-tracking'],
  },
  {
    slug: 'brain-fog',
    name: 'Brain Fog',
    summary: 'Cognitive symptoms such as slowed thinking, memory gaps, and reduced recall that can make tracking and appointments harder.',
    definition:
      'Brain fog is a symptom hub for slowed thinking, recall problems, and the difficulty of reconstructing a month clearly at appointment time.',
    entityType: 'symptom',
    clusters: ['symptom-tracking', 'appointment-preparation', 'me-cfs', 'long-covid', 'fibromyalgia'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['brain-fog', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'fatigue',
    name: 'Fatigue',
    summary: 'A core symptom hub for low energy, stamina limits, and the practical challenge of tracking enough without creating more work.',
    definition:
      'Fatigue is one of Zebra’s cornerstone symptom pages. It covers energy-limited tracking, function changes, and why consistency has to stay realistic on bad days.',
    entityType: 'symptom',
    clusters: ['fatigue', 'symptom-tracking', 'fibromyalgia', 'long-covid', 'me-cfs', 'pots'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'dizziness',
    name: 'Dizziness',
    summary: 'A symptom hub for dizziness patterns, upright worsening, and the context that helps those episodes make more sense later.',
    definition:
      'Dizziness is a Zebra symptom page for recording when it happens, what position or trigger context matters, and how it affects function or appointments.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'long-covid', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'lightheadedness',
    name: 'Lightheadedness',
    summary: 'A symptom hub for floaty, faint, or unstable upright feelings that often need position-linked context to stay useful.',
    definition:
      'Lightheadedness is an upright-symptom knowledge page for tracking position changes, timing, and surrounding context rather than only writing down the word itself.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'long-covid', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
  },
  {
    slug: 'syncope',
    name: 'Syncope',
    summary: 'A symptom hub for fainting episodes and near-faint context that is important to preserve clearly and cautiously.',
    definition:
      'Syncope is a knowledge page for documenting fainting or near-faint episodes with timing, activity, upright context, and follow-up questions for care visits.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'appointment-preparation'],
  },
  {
    slug: 'tachycardia',
    name: 'Tachycardia',
    summary: 'A symptom and measurement hub for fast heart-rate episodes, timing, and what else was happening around them.',
    definition:
      'Tachycardia is a Zebra entity page for documenting fast heart-rate episodes in context rather than as isolated numbers.',
    entityType: 'measurement',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
  },
  {
    slug: 'palpitations',
    name: 'Palpitations',
    summary: 'A symptom hub for skipped, pounding, or fluttering heart sensations that benefit from timing and context rather than memory alone.',
    definition:
      'Palpitations is a Zebra symptom page for tracking how heart sensations show up, what else happened around them, and how they affect daily function or questions for care.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'appointment-preparation'],
  },
  {
    slug: 'exercise-intolerance',
    name: 'Exercise Intolerance',
    summary: 'A symptom hub for activity-linked worsening, stamina limits, and what happens after exertion.',
    definition:
      'Exercise intolerance is a knowledge page for recording how activity affects symptoms, stamina, recovery, and later function.',
    entityType: 'symptom',
    clusters: ['pots', 'long-covid', 'me-cfs', 'fibromyalgia', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking'],
  },
  {
    slug: 'pem',
    name: 'PEM',
    summary: 'A symptom hub for post-exertional worsening, delayed crashes, and the need to track recovery context over time.',
    definition:
      'PEM, or post-exertional malaise, is a Zebra knowledge page for delayed worsening after activity, including how to capture the trigger, delay, severity, and recovery window.',
    entityType: 'symptom',
    clusters: ['me-cfs', 'long-covid', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking'],
  },
  {
    slug: 'orthostatic-intolerance',
    name: 'Orthostatic Intolerance',
    summary: 'Symptoms that worsen when upright and often improve when lying down, making position-linked tracking especially useful.',
    definition:
      'Orthostatic intolerance is a Zebra entity page for symptoms that change with position, especially when upright context matters more than one isolated reading.',
    entityType: 'condition',
    clusters: ['pots', 'dysautonomia', 'long-covid', 'symptom-tracking'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'orthostatic-test',
    name: 'Orthostatic Test',
    summary: 'A guided way to record lying, sitting, and standing observations so position-based changes stay connected to the rest of the day.',
    definition:
      'The orthostatic test page explains Zebra’s guided lying, sitting, and standing workflow and why position-based observations are more useful when saved in the same timeline as symptoms and notes.',
    entityType: 'measurement',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'doctor-reports'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'doctor-reports'],
    featured: true,
  },
  {
    slug: 'orthostatic-hypotension',
    name: 'Orthostatic Hypotension',
    summary: 'A knowledge page for blood-pressure drops with position change and the value of documenting them in context.',
    definition:
      'Orthostatic hypotension is a Zebra entity page for position-linked blood-pressure drops and the surrounding symptom context that makes those observations easier to review later.',
    entityType: 'measurement',
    clusters: ['dysautonomia', 'pots', 'symptom-tracking'],
    hubSection: 'testing',
    relatedCategorySlugs: ['dysautonomia', 'pots', 'symptom-tracking'],
  },
  {
    slug: 'orthostatic-tachycardia',
    name: 'Orthostatic Tachycardia',
    summary: 'A knowledge page for heart-rate increases tied to position change and the context needed to interpret them later.',
    definition:
      'Orthostatic tachycardia is a Zebra entity page for position-linked heart-rate change, including how it fits with symptoms, activity, and appointment preparation.',
    entityType: 'measurement',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
  },
  {
    slug: 'hydration',
    name: 'Hydration',
    summary: 'A daily-management hub for water intake, fluid consistency, and why it helps to keep those changes in the same timeline as symptoms.',
    definition:
      'Hydration is a Zebra knowledge page for tracking fluids as part of the same symptom story instead of as a separate habit app.',
    entityType: 'support',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'doctor-reports', 'pots'],
  },
  {
    slug: 'salt-loading',
    name: 'Salt Loading',
    summary: 'A daily-management hub for recording salt changes alongside symptoms, flares, and upright context.',
    definition:
      'Salt loading is a Zebra knowledge page about capturing salt intake as context that may matter to symptoms, flares, and doctor discussions.',
    entityType: 'support',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'pots', 'doctor-reports'],
  },
  {
    slug: 'compression-garments',
    name: 'Compression Garments',
    summary: 'A support-page hub for documenting when compression is used and whether it changes symptoms or function.',
    definition:
      'Compression garments is a Zebra knowledge page for documenting support strategies in the same timeline as symptom changes and daily function.',
    entityType: 'support',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'pots'],
  },
  {
    slug: 'medication-tracking',
    name: 'Medication Tracking',
    summary: 'A workflow hub for keeping medicines, dose changes, and timing connected to symptom and function history.',
    definition:
      'Medication tracking is a Zebra workflow page for recording what changed, when it changed, and what symptoms or functional shifts happened around that window.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    hubSection: 'medication-tracking',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'doctor-reports'],
  },
  {
    slug: 'flare',
    name: 'Flare',
    summary: 'A worsening period or spike in symptoms that is useful to track as a pattern instead of relying on memory later.',
    definition:
      'A flare page in Zebra focuses on what changed, how long it lasted, what else was happening, and how it affected daily function or follow-up questions.',
    entityType: 'symptom',
    clusters: ['symptom-tracking', 'appointment-preparation', 'fibromyalgia', 'long-covid', 'me-cfs'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'fatigue'],
  },
  {
    slug: 'baseline-symptoms',
    name: 'Baseline Symptoms',
    summary: 'A workflow page for the symptoms that are normal for you, which makes new or worse changes easier to explain.',
    definition:
      'Baseline symptoms is a Zebra workflow page for clarifying what is typical versus what has newly changed or worsened before an appointment.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'appointment-preparation'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation'],
  },
  {
    slug: 'trigger',
    name: 'Trigger',
    summary: 'A workflow page for noting heat, activity, stress, meals, poor sleep, or other context that may show up around symptoms.',
    definition:
      'Trigger is a Zebra workflow page for keeping context attached to symptoms without over-claiming causation.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'doctor-reports'],
  },
  {
    slug: 'symptom-severity',
    name: 'Symptom Severity',
    summary: 'A workflow page for recording how strong or disruptive something felt without turning tracking into homework.',
    definition:
      'Symptom severity is a Zebra workflow page for documenting whether something was mild, moderate, severe, new, or disruptive enough to matter later.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'doctor-reports'],
  },
  {
    slug: 'quality-of-life',
    name: 'Quality of Life',
    summary: 'A function-focused page for how symptoms change work, errands, sleep, concentration, social life, or routine tasks.',
    definition:
      'Quality of life is a Zebra entity page for the practical impact symptoms have on daily living, not only the symptom names themselves.',
    entityType: 'support',
    clusters: ['symptom-tracking', 'appointment-preparation', 'fibromyalgia', 'me-cfs', 'long-covid'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['appointment-preparation', 'symptom-tracking', 'fatigue'],
  },
  {
    slug: 'activities-of-daily-living',
    name: 'Activities of Daily Living',
    summary: 'A function page for tracking what symptoms changed in basic routines, movement, concentration, and daily independence.',
    definition:
      'Activities of daily living is a Zebra knowledge page for the practical routine tasks that symptoms can disrupt, especially when that impact is easy to forget later.',
    entityType: 'support',
    clusters: ['symptom-tracking', 'appointment-preparation', 'me-cfs', 'long-covid', 'fibromyalgia'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['appointment-preparation', 'symptom-tracking', 'fatigue'],
  },
  {
    slug: 'doctor-ready-report',
    name: 'Doctor-Ready Report',
    summary: 'A structured summary of patient-entered symptom history designed to make specialist appointments easier to review and discuss.',
    definition:
      'The doctor-ready report is Zebra’s core payoff workflow: a structured summary built from tracked symptoms, flares, orthostatic observations, medications, hydration, notes, and function context.',
    entityType: 'workflow',
    clusters: ['doctor-reports', 'appointment-preparation', 'symptom-tracking'],
    hubSection: 'reports',
    relatedCategorySlugs: ['doctor-reports', 'appointment-preparation', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'chronic-illness-appointment-prep',
    name: 'Chronic Illness Appointment Prep',
    summary: 'The planning work that turns scattered symptoms, questions, and medication history into a visit-ready summary.',
    definition:
      'Chronic illness appointment prep is the workflow of organizing symptom changes, questions, function impact, and medication context before a specialist visit.',
    entityType: 'workflow',
    clusters: ['appointment-preparation', 'doctor-reports', 'symptom-tracking'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['appointment-preparation', 'doctor-reports', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'functional-impact',
    name: 'Functional Impact',
    summary: 'What symptoms actually changed in daily life, such as work, movement, driving, concentration, or routine tasks.',
    definition:
      'Functional impact is the part of the record that explains what symptoms changed in real life, not only what symptoms existed.',
    entityType: 'support',
    clusters: ['symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['appointment-preparation', 'symptom-tracking', 'doctor-reports'],
  },
  {
    slug: 'health-history',
    name: 'Health History',
    summary: 'The organized record of symptoms, routines, medication changes, and timeline context that helps appointments start from a clearer baseline.',
    definition:
      'Health history is the long-view record of what happened, what changed, and what context belonged to those changes across weeks or months.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['appointment-preparation', 'doctor-reports', 'symptom-tracking'],
  },
  {
    slug: 'invisible-illness',
    name: 'Invisible Illness',
    summary: 'Conditions and symptoms that are real but not always obvious to other people, which often makes documentation and explanation more important.',
    definition:
      'Invisible illness is a Zebra context page for why lived symptoms can be hard to communicate, validate, and summarize clearly in everyday care settings.',
    entityType: 'support',
    clusters: ['symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'brain-fog'],
  },
] as const;

export const entityMetaBySlug = Object.fromEntries(
  knowledgeEntities.map((entity) => [entity.slug, entity]),
) as Record<string, KnowledgeEntity>;

export const entityMeta = Object.fromEntries(
  knowledgeEntities.map((entity) => [entity.name, entity]),
) as Record<string, KnowledgeEntity>;

export type CategoryMeta = (typeof categoryMeta)[keyof typeof categoryMeta];
export type ClusterMeta = (typeof clusterMeta)[keyof typeof clusterMeta];
export type EntityMeta = KnowledgeEntity;
