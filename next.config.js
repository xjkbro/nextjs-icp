module.exports = {
  //   reactStrictMode: true,
  images: {
    domains: ["testing.icpdas-usa.com"],
    // formats: ['image/avif', 'image/webp', 'image/jpg', 'image/png', 'image/jpeg'],
  },
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
}
