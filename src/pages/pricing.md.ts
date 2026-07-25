import type { APIRoute } from 'astro';

import { siteConfig, toAbsoluteUrl } from '../data/site-config';

export const GET: APIRoute = () => {
  const body = `# Zebra Pricing

Last updated: 2026-07-25

Zebra is available for iPhone on the Apple App Store: ${siteConfig.appStore.url}

## Free

- Core tracking features
- 30 days of history
- Track flares, symptoms, medications, salt, water, triggers, notes, appointment context, and orthostatic vitals

## Premium

- $4.99/month or $39.99/year
- Unlimited history
- Doctor-ready PDF report export
- Full orthostatic test archive
- The app paywall is built around a 7-day free trial for eligible new subscribers; confirm the current Apple purchase sheet before subscribing

## Important Notes

- Pricing may vary by region through Apple.
- Zebra does not diagnose, treat, prevent, or cure any condition.
- Zebra does not replace medical care or professional medical advice.

Related: ${toAbsoluteUrl('/features.md')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
