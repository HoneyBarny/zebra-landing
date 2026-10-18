// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './site.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,
  build: {
    // Inline every stylesheet into the HTML. The shared ~12 KB stylesheet was a
    // render-blocking request that cost a round trip before the hero text could
    // paint, which is the LCP element on the paid-traffic page.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
