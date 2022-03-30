module.exports = function(eleventyConfig) {
  // passthrough copy
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy({"./src/static":"/"});

  eleventyConfig.addWatchTarget("./src/assets/scss/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // server
  eleventyConfig.setServerOptions({
    port: 3000,
    showAllHosts: true
  });


  // Options
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist"
    }
  }
};