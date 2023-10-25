/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DBURI: process.env.DBURI,
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
