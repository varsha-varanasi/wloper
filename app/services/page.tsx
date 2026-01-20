'use client';

import { motion } from 'framer-motion';
import { useDemo } from '@/context/DemoContext';
import Link from 'next/link';
import { Bot, Cpu, BarChart3, Layers, ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });
const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function ServicesPage() {
    const { openDemoModal } = useDemo();
    const mainServices = [
        {
            icon: Bot,
            title: 'Neural Architecture',
            description: 'Custom implementation of LLM protocols and autonomous agent networks designed for specific enterprise workflows.',
            features: ['Instruction Tuning', 'RAG Optimisation', 'Agentic Workflows'],
            link: '/services/ai-integration'
        },
        {
            icon: Cpu,
            title: 'Distributed Systems',
            description: 'High-availability backend architecture that supports massive concurrency and real-time data processing.',
            features: ['Event-Driven Microservices', 'Serverless Nodes', 'Global Mesh'],
            link: '/services/software-engineering'
        },
        {
            icon: BarChart3,
            title: 'Growth Protocol',
            description: 'Algorithmic marketing and product engineering aimed at maximizing LTV and viral coefficient.',
            features: ['Predictive Analytics', 'Funnel Automation', 'Viral Loops'],
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
                            Technical Capabilities v6.2
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Engineered for <br /><span className="text-wl-accent">Dominance.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            We provide the specialized engineering capacity required to build, scale, and maintain mission-critical AI infrastructure.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong border border-white/5 rounded-[3rem] p-12 hover:border-wl-accent/20 transition-all group relative overflow-hidden"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tighter group-hover:text-wl-accent transition-colors">{service.title}</h3>
                                <p className="text-wl-muted-dark leading-relaxed font-medium mb-10">
                                    {service.description}
                                </p>
                                <div className="space-y-3 mb-12">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-wl-accent"></div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href={service.link} className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[10px] group/link">
                                    Initialize Protocol <ArrowUpRight className="w-4 h-4 text-wl-accent group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology with Globe */}
            <section className="section-padding bg-wl-dark/50 border-y border-white/5 relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Distributed <br /><span className="text-wl-accent">Engineering.</span></h2>
                            <p className="text-xl text-wl-muted-dark font-medium leading-relaxed">
                                Our &quot;Global Pod&quot; methodology ensures that your project has 24/7 engineering attention across multiple time zones. We prioritize asynchronous efficiency and rapid CI/CD deployments.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <p className="text-4xl font-black text-white">4h</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">Avg Response</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-white">10min</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">Deployment Cycles</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-strong rounded-[4rem] border border-white/5 p-4 h-[500px] relative overflow-hidden">
                            <GlobalGlobe />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-strong p-16 md:p-32 rounded-[4rem] border border-wl-accent/20 text-center relative overflow-hidden"
                    >
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">Scale Your <br /><span className="text-wl-accent">Build Protocol.</span></h2>
                        <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                            Request Strategic Audit
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
