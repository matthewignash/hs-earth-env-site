module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("isActiveNav", function (pageUrl, match) {
    if (match === "/") return pageUrl === "/";
    return typeof pageUrl === "string" && pageUrl.indexOf(match) === 0;
  });

  eleventyConfig.addCollection("standardsBlocks", function (api) {
    return api
      .getAll()
      .filter(function (p) { return p.data.standards && p.data.block; })
      .sort(function (a, b) {
        return (a.data.unit - b.data.unit) || (a.data.block - b.data.block);
      });
  });

  // Teaching block pages only — not unit landings, assessments, or foundations.
  const isTeachingBlock = (p) =>
    p.data.layout === "layouts/block-page.njk" &&
    p.data.unit !== undefined &&
    p.data.block !== undefined;

  // Course order: units ascending, blocks ascending within a unit. A page's index
  // position is its course meeting number, so adding or removing a block reshuffles
  // every downstream date automatically.
  eleventyConfig.addCollection("teachingBlocks", function (api) {
    return api
      .getAll()
      .filter(isTeachingBlock)
      .sort(function (a, b) {
        return (a.data.unit - b.data.unit) || (a.data.block - b.data.block);
      });
  });

  eleventyConfig.addFilter("courseDay", function (teachingBlocks, unit, block) {
    return teachingBlocks.findIndex(function (p) {
      return p.data.unit === unit && p.data.block === block;
    }) + 1;
  });

  eleventyConfig.addFilter("rotationDay", function (days, courseDay) {
    return days.find(function (d) { return d.n === courseDay; }) || {};
  });

  // Unit number for a unit landing page URL (/units/unit-3/); null for anything else.
  eleventyConfig.addFilter("unitLandingNumber", function (url) {
    const match = String(url || "").match(/^\/units\/unit-(\d+)\/$/);
    return match ? Number(match[1]) : null;
  });

  eleventyConfig.addFilter("unitSpan", function (teachingBlocks, unit, days) {
    const blocks = teachingBlocks.filter(function (p) { return p.data.unit === unit; });
    if (!blocks.length) return null;
    const dayOf = (p) => days.find(function (d) {
      return d.n === teachingBlocks.indexOf(p) + 1;
    });
    const first = dayOf(blocks[0]);
    const last = dayOf(blocks[blocks.length - 1]);
    if (!first || !last) return null;
    const end = last.b && last.b >= last.a ? last.bLabel : last.aLabel;
    return first.aLabel + " – " + end;
  });

  const baseStandardId = (s) => s.replace(/\s*\([^)]*\)\s*$/, "");

  eleventyConfig.addFilter("baseStandardId", baseStandardId);

  eleventyConfig.addFilter("standardsTrail", function (blocks, id) {
    return blocks
      .filter(function (p) {
        const s = p.data.standards || {};
        return (s.ngss || []).concat(s.ailit || []).map(baseStandardId).includes(id);
      })
      .map(function (p) {
        return { url: p.url, unit: p.data.unit, block: p.data.block, title: p.data.title };
      });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
