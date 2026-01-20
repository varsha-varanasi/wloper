'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, Layout, Zap } from 'lucide-react';
import AROISimulator from './AROISimulator';
import ContentMultiplier from './ContentMultiplier';

export default function InteractiveLabs() {
    const [activeTab, setActiveTab] = useState<'roi' | 'multiplier'>('roi');

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="tag-label mb-4">
                        <Zap className="w-4 h-4 text-wl-accent" />
                        WLOPER Interactive Labs
                    </div>
                    <h2 className="heading-lg max-w-3xl">
                        Experience the <span className="text-wl-accent">AI Advantage</span> First-Hand
                    </h2>

                    {/* Tabs */}
                    <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 mt-10">
                        <button
                            onClick={() => setActiveTab('roi')}
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'roi' ? 'bg-wl-accent text-black shadow-lg shadow-wl-accent/20' : 'text-white/40 hover:text-white'}`}
                        >
                            <Calculator className="w-4 h-4" />
                            ROI Simulator
                        </button>
                        <button
                            onClick={() => setActiveTab('multiplier')}
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'multiplier' ? 'bg-wl-accent text-black shadow-lg shadow-wl-accent/20' : 'text-white/40 hover:text-white'}`}
                        >
                            <Layout className="w-4 h-4" />
                            Content Multiplier
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[600px] glass-strong rounded-[4rem] border border-white/5 p-4 md:p-8">
                    <AnimatePresence mode="wait">
                        {activeTab === 'roi' ? (
                            <motion.div
                                key="roi"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <AROISimulator />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="multiplier"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ContentMultiplier />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
