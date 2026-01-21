import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wloper.com'

    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/services/ai-strategy',
        '/services/distributed-systems',
        '/services/growth-protocol',
        '/services/mobile-app-development',
        '/services/blockchain-solutions',
        '/products/interview-screening',
        '/products/hcm-system',
        '/blog',
        '/portfolio',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
