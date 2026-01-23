'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterface } from '@/context/InterfaceContext';
import { Activity, Shield, Cpu, Zap, Crosshair } from 'lucide-react';

export default function CommandHUD() {
    const { isHUDActive } = useInterface();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [vitals, setVitals] = useState({
        load: 12,
        temp: 42,
        latency: 24,
        uptime: '99.99%'
    });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isHUDActive) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (isMobile) return;
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const interval = setInterval(() => {
            setVitals(prev => ({
                ...prev,
                load: Math.floor(Math.random() * 15) + 5,
                latency: Math.floor(Math.random() * 10) + 18,
                temp: Math.floor(Math.random() * 5) + 40
            }));
        }, isMobile ? 10000 : 3000);

        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [isHUDActive, isMobile]);

    return (
        <AnimatePresence>
            {isHUDActive && (
                <div className="fixed inset-0 z-[150] pointer-events-none overflow-hidden select-none">
                    {/* Scanline Effect */}
                    <motion.div
                        initial={{ top: '-100%' }}
                        animate={{ top: '100%' }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-[2px] bg-wl-accent/20 blur-sm z-[151]"
                    />

                    {/* Faint Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(202,246,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(202,246,72,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

                    {/* Corner Brackets */}
                    <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-wl-accent/40 rounded-tl-3xl shadow-[-10px_-10px_30px_rgba(202,246,72,0.1)]" />
                    <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-wl-accent/40 rounded-tr-3xl shadow-[10px_-10px_30px_rgba(202,246,72,0.1)]" />
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-wl-accent/40 rounded-bl-3xl shadow-[-10px_10px_30px_rgba(202,246,72,0.1)]" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-wl-accent/40 rounded-br-3xl shadow-[10px_10px_30px_rgba(202,246,72,0.1)]" />

                    {/* Top Data Bar */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-8 py-2 px-12 glass shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-wl-accent/20 rounded-full"
                    >
                        <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-wl-accent animate-pulse" />
                            <span className="text-[10px] font-bold text-wl-accent uppercase tracking-widest leading-none">AI Engine: Operational</span>
                        </div>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <Zap className="w-3 h-3 text-wl-accent" />
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest leading-none">Security Protocol: Level 9</span>
                        </div>
                    </motion.div>

                    {/* Vitals Feed (Left Side) */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="absolute top-1/2 -translate-y-1/2 left-10 space-y-6"
                    >
                        {[
                            { label: 'Core Load', val: `${vitals.load}%`, icon: Cpu },
                            { label: 'Neural Temp', val: `${vitals.temp}°C`, icon: Zap },
                            { label: 'Sync Latency', val: `${vitals.latency}ms`, icon: Activity },
                            { label: 'UPTIME [SECURE]', val: vitals.uptime, icon: Shield },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-1 border-l-2 border-wl-accent/20 pl-4 py-1">
                                <span className="text-[8px] font-black text-wl-accent uppercase tracking-[0.2em]">{item.label}</span>
                                <span className="text-xl font-bold text-white tabular-nums leading-none tracking-tighter">{item.val}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Visualizer (Right Side) */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="absolute bottom-40 right-10 w-48 space-y-4"
                    >
                        <div className="p-4 glass border border-white/5 rounded-2xl">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Spectral Data</span>
                                <Crosshair className="w-3 h-3 text-wl-accent opacity-50" />
                            </div>
                            <div className="flex items-end gap-1 h-12">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: ['20%', '80%', '40%', '90%', '30%'] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                                        className="flex-1 bg-wl-accent/30 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* HUD Cursor */}
                    {!isMobile && (
                        <motion.div
                            className="absolute w-12 h-12 border border-wl-accent/40 rounded-full flex items-center justify-center z-[152]"
                            animate={{
                                left: mousePos.x - 24,
                                top: mousePos.y - 24,
                                rotate: 360
                            }}
                            transition={{
                                left: { type: 'spring', damping: 30, stiffness: 200 },
                                top: { type: 'spring', damping: 30, stiffness: 200 },
                                rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                            }}
                        >
                            <div className="w-[200%] h-[1px] bg-wl-accent/20 rotate-45" />
                            <div className="w-[200%] h-[1px] bg-wl-accent/20 -rotate-45" />

                            {/* Coords */}
                            <div className="absolute top-full left-full ml-4 mt-4 text-[8px] font-mono text-wl-accent bg-black/80 px-2 py-1 border border-wl-accent/20 rounded whitespace-nowrap">
                                DETECTION: [X:{mousePos.x} Y:{mousePos.y}]
                            </div>
                        </motion.div>
                    )}
                </div>
            )}
        </AnimatePresence>
    );
}
