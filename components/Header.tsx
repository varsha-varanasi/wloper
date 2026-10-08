'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '@/context/DemoContext';
import {
    Menu, X, ChevronRight, Layout, MessageSquare, Users, Sparkles,
    ChevronDown, Compass, Cpu, Code2, TrendingUp, Globe,
    Blocks, Smartphone as MobileIcon, ArrowRight, Phone, Search,
    Target, Share2, ExternalLink
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import MagneticWrapper from './MagneticWrapper';

export default function Header() {
    const pathname = usePathname();
    const isLandingPage = pathname === '/best-it-company-india';
    
    const { openDemoModal } = useDemo();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    if (isLandingPage) return null;

    const menuItems = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            href: '/products',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: 'SkillytTalk — AI Interviews',
                    desc: 'AI-powered interview screening platform. Automate hiring with intelligent candidate scoring.',
                    icon: Layout,
                    href: 'https://www.skillytalk.com/',
                    external: true,
                    cta: 'Visit SkillytTalk'
                },
                {
                    title: 'Customised AI Chatbot',
                    desc: 'Fully custom AI chatbots for customer support and internal workflow automation.',
                    icon: MessageSquare,
                    href: '/products/ai-chatbot',
                    cta: 'Get Started'
                },
                {
                    title: 'AI-Based HCM System',
                    desc: 'AI-powered Human Capital Management for skills evaluation and talent hiring.',
                    icon: Users,
                    href: '/products/hcm-system',
                    cta: 'Request Demo'
                },
                {
                    title: 'AI Calling Agent',
                    desc: 'Autonomous voice agents for large-scale data collection and real-time analysis.',
                    icon: Phone,
                    href: '/products/ai-calling-agent',
                    cta: 'Launch Agent'
                }
            ]
        },
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: 'Website Development',
                    desc: 'WordPress, Shopify, Next.js, Node.js, PHP, Python, Angular & .NET.',
                    icon: Globe,
                    href: '/services/website-development',
                    cta: 'Get Quote'
                },
                {
                    title: 'Mobile App Development',
                    desc: 'High-performance iOS and Android apps with React Native and Flutter.',
                    icon: MobileIcon,
                    href: '/services/mobile-app-development',
                    cta: 'View Framework'
                },
                {
                    title: 'SEO Services',
                    desc: 'Technical SEO, link building and content strategy that drives organic growth.',
                    icon: Search,
                    href: '/services/seo',
                    cta: 'Free SEO Audit'
                },
                {
                    title: 'Google Ads',
                    desc: 'Certified PPC management — Search, Shopping and Performance Max campaigns.',
                    icon: Target,
                    href: '/services/google-ads',
                    cta: 'PPC Audit'
                },
                {
                    title: 'Meta Ads',
                    desc: 'Facebook & Instagram advertising for leads, e-commerce and brand growth.',
                    icon: Share2,
                    href: '/services/meta-ads',
                    cta: 'Meta Audit'
                },
                {
                    title: 'Custom Web Development',
                    desc: 'Bespoke web apps, SaaS platforms and enterprise portals from scratch.',
                    icon: Code2,
                    href: '/services/custom-website-development',
                    cta: 'Discuss Project'
                },
                {
                    title: 'AI Web Development',
                    desc: 'Websites supercharged with AI chatbots, personalization and automation.',
                    icon: Cpu,
                    href: '/services/software-engineering',
                    cta: 'AI Project'
                },
                {
                    title: 'Digital Marketing & SEO',
                    desc: 'Full-funnel digital marketing that grows traffic, leads and revenue.',
                    icon: TrendingUp,
                    href: '/services/digital-growth',
                    cta: 'Boost Growth'
                },
            ]
        },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about-us' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header id="main-header" className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pt-4 md:pt-6 px-4 md:px-6">
            <nav className={`container-custom mx-auto transition-all duration-500 rounded-2xl relative ${isScrolled
                ? 'py-2 px-6 shadow-2xl border border-white/10 bg-black/50 backdrop-blur-xl'
                : 'bg-transparent py-4 px-6'
                }`}>
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center group relative shrink-0">
                        <div className="absolute -inset-2 bg-wl-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="/images/loper-logo.png"
                            alt="Wloper — Best IT Company for Website Development & AI Solutions"
                            width={160}
                            height={50}
                            className="h-9 md:h-11 w-auto relative z-10 transition-all duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group/nav"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    prefetch={false}
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                                </Link>

                                {/* Mega Dropdown */}
                                {item.hasDropdown && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${activeDropdown === item.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                        <div className={`rounded-3xl p-5 shadow-2xl border border-white/10 bg-black/90 backdrop-blur-3xl grid gap-3 ${item.name === 'Services' ? 'w-[860px] grid-cols-4' : 'w-[560px] grid-cols-2'}`}>
                                            {item.dropdownItems?.map((drop) => (
                                                <Link
                                                    key={drop.title}
                                                    href={drop.href}
                                                    prefetch={false}
                                                    target={(drop as any).external ? '_blank' : undefined}
                                                    rel={(drop as any).external ? 'noopener noreferrer' : undefined}
                                                    className="group/card flex flex-col p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                                                >
                                                    <div className="w-9 h-9 rounded-xl bg-wl-accent/10 flex items-center justify-center mb-3 text-wl-accent group-hover/card:bg-wl-accent group-hover/card:text-black transition-all shrink-0">
                                                        <drop.icon className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-[12px] font-bold text-white mb-1.5 group-hover/card:text-wl-accent transition-colors leading-snug">
                                                        {drop.title}
                                                        {(drop as any).external && <ExternalLink className="w-2.5 h-2.5 inline ml-1 opacity-50" />}
                                                    </h4>
                                                    <p className="text-[10px] text-white/40 leading-relaxed flex-1">{drop.desc}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        {/* SkillytTalk quick link */}
                        <a
                            href="https://www.skillytalk.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest text-white/50 border border-white/10 hover:border-wl-accent/40 hover:text-wl-accent transition-all whitespace-nowrap"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-wl-accent animate-pulse" />
                            SkillytTalk
                        </a>

                        <Link
                            href="/hire-ai-employee"
                            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all whitespace-nowrap"
                        >
                            <Cpu className="w-4 h-4 text-wl-accent" />
                            Hire An AI Employee
                        </Link>

                        <MagneticWrapper strength={0.3}>
                             <button
                                onClick={openDemoModal}
                                className="group relative px-6 py-3 bg-wl-accent text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(202,246,72,0.4)] whitespace-nowrap text-sm"
                                aria-label="Get a Demo"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get a Demo
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </MagneticWrapper>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={openDemoModal}
                            className="p-2.5 bg-wl-accent text-black rounded-full shadow-lg"
                            aria-label="Get a Free Demo"
                        >
                            <Sparkles className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-3 rounded-full transition-all duration-300 border ${isMobileMenuOpen ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10 backdrop-blur-sm'}`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[-1] lg:hidden"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                                className="absolute top-full left-0 right-0 mt-3 px-2 lg:hidden max-h-[85vh] overflow-y-auto"
                            >
                                <div className="rounded-3xl p-4 shadow-2xl border border-white/10 bg-black/95 backdrop-blur-3xl">
                                    <div className="flex flex-col space-y-0.5">
                                        {menuItems.map((item) => (
                                            <div key={item.name} className="flex flex-col">
                                                <div
                                                    onClick={() => {
                                                        if (item.hasDropdown) {
                                                            setActiveDropdown(activeDropdown === item.name ? null : item.name);
                                                        } else {
                                                            setIsMobileMenuOpen(false);
                                                            window.location.href = item.href;
                                                        }
                                                    }}
                                                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold cursor-pointer transition-all ${activeDropdown === item.name ? 'text-wl-accent bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5 active:bg-white/10'}`}
                                                >
                                                    <span>{item.name}</span>
                                                    {item.hasDropdown
                                                        ? <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-wl-accent' : 'opacity-30'}`} />
                                                        : <ChevronRight className="w-3.5 h-3.5 opacity-20" />
                                                    }
                                                </div>

                                                {item.hasDropdown && activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        className="pl-4 pr-2 pb-3 space-y-0.5 overflow-hidden"
                                                    >
                                                        {item.dropdownItems?.map((drop) => (
                                                            <Link
                                                                key={drop.title}
                                                                href={drop.href}
                                                                prefetch={false}
                                                                target={(drop as any).external ? '_blank' : undefined}
                                                                rel={(drop as any).external ? 'noopener noreferrer' : undefined}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 group transition-all"
                                                            >
                                                                <div className="w-9 h-9 rounded-xl bg-wl-accent/10 flex items-center justify-center text-wl-accent shrink-0">
                                                                    <drop.icon className="w-4 h-4" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="text-sm font-bold text-white group-hover:text-wl-accent transition-colors">
                                                                        {drop.title}
                                                                        {(drop as any).external && <ExternalLink className="w-2.5 h-2.5 inline ml-1 opacity-40" />}
                                                                    </div>
                                                                    <p className="text-[10px] text-white/40 line-clamp-1 mt-0.5">{drop.desc}</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </div>
                                        ))}

                                        {/* Mobile CTA area */}
                                        <div className="pt-4 pb-2 px-2 mt-2 border-t border-white/5 space-y-3">
                                            <Link
                                                href="/hire-ai-employee"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-all"
                                            >
                                                <Cpu className="w-4 h-4 text-wl-accent" />
                                                Hire An AI Employee
                                            </Link>
                                            <button
                                                onClick={() => { openDemoModal(); setIsMobileMenuOpen(false); }}
                                                className="w-full flex items-center justify-center gap-3 p-4 bg-wl-accent text-black font-black uppercase tracking-widest text-sm rounded-2xl shadow-[0_8px_24px_rgba(202,246,72,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                                            >
                                                Get a Free Demo <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <a
                                                href="https://www.skillytalk.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-wl-accent/30 bg-wl-accent/5 text-wl-accent font-bold text-sm hover:bg-wl-accent/10 transition-all"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-wl-accent animate-pulse" />
                                                Try SkillytTalk — AI Interview Platform
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
