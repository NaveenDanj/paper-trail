/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.playground.com",
      },
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "ae01.alicdn.com",
      },
      {
        hostname: "www.atlas.lk",
        protocol: "https",
      },
    ],
  },
};

// www.promateworld.com

export default nextConfig;
