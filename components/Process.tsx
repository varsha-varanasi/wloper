'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Search, Compass, Cpu, Code2, Rocket, Sparkles, Zap } from 'lucide-react';

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            title: 'Discovery & AI Audit',
            desc: 'We deep-dive into your existing ecosystem to identify high-impact AI opportunities and growth blockers.',
            icon: Search,
            tag: 'Foundation'
        },
        {
            title: 'Strategic Blueprint',
            desc: 'Engineering a technical roadmap focused on ROI, scalability, and seamless user experiences.',
            icon: Compass,
            tag: 'Architecture'
        },
        {
            title: 'Rapid Prototyping',
            desc: 'Visualizing the future through high-fidelity interactive prototypes and AI-driven mockups.',
            icon: Cpu,
            tag: 'Validation'
        },
        {
            title: 'Hardcore Development',
            desc: 'Building battle-tested, high-performance systems using the latest Next.js and AI integrations.',
            icon: Code2,
            tag: 'Execution'
        },
        {
            title: 'Growth Activation',
            desc: 'Launching with a data-driven strategy to ensure your product doesn’t just work, but thrives.',
            icon: Rocket,
            tag: 'Impact'
        }
    ];

    return (
        <section ref={containerRef} className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none -mr-96"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -ml-72"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="tag-label"
                    >
                        <Zap className="w-4 h-4 text-wl-accent" />
                        Execution Framework
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg mb-8"
                    >
                        The <span className="heading-gradient text-wl-accent">WLOPER</span> Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="subtitle-lg mx-auto"
                    >
                        A battle-tested methodology designed to launch industry-leading AI products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="glass-strong p-8 rounded-[2.5rem] border border-white/5 hover:border-wl-accent/20 transition-all duration-500 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-wl-accent/10 flex items-center justify-center mb-6 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <div className="text-[10px] font-bold text-wl-accent uppercase tracking-[0.2em] mb-3">
                                    Stage 0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-wl-muted-dark font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
