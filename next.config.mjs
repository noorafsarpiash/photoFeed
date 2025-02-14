/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
        remotePatterns: [
          
          {
            protocol: 'https',
            hostname: 'unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
          },
          
         
         
        ],
      },
};

export default nextConfig;




