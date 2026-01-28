'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Layers, Database, Globe, Shield, Cpu, Code2, Zap, Layout, TrendingUp, Gauge, Rocket, Lock } from 'lucide-react';
import { usePersona } from '@/context/PersonaContext';

const layers = [
    {
        id: 'frontend',
        title: 'Edge Presentation',
        icon: Layout,
        tech: {
            STRATEGY: ['High-Fidelity Wireframes', 'Content Flowcharts', 'UX Audits'],
            ENGINEERING: ['Next.js 15', 'TypeScript', 'Framer Motion'],
            SCALE: ['Global CDN Edge', 'Optimized SEO Core', 'Instant Load UX']
        },
        desc: {
            STRATEGY: 'Sub-10ms Time-to-Interactive using globally distributed edge points. We focus on perceptual speed and cinematic UI logic.',
            ENGINEERING: 'We engineer the fastest frontends in the industry to ensure lower bounce rates and higher conversion velocity.',
            SCALE: 'Cinematic brand experiences that scale globally without performance degradation as your user base grows.'
        },
        impactIcon: Gauge
    },
    {
        id: 'logic',
        title: 'Serverless Compute',
        icon: Cpu,
        tech: {
            STRATEGY: ['Logic Flow Design', 'API Specifications', 'System Reliability'],
            ENGINEERING: ['Rust WASM', 'Node.js', 'Edge Functions'],
            SCALE: ['Auto-scaling Edge', 'Dynamic Routing', 'Zero Cold Starts']
        },
        desc: {
            STRATEGY: 'Auto-scaling compute instances that trigger on-demand, reducing infrastructure overhead and maximizing security.',
            ENGINEERING: 'Powering real-time dynamic content delivery so every user gets a tailored high-converting experience.',
            SCALE: 'A compute layer that grows with you. You only pay for what you use, from 1 user to 1 million.'
        },
        impactIcon: Rocket
    },
    {
        id: 'data',
        title: 'Unified Data Layer',
        icon: Database,
        tech: {
            STRATEGY: ['Schema Architecture', 'Data Privacy Design', 'Goal Tracking'],
            ENGINEERING: ['PostgreSQL', 'Redis', 'Vector DB'],
            SCALE: ['Multi-Region Sync', 'Real-time Analytics', 'Infinite Growth']
        },
        desc: {
            STRATEGY: 'Distributed data clusters with multi-region replication and AI-ready vector indexing for fast semantic search.',
            ENGINEERING: 'Capture every user insight with sub-millisecond data writes, allowing for hyper-targeted marketing loops.',
            SCALE: 'Your most valuable asset—data—is secured and structured for future AI models and institutional reporting.'
        },
        impactIcon: TrendingUp
    },
    {
        id: 'security',
        title: 'Hardened Perimeter',
        icon: Shield,
        tech: {
            STRATEGY: ['Compliance Mapping', 'Risk Assessment', 'Security Audit'],
            ENGINEERING: ['WAF', 'DDoS Protection', 'AES-256'],
            SCALE: ['Enterprise Privacy', 'Global Compliance', 'GDPR/SOC2 Ready']
        },
        desc: {
            STRATEGY: 'Institutional grade security protocols embedded at every layer. Zero-trust architecture as standard.',
            ENGINEERING: 'We build trust into the code, ensuring your customers feel safe enough to convert and share data.',
            SCALE: 'Protect your equity. Our hardened perimeter prevents breaches that could damage your brand or valuation.'
        },
        impactIcon: Lock
    }
];

export default function ArchitecturePreviewer() {
    const { persona } = usePersona();
    const [activeLayer, setActiveLayer] = useState(layers[0]);

    return (
        <section className="section-padding bg-wl-dark relative">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <div className="tag-label mb-6">Internal Blueprint</div>
                    <h2 className="heading-lg">Our <span className="text-wl-accent">Technical Stack.</span></h2>
                    <p className="subtitle-md text-white/50">Transparency in how we build. Each layer is selected for ultimate efficiency.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive Stack Visualization */}
                    <div className="relative h-[500px] flex flex-col justify-center gap-4">
                        {layers.slice().reverse().map((layer, i) => {
                            const isActive = activeLayer.id === layer.id;
                            return (
                                <motion.button
                                    key={layer.id}
                                    onClick={() => setActiveLayer(layer)}
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1.05 : 1,
                                        x: isActive ? 20 : 0,
                                        opacity: isActive ? 1 : 0.6,
                                        zIndex: isActive ? 10 : 0
                                    }}
                                    className={`relative w-full group overflow-hidden rounded-3xl border transition-all ${isActive
                                        ? 'border-wl-accent/50 bg-wl-accent/10'
                                        : 'border-white/5 bg-white/5 hover:border-white/20'
                                        } p-8 text-left h-24`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isActive ? 'bg-wl-accent text-black' : 'bg-white/10 text-white/40'}`}>
                                                <layer.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isActive ? 'text-wl-accent' : 'text-white/20'}`}>
                                                    Layer {layers.length - i}
                                                </div>
                                                <div className="font-bold text-lg">{layer.title}</div>
                                            </div>
                                        </div>
                                        {isActive && (
                                            <motion.div layoutId="arrow" className="text-wl-accent">
                                                <Zap className="w-5 h-5 fill-current" />
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Layer "Thickness" Effect */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all ${isActive ? 'bg-wl-accent' : 'bg-transparent'}`} />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Detailed Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLayer.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="glass-strong p-12 lg:p-16 rounded-[4rem] border border-white/10"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-wl-accent bg-wl-accent/10 border border-wl-accent/20`}>
                                    <activeLayer.icon className="w-10 h-10" />
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 font-mono">Status</div>
                                    <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        Optimized
                                    </div>
                                </div>
                            </div>

                            <h3 className={`text-4xl font-black mb-6 ${activeLayer.id === 'security' ? 'glitch-wrapper' : ''}`} data-glitch-text={activeLayer.id === 'security' ? activeLayer.title : undefined}>
                                {activeLayer.title}
                            </h3>
                            <p className="text-xl text-white/50 leading-relaxed mb-10 font-medium">
                                {(activeLayer.desc as any)[persona]}
                            </p>

                            <div className="space-y-6">
                                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                                    {persona === 'ENGINEERING' ? 'Core Technologies' : 'Strategic Impact'}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {(activeLayer.tech as any)[persona].map((t: string, i: number) => (
                                        <div key={i} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-white/70">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 pt-12 border-t border-white/5 flex items-center gap-4">
                                <Code2 className="w-5 h-5 text-wl-accent" />
                                <span className="text-xs font-mono text-white/30 truncate">wloper/core/system/{activeLayer.id}.config</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
