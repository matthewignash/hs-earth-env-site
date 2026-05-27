# Build Progress — `hs-earth-env-site`

> **Purpose:** Living status doc. Tells you (and future Claude Code sessions) what's built, what's stubbed, what to build next, and in what order. The charter is in `CLAUDE.md` — do NOT modify that. Update this file at the end of each build session.

**Last updated:** 2026-05-25 (Unit 5 skeleton — 13 new pages + 2 new AI partners + trial-aware framing)

---

## TL;DR — pick up here

**Unit 5 (Hydrosphere — Water, Stakeholders, and Position) is now navigable as a skeleton.** U5 is also Matthew's trial unit — three pedagogical arms (Section A BoodleBox bot-building / Section B Flint guided-tutor / Section C paper-based) running concurrently. The landing prose makes that trial-aware framing explicit.

**What shipped this phase:**
- `src/units/unit-5/index.njk` — full landing (9-block grid, Water Stakeholders + Position Paper assessment card, AI partners panel with 2 new partners + Source Evaluator + Skeptic, Resources panel with U5 EAL Pre-Teach). Includes trial-aware prose (three arms explained) + political-charge UDL prose (Cauvery is local + charged; 7 alternative cases offer distance).
- `src/units/unit-5/block-1.njk` through `block-9.njk` — 9 one-paragraph stubs covering UbD-canonical structure: Water Cycle + Reservoirs · Watersheds + Water Budgets · Groundwater + Aquifers · Water Quality + Pollution · Water Rights + Stakeholders Map Assigned · Case Deep Dive · Counter-Argument + Stakeholder Voice AI · Drafting + Roundtable Rehearsal · Stakeholder Roundtable + Unit Close.
- `src/units/unit-5/assessment-water-stakeholders.njk` — stub with GRASPS frame, 8 water-rights cases table (Cauvery / Indus / Colorado / Nile / Mekong / Aral / Cooum / Bangalore), trial-aware callout, three deliverable formats (Position Paper 2pp or 4-min video; Stakeholders Map visual + 1pp narrative; Roundtable live or async), required components, 4 scoring gates explicitly named (voice-match T/T gate, stakeholder specificity K/U gate, AI Doc K/U gate, negotiation move C signal), Boodle Build callout for Section A.

**New under src/ai-partners/:**
- `the-hydrologist.njk` — NEW AI partner stub (water systems + case-specific hydrology; Blocks 1-9).
- `stakeholder-voice.njk` — NEW AI partner stub (perspective-taking role-play; Blocks 7-9). **U5's signature partner** — Section A students *build* their own version via the Boodle Build Assignment.

**Modified:**
- `src/ai-partners/index.njk` — 2 new cards added (now 12 partners total)
- `src/units/index.njk` — U5 card-desc refreshed; stub-note refreshed to reflect U5's new skeleton-navigable state + trial-unit framing

Site goes from 112 → 125 generated files (+13).

After this phase, **U0 / U1 / U2 / U3 / U4 fully complete · U5 skeleton-navigable · U6 / U7 still landing-card-only**. 12 AI partner pages total (5 deep + 7 at pre-deep-build stub depth).

**Pedagogical move that's unique to U5**: perspective-taking as the year's T/T centerpiece. Carries forward to U6 (Land Use multi-stakeholder planning) + U7 (Energy mix stakeholder tensions). The Stakeholder Voice AI partner is the year's first "students build their own AI" move (Section A Boodle Build Assignment).

---

## Previous TL;DR — U0 → U1 anchor-article bridge (kept for reference)

**U0 Blocks 2 + 3 + U1 Block 1 + U0 Block 7 now reference a single shared "U0 Anchor Article" placeholder.** Structural refactor only — the actual article is still TBD, waiting on Matthew's collaboration with the AISC librarian (tracked in `MEDIA_REVIEW.md`). When the librarian provides a specific article, a follow-up commit does text replacement only — no structural changes needed.

**What shipped this phase:**
- `src/units/unit-0/block-2.njk` — Concepts + Do + Show + Story refactored to explicitly anchor to the U0 Anchor Article. The block's choice board now defaults to OPVL'ing the anchor article (with student-found-article alternative for Path C).
- `src/units/unit-0/block-3.njk` — Concepts + Do + Show + Story refactored to use AI summary of the same anchor article. The day's central move is now the side-by-side comparison: Block 2's anchor-article OPVL vs. Block 3's AI-summary OPVL of the same content.
- `src/units/unit-1/block-1.njk` — Carry-forward paragraph added to Story (explicitly naming the U0 anchor article + the OPVL muscle continuity) + a "Carry-forward from U0" Concepts entry card.
- `src/units/unit-0/block-7.njk` — One sentence added to the existing Unit 1 preview section referencing the anchor article as a continuing source.
- `MEDIA_REVIEW.md` — New "U0 Anchor Article specification" entry under librarian-collaboration pending, with criteria (habitability-relevant, freely accessible, AI-knowable, EAL-accessible, good OPVL practice piece, length-appropriate) + AI summary prep notes for Block 3.

Site stays at 112 generated files (no new files; content updates only).

**Why this refactor**: Unit 0 does substantial pedagogical work (OPVL + AI Doc Protocol + the Source Dossier) but U1 currently makes the OPVL framework appear out of thin air — no callback to a specific U0 source. The shared-anchor-article move lands three things: (1) side-by-side OPVL across source types in U0 Blocks 2 + 3, (2) sources-don't-die-after-one-assessment continuity, (3) U1 starts with familiar evidence (EAL win + confidence boost). Builds the "OPVL outputs feed forward" intuition that's central to every later unit assessment.

**Follow-up phase ahead**: When the librarian lands a specific article, ~30-min text-replacement commit fills the placeholder string across the 4 files.

---

## Previous TL;DR — U4 Phase C close-out (kept for reference)

**Unit 4 is now fully complete.** Phase C deepened the final 5 stubs (Block 7 Regional Climate + Lock Challenge, Block 8 Tipping Points + Feedbacks, Block 9 Adaptation vs. Mitigation, Block 11 Final Drafting + Panel Rehearsal, Block 12 Policy Panel + Unit Close) to full 5-section content matching the rest of U4. Block 12 includes a Unit 5 preview / connect-forward block at the bottom, mirroring the U0 Block 7 / U2 Block 9 close-out pattern.

After this commit, **U0 + U1 + U2 + U3 + U4 are all fully complete** — 50 deep blocks total across the five built units, 5 full assessments, 10 AI partner pages (5 at deep 7-section spec depth: Field Geologist, Planet Hunter, Systems Diagrammer, Climate Modeler, Policy Aide; 5 still at pre-deep-build stub depth: Skeptic, Source Evaluator, Plate Tectonics Tutor, Engineering Coach, Defense Practice Partner), the full EAL hub (11 pages), and the full Foundations layer (10 pages). The units/index landing's build-status note now reads "Unit 0 / 1 / 2 / 3 / 4 fully complete."

Site stays at 112 generated files (no new files; content updates only).

**What's left in the year-map**: Units 5–7 are still landing-card-only with no folders. Plus 5 of the 10 AI partner stubs (Skeptic, Source Evaluator, Plate Tectonics Tutor, Engineering Coach, Defense Practice Partner) are still at pre-deep-build depth.

---

## Previous TL;DR — U4 Phase B (kept for reference)

**Unit 4 has 7 of 12 blocks deep.** Phase B deepened the science chunk: Block 2 (Energy Balance Math), Block 3 (Carbon Cycle), Block 4 (Human Acceleration + Warming Signal), Block 6 (Climate Models). Together with Phase A's spine (Blocks 1, 5, 10), this means ~58% of U4 is now teaching-ready. Only the application + workflow blocks remain — Blocks 7 (Regional Climate + Lock Challenge), 8 (Tipping Points + Feedbacks), 9 (Adaptation vs. Mitigation), 11 (Final Drafting + Panel Rehearsal), 12 (Policy Panel + Submit) — for Phase C.

**What shipped this phase:**
- `src/units/unit-4/block-2.njk` — Energy Balance Math — stub → full 5-section deep block (~120 lines). Quantitative version of Block 1, anchored in the Habitability Zone Calculator cross-reference.
- `src/units/unit-4/block-3.njk` — The Carbon Cycle — stub → full 5-section deep block (~120 lines). Fast vs. slow pathways, 4-reservoir flow-diagram modelling activity.
- `src/units/unit-4/block-4.njk` — Human Acceleration + Warming Signal — stub → full 5-section deep block (~130 lines). Adds anthropogenic perturbations to Block 3's model + Keeling curve + IPCC AR6 attribution evidence.
- `src/units/unit-4/block-6.njk` — Climate Models — stub → full 5-section deep block (~125 lines). GCM/RCM distinction + parametrisation + IPCC figure decoding + projection-vs-prediction.

Site stays at 112 generated files (no new files; content updates only).

**Phase C** still ahead — will deepen Blocks 7, 8, 9, 11, 12 (the application + workflow chunk). After Phase C, U4 is fully complete.

---

## Previous TL;DR — U4 Phase A spine (kept for reference)

**Unit 4 has a teaching-ready spine.** Phase A mirrored U2 Phase A: deep-built the 3 highest-leverage blocks (Block 1 Greenhouse Effect, Block 5 IPCC + Brief Assigned, Block 10 Worked-Example Brief + Peer Feedback), converted the Chennai Climate Brief assessment stub to a full handout, and converted the Climate Modeler + Policy Aide stubs to full 7-section specs.

**What shipped this phase:**
- `src/units/unit-4/block-1.njk` — Greenhouse Effect — stub → full 5-section deep block (~115 lines). Agency-mode framing + 2015 floods / 2019 Day Zero anchor + energy-balance diagram activity + Chennai-amplification exit ticket.
- `src/units/unit-4/block-5.njk` — IPCC + Brief Assigned — stub → full 5-section deep block (~125 lines). IPCC structure + SSP scenarios + confidence-level language + whole-class OPVL on AR6 figure + assessment kickoff + 8 challenges released.
- `src/units/unit-4/block-10.njk` — Brief Work Day + Worked Example — stub → full 5-section deep block (~130 lines). Heat Mortality worked-example demo (the highest-leverage teacher move) + Policy Aide voice-coaching + structured peer feedback on the 3 rubric gates.
- `src/units/unit-4/assessment-chennai-climate-brief.njk` — stub → full handout (~210 lines). GRASPS table, 8-challenges table, 5-section Brief structure, K/U / T/T / C rubric across 4 bands, 3 gates explicitly named (recommendations specificity T/T, policy voice C, AI Doc K/U), grade weighting.
- `src/ai-partners/climate-modeler.njk` — stub → full 7-section spec (~145 lines). Overview, Pairs with, Quick facts, copy-paste system prompt, Opening message, Example exchange (IPCC AR6 figure interpretation), Failure mode + Recovery, Documentation reminder.
- `src/ai-partners/policy-aide.njk` — stub → full 7-section spec (~150 lines). Overview (voice coaching + Panel role-play), Pairs with (Climate Modeler + Defense Practice Partner), Quick facts, copy-paste system prompt, Opening message, Example exchange (academic-essay → policy-brief voice revision), Failure mode + Recovery, Documentation reminder.

Site stays at 112 generated files (no new files; content updates only).

**Phases B + C** still ahead — will deepen Blocks 2, 3, 4, 6 (the science chunk) and 7, 8, 9, 11, 12 (the application + workflow blocks). After both, U4 is fully complete.

---

## Previous TL;DR — Unit 4 skeleton (kept for reference)

**Unit 4 (Atmosphere & Climate) is now navigable as a skeleton.** Mirrors the U2 skeleton-first pattern: full landing + 12 block stubs + Chennai Climate Brief assessment stub + 2 new AI partner stubs (Climate Modeler + Policy Aide). Deep block content lands in future phases.

**What shipped this phase:**
- `src/units/unit-4/index.njk` — full landing (12-block grid, assessment card, AI partners panel with the 2 new partners + Source Evaluator + Skeptic, Resources panel with EAL Pre-Teach card). Includes explicit emotional-framing prose addressing climate-anxiety (agency mode, trauma-aware option-out for personally-affected students).
- `src/units/unit-4/block-1.njk` through `block-12.njk` — 12 one-paragraph stubs covering the UbD-canonical 12-block process-organized structure (Greenhouse Effect · Energy Balance Math · Carbon Cycle · Human Acceleration + Warming Signal · IPCC + Brief Assigned · Climate Models · Regional Climate + Lock Challenge · Tipping Points + Feedbacks · Adaptation vs. Mitigation · Brief Work Day + Peer Feedback · Final Drafting + Panel Rehearsal · Policy Panel Q&A)
- `src/units/unit-4/assessment-chennai-climate-brief.njk` — stub with GRASPS frame, 8-adaptation-challenges table (Monsoon + flooding · Sea-level rise · Urban heat · Water security · Coastal erosion · Public health · Agriculture · Mangroves), 3 deliverable format choices (≤4-page written / ≤6-min video / large infographic), required components, 3 gates named (T/T recommendations specificity, C policy voice, K/U AI Doc).

**New under src/ai-partners/:**
- `climate-modeler.njk` — NEW AI partner stub (IPCC AR6 + climate model reasoning; Blocks 5-11)
- `policy-aide.njk` — NEW AI partner stub (policy-brief voice coaching + Policy Panel role-play; Blocks 9-12)
- `ai-partners/index.njk` — 2 new cards added (now 10 partners total)

**Modified:**
- `src/units/index.njk` — Unit 4 card-desc refreshed; stub-note refreshed to reflect U4's new skeleton-navigable state

Site goes from 96 → 112 generated files (+16 new).

After this phase, **U0 / U1 / U2 / U3 fully complete · U4 skeleton-navigable · U5 / U6 / U7 still landing-card-only**. 10 AI partner pages total (3 at full 7-section spec depth — Field Geologist + Planet Hunter + Systems Diagrammer; 7 still at pre-deep-build stub depth).

---

## Previous TL;DR — U2 Phase C close-out (kept for reference)

**Unit 2 is now fully complete.** Phase C deepened the final 3 stubs (Block 6 — Map Analysis Work Day, Block 8 — Drafting + Peer Feedback, Block 9 — Share-Out + Unit Close) to full 5-section content matching the rest of U2. Block 9 includes a small Unit 3 preview / connect-forward block at the bottom, mirroring the U0 Block 7 close-out pattern.

After this commit, **U0 + U1 + U2 + U3 are all fully complete** — 38 deep blocks total across the four units, 4 full assessments, 9 AI partner pages (3 of them at deep 7-section spec depth, 5 still at stub depth from earlier phases), the full EAL hub (11 pages), and the full Foundations layer (10 pages). The units/index landing's build-status note now reads "Unit 2 is fully complete" alongside U0, U1, and U3.

Site stays at 96 generated files (no new files; content updates only).

**What's left in the year-map**: Units 4–7 are still landing-card-only with no folders. Plus 5 of the 8 AI partner stubs (Skeptic, Source Evaluator, Plate Tectonics Tutor, Engineering Coach, Defense Practice Partner) are still at pre-deep-build depth — they have working launch placeholders + scope blurbs but not the full 7-section spec yet.

---

## Previous TL;DR — U2 Phase B (kept for reference)

**Unit 2 has 6 of 9 blocks deep.** Phase B deepened the concept-building chunk: Block 2 (Erosion), Block 3 (Rivers as Landscape Sculptors), and Block 4 (Coasts). Together with Phase A's spine (Blocks 1, 5, 7), this means 2/3 of U2 is now teaching-ready. Only the workflow chunk remains — Blocks 6 (Map Analysis Work Day), 8 (Drafting + Peer Feedback), and 9 (Share-Out + Unit Close) — which Phase C will deepen.

**What shipped this phase:**
- `src/units/unit-2/block-2.njk` — Erosion — stub → full 5-section deep block (~115 lines). Four erosion agents + Marina Beach satellite-sequence worked example.
- `src/units/unit-2/block-3.njk` — Rivers as Landscape Sculptors — stub → full 5-section deep block (~115 lines). River vocabulary + Cooum/Adyar case study + three-sources OPVL practice (government / news / AI).
- `src/units/unit-2/block-4.njk` — Coasts — stub → full 5-section deep block (~115 lines). Coastal processes + Marina vs. Mahabalipuram contrast (fast-time vs. deep-time coastal reading).

Site stays at 96 generated files (no new files; content updates only).

**Phase C** still ahead — will deepen Blocks 6 (Map Analysis), 8 (Drafting + Peer Feedback), and 9 (Share-Out + Unit Close). After Phase C, Unit 2 is fully complete.

---

## Previous TL;DR — Unit 2 Phase A spine (kept for reference)

**Unit 2 has a teaching-ready spine.** Three highest-leverage blocks now deep (1, 5, 7), the Landscape Reading assessment is a full handout, and the Field Geologist is a full 7-section AI partner spec. All 9 U2 block titles also realigned from the previous Block-Plans-organized structure to the UbD-canonical process-organized structure (weathering → erosion → rivers → coasts → tropical/Chennai → map analysis → worked example → drafting + peer feedback → share-out).

**What shipped this phase:**
- `src/units/unit-2/block-1.njk` — Weathering — full 5-section deep block (~135 lines)
- `src/units/unit-2/block-2.njk` — Erosion — realigned stub
- `src/units/unit-2/block-3.njk` — Rivers as Landscape Sculptors — realigned stub
- `src/units/unit-2/block-4.njk` — Coasts — realigned stub
- `src/units/unit-2/block-5.njk` — Tropical Landscapes + Chennai Context + Landscape Reading Assigned — full 5-section deep block (~140 lines, assessment kickoff)
- `src/units/unit-2/block-6.njk` — Field Photo / Map Analysis Work Day — realigned stub
- `src/units/unit-2/block-7.njk` — Reading the Landscape: Worked Example + OPVL — full 5-section deep block (~140 lines, highest-leverage teacher move)
- `src/units/unit-2/block-8.njk` — Landscape Reading Drafting + Peer Feedback — realigned stub
- `src/units/unit-2/block-9.njk` — Landscape Readings Submitted + Class Share-out — realigned stub
- `src/units/unit-2/index.njk` — 9 card-descs rewritten to UbD-aligned titles + descriptions
- `src/units/unit-2/assessment-landscape-reading.njk` — stub → full handout (~210 lines: GRASPS + 8-step walkthrough + 4-band rubric across K/U / T/T / C + 3 gates)
- `src/ai-partners/field-geologist.njk` — stub → full 7-section spec (~160 lines: Overview / Pairs with / Quick facts / System prompt copy-paste / Opening message / Example exchange / Failure mode / Documentation reminder)

Site stays at 96 generated files (no new files; content updates only).

**Phases B + C** still ahead — Phase B will deepen Blocks 2, 3, 4 (Erosion / Rivers / Coasts — the concept-building chunk); Phase C will deepen Blocks 6, 8, 9 (Map analysis / Drafting + peer feedback / Share-out + reflection).

---

## Previous TL;DR — Unit 2 skeleton (kept for reference)

**Unit 2 (Surface Processes — Reading the Landscape) is now navigable as a skeleton.** Mirrors the way Unit 1 was first built — landing + 9 block stubs + assessment stub + 1 new AI partner stub. Deep block content lands in a future phase.

**What shipped this phase:**
- `src/units/unit-2/index.njk` — full landing (9-block grid + assessment card + AI partners panel + Resources panel)
- `src/units/unit-2/block-1.njk` through `block-9.njk` — 9 one-paragraph stubs (Phenomenon Launch · Surface Trio · Stratigraphy + Geologic Time · Watershed + Monsoon · Location Cards + Field Photo · Biography Drafting · Field Geologist AI · Share-Out Prep · Share-Out + Unit Close)
- `src/units/unit-2/assessment-landscape-reading.njk` — stub with GRASPS frame, 9-location table, 3 deliverable formats, required components, AI Doc rules
- `src/ai-partners/field-geologist.njk` — NEW AI partner stub (helps interpret field photos / maps / satellite imagery; primarily Blocks 6 + 7)
- `src/ai-partners/index.njk` — added Field Geologist card (now 8 partners)
- `src/units/index.njk` — U2 title fixed to "Surface Processes" (was stale "Weather & Climate"), card-desc refreshed; also fixed stale titles for U4 ("Climate"), U5 ("Hydrosphere"), U6 ("Biosphere & Land Use"), U7 ("Energy & Sustainability"); stub-note refreshed
- `BUILD_PROGRESS.md` — this update

Site goes from 84 → 96 generated files (+12).

After this phase, **U0 + U1 fully built · U2 skeleton-navigable · U3 fully built · U4–U7 landing-card-only**. The site has accurate titles for every unit. Unit 2 EAL Pre-Teach (already shipped) is wired into the U2 Resources panel.

---

## Previous TL;DR — U0 deep build (kept for reference)

**Unit 0 is now fully complete.** Blocks 4–7 were genuine stubs (~27 lines each, single section). The prior phase built them out to the same depth as Blocks 1–3 (~115–135 lines each, full 5-section template). Concurrently, two stale "Stub." prefixes on the Unit 1 landing for Blocks 1 and 2 were dropped — both block files had been fully built but the landing card-descs still flagged them as stubs.

**What shipped this phase:**
- `src/units/unit-0/block-4.njk` — Source Dossier Work Day 1: Topic + Two Traditional Sources (full)
- `src/units/unit-0/block-5.njk` — Source Dossier Work Day 2: AI Source + Documentation (full)
- `src/units/unit-0/block-6.njk` — Source Dossier Due + Defense Rehearsal (full)
- `src/units/unit-0/block-7.njk` — Defenses + Unit Close (full, includes Unit 1 preview block)
- `src/units/unit-0/index.njk` — 4 "Stub." prefixes dropped, card-descs rewritten
- `src/units/unit-1/index.njk` — 2 "Stub." prefixes dropped (Blocks 1 + 2)

Site stays at 84 generated files (no new files; content fill-in only).

After this phase, **U0 + U1 + U3 are all at "deeply built" state** — every block has full 5-section content, every landing card-desc accurately reflects the file behind it. No false "stub" labels anywhere in U0 or U1.

---

## Previous TL;DR — EAL hub (kept for reference)

**The EAL hub is now live.** Matthew wrote ~150KB of EAL Support documents (10 docx files via Claude Cowork). The site previously *mentioned* "EAL Teacher Strategy Guide" in 5 places with no link to follow. This phase closed all those gaps:
- **11 new pages under `/foundations/eal/`**:
  - `/foundations/eal/` — the hub (For Students / AI as EAL tool / For Families / For Teachers)
  - `/foundations/eal/teacher-guide/` — full 8-section Teacher Strategy Guide with teacher-facing banner
  - `/foundations/eal/vocabulary/` — Master Vocabulary Reference with ~140 terms across 8 units, 5-language translations (Tamil / Hindi / French / Korean / Japanese), AI-assisted-translation disclaimer
  - `/foundations/eal/u0/` through `/foundations/eal/u7/` — 8 per-unit Pre-Teach handouts (15–17 terms each, with sentence stems, in-class activity, paired discussion prompt, and a link back to the multilingual reference)
- **6 integration updates** wire the EAL hub into the rest of the site:
  - `foundations/index.njk` — new EAL Support section
  - `foundations/for-parents.njk` — dead-end "EAL Teacher Strategy Guide" string now linked
  - `foundations/defending-your-work.njk` §8 + `foundations/notetaking.njk` §7 — "More EAL support →" links at the end of each EAL-relevant section
  - `units/unit-0/index.njk`, `units/unit-1/index.njk`, `units/unit-3/index.njk` — EAL Pre-Teach cards in the Resources panel

**Previous state (still current):** Foundations layer fully built (Welcome, Class Expectations 7-section, The Rubric 10-section, Notetaking, Defending Your Work, Peer Review, For Parents). Unit 1 fully complete with all 10 blocks + Goldilocks Report + 2 new AI partners. Habitability Zone Calculator integrated. Unit 0 + Unit 3 also fully built.

**Next-phase candidates:**
- Apply the AI Partner Deployment Plan (root-level docx) to existing AI partner pages — adds platform decisions (BoodleBox / NotebookLM / Gemini Gems / Flint) to launchUrl placeholders.
- Unit 2 (Surface Processes) skeleton. Add `/foundations/eal/u2/` card to Resources panel during build.
- Unit 5 (Hydrosphere) skeleton + trial-aware build — U5 is the trial unit. Add `/foundations/eal/u5/` card to Resources panel during build.
- U4 / U6 / U7 skeletons — add EAL Pre-Teach cards to Resources panel during each build.
- Another simulator brief (Cauvery / Land Allocation / Energy Mix all at v0-charter-only state).

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

### Unit 1 — Earth and Universe (complete: landing + 10 blocks + assessment)
- `units/unit-1/index.njk` — full landing (anchor question, 10-block grid with real card descriptions, Goldilocks Report card, AI partners + resources panels)
- `units/unit-1/block-1.njk` (Phenomenon Launch) — full content; whole-class See/Guess/Need-to-know Do sequence
- `units/unit-1/block-2.njk` (Earth as Baseline) — full content; 3-path choice for first systems diagram; Systems Diagrammer introduced
- `units/unit-1/block-3.njk` (Mars as Calibration) — full content; inline Earth/Mars data table; causal-chain story
- `units/unit-1/block-4.njk` (Scale of the Cosmos) — full content; inline HZ table for 9 stars; Goldilocks Report assigned today
- `units/unit-1/block-5.njk` (Exoplanet Detection) — full content; 3-sentence transit definition callout
- `units/unit-1/block-6.njk` (Choose Your Exoplanet) — full content; inline 8-candidate table; Planet Hunter introduced
- `units/unit-1/block-7.njk` (Habitability Framework) — full content; 3-path choice (Solo / Pair-jigsaw / AI-coached); framework template feeds Block 8 draft
- `units/unit-1/block-8.njk` (Drafting Day) — full content; Kepler-22 b worked-example "Honest reading" quoted; AI gate flagged
- `units/unit-1/block-9.njk` (Stakeholder Q&A Prep) — full content; structured 3-phase rehearsal day; Defense Practice Partner introduced
- `units/unit-1/block-10.njk` (NASA Committee Defense) — full content; structured 4-phase Do with 6-category Q&A bank inline; unit reflection bookends Block 1
- `units/unit-1/assessment-goldilocks-report.njk` — full handout (GRASPS, 8-exoplanet table, 4 steps, two gates callout, format options, K/U+T/T+C rubric tables, AI Documentation pointer)
- `units/unit-1/habitability-zone-calculator.njk` — **launcher page** for the iframed Habitability Zone Calculator simulator; supports `?preset=` and `?compare=` URL passthrough to the iframe; linked from Blocks 4 / 6 / 7 / 8 and the Unit 1 landing

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
