'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle2, ArrowRight, Zap,
    ShieldCheck, BarChart3, Bot, Phone,
    Cpu, Database, Sparkles, PieChart,
    MessageCircle, Activity, Search
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function AICallingAgentPage() {
    const { openDemoModal } = useDemo();
    const featureGroups = [
        {
            title: "Data Acquisition Intelligence",
            features: [
                { name: "Autonomous Outreach", desc: "AI-driven voice agents that conduct structured data collection calls at scale." },
                { name: "Multilingual Support", desc: "Interact with global audiences in their native languages with perfect fluency." },
                { name: "Adaptive Scripting", desc: "Real-time conversation adjustments based on respondent answers and sentiment." }
            ]
        },
        {
            title: "Analytical Engine",
            features: [
                { name: "Instant Synthesis", desc: "Real-time conversion of voice data into structured, actionable insights." },
                { name: "Sentiment Mapping", desc: "Deep emotional analysis to understand the 'why' behind the data." },
                { name: "Predictive Modeling", desc: "Identify trends and patterns before they become obvious in raw data subsets." }
            ]
        }
    ];

    const techSpecs = [
        { label: "Voice Engine", value: "Ultra-low latency neural text-to-speech & speech-to-text." },
        { label: "Data Pipeline", value: "End-to-end encrypted real-time processing and analysis." },
        { label: "Analytics", value: "Custom LLM-driven synthesis for industry-specific data logic." }
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg"
                        alt="AI Calling Agent Background"
                        fill
                        className="object-cover opacity-30"
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
                            <Phone className="w-4 h-4 text-wl-accent" />
                            Autonomous Data Intelligence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            AI Calling Agent for <br /><span className="text-wl-accent">Data & Analysis</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-14"
                        >
                            <p className="subtitle-lg mx-auto mb-6 text-white text-3xl font-bold">
                                Automated Voice Agents That Call, Qualify & Report
                            </p>
                            <p className="text-xl text-white/50 max-w-4xl mx-auto leading-relaxed">
                                Our AI Calling Agents autonomously make calls, collect responses, and generate real-time reports — perfect for lead qualification, surveys, and follow-ups.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                See Sample Call
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button onClick={openDemoModal} className="btn-secondary h-20 px-12 text-lg">
                                Request Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Audience & Capabilities */}
            <section className="section-padding py-32 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="glass-strong p-16 rounded-[4rem] border border-white/5 relative overflow-hidden">
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                <Search className="w-8 h-8 text-wl-accent" />
                                Ideal For
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Marketing agencies",
                                    "EdTech & research companies",
                                    "Survey & feedback campaigns",
                                    "Lead qualification teams"
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
                                <Activity className="w-8 h-8 text-wl-accent" />
                                What It Can Do
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Outbound automated calls",
                                    "Structured question flows",
                                    "Real-time reporting & analysis",
                                    "Sentiment & logic tracking"
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

            {/* Systematic Features */}
            <section className="section-padding py-32 relative">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Engineered for <span className="text-wl-accent">Precision.</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Voice Fidelity", icon: Phone, desc: "Ultra-natural TTS with adaptive pacing." },
                            { title: "Live Synthesis", icon: BarChart3, desc: "Raw audio to structured data in <1s." },
                            { title: "Logic Mapping", icon: Cpu, desc: "Script branches based on user intent." }
                        ].map((item, i) => (
                            <div key={i} className="glass p-12 rounded-[3rem] border border-white/5 text-center group hover:border-wl-accent/20 transition-all">
                                <item.icon className="w-12 h-12 text-wl-accent mx-auto mb-8" />
                                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                <p className="text-white/40">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding py-32 bg-wl-dark/30">
                <div className="container-custom">
                    <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter text-center">💰 Pricing</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            { name: 'Pay As You Go', price: '$0.12', unit: '/ minute', desc: 'Best for on-demand outreach', features: ['AI outbound voice calls', 'Structured scripts', 'Call recordings', 'Basic analytics'], highlight: false },
                            { name: 'High-Volume Plans', price: 'Custom', unit: '', desc: 'For large scale operations', features: ['Bulk calling discounts', 'Advanced reporting', 'Multi-language support', 'Dedicated support'], highlight: true }
                        ].map((plan, i) => (
                            <div key={i} className={`glass-strong p-16 rounded-[4rem] border flex flex-col ${plan.highlight ? 'border-wl-accent/30 bg-wl-accent/[0.03]' : 'border-white/5'}`}>
                                <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                                <p className="text-white/40 font-medium mb-10">{plan.desc}</p>
                                <div className="mb-12">
                                    <div className="text-6xl font-black text-wl-accent">{plan.price} <span className="text-xl font-normal text-white/40">{plan.unit}</span></div>
                                </div>
                                <ul className="space-y-6 mb-16 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-4 text-white/60 text-lg">
                                            <CheckCircle2 className="w-5 h-5 text-wl-accent" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={openDemoModal} className={`w-full py-6 rounded-3xl font-black uppercase tracking-widest text-sm transition-all ${plan.highlight ? 'bg-wl-accent text-black shadow-xl hover:shadow-wl-accent/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                    {plan.name === 'Pay As You Go' ? 'See Sample Call' : 'Request Demo'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
