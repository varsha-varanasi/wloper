'use client';

import { motion } from 'framer-motion';
import {
    TrendingUp, CheckCircle, ArrowRight, BarChart3,
    Search, Rocket, Target, Zap, Sparkles,
    MousePointer2, Share2, Globe
} from 'lucide-react';
import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';

export default function DigitalGrowthPage() {
    const { openDemoModal } = useDemo();
    const channels = [
        {
            icon: Search,
            title: "Technical SEO",
            desc: "Dominating search results with extreme site performance, schema mastery, and intent-based content."
        },
        {
            icon: Target,
            title: "Performance Ads",
            desc: "Hyper-targeted campaigns across Google and Social that convert at 3x the industry average."
        },
        {
            icon: MousePointer2,
            title: "CRO Systems",
            desc: "turning traffic into revenue through data-backed UI tweaks and psychological pattern matching."
        }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--wl-accent)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <TrendingUp className="w-4 h-4 text-wl-accent" />
                            Revenue Acceleration
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Digital <br /><span className="text-wl-accent">Growth.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Traffic is a vanity metric; revenue is the mission. We use AI-driven analytics and behavioral psychology to scale your reach and maximize your bottom line.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <button onClick={openDemoModal} className="btn-primary inline-flex items-center gap-3">
                                Start Scaling <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Growth Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {channels.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[3.5rem] border border-white/5 hover:border-wl-accent/20 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <c.icon className="w-6 h-6" />
                                </div>
                                <h3 className="heading-sm mb-4">{c.title}</h3>
                                <p className="subtitle-md">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Analytics Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621416848469-e01dae52896d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none"></div>

                        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                            <div>
                                <h2 className="heading-lg mb-8">Decisions Driven <br /><span className="text-wl-accent">By Data.</span></h2>
                                <p className="subtitle-md mb-10">
                                    We don't guess. We use sentiment analysis, predictive modeling, and real-time attribution to know exactly what works.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { label: "Search Dominance", val: "95%" },
                                        { label: "Conversion Lift", val: "+140%" },
                                        { label: "CAC Reduction", val: "-45%" }
                                    ].map((s, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <span className="font-bold text-wl-muted-dark">{s.label}</span>
                                            <span className="text-2xl font-black text-wl-accent">{s.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-[3rem] bg-wl-accent/5 border border-white/10 flex items-center justify-center p-12">
                                    <BarChart3 className="w-full h-full text-wl-accent opacity-20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl font-extrabold heading-gradient">3.5x</div>
                                            <p className="font-bold uppercase tracking-widest text-sm">Avg Client ROI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Engine Section */}
            <section className="section-padding bg-wl-dark/30">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Meta Ads", icon: Share2 },
                                    { title: "Google SEM", icon: Search },
                                    { title: "LinkedIn ABM", icon: Globe },
                                    { title: "Email Automtn", icon: Zap }
                                ].map((p, i) => (
                                    <div key={i} className="glass p-8 rounded-3xl border border-white/5 text-center group hover:bg-wl-accent/10 transition-colors">
                                        <p.icon className="w-8 h-8 text-wl-accent mx-auto mb-4" />
                                        <div className="text-xs font-black uppercase tracking-widest">{p.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="heading-lg mb-8 leading-tight">Total Market <br /><span className="text-wl-accent">Saturation.</span></h2>
                            <p className="subtitle-lg">
                                We synchronize your growth across every digital touchpoint. Our "Growth Engine" ensures that your brand isn't just seen, but dominates the conversation in your specific niche.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-strong p-12 md:p-32 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px]"></div>
                        <h2 className="heading-xl mb-10">Dominate <br /><span className="text-wl-accent">Your Market.</span></h2>
                        <button onClick={openDemoModal} className="btn-primary">
                            Talk To Our Strategists
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
