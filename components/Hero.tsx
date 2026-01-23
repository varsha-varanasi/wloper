'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import { usePersona } from '@/context/PersonaContext';
import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(() => import('./NeuralBackground'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-wl-dark" />
});

export default function Hero() {
    const { openDemoModal } = useDemo();
    const { persona } = usePersona();
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const personaContent = {
        CTO: {
            badge: "Deep Tech Node",
            words: ["Rust Performance", "Edge Scalability", "Hardened Security"],
            sub: "We engineer zero-latency systems that don't just work—they dominate. From Rust-powered backends to Next.js 15 edge nodes, we build the tech CTOs dream of."
        },
        MARKETER: {
            badge: "Conversion Engine",
            words: ["Revenue Velocity", "SEO Supremacy", "Conversion Mastery"],
            sub: "Stop losing traffic to slow loads and poor UX. We build high-intent digital machines that turn cold sessions into loyal revenue streams."
        },
        FOUNDER: {
            badge: "Product Alpha Lab",
            words: ["Market Ready Assets", "Institutional Scaling", "AI Dominance"],
            sub: "Your vision requires a partner that thinks like a builder, not a vendor. We build scalable, venture-ready assets that stand up to institutional scrutiny."
        }
    };

    const currentContent = personaContent[persona];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % currentContent.words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [currentContent.words.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.21, 0.45, 0.32, 0.9],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wl-dark pt-32 pb-24 md:pb-20">
            {/* Cinematic Video Background */}
            {!isMobile && (
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    >
                        <source src="/images/digital-tech-green-background-2023-11-27-05-00-41-utc.mp4" type="video/mp4" />
                    </video>
                </div>
            )}
            {isMobile && <div className="absolute inset-0 z-0 bg-wl-dark/80" />}

            {!isMobile && <NeuralBackground />}

            <div className="container-custom relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >
                    {/* Badge */}
                    <motion.div
                        key={`${persona}-badge`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="tag-label"
                    >
                        <Sparkles className="w-4 h-4 text-wl-accent" />
                        {currentContent.badge}
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 max-w-6xl text-balance tracking-tighter leading-tight"
                    >
                        <span className="heading-gradient">Building the Future of</span>
                        <br />
                        <div className="relative h-[1.2em] inline-block w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={`${persona}-${currentContent.words[index]}`}
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -60, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-wl-accent absolute left-0 right-0"
                                >
                                    {currentContent.words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        key={`${persona}-sub`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 max-w-2xl mb-14 text-sm md:text-xl font-medium leading-relaxed"
                    >
                        {currentContent.sub}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <CTAButton onClick={openDemoModal} variant="primary" className="w-full sm:w-auto py-5 sm:py-6 text-lg sm:text-base">
                            <span className="flex items-center gap-2 justify-center">
                                Start Protocol <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </CTAButton>
                        <CTAButton href="/services" variant="secondary" className="w-full sm:w-auto py-5 sm:py-6 text-lg sm:text-base">
                            Explore Capabilities
                        </CTAButton>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
