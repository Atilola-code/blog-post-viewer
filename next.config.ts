/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false, // Set to true only if you must bypass type errors
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: [], // Add your image domains here if needed
  },
  // Remove swcMinify as it's now handled automatically by Next.js
}

module.exports = nextConfig