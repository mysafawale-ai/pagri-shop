import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://pagri.shop'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
