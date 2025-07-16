/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server-side image optimization since we're using Netlify's
  images: {
    unoptimized: true,
  },
  
  // Enable static exports for Netlify
  output: 'export',
  
  // Optional: Add a trailing slash to help with static exports
  trailingSlash: true,
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Disable powered by header
  poweredByHeader: false,
  
  // Disable ETag generation
  generateEtags: false,
  
  // Disable x-powered-by header
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
