# Build Progress — `hs-earth-env-site`

> **Purpose:** Living status doc. Tells you (and future Claude Code sessions) what's built, what's stubbed, what to build next, and in what order. The charter is in `CLAUDE.md` — do NOT modify that. Update this file at the end of each build session.

**Last updated:** 2026-07-07 (session handoff — see below. U0–U6 complete; U7 is next.)

---

## SESSION HANDOFF — 2026-07-07 (read this first)

Repo state: **clean, fully pushed and deployed.** `git status` shows only an untracked `.deltest` (ignore/harmless). `main` and `origin/main` are in sync (0/0 ahead-behind). Live site is current with `main` at every point below — each commit was pushed and spot-checked live on Vercel (`https://hs-earth-env-site.vercel.app`) before moving to the next task.

**What shipped since the 2026-06-11 entry (still below, kept for history), newest first:**

1. **Units page cleanup** (`226b73a`, `c3b2d40`) — removed the developer-facing "Build status" callout and matching leftover language from Unit 1's card; renamed the "Current Unit" nav item (top nav, footer, home card, 404 card, How-to-use-this-site page) to **"Course Units"** since it links to `/units/` which lists all eight units, not just the current one. Reason: this page is shared with students/parents/teachers and shouldn't carry internal build metadata or a misleading label.
2. **Platform accuracy + system-prompt removal** (`b3663da`) — `foundations/for-parents.njk`'s AI paragraph now describes the real model (one school-approved platform per section: 2× Flint, 1× BoodleBox; named partners are characters inside that single platform). Seven partner pages (climate-modeler, policy-aide, stakeholder-voice, the-hydrologist, urban-planner, equity-resilience-partner, field-geologist) had their internal "System prompt (copy-paste-ready)" sections **removed from the site** and **extracted verbatim to `../partner-system-prompts-extracted.md`** (course folder, NOT in src/ — teacher-side only, source of truth until merged into spec docx files). Pages restructured to match the U1 partner-page pattern (see `ai-partners/planet-hunter.njk` as reference: intro → dual launch buttons → How to use this partner → Opening message → Example exchange table → Watch out for → documentation blockquote). The Resources Library (`reference/library.njk`) is the ONE place still allowed to name NotebookLM/Gemini Gems/"System prompt" — it's a reviewed OPVL-tagged catalog, not a platform claim; it has one clarifying sentence pointing students back to their section's actual platform.
3. **EAL tap-to-define key terms** (`c67ef4e`) — new site-wide component: bolded key terms on the U1 readings are tappable, opening an in-place panel (definition + sentence stem + link to the exact term in the 5-language vocabulary reference) instead of sending the reader away. Data lives in `src/_data/ealTerms.js`; partial is `partials/key-terms.njk`; 113 anchor ids were added across `foundations/eal/vocabulary.njk` (all units) to support the deep-linking. **This is now the site convention for vocabulary — apply the same pattern when other units/pages get key terms.**
4. **U1 Readings + Resources Library** (`949415f`) — four full reading pages (`reading-how-far-is-far`, `reading-four-spheres`, `reading-mars-lost-air`, `reading-watching-shadows`) giving the Watch/Read choice real content parity in U1 Blocks 1–5, plus `reference/library.njk`, a 97-entry OPVL-tagged curated source/tool library converted from the docx `Resources Library (Earth & Env, with OPVL tags).docx`. Cross-linked from the readings' Sources sections.
5. **U0/U1 exemplar pages + U0 defense kit** (`aefe935`, `f9eb4ee`, `fa82b69`) — `units/unit-0/exemplar-source-dossier.njk` (annotated worked example) and `units/unit-1/exemplar-goldilocks.njk` (Goldilocks Report exemplar), plus the 5-move answer pattern + strong/weak pair added to `foundations/defending-your-work.njk` from the U0 defense kit docx.

**Open loose ends for the next session:**
- **U7 (Energy & Sustainability)** is still not built — no folder yet, landing card says "Coming soon." This is the next big build when picked back up (see "Next" line further down for the sourced docx set).
- **`partner-system-prompts-extracted.md`** (course folder, sibling to `hs-earth-env-site/`) holds the 7 extracted system prompts — these still need to be merged into the permanent partner spec docx files at some point; right now they only live in that one extraction file + Matthew's memory of the original docs.
- Four **U1 Watch-card slots (Blocks 6–9)** are still pending teacher-recorded video (placeholders remain, on purpose).
- The **U0 defense model-exchange video** (script lives in the defense kit docx) hasn't been filmed/linked yet — B6/B7 Watch cards are waiting on that recording.
- If asked to touch AI-partner pages again, use the **planet-hunter.njk / systems-diagrammer.njk pattern** (dual launch buttons via `partials/partner-launch.njk`, no system prompts on the page, no emojis — site convention).
- **Site conventions established this era, apply going forward:** no emojis anywhere (typographic labels only — see the de-emoji BUILD_PROGRESS entry below for the full rationale); one AI platform per class section (Flint ×2, BoodleBox ×1) — never describe multiple named AI *products* as available to a single class; EAL key-terms component for any new key vocabulary; dual Flint/BoodleBox launch buttons on any new/edited partner page.

---

## TL;DR — pick up here (previous entry, 2026-06-11)

**SITE CONVENTION (2026-06-11): no emojis anywhere in student-facing pages.** The site uses typographic labels instead — uppercase small-caps kickers (section tags, submission/AI labels), left-border callouts whose titles carry meaning in words, entry cards led by their bold title. Emojis read as AI-generated and screen readers announce them ("pushpin", "warning sign"). Do NOT reintroduce them in new blocks/units. Typographic symbols are fine: → ← ✕ · ≠ − ×. Exception (tracked follow-up): the three simulator apps under `src/assets/simulators/` still use in-game emoji icons — they're standalone artifacts synced from the simulator projects; de-emoji them at the source project if desired.

**Platform accuracy + system prompts off student pages (2026-06-13)** — Two fixes.
1. `foundations/for-parents.njk`: the AI paragraph now states the one-platform-per-section model (two sections Flint, one BoodleBox; named partners are characters inside the single platform; teacher visibility; deliberate anti-tool-sprawl choice). "Not banned / not optional" framing kept verbatim. No pilot mention (consent materials own that).
2. Seven partner pages (climate-modeler, policy-aide, stakeholder-voice, the-hydrologist, urban-planner, equity-resilience-partner, field-geologist): **system prompts extracted verbatim to `../partner-system-prompts-extracted.md` (teacher-side source of truth until merged into the spec docx files), then removed from the pages**, along with teacher setup text. Pages restructured to the U1 partner pattern (intro · launch buttons · how-to-use + 2 starter prompts · opening message · exchange table · watch out for · documentation blockquote). Stakeholder Voice keeps a one-line section-scaffold note (build-your-own / pre-built / paper pack) + Boodle Build doc pointer.
**Grep status:** "copy-paste-ready" zero; "Gemini Gem"/"NotebookLM" zero outside `reference/library.njk` (Matthew's ruling: library catalog entries stay verbatim — reference shelf, not platform claim — with one clarifying sentence added to the AI-tools section intro about the section-assigned platform). "System prompt" also survives only inside the library's Claude Projects catalog entry (same exempt-verbatim territory, extended by the same ruling). MEDIA_REVIEW.md / BUILD_PROGRESS.md verified not published to _site.

**EAL tap-to-define key terms (2026-06-11) — SITE CONVENTION for key vocabulary going forward.** Tapping a key term opens an in-place panel: plain-English definition + "Try it:" sentence stem + "In your language →" (exact-anchor into the 5-language vocabulary reference) + "Full word list →". No JS → the term is a plain link to the unit's EAL pre-teach page. Pieces: `src/_data/ealTerms.js` (15 U1 list terms verbatim from the EAL table + 9 reading-defined terms — geosphere, hydrosphere, biosphere, positive/negative feedback, solar wind, depth, timing, transmission spectroscopy); `partials/key-terms.njk` (data blob + delegated handler; include once per page); `.key-term` / `.key-term-panel` CSS in styles.css; **113 per-term anchor ids added to `foundations/eal/vocabulary.njk` (all units — usable from anywhere)**. First surface: the four U1 reading pages (15 term instances). To adopt on any page: mark terms `<a class="key-term" href="/foundations/eal/uN/" data-term="slug" aria-expanded="false">`, add the term to ealTerms.js if new, include the partial. Block pages + other units = later pass.

**U1 readings + Resources Library (2026-06-11)** — five new pages.
- **Four U1 readings** (verbatim from `Unit 1_ Earth and Universe/U1 Readings — Four On-Site Explainers (draft).md`): `reading-how-far-is-far` (B1+B4 · Known Universe), `reading-four-spheres` (B2 · Bozeman), `reading-mars-lost-air` (B3 · Goddard pair), `reading-watching-shadows` (B5 · What Is an Exoplanet, with the `u1-lightcurve.png` figure — the B5 decode teaser). First bolded instance of each EAL term links `/foundations/eal/u1/`; "Where this shows up" = callout; Sources keep claim→source pairings + bracketed type tags (`.source-type`); NASA Exoplanet Archive citations cross-link `/reference/library/#nasa-exoplanet-archive`; every Sources section ends with the library link.
- **Wiring:** "Prefer text?" muted line inside each of the five Watch cards (video-card partial gained optional `preferText`/`preferHref`). **Video-card structural fix:** the card is now a `div` (was an `<a>` — inner links would have been invalid nested anchors); the thumbnail is the no-JS YouTube link; the lightbox handler ignores inner links so prefer-text navigates while thumb/card clicks still open the lightbox (render-tested both paths). "Readings" card added to U1 landing resources.
- **Resources Library** (`/reference/library/`, from `Resources Library (Earth & Env, with OPVL tags).docx`): **97 entries**, all with 4-field OPVL blocks (`dl.opvl`), generated by parser with per-entry anchor ids + section anchors (#data-sources #simulators #reading-journalism #ai-tools #indian-sources #student-tools #per-unit #u0-sources…#u7-sources). No suspect/malformed URLs found. Added as 4th card on the Reference index. Docx nit for Matthew: its intro says cross-cutting = "Sections 1-5" but the doc contains six (6. Student Tools), and "Sections 7-14" are the U0–U7 lists — the page preserves the intro verbatim.

**U0 Defense kit — pattern + pair on the site (2026-06-11)** — from `Unit 0_ Foundations/U0 Defense — Model Exchange Script + Recording Kit.docx`, ONLY the 5-move answer pattern and the Part-3 strong/weak pair went up as text, on `foundations/defending-your-work.njk` as new sections **6 (#five-moves)** and **7 (#strong-vs-weak)** (later sections renumbered 8–11). **The full script (pitch + Q&A dialogue) is deliberately NOT on the site** — it's a performance document; the recording is the student-facing artifact. When the recording exists: B6 + B7 Watch cards get the link (see the docx's Part 4 for the workflow). Links added: U0 B6 Interact placeholder → #five-moves; U1 B9 Solo-prep → #strong-vs-weak.

**U1 Goldilocks Lock-Point Exemplars page (2026-06-11)** — new `src/units/unit-1/exemplar-goldilocks.njk` verbatim from the reviewed docx (`Unit 1_ Earth and Universe/U1 Goldilocks Report — Lock-Point Exemplars.docx`). Four worked examples matched to the rolling-summative lock points: five-field criterion (#criterion, B7/C1), mechanism-not-symptom on Venus (#mechanism, B8/C2), honest UNKNOWN on Kepler-22 b (#unknown, B9/C4), non-obvious synthesis (#synthesis, B9/C5) + the exemplar's own AI Doc (#ai-doc). **Teacher key (planted-flaw answer) excluded from the entire repo; do not hint at it; Exemplar 1 field 4 is verbatim-protected.** Reused `.callout.exemplar-note` / `.warn` (no new CSS). The unfilled "One thing the AI got wrong" slot was resolved by fact-checking the docx's four candidate check-points: **Kepler-22 b's radius was the genuine error (2.4 R⊕ = 2011 discovery value; NASA revised to ~2.1 in 2023) — corrected in Exemplar 3 and recorded in the AI-doc field**; the other three held (25–65 μT, ~4.1 Gya, no confirmed exoplanet magnetic-field radio detection as of mid-2026). Linked from: assessment (after the component table), B7/B8/B9 Concepts cards (timed to locks), U1 landing resources grid.

**U0 Source Dossier exemplar page (2026-06-11)** — new `src/units/unit-0/exemplar-source-dossier.njk` built verbatim from the reviewed docx (`Unit 0_ Foundations/U0 Source Dossier — Annotated Exemplar Set.docx`; extraction via python zipfile — no pandoc on this machine). Microplastics dossier + 3 annotated OPVLs + synthesis + Source-3 AI Doc + three band-discrimination pairs + the exemplar's own AI Documentation page. **The teacher key (the planted flaw's identity) is excluded from the entire repo — the answer lives only in the docx.** The two `[Add anything…]` slots were dropped per Matthew (fields are complete without them). New `.callout.exemplar-note` (green band-note boxes); Version A boxes use `.callout.warn`. Anchors: #dossier #source-1/2/3 #synthesis #ai-doc #pair-limitation/origin/synthesis. Linked from: assessment (Worked exemplar callout), B4 Concepts (#source-1), B5 Concepts (#source-3), B3 Story (#ai-doc), OPVL framework page, U0 landing resources grid. **Do not add any text hinting where the planted flaw is; Source 2's Purpose brevity is deliberate — never "fix" it.**

**U1 media placements (2026-06-11, verified by Matthew; all URLs re-verified via oembed/HTTP)** — B1 Watch: *The Known Universe* (AMNH, 6:32) card upgraded to data-driven-rendering framing; B1 Interact + Do step 1 now link the planet gallery; B2 Watch: Bozeman ESS2A (lightbox); B3 Watch: two NASA Goddard Mars videos in one card (silent *Mars Evolution* 1:52 first, then the 2025 sputtering video 3:02); B4 Watch: Known Universe rewatch (find the HZ exit); B5 Watch: NASA *What Is an Exoplanet?* (4:35, lightbox) + Interact: NASA Eyes on Exoplanets; B10 bell ringer: WASP-96 b (2022, labeled) → TRAPPIST-1e NIRSpec (Sept 2025, ambiguous by design) JWST spectra sequence. **Remaining U1 entry-card placeholders: B6/B7/B8/B9 Watch only (teacher recordings, pending).** Confirmed + rejected entries logged in MEDIA_REVIEW.md.

**De-emoji pass (2026-06-11)** — ~1,000 emoji instances removed across 126 source files: section tags (Story/Concepts/Do/Show/Reflect), entry-card icons (divs removed entirely), callout titles, submission + AI-callout labels, AI-partner pill labels, launch buttons (+ `launchEmoji` frontmatter removed), hub card-icons (spans removed), site name in `_data/site.js`, block-page meta line, reflect prompts. CSS: `.submission-callout .label` + `.ai-callout .ai-label` became uppercase kickers matching `.section-tag`; `.entry-icon`/`.card-icon` rules deleted. Rendered site verified emoji-free (excl. simulators). Planet gallery untouched.

---

**U1 content pass (9 tasks) — 2026-06-11.** Deployment decision recorded: two class sections use Flint, one uses BoodleBox — one AI platform per class.
1. **Planet gallery is real** — 4 NASA images downloaded, square-cropped (TRAPPIST-1e offset-cropped from the PIA22093 system poster), ≤1200px, at `src/assets/planets/planet-{a,b,c,d}.jpg` (a=Mars PIA00407, b=TRAPPIST-1e, c=Earth AS17-148-22727, d=Venus PIA23791 left/natural disk). Gallery page untouched.
2. **Planet Hunter sequencing fixed** — introduced in B3 (Story sentence + card meta "introduced today"); B6 reframed to "in your toolkit since Block 3 — today it becomes your main advisor for choice-lock."
3. **Success criteria visible in all 10 U1 blocks** — `ul.success-criteria` (2–4 "I can…" items) under each Learning Intention, derived from LI clause structure + Reflect prompts (B2/B4/B7/B9 lists match their Reflect rating triplets). New CSS in `block-page.css`.
4. **EAL links** — "Vocabulary support" entry-card → `/foundations/eal/u1/` on B4 + B5; **misconception callout** "⚠ Positive ≠ good" (warn) closes B2 Concepts.
5. **Handout cards real** — B2 Read (Feedback Loops — Three Worked Examples) and B5 choice A (Light-Curve Decode) placeholders converted; printed-in-class noted.
6. **ESS1-2 lookback-time paragraph** — B4 Story now ends the prose with the light-travel-time "time travel" paragraph (Kepler-452 light left ~year 226).
7. **Dual-platform launch buttons** — all 14 partner pages: `launchUrl` → `flintUrl` + `boodleboxUrl` + `launchEmoji` frontmatter; shared `partials/partner-launch.njk` renders live button(s) ("🚀 Launch on Flint / on BoodleBox" + "Your class uses one platform" note) or the coming-soon line when both empty (current state). Fill the frontmatter URLs as platforms deploy.
8. **Google Classroom scaffold** — `src/_data/classroomLinks.json` (19 keys: u0-b1…b7, u0-dossier, u1-b1…b10, u1-goldilocks, all "") + `partials/submit-link.njk`. All 17 submit anchors in U0/U1 blocks now data-driven; empty key renders "Submit via Google Classroom (link posted in August)". **One file to fill in August.** (Assessment-page keys are future-use — those pages have no submit buttons yet.)
9. Verified: build clean (140 files), gallery renders 4 square images, no placeholder markup on touched cards, 14/14 partner fallbacks, 17/17 pending submit spans, live-path tested for both partials.

**Follow-up candidates:** B1's Interact placeholder still says "TBD: live four-planet image gallery" — it can now link `/units/unit-1/planet-gallery/`. U1 B4 Watch placeholder can reuse *The Known Universe* video-card. U0-dossier / u1-goldilocks submit buttons don't exist yet on assessment pages.

**Video-card click-to-play pattern shipped** — `src/_includes/partials/video-card.njk` + CSS in `block-page.css`. A Watch entry card that shows the YouTube thumbnail with a play overlay; clicking opens a large `<dialog>` **lightbox** (min(90vw, 960px), youtube-nocookie, autoplay) — the card itself never links out when JS is on. Lightbox closes via ✕ / backdrop / Esc, and closing removes the iframe (stops playback). "Watch on YouTube ↗" is an explicit link in the lightbox footer. Progressive enhancement: no JS → plain link out. No YouTube code loads until a card is clicked. **Use this partial whenever a Watch placeholder gets its video resolved** — set a `video` object (`id`, `title`, `cardTitle`, `blurb`, `meta`) then `{% include "partials/video-card.njk" %}`. First applied: **U1 Block 1** — *The Known Universe* (AMNH, `17jymDn0W6U`). Next natural candidate: U1 Block 4's "powers of ten" placeholder (video not yet confirmed for it).

---

## Previous TL;DR — U4 rolling-summative (kept for reference)

**U4 Chennai Climate Brief restructured around the rolling-summative pattern** — third unit to get it (U1 prototype → U2 → U4). Scored as **10 components**, five blocks of locking (8→12). **Component → block → strand map:** Block 8 = C1 feedback diagram (K/U); Block 9 = C2 Recommendations (T/T); Block 10 = C3 Background (K/U) + C4 Evidence & Projected Impacts (T/T), inside the first full draft; Block 11 = C5 OPVL-on-3-sources incl. AI source (T/T) + C6 AI-Doc log (K/U); Block 12 = C7 final Brief + C8 Panel pitch + C9 Q&A (all C) + C10 unit-close reflection (formative). B5 top-3 list and B7 2-source OPVL set stay as unmarked setup (mirrors U2 B5). The three gates are reframed as per-component band caps: T/T-recommendations (C2), K/U-AI-Doc (C6), C-policy-voice (C7–9). Also added the explicit OPVL-on-3-sources requirement (IPCC/gov + local/NGO + AI) that U2/U6 already had.

**Files touched:** `unit-4/assessment-chennai-climate-brief.njk` (rolling-summative callout + component table + locks paragraph + required components + rubric reminder + gates→caps) and Show sections of `unit-4/block-5/7/8/9/10/11/12.njk`.

**Propagation status:** U1 ✓, U2 ✓, U4 ✓ (this commit). Remaining: U5 Position Paper, U6 Sustainable Neighborhood Plan, U7 (once built).

## Previous TL;DR — 2026-06-11 review + cleanup pass (kept for reference)

**2026-06-11 review + cleanup pass** (see `REVIEW.md` for the full audit and remaining plan):
- `u2-rolling-summative` merged to main.
- **House style: American English.** All UK spellings converted site-wide (~64 files). The U6 summative is now the **Sustainable Neighborhood Plan** (file, URL, and title renamed). Future content must use US spelling.
- Quick fixes: U7 card on units index de-linked (was the site's only 404), U4 card title now matches its landing page ("Atmosphere & Climate"), U6 assessment stub-note now names exactly what's pending, breadcrumb markup extracted to `src/_includes/partials/breadcrumbs.njk`.
- AI partner launch placeholders: "TBD: BoodleBox / Gemini Gem URL" replaced with student-facing "link coming soon. Ask Mr. Ignash for access." across all 14 partner pages. Real launch URLs still needed (tracked in REVIEW.md P1.1).
- Next per REVIEW.md: rolling-summative propagation to U4/U5/U6, `currentUnit` home-page banner, EAL links on unit landings, glossary rubric-term entries, then U7 skeleton.

## Previous TL;DR — U2 rolling-summative (kept for reference)

**Unit 2's Landscape Reading has been restructured around the rolling-summative assessment pattern** — the second unit to get it, propagated from the U1 Goldilocks Report prototype (commit `6aba5fa`). The Reading is now scored as **10 components**, each tied to a rubric strand and each locking on a specific block. Students get feedback + a locked strand band on each component as it's due — not all at the end. By the Block 9 share-out, K/U and T/T are already locked (from Blocks 6–8); Block 9 marks only the three C-strand components (final assembled Reading + 3-min pitch + Q&A responses) plus the formative unit-close reflection.

**Component → block → strand map:** Block 6 = C1 biography-past (K/U) + C2 current-processes (K/U); Block 7 = C3 OPVL-on-3-sources (T/T); Block 8 = C4 projections (T/T) + C5 recommendations (T/T) + C6 AI-Doc-log (K/U); Block 9 = C7 final Reading (C) + C8 pitch (C) + C9 Q&A (C) + C10 unit-close reflection (formative). The two old strand gates are reframed as per-component band caps: T/T-projections (C4) and K/U-AI-Doc (C6).

**What shipped this commit:**
- `unit-2/assessment-landscape-reading.njk` — replaced "Key dates" callout with the rolling-summative callout + 10-row component due-date table + "what locks means" paragraph; bumped Step 2 + the T/T 7-8 band from "≥2 sources" to "3 sources including the AI source"; reframed the three gates from strand caps to per-component band caps; added the rolling-summative reminder above the rubric tables.
- `unit-2/block-5.njk` — Show rubric-meta notes the top-3 list is setup (not strand-marked) and points to the first locks at Block 6.
- `unit-2/block-6.njk` — Show: Components 1 + 2 (K/U) lock today.
- `unit-2/block-7.njk` — Show: Component 3 (T/T OPVL on 3 sources) locks today.
- `unit-2/block-8.njk` — Show: Components 4 + 5 (T/T) + 6 (K/U) lock; K/U + T/T essentially complete after today.
- `unit-2/block-9.njk` — Show: Components 7–9 (C) + 10 (formative) lock; K/U + T/T already in.

**Year-wide propagation status:** U1 (prototype) ✓, U2 (this commit) ✓. Remaining targets named in the U1 commit: U4 Climate Brief, U5 Position Paper, U6 Sustainable Neighbourhood Plan, U7 (once built). Each would be componentized similarly (6–10 components mapped to strands, locking progressively).

---

## Previous TL;DR — U6 UbD reconciliation (kept for reference)

**Unit 6 is fully built and now reconciled against the updated UbD.** The updated U6 UbD (urban-aligned, 2026-06-02) **validates the entire urban build** — same anchor question, Sustainable Neighbourhood Plan, 8 categories / 7 objectives, trade-off heart + gates, Earth Week public + municipal audience, 3 formats, and all 10 block titles match the site exactly. This pass aligned two things the site still treated as provisional:
- **Standards confirmed** (no longer provisional): primary HS-ETS1-3 (anchor), HS-ETS1-1, HS-ESS3-1, HS-ESS3-4; secondary HS-ESS3-3 (via the Land Allocation Optimizer) + HS-LS2-7; SEP-2/5/6/7/8. Updated the assessment handout's Standards row + dropped "provisional/pending" from the handout stub-note, the U6 landing stub-note, and the units/index build-status note.
- **OPVL on 3 sources** added as a named summative expectation (one municipal/government source, one community/NGO, one AI explanation; ≥1 specific Limitation each; cited in the Plan). Folded into the 8 steps, expanded the "Sources, OPVL, and AI Documentation" section, and added a connecting line in Block 3's Source Evaluator choice.

**Files touched:** `unit-6/assessment-sustainable-neighbourhood-plan.njk` (standards row, stub-note, step 7, sources section), `unit-6/index.njk` (stub-note), `units/index.njk` (build-status note), `unit-6/block-3.njk` (3-source OPVL line). Site stays at 139 files.

**Remaining U6 follow-ups** (smaller still): **Earth Week timing** (still being confirmed against the school calendar; all copy stays date-free), and the **Land Allocation Optimizer** simulator (charter-stage; HS-ESS3-3 stays contingent on it). The **public-posting channel is now confirmed** — a student takeover of the school's Instagram account for the unit (approved); named in Blocks 8/9 + the assessment, with consent + opt-out + non-public fallback retained. The UbD's per-block 0–80 min breakdowns are explicitly marked SUPERSEDED (old agricultural sequence), so nothing to lift from them — the site already implements the new urban arc.

**Next:** U7 skeleton (Energy & Sustainability) — fully sourced; completes the year.

---

## Previous TL;DR — U6 Phase C close-out (kept for reference)

**Unit 6 fully built (10 of 10 blocks deep).** Phase C closed out the public-path chunk: Block 8 (Public-Piece Prep), Block 9 (Earth Week Public Presentation), Block 10 (Unit Reflection + U7 preview). With the spine (1, 4, 5) and the concept-and-work chunk (2, 3, 6, 7), U6 has all 10 blocks deep, a full Sustainable Neighbourhood Plan handout (4-band rubric), and both AI partners at full spec.

**What shipped this phase:**
- `src/units/unit-6/block-8.njk` — Public-Piece Prep — stub → full deep block. Turn the plan into a public live activity + shareable artifact; the design tension (outreach rewards a clean message, the rubric rewards naming the sacrifice) made explicit; the public-artifact guardrail (show the trade-off, do not hide it); consent + opt-out + non-public fallback baked in.
- `src/units/unit-6/block-9.njk` — Earth Week Public Presentation — stub → full deep block. The C-strand performance: present to a real public/municipal audience; the bar is the audience seeing both achievement and cost; live / pre-recorded video / non-public fallback choice board; AI Doc final reflection. Date-free (Earth Week planned-but-unscheduled).
- `src/units/unit-6/block-10.njk` — Unit Reflection — stub → full deep block + U7 preview. Self-assessment vs. the rubric, the year-long design-thread look-back (U2→U4→U5→U6), and the U7 (Energy & Sustainability) preview.
- `src/units/unit-6/index.njk` — landing stub-note: "Skeleton" → "Fully built," with the honest pending-specifics list (standards, area cards, public channel/consent, simulator).
- `src/units/index.njk` — build-status note: U6 moved into the fully-complete list (U0–U6), with the U6 standards-provisional + public-channel-pending caveats noted.

Site stays at 139 generated files (no new files; content updates only).

**Open follow-ups (not blockers, tracked):**
- **Standards-alignment pass** — the updated U6 UbD (new standards + scope) is incoming; when it lands, replace the provisional standards on the assessment handout with the confirmed set.
- **Public-posting channel** — pending school social-account access (the "account takeover" email); when confirmed, swap the TBD channel placeholder in Blocks 8/9 for the real one (text replacement only).
- **Simulator** (Land Allocation Optimizer) stays charter-stage; repoint to urban objectives + build later.

**Next:** U7 skeleton (Energy & Sustainability — Energy Mix Design + Op-Ed; fully sourced from the U7 docx set: UbD, Block Plans, Assessment Package, City Energy Cards, Design Template + Op-Ed Guide, Pune worked-example Op-Ed; partners Energy Analyst + Op-Ed Editor). After U7 skeleton + deep builds, the whole year is navigable.

---

## Previous TL;DR — U6 Phase B concept + work chunk (kept for reference)

**Unit 6 had 7 of 10 blocks deep (Phase B done).** Phase B deepened the concept-and-work chunk: Block 2 (Urban Systems), Block 3 (Area Data Cards + assessment kickoff), Block 6 (Plan Drafting), Block 7 (Equity & Displacement). Together with Phase A's spine (1, 4, 5), U6 reached ~70% teaching-ready, leaving the public-path chunk (8, 9, 10) for Phase C.

**What shipped this phase:**
- `src/units/unit-6/block-2.njk` — Urban Systems — stub → full deep block. The five urban systems (access, density, green-blue, heat, flood) as the city-scale analog of ecosystem services, how they feed back on each other (paving for density removes flood-buffering permeable land), Chennai eris/Pallikaranai context, Systems Diagrammer feedback-sketch anchor.
- `src/units/unit-6/block-3.njk` — Area Data Cards — stub → full deep block. **Assessment kickoff** (Plan assigned, area locked, 15-minute-access baseline recorded). Source Evaluator OPVL on a data claim. Area roster + spatial unit kept as TBD/agnostic placeholders (open decisions).
- `src/units/unit-6/block-6.njk` — Plan Drafting — stub → full deep block. First major work day; draft all four core sections + recommendations to a named municipal body (what/who/when/cost-or-equity); both partners open; conferencing.
- `src/units/unit-6/block-7.njk` — Equity & Displacement — stub → full deep block. The perspective planning ignores: informal settlements, affordability, displacement; the direct parallel to U5's stakeholder work; Equity & Resilience Partner central; name a displacement risk + add a concrete safeguard.

Site stays at 139 generated files (no new files; content updates only).

**Conventions held:** no em dashes in U6 student-facing body prose; block-relative language (no calendar dates); spatial unit + area roster kept agnostic/TBD; simulator referenced as planned.

**Next:** U6 Phase C (public-path: Blocks 8 Public-Piece Prep, 9 Earth Week Public Presentation, 10 Unit Reflection + U7 preview) — needs Earth Week timing + consent model settled. Then U7 skeleton.

---

## Previous TL;DR — U6 Phase A spine (kept for reference)

**Unit 6 has a teaching-ready spine (Phase A).** Mirrors U5 Phase A: deepened the 3 highest-leverage blocks (1, 4, 5), converted the assessment stub to a full handout, and converted the 2 partner stubs to full 7-section specs. U6 is the urban 15-minute-Chennai reframe (source: `../Unit 6_ Biosphere and Land Use/U6 REWORK — Urban 15-Minute Chennai Design Brief.md` + `U6_BUILD_PLAN.md`); since the urban content lives only in that sketch (the U6 docx are the rural version), Phase A **authored** the lesson content from the sketch + Chennai urban-planning domain knowledge.

**What shipped this phase:**
- `src/units/unit-6/block-1.njk` — Phenomenon Launch — stub → full 5-section deep block. "Can you live here on foot?", Chennai test case (eris, 2015 floods, heat, informal settlements), U5→U6 widening, walkability-audit anchor activity, first-trade-off exit ticket.
- `src/units/unit-6/block-4.njk` — Multi-Objective Optimisation — stub → full deep block. The signature design move: allocate the grid across 8 land uses, Pareto frontier, **both AI partners land here** with their opposite pulls (synthesise, do not average). Land Allocation Optimizer referenced as planned.
- `src/units/unit-6/block-5.njk` — Trade-off Analysis — stub → full deep block. **The T/T gate.** Quantify across ≥4 objectives + name the sacrifice in one explicit sentence; hiding the trade-off caps T/T; qualitative-only caps at 5-6.
- `src/units/unit-6/assessment-sustainable-neighbourhood-plan.njk` — stub outline → full handout. Added formats, AI Documentation expectations, grade weighting (Plan 70% / public performance 15% / formative 15%), and the **full K/U / T/T / C rubric across 4 bands** with all 5 gates baked into the band descriptors. Standards stay provisional (alignment pass pending).
- `src/ai-partners/urban-planner.njk` + `equity-resilience-partner.njk` — stub → full 7-section specs (Overview, Pairs with, Quick facts, copy-paste system prompt, opening message, example exchange, failure mode + recovery, documentation reminder), re-pointed from the Agronomist + Ecologist specs in `AI Partner Specifications (U4-U7 combined).docx`.

Site stays at 139 generated files (no new files; content updates only). U6 now has **3 of 10 blocks deep** (1, 4, 5).

**Conventions held:** no em dashes in U6 student-facing body prose; block-relative language (no calendar dates); spatial unit kept agnostic; simulator referenced as planned.

**Next:** U6 Phase B (urban-systems chunk: Blocks 2, 6, 7 + Block 3 Area Cards once the area-roster decision is settled) → Phase C (public-path: Blocks 8, 9, 10 + Earth Week close-out, once the Earth Week timing + consent decisions are settled). Then U7 skeleton.

---

## Previous TL;DR — U6 skeleton (kept for reference)

**Unit 6 navigable as a skeleton, built on the urban 15-minute reframe.** U6 was redesigned from a rural 100 km² land-allocation problem into an **urban 15-minute-neighbourhood** problem set in Chennai. Students each take a Chennai area, redesign it across 8 urban land uses, **name and quantify the trade-offs** (unchanged T/T heart + 5 gates), work two disagreeing AI partners (Urban Planner + Equity & Resilience), and present publicly at the school's environmental showcase to a real municipal audience (the C performance, replacing a peer board).

**What shipped this commit (U6 skeleton, +14 files):**
- `src/units/unit-6/index.njk` — landing (anchor question, urban-reframe prose, 10-block grid, assessment card, 4 AI-partner cards, 5 resource cards incl. U6 EAL + Land Allocation Optimizer planned).
- `src/units/unit-6/block-1.njk … block-10.njk` — 10 block stubs, full 5-section scaffold (Story/Concepts/Do/Show/Reflect) with honest `placeholder`/`TBD:` bodies. Titles: Phenomenon Launch · Urban Systems · Area Data Cards · Multi-Objective Optimisation · Trade-off Analysis · Plan Drafting · Equity & Displacement · Public-Piece Prep · Earth Week Public Presentation · Unit Reflection (+ U7 preview).
- `src/units/unit-6/assessment-sustainable-neighbourhood-plan.njk` — assessment outline (GRASPS, 8 urban land-use categories, 7 objectives, 8 steps, 5 gates + public-artifact guardrail, provisional standards, simulator TBD).
- `src/ai-partners/urban-planner.njk` + `equity-resilience-partner.njk` — 2 partner stubs (intro + launch placeholder + Overview + Pairs-with + Quick facts).
- `src/units/index.njk` — U6 card refreshed (🏘️, real desc) + stub-note ("Unit 6 skeleton built; Unit 7 stubbed").
- `src/ai-partners/index.njk` — intro line + 2 new cards (now 14 partners).

**Conventions for U6:** block-relative language only (no Earth Week / calendar dates — scheduling is an open decision); no em dashes in U6 student-facing body prose (per `U6_BUILD_PLAN.md` house-style note — NOTE this differs from U0–U5, which use em dashes freely; flagged for Matthew to decide whether to relax for U6 or retrofit earlier units).

**Open decisions deferred to deep builds** (surfaced in stubs): Earth Week timing vs. calendar, spatial unit + grid scale, standards alignment pass, public-posting consent model, area roster. The **Land Allocation Optimizer** sibling sim stays charter-stage; repoint to urban objectives later.

**Next:** U6 deep builds — Phase A (spine + assessment handout + 2 partner full specs, re-pointed from `AI Partner Specifications (U4-U7 combined).docx`) → B (urban-systems chunk + first work day) → C (public-path + Earth Week close-out), mirroring U5. Then U7 skeleton.

---

## Previous TL;DR — U0/U1 anchor article resolved as Lovelock 1965 (kept for reference)

**The U0 "anchor article" placeholder is resolved: it's now Lovelock (1965) + Thompson et al. (2022).** The `[U0 Anchor Article — TBD pending librarian]` placeholder that threaded U0 Blocks 2/3/7 + U1 Block 1 has been replaced everywhere with a real, rigorous primary-literature pair. Lovelock 1965 (*Nature*) originated the idea of detecting life by reading a planet's atmosphere for chemical disequilibrium — which is U1's habitability question from the other side, so it's a genuine U0→U1 bridge. Thompson 2022 (*PNAS*) is the modern JWST-era follow-up on TRAPPIST-1e methane. The librarian dependency for the anchor is closed. Source: `Unit 0_ Foundations/U0 Block Plans — Update Brief (v0.2).md` + companion lesson plan.

**What shipped this commit (website):**
- `src/units/unit-0/block-2.njk` — substantive rewrite. Title "OPVL Deep Dive" → **"OPVL Across Source Types."** Re-anchored on Lovelock 1965: primary-literature OPVL framing, inverse-Goldilocks hook, real citations + "materials in Google Classroom" pointer (no PDFs on the public site, per the lesson plan), Thompson 2022 in the stretch path, 5-term pre-teach vocab callout, stem-based exit slip.
- `src/units/unit-0/block-3.njk` — anchor-article → "AI summary of Lovelock 1965" swap throughout. The human-OPVL (Block 2) vs. AI-summary-OPVL (Block 3) side-by-side is preserved.
- `src/units/unit-0/block-7.njk` — preview mention now names Lovelock as the habitability bridge.
- `src/units/unit-1/block-1.njk` — carry-forward bridge now names Lovelock + Thompson, using the lesson plan's TRAPPIST-1e callback framing. Carry-forward card upgraded from placeholder → real reference.
- `src/units/unit-1/index.njk` — new "Foundational Papers — Lovelock 1965 + Thompson 2022" resource card.
- `src/units/unit-1/assessment-goldilocks-report.njk` — Thompson added as a recommended primary source in Step 3a (esp. for TRAPPIST-1 writers).
- `src/units/unit-1/block-5.njk` — Thompson transit→habitability callback (5–10 JWST transits to detect TRAPPIST-1e methane).
- `src/units/unit-1/block-7.njk` — "Thompson's three criteria" optional-model callout for framework design.
- `src/units/unit-0/index.njk`, `block-1.njk` — Block 2 title references updated.
- `MEDIA_REVIEW.md` — anchor article marked ✅ RESOLVED.

Site stays at 125 generated files (no new files; content edits only).

**Companion docx work (separate commit, in the course-content folder, not this repo):**
- `Unit 0_ Foundations/U0 Block Plans — LI + SC + Bell Ringers + Reflections.docx` — synced from 5 → 7 blocks (the website was already at 7; the docx was the stale artifact). Block 2 revised to the Lovelock primary-literature lesson; Block 4 tuned; Block 5 repurposed (AI-source OPVL + AI Doc); Blocks 6 + 7 new; header arc line 5→7.

**Deferred (Part C — confirm before building):** 3 supporting handouts (Lovelock Pre-Read Scaffold, 5-term Pre-Teach Vocabulary, Structured OPVL Template) + a light cross-doc validation pass (Source Dossier Assessment Package, U0 UbD, Welcome/Primer for stale "5-block / 2-week" phrasing).

---

## Previous TL;DR — Unit 1 rolling-summative assessment pattern (kept for reference)

**Unit 1's Goldilocks Report has been restructured around a rolling-summative assessment pattern.** Year-wide design prototype. The Report is now scored as 10 named **components**, each tied to a rubric strand and each due on a specific block. Students get feedback + a locked strand band on each component as it's due — not all at the end. By the time of the Block 10 NASA Committee Defense, K/U and T/T are mostly already locked (across components from Blocks 7, 8, 9). Block 10 marks only the three C-strand components (final assembled Report + pitch + Q&A responses) plus the formative unit-close reflection.

**The design intent** (year-wide, starting with U1): rather than "summative = final submission, formative work in a side bucket," U1 now models "summative = strand-by-strand progression across the unit, final submission = show-what-you-can-do-now." Students see a running rubric in Google Classroom (per-student rubric tool) that fills in as components lock. No end-of-unit surprises on K/U or T/T.

**What shipped this commit:**
- `src/units/unit-1/assessment-goldilocks-report.njk` — major edit. Replaced "Key dates" callout with a "How this is assessed — rolling summative" callout + 10-row component due-date table (component / due block / strand). Added Step 3a — OPVL your 3 sources, making the previously-implicit OPVL component explicit and bumped from "≥2 sources" to "3 sources." Updated T/T 7-8 rubric band to "3 sources including the AI source." Reframed the K/U gate (AI Documentation) and T/T gate (exoplanet analysis) from post-hoc strand caps to per-component locks — each component still has a watch-out, but it's a component-level band cap not a strand-level cap. Added a rolling-summative reminder above the rubric tables.
- `src/units/unit-1/block-7.njk` — Show section reframed: Component 1 (K/U-framework) locks today.
- `src/units/unit-1/block-8.njk` — Show section reframed: Component 2 (K/U-baseline) + Component 3 (T/T-OPVL on 3 sources) both lock today.
- `src/units/unit-1/block-9.njk` — Show section reframed: Component 4 (T/T-exoplanet) + Component 5 (T/T-synthesis) + Component 6 (K/U-AI-Doc) all lock today. K/U and T/T are now essentially complete after Block 9.
- `src/units/unit-1/block-10.njk` — Show section reframed: Components 7 (C-final-Report) + 8 (C-pitch) + 9 (C-Q&A) + 10 (formative reflection) lock today. K/U and T/T marks already in from Blocks 7–9.

Site stays at 125 generated files (no new files; content updates only).

**Why this matters / year-wide implication.** The Goldilocks Report is the first place the rolling-summative pattern lands. If it works in practice during AY 2026-27, the pattern propagates to U2 Landscape Reading, U4 Chennai Climate Brief, U5 Position Paper, and U6 / U7 once built. Each summative would be componentized similarly — 6-10 components per summative, mapped to rubric strands, locking progressively across the unit. The shared infrastructure (Google Classroom per-student rubric scoresheet) means students learn the rhythm once and reuse it across the year.

**Out of scope this commit (deliberately):**
- Propagating the pattern to U2 / U3 / U4 / U5 summatives.
- A Foundations year-wide explainer page for the rolling-summative model.
- A new Student Hub "Running Rubric" page.
- Touching the AISC strand-rubric Foundations page.

After U1 is taught with this model (or as the propagation phase plans), those items become next-phase candidates.

---

## Previous TL;DR — Unit 5 Phase C close-out (kept for reference)

**Unit 5 is now fully complete.** Phase C closed out U5 by deepening the final two stubs — Block 8 (Drafting + Roundtable Rehearsal) and Block 9 (Submission + Stakeholder Roundtable + Unit Close + U6 preview). All 9 blocks are now deep, the full assessment handout shipped Phase A, both signature AI partners (Hydrologist + Stakeholder Voice) are at full 7-section spec depth. U5 is Matthew's trial unit — teaching-ready end-to-end for AY 2026-27.

After this commit, **U0 + U1 + U2 + U3 + U4 + U5 are all fully complete** — 59 deep blocks total across the six units, 6 full assessments, 12 AI partner pages (7 at deep 7-section spec depth: Field Geologist, Planet Hunter, Systems Diagrammer, Climate Modeler, Policy Aide, Hydrologist, Stakeholder Voice; 5 still at pre-deep-build stub depth: Skeptic, Source Evaluator, Plate Tectonics Tutor, Engineering Coach, Defense Practice Partner), the full EAL hub (11 pages), and the full Foundations layer (10 pages). The units/index landing's build-status note now reads "Unit 0 / 1 / 2 / 3 / 4 / 5 fully complete."

**What shipped this phase:**
- `src/units/unit-5/block-8.njk` — Position Paper Drafting + Roundtable Rehearsal — stub → full 5-section deep block (~123 lines). T/T + C primary. Last protected drafting time + Roundtable rehearsal. Trial-arm split surfaces one more time (Section A Boodle / Section B Flint / Section C paper Profile Pack). Concession-vs-capitulation is the C-rubric edge — Path D peer-help structured around exactly that distinction. Submission today: rehearsal artifacts (paper itself submits Block 9).
- `src/units/unit-5/block-9.njk` — Stakeholders Map + Position Paper Submitted + Stakeholder Roundtable + Unit Close — stub → full 5-section deep block + U6 preview block (~119 lines, 6 block-sections). C primary. Submission → ~55-min Roundtable → debrief → unit-close reflection → U6 preview. **The Roundtable is negotiation, not Q&A** — that's the C signal in the rubric, made explicit throughout. AI partners are deliberately off-stage today (the Roundtable is human-only). Closes with two-paragraph U6 preview tying water perspective-taking → land-use perspective-taking.
- `src/units/unit-5/index.njk` — Block 6 card-desc refresh (stale skeleton-era wording → accurate "Cauvery Deep Dive + Bangalore worked-example demo + Stakeholders Map started" framing).
- `src/units/index.njk` — stub-note refreshed: "Unit 0 / 1 / 2 / 3 / 4 / 5 fully complete."

Site stays at 125 generated files (no new files; content updates only).

**What's left in the year-map**:
- U6 (Biosphere & Land Use) and U7 (Energy & Sustainability) are still landing-card-only with no folders.
- 5 of the 12 AI partner stubs (Skeptic, Source Evaluator, Plate Tectonics Tutor, Engineering Coach, Defense Practice Partner) are still at pre-deep-build depth.
- U0 Anchor Article placeholder still pending librarian collaboration.
- Possible sibling-project simulators (Cauvery Allocation, Land Use Allocator, Energy Mix Designer) not yet briefed.
- AI Partner Deployment Plan launch URLs not yet applied to AI partner pages (still TBD placeholders).

---

## Previous TL;DR — Unit 5 Phase B water systems chunk (kept for reference)

**Unit 5 had 7 of 9 blocks deep.** Phase B deepened the water systems chunk + the first major Position Paper work day: Block 2 (Watersheds + Water Budgets), Block 3 (Groundwater + Aquifers — three-sources OPVL), Block 4 (Water Quality + Pollution), Block 6 (Cauvery Deep Dive + Stakeholders Map Started). Together with Phase A's spine (Blocks 1, 5, 7), this meant ~78% of U5 was teaching-ready going into Phase C.

**What shipped this phase:**
- `src/units/unit-5/block-2.njk` — Surface Water + Watersheds + Water Budgets — stub → full 5-section deep block (~123 lines). Watershed-as-political-unit framing, water-budget framework (Inputs − Outputs = ΔStorage), paired calculation on a real Chennai-area basin, deficit/balance/surplus classification + what would change it. Cauvery-budget connection as stretch path.
- `src/units/unit-5/block-3.njk` — Groundwater + Aquifers + Depletion — stub → full 5-section deep block (~125 lines). Confined/unconfined + renewable/fossil distinctions, Chennai 2019 Day Zero anchor, **three-sources OPVL** on Chennai groundwater (government / Hindu article / AI summary — same shape as U2 Block 3's Cooum three-sources move applied to a new domain).
- `src/units/unit-5/block-4.njk` — Water Quality + Pollution — stub → full 5-section deep block (~124 lines). Six parameters (DO, BOD, pH, TDS, coliforms, turbidity), point vs. non-point pollution, Chennai-area dataset interpretation (Cooum/Adyar), stakeholder-grade recommendation move as the T/T preview.
- `src/units/unit-5/block-6.njk` — Cauvery Deep Dive + Stakeholders Map Started — stub → full 5-section deep block (~125 lines). **First major work day.** Cauvery case study (basin hydrology + 1924 → 1990 → 2018 dispute arc, both states presented neutrally), Mr. Ignash's **Bangalore worked-example Stakeholders Map** demoed live (deliberately a non-student case so the move transfers without copying), students then start their own 7-field map. Conferencing block — Hydrologist + Source Evaluator open; Stakeholder Voice available for students who want a head start.

Site stays at 125 generated files (no new files; content updates only).

---

## Previous TL;DR — Unit 5 Phase A spine (kept for reference)

**Unit 5 has a teaching-ready spine.** Mirrors U2 + U4 Phase A: deep-build the 3 highest-leverage blocks (Block 1 Water Cycle anchor, Block 5 Water Rights + Assessment Kickoff, Block 7 Stakeholder Voice AI introduced + Boodle Build for Section A), convert the Water Stakeholders + Position Paper assessment stub to a full handout, convert the Hydrologist + Stakeholder Voice stubs to full 7-section specs.

**Why this is highest priority right now**: U5 is Matthew's trial unit — he teaches it first this year. The Phase A spine is what he needs for live teaching: Day 1 launch, the assessment kickoff day, the signature-partner-introduced day, plus the full assessment package and both AI partner specs.

**What shipped this phase:**
- `src/units/unit-5/block-1.njk` — Water Cycle + Reservoirs + Residence Times — stub → full 5-section deep block (~115 lines). Anchor in Cauvery dispute, residence-time-as-political-structure framing, paired water-cycle diagram activity, Cauvery-specific stakeholder linkage exit ticket.
- `src/units/unit-5/block-5.njk` — Water Rights + Stakeholders Map Assigned — stub → full 5-section deep block (~125 lines). Four water-rights frameworks (riparian / prior appropriation / public trust / common-pool), physical-vs-economic scarcity, assessment kickoff with 8 cases + two-tier choice (case + stakeholder), stretch-vs-default decision support.
- `src/units/unit-5/block-7.njk` — Stakeholder Voice AI Introduced + Counter-Argument + Boodle Build — stub → full 5-section deep block (~135 lines). Signature partner lands. 6-field stakeholder analysis framework. Counter-argument work without strawmanning. Trial-arm split lands in the Interact card: Section A Boodle Build begins, Section B Flint Stakeholder Voice activated, Section C paper Stakeholder Profile Pack opened.
- `src/units/unit-5/assessment-water-stakeholders.njk` — stub → full handout (~240 lines). GRASPS table, trial-aware callout (3 arms explained), 8-case roster, Stakeholders Map 7-field template, Position Paper 4-part structure with word counts, 4 scoring gates explicitly named (voice-match T/T, stakeholder specificity K/U, AI Doc K/U, negotiation move C), full K/U / T/T / C rubric across 4 bands, AI Documentation expectations including Section A Boodle Build documentation.
- `src/ai-partners/the-hydrologist.njk` — stub → full 7-section spec (~140 lines). Overview, Pairs with, Quick facts, copy-paste system prompt, opening message, example exchange (the Cauvery "is Karnataka being unfair?" redirect), failure mode (advocacy drift + outdated allocation numbers) + recovery, documentation reminder.
- `src/ai-partners/stakeholder-voice.njk` — stub → full 7-section spec (~170 lines, preserves trial-aware framing). Overview emphasizes the "make the strongest argument" + "flag projection" moves. Full 4-turn Cauvery example exchange showing the partner in character with a meta-comment. Failure mode (caricature + breaking role) + recovery. Boodle Build documentation requirement for Section A explicit.

Site stays at 125 generated files (no new files; content updates only).

---

## Previous TL;DR — Unit 5 skeleton (kept for reference)

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
