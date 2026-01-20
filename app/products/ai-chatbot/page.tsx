'use client';

import { motion } from 'framer-motion';
import {
    MessageSquare, CheckCircle2, ArrowRight, Zap, Target,
    Bot, Cpu, Database, Sparkles, Languages, Code2,
    Headphones, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function AIChatbotPage() {
    const { openDemoModal } = useDemo();
    const modules = [
        {
            title: "Internal Operations",
            features: [
                { name: "SOP Bot", desc: "Automate internal knowledge retrieval from your existing company documents." },
                { name: "Employee Onboarding", desc: "AI-guided onboarding assistant to handle HR FAQs and logistics." },
                { name: "IT Support Desk", desc: "Autonomous ticket resolution for common technical issues." }
            ]
        },
        {
            title: "Customer Experience",
            features: [
                { name: "Precision Concierge", desc: "Human-like customer support that responds in seconds, globally." },
                { name: "Lead Qualification", desc: "Interactive agents that qualify prospects before passing to sales." },
                { name: "Multi-Channel Sync", desc: "Deploy across WhatsApp, Telegram, Web, and Discord simultaneously." }
            ]
        }
    ];

    const integrations = [
        "Salesforce", "Hubspot", "Zendesk", "Notion", "Slack", "Microsoft Teams"
    ];

    return (
        <div className="bg-wl-dark min-h-screen text-white selection:bg-wl-accent selection:text-black pb-32">

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2012&auto=format&fit=crop"
                        alt="AI Chatbot Background"
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
                            <MessageSquare className="w-4 h-4 text-wl-accent" />
                            Conversational Intelligence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Customized <br /><span className="text-wl-accent">AI Chatbots.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Automate your customer engagement with neural conversation models. Fully custom chatbots designed to understand, learn, and convert visitors 24/7.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-16 px-12 group">
                                Deploy My Agent
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-8 py-4 rounded-full glass">
                                <Languages className="w-5 h-5 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Global - 95+ Languages</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capability Pillars */}
            <section className="section-padding py-20 bg-wl-dark/50 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Bot, name: "LLM Powered", desc: "Using OpenAI, Anthropic, or Llama 3." },
                            { icon: Database, name: "Custom RAG", desc: "Learns from your specific data/PDFs." },
                            { icon: Headphones, name: "Voice Ready", desc: "Interactive AI voice response options." },
                            { icon: ShieldCheck, name: "Privacy First", desc: "PII masking and custom data silos." }
                        ].map((item, i) => (
                            <div key={i} className="glass p-8 rounded-3xl border border-white/5 group hover:border-wl-accent/20 transition-all">
                                <item.icon className="w-10 h-10 text-wl-accent mb-6" />
                                <h3 className="font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-sm text-wl-muted-dark font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modular Deep Dive */}
            <section className="section-padding py-32">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">Built for Your <br /><span className="text-wl-accent">Specific Workflow</span></h2>

                            <div className="space-y-16">
                                {modules.map((m, idx) => (
                                    <div key={idx} className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-[1px] bg-wl-accent"></div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-wl-accent">{m.title}</h4>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {m.features.map((f, i) => (
                                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-all">
                                                    <h5 className="font-bold text-lg mb-3">{f.name}</h5>
                                                    <p className="text-sm text-wl-muted-dark leading-relaxed">{f.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 pt-20 lg:pt-0">
                            <div className="glass-strong p-12 rounded-[4rem] border border-white/10 relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                                    <Code2 className="w-8 h-8 text-wl-accent" />
                                    Native Ecosystem
                                </h3>
                                <p className="text-wl-muted-dark mb-10 font-medium">We don't just build the bot—we wire it into your existing tools for a seamless automated pipeline.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {integrations.map((app) => (
                                        <div key={app} className="py-3 px-6 rounded-2xl bg-white/5 border border-white/5 text-center text-xs font-bold text-white/60">
                                            {app}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 p-8 rounded-3xl bg-wl-accent/5 border border-wl-accent/10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-wl-accent mb-2">Technical Highlight</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        "Our chatbots maintain persistent memory and state, allowing for complex multi-turn conversations that feel human."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trial CTA */}
            <section className="container-custom">
                <div className="glass-strong p-12 md:p-24 rounded-[4rem] text-center border border-white/10 relative overflow-hidden group">
                    <Sparkles className="w-12 h-12 text-wl-accent mx-auto mb-10" />
                    <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">Your Business. Our AI. <span className="text-wl-accent">Zero Latency.</span></h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button onClick={openDemoModal} className="btn-primary h-16 px-12">
                            Deploy Custom Agent
                        </button>
                        <Link href="/services/ai-strategy" className="btn-secondary h-16 px-12">
                            View Strategy Roadmap
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
