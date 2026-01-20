'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Globe } from 'lucide-react';

import SpotlightCard from './SpotlightCard';

export default function Industries() {
    const industries = [
        'Startups & SaaS',
        'HR & Recruitment',
        'E-commerce',
        'Healthcare',
        'Education',
        'Service Businesses',
    ];

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Segment */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-wl-accent/10 blur-[50px] rounded-[3rem]"></div>
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 glass-strong p-2">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    alt="Industries Served by WLOPER"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark/80 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Segment */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="tag-label">
                                <Globe className="w-5 h-5" />
                                Global Impact
                            </div>
                            <h2 className="heading-lg mb-10">
                                AI Solutions Built for <span className="heading-gradient">Every Industry</span>
                            </h2>
                            <p className="subtitle-lg mb-12">
                                We bridge the gap between complex AI technology and real-world business applications, helping diverse sectors scale with speed and intelligence.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {industries.map((industry, index) => (
                                    <motion.div
                                        key={industry}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <SpotlightCard className="p-5 flex items-center gap-4 border-white/5 hover:border-wl-accent/20 cursor-default group">
                                            <div className="w-2 h-2 rounded-full bg-wl-accent opacity-40 group-hover:opacity-100 transition-all"></div>
                                            <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-widest">{industry}</span>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
