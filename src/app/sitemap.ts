import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ninety5.in';
  const siteLastUpdated = new Date('2026-08-20T00:00:00Z');

  // Core Landing Pages (Priority 1.0 & 0.9)
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Service Pillar Landing Pages (Priority 0.85)
  const serviceRoutes: MetadataRoute.Sitemap = [
    '/services/product-design',
    '/services/brand-identity',
    '/services/graphic-design',
    '/services/video-editing',
    '/services/branded-content',
    '/services/design-systems',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/ux-research',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Supporting Informational Pages (Priority 0.7)
  const infoRoutes: MetadataRoute.Sitemap = [
    '/about',
    '/process',
    '/testimonials',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal Pages (Priority 0.3)
  const legalRoutes: MetadataRoute.Sitemap = [
    '/legal/privacy-policy',
    '/legal/terms-of-service',
    '/legal/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-06-01T00:00:00Z'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // Dynamic Case Studies (Priority 0.8)
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(`${project.year}-06-01T00:00:00Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    images: [`${baseUrl}/og-image.jpg`],
  }));

  // Dynamic Blog Articles (Priority 0.85)
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishDate}T00:00:00Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
    images: post.coverImage ? [`${baseUrl}${post.coverImage}`] : undefined,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...infoRoutes,
    ...blogRoutes,
    ...projectRoutes,
    ...legalRoutes,
  ];
}
