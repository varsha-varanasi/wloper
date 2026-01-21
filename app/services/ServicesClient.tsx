'use client';

import { motion } from 'framer-motion';
import { useDemo } from '@/context/DemoContext';
import Link from 'next/link';
import { Bot, Cpu, BarChart3, Layers, ArrowUpRight, Blocks, Smartphone as MobileIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });
const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function ServicesClient() {
    const { openDemoModal } = useDemo();
    const mainServices = [
        {
            icon: Blocks,
            title: 'Blockchain Solutions',
            description: 'Engineering trustless architectures, smart contracts, and decentralized economies with institutional security.',
            features: ['Solidity Auditing', 'Layer 2 Scaling', 'Web3 Hubs'],
            link: '/services/blockchain-solutions'
        },
        {
            icon: MobileIcon,
            title: 'Mobile Engineering',
            description: 'High-performance iOS and Android applications built for massive scale and intuitive user immersion.',
            features: ['React Native', 'Flutter Mastery', 'Native Performance'],
            link: '/services/mobile-app-development'
        },
        {
            icon: BarChart3,
            title: 'Digital Growth',
            description: 'Data-driven marketing engineering aimed at maximizing performance through algorithmic SEO and funnel optimization.',
            features: ['ROI Optimization', 'Growth Hacking', 'Digital Audit'],
            link: '/services/digital-growth'
        }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-32 overflow-hidden">
                <NeuralBackground />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Layers className="w-4 h-4 text-wl-accent" />
                            Elite Build Protocol
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10"
                        >
                            Engineered for <br /><span className="text-wl-accent">Hyper-Growth.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/50"
                        >
                            From neural strategies to decentralized economies, we build the technical infrastructure that defines industry leaders.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onClick={openDemoModal}
                            className="btn-primary h-20 px-12 text-lg"
                        >
                            Initialize Build
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section className="section-padding relative z-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {mainServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-strong p-12 rounded-[3.5rem] border border-white/5 group hover:border-wl-accent/20 transition-all flex flex-col h-full"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">{service.title}</h3>
                                <p className="text-white/40 mb-10 leading-relaxed flex-grow">{service.description}</p>
                                <div className="space-y-4 mb-12">
                                    {service.features.map(f => (
                                        <div key={f} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-wl-accent" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href={service.link}
                                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                >
                                    Deep Protocol <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Deep Dive */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong rounded-[4rem] border border-white/5 p-12 md:p-32 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full opacity-20">
                            <GlobalGlobe />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div className="tag-label">Neural Core</div>
                                <h2 className="heading-md">AI Strategy & <br /><span className="text-wl-accent">Logic Integration.</span></h2>
                                <p className="text-white/40 text-lg leading-relaxed">
                                    We don't just "add AI." We architect custom neural pathways that optimize your existing business logic, reducing operational costs by up to 40% through autonomous agent deployment.
                                </p>
                                <div className="flex flex-wrap gap-8">
                                    <div className="space-y-2">
                                        <div className="text-4xl font-black">40%</div>
                                        <div className="text-[10px] font-bold text-wl-accent uppercase tracking-widest">Efficiency Lift</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-4xl font-black">24/7</div>
                                        <div className="text-[10px] font-bold text-wl-accent uppercase tracking-widest">Autonomous Ops</div>
                                    </div>
                                </div>
                                <Link href="/services/ai-strategy" className="btn-primary inline-flex">
                                    Strategic Audit
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'LLM Fine-tuning', icon: Bot },
                                    { label: 'Neural Search', icon: Cpu },
                                    { label: 'Autonomous Agents', icon: Layers },
                                    { label: 'Predictive ROI', icon: BarChart3 },
                                ].map((item, i) => (
                                    <div key={i} className="glass-strong p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center gap-4">
                                        <item.icon className="w-8 h-8 text-wl-accent" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.1em]">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
