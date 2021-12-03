const withPlugins = require('next-compose-plugins');

/**
 * @type {import('next').NextConfig}
 */
const config = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  swcMinify: true,
};

const configWithPlugins = withPlugins([
  [config],
]);

module.exports = configWithPlugins;
