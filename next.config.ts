import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //Image paths
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3-us-west-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd3azqz9xba9gwd.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.attipas.com.au',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'djunoemhhucuiipi.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      }

    ],
    qualities: [20, 75, 100],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },


};

export default nextConfig;
