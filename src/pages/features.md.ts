import type { APIRoute } from 'astro';

import { searchPages } from '../data/search-pages';
import { siteConfig, toAbsoluteUrl } from '../data/site-config';

const pageLinks = searchPages.map((page) => `- ${page.h1}: ${toAbsoluteUrl(`/${page.slug}/`)}`).join('\n');

export const GET: APIRoute = () => {
  const body = `# Zebra Features

Last updated: 2026-07-25

Zebra is an iPhone symptom tracker for POTS, EDS/hEDS, Fibromyalgia, dysautonomia, Long COVID, ME/CFS, and overlapping invisible illness. It helps users track flares, symptoms, medications, salt, water, triggers, notes, appointment context, and orthostatic vitals, then create a doctor-ready report.

## Main Features

- Daily flare tracking
- Symptom tracking for overlapping invisible illness
- Medication tracking
- Salt and water tracking
- Trigger and note tracking
- Guided orthostatic vitals tracking with lying, sitting, and standing observations
- Optional HealthKit heart-rate support for the orthostatic flow
- Gentle daily reminders users can control
- Doctor-ready PDF report export with Premium

## Product Boundaries

- Zebra is not a diagnostic tool.
- Zebra does not provide medical advice.
- Zebra does not replace urgent care, emergency care, or professional medical care.
- Users should talk with a healthcare professional about diagnosis, treatment, medication, salt/fluid changes, pacing, and concerning symptoms.

## Core Product Pages

${pageLinks}

App Store: ${siteConfig.appStore.url}
Privacy: ${toAbsoluteUrl(siteConfig.routes.privacy)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
