import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: [],
  },
  reactStrictMode: true,
  // Removed swcMinify as it's now automatic in Next.js 15+
  // Removed modularizeImports and transpilePackages as they're not needed in basic config
}

export default nextConfig