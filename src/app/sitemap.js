import { deals, categories, blogPosts } from '@/lib/data';

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
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    }
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

  // Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'never',
    priority: 0.7,
  }));

  return [...routes, ...categoryRoutes, ...dealRoutes, ...blogRoutes];
}
