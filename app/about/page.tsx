'use client';

import { motion } from 'framer-motion';
import { useDemo } from '@/context/DemoContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });
const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function AboutPage() {
    const { openDemoModal } = useDemo();
    const stats = [
        { label: 'Neural Deployments', value: '1,200+' },
        { label: 'Global Clients', value: '850+' },
        { label: 'Uptime Protocol', value: '99.9%' },
        { label: 'Team Capacity', value: '120+' },
    ];

    const timeline = [
        { year: "2018", event: "Genesis Cluster", desc: "WLOPER originates as a specialized cloud architecture lab." },
        { year: "2020", event: "Global Expansion", desc: "Expansion into APAC and US markets with distributed engineering pods." },
        { year: "2023", event: "Neural Pivot", desc: "Re-architected all core services to be AI-native and autonomous." },
        { year: "2026", event: "Tech Autonomy", desc: "Setting the global standard for self-optimizing digital infrastructure." }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-32 overflow-hidden">
                <NeuralBackground />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            The WLOPER Identity
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Architecting the <br /><span className="text-wl-accent">Intelligent Era.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            We are more than a technical agency. We are a specialized build-engine designed to convert complex challenges into scalable AI systems.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Experience */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[2.5rem] border border-white/5 text-center group hover:border-wl-accent/20 transition-all"
                            >
                                <div className="text-4xl md:text-5xl font-black text-wl-accent mb-3 tabular-nums group-hover:scale-105 transition-transform">{s.value}</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visionary Section */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-12">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                                Built by Innovators, <br /><span className="text-wl-accent">For the Top 1%.</span>
                            </h2>
                            <p className="text-xl text-wl-muted-dark leading-relaxed font-medium">
                                At WLOPER, we optimize for performance above all else. Our team of 120+ specialists works in focused clusters to ensure that every line of code contributes to your core ROI. We don't believe in "good enough"—we believe in technical supremacy.
                            </p>
                            <div className="flex gap-8">
                                <div className="space-y-1">
                                    <p className="text-3xl font-black text-white">99%</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">Retention Rate</p>
                                </div>
                                <div className="w-[1px] h-12 bg-white/10"></div>
                                <div className="space-y-1">
                                    <p className="text-3xl font-black text-white">2.5sec</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">Average Load</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="glass-strong rounded-[4rem] border border-white/5 p-4 relative overflow-hidden h-[500px]">
                                <GlobalGlobe />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evolution Protocol */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="tag-label mb-12">System Evolution Timeline</div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-[2rem] border border-white/5 relative group hover:bg-white/5 transition-all"
                            >
                                <div className="text-xs font-black text-wl-accent mb-4 opacity-40">v.{idx + 1}.0</div>
                                <div className="text-3xl font-black text-white mb-2">{item.year}</div>
                                <h3 className="text-lg font-bold mb-3 uppercase tracking-tighter">{item.event}</h3>
                                <p className="text-sm text-wl-muted-dark font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-strong p-16 md:p-32 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-wl-accent/10 to-transparent pointer-events-none"></div>
                        <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight tracking-tighter">Ready to join the <br /><span className="text-wl-accent">Next-Gen?</span></h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={openDemoModal} className="btn-primary flex items-center gap-4 h-20 px-12 text-xl">
                                Join our Ecosystem <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
