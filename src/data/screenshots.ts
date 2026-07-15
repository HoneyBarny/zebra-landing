export const screenshots = {
  dailyCheckIn: {
    id: 'daily-check-in',
    src: '/screenshots/daily-tracking.png',
    alt: 'Zebra iPhone symptom tracker check-in for POTS, dysautonomia, EDS, and Fibromyalgia showing symptoms, triggers, hydration, medications, function, and notes in one record.',
    width: 1530,
    height: 3036,
    label: 'Daily check-in',
  },
  appointmentPreparation: {
    id: 'appointment-preparation',
    src: '/screenshots/appointment-preparation.png',
    alt: 'Zebra doctor-ready report and appointment preparation screen showing changed symptoms, a consultation brief preview, and patient-entered history for a specialist visit.',
    width: 1530,
    height: 3036,
    label: 'Appointment preparation',
  },
  patternComparison: {
    id: 'pattern-comparison',
    src: '/screenshots/pattern-comparison.png',
    alt: 'Zebra symptom pattern comparison screen showing recent differences, time filters, and a forming picture of symptom activity over time.',
    width: 1530,
    height: 3036,
    label: 'Pattern comparison',
  },
  insightHistory: {
    id: 'insight-history',
    src: '/screenshots/insight-history.png',
    alt: 'Zebra symptom insight history screen showing possible patterns, evidence building progress, and saved insights over time.',
    width: 1530,
    height: 3036,
    label: 'Insight history',
  },
  evidenceCapture: {
    id: 'evidence-capture',
    src: '/screenshots/evidence-capture.png',
    alt: 'Zebra appointment preparation screen showing orthostatic test evidence, medication timeline details, and questions to ask before an appointment.',
    width: 1530,
    height: 3036,
    label: 'Evidence capture',
  },
  todaySummary: {
    id: 'today-summary',
    src: '/screenshots/today-summary.png',
    alt: 'Zebra symptom summary screen showing an overall pattern card, recent symptom activity graph, and current-day symptom chips.',
    width: 1530,
    height: 3036,
    label: 'Today summary',
  },
} as const;

export const heroShowcase = [
  {
    ...screenshots.appointmentPreparation,
    label: 'Doctor report preview',
    meta: 'Appointment-ready proof',
  },
  {
    ...screenshots.dailyCheckIn,
    meta: 'Track in under 60 seconds',
  },
  {
    ...screenshots.evidenceCapture,
    meta: 'Orthostatic evidence',
  },
] as const;

export const screenshotStory = {
  doctorReport: {
    ...screenshots.appointmentPreparation,
    label: 'Doctor report preview',
    meta: 'Consultation brief preview',
  },
  dailyTracking: {
    ...screenshots.dailyCheckIn,
    meta: 'Symptoms, triggers, hydration, meds',
  },
  orthostaticTest: {
    ...screenshots.evidenceCapture,
    meta: 'Orthostatic test inside the report flow',
  },
  trends: {
    ...screenshots.insightHistory,
    meta: 'Patterns build into useful history',
  },
} as const;
