/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,

    // Target modern browsers only — eliminates legacy Babel polyfills (~12 KiB savings)
    experimental: {
        // Tree-shake icon & animation libraries — largest unused-JS contributors
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },

    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 604800, // 1 week
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    async headers() {
        return [
            {
                // Cache static assets for 1 year
                source: '/images/(.*)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ]
            },
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()'
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
