'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('wl-popup-seen');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000); // Show after 3 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('wl-popup-seen', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Newsletter Subscriber',
                    email: email,
                    subject: 'New Newsletter Subscription',
                    message: `A new user has subscribed to the newsletter: ${email}`
                }),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    handleClose();
                }, 3000);
            } else {
                const data = await response.json();
                alert(data.error || 'Connection failed. Please try again.');
                setStatus('idle');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('idle');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-wl-dark/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-4xl glass-strong border border-wl-accent/20 rounded-[3.5rem] overflow-hidden grid lg:grid-cols-2 shadow-[0_0_50px_rgba(202,246,72,0.1)]"
                    >
                        {/* Visual Side */}
                        <div className="relative aspect-video lg:aspect-auto bg-wl-dark overflow-hidden group">
                            <Image
                                src="/images/envato-labs-ai-8c704ec1-bca5-4f0e-9049-c06414cf0508.jpg"
                                alt="AI Intelligence"
                                fill
                                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-wl-dark/50"></div>

                            <div className="absolute bottom-10 left-10 right-10 z-10">
                                <div className="tag-label border-white/10 bg-white/5 text-white mb-4">
                                    <Zap className="w-3 h-3 text-wl-accent" />
                                    Exclusive Access
                                </div>
                                <h3 className="text-3xl font-bold leading-tight uppercase tracking-tighter">
                                    The Future is <span className="text-wl-accent">Autonomous.</span>
                                </h3>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                            <button
                                onClick={handleClose}
                                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all group"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </button>

                            <div className="mb-8">
                                <div className="flex items-center gap-2 text-wl-accent mb-4">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Join the Inner Circle</span>
                                </div>
                                <h2 className="heading-sm mb-6">Scale Smarter and Faster with AI</h2>
                                <p className="subtitle-md">Get curated AI insights, product updates, and technical blueprints directly to your inbox. No fluff, just alpha.</p>
                            </div>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 rounded-2xl bg-wl-accent/10 border border-wl-accent/20 text-center"
                                >
                                    <p className="text-wl-accent font-bold">Welcome aboard! Access granted.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@work-email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <button
                                        disabled={status === 'loading'}
                                        type="submit"
                                        className="btn-primary w-full h-16 text-lg group overflow-hidden disabled:opacity-50"
                                    >
                                        <span className="flex items-center justify-center gap-3">
                                            {status === 'loading' ? 'Initializing...' : 'Join 2,500+ Innovators'}
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                    </button>
                                    <div className="flex items-center justify-center gap-2 text-[10px] text-wl-muted-dark font-bold uppercase tracking-widest mt-4">
                                        <ShieldCheck className="w-3 h-3" />
                                        Zero Spam &bullet; One-Click Unsubscribe
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
