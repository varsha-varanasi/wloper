'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Zap, Mail, MessageSquare, Send, ShieldCheck, Clock } from 'lucide-react';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });
const GlobalGlobe = dynamic(() => import('@/components/GlobalGlobe'), { ssr: false });

export default function ContactPage() {
    const [interest, setInterest] = useState('AI Solution');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <NeuralBackground />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Zap className="w-4 h-4 text-wl-accent" />
                            Direct Engineering Bridge
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Start Your <br /><span className="text-wl-accent">Neural Revolution.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Skip the middleman. Speak directly with our lead architects and initialize your custom build protocol today.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Left: Global Ops */}
                        <div className="space-y-16">
                            <div className="glass-strong rounded-[4rem] border border-white/5 p-12 relative overflow-hidden h-[500px] group">
                                <div className="absolute inset-0 z-0">
                                    <GlobalGlobe />
                                </div>
                                <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                                    <div className="tag-label bg-black/50 backdrop-blur-md w-fit">
                                        Active Nodes
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-bold uppercase tracking-tighter">Global Presence</h3>
                                        <p className="text-wl-muted-dark font-medium">Deploying AI at scale across 4 continents.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="glass p-8 rounded-3xl border border-white/5">
                                    <Mail className="w-6 h-6 text-wl-accent mb-4" />
                                    <h4 className="font-bold text-white mb-1">Electronic Mail</h4>
                                    <p className="text-sm text-wl-muted-dark font-mono">hello@wloper.tech</p>
                                </div>
                                <div className="glass p-8 rounded-3xl border border-white/5">
                                    <MessageSquare className="w-6 h-6 text-wl-accent mb-4" />
                                    <h4 className="font-bold text-white mb-1">Instant Relay</h4>
                                    <p className="text-sm text-wl-muted-dark font-mono">@wloper_core</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: The Intake Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-strong border border-wl-accent/20 rounded-[4rem] p-10 md:p-16 relative shadow-[0_0_100px_rgba(202,246,72,0.03)]"
                        >
                            <form className="space-y-10">
                                <div className="space-y-6">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-wl-accent">Protocol Category</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['AI Solution', 'Enterprise Web', 'Strategy'].map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setInterest(cat)}
                                                className={`py-3 px-6 rounded-xl font-bold text-[10px] uppercase tracking-widest border transition-all ${interest === cat
                                                    ? 'bg-wl-accent text-black border-wl-accent shadow-lg shadow-wl-accent/20'
                                                    : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4 neural-point">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 ml-1">Identity</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border-b border-white/10 px-1 py-4 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-medium text-xl"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-4 neural-point">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 ml-1">Transmission</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border-b border-white/10 px-1 py-4 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-medium text-xl"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 neural-point">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 ml-1">Mission Details</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border-b border-white/10 px-1 py-4 text-white focus:border-wl-accent focus:outline-none transition-all placeholder:text-white/10 font-medium text-xl resize-none"
                                        placeholder="What are we building?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full h-24 text-xl group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        INITIALIZE BUILD <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>

                                <div className="flex items-center justify-center gap-6 text-wl-muted-dark border-t border-white/5 pt-10">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-wl-accent" />
                                        <span className="text-[9px] font-bold uppercase tracking-widest">Encrypted</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-wl-accent" />
                                        <span className="text-[9px] font-bold uppercase tracking-widest">24h Response</span>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
