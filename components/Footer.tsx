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
            title: "Products",
            links: [
                { name: "Screening AI", href: "/products/interview-screening" },
                { name: "Neural Chat", href: "/products/ai-chatbot" },
                { name: "HCM Cloud", href: "/products/hcm-system" },
                { name: "Automation Hub", href: "/products" },
                { name: "Support Agent", href: "/products/ai-chatbot" }
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Neural Strategy", href: "/services/ai-strategy" },
                { name: "System Sync", href: "/services/ai-integration" },
                { name: "Core Engineering", href: "/services/software-engineering" },
                { name: "Performance SEO", href: "/services/digital-growth" },
                { name: "Blockchain Ops", href: "/services/software-engineering" }
            ]
        },
        {
            title: "Industries",
            links: [
                { name: "Fintech", href: "/industries" },
                { name: "HealthTech AI", href: "/industries" },
                { name: "Enterprise SaaS", href: "/industries" },
                { name: "Education", href: "/industries" },
                { name: "E-commerce", href: "/industries" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "The Alpha Blog", href: "/blog" },
                { name: "Success Stories", href: "/about" },
                { name: "Market Insights", href: "/blog" },
                { name: "Developer Hub", href: "/contact" },
                { name: "API Docs", href: "/contact" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "Our Identity", href: "/about" },
                { name: "Brand Assets", href: "/contact" },
                { name: "Global Offices", href: "/contact" },
                { name: "Career Openings", href: "/contact" },
                { name: "Media Center", href: "/contact" }
            ]
        }
    ];

    const socials = [
        { name: 'X', icon: Twitter, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'YouTube', icon: Youtube, href: '#' },
        { name: 'GitHub', icon: Github, href: '#' }
    ];

    return (
        <footer className="bg-wl-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none -mr-64 -mt-64"></div>

            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-10">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png"
                                alt="Wloper Logo"
                                width={140}
                                height={44}
                                className="h-9 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-all"
                            />
                        </Link>
                        <p className="text-wl-muted-dark text-lg leading-relaxed font-medium">
                            Architecting the next era of <span className="text-white">Intelligent Systems</span> and digital dominance.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                    <MapPin className="w-4 h-4 text-wl-accent" />
                                </div>
                                <div className="text-xs">
                                    <p className="text-white font-bold opacity-60 uppercase mb-0.5">Global Headquarters</p>
                                    <p className="text-wl-muted-dark">Punjab, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                    <Mail className="w-4 h-4 text-wl-accent" />
                                </div>
                                <div className="text-xs">
                                    <p className="text-white font-bold opacity-60 uppercase mb-0.5">Direct Inquiry</p>
                                    <p className="text-wl-muted-dark font-mono">ops@wloper.tech</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-300 hover:bg-wl-accent hover:text-black text-wl-muted-dark"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        {footerSections.slice(0, 3).map((section) => (
                            <div key={section.title} className="space-y-6">
                                <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-40">{section.title}</h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-wl-muted-dark hover:text-wl-accent transition-colors text-sm font-medium flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Globe Visualization */}
                    <div className="lg:col-span-3 h-[400px] lg:-mt-20 relative pointer-events-auto">
                        <div className="absolute inset-0 bg-wl-accent/5 rounded-full blur-[100px] scale-75"></div>
                        <GlobalGlobe />
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <p className="text-[9px] font-black text-wl-accent uppercase tracking-[0.5em] animate-pulse">Live Global Operations</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-wl-muted-dark text-[11px] font-medium uppercase tracking-widest">
                        © {currentYear} WLOPER Labs. All Systems Nominal.
                    </p>
                    <div className="flex gap-10">
                        <Link href="/privacy" className="text-[10px] font-bold text-white/30 hover:text-wl-accent transition-colors uppercase tracking-widest">Privacy Protocol</Link>
                        <Link href="/terms" className="text-[10px] font-bold text-white/30 hover:text-wl-accent transition-colors uppercase tracking-widest">Service Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
