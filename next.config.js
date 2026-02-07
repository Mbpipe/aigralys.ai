/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dignitas-dev',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
