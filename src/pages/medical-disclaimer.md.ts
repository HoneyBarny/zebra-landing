import type { APIRoute } from 'astro';

import { siteConfig, toAbsoluteUrl } from '../data/site-config';

export const GET: APIRoute = () => {
  const body = `# Zebra Medical Disclaimer

Last updated: 2026-07-25

Zebra is a symptom tracking and appointment preparation app. Zebra helps users organize patient-entered history for care conversations.

## What Zebra Does Not Do

- Zebra does not diagnose POTS, EDS, Fibromyalgia, dysautonomia, Long COVID, ME/CFS, or any other condition.
- Zebra does not treat, prevent, or cure any condition.
- Zebra does not provide medical advice.
- Zebra does not interpret symptoms, vitals, medications, salt, fluids, triggers, or flares.
- Zebra does not replace a qualified healthcare professional.
- Zebra is not an emergency tool.

## When To Talk With A Healthcare Professional

Talk with a qualified healthcare professional about diagnosis, treatment, medication changes, salt or fluid changes, pacing, new symptoms, severe symptoms, rapidly worsening symptoms, and any concerning health changes.

Privacy policy: ${toAbsoluteUrl(siteConfig.routes.privacy)}
Support: ${toAbsoluteUrl(siteConfig.routes.support)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
