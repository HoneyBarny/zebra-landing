import type { APIRoute } from 'astro';

import { siteConfig, toAbsoluteUrl } from '../data/site-config';

export const GET: APIRoute = () => {
  const body = `# Zebra Privacy Summary

Last updated: 2026-07-25

Zebra is private by design. The current landing page describes Zebra as an iPhone app that does not require an account and does not run a health-data server.

## Current Privacy Summary

- Health tracking data stays on the user's iPhone and private iCloud account.
- Zebra does not require an account.
- Zebra does not run a health-data server.
- Zebra summarizes patient-entered history for the user's own care conversations.

## Important Note

This summary is not a substitute for the full privacy policy. The full policy controls if there is any difference between this summary and the policy.

Full privacy policy: ${toAbsoluteUrl(siteConfig.routes.privacy)}
Support: ${toAbsoluteUrl(siteConfig.routes.support)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
