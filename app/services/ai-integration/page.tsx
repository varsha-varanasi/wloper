'use client';

import { motion } from 'framer-motion';
import {
    Cpu, CheckCircle, ArrowRight, Database,
    Layers, Infinity, ShieldCheck, Zap, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';

export default function AIIntegrationPage() {
    const { openDemoModal } = useDemo();
    const modules = [
        {
            icon: Database,
            title: "Data Orchestration",
            desc: "Cleaning, structuring, and syncing your enterprise data ecosystems for seamless AI consumption."
        },
        {
            icon: Infinity,
            title: "Model Fine-tuning",
            desc: "Customizing foundation models (GPT-4, Claude, Llama) with your proprietary domain knowledge."
        },
        {
            icon: Layers,
            title: "Middleware APIs",
            desc: "Engineered communication layers that connect AI brains with your legacy infrastructure."
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
                            <Cpu className="w-4 h-4 text-wl-accent" />
                            Technical Integration
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Deep AI <br /><span className="text-wl-accent">Integration.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Bridge the gap between raw data and intelligent action. We embed cutting-edge AI directly into your business DNA with specialized neural layers.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <button onClick={openDemoModal} className="btn-primary inline-flex items-center gap-3">
                                Start Integration <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Integration Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {modules.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[3.5rem] border border-white/5 hover:border-wl-accent/20 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <m.icon className="w-6 h-6" />
                                </div>
                                <h3 className="heading-sm mb-4">{m.title}</h3>
                                <p className="subtitle-md">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Stats */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="heading-lg mb-8">Scale Without <br /><span className="text-wl-accent">Friction.</span></h2>
                                <p className="subtitle-md mb-10">
                                    Our integration methodology ensures that adding AI doesn't slow down your existing systems. We focus on latency, security, and absolute reliability.
                                </p>
                                <div className="space-y-4">
                                    {["Elastic Scaling", "99.99% Node Uptime", "Zero-Latency Inference"].map((t, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-wl-accent" />
                                            <span className="font-bold uppercase tracking-widest text-sm">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-[3rem] bg-wl-accent/5 border border-white/10 flex items-center justify-center relative group">
                                    <div className="absolute inset-20 border border-wl-accent/20 rounded-full animate-ping"></div>
                                    <div className="absolute inset-10 border border-wl-accent/10 rounded-full animate-pulse"></div>
                                    <Cpu className="w-32 h-32 text-wl-accent group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Governance Section */}
            <section className="section-padding bg-wl-dark/50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative h-[500px] glass-strong rounded-[4rem] overflow-hidden border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-wl-accent/20 to-transparent opacity-30"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ShieldCheck className="w-48 h-48 text-wl-accent/20" />
                            </div>
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="heading-md mb-4">Fortified <br /><span className="text-wl-accent">Intelligence.</span></div>
                                <p className="text-wl-muted-dark font-medium uppercase tracking-[0.2em] text-[10px]">SOC2 Type II / GDPR / HIPAA Compliant</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="heading-lg mb-10">Secure <span className="text-wl-accent">By Design.</span></h2>
                            <p className="subtitle-md mb-12">
                                We treat your data with extreme reverence. Our integration layers include built-in PII redaction, audit logging, and zero-trust authentication as standard.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { title: "PII Masking", desc: "Real-time sensitive data filtering." },
                                    { title: "Audit Trails", desc: "Complete transparency for every call." },
                                    { title: "Encryption", desc: "AES-256 state-of-the-art security." },
                                    { title: "RBAC", desc: "Granular access control systems." }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-black text-wl-accent mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                                        <p className="text-sm font-medium text-wl-muted-dark opacity-80">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
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
                        <div className="absolute top-0 left-0 w-64 h-64 bg-wl-accent/10 blur-[100px]"></div>
                        <h2 className="heading-xl mb-10">Embedded <br /><span className="text-wl-accent">Intelligence.</span></h2>
                        <button onClick={openDemoModal} className="btn-primary">
                            Talk To Our Engineers
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
