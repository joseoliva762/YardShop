/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'placeimg.com'
    ]
  }
}

const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false
  },
  ...nextConfig
});

module.exports = pwaConfig;
