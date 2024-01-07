/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.pngall.com", "lh3.googleusercontent.com"],
  },
};
module.exports = nextConfig;
