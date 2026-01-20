'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AIProductShowcase from '@/components/AIProductShowcase';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Industries from '@/components/Industries';
import BlogPreview from '@/components/BlogPreview';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import LogoMarquee from '@/components/LogoMarquee';

export default function Home() {
    const { openDemoModal } = useDemo();
    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
            <Hero />
            <LogoMarquee />

            <AIProductShowcase />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <Services />
                <Process />
                <Industries />
                <BlogPreview />
            </motion.div>

            {/* Final CTA Section */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto glass-strong p-16 md:p-32 rounded-[4rem] border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px]" />
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
                            Ready to Craft Your <br /><span className="text-wl-accent">Build Protocol?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl group">
                                Initialize AI Audit
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <Link href="/contact" className="text-white font-black uppercase tracking-[0.3em] text-xs hover:text-wl-accent transition-colors">
                                Talk to Lead Architect
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
