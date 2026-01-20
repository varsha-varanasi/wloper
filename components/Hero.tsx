'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(() => import('./NeuralBackground'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-wl-dark" />
});

export default function Hero() {
    const { openDemoModal } = useDemo();
    const [index, setIndex] = useState(0);
    const words = ["AI Products", "Blockchain Solutions", "Web Ecosystems"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wl-dark pt-32 pb-20">
            {/* 3D Neural Background */}
            <NeuralBackground />

            <div className="container-custom relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="tag-label"
                    >
                        <Sparkles className="w-4 h-4 text-wl-accent" />
                        AI-First Product Hub
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="heading-xl mb-10 max-w-6xl text-balance"
                    >
                        <span className="heading-gradient">Building the Future of</span>
                        <br />
                        <div className="relative h-[1.1em] inline-block w-full">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-wl-accent absolute left-0 right-0"
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="subtitle-lg mb-14 text-white/60"
                    >
                        We are developers and marketers crafting high-growth
                        <span className="text-white"> AI products </span>
                        and digital presence that scale your vision beyond limits.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <CTAButton onClick={openDemoModal} variant="primary">
                            <span className="flex items-center gap-2">
                                Get a Demo <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </CTAButton>
                        <CTAButton href="/services" variant="secondary">
                            Explore Capabilities
                        </CTAButton>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
