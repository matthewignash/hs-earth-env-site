/* Tabs for /units/unit-3/event-research/. Without JavaScript the tab row stays hidden,
   every panel shows in order and the jump list links to each one. With it, one panel
   shows at a time and the address keeps the open tab (#bhuj-2001), so a link can open
   a specific event. Arrow keys, Home and End move between tabs. */
(function () {
  var root = document.querySelector('[data-event-tabs]');
  if (!root) return;
  var list = root.querySelector('[role="tablist"]');
  var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
  var jump = document.querySelector('[data-event-jump]');

  function select(i, focus, remember) {
    tabs.forEach(function (t, j) {
      var on = j === i;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
    });
    if (focus) tabs[i].focus();
    if (remember && window.history && history.replaceState) history.replaceState(null, '', '#' + panels[i].id);
  }

  function fromHash() {
    var id = window.location.hash.slice(1);
    for (var j = 0; j < panels.length; j++) if (panels[j].id === id) return j;
    return -1;
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i, false, true); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(n, true, true); }
    });
  });

  /* In-page links to a panel (the table on "How to choose") switch tabs instead of scrolling to a hidden panel. */
  root.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    for (var j = 0; j < panels.length; j++) {
      if (panels[j].id === id) { e.preventDefault(); select(j, true, true); list.scrollIntoView({ block: 'nearest' }); return; }
    }
  });
  window.addEventListener('hashchange', function () { var j = fromHash(); if (j >= 0) select(j, false, false); });

  list.hidden = false;
  if (jump) jump.hidden = true;
  root.classList.add('is-tabbed');
  var start = fromHash();
  select(start >= 0 ? start : 0, false, false);
})();
