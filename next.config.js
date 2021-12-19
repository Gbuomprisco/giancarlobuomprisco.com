const withPlugins = require("next-compose-plugins");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  swcMinify: true,
  images: {
    domains: ["miro.medium.com", "cdn-images-1.medium.com"],
  },
};

const configWithPlugins = withPlugins([[config]]);

module.exports = configWithPlugins;
