'use client';

import { motion } from 'framer-motion';
import {
    Users, CheckCircle2, ArrowRight, Zap,
    BarChart3, Layers, ShieldCheck,
    Sparkles, Network, Fingerprint
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
            icon: Network,
            image: "/images/envato-labs-ai-6c11c598-851f-40f7-9155-eb9146bff990.jpg"
        },
        {
            title: "Skill Fingerprinting",
            desc: "Automated verification of technical competencies through AI-driven evaluation engines.",
            icon: Fingerprint,
            image: "/images/envato-labs-ai-8c704ec1-bca5-4f0e-9049-c06414cf0508.jpg"
        },
        {
            title: "Predictive Analytics",
            desc: "Forecasting talent needs and performance trends before they impact your delivery schedule.",
            icon: BarChart3,
            image: "/images/envato-labs-ai-a5ed5fd0-3d06-4a07-b41a-7920becd0527.jpg"
        },
        {
            title: "Compliance Layer",
            desc: "Built-in regulatory framework support for global hiring and enterprise HR standards.",
            icon: ShieldCheck,
            image: "/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg"
        }
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg"
                        alt="HCM System Background"
                        fill
                        className="object-cover opacity-30 brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/40 to-wl-dark"></div>
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
                            className="subtitle-lg mx-auto mb-14 text-white/50"
                        >
                            Redefining talent management with predictive intelligence. Evaluate, hire, and scale your human capital with a system designed for the modern enterprise.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                Request Enterprise Demo
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-10 rounded-[2rem] glass-strong">
                                <Layers className="w-6 h-6 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Scalable to 100k+ Users</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Cards: Enhanced with Background Images */}
            <section className="section-padding py-32 relative">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {coreFeatures.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative glass-strong rounded-[4rem] border border-white/5 overflow-hidden min-h-[500px] flex flex-col justify-end p-12 lg:p-16 hover:border-wl-accent/20 transition-all duration-500"
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={f.image}
                                        alt={f.title}
                                        fill
                                        className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-wl-dark/60 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-20 h-20 rounded-[2rem] bg-wl-accent flex items-center justify-center text-black mb-10 shadow-[0_0_40px_rgba(202,246,72,0.2)]">
                                        <f.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-4xl font-black text-white">{f.title}</h3>
                                    <p className="text-xl text-white/40 leading-relaxed font-medium max-w-md">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Value: Big Image + Content */}
            <section className="section-padding py-32 bg-wl-dark relative overflow-hidden font-display">
                <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none -ml-96" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">Talent <br /><span className="text-wl-accent">Sync Engine.</span></h2>
                            <p className="text-2xl text-white/40 mb-12 leading-relaxed font-medium">
                                Traditional HCM systems are data repositories. Ours is a decision-making engine using recursive AI models.
                            </p>
                            <div className="space-y-8">
                                {[
                                    "Real-time resource utilization tracking.",
                                    "Automated technical skill benchmarking.",
                                    "Enterprise-grade PII data encryption."
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-6 items-center group">
                                        <div className="w-8 h-8 rounded-xl bg-wl-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-5 h-5 text-black" />
                                        </div>
                                        <span className="font-bold text-white/80 text-lg uppercase tracking-tight">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[700px]">
                            <div className="glass-strong rounded-[4rem] border border-white/10 h-full w-full overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/images/envato-labs-ai-ff99b861-f73a-4b32-8972-7e241b722b3b.jpg"
                                    alt="System Interface"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="text-center bg-black/40 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/10 border-wl-accent/20">
                                        <Sparkles className="w-16 h-16 text-wl-accent mx-auto mb-8 animate-pulse" />
                                        <div className="text-7xl font-black text-white mb-2 tracking-tighter tabular-nums">99.9%</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-wl-accent">Precision Level</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding pb-40">
                <div className="container-custom">
                    <div className="glass-strong p-20 lg:p-40 rounded-[4rem] border border-white/5 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg"
                                alt="Final CTA BG"
                                fill
                                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-tight">Optimized for <br /><span className="text-wl-accent">Enterprise.</span></h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                                    Contact Sales Unit
                                </button>
                                <Link href="/products/interview-screening" className="btn-secondary h-20 px-16 text-xl">
                                    Screening Integration
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
