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
                        src="/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg"
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
                            Customised <br /><span className="text-wl-accent">AI Chatbot.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-14"
                        >
                            <p className="subtitle-lg mx-auto mb-6 text-white text-3xl font-bold">
                                Never Miss a Lead or Customer Query Again
                            </p>
                            <p className="text-xl text-white/50 max-w-4xl mx-auto leading-relaxed">
                                Our Custom AI Chatbots work 24/7 on your website and WhatsApp to capture leads, answer queries, book appointments, and automate support — without human intervention.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                Get Started
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button onClick={openDemoModal} className="btn-secondary h-20 px-12 text-lg">
                                7-Day Free Trial
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
                                <Target className="w-8 h-8 text-wl-accent" />
                                Best For
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Clinics & healthcare providers",
                                    "Real estate brokers",
                                    "Coaching institutes",
                                    "Service-based businesses"
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
                                <Zap className="w-8 h-8 text-wl-accent" />
                                What It Does
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Instant replies on website & WhatsApp",
                                    "Lead capture & qualification",
                                    "Appointment booking automation",
                                    "Support ticket reduction"
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

            {/* Why Choose Us */}
            <section className="section-padding py-32 bg-wl-dark relative">
                <div className="container-custom">
                    <div className="glass-strong p-16 md:p-24 rounded-[4rem] border border-wl-accent/10 text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-16">Why Businesses <span className="text-wl-accent">Choose This.</span></h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "No Missed Leads", desc: "Never lose a prospect again." },
                                { title: "Faster Response", desc: "Instant gratification for customers." },
                                { title: "Lower Costs", desc: "Reduce support team overhead." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-wl-accent flex items-center justify-center text-black mx-auto">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold">{item.title}</h4>
                                    <p className="text-white/40">{item.desc}</p>
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
                            { name: 'Basic', price: '$49', setup: '+ $79 setup', desc: 'Best for small businesses', features: ['Website chatbot', 'Lead capture', 'FAQ automation'] },
                            { name: 'Business', price: '$99', desc: 'Ideal for service businesses', features: ['Website + WhatsApp', 'Appointment booking', 'CRM integration'], highlight: true },
                            { name: 'Advanced', price: 'Custom', desc: 'For complex workflows', features: ['Multiple bots', 'AI trained on your data', 'API access'] }
                        ].map((plan, i) => (
                            <div key={i} className={`glass-strong p-12 rounded-[3.5rem] border flex flex-col ${plan.highlight ? 'border-wl-accent/30 bg-wl-accent/[0.03]' : 'border-white/5'}`}>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/40 text-sm mb-6">{plan.desc}</p>
                                <div className="mb-8">
                                    <div className="text-5xl font-black text-wl-accent">{plan.price} <span className="text-sm font-normal text-white/40">/ mo</span></div>
                                    {plan.setup && <p className="text-xs text-wl-accent/60 font-bold mt-1 uppercase tracking-widest">{plan.setup}</p>}
                                </div>
                                <ul className="space-y-4 mb-12 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-white/60">
                                            <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={openDemoModal} className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? 'bg-wl-accent text-black shadow-lg hover:shadow-wl-accent/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                    {plan.name === 'Business' ? 'Start 7-Day Trial' : plan.price === 'Custom' ? 'Book Demo' : 'Get Started'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
