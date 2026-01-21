'use client';

import { motion } from 'framer-motion';
import { useDemo } from '@/context/DemoContext';
import { Sparkles, ArrowRight, Activity, Shield, Cpu, Target } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function AboutClient() {
    const { openDemoModal } = useDemo();

    const stats = [
        { label: 'Neural Deployments', value: '1.2k+', icon: Cpu, color: 'text-blue-500' },
        { label: 'Global Clients', value: '850+', icon: Target, color: 'text-purple-500' },
        { label: 'Uptime Protocol', value: '99.9%', icon: Shield, color: 'text-wl-accent' },
        { label: 'Growth Scale', value: '250%', icon: Activity, color: 'text-emerald-500' },
    ];

    const timeline = [
        { year: "2018", event: "Genesis Cluster", desc: "WLOPER originates as a specialized cloud architecture lab.", image: "/images/envato-labs-ai-b7fc9d9b-9c99-40aa-ab36-c7dfe95fac5a.jpg" },
        { year: "2020", event: "Global Expansion", desc: "Expansion into APAC and US markets with distributed engineering pods.", image: "/images/envato-labs-ai-a4698812-b585-46ab-b841-f3ece58a93a5.jpg" },
        { year: "2023", event: "Neural Pivot", desc: "Re-architected all core services to be AI-native and autonomous.", image: "/images/envato-labs-ai-6c11c598-851f-40f7-9155-eb9146bff990.jpg" },
        { year: "2026", event: "Tech Autonomy", desc: "Setting the global standard for self-optimizing digital infrastructure.", image: "/images/envato-labs-ai-7c142eb8-7887-44d9-8de5-3d14c8bbab75.jpg" }
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg"
                        alt="About Background"
                        fill
                        className="object-cover opacity-30 brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/90 via-wl-dark/40 to-wl-dark" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="tag-label"
                        >
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            Our DNA & Protocol
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Architecting the <br /><span className="text-wl-accent">Intelligent era.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/50"
                        >
                            A specialized production hub where elite engineering meets autonomous artificial intelligence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Performance Stats */}
            <section className="section-padding relative z-20 -mt-32">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-12 rounded-[3.5rem] border border-white/5 hover:border-wl-accent/20 transition-all flex flex-col items-center text-center group"
                            >
                                <div className={`w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-wl-accent group-hover:text-black transition-all ${s.color}`}>
                                    <s.icon className="w-8 h-8" />
                                </div>
                                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter tabular-nums">{s.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-wl-accent transition-colors">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Video Feature Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong rounded-[4rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto h-full min-h-[500px] relative">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/images/envato_video_gen_Oct_16_2025_7_35_39.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-wl-dark/90" />
                        </div>
                        <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-8">
                            <div className="tag-label">Vision Projection</div>
                            <h2 className="heading-md">Autonomous <br /><span className="text-wl-accent">Growth Engines.</span></h2>
                            <p className="text-white/50 leading-relaxed text-lg">
                                We've engineered a self-sustaining ecosystem where our AI agents don't just solve problems—they anticipate them. This is the WLOPER edge: technical supremacy through continuous neural optimization.
                            </p>
                            <button onClick={openDemoModal} className="btn-primary">
                                Initialise Partnership <ArrowRight className="ml-3 w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visionary Section with Globe */}
            <section className="section-padding relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -ml-72" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-12">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                                Built by Innovators, <br /><span className="text-wl-accent">For the Global market.</span>
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed font-medium">
                                At WLOPER, we optimize for performance above all else. Our team of 120+ specialists works in focused clusters to ensure that every line of code contributes to your core ROI.
                            </p>
                            <div className="flex gap-12">
                                <div className="space-y-2">
                                    <p className="text-3xl font-black text-white">99%</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">Retention Rate</p>
                                </div>
                                <div className="w-[px] h-12 bg-white/10" />
                                <div className="space-y-2">
                                    <p className="text-3xl font-black text-white">2.5sec</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">Average Load</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-3xl font-black text-white">400ms</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-wl-accent">API Response</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="glass-strong rounded-[4rem] border border-white/5 p-4 relative overflow-hidden h-[600px] group">
                                <Image
                                    src="/images/envato-labs-ai-a5ed5fd0-3d06-4a07-b41a-7920becd0527.jpg"
                                    alt="Global Network"
                                    fill
                                    className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0">
                                    <GlobalGlobe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evolution Protocol - Enhanced with Individual Images */}
            <section className="section-padding pb-40">
                <div className="container-custom">
                    <div className="tag-label mb-20">System Evolution Protocol</div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group h-full"
                            >
                                <div className="glass-strong rounded-[3rem] border border-white/5 overflow-hidden h-full flex flex-col hover:border-wl-accent/20 transition-all duration-500">
                                    <div className="h-48 relative">
                                        <Image
                                            src={item.image}
                                            alt={item.event}
                                            fill
                                            className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent" />
                                        <div className="absolute bottom-4 left-6 text-2xl font-black text-wl-accent">{item.year}</div>
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <h3 className="text-xl font-bold uppercase tracking-tighter">{item.event}</h3>
                                        <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
