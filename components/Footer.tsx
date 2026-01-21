'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Linkedin, Twitter, Github, Globe, ArrowUpRight,
    Mail, Phone, MapPin, Instagram, Youtube, Sparkles,
    ShieldCheck, Zap, Code, BarChart, Cpu
} from 'lucide-react';
import dynamic from 'next/dynamic';

const GlobalGlobe = dynamic(() => import('./GlobalGlobe'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-transparent" />
});

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Solutions",
            links: [
                { name: "Interview AI", href: "/products/interview-screening" },
                { name: "Neural Chat", href: "/products/ai-chatbot" },
                { name: "HCM Cloud", href: "/products/hcm-system" },
                { name: "Automation", href: "/products" }
            ]
        },
        {
            title: "Expertise",
            links: [
                { name: "AI Strategy", href: "/services/ai-strategy" },
                { name: "Engineering", href: "/services/software-engineering" },
                { name: "Growth", href: "/services/digital-growth" },
                { name: "Innovation", href: "/about" }
            ]
        },
        {
            title: "Ecosystem",
            links: [
                { name: "Insights", href: "/blog" },
                { name: "Company", href: "/about" },
                { name: "Partners", href: "/about" },
                { name: "Connect", href: "/contact" }
            ]
        }
    ];

    const socials = [
        { name: 'X', icon: Twitter, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'GitHub', icon: Github, href: '#' }
    ];

    return (
        <footer className="bg-wl-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32"></div>

            <div className="container-custom relative z-10">
                {/* HUD Data Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 mb-16 glass-strong rounded-2xl border border-white/5 text-[9px] font-black uppercase tracking-[0.3em] overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-wl-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-wl-accent animate-pulse"></div>
                            <span className="text-wl-accent">System: Online</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-white/40">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Encrypted: AES-256</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-white/40">
                            <Cpu className="w-3 h-3" />
                            <span>Architecture: v4.2.0-stable</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-white/40">
                        <span className="hidden lg:inline">BPM: 120.4</span>
                        <span className="hidden lg:inline">LATENCY: 14MS</span>
                        <div className="flex items-center gap-2">
                            <Globe className="w-3 h-3 text-wl-accent" />
                            <span className="text-wl-accent">Nodes: 14 Global</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand & Newsletter Section */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <Link href="/" className="inline-block group">
                                <Image
                                    src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png"
                                    alt="Wloper Logo"
                                    width={160}
                                    height={50}
                                    className="h-10 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-all"
                                />
                            </Link>
                            <p className="text-wl-muted-dark text-lg leading-relaxed font-medium max-w-sm">
                                Architecting the next era of <span className="text-white">Intelligent Systems</span> and digital dominance.
                            </p>
                        </div>

                        {/* Inline Newsletter */}
                        <div className="space-y-4">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-40">Join the Collective</h4>
                            <div className="relative group max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-wl-accent/50 transition-all font-medium"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-wl-accent hover:bg-white text-black px-4 rounded-lg transition-all group/btn">
                                    <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-300 hover:bg-wl-accent hover:text-black text-wl-muted-dark group"
                                >
                                    <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        {footerSections.map((section) => (
                            <div key={section.title} className="space-y-8">
                                <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-30">{section.title}</h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-wl-muted-dark hover:text-wl-accent transition-all text-sm font-medium flex items-center gap-1 group translate-x-0 hover:translate-x-1"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 transition-all text-wl-accent" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Globe Visualization */}
                    <div className="lg:col-span-3">
                        <div className="relative aspect-square lg:aspect-auto h-[300px] lg:h-full lg:-mt-20 group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--wl-accent)_0%,_transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <GlobalGlobe />
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                <Link
                                    href="/contact"
                                    className="text-[9px] font-black text-wl-accent uppercase tracking-[0.5em] hover:text-white transition-colors animate-pulse"
                                >
                                    Live Global Operations
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Bar */}
                <div className="grid md:grid-cols-2 gap-8 py-10 border-t border-white/5">
                    <div className="flex flex-wrap gap-x-12 gap-y-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-wl-accent/40" />
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Punjab, India</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-wl-accent/40" />
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">ops@wloper.tech</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:justify-end gap-x-10 gap-y-4">
                        <Link href="/privacy" className="text-[10px] font-bold text-white/20 hover:text-wl-accent transition-colors uppercase tracking-widest">Privacy Protocol</Link>
                        <Link href="/terms" className="text-[10px] font-bold text-white/20 hover:text-wl-accent transition-colors uppercase tracking-widest">Service Terms</Link>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
                        © {currentYear} WLOPER Systems. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
                        <span>LATENCY: 0.042ms</span>
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                        <span className="text-wl-accent/40">Status: Nominal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
