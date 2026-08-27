/* Reading-page interactivity: tap-to-define term cards, the optional language
   selector, and the step carousel. Extracted from lovelock-1965.njk so more than
   one deck can live on a page.

   Nothing here runs on a timer and nothing auto-advances: this component is for
   students who already find reading hard, and a slide that moves on its own is
   worse than no slides at all. */

/* Term chips. One card is open at a time, and it moves in the DOM to sit next to
   whichever chip opened it. */
(function () {
  var cards = document.querySelector(".term-cards");
  if (!cards) { return; }

  var openButton = null;
  function closeCard() {
    if (!openButton) { return; }
    var card = document.getElementById("term-" + openButton.getAttribute("data-term"));
    if (card) { card.hidden = true; cards.appendChild(card); }
    openButton.setAttribute("aria-expanded", "false");
    openButton = null;
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("button.term");
    if (!button) {
      if (!event.target.closest(".term-card")) { closeCard(); }
      return;
    }
    var wasOpen = button === openButton;
    closeCard();
    if (wasOpen) { return; }
    var card = document.getElementById("term-" + button.getAttribute("data-term"));
    if (!card) { return; }
    var host = button.closest("li") || button.parentNode;
    host.parentNode.insertBefore(card, host.nextSibling);
    card.hidden = false;
    button.setAttribute("aria-expanded", "true");
    openButton = button;
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { closeCard(); }
  });
})();

/* The language selector only exists on a page whose glossary declares languages.
   Everywhere else this is a no-op rather than an empty select. */
(function () {
  var LANG_KEY = "ees-reading-lang";
  var langSelect = document.getElementById("lang");
  if (!langSelect) { return; }

  function applyLanguage(code) {
    document.querySelectorAll(".tc-translation").forEach(function (row) {
      row.hidden = code === "none" || row.getAttribute("data-lang") !== code;
    });
  }

  var stored = null;
  try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (stored) { langSelect.value = stored; }
  applyLanguage(langSelect.value);

  langSelect.addEventListener("change", function () {
    applyLanguage(langSelect.value);
    try { localStorage.setItem(LANG_KEY, langSelect.value); } catch (e) {}
  });
})();

/* Every [data-carousel] on the page gets its own closure, so its index, its
   expanded state and its live region belong to it alone. A shared index is the
   bug this whole extraction exists to avoid: Next on deck two would advance
   deck three. */
(function () {
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".slide"));
    if (slides.length < 2) { return; }

    var nav = root.querySelector(".slide-nav");
    var prevBtn = root.querySelector(".slide-prev");
    var nextBtn = root.querySelector(".slide-next");
    var position = root.querySelector(".slide-pos");
    var live = root.querySelector(".slides-live");
    var showAllRow = root.querySelector(".slide-showall-row");
    var showAll = root.querySelector(".slide-showall");
    var index = 0;
    var expanded = false;

    function render(moveFocus) {
      slides.forEach(function (slide, i) {
        slide.hidden = !expanded && i !== index;
      });
      nav.hidden = expanded;
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;
      position.textContent = "Step " + (index + 1) + " of " + slides.length;
      if (expanded) { return; }
      var title = slides[index].querySelector(".slide-title");
      live.textContent = "Step " + (index + 1) + " of " + slides.length + ", " + title.textContent;
      if (moveFocus) { title.focus(); }
    }

    function go(to, moveFocus) {
      if (to < 0 || to >= slides.length || expanded) { return; }
      index = to;
      render(moveFocus);
    }

    prevBtn.addEventListener("click", function () { go(index - 1, true); });
    nextBtn.addEventListener("click", function () { go(index + 1, true); });

    showAll.addEventListener("click", function () {
      expanded = !expanded;
      showAll.setAttribute("aria-pressed", String(expanded));
      showAll.textContent = expanded ? "Show one step at a time" : "Show all steps";
      render(false);
      live.textContent = expanded
        ? "Showing all " + slides.length + " steps."
        : "Showing one step at a time. Step " + (index + 1) + " of " + slides.length + ".";
    });

    /* Scoped to the carousel, so arrow keys are only captured when focus is inside it. */
    root.addEventListener("keydown", function (event) {
      if (expanded) { return; }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(index - 1, true); }
      else if (event.key === "ArrowRight") { event.preventDefault(); go(index + 1, true); }
    });

    /* Swipe is a bonus on top of the buttons, not a replacement for them. */
    var touchX = null;
    root.addEventListener("touchstart", function (e) {
      touchX = e.changedTouches[0].clientX;
    }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (touchX === null) { return; }
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) < 45) { return; }
      go(dx < 0 ? index + 1 : index - 1, false);
    }, { passive: true });

    showAllRow.hidden = false;
    render(false);
  });
})();
