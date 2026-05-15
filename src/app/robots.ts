import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/tmp/', '/api/'],
    },
    sitemap: 'https://ninety5.studio/sitemap.xml',
  };
}
