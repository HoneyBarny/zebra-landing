const CANONICAL_ORIGIN = 'https://zebratracker.app';
const CANONICAL_HOST = 'zebratracker.app';
const DUPLICATE_HOSTS = new Set(['zebra-landing.pages.dev', 'www.zebratracker.app']);

const PERMANENT_REDIRECTS = new Map([
  ['/knowledge/symptom-tracking', '/blog/category/symptom-tracking/'],
  ['/knowledge/symptom-tracking/', '/blog/category/symptom-tracking/'],
  ['/knowledge/appointment-preparation', '/blog/category/appointment-preparation/'],
  ['/knowledge/appointment-preparation/', '/blog/category/appointment-preparation/'],
  ['/knowledge/doctor-reports', '/blog/category/doctor-reports/'],
  ['/knowledge/doctor-reports/', '/blog/category/doctor-reports/'],
  ['/knowledge/medication-timeline', '/knowledge/medication-tracking/'],
  ['/knowledge/medication-timeline/', '/knowledge/medication-tracking/'],
  ['/404/', '/'],
  // Old hub URL Search Console still reports as 404 (2026-10-17 coverage export).
  ['/knowledge/symptom-journal', '/blog/what-is-a-symptom-journal/'],
  ['/knowledge/symptom-journal/', '/blog/what-is-a-symptom-journal/'],
  ['/de-de/knowledge/symptom-journal/', '/de-de/blog/what-is-a-symptom-journal/'],
  ['/es-es/knowledge/symptom-journal/', '/es-es/blog/what-is-a-symptom-journal/'],
  ['/fr-fr/knowledge/symptom-journal/', '/fr-fr/blog/what-is-a-symptom-journal/'],
  // Localized category slugs that were never built; point at the English category.
  ['/blog/category/suivi-des-poussees/', '/blog/category/symptom-tracking/'],
  ['/blog/category/suivi-des-symptomes/', '/blog/category/symptom-tracking/'],
  ['/blog/category/dysautonomie/', '/blog/category/dysautonomia/'],
  ['/blog/category/fatiga/', '/blog/category/fatigue/'],
  // Broken slugs generated from accented Spanish category names (live 2026-10-19 to 10-20).
  ['/blog/category/disautonom-a/', '/blog/category/dysautonomia/'],
  ['/blog/category/registro-de-s-ntomas/', '/blog/category/symptom-tracking/'],
  ['/blog/category/preparaci-n-de-consulta/', '/blog/category/appointment-preparation/'],
  // Locale homepages linked to tracker pages that only exist in English.
  ['/de-de/eds-tracker/', '/eds-tracker/'],
  ['/de-de/fibromyalgia-tracker/', '/fibromyalgia-tracker/'],
  ['/de-de/flare-tracker/', '/flare-tracker/'],
  ['/es-es/eds-tracker/', '/eds-tracker/'],
  ['/es-es/fibromyalgia-tracker/', '/fibromyalgia-tracker/'],
  ['/es-es/flare-tracker/', '/flare-tracker/'],
  ['/fr-fr/eds-tracker/', '/eds-tracker/'],
  ['/fr-fr/fibromyalgia-tracker/', '/fibromyalgia-tracker/'],
  ['/fr-fr/flare-tracker/', '/flare-tracker/'],
]);

// Crawled in August 2026: article URLs with a stray "/blog/" appended,
// e.g. /blog/what-is-a-symptom-journal/blog/ -> /blog/what-is-a-symptom-journal/.
const DOUBLED_BLOG_PATH = /^(\/(?:de-de|es-es|fr-fr))?\/blog\/([a-z0-9-]+)\/blog\/?$/;

function redirectTo(url, destination) {
  const target = new URL(destination, CANONICAL_ORIGIN);
  target.search = url.search;
  return Response.redirect(target.toString(), 301);
}

function isDuplicateHost(hostname) {
  return DUPLICATE_HOSTS.has(hostname) || hostname.endsWith('.zebra-landing.pages.dev');
}

// Mirrors public/_headers. Set here as well because Pages does not apply
// _headers to responses that pass through a Function.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

async function withSecurityHeaders(responsePromise) {
  const response = await responsePromise;
  const secured = new Response(response.body, response);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    if (!secured.headers.has(name)) secured.headers.set(name, value);
  }
  return secured;
}

export function onRequest(context) {
  const url = new URL(context.request.url);
  const requestHost = context.request.headers.get('host') ?? url.hostname;

  if (isDuplicateHost(requestHost)) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }

  const redirectPath = PERMANENT_REDIRECTS.get(url.pathname);
  if (redirectPath) {
    return redirectTo(url, redirectPath);
  }

  const doubled = url.pathname.match(DOUBLED_BLOG_PATH);
  if (doubled) {
    return redirectTo(url, `${doubled[1] ?? ''}/blog/${doubled[2]}/`);
  }

  return withSecurityHeaders(context.next());
}
