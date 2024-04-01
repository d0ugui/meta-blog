/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.zoomtecnologia.com.br",
      },
      {
        protocol: "https",
        hostname: "www.jamsadr.com",
      },
      {
        protocol: "https",
        hostname: "imageio.forbes.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};

export default nextConfig;
