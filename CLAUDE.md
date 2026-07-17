# HS Earth & Env Course Site — HTML Prototype Project Brief

> **Purpose of this document:** Hand-off brief for building the HTML prototype of the HS Earth & Environmental Science course Site in Claude Code. The Google Sites build is happening separately (see `Google Sites Build Guide.docx`). This HTML version is a parallel artifact — visual reference for the Sites build, deployable backup, and a place to experiment with patterns Google Sites can't do.

---

## 1. Context

**Course:** HS Earth & Environmental Science at AISC Chennai (American International School Chennai). AY 2026-27 redesign — greenfield rebuild replacing 2021 COVID-era hybrid materials.

**Architecture:** Site = content hub. Classroom = workflow. Site is structured as a 6-section navigation (Home / Current Unit / Foundations / Reference / AI Partners / Student Hub) with the durable block-page template (Story → Concepts → Do → Show → Reflect) repeating every unit.

**Why HTML in parallel to Google Sites:**
1. Visual reference — easier to demo and share than mid-build Google Sites screenshots.
2. Faster iteration — change a CSS variable; entire Site updates. Google Sites edits are tedious.
3. Fallback — if Google Sites becomes inadequate (theming limits, embed restrictions, etc.), the HTML version is deployable to GitHub Pages, Vercel, or AISC web infrastructure.
4. Reusable components — block-page template can become a real React/HTML component that's truly DRY (Google Sites duplicates pages, doesn't reuse).
5. Better support for AI partner embeds — Google Sites struggles with custom embeds; HTML doesn't.

---

## 2. What v1 already exists

- `block-page-mockup.html` — single-page demonstration of the block-page template using Unit 3 Block 3 content. Self-contained HTML file, ~16KB. Inline CSS. Demonstrates: top nav, breadcrumbs, page header with strand chips, AI partner callout, the 5 colored sections (Story / Concepts / Do / Show / Reflect), choice board pattern, submission callout, bottom navigation.

**Use this file as the starting visual reference.** The CSS variables, color palette, and section structure should be preserved. The goal is to expand this single-page mockup into a multi-page navigable site with shared assets.

---

## 3. v2 Goals (the additions)

1. **Multi-page navigable site** — Home, About, Foundations sub-pages, Unit 0 + Unit 3 unit pages with their block pages, Reference, AI Partners, Student Hub.
2. **Shared CSS / JS** — extract the inline styles from the mockup into a shared `styles.css`; build a small `nav.js` for the top nav state.
3. **Reusable components** — block pages, glossary entries, case study entries should be component-like (templated). When building Block 4, copy a Block 3 file and update content — but the layout/CSS comes from shared files.
4. **Persistent reference layer** — Glossary entries, Case Study Library, Simulator Hub all as their own pages with consistent templates.
5. **Working AI partner integration** — links from block pages to AI partner sub-pages, partner sub-pages with embedded chat interfaces (BoodleBox iframe if approved, otherwise styled link-out to Gemini Gems).
6. **Hosting-ready** — built so it can be deployed to GitHub Pages or Vercel without modification. Static HTML, no build step ideally (or a minimal one if needed for templating).

---

## 4. Recommended architecture

```
hs-earth-env-site/
├── CLAUDE.md                          # this file
├── README.md                          # build + deploy instructions
├── index.html                         # Home page
├── about.html
├── foundations/
│   ├── index.html                     # Foundations landing
│   ├── opvl-framework.html
│   ├── ai-documentation-protocol.html
│   ├── class-expectations.html
│   ├── the-rubric.html
│   ├── how-to-use-this-site.html
│   └── how-to-use-ai-partners.html
├── units/
│   ├── index.html                     # Units landing
│   ├── unit-0/
│   │   ├── index.html                 # Unit 0 landing
│   │   ├── block-1.html               # ... block-7.html
│   │   ├── ...
│   │   └── assessment-source-dossier.html
│   ├── unit-3/
│   │   ├── index.html
│   │   ├── block-1.html               # ... block-12.html
│   │   ├── ...
│   │   ├── assessment-hazard-profile.html
│   │   ├── assessment-engineering-portfolio.html
│   │   └── tectonic-city-builder.html # sim launcher
│   └── unit-{1,2,4,5,6,7}/             # stubbed
├── reference/
│   ├── index.html
│   ├── glossary/
│   │   ├── index.html
│   │   ├── liquefaction.html
│   │   ├── subduction.html
│   │   └── ...
│   ├── case-studies/
│   │   ├── index.html
│   │   ├── tohoku-2011.html
│   │   ├── kobe-1995.html
│   │   └── ...
│   └── simulator-hub.html
├── ai-partners/
│   ├── index.html
│   ├── the-skeptic.html
│   ├── the-source-evaluator.html
│   ├── plate-tectonics-tutor.html
│   ├── engineering-coach.html
│   └── defense-practice-partner.html
├── student-hub/
│   ├── index.html
│   ├── how-to-submit.html
│   ├── rubric-quick-reference.html
│   ├── ai-documentation-template.html
│   ├── choice-board-templates.html
│   └── calendar.html
├── assets/
│   ├── styles.css                     # shared styling
│   ├── nav.js                         # top nav + breadcrumb state
│   ├── images/
│   │   ├── earth-banner.jpg
│   │   ├── case-studies/
│   │   └── glossary/
│   └── templates/
│       ├── block-page.html            # template for new block pages
│       ├── glossary-entry.html
│       └── case-study.html
└── deploy/
    └── (GitHub Pages or Vercel config when ready)
```

**Why no build step:** Aim for plain HTML files with shared CSS and a minimal JS for nav state. No React, no Next.js, no static site generator. Reasoning: this needs to be maintainable by Matthew, who isn't a full-time developer. Plain HTML can be edited in any text editor and previewed in any browser.

**Exception:** If you want a build step purely for templating (so the nav HTML isn't duplicated across 60 files), use a tiny tool like 11ty (Eleventy) or just a Python script that injects nav HTML into a template marker. Avoid React/Next.js/Vue.

---

## 5. Pattern: the block page template

Every block page across Units 0-7 follows the same five-section template:

```html
<!-- HEADER -->
<header class="page-header">
  <h1>Block N — Title</h1>
  <div class="meta">Unit X · Block N of M · 80 min · Week Y, Day A/B</div>
  <div class="strand-chips">
    <span class="chip active">K/U</span>
    <span class="chip preview">T/T</span>
    <span class="chip faded">C</span>
  </div>
</header>

<!-- AI PARTNER CALLOUT -->
<div class="ai-callout">
  <div class="label">🤖 AI Partners available today</div>
  <a class="ai-pill" href="/ai-partners/source-evaluator.html">Source Evaluator</a>
  <a class="ai-pill" href="/ai-partners/skeptic.html">The Skeptic</a>
  <p class="reminder">Every AI use gets documented.</p>
</div>

<!-- STORY (purple) -->
<section class="block-section story">
  <span class="tag">📖 Story</span>
  <h2>Why this block matters</h2>
  <p>...</p>
</section>

<!-- CONCEPTS (blue) -->
<section class="block-section concepts">
  <span class="tag">💡 Concepts</span>
  <h2>Ways in</h2>
  <div class="entry-grid">
    <div class="entry-card">🎥 Watch (6 min)...</div>
    <div class="entry-card">📄 Read (12 min)...</div>
    <div class="entry-card">🔬 Interact...</div>
  </div>
</section>

<!-- DO (yellow) -->
<section class="block-section do">
  <span class="tag">🛠️ Do</span>
  <h2>Today's work — choose one path</h2>
  <div class="choice-intro">Learning Intention: ...</div>
  <div class="choice-board">
    <div class="choice">A — ...</div>
    <div class="choice">B — ...</div>
    <div class="choice">C — ...</div>
    <div class="choice">D — ...</div>
  </div>
</section>

<!-- SHOW (green) -->
<section class="block-section show">
  <span class="tag">📊 Show</span>
  <h2>What you're submitting today</h2>
  <div class="submission-callout">
    <div class="label">📥 Exit ticket</div>
    <p>...</p>
    <a class="rubric-link" href="https://classroom.google.com/...">Submit via Google Classroom →</a>
  </div>
</section>

<!-- REFLECT (orange) -->
<section class="block-section reflect">
  <span class="tag">🪞 Reflect</span>
  <h2>One question before you leave</h2>
  <div class="reflect-input">...</div>
</section>

<!-- BOTTOM NAV -->
<nav class="block-nav">
  <a class="prev" href="block-N-minus-1.html">← Previous</a>
  <a class="map" href="index.html">Unit Map</a>
  <a class="next" href="block-N-plus-1.html">Next →</a>
</nav>
```

This is the durable skeleton. Every Block N HTML file has these eight elements (header, callout, 5 sections, nav).

---

## 6. CSS variable palette (from existing mockup)

```css
:root {
  --ink: #1a1a2e;
  --paper: #fafaf7;
  --accent: #2e5395;            /* primary blue */
  --accent-light: #d9e2f3;
  --muted: #4f4f4f;
  --soft: #eeeeee;
  --good: #e2efda;              /* green — Show */
  --warn: #fce4d6;
  --border: #cccccc;
  --story: #e8e2f5;             /* purple */
  --concepts: #d9e7f3;          /* light blue */
  --do: #fff4d9;                /* yellow */
  --show: #e2efda;              /* green */
  --reflect: #f5e6d9;           /* peach */
  --ai-orange: #f5a623;         /* AI Partners visual distinction */
}
```

Keep this palette in `assets/styles.css`. Don't override per-page — the visual consistency is the point.

---

## 7. Content sources (where to lift from)

The existing docx files in `/Users/imatthew/Documents/Claude/Projects/NGSS Science Standards/Earth and Environmental Science/` are the source of truth for content. Specifically:

| Content type | Source docx |
|---|---|
| OPVL Framework page | `Unit 0_ Foundations/OPVL + AI Documentation Protocol.docx` (Sections 1-2) |
| AI Documentation Protocol page | Same docx (Sections 3-4) |
| Class Expectations | Same docx (Section 5) — paraphrased into student voice |
| The Rubric (student-facing) | `Unit 0_ Foundations/Unit 0_ Source Dossier Assessment Package.docx` (Section 3) + AISC strand rubric |
| Unit 0 landing + block content | `Unit 0_ Foundations/Unit 0_ Scientific Practices & Class Foundations UbD (2026-27).docx` (Story + Pacing tables) |
| Source Dossier handout | `Unit 0_ Foundations/Unit 0_ Source Dossier Assessment Package.docx` (Section 2) |
| Unit 3 landing + block content | `Unit 3_ Plate Tectonics and Natural Hazards UbD (2026-27).docx` |
| Hazard Profile + Portfolio handouts | `Unit 3_ Assessment Package (2026-27).docx` (Section 2) |
| AI Partner descriptions | `AI Partner Specifications (U0 + U3 starter set).docx` |
| Case Study Library content | `Plate-Tectonics-City-Builder/CLAUDE.md` (Section 7) |
| Tectonic City Builder embed | `Plate-Tectonics-City-Builder/tectonic-city-builder.html` |

**The Google Sites Build Guide also has copy-paste-ready content for each page.** That doc was written for Google Sites, but every page's content (in the `📋 [content for...]` blocks) lifts directly into HTML too.

---

## 8. Build sequence

Mirrors the Google Sites build sequence but with HTML semantics:

**Phase 1 — Skeleton (1-2 hours).** Set up the folder structure. Build `index.html` with the working top nav. Build placeholder pages for all six top-nav sections. Confirm navigation works.

**Phase 2 — Shared CSS / nav (2-3 hours).** Extract styles from the existing mockup into `assets/styles.css`. Build the top nav as a partial that every page loads (either via JavaScript or via a build-time templating script).

**Phase 3 — Block page template (1-2 hours).** Create `assets/templates/block-page.html` as the master template. Build one block page (Unit 3 Block 3 — already exists as the mockup) using this template structure. Confirm CSS and nav work end-to-end.

**Phase 4 — Foundations (3-5 hours).** Build all six Foundations sub-pages. The three with deep content (OPVL Framework, AI Documentation Protocol, Class Expectations) need the most work — lift content from the docx sources. The Rubric and How to Use This Site pages are content-light.

**Phase 5 — Unit 0 (4-6 hours).** Build unit landing page + 7 block pages. Three blocks (1, 2, 3) have full content; Blocks 4-7 are stubs with just the header structure. Build the Source Dossier assessment page.

**Phase 6 — Unit 3 (5-7 hours).** Same pattern. Three deep blocks (1, 3, 7 recommended). Stubs for the rest. Hazard Profile, Engineering Portfolio assessment pages. Tectonic City Builder launcher page that iframes the existing simulator HTML.

**Phase 7 — AI Partners (2-3 hours).** Hub landing + sub-page for each of the 5 starter partners. Each sub-page is mostly text + a launch button (which links out to BoodleBox / Gemini Gems).

**Phase 8 — Reference (3-5 hours).** Glossary landing + one entry as template (Liquefaction). Case Study Library landing + one entry as template (Tōhoku 2011). Simulator Hub.

**Phase 9 — Student Hub (1-2 hours).** Hub landing + How to Submit + Rubric Quick Reference. Other pages stubbed.

**Phase 10 — Polish (1-2 hours).** Banner image, theme colours, favicon, responsive breakpoints for mobile.

**Phase 11 — Deploy (1-2 hours).** Push to GitHub Pages or Vercel. Confirm hosted URL works on mobile and desktop. Test all navigation.

Total: ~25-40 hours, similar to the Google Sites build but with the advantage that the work compounds — fixing a CSS variable updates the whole site.

---

## 9. Success criteria

**For Phase 1 done:** Skeleton site with 6 top-nav sections, all navigation links work, runs locally in any browser.

**For Phase 5 done (Unit 0 complete):** Visitor can land on the home page, navigate to Unit 0, click into Block 1, complete the page reading, click forward to Block 2, see the consistent template, navigate back to the Unit landing. Submission button on Show section links out (placeholder URL is fine).

**For full v1 done:** All pages in the folder structure above exist. Three deep blocks each in U0 and U3. Foundations layer complete. Reference layer has one glossary entry and one case study as templates. All 5 AI partner pages exist (with launch buttons that may point to placeholder URLs). Polish phase complete. Deployed to a hosted URL.

---

## 10. What NOT to build

- **No backend.** No database, no auth, no server-side anything. Static HTML.
- **No React / Vue / Next.js.** Plain HTML. If templating is essential, use a Python script that injects partials at build time, or 11ty (Eleventy) for minimal config.
- **No animation libraries.** CSS transitions are fine; don't pull in GSAP or Framer Motion.
- **No analytics yet.** Plain Plausible or Google Analytics can be added later if needed; for v1, skip.
- **No comment system.** Students submit through Google Classroom, not the Site.
- **No login / personalisation.** The Site is the same for every viewer. Personalisation lives in Google Classroom + the gradebook.

---

## 11. Open questions for the Claude Code session

When you start the project, decisions to make in conversation:

1. **Templating approach:** Plain HTML with copy-paste nav, JavaScript that injects nav at runtime, or a build step (11ty / Python script)? Recommend plain HTML for v1 simplicity; revisit if duplication becomes painful.
2. **Hosting:** GitHub Pages, Vercel, Netlify, or AISC-hosted? GitHub Pages is simplest. Vercel adds preview deploys for branches if you want them.
3. **AI partner embeds:** If BoodleBox is approved, can you iframe a box into the partner sub-page? Or link out to a new tab? Recommend link-out for v1 (less embed friction).
4. **Mobile-first or desktop-first?** Students will use both. The existing mockup is responsive-friendly but not mobile-first. For v1, accept that desktop is the primary use case (in-class on laptops) but ensure mobile-readability.

---

## 12. Pointers back to source materials

```
/Users/imatthew/Documents/Claude/Projects/NGSS Science Standards/Earth and Environmental Science/
├── Earth & Env Science — Course Architecture & Year Map (2026-27).docx
├── Google Site — Course Architecture Spec.docx
├── Google Sites Build Guide.docx                    # the parallel Sites build
├── block-page-mockup.html                            # the starting visual reference
├── AI Partner Specifications (U0 + U3 starter set).docx
├── Unit 0_ Foundations/
│   ├── OPVL + AI Documentation Protocol.docx
│   ├── Unit 0_ Scientific Practices & Class Foundations UbD (2026-27).docx
│   └── Unit 0_ Source Dossier Assessment Package.docx
├── Unit 3_ Plate Tectonics and Natural Hazards UbD (2026-27).docx
├── Unit 3_ Assessment Package (2026-27).docx
└── Plate-Tectonics-City-Builder/
    ├── CLAUDE.md                                     # simulator v2 brief
    └── tectonic-city-builder.html                    # working v1 simulator
```

When in doubt, the architecture spec and the year map are the strategic anchors. The Google Sites Build Guide is the tactical recipe — much of its per-page content lifts directly into HTML. The block-page-mockup.html is the visual reference for the block-page template.
