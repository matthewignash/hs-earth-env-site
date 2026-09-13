/* Shows only the instructions for the student's own class. Without JavaScript the
   switcher stays hidden and every class's block shows, each labelled with its class. */
(function () {
  var switcher = document.querySelector('[data-section-switch]');
  if (!switcher) return;
  var pills = Array.prototype.slice.call(switcher.querySelectorAll('[data-pick]'));
  var targets = document.querySelectorAll('[data-section], [data-platform]');
  var neutral = document.querySelectorAll('.section-neutral');

  function stored() { try { return localStorage.getItem('section'); } catch (e) { return null; } }

  function show(id) {
    var pill = pills.filter(function (p) { return p.dataset.pick === id; })[0];
    var platform = pill && pill.dataset.pillPlatform;
    pills.forEach(function (p) { p.setAttribute('aria-pressed', p === pill ? 'true' : 'false'); });
    Array.prototype.forEach.call(targets, function (el) {
      el.hidden = !pill || (el.dataset.section !== id && el.dataset.platform !== platform);
    });
    Array.prototype.forEach.call(neutral, function (el) { el.hidden = !!pill; });
  }

  pills.forEach(function (p) {
    p.addEventListener('click', function () {
      try { localStorage.setItem('section', p.dataset.pick); } catch (e) {}
      show(p.dataset.pick);
    });
  });
  switcher.hidden = false;
  show(stored());
})();
