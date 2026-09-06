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
]);

function redirectTo(url, destination) {
  const target = new URL(destination, CANONICAL_ORIGIN);
  target.search = url.search;
  return Response.redirect(target.toString(), 301);
}

function isDuplicateHost(hostname) {
  return DUPLICATE_HOSTS.has(hostname) || hostname.endsWith('.zebra-landing.pages.dev');
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

  return context.next();
}
