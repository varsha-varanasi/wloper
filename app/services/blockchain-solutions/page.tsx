'use client';

import { motion } from 'framer-motion';
import {
    Blocks, Zap, ShieldCheck, Cpu,
    Layers, Globe,
    Share2, Gauge, Layout, Sparkles, ArrowRight, Database
} from 'lucide-react';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export default function BlockchainSolutionsPage() {
    const { openDemoModal } = useDemo();

    const protocols = [
        {
            title: "Smart Contract Audit",
            desc: "Security-first auditing of Solidity and Rust contracts to prevent vulnerabilities and optimize gas consumption.",
            icon: ShieldCheck
        },
        {
            title: "DeFi Infrastructure",
            desc: "Engineering decentralized exchanges, lending protocols, and liquidity pools with institutional-grade security.",
            icon: Layers
        },
        {
            title: "NFT Ecosystems",
            desc: "Building scalable marketplaces and dynamic NFT collections with advanced utility logic and metadata hosting.",
            icon: Blocks
        },
        {
            title: "Private Chain Clusters",
            desc: "Deploying enterprise-grade private blockchain networks for secure supply chain and data orchestration.",
            icon: Database
        }
    ];

    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black pb-40">
            {/* Cinematic Hero */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.png"
                        alt="Blockchain Background"
                        fill
                        className="object-cover opacity-30 brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/40 to-wl-dark" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Blocks className="w-4 h-4 text-wl-accent" />
                            Distributed Systems Unit
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl tracking-tighter"
                        >
                            Decentralize the <br />
                            <span className="text-wl-accent">Digital Economy.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg text-white/50 mb-16"
                        >
                            We engineer trustless architectures and distributed systems that redefine how value is transferred and stored globally.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button onClick={openDemoModal} className="btn-primary h-20 px-16 group text-xl">
                                Initialize Genesis Block
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 border border-white/10 px-8 py-4 rounded-3xl glass-strong">
                                <Globe className="w-5 h-5 text-wl-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-balance">Web3 Native</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Protocol Matrix */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {protocols.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all flex flex-col group h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-wl-accent mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <p.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{p.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed font-medium flex-1">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Supremacy */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -ml-72" />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <h2 className="heading-md">Permissionless <br /><span className="text-wl-accent">Efficiency.</span></h2>
                            <p className="subtitle-lg text-white/40">
                                WLOPER builds bridge protocols and layer-2 solutions that handle mass transaction volume without compromising on decentralization.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="text-4xl font-black">250ms</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-wl-accent">Block Confirmation</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black">Zero</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-wl-accent">Exploit Record</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="glass-strong rounded-[4rem] border border-white/10 p-4 relative overflow-hidden h-[600px] group">
                                <Image
                                    src="/images/envato-labs-ai-a4698812-b585-46ab-b841-f3ece58a93a5.jpg"
                                    alt="Technical Logic"
                                    fill
                                    className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
