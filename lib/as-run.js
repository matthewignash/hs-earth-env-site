// As-run sessions: the class meetings Units 2 and 3 really ran on in Nov-Dec 2026.
// Each session names a rotation meeting; dates are read from rotationDates.json,
// never typed. Mr. Matt's class reads the b column with no slips applied.
const { sessions } = require("../src/_data/asRun.json");
const { days } = require("../src/_data/rotationDates.json");

const session = (code) => sessions.find((s) => s.code === code) || {};
const label = (n, column) => (days.find((d) => d.n === n) || {})[column + "Label"] || "";

const sessionDate = (code) => label(session(code).n, "b") || "date TBC";

const sessionLabel = (code) => {
  const s = session(code);
  const jayanthi = [label(s.jayanthiA, "a"), label(s.jayanthiB, "b")].filter(Boolean);
  const theirs = jayanthi.length === 2 ? jayanthi.join(" and ") : "dates in Google Classroom";
  return "Mr. Matt's class: " + sessionDate(code) + " · Ms. Jayanthi's classes: " + theirs;
};

const sessionsFor = (unit) => sessions.filter((s) => s["u" + unit]);

const sessionSpan = (unit) => {
  const mine = sessionsFor(unit);
  if (!mine.length) return null;
  return sessionDate(mine[0].code) + " – " + sessionDate(mine.at(-1).code) + " (Mr. Matt's class)";
};

module.exports = { sessionDate, sessionLabel, sessionsFor, sessionSpan };
