// EAL key-term definitions for tap-to-define panels (partials/key-terms.njk).
// List-term defs + stems are verbatim from the U1 EAL pre-teach table
// (foundations/eal/u1.njk, minus the print visual cues). Non-list terms are
// defined by the readings themselves; those defs quote the defining sentence.
// vocabAnchor = heading id on /foundations/eal/vocabulary/ (5-language table).
module.exports = {
  "habitability": {
    term: "Habitability",
    def: "The capacity of a planet or environment to support life as we know it.",
    stem: "A planet is habitable if it has ___.",
    vocabAnchor: "habitability",
    eal: "/foundations/eal/u1/"
  },
  "habitable-zone": {
    term: "Habitable zone (HZ)",
    def: "The range of distances from a star where a planet's surface temperature could allow liquid water.",
    stem: "This planet sits inside / outside the habitable zone because ___.",
    vocabAnchor: "habitable-zone-goldilocks-zone",
    eal: "/foundations/eal/u1/"
  },
  "astronomical-unit": {
    term: "Astronomical unit (AU)",
    def: "The average distance from Earth to the Sun, about 150 million kilometers. Used as a ruler for our solar system.",
    stem: "This planet orbits at ___ AU from its star.",
    vocabAnchor: "astronomical-unit-au",
    eal: "/foundations/eal/u1/"
  },
  "light-year": {
    term: "Light-year",
    def: "The distance light travels in one year, about 9.5 trillion kilometers. Used to measure distances between stars.",
    stem: "This star is ___ light-years from Earth, which means we see it as it was ___ years ago.",
    vocabAnchor: "light-year",
    eal: "/foundations/eal/u1/"
  },
  "exoplanet": {
    term: "Exoplanet",
    def: "A planet that orbits a star other than our Sun.",
    stem: "The exoplanet I am studying is ___.",
    vocabAnchor: "exoplanet",
    eal: "/foundations/eal/u1/"
  },
  "transit": {
    term: "Transit",
    def: "When a planet passes in front of its star from our viewpoint, causing the star's light to dim slightly. The main way we detect exoplanets.",
    stem: "We detected this exoplanet by observing a transit, which means ___.",
    vocabAnchor: "transit-detection",
    eal: "/foundations/eal/u1/"
  },
  "transit-method": {
    term: "Transit method",
    def: "Detecting a planet by watching its star dim slightly when the planet passes in front of it from our viewpoint. The main way we detect exoplanets.",
    stem: "We detected this exoplanet by observing a transit, which means ___.",
    vocabAnchor: "transit-detection",
    eal: "/foundations/eal/u1/"
  },
  "atmosphere": {
    term: "Atmosphere",
    def: "The layer of gases surrounding a planet, held by gravity. Determines temperature, weather, and protection from radiation.",
    stem: "This planet's atmosphere is mostly ___, which affects ___.",
    vocabAnchor: "atmosphere",
    eal: "/foundations/eal/u1/"
  },
  "magnetic-field": {
    term: "Magnetic field",
    def: "An invisible region around a planet that deflects charged particles from its star. Protects the atmosphere and any surface life.",
    stem: "This planet has / lacks a strong magnetic field, which means ___.",
    vocabAnchor: "magnetic-field",
    eal: "/foundations/eal/u1/"
  },
  "subsystem": {
    term: "Subsystem",
    def: "A smaller system that is part of a larger system. Earth's subsystems include the atmosphere, hydrosphere, geosphere, and biosphere.",
    stem: "The ___ subsystem affects the ___ subsystem by ___.",
    vocabAnchor: "subsystem-earth",
    eal: "/foundations/eal/u1/"
  },
  "feedback-loop": {
    term: "Feedback loop",
    def: "When the output of a system loops back to change its input. Positive feedback amplifies change; negative feedback dampens it.",
    stem: "This is a positive / negative feedback loop because ___.",
    vocabAnchor: "feedback-loop",
    eal: "/foundations/eal/u1/"
  },
  "greenhouse-effect": {
    term: "Greenhouse effect",
    def: "Atmospheric gases trap heat from the planet's surface, raising temperature. Necessary for habitability on Earth; runaway on Venus.",
    stem: "Without the greenhouse effect, Earth would be ___.",
    vocabAnchor: "greenhouse-effect",
    eal: "/foundations/eal/u1/"
  },
  "systems-thinking": {
    term: "Systems thinking",
    def: "Looking at how parts interact within a whole, instead of analyzing parts in isolation.",
    stem: "Using systems thinking, I can see that ___ connects to ___.",
    vocabAnchor: "systems-thinking",
    eal: "/foundations/eal/u1/"
  },
  "scale": {
    term: "Scale",
    def: "The size or extent of something. In this unit: spatial scale (kilometers to light-years) and time scale (seconds to billions of years).",
    stem: "This process happens at the scale of ___.",
    vocabAnchor: "scale-orders-of-magnitude",
    eal: "/foundations/eal/u1/"
  },
  "equilibrium": {
    term: "Equilibrium",
    def: "A balanced state where competing processes cancel out. Earth's climate equilibrium can shift if inputs change.",
    stem: "This system is in / out of equilibrium because ___.",
    vocabAnchor: "equilibrium",
    eal: "/foundations/eal/u1/"
  },
  "habitability-framework": {
    term: "Habitability framework",
    def: "The set of criteria you will apply to each planet: distance from star, atmosphere, water, magnetic protection, surface conditions, etc.",
    stem: "On the habitability framework, this planet scores ___ on ___.",
    vocabAnchor: "u1",
    eal: "/foundations/eal/u1/"
  },
  "geosphere": {
    term: "Geosphere",
    def: "The rock: crust, mantle, core, the solid planet itself.",
    vocabAnchor: "subsystem-earth",
    eal: "/foundations/eal/u1/"
  },
  "hydrosphere": {
    term: "Hydrosphere",
    def: "All the water, in every form it takes: oceans, rivers, groundwater, ice, the water vapor hanging in the air.",
    vocabAnchor: "subsystem-earth",
    eal: "/foundations/eal/u1/"
  },
  "biosphere": {
    term: "Biosphere",
    def: "Everything alive, from bacteria in deep rock to the blue whale, including you.",
    vocabAnchor: "subsystem-earth",
    eal: "/foundations/eal/u1/"
  },
  "positive-feedback": {
    term: "Positive feedback",
    def: "A loop that amplifies a change — the change feeds itself, like melting ice exposing dark ocean that absorbs more heat. Positive means amplifying, not good.",
    stem: "This is a positive feedback loop because ___.",
    vocabAnchor: "feedback-loop",
    eal: "/foundations/eal/u1/"
  },
  "negative-feedback": {
    term: "Negative feedback",
    def: "A loop that opposes a change — something pushes the system back toward stability, like the carbon-silicate thermostat. Negative means dampening, not bad.",
    stem: "This is a negative feedback loop because ___.",
    vocabAnchor: "feedback-loop",
    eal: "/foundations/eal/u1/"
  },
  "solar-wind": {
    term: "Solar wind",
    def: "A continuous spray of charged particles blowing off the Sun.",
    eal: "/foundations/eal/u1/"
  },
  "depth": {
    term: "Depth (of a transit dip)",
    def: "How much the star's light dims during a transit. The depth tells you the planet's size relative to its star: the bigger the planet, the more light it blocks.",
    vocabAnchor: "transit-detection",
    eal: "/foundations/eal/u1/"
  },
  "timing": {
    term: "Timing (of a transit dip)",
    def: "When and how often the dip repeats. The timing tells you the orbit: if the dip repeats every 4.2 days, the planet circles its star every 4.2 days.",
    vocabAnchor: "transit-detection",
    eal: "/foundations/eal/u1/"
  },
  "transmission-spectroscopy": {
    term: "Transmission spectroscopy",
    def: "During a transit, a sliver of starlight passes through the planet's atmosphere on its way to us. Different gases absorb different wavelengths, so the starlight arrives with chemical fingerprints.",
    eal: "/foundations/eal/u1/"
  }
};
