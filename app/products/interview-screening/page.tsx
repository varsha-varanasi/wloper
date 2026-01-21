'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle2, ArrowRight, Zap,
    ShieldCheck, BarChart3, Bot, Users,
    Cpu, Database, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function InterviewScreeningPage() {
    const { openDemoModal } = useDemo();
    const featureGroups = [
        {
            title: "Assessment Intelligence",
            features: [
                { name: "NLP Analysis", desc: "Deep context-aware evaluation of candidate verbal and text responses." },
                { name: "Tone & Sentiment", desc: "Assess soft skills and cultural fit through advanced acoustic modeling." },
                { name: "Skills Verification", desc: "Automated coding and technical competency challenge validation." }
            ]
        },
        {
            title: "Process Automation",
            features: [
                { name: "Dynamic Scheduling", desc: "Autonomous interview slot coordination across global timezones." },
                { name: "ATS Sync", desc: "Native bi-directional data flow with Lever, Greenhouse, and more." },
                { name: "Instant Ranking", desc: "AI-driven scoring matrix based on your custom success benchmarks." }
            ]
        }
    ];

    const techSpecs = [
        { label: "Infrastructure", value: "AWS Lambda / serverless architecture for instant scaling." },
        { label: "AI Engine", value: "Proprietary Whisper + GPT-4o multimodal pipeline." },
        { label: "Compliance", value: "SOC2 Type II + GDPR global data sovereignty standards." }
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg"
                        alt="Interview Screening Background"
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
                            <Bot className="w-4 h-4 text-wl-accent" />
                            Next-Gen HR Tech
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            AI Interview <br /><span className="text-wl-accent">Screening Platform</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/50"
                        >
                            Automate your technical and behavioral assessments with an intelligent AI platform that conducts live interviews and evaluates responses in real-time.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                Request Live Demo
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-10 rounded-[2rem] glass-strong">
                                <ShieldCheck className="w-6 h-6 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Enterprise Ready</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Snapshot: Three Pillars */}
            <section className="section-padding py-32 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="group glass-strong p-12 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Zap className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Zero Friction</h3>
                            <p className="text-white/40 font-medium leading-relaxed">No software for candidates to download. Built directly for the modern mobile web ecosystem.</p>
                        </div>
                        <div className="group glass-strong p-12 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <BarChart3 className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Data Evidence</h3>
                            <p className="text-white/40 font-medium leading-relaxed">Every hiring decision is backed by transparent, explainable AI scoring protocols and data logic.</p>
                        </div>
                        <div className="group glass-strong p-12 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Human-Centric</h3>
                            <p className="text-white/40 font-medium leading-relaxed">Designed to enhance recruiter productivity and streamline technical pipelines for engineers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Breakdown Sections */}
            <section className="section-padding py-32 relative">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -ml-64" />

                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Sidebar: Feature List */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-12">
                                <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Feature <br /><span className="text-wl-accent">Logic Map.</span></h2>
                                {featureGroups.map((group, idx) => (
                                    <div key={idx} className="space-y-8">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">{group.title}</h4>
                                        <div className="space-y-6">
                                            {group.features.map((f, i) => (
                                                <div key={i} className="flex gap-6 group">
                                                    <CheckCircle2 className="w-6 h-6 text-wl-accent shrink-0 group-hover:scale-125 transition-transform" />
                                                    <div>
                                                        <h5 className="text-xl font-bold mb-2">{f.name}</h5>
                                                        <p className="text-white/40 leading-relaxed">{f.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual representation: Architecture Image Inserted Here */}
                        <div className="lg:col-span-7">
                            <div className="glass-strong rounded-[4rem] border border-white/10 relative overflow-hidden h-[800px] mb-12">
                                <Image
                                    src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg"
                                    alt="Architecture Illustration"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-wl-dark/40 to-transparent" />

                                <div className="absolute bottom-12 left-12 right-12">
                                    <h3 className="text-4xl font-black mb-8 flex items-center gap-6">
                                        <Cpu className="w-12 h-12 text-wl-accent" />
                                        Neural Architecture
                                    </h3>
                                    <div className="grid gap-4">
                                        {techSpecs.map((spec, i) => (
                                            <div key={i} className="p-6 rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/10">
                                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-wl-accent mb-2">{spec.label}</p>
                                                <p className="text-base font-bold text-white/90">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Conversion */}
            <section className="section-padding pt-0 pb-40">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-strong p-20 lg:p-40 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/envato-labs-ai-ff99b861-f73a-4b32-8972-7e241b722b3b.jpg"
                                alt="Final Call Image"
                                fill
                                className="object-cover opacity-20"
                            />
                            <div className="absolute inset-0 bg-wl-dark/60" />
                        </div>
                        <div className="relative z-10">
                            <Sparkles className="w-16 h-16 text-wl-accent mx-auto mb-10" />
                            <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight tracking-tighter">Scalable <br /><span className="text-wl-accent">Assesment Hub.</span></h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                                    Contact Sales Pod
                                </button>
                                <Link href="/blog" className="btn-secondary h-20 px-16 text-xl">
                                    Review Research
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
