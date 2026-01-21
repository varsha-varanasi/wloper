'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShieldCheck, Zap, Calendar, Bot, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'Predictive AI Analytics'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: 'Demo Request',
                    message: `Requested Blueprint session for: ${formData.interest}`
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                import('canvas-confetti').then(confetti => {
                    confetti.default({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#caf648', '#ffffff']
                    });
                });
                setTimeout(() => {
                    setIsSuccess(false);
                    onClose();
                }, 4000);
            } else {
                alert('Connection failed. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-wl-dark/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-wl-dark-card border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(202,246,72,0.1)]"
                    >
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wl-accent/20 via-wl-accent to-wl-accent/20" />

                        <div className="p-8 md:p-12">
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all group"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </button>

                            {!isSuccess ? (
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="tag-label">
                                            <Zap className="w-4 h-4 text-wl-accent" />
                                            Express Initialization
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                            Book Your <span className="heading-gradient">AI Blueprint</span> Session
                                        </h2>
                                        <p className="subtitle-md">
                                            Get a 30-minute walkthrough of our proprietary AI frameworks tailored to your business.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-wl-muted-dark ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all font-medium"
                                                    placeholder="John Silver"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-wl-muted-dark ml-1">Work Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all font-medium"
                                                    placeholder="john@wloper.ai"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-wl-muted-dark ml-1">Specialization Interest</label>
                                            <select
                                                value={formData.interest}
                                                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-wl-accent focus:bg-white/10 focus:outline-none transition-all font-medium appearance-none"
                                            >
                                                <option className="bg-wl-dark" value="Predictive AI Analytics">Predictive AI Analytics</option>
                                                <option className="bg-wl-dark" value="Autonomous Agents">Autonomous Agents</option>
                                                <option className="bg-wl-dark" value="Blockchain Infrastructure">Blockchain Infrastructure</option>
                                                <option className="bg-wl-dark" value="Growth SEO Systems">Growth SEO Systems</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary w-full h-16 text-lg group relative overflow-hidden disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Initialize Discovery <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </span>
                                            )}
                                        </button>

                                        <div className="flex items-center justify-center gap-3 text-wl-muted-dark">
                                            <ShieldCheck className="w-4 h-4 text-wl-accent" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Encryption Enabled</span>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-wl-accent rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Bot className="w-10 h-10 text-black" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">Alignment Confirmed</h3>
                                    <p className="subtitle-md mx-auto">
                                        Our strategy pod is reviewing your request. Expect a briefing document within 24 hours.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
