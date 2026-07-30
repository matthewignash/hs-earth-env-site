#!/usr/bin/env node
/**
 * Checks that every Concepts section's instruction line is true of its cards.
 *
 * The instruction line describes ONLY the cards inside .entry-grid. Cards in the
 * "Everyone does this" group (.entry-required) are never part of the choice, which
 * is what makes the line checkable at all.
 *
 * Run as part of `npm run build`, so wording that contradicts its cards cannot ship.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src/units";
const STEMS = ["Pick one", "Start with the ", "Use all of these", "Keep these open", "Keep this open"];
/**
 * A placeholder card may still be a real scheduled activity: the tag means the
 * handout or recording is unbuilt, not that the lesson is imaginary. What you
 * genuinely cannot anchor a day on is a card with no plan behind it, so the test
 * is whether the meta describes logistics rather than an asset still to be made.
 */
const UNBUILT_META = /^\s*$|to be (recorded|set up|made|built|created)|tbd|coming soon/i;
/** Counts are lowercase ("pick one of the three"); a capitalised number word is
 *  part of a title, like the "Four Planets, No Labels" gallery. */
const NUMBER_WORDS = /\b(one|two|three|four|five|both)\b/;
const DO_WORDS = /\b(paths?|end the same)\b/i;
const ALWAYS_REQUIRED_TITLES = ["Vocabulary support", "Meet your new partner"];
const REFERENCE_HREFS = ["/foundations/eal/", "/foundations/opvl-framework/", "/foundations/the-rubric/"];

const errors = [];
const warnings = [];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

/** Cards are <div|a class="entry-card …"> … up to the next card or container end. */
function parseCards(html) {
  const cards = [];
  const re = /<(div|a)\s+class="([^"]*\bentry-card\b[^"]*)"[\s\S]*?(?=<(?:div|a)\s+class="[^"]*\bentry-card\b|$)/g;
  for (const match of html.matchAll(re)) {
    const body = match[0];
    const title = (body.match(/class="entry-title">([^<]*)</) || [, ""])[1].trim();
    const href = (body.match(/href="([^"]*)"/) || [, ""])[1];
    cards.push({
      classes: match[2],
      title,
      href,
      live: /\blive-activity\b/.test(match[2]),
      placeholder: /\bplaceholder\b/.test(match[2]),
      meta: (body.match(/class="entry-meta">([^<]*)</) || [, ""])[1].trim(),
      body
    });
  }
  return cards;
}

function checkFile(file) {
  const src = readFileSync(file, "utf8");
  const section = src.match(/<section class="block-section concepts">([\s\S]*?)<\/section>/);
  if (!section) return; // stubs and non-block pages
  const region = section[1];
  const id = file.replace(/^src\/units\//, "").replace(/\.njk$/, "");
  const fail = (code, msg) => errors.push(`${id}  [${code}] ${msg}`);
  const warn = (code, msg) => warnings.push(`${id}  [${code}] ${msg}`);

  // C1: exactly one instruction line, opening with a known stem.
  const subs = [...region.matchAll(/<p class="sub">([\s\S]*?)<\/p>/g)].map((m) => m[1].trim());
  if (subs.length !== 1) return fail("C1", `expected 1 instruction line, found ${subs.length}`);
  const sub = subs[0];
  const plain = sub.replace(/<[^>]+>/g, "");
  const stem = STEMS.find((s) => plain.startsWith(s));
  if (!stem) return fail("C1", `line does not open with a known stem: "${plain.slice(0, 60)}"`);

  // Split the choosable grid from the "Everyone does this" group.
  const gridHtml = (region.match(/<div class="entry-grid">([\s\S]*?)<\/div>\s*(?=<div class="entry-required|<\/section>|$)/) || [, region])[1];
  const requiredHtml = (region.match(/<div class="entry-required">([\s\S]*)$/) || [, ""])[1];
  const grid = parseCards(gridHtml);
  const required = parseCards(requiredHtml);

  // C2: a whole-class activity is never one of several things to pick between.
  if (stem === "Pick one" && grid.some((c) => c.live)) {
    fail("C2", `"Pick one" but the grid holds a live-activity card (${grid.filter((c) => c.live).map((c) => c.title).join(", ")})`);
  }

  // C3/C4: the named anchor must exist, and must not be a bare TBD.
  if (stem === "Start with the ") {
    const named = (plain.match(/^Start with the (\w+)/) || [, ""])[1];
    const card = grid.find((c) => c.title.toLowerCase().startsWith(named.toLowerCase()));
    if (!card) {
      fail("C3", `"Start with the ${named}" but no grid card is titled "${named}"`);
    } else if (card.placeholder && !card.live && UNBUILT_META.test(card.meta)) {
      fail("C4", `anchors on "${named}", a placeholder with no logistics in its meta ("${card.meta}")`);
    }
  }

  // C5: required-by-nature cards must not sit in the choosable grid.
  for (const card of grid) {
    if (ALWAYS_REQUIRED_TITLES.includes(card.title)) {
      fail("C5", `"${card.title}" is always required and must move to the "Everyone does this" group`);
    } else if (REFERENCE_HREFS.some((h) => card.href.startsWith(h))) {
      warn("C5?", `"${card.title}" points at a durable reference (${card.href}); check consult-vs-do`);
    }
  }

  // C6: count-free (Addendum 5 still stands). The stem itself is exempt: "Pick one"
  // names the action, not a card count.
  const clause = plain.slice(stem.length);
  if (NUMBER_WORDS.test(clause)) fail("C6", `instruction line uses a number word: "${clause.match(NUMBER_WORDS)[0]}"`);

  // C7: house style.
  if (/—/.test(region)) fail("C7", "em dash in the Concepts section");

  // C9: Concepts must not borrow the Do section's vocabulary.
  if (DO_WORDS.test(plain)) fail("C9", `instruction line uses Do's wording: "${plain.match(DO_WORDS)[0]}"`);

  if (grid.length === 0) warn("info", "no choosable cards left in the grid");
  if (required.length) warn("info", `${required.length} card(s) in the required group`);
}

const files = walk(ROOT).filter((f) => f.endsWith(".njk"));
files.forEach(checkFile);

const sections = files.filter((f) => readFileSync(f, "utf8").includes('block-section concepts')).length;
console.log(`check-concepts: ${sections} Concepts sections checked`);
if (warnings.length && process.env.CONCEPTS_VERBOSE) {
  console.log("\nWarnings (judgement needed, not blocking):");
  warnings.forEach((w) => console.log("  " + w));
}
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n`);
  errors.forEach((e) => console.error("  " + e));
  console.error("\nEach instruction line must be true of the cards left in its grid.");
  process.exit(1);
}
console.log("check-concepts: all instruction lines match their cards");
