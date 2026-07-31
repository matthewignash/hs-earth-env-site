# Handoff — hs-earth-env-site (session ending 2026-07-31)

Paste this into a new chat to pick up where we left off. Everything below is committed and deployed.

## What this project is

Eleventy static site for HS Earth & Environmental Science at AISC Chennai, AY 2026-27. `npm run build` → `_site`, auto-deploys to Vercel on push to `main` (production: **https://hs-earth-env-site.vercel.app**). 155 pages. Repo `matthewignash/hs-earth-env-site`, public.

**Read first:** `BUILD_PROGRESS.md` (living log; addenda 3–27, newest at top) and `CLAUDE.md` (charter, do not edit). Note CLAUDE.md §5/§6 are stale on emoji and section tags.

## Standing conventions (enforce these)

- **No em dashes** in student-facing content. Use colon, comma, semicolon, period, parentheses. Preserve en dashes in numeric ranges.
- **No "low stakes" / "low-stakes"** anywhere. Zero remain.
- **One AI platform per class** (Flint or BoodleBox). Never instruct students to use Gemini, ChatGPT, NotebookLM, or Claude by name. Say "the class AI platform".
- **Teacher names:** inline pairings read "Ms. Jayanthi/Mr. Ignash"; the `welcome.njk` signature reads "Mr. Ignash and Ms. Jayanthi". Ordering is deliberately inconsistent between those two.
- **Block scheduling:** classes meet every other day. Never "tomorrow"/"yesterday"/"tonight" — use "next class", "last class", or name the block.
- **Concepts sections** are headed "Before you start the work" and their instruction line must open with one of four stems: `Pick one` / `Start with the X` / `Use all of these` / `Keep these open`. **`npm run build` runs `scripts/check-concepts.mjs` first and fails the build if a line contradicts its cards.** That gate is the main safety net in this repo.
- **No strand caps anywhere.** Undocumented AI work is "returned as incomplete, not scored until the documentation arrives"; everything else is phrased as what a strand "reads for" / what a band "describes".

## Architecture worth knowing

- **Dates are computed, not written.** `src/_data/rotationDates.json` holds 82 A/B meetings. `.eleventy.js` builds a `teachingBlocks` collection; a page's position in it is its meeting number, offset by `FIRST_BLOCK_MEETING = 2` (meeting 1 is Orientation, Aug 6/7). Change that one constant to shift the year. Blocks occupy meetings 2–70; 12 spare for U7.
- **Reusable includes:** `partials/unit-map.njk` (needs `mapUnit`, `mapUnitName` + a `unitSpine.json` entry), `partials/word-bank.njk` (needs `bank`, `bankUnit`, `bankBlock`, `bankReadingUrl`), `partials/unit-schedule.njk` (auto, on unit landings).
- **Classroom links:** all 19 keys in `src/_data/classroomLinks.json` are still `""`, so every submit button renders "link posted in August". Filling that file turns them all live at once.
- **Visual system:** `--spine-*` / `--deep-*` tokens per rhythm family; the learning panel is the only full-bordered element on a block page; `--ai-orange` is reserved for AI touchpoints only.

## Open items, highest value first

1. **Named AI tools outside Unit 0 — ~25 references.** Addendum 26 has the full table. Priority: `student-hub/ai-documentation-template.njk` and `foundations/ai-documentation-protocol.njk` (students copy those examples), then `foundations/how-to-use-ai-partners.njk` (its routing table still tells students to reach for a general AI by name, which contradicts the single-platform rule), then `foundations/eal/vocabulary.njk`. Most are worked examples, not find-and-replace — the AI Doc field *requires* naming a tool, so rewrite them as examples using class-platform partners.
   - **Deliberately keep:** `units/unit-0/unu-report-key-points.njk` (a cited UNU finding and a direct quotation of the UN's own AI disclosure) and the exemplars' AI Documentation entries (naming tool + version is what the protocol requires).
2. **Em dashes outside units** — Foundations (~480), AI Partners, Reference, Student Hub were never swept. Units and the Lovelock work are clean.
3. **Unit 7 does not exist yet.** 12 meetings of headroom. Adding it: block pages following the Concepts grammar, a `u7` entry in `unitSpine.json` + a stub map page, and a unit landing.
4. **Three handouts are now promised by name on the site** and must exist in Classroom under exactly these names before Block 4: **OPVL Peer-Check Card**, **Defense Observation Guide**, **Dossier Assembly Checklist**.
5. **Lovelock interactive reader** is linked, not embedded — `script.google.com` sends `frame-ancestors 'self'` and its sign-in sends `X-Frame-Options: DENY`, so an iframe renders "refused to connect". Do not reintroduce one. Confirm the link works on a student account before teaching Block 2.
6. **Translation verification:** all 180 rows in `src/_data/lovelockGlossary.json` are unverified. Adding `verifiedBy` / `verifiedDate` per language flips the chip and drops the warning tint on both the reading companion and the word bank. No code change needed.
7. **Classroom artifact:** the standalone reading companion is a private claude.ai artifact at `https://claude.ai/code/artifact/3489efd6-96ad-4f93-8a85-c87f082767d7`. It embeds a **snapshot** of the glossary, so it must be republished by hand if that JSON changes.

## Recent history (this session)

Site-wide language pass (em dashes, "Block N: Title" labels, block-schedule wording) → real calendar dates → unit map dashboard → Lovelock reading companion + word bank → Concepts rewrite with build gate → Unit 0 consistency pass → Foundations alignment → course-wide cap removal.

## How to work here

Build after every change. Verify against the *rendered* output in `_site` or live, not just source — several checks in this session gave false negatives because HTML entities (`8&ndash;10`) and `.rubric-link-pending` spans don't match naive greps. When a task's stated scope turns out smaller than the problem (this happened twice: the AI-doc rule lived on 16 pages, not 2), fix the whole thing and record the extension in BUILD_PROGRESS rather than leaving the site self-contradictory.
