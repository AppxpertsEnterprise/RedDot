
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Reddot',
          permanent: true, // Set to false for temporary redirection
        },
      ];
    },
  };



  module.exports = nextConfig;

  