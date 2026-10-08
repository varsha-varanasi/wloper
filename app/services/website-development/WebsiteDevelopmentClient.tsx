'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, ShoppingCart, Code2, Server, Cpu, FileCode, Layout, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

const platforms = [
    {
        name: 'WordPress',
        slug: 'wordpress',
        icon: '🟦',
        desc: 'Custom WordPress websites — themes, plugins, WooCommerce stores and enterprise CMS solutions built for performance and SEO.',
        features: ['Custom Theme Development', 'WooCommerce Stores', 'Plugin Development', 'Speed Optimization', 'Multisite Networks'],
        color: 'border-blue-500/20 hover:border-blue-500/40',
    },
    {
        name: 'Shopify',
        slug: 'shopify',
        icon: '🟩',
        desc: 'Full-featured Shopify stores with custom themes, app integrations, and conversion-optimized checkout flows.',
        features: ['Custom Shopify Themes', 'App Integration', 'Shopify Plus', 'Liquid Development', 'Payment Gateways'],
        color: 'border-green-500/20 hover:border-green-500/40',
    },
    {
        name: 'Next.js',
        slug: 'nextjs',
        icon: '⬛',
        desc: 'Blazing-fast Next.js web applications with server-side rendering, edge functions and ISR for maximum performance.',
        features: ['App Router', 'Server Components', 'Edge Functions', 'ISR/SSG/SSR', 'API Routes'],
        color: 'border-white/20 hover:border-white/40',
    },
    {
        name: 'Node.js',
        slug: 'nodejs',
        icon: '🟢',
        desc: 'Scalable Node.js backends and full-stack applications with REST APIs, WebSockets and microservices architecture.',
        features: ['Express / Fastify', 'REST & GraphQL APIs', 'WebSocket Apps', 'Microservices', 'Serverless'],
        color: 'border-green-400/20 hover:border-green-400/40',
    },
    {
        name: 'PHP',
        slug: 'php',
        icon: '🟣',
        desc: 'Robust PHP development using Laravel and Symfony — ideal for CMSs, portals, SaaS platforms and legacy migrations.',
        features: ['Laravel & Symfony', 'REST API Development', 'CMS Development', 'Legacy Migration', 'PHPUnit Testing'],
        color: 'border-purple-500/20 hover:border-purple-500/40',
    },
    {
        name: 'Python',
        slug: 'python',
        icon: '🐍',
        desc: 'Python-powered web apps using Django and FastAPI — popular for data-intensive platforms, AI-backed products and automation.',
        features: ['Django & FastAPI', 'Data Dashboards', 'AI/ML Integration', 'REST APIs', 'Celery & Redis'],
        color: 'border-yellow-500/20 hover:border-yellow-500/40',
    },
    {
        name: 'Angular',
        slug: 'angular',
        icon: '🔴',
        desc: 'Enterprise Angular SPAs and dashboards — TypeScript-first, component-driven development for complex business applications.',
        features: ['Angular 17+', 'NgRx State Management', 'PWA Development', 'Material Design', 'Unit Testing'],
        color: 'border-red-500/20 hover:border-red-500/40',
    },
    {
        name: '.NET',
        slug: 'dotnet',
        icon: '🔵',
        desc: 'Enterprise-grade .NET web applications using ASP.NET Core — ideal for secure, high-performance business platforms.',
        features: ['ASP.NET Core', 'Blazor Apps', 'Azure Hosting', 'Entity Framework', 'Microservices'],
        color: 'border-blue-400/20 hover:border-blue-400/40',
    },
];

const benefits = [
    'SEO-optimized from day one',
    'Mobile-first responsive design',
    'PageSpeed 90+ guaranteed',
    'Secure HTTPS & GDPR ready',
    'Post-launch support included',
    'Transparent pricing, no hidden fees',
    'On-time delivery commitment',
    'Dedicated project manager',
];

export default function WebsiteDevelopmentClient() {
    const { openDemoModal } = useDemo();

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-36 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg"
                        alt="Website Development Services" fill priority className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/80 via-wl-dark/60 to-wl-dark" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="tag-label mx-auto mb-6">
                        <Globe className="w-4 h-4 text-wl-accent" />
                        Website Development Company
                    </motion.div>
                    <h1 className="heading-xl mb-8 max-w-5xl mx-auto text-balance tracking-tighter leading-tight">
                        <span className="heading-gradient">Professional Website</span>
                        <br />
                        <span className="text-wl-accent">Development Services</span>
                    </h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="subtitle-lg mx-auto mb-12 text-white/60 max-w-3xl">
                        From WordPress blogs to enterprise Next.js platforms — Wloper builds websites that load fast, rank on Google, and convert visitors into customers. 8 technologies. Unlimited possibilities.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={openDemoModal} className="btn-primary inline-flex items-center gap-3">
                            Free Website Audit (5-min report) <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link href="/contact" className="border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm hover:border-wl-accent/40 transition-all inline-flex items-center gap-2">
                            Talk to Developer
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* STATS */}
            <section className="section-padding pt-0 -mt-8">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { value: '200+', label: 'Websites Delivered' },
                            { value: '90+', label: 'PageSpeed Score' },
                            { value: '8', label: 'Technologies' },
                            { value: '5★', label: 'Client Rating' },
                        ].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="glass-strong p-8 rounded-[2.5rem] border border-white/5 text-center">
                                <div className="text-4xl font-black text-wl-accent mb-2">{s.value}</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLATFORMS GRID */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="tag-label mx-auto mb-4"><Code2 className="w-4 h-4" /> Our Platforms</div>
                        <h2 className="heading-lg">Website Development <span className="heading-gradient">Across 8 Technologies</span></h2>
                        <p className="subtitle-md mt-4 max-w-2xl mx-auto">We are experts in every major web technology — pick the right stack for your project or let us recommend the best fit.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platforms.map((p, i) => (
                            <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className={`glass-strong p-8 rounded-[2.5rem] border transition-all group flex flex-col ${p.color}`}>
                                <div className="text-4xl mb-4">{p.icon}</div>
                                <h3 className="text-xl font-black text-white mb-3 group-hover:text-wl-accent transition-colors">{p.name} Development</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {p.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-[11px] font-semibold text-white/60">
                                            <div className="w-1.5 h-1.5 rounded-full bg-wl-accent shrink-0" />{f}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={openDemoModal}
                                    className="w-full py-3 rounded-2xl border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-wl-accent hover:text-black hover:border-wl-accent transition-all">
                                    Get {p.name} Quote
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-strong border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px] pointer-events-none" />
                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="heading-lg mb-8">Why Businesses Choose <span className="text-wl-accent">Wloper</span></h2>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    We don't just write code. We build digital assets that generate revenue. Every website is engineered for speed, SEO, and conversions.
                                </p>
                                <button onClick={openDemoModal} className="btn-primary mt-8 inline-flex items-center gap-3">
                                    Start Your Project <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-wl-accent shrink-0 mt-0.5" />
                                        <span className="text-sm font-semibold text-white/80">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="glass-strong border border-wl-accent/20 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px]" />
                        <h2 className="heading-lg mb-6">Ready to Build Your <span className="text-wl-accent">Website?</span></h2>
                        <p className="text-white/50 max-w-xl mx-auto mb-10">Get a free consultation and detailed quote within 24 hours. No commitment required.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={openDemoModal} className="btn-primary">Get Free Consultation</button>
                            <Link href="/contact" className="border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm hover:border-wl-accent/40 transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
