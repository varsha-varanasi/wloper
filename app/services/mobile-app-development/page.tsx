'use client';

import { motion } from 'framer-motion';
import {
    Smartphone, Zap, ShieldCheck, Cpu,
    Layers, Smartphone as MobileIcon,
    Share2, Gauge, Layout, Sparkles, ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function MobileAppDevelopmentPage() {
    const { openDemoModal } = useDemo();

    const features = [
        {
            title: "Cross-Platform Mastery",
            desc: "High-performance React Native and Flutter builds that deliver native feel with single codebase efficiency.",
            icon: Layers
        },
        {
            title: "Offline-First Logic",
            desc: "Built-in data synchronization protocols ensuring your app functions perfectly even in zero-connectivity zones.",
            icon: ShieldCheck
        },
        {
            title: "Performance Optimization",
            desc: "GPU-accelerated animations and memory-efficient architectures for lightning-fast user interactions.",
            icon: Gauge
        },
        {
            title: "Embedded AI Features",
            desc: "On-device machine learning models for real-time image processing, voice recognition, and prediction.",
            icon: Cpu
        }
    ];

    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black pb-40">
            {/* Cinematic Hero */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg"
                        alt="Mobile Development Background"
                        fill
                        className="object-cover opacity-30 brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/40 to-wl-dark" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="tag-label"
                            >
                                <MobileIcon className="w-4 h-4 text-wl-accent" />
                                Mobile Engineering Pod
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="heading-xl tracking-tighter"
                            >
                                Build for the <br />
                                <span className="text-wl-accent">Palm of the Hand.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="subtitle-lg text-white/50"
                            >
                                We engineer high-stakes mobile experiences that combine beautiful UI with hardcore performance logic.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-6"
                            >
                                <button onClick={openDemoModal} className="btn-primary h-20 px-12 group text-lg">
                                    Start Build Protocol
                                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <div className="flex items-center gap-4 text-white/40 border border-white/10 px-8 py-4 rounded-3xl glass-strong">
                                    <Zap className="w-5 h-5 text-wl-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">iOS + Android</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="relative hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                className="glass-strong aspect-[9/16] w-[400px] rounded-[4rem] border border-white/10 p-8 shadow-2xl mx-auto relative overflow-hidden"
                            >
                                <Image
                                    src="/images/envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg"
                                    alt="App Preview"
                                    fill
                                    className="object-cover opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent" />
                                <div className="relative z-10 h-full flex flex-col justify-end">
                                    <div className="tag-label bg-wl-accent text-black mb-4">v.2.0 Active</div>
                                    <div className="h-1 bg-white/10 w-full mb-2" />
                                    <div className="h-1 bg-white/10 w-2/3 mb-2" />
                                    <div className="h-1 bg-wl-accent w-1/3" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Matrix */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-12 lg:p-16 rounded-[4rem] border border-white/5 hover:border-wl-accent/20 transition-all group"
                            >
                                <div className="w-20 h-20 rounded-[2.5rem] bg-wl-accent/10 border border-wl-accent/20 flex items-center justify-center text-wl-accent mb-10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <f.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black mb-6">{f.title}</h3>
                                <p className="text-xl text-white/40 leading-relaxed font-medium">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Conversion */}
            <section className="section-padding pb-40">
                <div className="container-custom">
                    <div className="glass-strong p-20 lg:p-40 rounded-[4rem] border border-white/5 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/envato-labs-ai-ff99b861-f73a-4b32-8972-7e241b722b3b.jpg"
                                alt="Final Call Image"
                                fill
                                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="relative z-10">
                            <Sparkles className="w-16 h-16 text-wl-accent mx-auto mb-10" />
                            <h2 className="heading-lg mb-12">Scalable <br /><span className="text-wl-accent">Mobile Assets.</span></h2>
                            <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                                Initialize Mobile Brief
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
