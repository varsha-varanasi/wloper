'use client';

import { motion } from 'framer-motion';
import { useDemo } from '@/context/DemoContext';
import dynamic from 'next/dynamic';
import { Terminal, Shield, Zap, Cpu, Code2, Server, Check, ArrowUpRight } from 'lucide-react';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });

export default function ProductsClient() {
    const { openDemoModal } = useDemo();

    const technicalSpecs = [
        { title: 'Latency Control', value: '< 200ms', icon: Zap },
        { title: 'Processing Nodes', value: '4,000+', icon: Server },
        { title: 'Model Accuracy', value: '98.4%', icon: Cpu },
        { title: 'Security Protocol', value: 'AES-256', icon: Shield },
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
                            <Terminal className="w-4 h-4 text-wl-accent" />
                            Core Architecture v4.0
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            The AI <br /><span className="text-wl-accent">Build Engine.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Beyond simple tools. We provide the comprehensive neural infrastructure required to deploy autonomous interview systems at global scale.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {technicalSpecs.map((spec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[2.5rem] border border-white/5 group hover:border-wl-accent/20 transition-all"
                            >
                                <spec.icon className="w-6 h-6 text-wl-accent mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                                <div className="text-4xl font-black text-white mb-1">{spec.value}</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{spec.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Blueprint */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                                Modular <br /><span className="text-wl-accent">Infrastructure.</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Neural Core', desc: 'Custom LLM fine-tuning for industry-specific terminology.' },
                                    { title: 'Global Mesh', desc: 'Edge processing for zero-latency video streaming.' },
                                    { title: 'Bias Sentinel', desc: 'Real-time auditing of evaluation algorithms.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-wl-accent animate-pulse" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                            <p className="text-wl-muted-dark font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-strong rounded-[4rem] border border-white/5 overflow-hidden aspect-square p-2 group"
                        >
                            <img
                                src="/images/envato-labs-ai-b7fc9d9b-9c99-40aa-ab36-c7dfe95fac5a.jpg"
                                alt="System Architecture"
                                className="w-full h-full object-cover rounded-[3.8rem] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* API Ecosystem */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <Code2 className="w-12 h-12 text-wl-accent" />
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">SDK & API <br />First Access.</h2>
                                <p className="text-xl text-wl-muted-dark font-medium">Integrate our neural interviewing engine into your existing ATS or HCM platform with just four lines of code.</p>
                                <ul className="space-y-4 text-wl-accent font-bold uppercase tracking-widest text-[10px]">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Node.js / Python SDKs</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Webhook Event Layer</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Custom Model Support</li>
                                </ul>
                            </div>
                            <div className="bg-[#0D0D0D] rounded-3xl p-8 border border-white/5 font-mono text-xs overflow-hidden shadow-2xl">
                                <div className="flex gap-2 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-wl-muted-dark font-mono text-[10px] opacity-50">// Initialize WLOPER Node</p>
                                    <p className="text-wl-accent">const <span className="text-white">wloper</span> = <span className="text-blue-400">new</span> WLOPER(&quot;KEY&quot;);</p>
                                    <p>&nbsp;</p>
                                    <p className="text-wl-muted-dark font-mono text-[10px] opacity-50">// Start Protocol</p>
                                    <p className="text-white">await wloper.initialize({'{'}</p>
                                    <p className="ml-4">id: <span className="text-green-400">&quot;WL_85&quot;</span>,</p>
                                    <p className="ml-4">model: <span className="text-green-400">&quot;Neural_v4&quot;</span></p>
                                    <p className="text-white">{'}'});</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong border border-wl-accent/20 rounded-[4rem] p-16 md:p-32 relative overflow-hidden max-w-6xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">Scale Your <br /><span className="text-wl-accent">Operations.</span></h2>
                        <button onClick={openDemoModal} className="btn-primary h-20 px-16 text-xl">
                            Request SDK Access
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
