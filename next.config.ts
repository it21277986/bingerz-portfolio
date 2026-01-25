import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Optimize framer-motion imports
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  // Suppress console warnings during build
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
