'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function AROISimulator() {
    const [queries, setQueries] = useState(5000);
    const [costPerQuery, setCostPerQuery] = useState(5);
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        const manualCost = queries * costPerQuery;
        const aiCost = queries * (costPerQuery * 0.2); // 80% reduction
        setSavings(manualCost - aiCost);
    }, [queries, costPerQuery]);

    return (
        <div className="py-12 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Controls */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold uppercase tracking-widest text-white/60">Monthly Tasks</label>
                                    <span className="text-2xl font-black text-wl-accent">{queries.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="50000"
                                    step="100"
                                    value={queries}
                                    onChange={(e) => setQueries(Number(e.target.value))}
                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-wl-accent"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold uppercase tracking-widest text-white/60">Cost per Task ($)</label>
                                    <span className="text-2xl font-black text-wl-accent">${costPerQuery}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="1"
                                    value={costPerQuery}
                                    onChange={(e) => setCostPerQuery(Number(e.target.value))}
                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-wl-accent"
                                />
                            </div>
                        </div>

                        {/* Visual Comparison */}
                        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-white/40">
                                    <span>Manual Execution</span>
                                    <span>${(queries * costPerQuery).toLocaleString()}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        className="h-full bg-white/20"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-wl-accent">
                                    <span>WLOPER AI Neural Flow</span>
                                    <span>${(queries * (costPerQuery * 0.2)).toLocaleString()}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "20%" }}
                                        className="h-full bg-wl-accent shadow-[0_0_10px_rgba(202,246,72,0.5)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    <SpotlightCard className="p-12 border-wl-accent/20 bg-wl-accent/5 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-wl-accent/10 rounded-full blur-[80px] group-hover:bg-wl-accent/20 transition-all duration-700"></div>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-wl-accent flex items-center justify-center text-black shadow-[0_0_20px_rgba(202,246,72,0.3)]">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-tighter">Projected Annual Savings</h4>
                                    <p className="text-[10px] text-wl-accent font-bold uppercase tracking-[0.2em]">Neural Efficiency Protocol</p>
                                </div>
                            </div>

                            <div className="py-8 border-y border-white/5">
                                <motion.div
                                    key={savings}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-6xl md:text-8xl font-black text-white tracking-tighter"
                                >
                                    <span className="text-wl-accent/50">$</span>
                                    {(savings * 12).toLocaleString()}
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-wl-muted-dark text-xs mb-1">
                                        <Clock className="w-3 h-3" /> Time Saved
                                    </div>
                                    <p className="text-lg font-bold text-white">{(queries * 0.15).toFixed(0)}h / Mo</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-wl-muted-dark text-xs mb-1">
                                        <TrendingUp className="w-3 h-3" /> ROI Mult
                                    </div>
                                    <p className="text-lg font-bold text-wl-accent">x{(costPerQuery / (costPerQuery * 0.2)).toFixed(1)}</p>
                                </div>
                            </div>

                            <button className="btn-primary w-full py-6 group">
                                <span className="flex items-center justify-center gap-2">
                                    Request Full Financial Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
}
