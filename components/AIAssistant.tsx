'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, Zap, Shield, Cpu, Mic, MicOff } from 'lucide-react';

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const startListening = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInputValue(transcript);
        };

        recognition.start();
    };

    const quickLinks = [
        { label: 'AI Strategy', icon: Zap },
        { label: 'Custom Bots', icon: Bot },
        { label: 'Security', icon: Shield },
        { label: 'Integration', icon: Cpu },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] glass-strong rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-wl-accent p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-wl-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-sm">WLOPER AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${isListening ? 'bg-red-600 animate-ping' : 'bg-green-600 animate-pulse'}`}></div>
                                        <span className="text-[10px] font-bold text-black/60 uppercase tracking-tighter">
                                            {isListening ? 'Listening...' : 'Online & Thinking'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-black/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-black" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 h-[400px] overflow-y-auto space-y-6">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                    <Bot className="w-4 h-4 text-wl-accent" />
                                </div>
                                <div className="bg-white/5 rounded-2xl p-4 text-sm text-white/80 border border-white/5">
                                    {isListening ? "I'm listening... speak now." : "Hello! I'm WLOPER AI. How can I help you scale your product with artificial intelligence today?"}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-[10px] font-bold text-wl-muted-dark uppercase tracking-widest px-1">Quick Inquiries</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickLinks.map((link) => (
                                        <button
                                            key={link.label}
                                            onClick={() => setInputValue(link.label)}
                                            className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-wl-accent/30 hover:bg-wl-accent/5 transition-all text-xs font-medium group"
                                        >
                                            <link.icon className="w-3.5 h-3.5 text-wl-accent group-hover:scale-110 transition-transform" />
                                            {link.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer / Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Ask about AI solutions..."
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-wl-accent/50 transition-colors"
                                    />
                                    <button
                                        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-transparent text-white/40 hover:text-wl-accent'}`}
                                        onClick={startListening}
                                    >
                                        <Mic className="w-4 h-4" />
                                    </button>
                                </div>
                                <button className="p-3 bg-wl-accent rounded-full text-black hover:scale-110 transition-transform flex-shrink-0">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-white text-black' : 'bg-wl-accent text-black'}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wl-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-wl-accent"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
