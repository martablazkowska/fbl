// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
//   compiler: {
//     styledComponents: true,
//   },
// });

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
});
