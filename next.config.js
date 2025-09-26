/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable internationalized routing. When users visit `/` they will be
  // redirected to the defaultLocale defined below. See
  // https://nextjs.org/docs/advanced-features/i18n-routing for details.
  i18n: {
    locales: ['tr', 'en', 'fr'],
    defaultLocale: 'tr',
  },
  reactStrictMode: true,
  images: {
    domains : ['images.unsplash.com']
  }
};

module.exports = nextConfig;