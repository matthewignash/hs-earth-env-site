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
├── block-page-mockup.html   # visual reference (Unit 3 Block 3 demo)
├── src/                     # 11ty input
│   ├── _data/
│   │   ├── nav.js           # top nav items (6 sections)
│   │   └── site.js          # site-wide metadata
│   ├── _includes/
│   │   └── layouts/
│   │       └── base.njk     # base layout with top nav
│   ├── assets/
│   │   └── styles.css       # shared stylesheet
│   ├── index.njk            # Home
│   ├── foundations/         # 6 sub-pages planned
│   ├── units/               # Unit 0 + Unit 3 deep; 1, 2, 4–7 stubbed
│   ├── reference/           # glossary, case studies, simulator hub
│   ├── ai-partners/         # 5 starter partners
│   └── student-hub/         # submission, rubric, calendar
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

## Hosting & Google Sites integration

This site is being built to live inside Google Sites (the school's primary platform) while keeping the option open to host the static build elsewhere. The current integration plan:

- **Static hosting:** the built `_site/` directory is host-agnostic. It can be deployed to GitHub Pages, Vercel, Netlify, or a Google Cloud Storage / Firebase Hosting bucket.
- **Google Sites embedding:** individual pages from the hosted static build are iframed into Google Sites pages via the "Embed > By URL" option. This keeps the design system intact (no CSP-clobbered embed-block CSS).
- **Student auth + Sheets/Classroom writes (future):** interactive surfaces (Show-section submissions, Reflect captures, AI documentation logs) will be built as **Google Apps Script web apps**, deployed under the school Workspace, and iframed alongside the static content. Apps Script runs as the signed-in student and has the permissions to write Sheets and post to Classroom.

For Phase 1 (this build), interactive surfaces are styled placeholders.

## Build sequence

See `CLAUDE.md` Section 8. Current status: **Phase 1 complete** — skeleton with 6 navigable section landing pages.
