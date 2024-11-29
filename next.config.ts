// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.imagin.studio'], // Add the external domain
  },
  // other Next.js configurations...
};

export default nextConfig;
