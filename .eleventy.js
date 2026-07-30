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

  // Course order: units ascending, blocks ascending within a unit. A page's position
  // in this collection maps to a rotation meeting, so adding or removing a block
  // reshuffles every downstream date automatically.
  eleventyConfig.addCollection("teachingBlocks", function (api) {
    return api
      .getAll()
      .filter(isTeachingBlock)
      .sort(function (a, b) {
        return (a.data.unit - b.data.unit) || (a.data.block - b.data.block);
      });
  });

  // Rotation meeting 1 (Thu Aug 6 / Fri Aug 7) is orientation, syllabus, and
  // icebreakers — not a teaching block. U0 Block 1 is meeting 2. Change this one
  // constant to shift the whole course; header dates and unit spans both read it.
  const FIRST_BLOCK_MEETING = 2;

  const meetingNumber = (teachingBlocks, page) => {
    const index = teachingBlocks.indexOf(page);
    return index < 0 ? 0 : index + FIRST_BLOCK_MEETING;
  };

  eleventyConfig.addFilter("courseDay", function (teachingBlocks, unit, block) {
    const page = teachingBlocks.find(function (p) {
      return p.data.unit === unit && p.data.block === block;
    });
    return page ? meetingNumber(teachingBlocks, page) : 0;
  });

  eleventyConfig.addFilter("rotationDay", function (days, courseDay) {
    return days.find(function (d) { return d.n === courseDay; }) || {};
  });

  // One formatter for every surface that shows a meeting's dates: block-page
  // headers, unit-landing block cards, and the unit schedule.
  const meetingLabel = (days, meeting) => {
    const d = days.find(function (x) { return x.n === meeting; }) || {};
    return "A: " + (d.aLabel || "date TBC") + " · B: " + (d.bLabel || "date TBC");
  };

  eleventyConfig.addFilter("meetingDateLabel", meetingLabel);

  eleventyConfig.addFilter("blockDateLabel", function (teachingBlocks, unit, block, days) {
    const page = teachingBlocks.find(function (p) {
      return p.data.unit === unit && p.data.block === block;
    });
    return meetingLabel(days, page ? meetingNumber(teachingBlocks, page) : 0);
  });

  // Rows for a unit's schedule table: the unit's blocks in course order, each with
  // its meeting number and rotation dates. Orientation-style days (a course meeting
  // declared in frontmatter, no block number) are folded in and sorted by meeting.
  eleventyConfig.addCollection("unitSchedule", function (api) {
    const blocks = api.getAll().filter(isTeachingBlock);
    const ordered = blocks.slice().sort(function (a, b) {
      return (a.data.unit - b.data.unit) || (a.data.block - b.data.block);
    });
    const rows = ordered.map(function (p) {
      return {
        unit: p.data.unit,
        meeting: meetingNumber(ordered, p),
        label: "Block " + p.data.block,
        title: p.data.title,
        url: p.url
      };
    });
    api.getAll()
      .filter(function (p) { return p.data.courseMeeting && p.data.block === undefined; })
      .forEach(function (p) {
        rows.push({
          unit: p.data.unit,
          meeting: p.data.courseMeeting,
          label: p.data.scheduleLabel || "Orientation",
          title: p.data.title,
          url: p.url
        });
      });
    return rows.sort(function (a, b) { return (a.unit - b.unit) || (a.meeting - b.meeting); });
  });

  eleventyConfig.addFilter("forUnit", function (rows, unit) {
    return rows.filter(function (r) { return r.unit === unit; });
  });

  // Unit number for a unit landing page URL (/units/unit-3/); null for anything else.
  eleventyConfig.addFilter("unitLandingNumber", function (url) {
    const match = String(url || "").match(/^\/units\/unit-(\d+)\/$/);
    return match ? Number(match[1]) : null;
  });

  // Reads the same schedule rows the unit table renders, so the span can never
  // contradict it (and an orientation day counts toward the unit's footprint).
  eleventyConfig.addFilter("unitSpan", function (rows, unit, days) {
    const unitRows = rows.filter(function (r) { return r.unit === unit; });
    if (!unitRows.length) return null;
    const meetingOf = (row) => days.find(function (d) { return d.n === row.meeting; });
    const first = meetingOf(unitRows[0]);
    const last = meetingOf(unitRows[unitRows.length - 1]);
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
