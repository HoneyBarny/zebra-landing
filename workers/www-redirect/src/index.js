const CANONICAL_HOST = 'zebratracker.app';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  },
};
