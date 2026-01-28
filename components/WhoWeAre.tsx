'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Code2, TrendingUp, Sparkles, Brain } from 'lucide-react';

export default function WhoWeAre() {
    const traits = [
        {
            icon: Code2,
            label: "Clean Code",
            desc: "Scalable architecture built for longevity."
        },
        {
            icon: TrendingUp,
            label: "Growth Focus",
            desc: "Designed to convert and scale from Day 1."
        },
        {
            icon: Brain,
            label: "AI Logic",
            desc: "Smarter automated workflows integrated."
        }
    ];

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-1/3 h-full bg-wl-accent/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/4 h-full bg-wl-accent/5 blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group">
                            <Image
                                src="/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg"
                                alt="WLOPER Philosophy - Engineering and AI Strategy Focus"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-transparent to-transparent opactiy-60"></div>

                            {/* Content Over Image */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="glass-strong p-6 rounded-3xl border border-white/10">
                                    <p className="text-sm font-bold text-wl-accent uppercase tracking-widest mb-2">Our DNA</p>
                                    <p className="text-white font-medium">Bridges the gap between technical excellence and business results.</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element: Growth Graph Concept */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 glass p-6 rounded-[2rem] border border-wl-accent/20 hidden xl:block shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-wl-accent rounded-2xl flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-black" />
                                </div>
                                <div className="pr-4">
                                    <div className="text-lg font-black text-white">+340%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-wl-muted-dark leading-none">AI Efficiency</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Narrative */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="tag-label">
                                <Sparkles className="w-4 h-4 text-wl-accent" />
                                The WLOPER Mindset
                            </div>

                            <h2 className="heading-lg mb-10">
                                Developers Who Think Like <br />
                                <span className="heading-gradient">Marketers</span> and Build with <span className="text-wl-accent">AI</span>
                            </h2>

                            <p className="subtitle-lg mb-12">
                                Traditional agencies build to spec. We build to win. Wloper integrates strategic growth engineering into every line of code, ensuring your product doesn't just launch—it dominates.
                            </p>

                            {/* Traits Grid */}
                            <div className="grid sm:grid-cols-3 gap-6 mb-12">
                                {traits.map((trait, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-wl-accent/20 transition-all group"
                                    >
                                        <trait.icon className="w-6 h-6 text-wl-accent mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-sm font-bold text-white mb-2">{trait.label}</h4>
                                        <p className="text-xs text-wl-muted-dark font-medium leading-relaxed">{trait.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-6 items-center">
                                <Link href="/about-us" className="btn-primary group h-14">
                                    Explore Our Culture
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-4 text-wl-muted-dark">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-wl-dark bg-white/10"></div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest">Our Strategy Team</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
