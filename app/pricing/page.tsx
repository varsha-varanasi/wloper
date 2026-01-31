'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    Check,
    CheckCircle2,
    ArrowRight,
    Zap,
    ShieldCheck,
    Users,
    Sparkles,
    MessageSquare,
    Phone,
    BarChart3,
    Search,
    ChevronDown,
    Plus,
    X,
    Layout,
    Code2,
    Database,
    Cpu,
    Target,
    Activity,
    Smartphone,
    Globe
} from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import Image from 'next/image';
import Link from 'next/link';

type ProductTab = 'screening' | 'chatbot' | 'calling' | 'hcm';

export default function PricingPage() {
    const { openDemoModal } = useDemo();
    const [activeTab, setActiveTab] = useState<ProductTab>('screening');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const products = {
        screening: {
            title: 'AI Interview Screening',
            subtitle: 'Hire Faster Without Expanding Your HR Team',
            desc: 'Automate first-round interviews, evaluate candidates consistently, and shortlist top talent in minutes.',
            image: '/images/ai-interview.png',
            plans: [
                {
                    name: 'Starter Plan',
                    price: '$39',
                    unit: '/ month',
                    bestFor: 'Startups & small teams',
                    features: [
                        'AI-led first-round interviews',
                        'Candidate scoring & ranking',
                        'Standard interview templates',
                        'Email support'
                    ],
                    cta: 'Start Free Trial',
                    highlight: false
                },
                {
                    name: 'Growth Plan',
                    price: '$89',
                    unit: '/ month',
                    bestFor: 'Growing teams & recruiters',
                    features: [
                        'Higher interview volume',
                        'Custom interview questions per role',
                        'Advanced evaluation logic',
                        'Downloadable reports',
                        'Priority support'
                    ],
                    cta: 'Book Demo',
                    highlight: true
                },
                {
                    name: 'Agency / Enterprise',
                    price: 'Custom',
                    unit: '',
                    bestFor: 'Recruitment agencies & high-volume hiring',
                    features: [
                        'Unlimited interviews',
                        'White-label option',
                        'API & ATS integrations',
                        'Dedicated account manager'
                    ],
                    cta: 'Talk to Sales',
                    highlight: false
                }
            ]
        },
        chatbot: {
            title: 'Customised AI Chatbots',
            subtitle: 'Convert More Conversations Automatically',
            desc: 'Capture leads, automate support, and book appointments 24/7 on website and WhatsApp.',
            image: '/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg',
            plans: [
                {
                    name: 'Basic Plan',
                    price: '$49',
                    unit: '/ month',
                    setup: '+ $79 one-time setup',
                    bestFor: 'Small businesses',
                    features: [
                        'Website chatbot',
                        'Lead capture & qualification',
                        'FAQ automation',
                        'Email notifications'
                    ],
                    cta: 'Get Started',
                    highlight: false
                },
                {
                    name: 'Business Plan',
                    price: '$99',
                    unit: '/ month',
                    bestFor: 'Service businesses & agencies',
                    features: [
                        'Website + WhatsApp chatbot',
                        'Appointment booking',
                        'CRM / Google Sheets integration',
                        'Custom conversation flows',
                        'Priority support'
                    ],
                    cta: '7-Day Free Trial',
                    highlight: true
                },
                {
                    name: 'Advanced',
                    price: 'Custom',
                    unit: '',
                    bestFor: 'Enterprises & complex workflows',
                    features: [
                        'Multiple bots & channels',
                        'AI trained on your data',
                        'Workflow & internal automation',
                        'API & third-party integrations'
                    ],
                    cta: 'Book Demo',
                    highlight: false
                }
            ]
        },
        calling: {
            title: 'AI Calling Agent',
            subtitle: 'Automated Voice Calls at Scale',
            desc: 'Make outbound calls, collect responses, and generate insights — without human agents.',
            image: '/images/envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg',
            plans: [
                {
                    name: 'Pay As You Go',
                    price: '$0.12',
                    unit: '/ minute',
                    bestFor: 'On-demand outreach',
                    features: [
                        'AI outbound voice calls',
                        'Structured scripts',
                        'Call recordings',
                        'Basic analytics'
                    ],
                    cta: 'See Sample Call',
                    highlight: false
                },
                {
                    name: 'High-Volume Plans',
                    price: 'Custom',
                    unit: '',
                    bestFor: 'Large scale operations',
                    features: [
                        'Bulk calling discounts',
                        'Advanced reporting',
                        'Multi-language support',
                        'Dedicated support'
                    ],
                    cta: 'Request Demo',
                    highlight: true
                }
            ]
        },
        hcm: {
            title: 'AI-Based HCM System',
            subtitle: 'Enterprise Workforce Intelligence',
            desc: 'Designed for large organizations managing complex hiring, skills evaluation, and workforce planning.',
            image: '/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg',
            plans: [
                {
                    name: 'Enterprise Plan',
                    price: '$399',
                    unit: '/ month',
                    bestFor: 'Large organizations',
                    features: [
                        'AI-driven skills evaluation',
                        'Talent & workforce analytics',
                        'Custom dashboards',
                        'Role-based access control',
                        'Enterprise-grade security',
                        'Dedicated deployment team'
                    ],
                    cta: 'Request Demo',
                    highlight: true
                }
            ]
        }
    };

    const comparisonFeatures = [
        { name: 'AI Interviews', starter: true, growth: true, enterprise: true },
        { name: 'Custom Questions', starter: false, growth: true, enterprise: true },
        { name: 'Reports', starter: false, growth: true, enterprise: true },
        { name: 'White-label', starter: false, growth: false, enterprise: true },
        { name: 'API Access', starter: false, growth: false, enterprise: true },
    ];

    const faqs = [
        {
            q: 'Is there a free trial?',
            a: 'Yes, selected plans include free trials or demo access. For example, our Chatbot Business Plan comes with a 7-day free trial.'
        },
        {
            q: 'Can I change plans later?',
            a: 'Yes, you can upgrade or downgrade your plan at any time through your dashboard or by contacting our support team.'
        },
        {
            q: 'Are there long-term contracts?',
            a: 'No. All our plans are month-to-month by default, giving you full flexibility. We do offer discounts for annual billing if you prefer.'
        },
        {
            q: 'Is support included?',
            a: 'Yes. Every plan includes email support. Higher-tier plans come with priority support and dedicated account managers.'
        },
        {
            q: 'Is my data secure?',
            a: 'Absolutely. We follow global security best practices, using enterprise-grade encryption and strictly complying with privacy standards like GDPR and SOC2.'
        }
    ];

    return (
        <div className="bg-wl-dark text-white min-h-screen">
            {/* 1️⃣ HERO SECTION */}
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
                {/* Background Design */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="tag-label mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-wl-accent" />
                                Premium AI Infrastructure
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="heading-xl mb-10 tracking-tighter"
                            >
                                Simple, Transparent <br />
                                <span className="text-wl-accent text-glow-accent">Pricing</span> for Scale.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl text-white/50 mb-14 leading-relaxed max-w-xl font-medium"
                            >
                                Choose the perfect AI blueprint to automate your growth engine. From hiring to customer engagement, we scale with you.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-6"
                            >
                                <button onClick={openDemoModal} className="btn-primary h-20 px-12 text-lg group">
                                    Start Free Trial
                                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button onClick={openDemoModal} className="btn-secondary h-20 px-12 text-lg">
                                    Talk to Sales
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-16 flex items-center gap-8 border-t border-white/5 pt-12"
                            >
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-wl-dark bg-white/10 flex items-center justify-center overflow-hidden">
                                            <Image src={`/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg`} alt="Client" width={48} height={48} className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-white/40 font-bold uppercase tracking-widest">Trusted by 500+ Innovators</p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-wl-accent/20 rounded-[4rem] blur-3xl opacity-20 animate-pulse" />
                            <div className="relative glass-strong p-4 rounded-[4rem] border border-white/10 overflow-hidden group">
                                <Image
                                    src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg"
                                    alt="AI Infrastructure"
                                    width={800}
                                    height={1000}
                                    className="rounded-[3.5rem] object-cover aspect-[4/5] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="glass-strong p-8 rounded-3xl border border-white/10">
                                        <p className="text-xl font-bold mb-2">"Wloper's AI reduced our operational costs by 45% in just 3 months."</p>
                                        <p className="text-sm text-wl-accent font-black uppercase tracking-widest">— TechLead Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ PRICING NAV / TOGGLE */}
            <section className="sticky top-24 z-50 py-6 bg-wl-dark/80 backdrop-blur-xl border-y border-white/5 shadow-2xl">
                <div className="container-custom">
                    <div className="flex flex-nowrap overflow-x-auto pb-4 md:pb-0 md:justify-center items-center gap-4 no-scrollbar">
                        {[
                            { id: 'screening', name: 'AI Interview Screening', icon: Users },
                            { id: 'chatbot', name: 'AI Chatbot Automation', icon: MessageSquare },
                            { id: 'calling', name: 'AI Calling Agent', icon: Phone },
                            { id: 'hcm', name: 'Enterprise HCM', icon: ArchitecturePreviewerIcon }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id as ProductTab);
                                    const element = document.getElementById('pricing-grid');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                }}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeTab === tab.id
                                    ? 'bg-wl-accent text-black shadow-[0_0_20px_rgba(202,246,72,0.4)]'
                                    : 'text-white/40 hover:text-white hover:bg-white/5 border border-white/5'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3, 4, 5, 6 PRICING CONTENT SECTION */}
            <section id="pricing-grid" className="section-padding py-32 bg-wl-dark relative">
                <div className="container-custom">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                        >
                            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
                                <div className="text-left">
                                    <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                                        {products[activeTab].title}
                                    </h2>
                                    <p className="text-2xl text-wl-accent font-bold mb-8 uppercase tracking-[0.2em]">
                                        {products[activeTab].subtitle}
                                    </p>
                                    <p className="text-xl text-white/40 font-medium leading-relaxed max-w-xl">
                                        {products[activeTab].desc}
                                    </p>
                                </div>
                                <div className="relative group">
                                    <div className="absolute -inset-10 bg-wl-accent/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <Image
                                        src={products[activeTab].image}
                                        alt={products[activeTab].title}
                                        width={1000}
                                        height={600}
                                        className="rounded-[3rem] border border-white/5 object-cover aspect-video shadow-2xl relative z-10"
                                    />
                                </div>
                            </div>

                            {activeTab === 'hcm' ? (
                                /* Enterprise HCM Premium Layout */
                                <div className="max-w-6xl mx-auto glass-strong rounded-[4rem] border border-wl-accent/20 overflow-hidden group">
                                    <div className="grid lg:grid-cols-2">
                                        <div className="p-16 lg:p-24 space-y-12">
                                            <div className="tag-label">Premium Tier</div>
                                            <h3 className="text-4xl lg:text-5xl font-black">Enterprise Plan</h3>
                                            <p className="text-xl text-white/50">{products.hcm.desc}</p>
                                            <div className="space-y-6">
                                                {products.hcm.plans[0].features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-4">
                                                        <div className="w-6 h-6 rounded-full bg-wl-accent/20 flex items-center justify-center">
                                                            <Check className="w-4 h-4 text-wl-accent" />
                                                        </div>
                                                        <span className="text-lg font-bold text-white/80">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl w-full sm:w-auto">
                                                Request Demo
                                            </button>
                                        </div>
                                        <div className="bg-wl-accent/5 p-16 lg:p-24 flex flex-col justify-center items-center text-center border-l border-white/5 relative">
                                            <Image src="/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg" alt="HCM" fill className="absolute inset-0 object-cover opacity-10 mix-blend-overlay" />
                                            <div className="relative z-10">
                                                <p className="text-sm font-black uppercase tracking-[0.3em] text-wl-accent mb-6">Starting Price</p>
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <span className="text-9xl font-black tracking-tighter">$399</span>
                                                    <span className="text-2xl text-white/40 font-bold">/mo</span>
                                                </div>
                                                <p className="text-white/40 font-medium">Custom scaling for 1000+ employees</p>
                                                <div className="mt-20 w-full h-[1px] bg-white/10 relative">
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-4 font-black text-[10px] uppercase tracking-widest text-white/20">
                                                        Infrastructure Details
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-8 mt-12 w-full">
                                                    <div className="text-left">
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-wl-accent mb-2">Uptime</p>
                                                        <p className="text-2xl font-black">99.99%</p>
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-wl-accent mb-2">Support</p>
                                                        <p className="text-2xl font-black">24/7/365</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Grid Layout for Other Products */
                                <div className={`grid gap-8 max-w-7xl mx-auto ${products[activeTab].plans.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 'md:grid-cols-3'
                                    }`}>
                                    {products[activeTab].plans.map((plan, idx) => (
                                        <div
                                            key={idx}
                                            className={`relative rounded-[3.5rem] p-10 lg:p-14 border flex flex-col transition-all duration-500 hover:-translate-y-2 group overflow-hidden ${plan.highlight
                                                ? 'glass-strong border-wl-accent/30 shadow-[0_20px_60px_rgba(202,246,72,0.15)] bg-wl-accent/[0.03]'
                                                : 'glass border-white/5'
                                                }`}
                                        >
                                            {plan.highlight && (
                                                <div className="absolute top-8 right-8 flex items-center gap-2 bg-wl-accent text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                    <Sparkles className="w-3 h-3" />
                                                    Recommended
                                                </div>
                                            )}

                                            <div className="mb-12">
                                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                                <p className="text-sm text-white/40 font-bold uppercase tracking-widest">{plan.bestFor}</p>
                                            </div>

                                            <div className="mb-12">
                                                <div className="flex items-baseline gap-2">
                                                    <span className={`text-6xl font-black tracking-tighter ${plan.highlight ? 'text-wl-accent' : 'text-white'}`}>
                                                        {plan.price}
                                                    </span>
                                                    {plan.unit && <span className="text-lg text-white/40 font-bold">{plan.unit}</span>}
                                                </div>
                                                {/* @ts-ignore */}
                                                {plan.setup && <p className="mt-2 text-sm text-wl-accent font-bold">{plan.setup}</p>}
                                            </div>

                                            <ul className="space-y-6 mb-14 flex-1 text-left">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <Check className={`w-5 h-5 shrink-0 mt-1 ${plan.highlight ? 'text-wl-accent' : 'text-white/20'}`} />
                                                        <span className="text-white/60 font-medium leading-relaxed">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                onClick={openDemoModal}
                                                className={`w-full h-16 rounded-3xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 ${plan.highlight
                                                    ? 'bg-wl-accent text-black hover:shadow-[0_0_25px_rgba(202,246,72,0.4)] hover:scale-[1.02]'
                                                    : 'bg-white/5 text-white hover:bg-white/10'
                                                    }`}
                                            >
                                                {plan.cta}
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 7️⃣ COMPARISON TABLE */}
            <section className="section-padding py-32 bg-wl-dark/30 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-wl-accent/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Compare <span className="text-wl-accent">Capabilities.</span></h2>
                        <p className="text-2xl text-white/40 font-medium">Find the right protocol for your business architecture.</p>
                    </div>

                    <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border border-white/5 glass-strong shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="p-10 text-xs font-black uppercase tracking-widest text-white/40 border-b border-white/5">Protocol Feature</th>
                                    <th className="p-10 text-sm font-black uppercase tracking-widest text-white border-b border-white/5">Starter</th>
                                    <th className="p-10 text-sm font-black uppercase tracking-widest text-wl-accent border-b border-white/5">Growth</th>
                                    <th className="p-10 text-sm font-black uppercase tracking-widest text-white border-b border-white/5">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {comparisonFeatures.map((f, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="p-10 text-lg font-bold text-white/80 group-hover:text-white group-hover:pl-12 transition-all">{f.name}</td>
                                        <td className="p-10">
                                            {f.starter ? <CheckCircle2 className="w-7 h-7 text-white/20" /> : <X className="w-6 h-6 text-white/5" />}
                                        </td>
                                        <td className="p-10">
                                            {f.growth ? <CheckCircle2 className="w-7 h-7 text-wl-accent" /> : <X className="w-6 h-6 text-white/5" />}
                                        </td>
                                        <td className="p-10">
                                            {f.enterprise ? <CheckCircle2 className="w-7 h-7 text-white" /> : <X className="w-6 h-6 text-white/5" />}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 8️⃣ FAQ SECTION */}
            <section className="section-padding py-32 bg-wl-dark relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">Got <span className="text-wl-accent">Questions?</span></h2>
                            <p className="text-2xl text-white/40 font-medium leading-relaxed mb-12">
                                We're here to provide technical clarity and deployment guidance.
                            </p>
                            <div className="p-10 rounded-[3rem] bg-wl-accent/5 border border-wl-accent/10 relative overflow-hidden group">
                                <Image src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg" alt="Support" fill className="absolute inset-0 object-cover opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="relative z-10">
                                    <p className="text-sm font-black uppercase tracking-widest text-wl-accent mb-4">Tactical Support</p>
                                    <p className="text-white/60 mb-8 font-medium text-lg leading-relaxed">"Our engineering team is dedicated to ensuring your AI transition is seamless and secure."</p>
                                    <button onClick={openDemoModal} className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs group/btn">
                                        Consult with an Expert <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`glass rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openFaq === idx ? 'border-wl-accent/30 bg-wl-accent/[0.02]' : 'border-white/5 hover:border-white/10'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full p-10 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-2xl font-bold transition-colors ${openFaq === idx ? 'text-wl-accent' : 'text-white/80'}`}>{faq.q}</span>
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-wl-accent text-black rotate-45' : 'bg-white/5 text-white/40 group-hover:text-white'}`}>
                                            <Plus className="w-6 h-6" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-10 pb-10"
                                            >
                                                <p className="text-xl text-white/50 leading-relaxed font-medium">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9️⃣ FINAL CTA */}
            <section className="section-padding pb-40">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass-strong p-16 md:p-32 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden group"
                    >
                        <Image src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg" alt="Final CTA" fill className="absolute inset-0 object-cover opacity-[0.03] group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-wl-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-tight">
                                Ready to Upgrade Your <br /><span className="text-wl-accent text-glow-accent">Business Intelligence?</span>
                            </h2>
                            <p className="text-3xl text-white/40 mb-16 max-w-3xl mx-auto font-medium">
                                Let's architect a custom solution that aligns with your specific operational scale.
                            </p>
                            <div className="flex flex-wrap justify-center gap-8">
                                <button onClick={openDemoModal} className="btn-primary h-24 px-16 text-2xl group">
                                    Book Free Demo
                                    <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button onClick={openDemoModal} className="btn-secondary h-24 px-16 text-2xl">
                                    Talk to Sales
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 1️⃣0️⃣ LEGAL & PRICING DISCLAIMER */}
            <footer className="py-20 border-t border-white/5 bg-[#050505]">
                <div className="container-custom text-center">
                    <p className="text-sm text-white/20 font-medium max-w-4xl mx-auto leading-relaxed">
                        All prices are starting estimates. Final pricing may vary based on usage, integrations, customization, and regional taxes.
                        Wloper Systems reserves the right to adjust architectural protocols per individual security audits.
                        Wloper Systems &copy; {new Date().getFullYear()} - Redefining Intelligence.
                    </p>
                </div>
            </footer>
        </div>
    );
}

function ArchitecturePreviewerIcon({ className }: { className?: string }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
    );
}
