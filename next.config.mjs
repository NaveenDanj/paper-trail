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
    ],
  },
};

// www.promateworld.com

export default nextConfig;
