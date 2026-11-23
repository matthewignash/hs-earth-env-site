/* Date-aware parts of the site: the Coming Up strip (every page), the Home
   "next block" card, and This Week. All three read dates the build computed.
   Without this script the strip stays hidden, the Home card keeps its link to
   This Week, and This Week shows every week of the year. */
(function () {
  var now = new Date();
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var iso = function (d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
  var today = iso(now);
  var daysUntil = function (date) {
    return Math.round((new Date(date + "T00:00:00") - new Date(today + "T00:00:00")) / 86400000);
  };
  var inDays = function (date) {
    var n = daysUntil(date);
    return n === 0 ? "today" : n === 1 ? "in 1 day" : "in " + n + " days";
  };
  var read = function (id) {
    var el = document.getElementById(id);
    return el ? JSON.parse(el.textContent) : [];
  };
  var make = function (tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };
  var link = function (href, text, className) {
    var a = make("a", className, text);
    a.href = href;
    return a;
  };
  var upcoming = function (list) { return list.filter(function (e) { return e.date >= today; }); };

  function comingUp() {
    var strip = document.querySelector(".coming-up");
    var next = upcoming(read("milestone-data")).slice(0, 3);
    if (!strip || !next.length) return;
    var list = strip.querySelector("ul");
    next.forEach(function (m) {
      var item = make("li");
      item.append(make("span", "coming-up-date", m.label), link(m.url, m.text), make("span", "coming-up-who", m.who), make("span", "coming-up-in", inDays(m.date)));
      list.append(item);
    });
    strip.hidden = false;
  }

  /* The next meeting for each group that has one within a week of the first:
     Mr. Matt's class and Ms. Jayanthi's classes in Units 2 and 3, the A and B
     rotations elsewhere. On a class day the group's following class shows too,
     so students can see ahead. A group whose next class is weeks away is left out. */
  function nextBlock() {
    var body = document.getElementById("next-block-body");
    var seen = {};
    var ahead = upcoming(read("schedule-data"));
    var next = ahead.filter(function (e) {
      if (seen[e.who] === "done" || daysUntil(e.date) - daysUntil(ahead[0].date) > 7) return false;
      seen[e.who] = !seen[e.who] && daysUntil(e.date) === 0 ? "today" : "done";
      return true;
    });
    if (!body || !next.length) return;
    body.replaceChildren.apply(body, next.map(nextBlockRow));
  }
  function nextBlockRow(e) {
    var row = make("div", "next-block-row");
    var title = make("div", "next-block-title");
    title.append(e.url ? link(e.url, e.title) : document.createTextNode(e.title));
    row.append(make("div", "week-when", e.label + " · " + e.who + " · " + inDays(e.date)), title);
    if (e.pages) {
      var pages = make("div", "week-pages", "Pages: ");
      e.pages.forEach(function (p, i) { pages.append(i ? " · " : "", link(p.url, p.label)); });
      row.append(pages);
    }
    if (e.due) row.append(make("div", "week-due", e.due));
    return row;
  }

  function thisWeek() {
    var weeks = Array.prototype.slice.call(document.querySelectorAll(".week"));
    var controls = document.querySelector(".week-controls");
    if (!weeks.length || !controls) return;
    var monday = new Date(now);
    monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    var current = weeks.filter(function (w) { return w.dataset.start >= iso(monday); }).slice(0, 2);
    current.forEach(function (w, i) {
      var isThisWeek = w.dataset.start === iso(monday);
      w.querySelector(".week-tag").textContent = isThisWeek ? "This week · " : i === 0 ? "Next class week · " : "After that · ";
    });
    var toggle = controls.querySelector(".week-toggle");
    var apply = function (all) {
      weeks.forEach(function (w) { w.hidden = !all && current.indexOf(w) < 0; });
      toggle.setAttribute("aria-pressed", all ? "true" : "false");
      toggle.textContent = all ? "Show this week and next" : "Show the whole year";
    };
    toggle.addEventListener("click", function () { apply(toggle.getAttribute("aria-pressed") !== "true"); });
    controls.hidden = false;
    apply(false);
  }

  comingUp();
  nextBlock();
  thisWeek();
})();
