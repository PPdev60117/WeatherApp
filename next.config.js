/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
    env: {
      customKey: 'ec7ef657468c48e95fc618f0d1681680',
    }, 
    typescript: {
      ignoreBuildErrors: true,
   },
}

module.exports = nextConfig
