module.exports = function(eleventyConfig) {
  console.log("ELEVENTY CONFIG LOADED — Woodex Interior Phase 1 — Beyond Design");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/netlify.toml");
  eleventyConfig.addPassthroughCopy("src/vercel.json");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("dump", (obj) => JSON.stringify(obj));
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
