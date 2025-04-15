import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['bhncpopxmiwetjpkcrfj.supabase.co'],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'bhncpopxmiwetjpkcrfj.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

