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
    ],
  },
};

// www.promateworld.com

export default nextConfig;
