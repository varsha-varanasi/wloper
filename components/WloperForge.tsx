'use client';

import { motion } from 'framer-motion';
import { Network, Cpu, Activity, Database, Globe2, Layers, GitBranch, Terminal, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePersona } from '@/context/PersonaContext';

export default function WloperForge() {
    const { persona } = usePersona();
    const [stats, setStats] = useState({
        uplink: 99.998,
        latency: 14,
        builds: 1240,
        nodes: 42,
        conv: 4.8,
        speed: 0.8
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                uplink: Number((99.990 + Math.random() * 0.009).toFixed(3)),
                latency: Math.floor(12 + Math.random() * 5),
                builds: prev.builds + Math.floor(Math.random() * 2),
                nodes: 42,
                conv: Number((4.5 + Math.random() * 0.5).toFixed(1)),
                speed: Number((0.7 + Math.random() * 0.2).toFixed(1))
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const personaMetrics = {
        CTO: [
            { label: "Mainnet Uptime", value: `${stats.uplink}%`, icon: Network, color: "text-green-400" },
            { label: "Edge Latency", value: `${stats.latency}ms`, icon: Activity, color: "text-wl-accent" },
            { label: "Total Deployments", value: stats.builds.toLocaleString(), icon: GitBranch, color: "text-blue-400" },
            { label: "Computing Nodes", value: stats.nodes, icon: Cpu, color: "text-purple-400" }
        ],
        MARKETER: [
            { label: "Avg. Conversion Lift", value: `+${stats.conv}%`, icon: Zap, color: "text-wl-accent" },
            { label: "LCP Load Speed", value: `${stats.speed}s`, icon: Activity, color: "text-green-400" },
            { label: "SEO Visibility", value: "98/100", icon: Globe2, color: "text-blue-400" },
            { label: "ROI Multiplier", value: "4.2x", icon: Database, color: "text-purple-400" }
        ],
        FOUNDER: [
            { label: "Time to Market", value: "24 Days", icon: Zap, color: "text-wl-accent" },
            { label: "Global Reach", value: "190+ Countries", icon: Globe2, color: "text-blue-400" },
            { label: "Uptime SLA", value: "99.99%", icon: Network, color: "text-green-400" },
            { label: "Venture Ready", value: "100%", icon: Shield, color: "text-purple-400" }
        ]
    };

    const metrics = personaMetrics[persona] || personaMetrics.FOUNDER;

    return (
        <section className="section-padding bg-black border-y border-white/5 relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:max-w-xl">
                        <div className="tag-label mb-6">
                            <Activity className="w-3 h-3 text-wl-accent" />
                            Live System Status
                        </div>
                        <h2 className="heading-md mb-8">The <span className="text-wl-accent">WLOPER Forge</span> is Online.</h2>
                        <p className="text-xl text-white/40 leading-relaxed mb-10">
                            Our infrastructure is a living organism. We track every millisecond of performance across our global deployment network to ensure zero-friction scalability.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {metrics.map((m, i) => (
                                <div key={i} className="glass-strong p-6 rounded-[2rem] border border-white/5">
                                    <m.icon className={`w-5 h-5 mb-4 ${m.color}`} />
                                    <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black mb-1">{m.label}</div>
                                    <div className="text-2xl font-black text-white">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full lg:w-[500px] h-[500px] flex items-center justify-center">
                        {/* Interactive Visualizer */}
                        <div className="absolute inset-0 bg-wl-accent/5 rounded-full blur-[100px]" />
                        <div className="relative z-10 w-full aspect-square border-2 border-dashed border-white/5 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                            <div className="w-4/5 aspect-square border border-wl-accent/20 rounded-full flex items-center justify-center">
                                <div className="w-3/5 aspect-square border-2 border-wl-accent/40 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                                    <Layers className="w-12 h-12 text-wl-accent animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Data Nodes */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                                className="absolute"
                                style={{
                                    top: `${20 + Math.random() * 60}%`,
                                    left: `${20 + Math.random() * 60}%`,
                                }}
                            >
                                <div className="glass-strong px-4 py-2 rounded-xl border border-white/10 text-[8px] font-mono text-wl-accent uppercase tracking-widest flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-wl-accent animate-ping" />
                                    TXN_NODE_{i + 100}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
