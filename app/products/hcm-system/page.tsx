'use client';

import { motion } from 'framer-motion';
import {
    Users, CheckCircle2, ArrowRight, Zap, Target,
    BarChart3, Layout, Layers, ShieldCheck, Database,
    Search, Sparkles, Network, Fingerprint
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function HCMSystemPage() {
    const { openDemoModal } = useDemo();
    const coreFeatures = [
        {
            title: "Talent Orchestration",
            desc: "Dynamic resource allocation and talent mapping based on project requirements and individual skill matrices.",
            icon: Network
        },
        {
            title: "Skill Fingerprinting",
            desc: "Automated verification of technical competencies through AI-driven evaluation engines.",
            icon: Fingerprint
        },
        {
            title: "Predictive Analytics",
            desc: "Forecasting talent needs and performance trends before they impact your delivery schedule.",
            icon: BarChart3
        },
        {
            title: "Compliance Layer",
            desc: "Built-in regulatory framework support for global hiring and enterprise HR standards.",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop"
                        alt="HCM System Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/80 to-wl-dark"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Users className="w-4 h-4 text-wl-accent" />
                            Enterprise Workforce AI
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            AI-Based <br /><span className="text-wl-accent">HCM System.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Redefining talent management with predictive intelligence. Evaluate, hire, and scale your human capital with a system designed for the modern enterprise landscape.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-16 px-12 group">
                                Request Enterprise Demo
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-8 py-4 rounded-full glass">
                                <Layers className="w-5 h-5 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Scalable to 100k+ Users</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid: Detailed Logic */}
            <section className="section-padding py-20 relative">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {coreFeatures.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 md:p-16 rounded-[4rem] border border-white/5 group hover:border-wl-accent/20 transition-all flex flex-col items-start"
                            >
                                <div className="w-16 h-16 rounded-full bg-wl-accent/10 flex items-center justify-center mb-8 border border-wl-accent/20 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <f.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-white">{f.title}</h3>
                                <p className="text-lg text-wl-muted-dark leading-relaxed font-medium">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Value Deep Dive */}
            <section className="section-padding py-32 bg-wl-dark/30 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Scale Talent without <br /><span className="text-wl-accent">Scaling Chaos.</span></h2>
                            <p className="text-xl text-wl-muted-dark mb-10 leading-relaxed font-medium">
                                Traditional HCM systems are data repositories. Ours is a decision-making engine. We use recursive AI models to help leadership teams understand workforce velocity and skill gaps in real-time.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Real-time resource utilization tracking.",
                                    "Automated technical skill benchmarking.",
                                    "Enterprise-grade PII data encryption."
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-6 h-6 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                        </div>
                                        <span className="font-bold text-white/80">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square glass-strong rounded-[4rem] border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-wl-accent/5 to-transparent"></div>
                                <div className="relative z-10 text-center">
                                    <Sparkles className="w-16 h-16 text-wl-accent mx-auto mb-8 animate-pulse" />
                                    <div className="text-5xl font-black text-white mb-2">99.9%</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-wl-muted-dark">Accuracy in Skill Prediction</div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-wl-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-custom mt-20">
                <div className="p-12 md:p-24 rounded-[4rem] bg-white/[0.02] border border-white/10 text-center relative overflow-hidden">
                    <h2 className="text-3xl md:text-5xl font-black mb-10">Optimized for Enterprise. <br />Powered by <span className="text-wl-accent">WLOPER.</span></h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button onClick={openDemoModal} className="btn-primary h-16 px-12">
                            Contact Sales
                        </button>
                        <Link href="/products/interview-screening" className="btn-secondary h-16 px-12">
                            Explore Screening Integration
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
