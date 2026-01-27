'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Zap, Terminal, CheckCircle2 } from 'lucide-react';

interface NeuralSummaryProps {
    content: string;
}

export default function NeuralSummary({ content }: NeuralSummaryProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const generationLogs = [
        "Initializing Neural Processor...",
        "Analyzing linguistic patterns...",
        "Extracting core technical entities...",
        "Synthesizing semantic meaning...",
        "Optimizing for executive readability...",
        "Finalizing summary protocol..."
    ];

    const handleGenerate = () => {
        setIsGenerating(true);
        setLogs([]);
        setProgress(0);

        // Progress simulation
        let logIndex = 0;
        const interval = setInterval(() => {
            if (logIndex < generationLogs.length) {
                setLogs(prev => [...prev.slice(-2), generationLogs[logIndex]]);
                setProgress((logIndex + 1) * (100 / generationLogs.length));
                logIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIsGenerating(false);
                    setShowSummary(true);
                }, 500);
            }
        }, 600);
    };

    return (
        <div className="mb-16">
            {!showSummary && !isGenerating ? (
                <button
                    onClick={handleGenerate}
                    className="w-full glass-strong p-8 rounded-[2.5rem] border border-wl-accent/20 hover:border-wl-accent/50 transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-wl-accent/5 blur-3xl group-hover:bg-wl-accent/10 transition-all" />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-wl-accent/10 flex items-center justify-center text-wl-accent group-hover:scale-110 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                <Brain className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Generate Neural Summary</h3>
                                <p className="text-sm text-wl-muted-dark font-medium">Use Wloper AI to extract executive insights from this technical brief.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-wl-accent/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-wl-accent">
                            <Zap className="w-3 h-3 animate-pulse" />
                            Processing Time: ~4s
                        </div>
                    </div>
                </button>
            ) : isGenerating ? (
                <div className="glass-strong p-10 rounded-[2.5rem] border border-wl-accent/30 bg-wl-accent/5 relative overflow-hidden">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-wl-accent flex items-center justify-center text-black animate-spin-slow">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-wl-accent">AI Synthesizer Active</span>
                                <span className="text-xl font-black text-white">{Math.round(progress)}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-wl-accent shadow-[0_0_15px_rgba(202,246,72,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="font-mono text-[10px] text-white/40 space-y-1">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2"
                            >
                                <Terminal className="w-3 h-3 opacity-20" />
                                {log}
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-strong p-10 md:p-12 rounded-[3rem] border border-wl-accent/30 bg-wl-accent/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/5 blur-[100px] pointer-events-none" />

                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-wl-accent flex items-center justify-center text-black">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tighter">Neural Insights Archival</h3>
                                <p className="text-[9px] font-black text-wl-accent uppercase tracking-widest">Synthesis Complete — Confidence: 99.4%</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowSummary(false)}
                            className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-wl-accent transition-colors"
                        >
                            Reset Protocol
                        </button>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xl font-medium text-white/90 leading-relaxed">
                            {content}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5">
                            {[
                                { label: 'Tech Intensity', val: 'High' },
                                { label: 'Actionable', val: 'Direct' },
                                { label: 'Sentiment', val: 'Strategic' },
                                { label: 'Nodes', val: '14+' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                                    <div className="text-sm font-bold text-wl-accent">{stat.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
