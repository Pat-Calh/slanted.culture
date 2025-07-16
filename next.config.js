/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add a trailing slash to help with static exports
  trailingSlash: true,
  // Enable React Strict Mode
  reactStrictMode: true,
};

module.exports = nextConfig;
