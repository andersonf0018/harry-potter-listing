import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "ik.imagekit.io" }],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
