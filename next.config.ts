/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true, // Temporary workaround
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporary workaround
  },
}

module.exports = nextConfig