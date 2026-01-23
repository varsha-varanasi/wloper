import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoProvider } from "@/context/DemoContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import dynamic from 'next/dynamic';
import { Space_Grotesk, Manrope } from 'next/font/google';

import { AnimatePresence } from 'framer-motion';
import { InterfaceProvider } from "@/context/InterfaceContext";
import { PersonaProvider } from "@/context/PersonaContext";
import Script from 'next/script';

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

const DevTerminal = dynamic(() => import('@/components/DevTerminal'), { ssr: false });
const AIAssistant = dynamic(() => import('@/components/AIAssistant'), { ssr: false });
const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), { ssr: false });
const DNATransition = dynamic(() => import('@/components/DNATransition'), { ssr: false });
const CommandHUD = dynamic(() => import('@/components/CommandHUD'), { ssr: false });
const PersonaSwitcher = dynamic(() => import('@/components/PersonaSwitcher'), { ssr: false });

export const metadata: Metadata = {
    metadataBase: new URL('https://wloper.com'),
    title: {
        default: "Wloper – Next-Gen AI, Blockchain & Marketing Engineering",
        template: "%s | Wloper"
    },
    description: "Wloper is a high-end engineering hub specializing in AI products, blockchain solutions, and conversion-first digital marketing. We build scalable Web3 ecosystems and technical assets for global enterprises.",
    keywords: ["web development", "digital marketing", "AI products", "blockchain solutions", "Web3 development", "Next.js experts", "conversion optimization"],
    authors: [{ name: "Wloper Team" }],
    creator: "Wloper",
    publisher: "Wloper",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Wloper – Build the Future of Tech & Marketing",
        description: "Specialized engineering for AI, Blockchain, and Growth. Scalable solutions from zero to institutional grade.",
        url: 'https://wloper.com',
        siteName: 'Wloper',
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
        title: 'Wloper – Next-Gen Tech Hub',
        description: 'Engineering the future of AI and Marketing.',
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
                {/* Google Analytics */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-BPJND5P97V`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-BPJND5P97V');
                    `}
                </Script>
                {/* Schema.org for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Wloper",
                            "url": "https://wloper.com",
                            "logo": "https://wloper.com/logo.png",
                            "sameAs": [
                                "https://linkedin.com/company/wloper",
                                "https://twitter.com/wloper"
                            ],
                            "description": "High-end engineering hub for AI, Blockchain, and Digital Marketing.",
                            "services": [
                                "AI Strategy",
                                "Blockchain Solutions",
                                "Mobile App Development",
                                "Growth & SEO"
                            ]
                        })
                    }}
                />
            </head>
            <body className="antialiased lg:cursor-none bg-wl-dark">
                <InterfaceProvider>
                    <PersonaProvider>
                        <DemoProvider>
                            <CustomCursor />
                            <DevTerminal />
                            <ScrollProgress />
                            <Header />
                            <PersonaSwitcher />
                            <CommandHUD />
                            <AIAssistant />
                            <NewsletterPopup />
                            <main className="min-h-screen">
                                <AnimatePresence mode="wait">
                                    <DNATransition>
                                        {children}
                                    </DNATransition>
                                </AnimatePresence>
                            </main>
                            <Footer />
                        </DemoProvider>
                    </PersonaProvider>
                </InterfaceProvider>
            </body>
        </html>
    );
}
