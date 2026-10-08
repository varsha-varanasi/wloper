'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';

export interface ServiceFeature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface ServiceStat {
    value: string;
    label: string;
}

export interface ServicePageTemplateProps {
    badge: string;
    headline: string;
    headlineAccent: string;
    subtext: string;
    ctaText: string;
    imageSrc: string;
    imageAlt: string;
    features: ServiceFeature[];
    stats: ServiceStat[];
    benefits: string[];
    techStack?: string[];
    sectionLabel?: string;
}

export default function ServicePageTemplate({
    badge, headline, headlineAccent, subtext, ctaText,
    imageSrc, imageAlt, features, stats, benefits, techStack, sectionLabel
}: ServicePageTemplateProps) {
    const { openDemoModal } = useDemo();

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-40">
            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-36 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/80 via-wl-dark/60 to-wl-dark" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="tag-label mx-auto mb-6">
                        {badge}
                    </motion.div>
                    <h1 className="heading-xl mb-8 max-w-5xl mx-auto text-balance tracking-tighter leading-tight">
                        <span className="heading-gradient">{headline}</span>
                        <br />
                        <span className="text-wl-accent">{headlineAccent}</span>
                    </h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="subtitle-lg mx-auto mb-12 text-white/60 max-w-3xl">
                        {subtext}
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={openDemoModal} className="btn-primary inline-flex items-center gap-3">
                            {ctaText} <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link href="/contact" className="btn-secondary inline-flex items-center gap-3 border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm hover:border-wl-accent/40 transition-all">
                            Talk to Expert
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* STATS */}
            <section className="section-padding pt-0 -mt-8">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((s, i) => (
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

            {/* FEATURES */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        {sectionLabel && <div className="tag-label mx-auto mb-4">{sectionLabel}</div>}
                        <h2 className="heading-lg">What We <span className="heading-gradient">Deliver</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="glass-strong p-10 rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <f.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-wl-accent transition-colors">{f.title}</h3>
                                <p className="text-white/50 leading-relaxed text-sm">{f.desc}</p>
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
                                <h2 className="heading-lg mb-8">Why Choose <span className="text-wl-accent">Wloper?</span></h2>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    We combine technical excellence with business impact. Every project is delivered on time, on budget, and built to scale.
                                </p>
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

            {/* TECH STACK */}
            {techStack && techStack.length > 0 && (
                <section className="section-padding">
                    <div className="container-custom">
                        <h2 className="heading-md text-center mb-12">Technology <span className="text-wl-accent">Stack</span></h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {techStack.map((tech, i) => (
                                <div key={i} className="px-6 py-3 glass-strong border border-white/10 rounded-2xl text-sm font-bold text-white/70 hover:border-wl-accent/40 hover:text-wl-accent transition-all">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="glass-strong border border-wl-accent/20 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wl-accent/10 blur-[100px]" />
                        <h2 className="heading-lg mb-6">Ready to Get <span className="text-wl-accent">Started?</span></h2>
                        <p className="text-white/50 max-w-xl mx-auto mb-10">Talk to our experts and get a free consultation for your project. No commitment required.</p>
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
