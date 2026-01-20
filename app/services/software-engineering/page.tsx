'use client';

import { motion } from 'framer-motion';
import {
    Code2, CheckCircle, ArrowRight, Laptop,
    Smartphone, Globe, ShieldCheck, Zap, Sparkles,
    Terminal, GitBranch, Cpu, Rocket
} from 'lucide-react';
import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';

export default function SoftwareEngineeringPage() {
    const { openDemoModal } = useDemo();
    const stacks = [
        {
            icon: Terminal,
            title: "Scalable Backends",
            desc: "Distributed systems built with Go, Rust, and Node.js for extreme throughput and low latency."
        },
        {
            icon: Laptop,
            title: "Modern Frontends",
            desc: "High-performance interfaces using Next.js, Framer Motion, and Tailwind for elite UX."
        },
        {
            icon: Smartphone,
            title: "Native Mobile",
            desc: "Seamless cross-platform experiences with React Native and Flutter for global reach."
        }
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
                            <Code2 className="w-4 h-4 text-wl-accent" />
                            Elite Engineering
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Digital <br /><span className="text-wl-accent">Architectures.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            We don't just write code; we engineer systems that define industries. From cloud-native apps to critical SaaS infrastructure and distributed clusters.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <button onClick={openDemoModal} className="btn-primary inline-flex items-center gap-3">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {stacks.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[3.5rem] border border-white/5 hover:border-wl-accent/20 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                                <p className="text-wl-muted-dark leading-relaxed font-medium">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standard */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none"></div>

                        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                            <div className="relative order-2 lg:order-1">
                                <div className="aspect-video rounded-[3rem] bg-wl-dark/50 border border-white/10 p-8 font-mono text-sm text-wl-accent/60 overflow-hidden">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-wl-accent">➜ wloper git commit -m "feat: neural scaling engine"</p>
                                        <p>Running unit tests...</p>
                                        <p className="text-green-400">✓ 458 tests passed</p>
                                        <p>Checking security vulnerability...</p>
                                        <p className="text-green-400">✓ 0 vulnerabilities found</p>
                                        <p>Optimizing bundle size...</p>
                                        <p className="text-white">Build size: 42kb (Extreme Optimization)</p>
                                        <p className="text-wl-accent animate-pulse">➜ Deploying to edge...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="heading-lg mb-8">Code with <br /><span className="text-wl-accent">No Compromise.</span></h2>
                                <p className="subtitle-md mb-10">
                                    Our engineering team follows the strictest CI/CD pipelines and security protocols to ensure your product is enterprise-ready from Day 1.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {["TDD Approach", "ISO-27001", "Clean Arch", "GitOps"].map((t, i) => (
                                        <div key={i} className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/5">
                                            <GitBranch className="w-4 h-4 text-wl-accent" />
                                            <span className="font-bold text-xs uppercase tracking-widest">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifecycle Section */}
            <section className="section-padding bg-wl-dark/30">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Continuous <span className="text-wl-accent">Evolution.</span></h2>
                        <p className="text-wl-muted-dark max-w-2xl mx-auto font-medium">We don't just ship and leave. We maintain, optimize, and scale your systems as your user base grows.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { label: "Predictive Scaling", icon: Rocket },
                            { label: "Security Updates", icon: ShieldCheck },
                            { label: "Performance Tuning", icon: Zap },
                            { label: "Feature Roadmap", icon: Sparkles }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-strong p-10 rounded-[3rem] border border-white/5 text-center group hover:border-wl-accent/30 transition-all">
                                <item.icon className="w-12 h-12 text-wl-accent mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="font-black uppercase tracking-widest text-xs">{item.label}</h4>
                            </div>
                        ))}
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
                        <div className="absolute inset-0 bg-wl-accent/5 pointer-events-none"></div>
                        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Ready to <br /><span className="text-wl-accent">Execute?</span></h2>
                        <button onClick={openDemoModal} className="btn-primary">
                            Talk To Our Architects
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
