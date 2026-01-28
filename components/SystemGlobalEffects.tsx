'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInterface } from '@/context/InterfaceContext';
import { Zap, ShieldCheck, Activity } from 'lucide-react';

export default function SystemGlobalEffects() {
    const { systemMessage, isProtocolSwitching } = useInterface();

    return (
        <>
            {/* Full Screen Protocol Flash/Glitch */}
            <AnimatePresence>
                {isProtocolSwitching && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.5, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, times: [0, 0.1, 0.2, 0.4, 1] }}
                        className="fixed inset-0 z-[999] pointer-events-none bg-wl-accent/20 backdrop-blur-[2px]"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,246,72,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-pulse" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* System Notification Toast */}
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] pointer-events-none w-full max-w-md px-6">
                <AnimatePresence mode="wait">
                    {systemMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="glass-strong border border-wl-accent/30 rounded-2xl p-4 shadow-[0_0_50px_rgba(202,246,72,0.2)] flex items-center gap-4 bg-black/80 backdrop-blur-2xl"
                        >
                            <div className="w-10 h-10 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                <Activity className="w-5 h-5 text-wl-accent animate-pulse" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-black text-wl-accent uppercase tracking-[0.3em] mb-0.5">System Override</div>
                                <div className="text-sm font-bold text-white tracking-tight">{systemMessage}</div>
                            </div>
                            <div className="w-12 flex flex-col gap-1 pr-2">
                                <div className="h-0.5 w-full bg-wl-accent/30 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "100%" }}
                                        animate={{ width: "0%" }}
                                        transition={{ duration: 4, ease: "linear" }}
                                        className="h-full bg-wl-accent"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
