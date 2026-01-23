'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterface } from '@/context/InterfaceContext';
import { useDemo } from '@/context/DemoContext';
import {
    Menu, X, ChevronRight, Layout, MessageSquare, Users, Sparkles,
    ChevronDown, Compass, Cpu, Code2, TrendingUp, Terminal as TerminalIcon,
    Blocks, Smartphone as MobileIcon, ArrowRight
} from 'lucide-react';

export default function Header() {
    const { openDemoModal } = useDemo();
    const { isHUDActive, toggleHUD, isTerminalOpen, toggleTerminal } = useInterface();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const menuItems = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            href: '/products',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: 'AI Interview Screening Platform',
                    desc: 'An intelligent AI platform that automates candidate interviews and evaluates responses.',
                    icon: Layout,
                    href: '/products/interview-screening',
                    cta: 'Book Demo'
                },
                {
                    title: 'Customised AI Chatbot',
                    desc: 'Fully custom AI chatbots designed to automate customer support and internal workflows.',
                    icon: MessageSquare,
                    href: '/products/ai-chatbot',
                    cta: 'Get Started'
                },
                {
                    title: 'AI-Based HCM System',
                    desc: 'AI-powered Human Capital Management system for skills evaluation and talent hiring.',
                    icon: Users,
                    href: '/products/hcm-system',
                    cta: 'Request Demo'
                }
            ]
        },
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                {
                    title: 'AI Strategy & Consulting',
                    desc: 'We help organizations identify high-impact AI opportunities and define clear roadmaps.',
                    icon: Compass,
                    href: '/services/ai-strategy',
                    cta: 'Talk to AI Experts'
                },
                {
                    title: 'AI Integration & Customization',
                    desc: 'We integrate AI capabilities into your existing systems and workflows.',
                    icon: Cpu,
                    href: '/services/ai-integration',
                    cta: 'Request Consultation'
                },
                {
                    title: 'Custom Software Engineering',
                    desc: 'End-to-end engineering for web and applications focused on performance and scale.',
                    icon: Code2,
                    href: '/services/software-engineering',
                    cta: 'Start a Project'
                },
                {
                    title: 'Blockchain & Web3 Solutions',
                    desc: 'Decentralized architectures, smart contracts, and Web3 ecosystem engineering.',
                    icon: Blocks,
                    href: '/services/blockchain-solutions',
                    cta: 'Enter Web3'
                },
                {
                    title: 'Mobile App Development',
                    desc: 'High-performance iOS and Android applications built for speed and global scale.',
                    icon: MobileIcon,
                    href: '/services/mobile-app-development',
                    cta: 'View Framework'
                },
                {
                    title: 'Growth, SEO & Digital Enablement',
                    desc: 'Data-driven growth strategies through SEO, analytics, and digital optimization.',
                    icon: TrendingUp,
                    href: '/services/digital-growth',
                    cta: 'Boost Visibility'
                }
            ]
        },
        { name: 'Blogs', href: '/blog' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pt-4 md:pt-6 px-4 md:px-6">
            <nav className={`container-custom mx-auto transition-all duration-500 rounded-2xl relative ${isScrolled
                ? 'glass py-2 px-6 shadow-2xl border-white/10 bg-black/40 backdrop-blur-xl'
                : 'bg-transparent py-4 px-6'
                }`}>
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center group relative shrink-0">
                        <div className="absolute -inset-2 bg-wl-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                            src="/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png"
                            alt="Wloper Logo"
                            width={160}
                            height={50}
                            className="h-8 md:h-10 w-auto relative z-10 transition-all duration-300 group-hover:scale-105 brightness-0 invert"
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
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                                </Link>

                                {/* Mega Menu Dropdown */}
                                {item.hasDropdown && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                        <div className={`glass-strong rounded-[2.5rem] p-6 shadow-2xl border-white/10 bg-[#0A0A0A]/95 backdrop-blur-3xl grid gap-4 ${item.name === 'Services' ? 'w-[840px] grid-cols-3' : 'w-[580px] grid-cols-2'
                                            }`}>
                                            {item.dropdownItems?.map((drop) => (
                                                <Link
                                                    key={drop.title}
                                                    href={drop.href}
                                                    className="group/card flex flex-col p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 h-full"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-wl-accent/10 flex items-center justify-center mb-3 text-wl-accent group-hover/card:scale-110 group-hover/card:bg-wl-accent group-hover/card:text-black transition-all">
                                                        <drop.icon className="w-5 h-5" />
                                                    </div>
                                                    <h4 className="text-[13px] font-bold text-white mb-2 group-hover/card:text-wl-accent transition-colors">
                                                        {drop.title}
                                                    </h4>
                                                    <p className="text-[11px] text-wl-muted-dark leading-relaxed mb-4 flex-1">
                                                        {drop.desc}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-[9px] font-bold text-wl-accent uppercase tracking-wider">
                                                        {drop.cta} <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0">
                        <div className="flex items-center gap-2 mr-2 border-r border-white/10 pr-4">
                            <button
                                onClick={toggleHUD}
                                className={`p-2 rounded-xl transition-all duration-300 border ${isHUDActive ? 'bg-wl-accent text-black border-wl-accent' : 'text-white/40 border-white/10 hover:text-wl-accent hover:border-wl-accent/50 hover:bg-white/5'}`}
                                title="Toggle HUD (Alt+H)"
                            >
                                <Layout className="w-4 h-4" />
                            </button>
                            <button
                                onClick={toggleTerminal}
                                className={`p-2 rounded-xl transition-all duration-300 border ${isTerminalOpen ? 'bg-wl-accent text-black border-wl-accent' : 'text-white/40 border-white/10 hover:text-wl-accent hover:border-wl-accent/50 hover:bg-white/5'}`}
                                title="Toggle Terminal (Ctrl+`)"
                            >
                                <TerminalIcon className="w-4 h-4" />
                            </button>
                        </div>
                        <button
                            onClick={openDemoModal}
                            className="group relative px-7 py-3 bg-wl-accent text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(202,246,72,0.4)] whitespace-nowrap"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get a Demo
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button - Enhanced for touch */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={openDemoModal}
                            className="p-2.5 bg-wl-accent text-black rounded-full shadow-lg"
                        >
                            <Sparkles className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-3 rounded-full transition-all duration-300 border ${isMobileMenuOpen ? 'bg-white text-black border-white' : 'glass text-white border-white/10'}`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop shadow/blur */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[-1] lg:hidden"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="absolute top-full left-0 right-0 mt-4 px-2 lg:hidden max-h-[80vh] overflow-y-auto"
                            >
                                <div className="glass-strong rounded-[2rem] p-4 shadow-2xl border-white/10 bg-[#0A0A0A]/98 backdrop-blur-3xl overflow-hidden">
                                    <div className="flex flex-col space-y-1">
                                        {menuItems.map((item) => (
                                            <div key={item.name} className="flex flex-col">
                                                <div
                                                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : (setIsMobileMenuOpen(false), window.location.href = item.href)}
                                                    className={`flex items-center justify-between p-4 rounded-2xl text-base font-bold transition-all cursor-pointer ${activeDropdown === item.name ? 'text-wl-accent bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        {item.name}
                                                    </span>
                                                    {item.hasDropdown ? (
                                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-wl-accent' : 'opacity-30'}`} />
                                                    ) : (
                                                        <ChevronRight className="w-4 h-4 opacity-20" />
                                                    )}
                                                </div>

                                                {item.hasDropdown && activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        className="pl-4 pr-2 pb-4 space-y-1 overflow-hidden"
                                                    >
                                                        {item.dropdownItems?.map((drop) => (
                                                            <Link
                                                                key={drop.title}
                                                                href={drop.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 active:bg-white/10 group transition-all"
                                                            >
                                                                <div className="w-10 h-10 rounded-xl bg-wl-accent/10 flex items-center justify-center text-wl-accent shrink-0">
                                                                    <drop.icon className="w-5 h-5" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="text-sm font-bold text-white group-hover:text-wl-accent transition-colors flex items-center justify-between">
                                                                        {drop.title}
                                                                        <ChevronRight className="w-3 h-3 opacity-30" />
                                                                    </div>
                                                                    <p className="text-[10px] text-wl-muted-dark line-clamp-1 mt-0.5 font-medium">{drop.desc}</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </div>
                                        ))}

                                        <div className="pt-6 pb-2 px-2 mt-4 border-t border-white/5">
                                            <button
                                                onClick={() => {
                                                    openDemoModal();
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="w-full flex items-center justify-center gap-3 p-5 bg-wl-accent text-black font-black uppercase tracking-widest text-sm rounded-[1.5rem] shadow-[0_10px_30px_rgba(202,246,72,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                                            >
                                                Get a Demo
                                                <ArrowRight className="w-4 h-4" />
                                            </button>

                                            <div className="flex items-center justify-center gap-4 mt-6">
                                                <button onClick={() => { toggleHUD(); setIsMobileMenuOpen(false); }} className="flex-1 glass p-4 rounded-2xl flex flex-col items-center gap-2">
                                                    <Layout className={`w-5 h-5 ${isHUDActive ? 'text-wl-accent' : 'text-white/40'}`} />
                                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">HUD</span>
                                                </button>
                                                <button onClick={() => { toggleTerminal(); setIsMobileMenuOpen(false); }} className="flex-1 glass p-4 rounded-2xl flex flex-col items-center gap-2">
                                                    <TerminalIcon className={`w-5 h-5 ${isTerminalOpen ? 'text-wl-accent' : 'text-white/40'}`} />
                                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Terminal</span>
                                                </button>
                                            </div>
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
