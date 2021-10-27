const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  swcMinify: true,
});
