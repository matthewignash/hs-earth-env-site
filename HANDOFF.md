# Handoff — hs-earth-env-site (session ending 2026-08-07)

Paste this into a new chat to pick up where we left off. Everything below is committed and pushed unless it says otherwise.

## What this project is

Eleventy static site for HS Earth & Environmental Science at AISC Chennai, AY 2026-27. `npm run build` → `_site`, auto-deploys to Vercel on push to `main` (production: **https://hs-earth-env-site.vercel.app**). 156 pages. Repo `matthewignash/hs-earth-env-site`, public.

**Read first:** `BUILD_PROGRESS.md` (living log; addenda 3–38, newest at top) and `CLAUDE.md` (charter, do not edit). Note CLAUDE.md §5/§6 are stale on emoji and section tags.

**Two repos, two accounts.** The site repo pushes under the **personal** account `matthewignash`: `gh auth switch --user matthewignash`, push, then switch back to `matthewignash-unified`. The course documents live in the **home repo** at `/Users/imatthew`, which uses `matthewignash-unified` and **has no remote configured**, so those commits are local only.

## Standing conventions (enforce these)

- **No em dashes** in student-facing content. Use colon, comma, semicolon, period, parentheses. Preserve en dashes in numeric ranges.
- **No "low stakes" / "low-stakes"** anywhere. Zero remain.
- **One AI platform per class** (Flint or BoodleBox). Never instruct students to use Gemini, ChatGPT, NotebookLM, or Claude by name. Say "the class AI platform".
- **Teacher names: "Ms. Jayanthi/Mr. Matt"**, always both. A student has one teacher or the other, so a bare "Mr. Matt" reads as though Jayanthi's sections do not exist. The `welcome.njk` signature reads "Mr. Matt and Ms. Jayanthi"; the ordering difference is deliberate. **"Mr. Ignash" was renamed site-wide on 2026-08-07 (122 occurrences). Do not reintroduce it.** Watch for first-person voice too ("while I look at it"), which a name grep will not catch.
- **Block scheduling:** classes meet every other day. Never "tomorrow"/"yesterday"/"tonight" — use "next class", "last class", or name the block.
- **Concepts sections** are headed "Before you start the work" and their instruction line must open with one of four stems: `Pick one` / `Start with the X` / `Use all of these` / `Keep these open`. **`npm run build` runs `scripts/check-concepts.mjs` first and fails the build if a line contradicts its cards.** That gate is the main safety net in this repo.
- **No strand caps anywhere.**
- **Dates are computed, never typed.** `rotationDates.json` + the `teachingBlocks` collection. If you find yourself typing a date into a lesson file, stop.

## Architecture worth knowing

- **Two notebooks.** Paper **Field Notebook** (handed out at the start of class) takes bell ringers and sketches. **Class Notebook** (Google Doc) takes Power Notes and the entry header that indexes the year. Every block gets a typed entry header in the Doc even when the work was on paper, with a line saying which paper pages belong to it — that is what keeps the index complete. Setup page: `/foundations/class-notebook/` ("Your Two Notebooks"). Paper, typed and audio are three body formats for the same rule.
- **The notebook cue** renders on 66 block pages via `partials/notebook-cue.njk`, generating `A: Aug 14 | U0 B3 | Title` from `rotationDates` + the block's position. `entryDates` filter in `.eleventy.js`. Entry title is the page `title` unless the page sets `notebookEntry` (20 blocks do). **Meeting 82 has no B date, so U7's last block will render an A line only; the guard exists and is tested.**
- **Reflect** is a handoff, not a form. Block pages carry a fixed lede, a callout pointing at one persistent Google Classroom Material, and a verbatim closing note. **The Reflection Tool's URL is not in this repo and must not be.** Fill `"reflection-journal"` in `classroomLinks.json` and all 61 pages go live at once.
- **Reusable includes:** `partials/unit-map.njk`, `word-bank.njk`, `unit-schedule.njk`, `submit-link.njk`, `reflect.njk`, `notebook-cue.njk`, `video-card.njk`.
- **Callout variants** in `styles.css`: `warn`, `good`, `exemplar-note`, `sketch-first`, `factstorm`, `activity` (one-off task block), and the trio `task` / `extend` / `support` (concepts / show / do) for "one task, an extension, a support".
- **Visual system:** `--spine-*` / `--deep-*` tokens per rhythm family; `--ai-orange` is reserved for AI touchpoints only.

## Things that will be built wrong if not insisted on

1. **The Lovelock carousel degrades without JavaScript.** All nine slides ship in the DOM; JS adds `hidden` to eight. The lazy rebuild renders one slide and swaps its contents in JS, which looks identical and **fails completely when a script does not load on a school network**. Do not swap it for a CSS-only `.is-active` rule. The nav and the "Show all steps" toggle start `hidden` and JS unhides them, so no-JS shows a clean linear list.
2. **The two-texts page must never say both texts were AI-written.** `/units/unit-0/readings/two-texts/`. The page now makes **no claim about AI use at all**: neither text card carries a statement, and the two statements (Text A's absence, Text B's disclosure) sit behind a closed `<details>` panel that mirrors page 3 of the printed handout. The reveal still happens in class and is never on the page. No spoiler in copy, no teacher note, **no HTML comment**. The two cards share one CSS class and now differ in nothing at all, so **do not add a Text A or Text B variant and do not move the AI-use line back under Text B** — printing it there settles Text B before students judge it, which is the defect Addendum 40 fixed.
3. **Video lightbox teardown must not use the dialog `close` event.** WebKit never fires it, so Safari and iPad kept audio playing after the overlay closed. Every close path calls `closeLightbox()` directly.
4. **Block 3's "finish early" route is a second run of the identical prompt**, not a comparison of two models. That is what makes it work on Flint as well as BoodleBox and keeps the block platform-symmetric for Engage 3 and Manage 1.

## What happened this session (addenda 28–38)

Reflect handoff to Classroom · Class Notebook standard ported from G9 Bio · orientation video card + lightbox fix · AILit coverage pass (Shape 2 went 0→1, Manage 3 1→2) · orientation creed and norms on chart paper · Block 1 bell ringer became the two-texts handout · two notebooks · Mr. Ignash → Mr. Matt · Lovelock nine-slide carousel replacing the close-reading path · two-texts page · Blocks 2 and 3 stop pretending to be choice boards.

## Open items, highest value first

1. **Before 10/11 August, outside this repo:**
   - `_Upload to Drive — Unit 0 (student-facing)/POSTING CHECKLIST.md` lists Block 1 as `u0-b1` with **no attachment from folder 3**. The Block 1 bell ringer is built entirely around the printed *AI Disclosure — Two Texts* handout. **Without it posted, the block does not work.**
   - **Four student-facing Drive documents still say Ignash**, six occurrences: the **Syllabus 2026-27**, **Welcome to the Year**, the **U0 Unit Roadmap (for Google Classroom)**, and the **U0 Source Dossier Annotated Exemplar Set**. The site and the paperwork now disagree, and the syllabus is the one families read.
   - **The reflection seed is now correct but still needs pasting.** Fixed in Addendum 40: the row moved to Block 1 as `ees-u0-b1-2`, the `signal` field was dropped because page 4 of the handout now asks it, and `lost` and `line` are the only two fields left. **Those two questions are no longer on the handout at all**, so if the prompt is not pasted into the live tool before 10/11 August the block loses them entirely. `ees-u0-b3` is untouched and still anchors the Block 7 callback.
   - **Block 1 now needs two sheets printed, not one.** `POSTING CHECKLIST.md` still lists Block 1 with no attachment from folder 3, and folder 3 now holds three files: the full packet plus *sheet 1* and *sheet 2*. **Sheet 2 is handed out at the cue, not with sheet 1.** Posting the full packet to students would hand them the reveal on page 4.
2. **`classroomLinks.json` is entirely empty**, 58 keys including `reflection-journal`. Every submit button and the reflection callout render their "link posted in August" fallback until filled.
3. **Named AI tools outside Unit 0 — ~25 references.** Addendum 26 has the table. Priority: `student-hub/ai-documentation-template.njk`, `foundations/ai-documentation-protocol.njk`, then `foundations/how-to-use-ai-partners.njk`, then `foundations/eal/vocabulary.njk`. Most are worked examples, not find-and-replace.
4. **Em dashes outside units** — Foundations (~480), AI Partners, Reference, Student Hub were never swept. Units and the Lovelock work are clean.
5. **Unit 7 does not exist.** 12 meetings of headroom (71–82). Needs block pages following the Concepts grammar, a `u7` entry in `unitSpine.json` + stub map, and a unit landing.
6. **Three handouts are promised by name** and must exist in Classroom before Block 4: **OPVL Peer-Check Card**, **Defense Observation Guide**, **Dossier Assembly Checklist**.
7. **Lovelock interactive reader** is linked, not embedded: `script.google.com` sends `frame-ancestors 'self'` and its sign-in sends `X-Frame-Options: DENY`. Do not reintroduce an iframe. Confirm the link works on a student account before Block 2.
8. **Translation verification:** all 180 rows in `lovelockGlossary.json` are unverified. Adding `verifiedBy` / `verifiedDate` per language flips the chip. No code change needed.
9. **Catch-up has no route** for the Reflection Tool. One persistent Classroom link always lands a student on the current block, so someone who missed U1 B7 cannot reach that prompt. **The fix is tool-side**, a "blocks you have not answered yet" list on the student Today view.
10. **`path` is now a data-only flag** in `lovelockGlossary.json`. It still means "sits in the paragraphs that carry the argument", but no page calls it a close-reading path any more; that section was replaced by the carousel.
11. **Block 5's Do row in the Co-Teacher Edition says "two-model compare (BoodleBox shines)"**, which is platform-asymmetric in the way C31 fixed at Block 3. Worth a look against the pilot's symmetry claim.

## How to work here

Build after every change. **Verify against rendered output, not source** — several checks this session gave false negatives because HTML entities and `.rubric-link-pending` spans do not match naive greps, and because a regex like `<div class="slide` also matches `slide-list` and `slide-nav`. **Measure things that matter rather than reading the CSS**: the A4 print fit, the identical text cards, and the no-JS carousel were all checked by measurement and two of them failed the first time.

When a task's stated scope turns out smaller than the problem, fix the whole thing and record the extension in BUILD_PROGRESS rather than leaving the site self-contradictory. That happened repeatedly this session: deleting a choice path orphaned three cross-references, renaming a notebook touched 20 files, and adding a second notebook rewrote the A4 print target.

**File-size limits** (CLAUDE.md): function body 25 lines, file 300 lines, nesting depth 3. `block-page.css` and `reading-page.css` exceed 300 by design; split new big features into their own stylesheet.
