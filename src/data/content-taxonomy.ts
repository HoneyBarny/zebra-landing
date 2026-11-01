export const authorProfiles = {
  'zebra-editorial': {
    slug: 'zebra-editorial',
    name: 'About Zebra content',
    role: 'How the guides are written and sourced',
    bio: 'Zebra guides are general information to help you prepare for appointments. They are not medical advice. Where a guide relies on research or medical guidance, the sources are listed at the end of the guide.',
    editorialPolicy:
      'Every Zebra article is written to clarify tracking, appointment preparation, and doctor-ready reporting without making diagnostic or treatment claims.',
    researchMethodology:
      'Articles are based on Zebra’s product, customer research, and official medical resources.',
    updatePolicy:
      'We update an article when the app changes or when the medical or research sources it is based on change.',
    medicalDisclaimer:
      'Zebra content supports self-organization and care conversations. It does not diagnose, treat, or replace medical advice.',
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
  eds: {
    slug: 'eds',
    name: 'EDS',
    description: 'EDS and hypermobility-focused tracking, overlap symptoms, and appointment-prep guidance.',
  },
  fibromyalgia: {
    slug: 'fibromyalgia',
    name: 'Fibromyalgia',
    description: 'Fibromyalgia flare, pain, fatigue, brain fog, and symptom-summary guidance for appointment preparation.',
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
  practicalUse?: {
    title: string;
    body: string;
    items: string[];
  };
  appointmentUse?: {
    title: string;
    body: string;
    items: string[];
  };
  aliases?: string[];
  featured?: boolean;
};

export const knowledgeEntities: KnowledgeEntity[] = [
  {
    slug: 'pots',
    name: 'POTS',
    summary: 'Heart rate rises sharply on standing, often with dizziness or palpitations. Zebra helps you keep a record of that pattern.',
    definition:
      'POTS (postural orthostatic tachycardia syndrome) is a condition in which heart rate rises sharply on standing, with symptoms such as dizziness, palpitations or fatigue. The Heart Rhythm Society consensus uses a rise of at least 30 beats per minute from lying to standing, or 40 for ages 12 to 19, together with symptoms. A clinician makes the diagnosis. Zebra keeps your own observations over time.',
    entityType: 'condition',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    featured: true,
  },
  {
    slug: 'dysautonomia',
    name: 'Dysautonomia',
    summary: 'A disorder of the autonomic nervous system, which runs automatic body processes such as heart rate and blood pressure.',
    definition:
      'Dysautonomia is a nervous system disorder that disrupts autonomic body processes, according to Cleveland Clinic. These are processes the body runs without conscious control, such as heart rate and blood pressure. POTS is one form. A clinician makes the diagnosis. Zebra helps you keep symptoms, position changes and appointment notes in one timeline.',
    entityType: 'condition',
    clusters: ['dysautonomia', 'pots', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['dysautonomia', 'pots', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'eds',
    name: 'EDS',
    summary: 'Ehlers-Danlos syndromes are 13 heritable connective tissue conditions, with joint hypermobility common across types. Zebra helps keep overlap symptoms in one timeline.',
    definition:
      'The Ehlers-Danlos syndromes (EDS) are a group of 13 heritable connective tissue disorders, according to the Ehlers-Danlos Society and the 2017 international classification. Features seen across types include joint hypermobility, skin that stretches further than usual, and fragile tissue. A clinician makes the diagnosis. Zebra does not diagnose EDS. It helps you keep symptoms, flares and appointment notes in one timeline.',
    entityType: 'condition',
    clusters: ['eds', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'brain-fog'],
    featured: true,
  },
  {
    slug: 'heds',
    name: 'hEDS',
    summary: 'Hypermobile EDS causes widespread joint hypermobility, joint instability and chronic pain. There is no laboratory test for it yet.',
    definition:
      'Hypermobile Ehlers-Danlos syndrome (hEDS) is a heritable connective tissue disorder that causes generalized joint hypermobility, joint instability and chronic pain, according to the Ehlers-Danlos Society. Its cause has not been identified, and there is no laboratory test for it. A clinician diagnoses it against clinical criteria. Zebra helps you keep pain, joint symptoms, flares and appointment notes together.',
    entityType: 'condition',
    clusters: ['eds', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'overlap',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation'],
    aliases: ['Hypermobile Ehlers-Danlos syndrome'],
  },
  {
    slug: 'fibromyalgia',
    name: 'Fibromyalgia',
    summary: 'A long-lasting condition with pain all over the body, fatigue and other symptoms.',
    definition:
      'Fibromyalgia is a chronic condition that causes pain all over the body, fatigue and other symptoms, according to MedlinePlus. A clinician makes the diagnosis. Zebra helps you keep pain, flares and daily function in one record for appointments.',
    entityType: 'condition',
    clusters: ['fibromyalgia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'long-covid',
    name: 'Long COVID',
    summary: 'A chronic condition after a COVID-19 infection that lasts at least 3 months.',
    definition:
      'Long COVID is a chronic condition that occurs after a SARS-CoV-2 infection and is present for at least 3 months, according to the CDC. A clinician makes the diagnosis. Zebra helps you keep symptoms, energy limits and changes over time in one record.',
    entityType: 'condition',
    clusters: ['long-covid', 'me-cfs', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'definitions',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking', 'appointment-preparation', 'dysautonomia'],
    featured: true,
  },
  {
    slug: 'me-cfs',
    name: 'ME/CFS',
    summary: 'A serious, often long-lasting illness that keeps people from their usual activities.',
    definition:
      'ME/CFS (myalgic encephalomyelitis/chronic fatigue syndrome) is a serious and often long-lasting illness that keeps people from doing their usual activities, according to the CDC. The CDC lists worsening after even minor exertion, called post-exertional malaise, as a main symptom. A clinician makes the diagnosis. Zebra helps you keep symptoms, activity and recovery in one record.',
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
    summary: 'Symptoms that affect how you think, remember and concentrate.',
    definition:
      'Brain fog is a common group of symptoms that affect how you think, remember and concentrate, according to Cleveland Clinic. It can last days, weeks or longer. It is not a diagnosis on its own. Zebra keeps check-ins short so you can still record a day when thinking is hard.',
    entityType: 'symptom',
    clusters: ['symptom-tracking', 'appointment-preparation', 'me-cfs', 'long-covid', 'fibromyalgia'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['brain-fog', 'symptom-tracking', 'appointment-preparation'],
    featured: true,
  },
  {
    slug: 'fatigue',
    name: 'Fatigue',
    summary: 'A feeling of weariness, tiredness or lack of energy.',
    definition:
      'Fatigue is a feeling of weariness, tiredness or lack of energy, according to MedlinePlus. In chronic illness it can limit what you can do in a day. Zebra helps you record fatigue next to daily function, so a clinician can see what it cost.',
    entityType: 'symptom',
    clusters: ['fatigue', 'symptom-tracking', 'fibromyalgia', 'long-covid', 'me-cfs', 'pots'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'dizziness',
    name: 'Dizziness',
    summary: 'A word for two symptoms: lightheadedness or vertigo.',
    definition:
      'Dizziness usually describes one of two symptoms, according to MedlinePlus: lightheadedness, a feeling that you might faint, or vertigo, a feeling that you or the room are spinning. Noting which one, and your position when it starts, helps a clinician. Zebra helps you record it with position and timing.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'long-covid', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'lightheadedness',
    name: 'Lightheadedness',
    summary: 'A feeling that you might faint.',
    definition:
      'Lightheadedness is a feeling that you might faint, according to MedlinePlus. It is different from vertigo, the feeling of spinning. In orthostatic conditions it often starts on standing. Zebra helps you record when it happens and what position you were in.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'long-covid', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
  },
  {
    slug: 'syncope',
    name: 'Syncope',
    summary: 'The medical name for fainting.',
    definition:
      'Syncope is the medical name for fainting: a brief loss of consciousness due to a drop in blood flow to the brain, according to MedlinePlus. A clinician should assess fainting. Zebra helps you record what happened before and after.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'appointment-preparation'],
  },
  {
    slug: 'tachycardia',
    name: 'Tachycardia',
    summary: 'A fast heart rate of more than 100 beats per minute at rest.',
    definition:
      'Tachycardia is a fast heart rate of more than 100 beats per minute at rest, according to Cleveland Clinic. A typical resting rate is 60 to 100. A clinician decides what a fast rate means for you. Zebra helps you record when it happens and what was going on.',
    entityType: 'measurement',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
  },
  {
    slug: 'palpitations',
    name: 'Palpitations',
    summary: 'Heartbeats that feel pounding, fluttering or irregular.',
    definition:
      'Heart palpitations can feel like pounding, flip-flopping or the wrong number of heartbeats, according to Cleveland Clinic. They usually last a few seconds or minutes. Zebra helps you record when they happen, your position and what you were doing.',
    entityType: 'symptom',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'appointment-preparation'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'appointment-preparation'],
  },
  {
    slug: 'exercise-intolerance',
    name: 'Exercise Intolerance',
    summary: 'A limited ability to do physical activity.',
    definition:
      'Exercise intolerance is a limited ability to do physical activity compared with what is usual for your age, according to Cleveland Clinic. Zebra does not set activity goals. It helps you record activity, symptoms and recovery, so a clinician can see the pattern.',
    entityType: 'symptom',
    clusters: ['pots', 'long-covid', 'me-cfs', 'fibromyalgia', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking'],
  },
  {
    slug: 'pem',
    name: 'PEM',
    summary: 'A worsening of symptoms after exertion, often 12 to 48 hours later.',
    definition:
      'Post-exertional malaise (PEM) is a worsening of symptoms after even minor physical or mental exertion that would have been tolerated before, according to the CDC. Symptoms typically worsen 12 to 48 hours after activity and can last days or weeks. Zebra looks at the next day and 2 to 3 days later, not only the same day.',
    entityType: 'symptom',
    clusters: ['me-cfs', 'long-covid', 'symptom-tracking'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['fatigue', 'symptom-tracking'],
  },
  {
    slug: 'orthostatic-intolerance',
    name: 'Orthostatic Intolerance',
    summary: 'Symptoms that start when you sit up or stand and often ease when you lie down. Recording position helps.',
    definition:
      'Orthostatic intolerance describes symptoms that start when you stand up or stand for a long time and often ease when you lie down, such as dizziness, palpitations or weakness. It is not the same as POTS or a drop in blood pressure, although they can occur together. A clinician makes the assessment. Zebra helps you record the symptoms with position, timing and context.',
    entityType: 'condition',
    clusters: ['pots', 'dysautonomia', 'long-covid', 'symptom-tracking'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
    featured: true,
  },
  {
    slug: 'orthostatic-test',
    name: 'Orthostatic Test',
    summary: 'A guided way to record observations lying down, standing and while you recover, so position changes stay linked to the day.',
    definition:
      'An orthostatic test measures heart rate and blood pressure lying down and after standing up, usually at set times. Clinicians use tests such as the tilt table test or the active stand test. Zebra does not run a medical test. It helps you note your own observations lying down, standing and while you recover, so they are clear at your appointment.',
    entityType: 'measurement',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'doctor-reports'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'doctor-reports'],
    featured: true,
  },
  {
    slug: 'orthostatic-hypotension',
    name: 'Orthostatic Hypotension',
    summary: 'A drop in blood pressure on standing that can cause dizziness. Zebra helps you keep readings with their context.',
    definition:
      'Orthostatic hypotension is a sustained drop in blood pressure on standing: systolic falls by at least 20 mm Hg or diastolic by at least 10 mm Hg within 3 minutes. That is the definition in the American Society of Hypertension position paper. A clinician makes the assessment. Zebra keeps your readings with symptoms and daily context.',
    entityType: 'measurement',
    clusters: ['dysautonomia', 'pots', 'symptom-tracking'],
    hubSection: 'testing',
    relatedCategorySlugs: ['dysautonomia', 'pots', 'symptom-tracking'],
  },
  {
    slug: 'orthostatic-tachycardia',
    name: 'Orthostatic Tachycardia',
    summary: 'A rise in heart rate when moving from lying down to standing.',
    definition:
      'Orthostatic tachycardia is a rise in heart rate on standing. A sustained, large rise with symptoms is part of the POTS criteria: the Heart Rhythm Society consensus uses at least 30 beats per minute in adults and 40 for ages 12 to 19. A rise on its own is not a diagnosis. Zebra helps you record heart rate by position with symptoms and context.',
    entityType: 'measurement',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking'],
    hubSection: 'testing',
    relatedCategorySlugs: ['pots', 'dysautonomia', 'symptom-tracking'],
  },
  {
    slug: 'hydration',
    name: 'Hydration',
    summary: 'The fluids you drink across the day.',
    definition:
      'Hydration means the fluids you drink across the day. Cleveland Clinic includes fluids in its general guidance for POTS. The right target is individual, and you set it with your clinician. Zebra tracks water against your own target.',
    entityType: 'support',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'doctor-reports', 'pots'],
  },
  {
    slug: 'salt-loading',
    name: 'Salt Loading',
    summary: 'More salt as part of a care plan. Not right for everyone.',
    definition:
      'Salt loading means eating more salt as part of a care plan. Cleveland Clinic says a provider may suggest more fluid and salt for the hypovolemic form of POTS. Some people need to limit salt because of other conditions. Zebra tracks salt against your own target.',
    entityType: 'support',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'pots', 'doctor-reports'],
  },
  {
    slug: 'compression-garments',
    name: 'Compression Garments',
    summary: 'Tight-fitting socks, tights, leggings or abdominal binders.',
    definition:
      'Compression garments are tight-fitting socks, tights, leggings or abdominal binders. Cleveland Clinic says compression therapy can help push blood up from the legs to help reduce POTS symptoms. The type and strength are a choice to make with your clinician. Zebra helps you note when you wore compression and how the day went.',
    entityType: 'support',
    clusters: ['pots', 'dysautonomia', 'symptom-tracking'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'pots'],
  },
  {
    slug: 'medication-tracking',
    name: 'Medication Tracking',
    summary: 'What you take, when, at what dose, and what changed.',
    definition:
      'Medication tracking means recording what you take, the dose and the time, along with changes and side effects. It helps a clinician see whether a change lined up with how you felt. Zebra keeps doses and changes on the same timeline as your symptoms.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    hubSection: 'medication-tracking',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'doctor-reports'],
    aliases: ['Medication Timeline'],
  },
  {
    slug: 'flare',
    name: 'Flare',
    summary: 'A period when symptoms get worse than usual, then ease.',
    definition:
      'A flare is a period when symptoms get worse than usual, then ease. How long it lasts and what it costs varies. Zebra helps you record when it started, what else was happening and how it affected your day.',
    entityType: 'symptom',
    clusters: ['symptom-tracking', 'appointment-preparation', 'fibromyalgia', 'long-covid', 'me-cfs'],
    hubSection: 'symptoms',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation', 'fatigue'],
  },
  {
    slug: 'baseline-symptoms',
    name: 'Baseline Symptoms',
    summary: 'Your usual symptoms on a typical day.',
    definition:
      'Baseline symptoms are your usual symptoms on a typical day. Your baseline can change over time. Knowing it makes it easier to see what is new or worse. Zebra compares your recent weeks with the weeks before.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'appointment-preparation'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['symptom-tracking', 'appointment-preparation'],
    practicalUse: {
      title: 'What to write down first',
      body:
        'A baseline is most useful when it is plain and specific. It does not need to explain why symptoms happen. It only needs to capture what a normal week usually looks like before something changes.',
      items: [
        'The symptoms that are usually present, even on an ordinary day',
        'What counts as worse than normal for pain, dizziness, fatigue, brain fog, or heart-rate symptoms',
        'What you can usually do, such as standing, walking, cooking, working, or leaving the house',
        'Medication, salt, water, sleep, heat, or activity context that is usually part of the pattern',
      ],
    },
    appointmentUse: {
      title: 'How it helps before a doctor visit',
      body:
        'The appointment value is contrast. Instead of trying to explain the whole month from memory, you can point to what was typical, what changed, and when the change started.',
      items: [
        'Use it before a new medication or dose change',
        'Use it after a flare so the worse period has something to compare against',
        'Use it before an appointment when symptoms have been shifting for several weeks',
      ],
    },
  },
  {
    slug: 'trigger',
    name: 'Trigger',
    summary: 'Something that often comes before symptoms get worse, such as heat, standing or a meal.',
    definition:
      'A trigger is something that seems to come before symptoms get worse, such as heat, standing, a meal, poor sleep or stress. Coming before is not the same as causing. Zebra shows patterns in your own records and tells you when it cannot see a clear one yet.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'doctor-reports'],
  },
  {
    slug: 'symptom-severity',
    name: 'Symptom Severity',
    summary: 'How strong a symptom is, and what it cost you.',
    definition:
      'Symptom severity is how strong a symptom is. Zebra uses a 1 to 10 scale for flares and lets you add what the symptom stopped you doing, because a number alone can hide the impact.',
    entityType: 'workflow',
    clusters: ['symptom-tracking', 'doctor-reports'],
    hubSection: 'daily-management',
    relatedCategorySlugs: ['symptom-tracking', 'doctor-reports'],
  },
  {
    slug: 'quality-of-life',
    name: 'Quality of Life',
    summary: 'How you see your position in life, measured against your goals and values.',
    definition:
      'Quality of life is, in the WHO definition, a person’s perception of their position in life, in the context of their culture and values and in relation to their goals, expectations, standards and concerns. In chronic illness, symptoms can change it from day to day. Zebra helps you record the practical effect of symptoms on your day.',
    entityType: 'support',
    clusters: ['symptom-tracking', 'appointment-preparation', 'fibromyalgia', 'me-cfs', 'long-covid'],
    hubSection: 'doctor-visits',
    relatedCategorySlugs: ['appointment-preparation', 'symptom-tracking', 'fatigue'],
  },
  {
    slug: 'activities-of-daily-living',
    name: 'Activities of Daily Living',
    summary: 'Everyday tasks such as eating, bathing, dressing and moving around.',
    definition:
      'Activities of daily living are tasks we do to stay alive and well, such as eating, bathing, dressing and moving from place to place, according to Cleveland Clinic. Instrumental activities include preparing meals, shopping and managing money. Recording what symptoms stopped you doing shows a clinician what they cost. Zebra helps you record what you could and could not do.',
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
    summary: 'A serious illness whose symptoms other people cannot see.',
    definition:
      'An invisible illness is a serious illness whose symptoms are not obvious to other people, such as pain, fatigue or dizziness. Because others cannot see it, it can be hard to explain. Zebra helps you keep a dated record you can show.',
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
  knowledgeEntities.flatMap((entity) => [
    [entity.name, entity],
    ...(entity.aliases ?? []).map((alias) => [alias, entity] as const),
  ]),
) as Record<string, KnowledgeEntity>;

export type CategoryMeta = (typeof categoryMeta)[keyof typeof categoryMeta];
export type ClusterMeta = (typeof clusterMeta)[keyof typeof clusterMeta];
export type EntityMeta = KnowledgeEntity;
