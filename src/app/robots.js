export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/checkout/'],
    },
    sitemap: 'https://dealplugjamaica.com/sitemap.xml',
  }
}
