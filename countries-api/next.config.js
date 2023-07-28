/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
}

module.exports = nextConfig
