'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FileText, Share2, Instagram, Twitter, Linkedin, Github, Send, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ContentMultiplier() {
    const [inputText, setInputText] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedItems, setGeneratedItems] = useState<any[]>([]);

    const platforms = [
        { name: 'X / Twitter', icon: Twitter, color: '#1DA1F2' },
        { name: 'LinkedIn', icon: Linkedin, color: '#0077B5' },
        { name: 'Instagram', icon: Instagram, color: '#E4405F' },
        { name: 'Developer Hub', icon: Github, color: '#333' }
    ];

    const generateContent = () => {
        if (!inputText.trim()) return;

        setIsGenerating(true);
        setGeneratedItems([]);

        // Simulate AI thinking
        setTimeout(() => {
            const results = platforms.map(p => ({
                ...p,
                content: `🚀 AI-Augmented output for ${p.name}: Optimized for engagement and virality...`
            }));
            setGeneratedItems(results);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="py-12 px-4 md:px-12">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-12">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h3 className="text-3xl font-black mb-4">Neural <span className="text-wl-accent">Content Engine</span></h3>
                        <p className="text-wl-muted-dark uppercase tracking-widest text-[10px] font-bold">Paste one idea. Dominate every platform.</p>
                    </div>
                </div>

                {/* Input Area */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="glass-strong p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-wl-accent/10 flex items-center justify-center text-wl-accent">
                                <FileText className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Source Content</span>
                        </div>

                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Paste your article snippet, blog post, or product idea here..."
                            className="w-full h-48 bg-black/40 border border-white/10 rounded-2xl p-6 text-sm text-white/80 focus:outline-none focus:border-wl-accent/40 transition-colors resize-none mb-6"
                        />

                        <button
                            onClick={generateContent}
                            disabled={isGenerating || !inputText.trim()}
                            className="btn-primary w-full h-16 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="flex items-center justify-center gap-2">
                                {isGenerating ? 'Normalizing Neurals...' : 'Initialize Multiplier'}
                                {!isGenerating && <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Output Area */}
                <div className="lg:col-span-7">
                    <div className="h-full min-h-[400px] border border-white/5 rounded-[3rem] bg-black/40 p-8 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {!isGenerating && generatedItems.length === 0 ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-12"
                                >
                                    <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mb-6">
                                        <Send className="w-8 h-8 text-white/10" />
                                    </div>
                                    <p className="text-wl-muted-dark text-sm max-w-xs uppercase tracking-tighter font-medium">Input your core concept to see how WLOPER AI multiplies your brand's reach.</p>
                                </motion.div>
                            ) : isGenerating ? (
                                <motion.div
                                    key="loading"
                                    className="absolute inset-0 flex flex-col items-center justify-center"
                                >
                                    <div className="w-12 h-12 border-2 border-wl-accent border-t-transparent rounded-full animate-spin mb-4" />
                                    <p className="text-wl-accent text-xs font-bold uppercase tracking-widest animate-pulse">Analyzing Context...</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="grid sm:grid-cols-2 gap-4"
                                >
                                    {generatedItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <SpotlightCard className="p-6 bg-white/[0.03] border-white/5 opacity-80 h-full">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: item.color }}>{item.name}</span>
                                                </div>
                                                <div className="h-[1px] w-full bg-white/5 mb-4" />
                                                <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                                                    {item.content}
                                                </p>
                                                <div className="mt-4 flex justify-end">
                                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                                        <ArrowRight className="w-3 h-3 text-white/20" />
                                                    </div>
                                                </div>
                                            </SpotlightCard>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Ambient Flow Decoration */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-wl-accent/5 rounded-full blur-[80px]" />
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-wl-accent/5 rounded-full blur-[80px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
