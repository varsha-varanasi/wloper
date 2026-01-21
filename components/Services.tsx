'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Code2, TrendingUp, Sparkles, ArrowUpRight, ArrowRight, Blocks, Smartphone as MobileIcon } from 'lucide-react';
import Link from 'next/link';

import SpotlightCard from './SpotlightCard';

export default function Services() {
    const services = [
        {
            title: 'Blockchain & Web3',
            desc: 'Engineering trustless architectures, smart contracts, and decentralized data ecosystems.',
            icon: Blocks,
            href: '/services/blockchain-solutions'
        },
        {
            title: 'Mobile Architecture',
            desc: 'High-performance iOS and Android applications built for speed, immersion and global scale.',
            icon: MobileIcon,
            href: '/services/mobile-app-development'
        },
        {
            title: 'AI Strategy',
            desc: 'Identify high-impact AI opportunities and define clear tech roadmaps for your business.',
            icon: Brain,
            href: '/services/ai-strategy'
        },
        {
            title: 'AI Integration',
            desc: 'Seamlessly integrate custom AI models into your existing workflows and legacy systems.',
            icon: Cpu,
            href: '/services/ai-integration'
        },
        {
            title: 'Custom Engineering',
            desc: 'End-to-end scalable web and app development focused on performance and security.',
            icon: Code2,
            href: '/services/software-engineering'
        },
        {
            title: 'Digital Growth',
            desc: 'Boost your visibility and organic traffic through data-driven digital growth strategies.',
            icon: TrendingUp,
            href: '/services/digital-growth'
        }
    ];

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden" id="services">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="tag-label"
                        >
                            <Sparkles className="w-4 h-4 text-wl-accent" />
                            Our Capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-lg"
                        >
                            Elevating Businesses Through <span className="heading-gradient">Strategic AI</span> & Growth
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="subtitle-md max-w-sm mb-2 text-left"
                    >
                        Beyond building products, we provide the engineering excellence and growth strategy needed to thrive in an AI-first economy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group/card"
                        >
                            <Link href={service.href}>
                                <SpotlightCard className="p-10 md:p-12 h-full relative overflow-hidden">
                                    {/* Idea D: Code Reflection */}
                                    <div className="absolute top-4 right-4 text-[8px] font-mono text-wl-accent/0 group-hover/card:text-wl-accent/20 transition-all duration-700 pointer-events-none select-none">
                                        <pre>
                                            {`function refineAI(data) {
  return data.map(n => ({
    ...n,
    neural: true,
    scale: 'infinite'
  }));
}`}
                                        </pre>
                                    </div>

                                    <div className="neural-point w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover/card:bg-wl-accent group-hover/card:text-black transition-all duration-500 text-wl-accent relative">
                                        <service.icon className="w-8 h-8" />

                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-wl-accent/20 animate-ping opacity-0 group-hover/card:opacity-100"></div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover/card:text-wl-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-wl-muted-dark leading-relaxed mb-8">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-wl-accent font-bold text-sm">
                                        Explore <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-2" />
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
