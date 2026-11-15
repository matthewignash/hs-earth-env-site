// The course as a dated list: one entry per class meeting, for This Week, the
// Home "next block" card and the Coming Up strip. Dates come from
// rotationDates.json (through the slips, for ordinary blocks) and asRun.json
// (for the Units 2 and 3 sessions). Nothing here is typed.
const { sessions } = require("../src/_data/asRun.json");
const { days } = require("../src/_data/rotationDates.json");

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const utc = (iso) => new Date(iso + "T00:00:00Z");
const shortDate = (d) => MONTHS[d.getUTCMonth()] + " " + d.getUTCDate();
const byDate = (a, b) => a.date.localeCompare(b.date);

// An ordinary block meets twice: once on the A rotation, once on the B rotation.
const blockEntries = (row, day) => [["a", "A rotation"], ["b", "B rotation"]]
  .filter(([column]) => day[column])
  .map(([column, who]) => ({
    date: day[column], label: day[column + "Label"], who,
    title: "Unit " + row.unit + " · " + row.label + ": " + row.title, url: row.url,
    milestone: row.assessment ? { label: row.assessment, url: row.url } : null
  }));

const sessionPages = (s) => [...(s.u2 ? s.u2.pages : []), ...(s.u3 ? s.u3.pages : [])];
const sessionDue = (s) => [s.u2, s.u3].filter(Boolean).map((u) => u.due).join(". ");

// An as-run session is dated for Mr. Matt's class, and for Ms. Jayanthi's
// classes once their meeting numbers are filled in.
const sessionEntries = () => sessions.flatMap((s) =>
  [[s.n, "b", "Mr. Matt's class"], [s.jayanthiA, "a", "Ms. Jayanthi's classes"], [s.jayanthiB, "b", "Ms. Jayanthi's classes"]]
    .map(([n, column, who]) => [days.find((d) => d.n === n) || {}, column, who])
    .filter(([day, column]) => day[column])
    .map(([day, column, who]) => ({
      date: day[column], label: day[column + "Label"], who,
      title: s.inClass, pages: sessionPages(s), due: sessionDue(s), milestone: s.milestone || null
    })));

const entries = (blockRows, dayFor) => blockRows
  .flatMap((row) => blockEntries(row, dayFor(row.meeting)))
  .concat(sessionEntries())
  .sort(byDate);

// Monday-to-Friday weeks that hold at least one meeting.
const weeks = (list) => {
  const found = new Map();
  list.forEach((entry) => {
    const monday = utc(entry.date);
    monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() + 6) % 7));
    const friday = new Date(monday); friday.setUTCDate(monday.getUTCDate() + 4);
    const start = monday.toISOString().slice(0, 10);
    if (!found.has(start)) found.set(start, { start, startLabel: shortDate(monday), endLabel: shortDate(friday), entries: [] });
    found.get(start).entries.push(entry);
  });
  return [...found.values()];
};

const milestones = (list) => list.filter((e) => e.milestone)
  .map((e) => ({ date: e.date, label: e.label, who: e.who, text: e.milestone.label, url: e.milestone.url }));

module.exports = { entries, weeks, milestones };
