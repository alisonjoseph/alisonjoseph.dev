/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Adjust as needed, e.g., set higher or lower
        aggregateTimeout: 300,
      };
      config.cache = false; // Disables caching in development mode
    }
    return config;
  },
};

module.exports = nextConfig;
