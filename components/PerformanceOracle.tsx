'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    Zap, Activity, Target, Shield,
    MousePointer2, Gauge, BarChart3, Globe,
    Search, Cpu, Code2, LineChart
} from 'lucide-react';

export default function PerformanceOracle() {
    const [activeTab, setActiveTab] = useState<'marketing' | 'development'>('marketing');
    const [pulseValue, setPulseValue] = useState(98);

    useEffect(() => {
        const interval = setInterval(() => {
            setPulseValue(prev => {
                const change = Math.random() > 0.5 ? 0.1 : -0.1;
                return parseFloat((prev + change).toFixed(1));
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const marketingMetrics = [
        { label: 'Avg. Conversion Lift', value: '+340%', icon: Target },
        { label: 'Neural CTR Optimization', value: '12.4%', icon: MousePointer2 },
        { label: 'ROI Growth Multiplier', value: '8.5x', icon: BarChart3 },
        { label: 'Global Reach Velocity', value: 'Instant', icon: Globe },
    ];

    const developmentMetrics = [
        { label: 'Core Web Vitals', value: '100/100', icon: Gauge },
        { label: 'API Response Protocol', value: '140ms', icon: Cpu },
        { label: 'Build Deployment Sync', value: '0.8s', icon: Zap },
        { label: 'Security Handshake', value: 'ECC-512', icon: Shield },
    ];

    return (
        <section className="section-padding relative overflow-hidden bg-wl-dark font-display">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none -mt-96" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Activity className="w-4 h-4 text-wl-accent" />
                            The WLOPER Pulse
                        </motion.div>

                        <h2 className="heading-lg tracking-tighter">
                            Real-Time <br />
                            <span className="text-wl-accent">Performance Oracle.</span>
                        </h2>

                        <p className="subtitle-lg text-white/40">
                            Don't guess. See how our neural architectures and growth protocols outperform the industry standard in real-time.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button
                                onClick={() => setActiveTab('marketing')}
                                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === 'marketing' ? 'bg-wl-accent text-black border-wl-accent font-black' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <LineChart className="w-4 h-4" />
                                    Growth & Marketing
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab('development')}
                                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === 'development' ? 'bg-wl-accent text-black border-wl-accent font-black' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <Code2 className="w-4 h-4" />
                                    Engineering & Speed
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Side */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            layout
                            className="glass-strong rounded-[4rem] border border-white/5 p-10 lg:p-16 relative overflow-hidden shadow-2xl"
                        >
                            {/* Dashboard Glow */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-wl-accent/10 rounded-full blur-3xl" />

                            {/* Live Header */}
                            <div className="flex items-center justify-between mb-16 relative z-10">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">System Status</div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-wl-accent animate-ping" />
                                        <span className="font-bold text-lg tracking-tight">Active Protocol</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Efficiency</div>
                                    <div className="text-3xl font-black text-wl-accent tabular-nums tracking-tighter">{pulseValue}%</div>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <AnimatePresence mode="wait">
                                    {(activeTab === 'marketing' ? marketingMetrics : developmentMetrics).map((m, i) => (
                                        <motion.div
                                            key={activeTab + i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 group hover:border-wl-accent/20 transition-all"
                                        >
                                            <div className="text-white/20 mb-4 group-hover:text-wl-accent transition-colors">
                                                <m.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-xs font-black uppercase tracking-widest text-white/30 mb-2">{m.label}</div>
                                            <div className="text-3xl font-black text-white tracking-tighter">{m.value}</div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Footer Decoration */}
                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-8 opacity-20 relative z-10">
                                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-wl-accent/50 to-transparent" />
                                <div className="text-[8px] font-black uppercase tracking-[0.6em] whitespace-nowrap">Neural Scan Complete</div>
                                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-wl-accent/50 to-transparent" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
