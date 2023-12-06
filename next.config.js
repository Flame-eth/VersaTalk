/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["github.com", 'lh3.googleusercontent.com' ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
