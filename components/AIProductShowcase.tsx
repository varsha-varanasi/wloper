'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Brain, Zap, ShieldCheck, ArrowRight, MessageSquare, Users, Phone } from 'lucide-react';
import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';

export default function AIProductShowcase() {
    const { openDemoModal } = useDemo();
    const products = [
        {
            title: 'AI Interview Screening Platform',
            desc: 'Automate candidate evaluation with intelligent scoring.',
            icon: Brain,
            color: 'text-blue-400'
        },
        {
            title: 'Customised AI Chatbots',
            desc: 'Seamless customer support and workflow automation.',
            icon: MessageSquare,
            color: 'text-purple-400'
        },
        {
            title: 'AI-Based HCM System',
            desc: 'Skills evaluation and institution-wide talent management.',
            icon: Users,
            color: 'text-wl-accent'
        },
        {
            title: 'AI Calling Agent for Data & Analysis',
            desc: 'Autonomous voice agents for large-scale data collection and real-time analysis.',
            icon: Phone,
            color: 'text-blue-500'
        }
    ];

    return (
        <section className="pt-20 pb-24 md:pt-28 md:pb-32 bg-wl-dark relative overflow-hidden" id="products">
            {/* Dynamic Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container-custom relative z-10 text-center">
                <div className="max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="tag-label"
                    >
                        <Sparkles className="w-4 h-4 text-wl-accent" />
                        The WLOPER Ecosystem
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg mb-10"
                    >
                        Intelligent Solutions for a <br /><span className="heading-gradient">Future-First</span> World
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="subtitle-lg mx-auto"
                    >
                        We build integrated AI products that solve real business problems, from automated hiring to intelligent customer engagement and human capital management.
                    </motion.p>
                </div>

                {/* Main Product Feature Grid - Breaking the Box */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 relative group"
                    >
                        <div className="absolute inset-0 bg-wl-accent/10 blur-[60px] rounded-[4rem] group-hover:bg-wl-accent/20 transition-all"></div>
                        <div className="relative z-10 aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 glass-strong">
                            <Image
                                src="/images/envato-labs-ai-6c11c598-851f-40f7-9155-eb9146bff990.jpg"
                                alt="WLOPER AI Product Ecosystem - Automated Hiring and HCM Systems"
                                fill
                                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 700px, 840px"
                                quality={85}
                                className="object-cover"
                                priority
                            />
                            {/* Floating labels logic would go here if needed, keeping it clean for now */}
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group/item text-left flex items-start gap-6 p-8 rounded-[2rem] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center shrink-0 border border-white/10 group-hover/item:text-wl-accent group-hover/item:scale-110 transition-all">
                                    <product.icon className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover/item:text-wl-accent transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-wl-muted-dark leading-relaxed mb-4">
                                        {product.desc}
                                    </p>
                                    <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-wl-accent/70 hover:text-wl-accent transition-colors">
                                        Explore Product <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <button onClick={openDemoModal} className="btn-primary">
                        Transform Your Business with AI
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
