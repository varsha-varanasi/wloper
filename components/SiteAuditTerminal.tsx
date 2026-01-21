'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Shield, Zap, Search, Globe, ChevronRight } from 'lucide-react';

export default function SiteAuditTerminal() {
    const [url, setUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const logEndRef = useRef<HTMLDivElement>(null);

    const scanSequence = [
        "Initializing WLOPER_AUDIT_PROTOCOL v3.4.1...",
        "Connecting to global crawling nodes...",
        "Node [London] ONLINE.",
        "Node [Tokyo] ONLINE.",
        "Node [New York] ONLINE.",
        `Target: ${url}`,
        "Requesting headers...",
        "Analyzing DOM structure...",
        "Testing TTFB (Time to First Byte)...",
        "Checking SSL/TLS certificate chain...",
        "Scanning for SEO metadata...",
        "Analyzing script execution latency...",
        "Detecting third-party bloat...",
        "Generating performance heuristic...",
        "ALMOST DONE - Formatting report..."
    ];

    const runScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;
        setIsScanning(true);
        setLogs([]);
        setShowResults(false);

        let i = 0;
        const interval = setInterval(() => {
            if (i < scanSequence.length) {
                setLogs(prev => [...prev, scanSequence[i]]);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIsScanning(false);
                    setShowResults(true);
                }, 1000);
            }
        }, 150);
    };

    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <section id="audit-section" className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wl-accent/10 border border-wl-accent/20 text-wl-accent text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        <Search className="w-3 h-3" />
                        Infrastructure Diagnostics
                    </motion.div>
                    <h2 className="heading-lg mb-6">Test Your <span className="text-wl-accent">Digital Pulse.</span></h2>
                    <p className="subtitle-md text-white/50 max-w-2xl mx-auto">
                        Input your domain to run our proprietary audit protocol and detect technical leakages in your stack.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Terminal UI */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass-strong rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
                    >
                        {/* Title Bar */}
                        <div className="bg-white/5 px-8 py-4 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="flex items-center gap-2 text-white/40 font-mono text-xs ml-4">
                                    <TerminalIcon className="w-3 h-3" />
                                    <span>wloper-audit-sh — 80x24</span>
                                </div>
                            </div>
                            <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                                Status: {isScanning ? 'Running Scan' : 'Idle'}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 md:p-12 min-h-[400px]">
                            {!isScanning && !showResults ? (
                                <form onSubmit={runScan} className="h-full flex flex-col items-center justify-center space-y-8">
                                    <div className="w-full relative max-w-xl">
                                        <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                        <input
                                            type="text"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            placeholder="https://your-website.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-wl-accent/50 focus:ring-4 focus:ring-wl-accent/10 transition-all font-mono"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-primary px-12 h-16 group"
                                    >
                                        Execute Audit
                                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            ) : isScanning ? (
                                <div className="font-mono text-sm space-y-2 h-[300px] overflow-y-auto scrollbar-hide">
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`${i % 2 === 0 ? 'text-wl-accent/80' : 'text-white/40'}`}
                                        >
                                            <span className="mr-3 opacity-30">[{new Date().toLocaleTimeString()}]</span>
                                            {log}
                                        </motion.div>
                                    ))}
                                    <div ref={logEndRef} />
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                                >
                                    {[
                                        { label: 'Security', value: 'A+', color: 'text-wl-accent', desc: 'SOC2 Compliant', icon: Shield },
                                        { label: 'Performance', value: '98/100', color: 'text-wl-accent', desc: 'Sub-1s LCP', icon: Zap },
                                        { label: 'SEO Rank', value: 'High', color: 'text-wl-accent', desc: 'Perfect Schema', icon: Globe },
                                        { label: 'Latency', value: '12ms', color: 'text-wl-accent', desc: 'Edge Optimized', icon: Search },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center group hover:border-wl-accent/30 transition-colors"
                                        >
                                            <stat.icon className="w-8 h-8 text-wl-accent mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">{stat.label}</div>
                                            <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                                            <div className="text-[10px] text-white/20 font-bold">{stat.desc}</div>
                                        </motion.div>
                                    ))}
                                    <div className="md:col-span-2 lg:col-span-4 mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="text-left">
                                            <div className="text-white font-bold mb-1">Audit Complete</div>
                                            <div className="text-white/40 text-xs">Diagnostic reports suggest 3 optimization points for maximum growth.</div>
                                        </div>
                                        <button onClick={() => setShowResults(false)} className="text-wl-accent text-xs font-black uppercase tracking-widest hover:underline">
                                            Restart New Protocol
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
