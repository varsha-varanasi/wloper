'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, ChevronRight } from 'lucide-react';

export default function DevTerminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ cmd: string; result: string | React.ReactNode; isTyping?: boolean }>>([
        { cmd: 'system', result: 'WLOPER Core OS v1.0.4 initialized. Type /help for commands.' }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === '`') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        if (!cmd) return;

        let result: string | React.ReactNode = '';

        switch (cmd) {
            case '/help':
                result = 'Available: /whois, /stack, /projects, /status, /matrix, /coffee, /clear, /hire-us';
                break;
            case '/whois':
                result = 'WLOPER: Next-Gen AI & Web Architects. Based in Punjab, Serving the World.';
                break;
            case '/stack':
                result = 'Next.js 14, Three.js, Framer Motion, OpenAI API, Tailwind CSS.';
                break;
            case '/status':
                result = 'Core Systems: OPTIMAL | AI Engine: ACTIVE | Uptime: 99.99% | Mood: INNOVATIVE';
                break;
            case '/matrix':
                result = 'Wake up, Neo... The Matrix has you. Follow the white rabbit.';
                break;
            case '/coffee':
                result = '☕ Brewing complete. Performance boosted by +15%.';
                break;
            case '/projects':
                result = 'AI Screening Platform, Neural Chatbots, HCM Cloud, Blockchain Ops.';
                break;
            case '/clear':
                setHistory([]);
                setInput('');
                return;
            case '/hire-us':
                result = 'Smart Choice. Signal sent to HR... [SUCCESS] We will find you.';
                break;
            default:
                result = `Command not recognized: ${cmd}. Type /help for options.`;
        }

        const newEntry = { cmd: input, result, isTyping: true };
        setHistory(prev => [...prev, newEntry]);
        setInput('');

        // Simulate typing animation finish
        setTimeout(() => {
            setHistory(prev => prev.map((item, idx) =>
                idx === prev.length - 1 ? { ...item, isTyping: false } : item
            ));
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="fixed inset-x-4 top-20 bottom-20 z-[200] lg:inset-x-40 lg:top-32 lg:bottom-32 bg-black/90 backdrop-blur-2xl border border-wl-accent/20 rounded-3xl shadow-[0_0_100px_rgba(202,246,72,0.1)] overflow-hidden font-mono"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5 px-1">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <TerminalIcon className="w-4 h-4 text-wl-accent" />
                                <span className="text-[10px] font-bold text-wl-accent/70 uppercase tracking-widest">WLO_CORE_SHEL_v2.1</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors group">
                            <X className="w-5 h-5 text-white/30 group-hover:text-white" />
                        </button>
                    </div>

                    {/* Output Area */}
                    <div ref={scrollRef} className="p-8 h-[calc(100%-120px)] overflow-y-auto space-y-4 custom-scrollbar">
                        {history.map((item, i) => (
                            <div key={i} className="animate-fade-in text-sm">
                                {item.cmd !== 'system' && (
                                    <div className="flex items-center gap-2 text-wl-accent opacity-50 mb-1">
                                        <ChevronRight className="w-3 h-3" />
                                        <span>{item.cmd}</span>
                                    </div>
                                )}
                                <div className={`${item.cmd === 'system' ? 'text-wl-accent font-bold' : 'text-white/80'} leading-relaxed`}>
                                    {item.result}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-black/50 border-t border-white/10">
                        <form onSubmit={handleCommand} className="flex items-center gap-3">
                            <span className="text-wl-accent font-bold">❯</span>
                            <input
                                autoFocus
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a command..."
                                className="flex-1 bg-transparent border-none outline-none text-wl-accent placeholder:text-wl-accent/20"
                            />
                        </form>
                    </div>

                    {/* Hint */}
                    <div className="absolute bottom-2 right-6 text-[8px] text-white/20 uppercase">
                        Press ESC to exit
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
