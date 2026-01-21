'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, Compass, Cpu, Code2, Rocket, Zap, ChevronRight, Activity } from 'lucide-react';

const steps = [
    {
        title: 'Discovery & AI Audit',
        desc: 'We deep-dive into your existing ecosystem to identify high-impact AI opportunities and growth blockers.',
        icon: Search,
        tag: 'Phase 01',
        detail: 'Foundation & Strategy',
        color: 'from-blue-500/20 to-wl-accent/20'
    },
    {
        title: 'Strategic Blueprint',
        desc: 'Engineering a technical roadmap focused on ROI, scalability, and seamless user experiences.',
        icon: Compass,
        tag: 'Phase 02',
        detail: 'Architecture Planning',
        color: 'from-wl-accent/20 to-emerald-500/20'
    },
    {
        title: 'Rapid Prototyping',
        desc: 'Visualizing the future through high-fidelity interactive prototypes and AI-driven mockups.',
        icon: Cpu,
        tag: 'Phase 03',
        detail: 'Design & Validation',
        color: 'from-purple-500/20 to-wl-accent/20'
    },
    {
        title: 'Hardcore Development',
        desc: 'Building battle-tested, high-performance systems using the latest Next.js and AI integrations.',
        icon: Code2,
        tag: 'Phase 04',
        detail: 'System Engineering',
        color: 'from-orange-500/20 to-wl-accent/20'
    },
    {
        title: 'Growth Activation',
        desc: 'Launching with a data-driven strategy to ensure your product doesn’t just work, but thrives.',
        icon: Rocket,
        tag: 'Phase 05',
        detail: 'Market Dominance',
        color: 'from-pink-500/20 to-wl-accent/20'
    }
];

export default function Process() {
    const [activeTab, setActiveTab] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    return (
        <section className="py-24 bg-wl-dark relative overflow-hidden border-y border-white/5">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,246,72,0.03),transparent_70%)]"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Header & Nav */}
                    <div className="w-full lg:w-2/5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="tag-label mb-6"
                        >
                            <Activity className="w-4 h-4 text-wl-accent" />
                            Optimization Loop
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-md mb-6"
                        >
                            The <span className="text-wl-accent">WLOPER</span> Journey
                        </motion.h2>
                        <p className="text-wl-muted mb-12">A battle-tested methodology designed to launch industry-leading AI products.</p>

                        {/* Interactive Navigation */}
                        <div className="space-y-3">
                            {steps.map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveTab(index);
                                        setIsAutoPlay(false);
                                    }}
                                    className={`w-full group relative flex items-center p-4 rounded-2xl transition-all duration-300 ${activeTab === index
                                            ? 'bg-white/5 border border-white/10'
                                            : 'hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === index ? 'bg-wl-accent text-black' : 'bg-white/5 text-white/40 group-hover:text-white'
                                        }`}>
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4 text-left">
                                        <div className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === index ? 'text-wl-accent' : 'text-white/30'
                                            }`}>
                                            {step.tag}
                                        </div>
                                        <div className={`text-sm font-semibold transition-colors ${activeTab === index ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                                            }`}>
                                            {step.title}
                                        </div>
                                    </div>
                                    {activeTab === index && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute right-4 text-wl-accent"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visual Showcase */}
                    <div className="w-full lg:w-3/5">
                        <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square xl:aspect-[16/10] w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0"
                                >
                                    <div className={`h-full w-full glass-strong rounded-[3rem] border border-white/10 p-12 flex flex-col justify-center overflow-hidden relative group`}>
                                        {/* Animated Background Decor */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeTab].color} opacity-30 transition-colors duration-1000`}></div>
                                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-wl-accent/10 rounded-full blur-[80px]"></div>

                                        <div className="relative z-10">
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="w-20 h-20 rounded-3xl bg-wl-accent flex items-center justify-center text-black mb-10 shadow-[0_0_40px_rgba(202,246,72,0.3)]"
                                            >
                                                {(() => {
                                                    const Icon = steps[activeTab].icon;
                                                    return <Icon className="w-10 h-10" />;
                                                })()}
                                            </motion.div>

                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <div className="text-wl-accent font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                                                    // {steps[activeTab].detail}
                                                </div>
                                                <h3 className="heading-md text-white mb-6">
                                                    {steps[activeTab].title}
                                                </h3>
                                                <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                                                    {steps[activeTab].desc}
                                                </p>
                                            </motion.div>

                                            {/* Progress Bar (Auto-play indicator) */}
                                            <div className="absolute bottom-8 left-12 right-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    key={`progress-${activeTab}-${isAutoPlay}`}
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: isAutoPlay ? "100%" : "0%" }}
                                                    transition={{
                                                        duration: isAutoPlay ? 5 : 0,
                                                        ease: "linear"
                                                    }}
                                                    className="h-full bg-wl-accent shadow-[0_0_10px_#CAF648]"
                                                />
                                            </div>
                                        </div>

                                        {/* Background Large Number */}
                                        <div className="absolute bottom-0 right-12 text-[15rem] font-black text-white/[0.03] select-none pointer-events-none leading-none -mb-8">
                                            0{activeTab + 1}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
