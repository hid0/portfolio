/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.konami.com',
        port: '',
        pathname: '/efootball/**',
      },
    ],
  },
};

export default nextConfig;