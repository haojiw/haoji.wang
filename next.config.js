/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add remote domains if needed for external image sources
    // domains: ['example.com'],
  },
  // Configure any experimental features if needed
  experimental: {
    
  },
};

module.exports = nextConfig; 