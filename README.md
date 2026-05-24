# HS Earth & Env Course Site — HTML Prototype

Static HTML build of the HS Earth & Environmental Science course site (AISC Chennai, AY 2026-27), running parallel to the Google Sites build. See `CLAUDE.md` for the full project brief.

## Quick start

```bash
npm install        # one-time
npm run dev        # local server with live reload at http://localhost:8080
npm run build      # produce static files in _site/
npm run clean      # delete _site/
```

## Stack

- [Eleventy (11ty) v3](https://www.11ty.dev/) — static site generator. No React, no Next.js.
- Nunjucks templates (`.njk`).
- Plain CSS in `src/assets/styles.css` — shared palette and components.
- No JavaScript framework. No build dependencies beyond 11ty.

## Project layout

```
hs-earth-env-site/
├── CLAUDE.md                # project brief (read first)
├── README.md                # this file
├── package.json
├── .eleventy.js             # 11ty config
├── src/                     # 11ty input
│   ├── _data/
│   │   ├── nav.js           # top nav items (6 sections)
│   │   └── site.js          # site-wide metadata
│   ├── _includes/
│   │   └── layouts/
│   │       ├── base.njk     # base layout (top nav, page header, footer)
│   │       └── block-page.njk  # block-page layout (header, AI callout, sections, nav)
│   ├── assets/
│   │   ├── styles.css       # base + landing stylesheet
│   │   ├── block-page.css   # block-page-only styles
│   │   ├── favicon.svg
│   │   └── simulators/      # Tectonic City Builder (symlink)
│   ├── 404.njk              # custom 404 page
│   ├── index.njk            # Home (hero layout)
│   ├── foundations/         # 6 full sub-pages
│   ├── units/               # Unit 0 + Unit 3 with content; 1, 2, 4–7 stubbed
│   ├── reference/           # glossary, case studies, simulator hub
│   ├── ai-partners/         # 5 starter partners
│   └── student-hub/         # submission, rubric, AI doc template, calendar
└── _site/                   # build output (gitignored)
```

## Adding a page

1. Create the file under `src/` at the URL path you want (e.g. `src/foundations/the-rubric.njk` → `/foundations/the-rubric/`).
2. At the top, set front matter:

   ```yaml
   ---
   layout: layouts/base.njk
   title: The Rubric
   tagline: Optional one-line tagline.
   ---
   ```

3. Write the body in HTML or Nunjucks.

The top nav is shared — change `src/_data/nav.js` to update it everywhere.

## Simulator (separate project)

The Tectonic City Builder lives at `../Plate-Tectonics-City-Builder/` as its own project (own `CLAUDE.md` brief, own development cycle). This site iframes whatever is currently at `src/assets/simulators/tectonic-city-builder.html` — a copy synced from the sibling folder, not a symlink (symlinks break on Vercel's build server).

When the simulator changes:

```bash
npm run sync-simulator  # re-copies from ../Plate-Tectonics-City-Builder/
```

Then commit the updated simulator file alongside whatever else changed. The current build embeds the simulator's **v1** — three reference scenarios (Cascadia, San Andreas, generic volcano). **v2** (five named city-anchored scenarios, sprites, damage states, embedded case studies, Google Apps Script Sessions Sheet backend) is specced in `../Plate-Tectonics-City-Builder/CLAUDE.md` and is a separate planning + build cycle.

## Hosting & Google Sites integration

This site is being built to live inside Google Sites (the school's primary platform) while keeping the option open to host the static build elsewhere. The current integration plan:

- **Static hosting:** the built `_site/` directory is host-agnostic. It can be deployed to GitHub Pages, Vercel, Netlify, or a Google Cloud Storage / Firebase Hosting bucket.
- **Google Sites embedding:** individual pages from the hosted static build are iframed into Google Sites pages via the "Embed > By URL" option. This keeps the design system intact (no CSP-clobbered embed-block CSS).
- **Student auth + Sheets/Classroom writes (future):** interactive surfaces (Show-section submissions, Reflect captures, AI documentation logs) will be built as **Google Apps Script web apps**, deployed under the school Workspace, and iframed alongside the static content. Apps Script runs as the signed-in student and has the permissions to write Sheets and post to Classroom.

For Phase 1 (this build), interactive surfaces are styled placeholders.

## Build sequence

See `CLAUDE.md` Section 8. Current status: **Phases 1–10 complete** — all section landings and sub-pages built; Unit 0 (7 blocks + Source Dossier) and Unit 3 (12 blocks + 2 assessments + Tectonic City Builder launcher) shipped; AI Partners hub + 5 partner sub-pages; Reference layer (Liquefaction glossary entry + Tōhoku 2011 case study + Simulator Hub); Student Hub (AI Doc Template + How to Submit + Rubric Quick Reference); polish (hero, favicon, OG meta, skip-to-main, 404, footer nav, mobile sweep). Phase 11 (Deploy) is next.
