import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoProvider } from "@/context/DemoContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import dynamic from 'next/dynamic';
import { Space_Grotesk, Manrope } from 'next/font/google';
import { InterfaceProvider } from "@/context/InterfaceContext";
import Script from 'next/script';
import DeferredWidgets from "@/components/DeferredWidgets";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});


export const metadata: Metadata = {
    metadataBase: new URL('https://wloper.com'),
    title: {
        default: "Wloper | Best IT Company — Website Development, SEO, Google Ads & AI Solutions",
        template: "%s | Wloper"
    },
    description: "Wloper is India's best IT company offering professional website development (WordPress, Shopify, Next.js), mobile app development, SEO, Google Ads, Meta Ads, custom web development and AI-powered digital solutions that grow your business.",
    icons: {
        icon: [
            { url: '/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    keywords: [
        "Best IT Company",
        "Website Development Company",
        "Website Development Company in India",
        "WordPress Development Company",
        "Shopify Development Company India",
        "Next.js Development Agency",
        "Custom Website Development Services",
        "Mobile App Development Company Pune",
        "SEO Company India",
        "Best SEO Services for Business",
        "Google Ads Management Agency",
        "PPC Agency India",
        "Meta Ads Agency",
        "Facebook Ads Management",
        "Instagram Advertising Services",
        "AI Based Web Development Company",
        "Digital Marketing Company",
        "Best Digital Marketing Services",
        "IT Company Pune",
        "Software Development Company India",
        "AI product development",
        "AI interview platform SkillytTalk",
        "Blockchain engineering services",
    ],
    authors: [{ name: "Wloper Team" }],
    creator: "Wloper",
    publisher: "Wloper",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    verification: {
        google: "3gJpAY7ADAe7HSKJy9DuH_VouiJxFGut3pdveJh7I10",
    },
    openGraph: {
        title: "Wloper – Engineering the Future of AI & Blockchain",
        description: "Scale your vision with Wloper's specialized engineering for AI, Blockchain, and Growth. Institutional-grade solutions built for the future.",
        url: 'https://wloper.com',
        siteName: 'Wloper',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Wloper - Next-Gen Engineering Hub',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wloper – Next-Gen Tech Hub | AI & Blockchain',
        description: 'Building the infrastructure of the future. Specialized engineering for AI and Web3.',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
            <head>
                {/* Preconnect to critical origins — speeds up first requests */}
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                {/* Google Analytics — lazyOnload defers past LCP for better performance */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-BPJND5P97V`}
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-BPJND5P97V', { send_page_view: true });
                    `}
                </Script>
                {/* ================================================================
                    STRUCTURED DATA — Google Knowledge Panel signals
                    Organization + WebSite + SoftwareApplication (SkillytTalk)
                    ================================================================ */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            /* ── 1. ORGANIZATION (primary KP trigger) ── */
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "@id": "https://wloper.com/#organization",
                                "name": "Wloper",
                                "legalName": "Wloper Systems Private Limited",
                                "alternateName": ["Wloper Systems", "Wloper IT Company"],
                                "url": "https://wloper.com",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://wloper.com/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png",
                                    "width": 400,
                                    "height": 400
                                },
                                "image": [
                                    "https://wloper.com/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png",
                                    "https://wloper.com/images/envato-labs-ai-6c11c598-851f-40f7-9155-eb9146bff990.jpg"
                                ],
                                "description": "Wloper is India's best IT company specialising in website development (WordPress, Shopify, Next.js), mobile app development, SEO, Google Ads, Meta Ads, custom web development and AI-powered digital solutions. Wloper also owns SkillytTalk, an AI-powered interview and hiring platform.",
                                "foundingDate": "2020",
                                "numberOfEmployees": {
                                    "@type": "QuantitativeValue",
                                    "minValue": 10,
                                    "maxValue": 50
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "SHUBH SHAGUN, B 1202, opposite Bollywood Multiplex Theatre, Tukaram Nagar, Kharadi",
                                    "addressLocality": "Pune",
                                    "addressRegion": "Maharashtra",
                                    "postalCode": "411014",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 18.5515,
                                    "longitude": 73.9439
                                },
                                "contactPoint": [
                                    {
                                        "@type": "ContactPoint",
                                        "telephone": "+91-9034197787",
                                        "contactType": "sales",
                                        "email": "sales@wloper.com",
                                        "areaServed": ["IN", "US", "GB", "AE"],
                                        "availableLanguage": ["English", "Hindi"]
                                    },
                                    {
                                        "@type": "ContactPoint",
                                        "telephone": "+91-9034197787",
                                        "contactType": "customer support",
                                        "areaServed": "IN",
                                        "availableLanguage": ["English", "Hindi"]
                                    }
                                ],
                                "sameAs": [
                                    "https://www.linkedin.com/company/wloper",
                                    "https://x.com/wlopers",
                                    "https://www.instagram.com/wlopertechnologies/",
                                    "https://www.facebook.com/wloper",
                                    "https://github.com/varsha-varanasi/wloper",
                                    "https://github.com/amangaurav1410/wloper"
                                ],
                                "email": "sales@wloper.com",
                                "telephone": "+91-9034197787",
                                "areaServed": ["India", "United States", "United Kingdom", "United Arab Emirates", "Canada", "Australia"],
                                "knowsAbout": [
                                    "Website Development",
                                    "WordPress Development",
                                    "Shopify Development",
                                    "Next.js Development",
                                    "Mobile App Development",
                                    "Search Engine Optimization",
                                    "Google Ads Management",
                                    "Meta Ads Management",
                                    "Custom Web Development",
                                    "AI Development",
                                    "Blockchain Engineering",
                                    "Digital Marketing"
                                ],
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Wloper Services",
                                    "itemListElement": [
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "url": "https://wloper.com/services/website-development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "url": "https://wloper.com/services/mobile-app-development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services", "url": "https://wloper.com/services/seo" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management", "url": "https://wloper.com/services/google-ads" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Management", "url": "https://wloper.com/services/meta-ads" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Development", "url": "https://wloper.com/services/custom-website-development" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Based Web Development", "url": "https://wloper.com/services/software-engineering" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing & SEO", "url": "https://wloper.com/services/digital-growth" } }
                                    ]
                                },
                                "owns": {
                                    "@type": "Product",
                                    "@id": "https://www.skillytalk.com/#product",
                                    "name": "SkillytTalk",
                                    "description": "SkillytTalk is an AI-powered interview screening and hiring platform by Wloper that automates candidate evaluation with intelligent scoring and unbiased assessments.",
                                    "url": "https://www.skillytalk.com/",
                                    "brand": { "@type": "Brand", "name": "Wloper" }
                                },
                                "founder": {
                                    "@type": "Person",
                                    "name": "Wloper Founding Team"
                                }
                            },

                            /* ── 2. WEBSITE (enables Sitelinks Searchbox) ── */
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "@id": "https://wloper.com/#website",
                                "name": "Wloper",
                                "url": "https://wloper.com",
                                "publisher": { "@id": "https://wloper.com/#organization" },
                                "inLanguage": "en-US",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://wloper.com/search?q={search_term_string}"
                                    },
                                    "query-input": "required name=search_term_string"
                                }
                            },

                            /* ── 3. SOFTWARE APPLICATION — SkillytTalk product ── */
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "@id": "https://www.skillytalk.com/#app",
                                "name": "SkillytTalk",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web",
                                "url": "https://www.skillytalk.com/",
                                "description": "SkillytTalk is an AI-powered interview screening platform that automates hiring with intelligent candidate scoring, unbiased evaluation and real-time analytics. Built by Wloper.",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD",
                                    "availability": "https://schema.org/InStock"
                                },
                                "image": "https://wloper.com/images/envato-labs-ai-6c11c598-851f-40f7-9155-eb9146bff990.jpg",
                                "author": { "@id": "https://wloper.com/#organization" },
                                "brand": { "@type": "Brand", "name": "Wloper" }
                            },

                            /* ── 4. LOCAL BUSINESS (helps local pack + map KP) ── */
                            {
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "@id": "https://wloper.com/#localbusiness",
                                "name": "Wloper",
                                "image": "https://wloper.com/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png",
                                "url": "https://wloper.com",
                                "telephone": "+91-9034197787",
                                "email": "sales@wloper.com",
                                "priceRange": "₹₹",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "SHUBH SHAGUN, B 1202, opposite Bollywood Multiplex Theatre, Tukaram Nagar, Kharadi",
                                    "addressLocality": "Pune",
                                    "addressRegion": "Maharashtra",
                                    "postalCode": "411014",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 18.5515,
                                    "longitude": 73.9439
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "09:00",
                                    "closes": "19:00"
                                },
                                "sameAs": [
                                    "https://www.linkedin.com/company/wloper",
                                    "https://x.com/wlopers",
                                    "https://www.instagram.com/wlopertechnologies/"
                                ]
                            }
                        ])
                    }}
                />

            </head>
            <body className="antialiased bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
                <InterfaceProvider>
                    <DemoProvider>
                        <ScrollProgress />
                        <Header />
                        {/* Defer non-critical floating widgets 3s after load */}
                        <DeferredWidgets />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </DemoProvider>
                </InterfaceProvider>
            </body>
        </html>
    );
}
