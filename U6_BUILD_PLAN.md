# Unit 6 Build Plan — Claude Code Handoff

> **For:** Claude Code, working inside `hs-earth-env-site/`.
> **Goal:** Build the Unit 6 **skeleton** (navigable shell) on the site, following the exact pattern used for the U5 skeleton, then stop for review before deep builds.
> **Source of truth for content:** `../Unit 6_ Biosphere and Land Use/U6 REWORK — Urban 15-Minute Chennai Design Brief.md` (the urban 15-minute reframe) + the original `U6 Sustainable Land Plan — Assessment Handoff.md` for anything the rework didn't override.
> **Created:** 2026-06-02.

---

## 0. What Unit 6 now is (one paragraph for context)

U6 was redesigned from a rural/agricultural 100 km² land-allocation problem into an **urban 15-minute-neighbourhood** problem set in **Chennai**. Students each take a Chennai area/ward, redesign it as a 15-minute neighbourhood across 8 urban land-use categories, **name and quantify the trade-offs** (the unchanged T/T heart + 5 gates), work two disagreeing AI partners (an **Urban Planner** and an **Equity & Resilience** partner), and present at the school's **Earth Week** event — a real public-facing activity + Instagram artifact addressed to a **real municipal audience** (Greater Chennai Corporation / CMDA / ward), which serves as the Communication performance in place of a peer planning board.

---

## ⚠️ 1. Do-not-build-on-these-yet: open decisions

These are unresolved and affect content, NOT the skeleton's file structure. **The skeleton can be built now**; write block/assessment *titles and frames* to match the design brief, but leave specifics in placeholders (the site's established `placeholder` / `TBD:` convention) where a decision is pending.

1. **Earth Week timing / U5↔U6 flip.** The whole "Go public" arc assumes U6 runs near Earth Week. Not yet verified against the calendar. U5 and U6 are swappable. **Do not hard-code calendar dates.** Use block-relative language ("Block 9 — public presentation") only.
2. **Spatial unit** — ward vs. fixed 15-min-radius catchment, and what a simulator grid cell represents. Keep block copy unit-agnostic ("your Chennai area").
3. ~~**Standards** — needs an alignment pass.~~ **RESOLVED 2026-06-02.** Final set in §5 (anchored on HS-ETS1 + HS-ESS3; HS-LS2 dropped with no course gap — biodiversity is in Grade 9 Biology; U6 is an elective). Not provisional anymore.
4. **Simulator (Land Allocation Optimizer)** — still charter-stage in the sibling folder; not built. The U6 assessment references it as a planned tool, same way early U-pages referenced sims before they shipped. Link to `/reference/simulator-hub/` and mark TBD.

When in doubt, **stub, don't invent** — match how U5/U6 placeholders read today.

---

## 2. Build pattern (mirror the U5 skeleton commit exactly)

Reference commit: `76a9103 Unit 5 skeleton — 9 block stubs + landing + assessment + Hydrologist + Stakeholder Voice AI partners`.

The U6 skeleton = **one commit** containing:
- `src/units/unit-6/index.njk` (landing)
- `src/units/unit-6/block-1.njk` … `block-10.njk` (10 block stubs)
- `src/units/unit-6/assessment-sustainable-neighbourhood-plan.njk` (assessment stub)
- `src/ai-partners/urban-planner.njk` + `src/ai-partners/equity-resilience-partner.njk` (2 partner stubs)
- edits to `src/units/index.njk` (U6 card: drop "Stub.")
- edits to `src/ai-partners/index.njk` (intro line + 2 cards)
- `npm run build` clean, then commit. **Do NOT `git push`** — Vercel auto-deploys on push (`vercel.json` → `buildCommand: npm run build`, `trailingSlash: true`). Wait for Matthew to say "push."

Deep builds (spine → systems chunk → public-path close-out, mirroring U5's Phase A/B/C) come **later**, in separate commits, after this skeleton is reviewed.

---

## 3. Conventions to follow (verified against the live repo)

- **Eleventy**, input `src/`, output `_site/`, templates `.njk`. Pages are folder-routed by filename (`unit-6/block-1.njk` → `/units/unit-6/block-1/`).
- **Two layouts:** `layouts/base.njk` (landing, assessment, AI partner pages) and `layouts/block-page.njk` (block pages only).
- **Block page** uses the five-section rhythm: **Story → Concepts → Do → Show → Reflect** (`section-tag` spans: 📖 Story / 💡 Concepts / 🛠️ Do / 📊 Show / 🪞 Reflect). See `src/units/unit-5/block-1.njk` as the canonical model.
- **Cards** are `<a class="section-card">` with `card-icon` / `card-title` / `card-desc`, inside a `.section-grid`.
- **Placeholders** use `entry-card placeholder` + `<span class="placeholder-tag">Placeholder</span>` and `TBD:` prose. Keep them — a skeleton is honest about being a skeleton.
- **EAL already exists:** `src/foundations/eal/u6.njk` and `/foundations/eal/u6/`. Link it from the landing Resources section like U5 does.
- **Teacher voice:** "Mr. Ignash." No em dashes in student-facing copy (house style).
- Icons: U6 currently uses ⚡ on the units index; switch to a city/neighbourhood glyph (🏙️ is taken by U7; use 🏘️ or 🗺️ for U6).

### Block-page frontmatter template (copy U5's shape)
```yaml
---
layout: layouts/block-page.njk
unit: 6
unitTitle: "Biosphere & Land Use — the 15-Minute Chennai Neighbourhood"
block: 1
blocksTotal: 10
title: "…"
minutes: 80
week: 1
day: A
strands:
  active: ["K/U Knowledge"]      # or T/T / C as the block dictates
  preview: ["T/T Thinking"]
aiPartners:
  - { slug: urban-planner, label: "🏙️ The Urban Planner" }
breadcrumbs:
  - { url: /, label: Home }
  - { url: /units/unit-6/, label: "Unit 6 — Biosphere & Land Use" }
  - { label: "Block 1 — …" }
next: { url: /units/unit-6/block-2/, label: "Block 2 — …" }
unitMapUrl: /units/unit-6/
---
```

---

## 4. The 10 blocks (titles + one-line frames for the stubs)

Use these as `title` + landing card `card-desc`. Block stubs get the 5-section scaffold with `placeholder`/`TBD:` bodies — do not write full lesson content yet.

| # | Title | Frame (card-desc) | Strand focus |
|---|-------|-------------------|--------------|
| 1 | Phenomenon Launch — Can You Live Here on Foot? | The 15-minute neighbourhood as a land-use design problem. Chennai as the test case. | K/U |
| 2 | Urban Systems — Access, Density, Green-Blue, Heat, Flood | The city-scale analog of ecosystem services: what a neighbourhood has to deliver. | K/U |
| 3 | Area Data Cards — Choosing Your Chennai Neighbourhood | Read the area cards; lock your area. Baseline 15-min-access profile. | K/U → T/T |
| 4 | Multi-Objective Optimisation — The Design Move | Allocate the grid across 8 urban land uses. Land Allocation Optimizer introduced. | T/T |
| 5 | Trade-off Analysis — The Optimisation Worksheet | Quantify across ≥4 objectives. Name what is sacrificed. The T/T gate. | T/T |
| 6 | Plan Drafting — Substantive Work | First major work day on the Sustainable Neighbourhood Plan. | T/T |
| 7 | Equity & Displacement — The Perspective Planning Ignores | Informal settlements, affordability, who gets displaced. | T/T |
| 8 | Public-Piece Prep — Turning a Plan Into an Earth Week Activity | Audience + message design that *preserves* the trade-off. IG artifact + activity. | C |
| 9 | Earth Week Public Presentation | The Communication performance. Public activity + municipal-audience framing. | C |
| 10 | Unit Reflection | Self-assessment vs. success criteria; year-arc close + U7 preview. | — |

Block 9 carries the Earth Week beat — keep it block-relative, no dates (open decision §1.1). Block 10 should preview **U7 (Energy & Sustainability)** since U6→U7 is the fixed design-thread climax.

---

## 5. Assessment stub — `assessment-sustainable-neighbourhood-plan.njk`

`layout: layouts/base.njk`. Mirror the structure of `unit-5/assessment-water-stakeholders.njk` (Key dates callout → What this is → GRASPS table → formats → 8 steps → rubric + gates). For the skeleton, a **condensed** version is fine; full handout is a later phase. Capture:

- **Title:** "Sustainable Neighbourhood Plan"
- **GRASPS:** Goal — design + present a 15-minute redesign of a Chennai area balancing access / housing / green-blue / heat / flood / equity / mobility. Role — neighbourhood planner / sustainability consultant. Audience — **a real municipal body (GCC / CMDA / ward office)**, with peers at the Earth Week event. Product — the Plan (brief + map, OR map infographic, OR captioned video) + AI Documentation + Earth Week public activity/IG artifact. **Standards (final, see brief §10):** **Primary** — HS-ETS1-3 (anchor: prioritized criteria + trade-offs), HS-ETS1-1 (specify criteria/constraints), HS-ESS3-1 (hazards/climate → human activity), HS-ESS3-4 (refine solution reducing impact on natural systems). **Secondary** — HS-ESS3-3 (computational simulation — *contingent on the Land Allocation Optimizer shipping with a green-blue/ecology objective*), HS-LS2-7 (reduce impact on environment/biodiversity). **Practices:** SEP-6 (design) + SEP-5 (math/computational) spine, SEP-8 (communication) via Earth Week, SEP-2 (models), SEP-7 (argument). HS-LS2-2 / HS-LS4-5 intentionally dropped (biodiversity is in Grade 9 Biology; U6 is an elective).
- **8 steps** (from brief §6): choose area → Area Profile (K/U) → Propose Allocation (T/T) → Trade-off Analysis (T/T heart) → Implementation Recs to a municipal body (T/T) → use both AI partners → AI Documentation (K/U gate) → Earth Week public presentation (C).
- **8 urban land-use categories** (brief §3): residential / mixed-use / commercial-market / civic-services / green space / blue space / streets-mobility / existing-fabric-informal.
- **7 objectives** (brief §4): 15-min access · housing capacity · green-blue cover · heat comfort · flood resilience · equity-displacement · mobility.
- **5 gates (unchanged logic):** trade-off-naming = T/T gate (hiding caps 3-4); quantification = T/T expectation (qualitative-only caps 5-6); generic recs cap T/T 3-4; AI Documentation = K/U gate; **map/visual quality = C signal**. Add the **public-artifact guardrail**: the public piece must *show* the trade-off, not hide it.
- Link the **simulator** as TBD → `/reference/simulator-hub/`.

---

## 6. Two AI partner stubs

Model on `src/ai-partners/the-hydrologist.njk` (frontmatter: `layout: base.njk`, `title`, `tagline`, `launchUrl: ""`, breadcrumbs; body: intro → launch placeholder → Overview → Pairs with → Quick facts → system-prompt `<pre><code>` block). For the **skeleton**, stub-level depth is fine (intro + quick facts + `launchUrl: ""` placeholder); full 7-section specs are a later phase, and the partner specs already exist in `AI Partner Specifications (U4-U7 combined).docx` — re-point them from Agronomist/Ecologist to the two below at deep-build time.

1. **`urban-planner.njk` — The Urban Planner** (🏙️). The yield-analog: pushes density, housing supply, economic vitality, "intensify and build." Holds the line on the science/feasibility of urban form, not the values call. Used U6.
2. **`equity-resilience-partner.njk` — The Equity & Resilience Partner** (🌿 or 🛟). The ecology-analog: pushes green-blue space, anti-displacement, flood/heat protection, informal-settlement rights, public health. The move is to **synthesise the two partners' disagreement**, not average them. Both are "confidently wrong about quantitative claims" so the AI-Documentation gate bites.

---

## 7. Index edits

**`src/units/index.njk`** — replace the U6 card body (currently `⚡` + `Stub.`):
```html
<a class="section-card" href="/units/unit-6/">
  <span class="card-icon" aria-hidden="true">🏘️</span>
  <div class="card-title">Unit 6 — Biosphere & Land Use</div>
  <div class="card-desc">Ten blocks. The 15-minute neighbourhood. Students redesign a Chennai area across 8 urban land uses, quantify the trade-offs (access, housing, green-blue, heat, flood, equity, mobility), and present at Earth Week to a real municipal audience. The Urban Planner + Equity & Resilience AI partners introduced.</div>
</a>
```
Also update the top `.stub-note` to reflect "Unit 6 skeleton built; Unit 7 stubbed."

**`src/ai-partners/index.njk`** — in the intro `<p>`, append after the Unit 5 sentence: "**Unit 6 adds two** — the Urban Planner (urban-form + density reasoning) and the Equity & Resilience Partner (displacement, flood/heat, informal-settlement perspective)." Then add 2 `section-card`s in the appropriate grid. (Note: the Systems Diagrammer card already lists U6 in its scope — no change needed there.)

---

## 8. Acceptance check before commit

- [ ] `npm run build` exits clean; `_site/units/unit-6/` + 10 block dirs + assessment dir generated; `_site/ai-partners/urban-planner/` + `…/equity-resilience-partner/` generated.
- [ ] `/units/` U6 card no longer says "Stub."; links resolve.
- [ ] `/ai-partners/` shows the two new cards; intro line updated.
- [ ] Every block page renders the 5-section scaffold with honest placeholders; `next`/breadcrumb links chain 1→10 and resolve.
- [ ] No calendar dates hard-coded (block-relative only); no em dashes in student copy.
- [ ] EAL link (`/foundations/eal/u6/`), the-rubric, and simulator-hub links present on the landing/assessment pages.
- [ ] Commit with message in the U5 style. **Then stop — do not push.** Report back for Matthew's review and "push."

---

## 9. After the skeleton (later commits, not now)

Phase A (spine + assessment + 2 partners deep) → Phase B (urban-systems chunk + first work day) → Phase C (public-path + Earth Week close-out + U7 preview), mirroring U5's three-phase deep build. Convert the assessment stub → full handout and the 2 partner stubs → full 7-section specs (re-pointed from the U4-U7 combined docx). Resolve §1 open decisions before the relevant phase needs them (timing before the public-path phase; standards before the assessment handout; spatial unit before the simulator wires in).
