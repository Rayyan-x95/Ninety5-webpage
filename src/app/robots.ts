import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/tmp/', '/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Bingbot',
          'Applebot-Extended',
          'Bytespider',
        ],
        allow: '/',
        disallow: ['/tmp/', '/api/'],
      },
    ],
    sitemap: 'https://ninety5.in/sitemap.xml',
  };
}

