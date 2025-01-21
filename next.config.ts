import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: 'anonymous',
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cross-Origin-Embedder-Policy',
          value: 'credentialless'
        },
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin'
        },
        {
          key: 'Cross-Origin-Resource-Policy',
          value: 'cross-origin'
        }
      ],
    },
  ],
  // Ignore TypeScript errors during dev
  typescript: {
    ignoreBuildErrors: true,       // for production builds
    // There's also an 'ignoreDevErrors' coming in Next 13.5+; 
    // check the docs for availability.
  },

  // Ignore ESLint errors during dev
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
