import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ninety5.studio';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/work',
    '/process',
    '/testimonials',
    '/faq',
    '/contact',
    '/legal/privacy-policy',
    '/legal/terms-of-service',
    '/legal/cookie-policy',
    '/services/product-design',
    '/services/brand-identity',
    '/services/design-systems',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/ux-research',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
