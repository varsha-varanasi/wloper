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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-14"
                        >
                            <p className="subtitle-lg mx-auto mb-6 text-white text-3xl font-bold">
                                Smarter Talent Management with AI-Powered Insights
                            </p>
                            <p className="text-xl text-white/50 max-w-4xl mx-auto leading-relaxed">
                                Our AI-Based HCM System helps organizations evaluate skills, manage talent, and improve hiring quality through intelligent data-driven insights.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                Request Demo
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-10 rounded-[2rem] glass-strong">
                                <Layers className="w-6 h-6 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Enterprise Ready</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Audience & Core Capabilities */}
            <section className="section-padding py-32 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="glass-strong p-16 rounded-[4rem] border border-white/5 relative overflow-hidden">
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                <Users className="w-8 h-8 text-wl-accent" />
                                Designed For
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Enterprises & large organizations",
                                    "Structured HR departments",
                                    "Global Talent Management hubs",
                                    "Skill-intensive industries"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/60">
                                        <div className="w-2 h-2 rounded-full bg-wl-accent"></div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-strong p-16 rounded-[4rem] border border-white/5 relative overflow-hidden">
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                <Network className="w-8 h-8 text-wl-accent" />
                                Core Capabilities
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "AI-driven skills evaluation",
                                    "Talent assessment & tracking",
                                    "Data-backed workforce insights",
                                    "Predictive retention modeling"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/60">
                                        <div className="w-2 h-2 rounded-full bg-wl-accent"></div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Value */}
            <section className="section-padding py-32 bg-wl-dark relative overflow-hidden font-display">
                <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none -ml-96" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">Unified <br /><span className="text-wl-accent">Talent Sync.</span></h2>
                            <p className="text-2xl text-white/40 mb-12 leading-relaxed font-medium">
                                Traditional HCM systems are data repositories. Ours is a decision-making engine using recursive AI models.
                            </p>
                            <div className="space-y-8">
                                {[
                                    "AI-powered skills matrix generation",
                                    "Autonomous talent mismatch alerts",
                                    "Neural workforce forecasting"
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
                        <div className="order-1 lg:order-2 relative h-[500px]">
                            <div className="glass-strong rounded-[4rem] border border-white/10 h-full w-full overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg"
                                    alt="System Interface"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding py-32 bg-wl-dark/30">
                <div className="container-custom text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter">💰 Pricing</h2>
                    <div className="max-w-4xl mx-auto glass-strong p-20 rounded-[4rem] border border-wl-accent/20">
                        <p className="text-6xl font-black text-white mb-6">Starts from <span className="text-wl-accent">₹25,000</span> <span className="text-2xl text-white/40">/ month</span></p>
                        <p className="text-xl text-white/50 mb-12">(Pricing depends on users & customization)</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
