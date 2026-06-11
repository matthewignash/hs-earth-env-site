# Site Review — 2026-06-11

> Full-site audit (content consistency, technical quality, student/EAL UX) of `hs-earth-env-site` at commit `e0632c0` on branch `u2-rolling-summative`. Build verified healthy: 139 pages, 0 errors, Eleventy 3.1.5. Companion to `BUILD_PROGRESS.md` — this file is the prioritized fix list; that file is the build log.

---

## State of the repo

- Branch `u2-rolling-summative` is 1 commit ahead of `main` (the U2 rolling-summative commit). **Merge to main** — it's complete work per its own commit message.
- Untracked: `U6_BUILD_PLAN.md`. Commit or delete.
- `.gitignore`, `vercel.json`, Eleventy config, simulator embeds, JS syntax: all clean. Accessibility pass: 100% (h1s, lang, alt text, skip link).
- Link health: 3,729 links scanned, **1 broken** — see P1 below.

---

## Priority 1 — Blocking for students (do before any new unit work)

### 1.1 AI partner launch buttons are dead — 14 of 15 partners
Every partner page except one has `launchUrl: ""`, so students see "🚀 Launch — TBD: BoodleBox / Gemini Gem URL" as the button. Block pages in "fully built" units actively send students to these partners.
**Fix:** Populate real URLs for the partners used in U0–U2 (the units students hit first), or change the placeholder copy to honest student-facing language ("Ask Mr. Ignash for the partner link") until URLs exist.
**Files:** `src/ai-partners/*.njk` frontmatter.

### 1.2 Unit 7 card is a live 404
`src/units/index.njk:48` links to `/units/unit-7/`, which doesn't exist. The only broken link on the site.
**Fix:** Make the card a non-link "Coming soon" card (2-min fix), or build the U7 skeleton (already next in BUILD_PROGRESS).

### 1.3 Home page doesn't say where to start
"Current Unit" links to `/units/` (the index), not the actual current unit. No "you are here" signal anywhere.
**Fix:** Add a `currentUnit` value in `src/_data/` and render a "Right now: Unit X" banner on the home page + point the nav link at it. One data-file edit per unit transition instead of a stale hardcode.

---

## Priority 2 — Consistency debt (the planned work, confirmed)

### 2.1 Rolling-summative propagation: U4, U5, U6
Confirmed: U1 ✓ U2 ✓; U4 Climate Brief, U5 Position Paper, U6 Sustainable Neighbourhood Plan still use "Key dates" callouts with end-loaded marking. This is the single biggest pedagogical inconsistency — students learn the component-lock model in U1–U2, then it disappears.
**Fix per unit:** (a) replace Key-dates callout with rolling-summative callout + component due-date table on the assessment page; (b) reframe strand gates as per-component band caps; (c) add lock notes to the Show sections of the locking blocks. U2 commit `e0632c0` is the template for the whole edit.
**Scope:** 3 assessment pages + ~12–15 block Show sections.

### 2.2 UK → US spelling decision
"Neighbourhood" appears in 17 files (it's in the U6 assessment *title*), plus scattered `modelling`, `colour`, `behaviour`, `programme`, `finalised`, `liveable`. Matthew is American; pick one and enforce it. Renaming "Sustainable Neighbourhood Plan" → "Sustainable Neighborhood Plan" touches the assessment filename/URL, units index, block pages, AI partner pages, and EAL pages — do it as one dedicated commit before more U6-dependent content is written, or explicitly decide to keep UK spelling and note it in CLAUDE.md as house style.

### 2.3 Small fixes (one commit)
- `src/units/index.njk:35` — "Unit 4 — Climate" → "Unit 4 — Atmosphere & Climate" (only title mismatch on the site).
- U6 assessment stub-note still says "a couple of specifics are still being finalised" — tighten to name exactly what's pending (area cards, Land Allocation Optimizer, Earth Week date).
- Em-dash house style: U6 bans them in student prose, U0–U5 use them freely (flagged in BUILD_PROGRESS). Decide and note in CLAUDE.md.

---

## Priority 3 — Student/EAL experience gaps

### 3.1 EAL support is siloed
The EAL layer is strong (140 terms, 5 languages, per-unit pre-teach pages incl. U7) but only reachable via Foundations. Block and unit pages never link to it.
**Fix:** Add an EAL banner/card to each unit landing page linking that unit's pre-teach + master vocabulary. 7 small edits.

### 3.2 Reference layer is skeletal
Glossary: 1 entry live, 9 "coming soon." Case studies: 1 of 9. Meanwhile the U2 rubric names *geomorphology, alluvium, fluvial, aeolian, regolith, denudation* with no definitions anywhere on the site.
**Fix:** Write the ~15–20 glossary entries for terms that appear in live rubrics first (U2's six terms are the worst offenders); case studies can wait for U3 teaching.

### 3.3 Student Hub stubs
Calendar and Choice Board Templates are "coming soon." The calendar matters most — no single page shows the year's shape. A simple per-unit week-range table is enough for v1.

### 3.4 Assessment-page jargon
Rolling-summative pages are well-structured, but: "locks" is used before it's defined (move the definition to first use), GRASPS is never expanded, and rubric technical terms should link to glossary entries once 3.2 exists.

### 3.5 Concepts-section placeholders
264 placeholder markers across unit blocks, concentrated in Concepts entry-cards (videos/readings). Some "fully built" blocks have 3 of 3 entry points as placeholders (e.g., U0 B1, U2 B1). MEDIA_REVIEW.md presumably tracks this — reconcile that list against blocks students hit in the first 6 weeks (U0–U1) and fill those first.

---

## Priority 4 — Technical housekeeping (low urgency)

- Breadcrumb markup duplicated in `base.njk` and `block-page.njk` — extract one include.
- 14 AI partner pages repeat the same inline-style div — replace with a class.
- AI partner pages share heavy boilerplate — consider a `partner.njk` layout when building U7's partners.
- 3 unused CSS vars in the simulator stylesheet (harmless).

---

## Suggested sequence

| # | Work | Size |
|---|------|------|
| 1 | Merge `u2-rolling-summative` → main; commit/remove `U6_BUILD_PLAN.md` | minutes |
| 2 | Quick-fix commit: unit-7 card, U4 title, U6 stub-note, breadcrumb include | <1 hr |
| 3 | Spelling decision + (if US) the neighbourhood rename commit | 1–2 hrs |
| 4 | AI partner URLs for U0–U2 partners (or honest placeholder copy) | depends on BoodleBox/Gems status |
| 5 | `currentUnit` banner + EAL links on unit landings | 1–2 hrs |
| 6 | Rolling-summative propagation: U4 → U5 → U6 (one commit each, U2 as template) | 1 session each |
| 7 | Glossary: rubric-term entries (U2's six first) | 1 session |
| 8 | Student Hub calendar v1 | 1 session |
| 9 | U7 skeleton (already planned next in BUILD_PROGRESS) | per existing plan |
| 10 | Media placeholder fill for U0–U1 Concepts cards | ongoing |

Items 1–5 are a "make what exists honest" pass — worth finishing before U7, since U7 will clone current patterns including their flaws.

---

## What's already good (don't touch)

Strand naming (K/U, T/T, C) is perfectly consistent site-wide. Block counts match landing-page claims in every unit. Standards are confirmed and consistent on all assessment pages. Show sections are unusually clear about deliverables. Choice boards are well-differentiated with UDL tags. Accessibility basics are fully in place. The build/deploy pipeline is clean.
