# Build Progress — `hs-earth-env-site`

> **Purpose:** Living status doc. Tells you (and future Claude Code sessions) what's built, what's stubbed, what to build next, and in what order. The charter is in `CLAUDE.md` — do NOT modify that. Update this file at the end of each build session.

**Last updated:** 2026-05-24 (Unit 1 deep build phase 2 — Blocks 7 + 10 full)

---

## TL;DR — pick up here

**Unit 1 deep build phase 2 is complete.** Block 7 (Habitability Framework) is the framework-completion class with a 3-path choice board (Solo / Pair-jigsaw / AI-coached). Block 10 (NASA Committee Defense) is the summative defense day with a structured 4-phase Do sequence (Submit / Q&A round / Reflection circle / Connect-forward to U2) and the 6-category Q&A bank listed inline.

**Unit 1 now has 4 deep blocks (1, 2, 7, 10)** covering every key teaching move — phenomenon launch, systems-thinking intro, framework completion, and audience defense — plus the full Goldilocks Report assessment and both new AI partners. Blocks 3, 4, 5, 6, 8, 9 remain stubs (supporting content blocks, lower leverage). The unit can teach competently with this set — same shape as Unit 3 (4 deep blocks + stubs).

**Next-phase recommendation: pivot to Unit 2 (Surface Processes) skeleton.** Parallel to how we approached U1: landing + 9 block stubs + Landscape Reading assessment stub + Field Geologist AI partner stub. After that comes U2 deep build, then U4–U7 in teach-order.

After Unit 1 deep build: teach-order priority is **U2 → U4 → U5 → U6 → U7**. (U3 is fully built and the simulator behind it is functionally complete.)

The site is **LIVE on Vercel** — every push to `main` auto-deploys. Don't break the build. After any change, `npm run build` locally before committing.

---

## How to start Unit 1 (instructions for a fresh session)

1. **Read the project state below.** Most of the patterns you need already exist.
2. **Open the source docs:**
   - `/Earth and Environmental Science/Unit 1_ Earth and Universe/U1 Block Plans — LI + SC + Bell Ringers + Reflections.docx` — per-block Learning Intentions / Success Criteria / bell ringers / reflections (lift directly into each block's Story / Show / Reflect sections)
   - `/Earth and Environmental Science/Unit 1_ Earth and Universe/` UbD doc (drives the Story narrative + the assessment design)
   - `/Earth and Environmental Science/Unit 1_ Earth and Universe/Assessment Support/U1 Material — AI Partner Specs (Planet Hunter + Systems Diagrammer).docx` — for the two new AI partner pages
   - The Goldilocks Report assessment package (in the same Unit 1 folder)
3. **Extract docx content with the same Python pattern used before:**
   ```bash
   python3 -c "
   import zipfile
   from xml.etree import ElementTree as ET
   W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
   ns = {'w': W}
   path = '/path/to/file.docx'
   with zipfile.ZipFile(path) as z:
     with z.open('word/document.xml') as f:
       tree = ET.parse(f)
       for para in tree.getroot().iter(f'{{{W}}}p'):
         text = ''.join(t.text for t in para.iter(f'{{{W}}}t') if t.text)
         style_el = para.find('w:pPr/w:pStyle', ns)
         style = style_el.get(f'{{{W}}}val') if style_el is not None else ''
         prefix = '## ' if 'Heading2' in style else '# ' if 'Heading1' in style or 'Title' in style else ''
         if text.strip(): print(prefix + text)
   "
   ```
4. **Copy `src/units/unit-0/` as the structural template.** Unit 0 has 7 blocks with full content (per-block Story / Concepts / Do / Show / Reflect, AI callout, breadcrumbs, prev/next nav, NGSS standards). Unit 1 is the same shape — just different content and 10 blocks instead of 7.
5. **Use the Hybrid placeholder convention** for invented specifics (video titles, source URLs, choice-board options) — `.entry-card.placeholder` and `.choice.placeholder` classes already exist. The pattern is established in Unit 0 Blocks 1–3.
6. **Build the assessment page** at `src/units/unit-1/assessment-goldilocks-report.njk` using `src/units/unit-0/assessment-source-dossier.njk` or `src/units/unit-3/assessment-hazard-profile.njk` as the template (base.njk + .prose + breadcrumbs).
7. **Build the AI partner pages** at `src/ai-partners/planet-hunter.njk` and `src/ai-partners/systems-diagrammer.njk` using `src/ai-partners/the-source-evaluator.njk` as the structural template (7-section pattern: persona+scope, launch button, how to use, opening message, example exchange, watch-out-for, documentation reminder).
8. **Update `src/_data/nav.js` only if you're adding a top-nav item** (probably not for Unit 1 — it's just a sub-page of Units).
9. **Update `src/units/index.njk`** to refresh the Unit 1 card description from stub to real.
10. **`npm run build`** → verify no errors → commit + push (Vercel auto-deploys).

---

## Key project state (for a fresh session)

### Repos
- **Site:** https://github.com/matthewignash/hs-earth-env-site — deployed to Vercel from `main` (auto-deploy on push)
- **Simulator:** https://github.com/matthewignash/plate-tectonics-city-builder — sibling project; v1 at root, v2 in `v2/`

### Local paths
- Site: `/Users/imatthew/Documents/Claude/Projects/NGSS Science Standards/Earth and Environmental Science/hs-earth-env-site/`
- Simulator: `/Users/imatthew/Documents/Claude/Projects/NGSS Science Standards/Earth and Environmental Science/Plate-Tectonics-City-Builder/`
- Course content (docx sources): `/Users/imatthew/Documents/Claude/Projects/NGSS Science Standards/Earth and Environmental Science/`

### Stack
- **11ty v3** static site generator. Nunjucks templates (`.njk`). No build dependencies beyond 11ty.
- `npm run dev` for local server. `npm run build` for production output to `_site/`.
- No `innerHTML` anywhere in JS (DOMParser pattern for the simulator). Keep the convention.

### Layouts
- `src/_includes/layouts/base.njk` — wraps everything (nav, breadcrumbs, page header, main, footer). Reads `customLayout`, `heroLayout`, `breadcrumbs`, `extraStylesheets` from front matter.
- `src/_includes/layouts/block-page.njk` — extends base.njk via `customLayout: true`; renders the 5-section block-page structure with AI callout + bottom nav.

### Conventions to preserve
- Color palette and CSS variables: do not modify from the original mockup
- Block-page structure: **Story → Concepts → Do → Show → Reflect**
- Strand chips (K/U, T/T, C) in the block-page header — active/preview/faded as appropriate
- Breadcrumbs: Home › Units › Unit N › Block N
- Bottom navigation: Previous Block / Unit Map / Next Block
- AI partner callouts: visually distinct, list the partners relevant to the block, link out to `/ai-partners/<slug>/`, include the documentation reminder linking to `/student-hub/ai-documentation-template/`
- Submission callout: visually distinct from AI partner callout
- Placeholder cards: `.entry-card.placeholder` and `.choice.placeholder` for content that needs Matthew's specifics later (dashed border + "Placeholder" tag)

---

## What's built

### Foundations layer (complete — 7 pages)
- `foundations/index.njk`
- `foundations/opvl-framework.njk` (incl. AI as the 6th source type)
- `foundations/ai-documentation-protocol.njk`
- `foundations/class-expectations.njk`
- `foundations/the-rubric.njk`
- `foundations/how-to-use-this-site.njk`
- `foundations/how-to-use-ai-partners.njk`

### Unit 0 — Foundations (complete: 7 blocks + assessment)
- `units/unit-0/index.njk`
- `units/unit-0/block-1.njk` (Welcome + How We Work) — full content
- `units/unit-0/block-2.njk` (OPVL Deep Dive) — full content
- `units/unit-0/block-3.njk` (AI as a Source) — full content
- `units/unit-0/block-4.njk` through `block-7.njk` — stubs (header + meta + strand chips + one-paragraph description)
- `units/unit-0/assessment-source-dossier.njk` — full content

### Unit 3 — Plate Tectonics (complete: 12 blocks + 2 assessments + simulator)
- `units/unit-3/index.njk`
- `units/unit-3/block-1.njk` (Inside Earth + Boundary Types) — full content
- `units/unit-3/block-2.njk` (Subduction & Transform Deep Dive + Sim Demo) — full content
- `units/unit-3/block-3.njk` (Volcanism + Engineering Tech) — full content
- `units/unit-3/block-5.njk` (Case Study Jigsaw + Hazard Profile Due) — full content
- `units/unit-3/block-4.njk`, `block-6.njk` through `block-12.njk` — stubs
- `units/unit-3/assessment-hazard-profile.njk` — full content
- `units/unit-3/assessment-engineering-portfolio.njk` — full content
- `units/unit-3/tectonic-city-builder.njk` — simulator launcher (iframes v2 of the sim)

### Unit 1 — Earth and Universe (landing full · 4 deep blocks · assessment full · Blocks 3, 4, 5, 6, 8, 9 stubbed)
- `units/unit-1/index.njk` — full landing (anchor question, 10-block grid, Goldilocks Report card, AI partners + resources panels)
- `units/unit-1/block-1.njk` (Phenomenon Launch) — **full content** (5 sections, Hybrid pattern, whole-class Do, aiPartners callout)
- `units/unit-1/block-2.njk` (Earth as Baseline) — **full content** (5 sections, 3-path choice board for systems-diagram entry)
- `units/unit-1/block-3.njk` (Mars as Calibration) — stub
- `units/unit-1/block-4.njk` (Scale of the Cosmos) — stub
- `units/unit-1/block-5.njk` (Exoplanet Detection) — stub
- `units/unit-1/block-6.njk` (Choose Your Exoplanet) — stub
- `units/unit-1/block-7.njk` (Habitability Framework) — **full content** (5 sections, 3-path choice board: Solo / Pair-jigsaw / AI-coached; framework template feeds Block 8 draft)
- `units/unit-1/block-8.njk` (Drafting Day) — stub
- `units/unit-1/block-9.njk` (Stakeholder Q&A Prep) — stub
- `units/unit-1/block-10.njk` (NASA Committee Defense) — **full content** (5 sections, structured 4-phase Do sequence with 6-category Q&A bank inline, unit reflection bookends Block 1)
- `units/unit-1/assessment-goldilocks-report.njk` — **full handout** (GRASPS, 8-exoplanet table, 4 steps, two gates callout, format options, K/U+T/T+C rubric tables, AI Documentation pointer)

### AI Partners (7 of 16 — all 7 currently used in U0/U1/U3 are full)
- `ai-partners/index.njk` — hub landing with all 7 cards
- `ai-partners/the-skeptic.njk`
- `ai-partners/the-source-evaluator.njk`
- `ai-partners/plate-tectonics-tutor.njk`
- `ai-partners/engineering-coach.njk`
- `ai-partners/defense-practice-partner.njk`
- `ai-partners/planet-hunter.njk` — **full 7-section spec** (intro + launch placeholder + how-to + opening message + example exchange + watch-out-for + documentation reminder)
- `ai-partners/systems-diagrammer.njk` — **full 7-section spec** (same structure)

Each follows a 7-section template (persona+scope → launch button → how to use → opening message → example exchange → watch out for → documentation reminder). Launch URLs are placeholder (`launchUrl: ""` in front matter) — fill in when BoodleBox/Gemini Gems get deployed.

### Reference layer (1 entry per section + stubs visible on landings)
- `reference/index.njk`
- `reference/glossary/index.njk` (Liquefaction live + 9 "Coming soon" stub tiles for the other Unit 3 terms — non-clickable)
- `reference/glossary/liquefaction.njk` — full entry (canonical glossary template)
- `reference/case-studies/index.njk` (Tōhoku 2011 live + 8 "Coming soon" stub tiles for the other events)
- `reference/case-studies/tohoku-2011.njk` — full entry (canonical case-study template)
- `reference/simulator-hub/index.njk` — Tectonic City Builder + planned-simulator note for future units

### Student Hub (3 full pages + 2 stub pages)
- `student-hub/index.njk`
- `student-hub/ai-documentation-template.njk` — full (the working tool; distinct from the Foundations framework explainer)
- `student-hub/how-to-submit.njk` — full
- `student-hub/rubric-quick-reference.njk` — full
- `student-hub/choice-board-templates.njk` — stub
- `student-hub/calendar.njk` — stub

### Top-level
- `index.njk` (home with gradient hero)
- `404.njk` (custom not-found page)
- `units/index.njk` (lists all 8 units with full/stub status)

### Polish (Phase 10)
- 🌍 emoji SVG favicon at `assets/favicon.svg`
- Open Graph + Twitter card meta tags on every page
- Skip-to-main-content link (a11y)
- 6-section nav in the footer
- Mobile breakpoint at 640px (wide tables horizontal-scroll inside their container)
- Home page has a gradient hero with the course title

---

## Simulator state — see `Plate-Tectonics-City-Builder/v2/README.md` for full detail

- **v1 reference build** at `Plate-Tectonics-City-Builder/tectonic-city-builder.html` — immutable, kept as backup
- **v2 functionally complete client-side**: 5 named scenarios (Tōhoku / Cascadia / Anatolian / Merapi / Hawaii), isometric SVG sprites with composable tech overlays, 4 visual damage states, on-grid disaster animations (≤3s), 9 historical case studies (briefing + failure-mode-aware debrief + standalone library), historical-accuracy scoring (4th component, 10%)
- **v2 Phase E DEFERRED**: GAS-deployed web app + Sessions Sheet auto-logging + "My Cities" past attempts + teacher dashboard. Scaffolded at `Plate-Tectonics-City-Builder/v2/Code.gs`, `appsscript.json`, `SETUP.md`. Matthew runs the 11-step `SETUP.md` walkthrough when ready to deploy.
- **Site iframes v2** at `/units/unit-3/tectonic-city-builder/` (path: `/assets/simulators/v2/index.html`). v1 still available at `/assets/simulators/tectonic-city-builder.html` for fallback.
- **Sync script:** `npm run sync-simulator-v2` (in the site repo) copies the 7 v2 runtime files (HTML/CSS/JS only, no docs or GAS files) from `../Plate-Tectonics-City-Builder/v2/` into `src/assets/simulators/v2/`. Run after simulator changes; commit; push; Vercel rebuilds.

---

## What's stubbed or missing (priority-ordered)

### PRIORITY 1 — Unit 1 (Earth and Universe), 10 blocks + 1 assessment + 2 AI partners

Content sources to use:
- `Unit 1_ Earth and Universe/U1 Block Plans — LI + SC + Bell Ringers + Reflections.docx` — has LI, SC, bell ringer, and reflection per block ready to drop in
- `Unit 1_ Earth and Universe/` UbD doc — drives Stage 1/2/3 content per block + the assessment
- `Unit 1_ Earth and Universe/Assessment Support/` — 6 files (Calibration Profiles, Exoplanet Data Cards, Quantitative Lookup Tables, Framework Template + Q&A Bank, AI Partner Specs, Worked Example Kepler-22b)
- Goldilocks Report assessment package
- AI partners that need linking from U1 blocks: **Planet Hunter**, **Systems Diagrammer**

Pages to build:
- `units/unit-1/index.njk` (unit landing — block table + assessment link + AI partners + resources)
- `units/unit-1/block-1.njk` through `block-10.njk` (use `block-page.njk` layout, mirror U0/U3 structure; pick which blocks get full content via the Hybrid pattern vs stubs)
- `units/unit-1/assessment-goldilocks-report.njk` (mirror the assessment-source-dossier.njk pattern)
- `ai-partners/planet-hunter.njk` + `ai-partners/systems-diagrammer.njk` (mirror `the-source-evaluator.njk`)
- Update `units/index.njk` Unit 1 card description from stub to real
- Update `ai-partners/index.njk` to include the 2 new partners (or refresh stub language)

### PRIORITY 2 — Remaining 11 AI Partner pages

Specs are in:
- `Unit 2_ Surface Processes/Assessment Support/U2 Material — AI Partner Spec (Field Geologist).docx`
- `AI Partner Specifications (U4-U7 combined).docx` — Climate Modeler, Policy Aide, Hydrologist, Stakeholder Voice, Agronomist, Ecologist, Energy Analyst, Op-Ed Editor

Pages to build (11):
- `ai-partners/planet-hunter.njk` (covered in PRIORITY 1)
- `ai-partners/systems-diagrammer.njk` (covered in PRIORITY 1)
- `ai-partners/field-geologist.njk`
- `ai-partners/climate-modeler.njk`
- `ai-partners/policy-aide.njk`
- `ai-partners/hydrologist.njk`
- `ai-partners/stakeholder-voice.njk`
- `ai-partners/agronomist.njk`
- `ai-partners/ecologist.njk`
- `ai-partners/energy-analyst.njk`
- `ai-partners/op-ed-editor.njk`

### PRIORITY 3 — Unit 2 (Surface Processes), 9 blocks + 1 assessment

Same pattern. Sources:
- `Unit 2_ Surface Processes/U2 Block Plans...docx`
- `Unit 2_ Surface Processes/` UbD + Assessment + Assessment Support (4 files)
- AI partner: Field Geologist
- Assessment: Landscape Reading

### PRIORITY 4–7 — Units 4, 5, 6, 7 (in teaching order)

For each:
- Pull from `U{X} Block Plans...docx` for per-block LI/SC/bell ringer/reflection
- Pull from `Unit X_ .../` for UbD + Assessment + Assessment Support
- Identify and link the AI partners specific to each unit
- Mirror U0/U1/U3 structure

Block counts (from Matthew's note):
- U4 Climate: 10 blocks + Chennai Climate Brief assessment
- U5 Hydrosphere: 10 blocks + Position Paper assessment
- U6 Biosphere & Land Use: 10 blocks + Sustainable Land Plan assessment
- U7 Energy & Sustainability: 10 blocks + Energy Mix Design + Op-Ed assessment + Year-End Synthesis

### PRIORITY 8 — Reference layer (expand from current 1+1+1)

Build these as their own template-driven sections:
- `reference/glossary/` — one page per term, sourced from the Master Vocabulary Reference doc (Liquefaction exists as the template)
- `reference/case-studies/` — U3 has a 9-case library (Tōhoku 2011 done; 8 stubs); U5 has 8 water-rights cases; U4 has 8 adaptation challenges; U6 has 8 region cards; U7 has 8 city energy cards
- `reference/simulator-hub/` — landing exists; add a per-unit simulator entry as future simulators ship

### PRIORITY 9 — Student Hub remaining

- `student-hub/choice-board-templates.njk` — stubbed; needs full content
- `student-hub/calendar.njk` — stubbed; needs Google Calendar embed or static term-by-term map

### PRIORITY 10 — Resources Library pages (NOT started)

The Resources Library doc (`/Earth and Environmental Science/Resources Library (Earth & Env, with OPVL tags).docx`) has the content for the site's Resources layer.

Per Matthew's structure choice (hybrid), build:
- `reference/resources/index.njk` (overview + section index)
- `reference/resources/data-sources.njk` (Section 1 — Cross-cutting data, ~8 entries)
- `reference/resources/simulators.njk` (Section 2 — external sims incl. HHMI BioInteractive as a hub, ~7 entries)
- `reference/resources/reading.njk` (Section 3 — journalism, ~4 entries)
- `reference/resources/ai-tools.njk` (Section 4 — AI tools + AI literacy, ~6 entries)
- `reference/resources/indian-sources.njk` (Section 5 — dedicated Indian section, ~12 entries)
- `reference/resources/tools.njk` (Section 6 — student tools like Zotero, Datawrapper, ~4 entries)

For each entry, render: name (linked), URL, one-line description, OPVL grid (4 rows: O / P / V / L). The Resources docx has this content per resource.

Per-unit selected sources (Sections 7–14 of the docx) should appear as a "Selected Sources" panel on each unit's index page (`units/unit-X/index.njk`). Each unit has 5–8 unit-specific resources, some of which are "See cross-cutting" stubs that link back to the main Resources sections.

### PRIORITY 11 — Misconception probe pages (NOT started)

The Misconception Probe Bank doc (`/Earth and Environmental Science/Misconception Probe Bank (Earth & Env, 12 probes).docx`) contains 12 probes that should each become a page under:
- `foundations/misconception-probes/index.njk` (overview + index)
- `foundations/misconception-probes/probe-1-source.njk` through `probe-12-net-zero.njk`

Per-page structure (mirror Keeley layout):
- Banner with probe number, code (U0–U7), title
- Scenario
- The N student voices (use the existing typography for character voices — could be cards or list)
- "Circle and explain" instruction
- Lined writing area (could be a styled `<div class="writing-lines">`)
- Hide teacher notes from students (use a `?teacher=true` query param or a separate `/teacher/` path)

These are linked from the relevant block pages (e.g., probe 6 "What Causes Earthquakes?" is linked from U3 Block 3).

---

## Deploy state

- **Site:** live on Vercel from `main` branch of `matthewignash/hs-earth-env-site`. Auto-deploys on push (~30–60 seconds per build). `vercel.json` sets `trailingSlash: true` to match the site's URL scheme.
- **Simulator runtime in the site:** `/assets/simulators/v2/` (7 runtime files). Update via `npm run sync-simulator-v2` from the site root, then commit + push.
- **Simulator v1 backup:** `/assets/simulators/tectonic-city-builder.html` (single file). Update via `npm run sync-simulator` if needed.
- **Simulator GAS deploy:** not yet live — Phase E waiting for Matthew to run `Plate-Tectonics-City-Builder/v2/SETUP.md`.

---

## Future simulator builds to consider (NOT yet stubbed)

The Tectonic City Builder is currently the only simulator. The course would benefit from parallel simulators for other units — but be selective; not every unit needs one. Highest-priority candidates:

1. **Cauvery Allocation Simulator (U5)** — adjust water allocations between Karnataka and Tamil Nadu, see consequences for farmers / urban / ecosystem / Indigenous communities. Pareto-style outcomes. Would directly support Position Paper.
2. **Habitability Zone Calculator (U1)** — adjust planet mass, distance, star type, atmosphere; see real-time surface temp, water state, atmospheric retention. Generate your own exoplanet against the framework. **(Note: this would be a natural complement to Unit 1, the next build.)**
3. **Multi-Objective Land Allocation Optimizer (U6)** — 100 km² grid, allocate land uses, real-time scoring on yield/biodiversity/carbon/livelihoods/equity. Pareto frontier visualization.
4. **Energy Mix Designer (U7)** — drag-drop sources, see emissions / cost / land use / intermittency / jobs / lifecycle CO₂.

If/when these get briefs, create them as **sibling Claude Code projects** at the same level as `hs-earth-env-site/` and `Plate-Tectonics-City-Builder/`, then embed via `<iframe>` from the relevant block page. Do not build inside `hs-earth-env-site`; keep simulators decoupled so they can deploy independently. Use the same sync-script pattern (`npm run sync-simulator-<name>`).

---

## Notes for the next session

- 11ty is the SSG. Use the existing `.eleventy.js` config; don't add a build step.
- Layouts live in `src/_includes/layouts/`. Don't duplicate; extend.
- When in doubt, copy a U0 or U3 block file as a starting point — those are the canonical references for the block-page pattern.
- `npm run build` after any change. The site auto-deploys on push to Vercel — broken builds break the live URL.
- File-size limits (per CLAUDE.md): function body 25 lines, file 300 lines, nesting depth 3. The CSS file exceeds 300 by design (block-page.css is a separate file to compensate). For new big features, split into a separate stylesheet rather than blow the budget.
- Hybrid content pattern: when you'd otherwise invent a specific (video URL, source title, choice-board option name), wrap it as a `.placeholder` card with a "TBD" prefix. Matthew swaps these later when he has the real material.
- Vercel config: `vercel.json` sets `trailingSlash: true`. Don't change without testing — every URL in the site is `/path/` style.
- The README has setup + deploy instructions; keep it current.
- **For Unit 1 specifically**: the canonical Hybrid block-page reference is `src/units/unit-0/block-1.njk` (Welcome + How We Work). It mixes real links (to Foundations pages) with `.placeholder` cards for unbuilt specifics. Copy that file's structure when building Unit 1 Block 1.
