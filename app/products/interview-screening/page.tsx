'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle2, ArrowRight, Zap,
    ShieldCheck, BarChart3, Bot, Users,
    Cpu, Database, Sparkles, Activity
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-14"
                        >
                            <p className="subtitle-lg mx-auto mb-6 text-white text-3xl font-bold">
                                Hire Faster. Screen Smarter. Reduce HR Workload by 60%.
                            </p>
                            <p className="text-xl text-white/50 max-w-4xl mx-auto leading-relaxed">
                                Our AI Interview Screening Platform automatically conducts first-round interviews, evaluates candidate responses, and shortlists only the most relevant profiles — so your team focuses only on the best candidates.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                Start Free Trial
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button onClick={openDemoModal} className="btn-secondary h-20 px-12 text-lg">
                                Book Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Audience & Problems Solved */}
            <section className="section-padding py-32 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="glass-strong p-16 rounded-[4rem] border border-white/5 relative overflow-hidden">
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                <Users className="w-8 h-8 text-wl-accent" />
                                Who This Is For
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Recruitment agencies",
                                    "Startups & growing companies",
                                    "HR teams with high-volume hiring",
                                    "Coaching & training institutes"
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
                                <Activity className="w-8 h-8 text-red-500" />
                                What It Solves
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Too many resumes to screen",
                                    "Slow hiring cycles",
                                    "HR team burnout",
                                    "Inconsistent interview quality"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/60">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Breakdown Sections: Key Features */}
            <section className="section-padding py-32 relative">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -ml-64" />

                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Sidebar: Feature List */}
                        <div className="lg:col-span-12">
                            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-20 text-center">
                                Key <span className="text-wl-accent">Features.</span>
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { title: "Automated AI Interviews", icon: Bot, desc: "AI conducts live interviews based on your criteria." },
                                    { title: "Smart Scoring & Ranking", icon: BarChart3, desc: "Instant evaluation and relative candidate ranking." },
                                    { title: "Custom Questions", icon: CheckCircle2, desc: "Define per-role interview logic and behavioral triggers." },
                                    { title: "Scalable for Bulk", icon: Zap, desc: "Screen 1000s of candidates simultaneously." }
                                ].map((f, i) => (
                                    <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 group hover:border-wl-accent/20 transition-all">
                                        <f.icon className="w-12 h-12 text-wl-accent mb-8 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-2xl font-bold mb-4">{f.title}</h4>
                                        <p className="text-white/40 leading-relaxed font-medium">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="section-padding py-32 bg-wl-dark relative">
                <div className="container-custom">
                    <div className="glass-strong p-16 md:p-24 rounded-[4rem] border border-wl-accent/10">
                        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Results You Can <span className="text-wl-accent">Expect.</span></h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                "5× faster shortlisting",
                                "Reduced hiring costs",
                                "Consistent candidate evaluation"
                            ].map((result, i) => (
                                <div key={i} className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-wl-accent flex items-center justify-center text-black">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <span className="text-2xl font-bold">{result}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding py-32 bg-wl-dark/30">
                <div className="container-custom">
                    <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter text-center">💰 Pricing</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { name: 'Starter', price: '$39', desc: 'Best for startups & small teams', features: ['AI interviews', 'Candidate scoring', 'Standard templates'] },
                            { name: 'Growth', price: '$89', desc: 'Ideal for growing teams', features: ['Custom questions', 'Advanced evaluation', 'Priority support'], highlight: true },
                            { name: 'Enterprise', price: 'Custom', desc: 'For recruitment agencies', features: ['Unlimited volume', 'White-label', 'API & ATS sync'] }
                        ].map((plan, i) => (
                            <div key={i} className={`glass-strong p-12 rounded-[3.5rem] border flex flex-col ${plan.highlight ? 'border-wl-accent/30 bg-wl-accent/[0.03]' : 'border-white/5'}`}>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/40 text-sm mb-8">{plan.desc}</p>
                                <div className="text-5xl font-black mb-10 text-wl-accent">{plan.price} <span className="text-sm font-normal text-white/40">/ mo</span></div>
                                <ul className="space-y-4 mb-12 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-white/60">
                                            <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={openDemoModal} className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? 'bg-wl-accent text-black shadow-lg hover:shadow-wl-accent/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                    {plan.price === 'Custom' ? 'Talk to Sales' : 'Start Free Trial'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
