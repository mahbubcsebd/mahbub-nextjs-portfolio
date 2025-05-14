/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 60,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
};

export default nextConfig;
