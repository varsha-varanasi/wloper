import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DemoProvider } from "@/context/DemoContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import dynamic from 'next/dynamic';

const DevTerminal = dynamic(() => import('@/components/DevTerminal'), { ssr: false });
const AIAssistant = dynamic(() => import('@/components/AIAssistant'), { ssr: false });
const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), { ssr: false });
const DNATransition = dynamic(() => import('@/components/DNATransition'), { ssr: false });
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
    title: "Wloper – We Are Next-Gen Developers",
    description: "Next-generation tech company building scalable web solutions, digital marketing, and AI-powered products including an AI-powered live interview platform.",
    keywords: ["web development", "digital marketing", "AI products", "AI interview platform", "next-gen developers"],
    authors: [{ name: "Wloper" }],
    openGraph: {
        title: "Wloper – We Are Next-Gen Developers",
        description: "Building the future with web development, digital marketing, and AI-powered solutions.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased lg:cursor-none">
                <DemoProvider>
                    <CustomCursor />
                    <DevTerminal />
                    <ScrollProgress />
                    <Header />
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
            </body>
        </html>
    );
}
