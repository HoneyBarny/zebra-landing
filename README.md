# Astro Starter Kit: Minimal

## Roman's SEO steps (2026-11-27)

From the SEO audit of 2026-11-26 (`~/SaaS/_research/seo-audits/ZEBRA_SEO_AUDIT_2026-11-26.md`).

- [x] Fixes 1–4 (PR #4): merged and deployed on 2026-11-26, live as `227b378`.
- [ ] Optional: a native speaker reads the new German, Spanish and French sentences on the knowledge pages (the "not medical advice" note and the App Store card, in `src/data/locales/entity-translations.ts` and `phase2.ts`).
- [ ] Search Console → URL Inspection → Request indexing for: `/`, `/knowledge/`, `/about/`, `/blog/what-to-track-after-a-positive-tilt-table-test/`, `/de-de/knowledge/pots/`, `/knowledge/eds/`.
- [ ] Bing Webmaster Tools: sign in and use "Import from Google Search Console" (about 10 minutes).
- [ ] Pick a support email address to replace the personal Gmail in the site's structured data (Q-010).
- [ ] Decide whether to merge the 3 Bearable comparison pages into one and the 2 Visible pages into one, with redirects.

Claude follow-ups (no action needed from Roman):
- Send the remaining 338 Zebra URLs to Bing, 100 a day (about 4 days).
- Recheck Google indexing between 6 and 10 December 2026.

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
