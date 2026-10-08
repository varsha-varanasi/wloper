'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';
import WowStrip from '@/components/WowStrip';
import { ExternalLink } from 'lucide-react';
import AIProductShowcase from '@/components/AIProductShowcase';
import Services from '@/components/Services';
import WhoWeAre from '@/components/WhoWeAre';
import BlogPreview from '@/components/BlogPreview';
import AROISimulator from '@/components/AROISimulator';
import LeadCapture from '@/components/LeadCapture';

export default function HomeClient() {
    const { openDemoModal } = useDemo();

    return (
        <div className="bg-wl-dark text-white selection:bg-wl-accent selection:text-black">
            {/* 1 — Hero */}
            <Hero />

            {/* 2 — Stats + Marquee wow strip */}
            <WowStrip />

            {/* 3 — Who We Are (short) */}
            <WhoWeAre />

            {/* 4 — All Services */}
            <Services />

            {/* AI ROI Simulator */}
            <section className="section-padding overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="tag-label mx-auto mb-4">ROI Calculator</div>
                        <h2 className="heading-md mb-6">Calculate Your <span className="heading-gradient">AI Savings</span></h2>
                        <p className="subtitle-md mx-auto">See how much time and money you can save by using our AI solutions.</p>
                    </div>
                    <AROISimulator />
                </div>
            </section>

            {/* 3 — AI Products + SkillytTalk */}
            <AIProductShowcase />

            {/* 5 — SkillytTalk CTA Banner */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="relative rounded-[3rem] overflow-hidden border border-wl-accent/20 bg-gradient-to-br from-wl-accent/10 via-transparent to-transparent p-12 md:p-20 backdrop-blur-sm"
                        style={{ transform: 'perspective(1000px) rotateX(1deg)', transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(202,246,72,0.08),transparent_60%)] pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 rounded-full bg-wl-accent animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-wl-accent">Live Product by Wloper</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                                    Hire Smarter with<br /><span className="text-wl-accent">SkillytTalk AI</span>
                                </h2>
                                <p className="text-white/50 max-w-lg leading-relaxed">
                                    Automate your entire interview process. SkillytTalk uses AI to screen, score and shortlist candidates — saving hundreds of interview hours every month.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0">
                                <a href="https://www.skillytalk.com/" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-wl-accent text-black font-black rounded-2xl hover:shadow-[0_0_30px_rgba(202,246,72,0.4)] transition-all hover:scale-105 whitespace-nowrap">
                                    Try SkillytTalk Free <ExternalLink className="w-4 h-4" />
                                </a>
                                <Link href="/products" className="text-center text-xs font-bold uppercase tracking-widest text-white/30 hover:text-wl-accent transition-colors">
                                    View All Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 — Blog Preview */}
            <BlogPreview />

            {/* High Conversion Lead Magnet — Free Audit */}
            <LeadCapture />

            {/* Final CTA — compact bar */}
            <section className="pb-20 px-4 md:px-6">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                        <div>
                            <p className="text-lg font-bold text-white">Ready to grow your business?</p>
                            <p className="text-sm text-white/40">Website development, SEO, Ads &amp; AI — all under one roof.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <button onClick={openDemoModal} className="btn-primary !py-3 !px-6 !text-sm">
                                Get Free Demo
                            </button>
                            <Link href="/contact" prefetch={false} className="border border-white/10 px-6 py-3 rounded-full font-bold text-sm hover:border-wl-accent/40 transition-all whitespace-nowrap">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

