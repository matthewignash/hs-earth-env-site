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
