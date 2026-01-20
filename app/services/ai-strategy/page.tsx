'use client';

import { motion } from 'framer-motion';
import {
    Compass, CheckCircle, ArrowRight, Lightbulb,
    Target, LineChart, ShieldCheck, Zap, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';

export default function AIStrategyPage() {
    const { openDemoModal } = useDemo();
    const modules = [
        {
            icon: Lightbulb,
            title: "Opportunity Audit",
            desc: "We analyze your current workflows to identify high-impact AI opportunities that drive immediate ROI."
        },
        {
            icon: Target,
            title: "Neural Roadmap",
            desc: "A step-by-step technical blueprint for integrating LLMs and autonomous agents into your stack."
        },
        {
            icon: LineChart,
            title: "Predictive Modeling",
            desc: "Forecasting market trends and customer behavior using custom-trained neural networks."
        }
    ];

    const benefits = [
        "40% reduction in operational overhead",
        "Predictive accuracy improvement up to 85%",
        "Rapid prototyping cycle (under 2 weeks)",
        "Enterprise-grade security & compliance"
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--wl-accent)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Compass className="w-4 h-4 text-wl-accent" />
                            Strategic Intelligence
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            AI Strategy <br /><span className="text-wl-accent">& Consulting.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Navigating the AI landscape requires more than code—it requires a vision. We help you architect the future of your enterprise with technical blueprints.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <button onClick={openDemoModal} className="btn-primary flex items-center gap-3 w-fit">
                                Start Free Roadmap <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Modules */}
            <section className="section-padding bg-wl-dark/50 pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {modules.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-12 rounded-[3.5rem] border border-white/5 hover:border-wl-accent/30 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-wl-accent/10 flex items-center justify-center text-wl-accent mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <m.icon className="w-6 h-6" />
                                </div>
                                <h3 className="heading-sm mb-4">{m.title}</h3>
                                <p className="subtitle-md">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Edge */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="heading-lg mb-10">
                                Why Our <span className="text-wl-accent">Strategy</span> Wins.
                            </h2>
                            <div className="grid gap-6">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-4 items-center p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 group hover:bg-wl-accent/5 transition-colors">
                                        <div className="w-3 h-3 rounded-full bg-wl-accent shadow-[0_0_10px_rgba(202,246,72,0.5)]"></div>
                                        <span className="text-lg font-bold">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative">
                            <div className="glass-strong rounded-[4rem] overflow-hidden border border-white/10 h-[600px] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop"
                                    alt="Data Strategy"
                                    className="w-full h-full object-cover grayscale opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="text-center">
                                        <Zap className="w-24 h-24 text-wl-accent mx-auto mb-6 animate-pulse" />
                                        <p className="text-5xl font-black uppercase tracking-tighter">Zero Lag.<br />High Impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Framework Section */}
            <section className="section-padding bg-wl-dark/30">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        <h2 className="heading-lg mb-8">Our <span className="text-wl-accent">3-Phase</span> Blueprint.</h2>
                        <p className="subtitle-lg mx-auto">A structured methodology for transitioning from traditional workflows to AI-native excellence.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { phase: "Audit", title: "Technical Resonance", list: ["Infrastructure Check", "Data Quality Audit", "Ethics Mapping"] },
                            { phase: "Design", title: "Model Selection", list: ["Prompt Engineering", "Fine-tuning Specs", "Security Rails"] },
                            { phase: "Deploy", title: "Continuous Ops", list: ["Human-in-the-loop", "Performance MLOps", "Scaling Vitals"] }
                        ].map((step, idx) => (
                            <div key={idx} className="relative p-10 glass-strong rounded-[3rem] border border-white/5">
                                <div className="text-wl-accent font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">Phase 0{idx + 1}</div>
                                <h4 className="heading-sm mb-6">{step.title}</h4>
                                <ul className="space-y-4">
                                    {step.list.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-wl-muted-dark font-semibold text-[10px] uppercase tracking-widest">
                                            <div className="w-1.5 h-1.5 rounded-full bg-wl-accent/40" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong p-12 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[50%] h-full bg-wl-accent/5 blur-[120px]"></div>
                        <div className="relative z-10 max-w-3xl">
                            <Sparkles className="w-12 h-12 text-wl-accent mb-8" />
                            <h2 className="heading-lg mb-8 text-balance">Autonomous Intelligence is No Longer Optional.</h2>
                            <p className="subtitle-lg mb-12">
                                We don't just give you a slide deck. We give you a prototype, a roadmap, and the team to build it. Our consulting is rooted in engineering excellence.
                            </p>
                            <button onClick={openDemoModal} className="btn-primary">
                                Consult With An Architect
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
