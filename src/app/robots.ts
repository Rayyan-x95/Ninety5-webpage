import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Protect staging/preview URLs from accidental indexing
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

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

