/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Prevent Turbopack from inferring an incorrect repo root
    root: __dirname,
  },
}

module.exports = nextConfig
