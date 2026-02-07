/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',  // Root site (aigralys.ai) - no basePath. /dignitas is built from dignitas branch.
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
