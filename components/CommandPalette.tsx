'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Command, X, ArrowRight, FileText,
    Box, Cpu, Zap, Sparkles, Layout, MessageSquare,
    Users, Phone, Compass, Code2, Blocks, Smartphone,
    TrendingUp, HelpCircle, Mail, Info
} from 'lucide-react';
import { useInterface } from '@/context/InterfaceContext';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';

export default function CommandPalette() {
    const { isSearchOpen, toggleSearch } = useInterface();
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const items = [
        // Main Pages
        { title: 'Home', href: '/', category: 'Page', icon: Layout },
        { title: 'About Us', href: '/about-us', category: 'Page', icon: Info },
        { title: 'Contact', href: '/contact', category: 'Page', icon: Mail },
        { title: 'Blog', href: '/blog', category: 'Page', icon: FileText },
        { title: 'FAQ', href: '/faq', category: 'Page', icon: HelpCircle },

        // Products
        { title: 'Interview Screening AI', href: '/products/interview-screening', category: 'Product', icon: Users },
        { title: 'Neural Chatbot', href: '/products/ai-chatbot', category: 'Product', icon: MessageSquare },
        { title: 'HCM AI System', href: '/products/hcm-system', category: 'Product', icon: Cpu },
        { title: 'AI Calling Agent', href: '/products/ai-calling-agent', category: 'Product', icon: Phone },

        // Services
        { title: 'AI Strategy & Consulting', href: '/services/ai-strategy', category: 'Service', icon: Compass },
        { title: 'Custom Software Engineering', href: '/services/software-engineering', category: 'Service', icon: Code2 },
        { title: 'Blockchain Solutions', href: '/services/blockchain-solutions', category: 'Service', icon: Blocks },
        { title: 'Mobile App Development', href: '/services/mobile-app-development', category: 'Service', icon: Smartphone },
        { title: 'Digital Growth & SEO', href: '/services/digital-growth', category: 'Service', icon: TrendingUp },

        // Blog Posts
        ...blogPosts.map(post => ({
            title: post.title,
            href: `/blog/${post.slug}`,
            category: 'Blog Post',
            icon: FileText
        }))
    ];

    const filteredItems = query === ''
        ? items.slice(0, 8)
        : items.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8);

    useEffect(() => {
        if (isSearchOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isSearchOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isSearchOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    handleSelect(filteredItems[selectedIndex].href);
                }
            } else if (e.key === 'Escape') {
                toggleSearch();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSearchOpen, filteredItems, selectedIndex]);

    const handleSelect = (href: string) => {
        router.push(href);
        toggleSearch();
    };

    return (
        <AnimatePresence>
            {isSearchOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSearch}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4 z-[201]"
                    >
                        <div className="glass-strong rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-3xl">
                            {/* Search Header */}
                            <div className="relative p-6 border-b border-white/5">
                                <Search className="absolute left-10 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        setSelectedIndex(0);
                                    }}
                                    placeholder="Execute search protocol..."
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-wl-accent/30 transition-all font-mono"
                                />
                                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10 text-[10px] text-white/40">
                                        <Command className="w-3 h-3" />
                                        <span>K</span>
                                    </div>
                                    <button onClick={toggleSearch} className="text-white/20 hover:text-white transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Results Area */}
                            <div className="p-4 max-h-[460px] overflow-y-auto no-scrollbar">
                                {filteredItems.length > 0 ? (
                                    <div className="space-y-1">
                                        {filteredItems.map((item, idx) => (
                                            <button
                                                key={item.href + idx}
                                                onClick={() => handleSelect(item.href)}
                                                onMouseEnter={() => setSelectedIndex(idx)}
                                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group ${selectedIndex === idx ? 'bg-wl-accent/10 border-white/10' : 'border-transparent'
                                                    }`}
                                            >
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${selectedIndex === idx ? 'bg-wl-accent text-black scale-110' : 'bg-white/5 text-white/40'
                                                    }`}>
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className={`font-bold transition-colors ${selectedIndex === idx ? 'text-wl-accent' : 'text-white'
                                                            }`}>
                                                            {item.title}
                                                        </h4>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <ArrowRight className={`w-4 h-4 transition-all ${selectedIndex === idx ? 'translate-x-1 opacity-100 text-wl-accent' : 'opacity-0 -translate-x-2'
                                                    }`} />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-20 text-center">
                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Sparkles className="w-8 h-8 text-white/10" />
                                        </div>
                                        <h3 className="text-white font-bold mb-1">No matching protocols found</h3>
                                        <p className="text-white/20 text-sm">Query restricted. Try searching for different keywords.</p>
                                    </div>
                                )}
                            </div>

                            {/* Footer Info */}
                            <div className="bg-white/5 px-8 py-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <kbd className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">↓</kbd>
                                            <kbd className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">↑</kbd>
                                        </div>
                                        <span>Navigate</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <kbd className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10">↵</kbd>
                                        <span>Select</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-3 h-3 text-wl-accent" />
                                    <span>V4.2.0-STABLE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
