import { deals, categories } from '@/lib/data';

export default function sitemap() {
  const baseUrl = 'https://dealplugjamaica.com';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Category routes
  const categoryRoutes = categories.filter(c => c.id !== 'all').map((cat) => ({
    url: `${baseUrl}/deals/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Deal (Product) routes
  const dealRoutes = deals.map((deal) => ({
    url: `${baseUrl}/deals/${deal.category}/${deal.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...routes, ...categoryRoutes, ...dealRoutes];
}
