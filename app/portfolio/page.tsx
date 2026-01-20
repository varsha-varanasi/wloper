'use client';

import { motion } from 'framer-motion';
import { Banknote, Activity, GraduationCap, TrendingUp, ShoppingBag, Bot, Building2, Layers, ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
    const webProjects = [
        {
            title: 'FinTech Dashboard',
            category: 'Web Development',
            description: 'Real-time financial analytics platform with advanced data visualization and reporting.',
            tech: ['Next.js', 'TypeScript', 'Chart.js'],
            icon: Banknote,
        },
        {
            title: 'Healthcare Portal',
            category: 'Web Development',
            description: 'HIPAA-compliant patient management system with integrated telemedicine features.',
            tech: ['React', 'Node.js', 'PostgreSQL'],
            icon: Activity,
        },
        {
            title: 'E-Learning Platform',
            category: 'Web Development',
            description: 'Interactive online learning platform featuring video streaming and real-time assessments.',
            tech: ['Next.js', 'MongoDB', 'AWS'],
            icon: GraduationCap,
        },
    ];

    const marketingCases = [
        {
            title: 'SaaS Growth Campaign',
            category: 'Digital Marketing',
            description: 'Increased organic traffic by 250% and conversions by 180% in 6 months.',
            results: ['250% Traffic Growth', '180% Conversion Increase', '3.5x ROI'],
            icon: TrendingUp,
        },
        {
            title: 'E-commerce Rebranding',
            category: 'Digital Marketing',
            description: 'Complete brand overhaul resulting in 300% increase in online sales.',
            results: ['300% Sales Increase', '150% Social Engagement', '4.2x ROAS'],
            icon: ShoppingBag,
        },
    ];

    const aiUseCases = [
        {
            title: 'Tech Startup Hiring',
            category: 'AI Interview Platform',
            description: 'Reduced hiring time by 70% for a fast-growing tech startup.',
            results: ['70% Faster Hiring', '500+ Interviews Conducted', '95% Satisfaction Rate'],
            icon: Bot,
        },
        {
            title: 'Enterprise Recruitment',
            category: 'AI Interview Platform',
            description: 'Streamlined mass hiring for enterprise client with 1000+ candidates.',
            results: ['1000+ Screened', '60% Cost Reduction', 'Bias-Free Process'],
            icon: Building2,
        },
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="tag-label"
                        >
                            <Layers className="w-4 h-4 text-wl-accent" />
                            Case Studies
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Our <span className="text-wl-accent">Portfolio.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Explore our successful projects and case studies across web development,
                            digital marketing, and AI solutions. Standardized for excellence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Web Projects */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <h2 className="heading-md mb-12 flex items-center gap-3">
                        Web Development
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {webProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-wl-accent/30 transition-all group"
                            >
                                <div className="h-48 bg-white/5 flex items-center justify-center group-hover:bg-wl-accent/10 transition-colors relative overflow-hidden">
                                    {/* Placeholder for project images - add images at /public/images/portfolio/ */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                                    <project.icon className="w-16 h-16 text-wl-accent/50 group-hover:text-wl-accent group-hover:scale-110 transition-all duration-500" />
                                </div>
                                <div className="p-8">
                                    <div className="text-wl-accent text-xs font-bold uppercase tracking-wider mb-3">
                                        {project.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-wl-muted-dark mb-6 leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marketing Case Studies */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <h2 className="heading-md mb-12">Marketing Case Studies</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {marketingCases.map((caseStudy, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong border border-white/10 rounded-[2.5rem] p-10 hover:border-wl-accent/20 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-wl-accent group-hover:bg-wl-accent group-hover:text-black transition-all">
                                        <caseStudy.icon className="w-8 h-8" />
                                    </div>
                                    <div className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-wl-muted-dark">
                                        {caseStudy.category}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {caseStudy.title}
                                </h3>
                                <p className="text-wl-muted-dark mb-8 leading-relaxed text-lg font-medium">
                                    {caseStudy.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {caseStudy.results.map((result, idx) => (
                                        <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <span className="text-wl-accent font-bold text-sm block">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Product Use Cases */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom relative z-10">
                    <h2 className="heading-md mb-12">AI Product Use Cases</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {aiUseCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 bg-wl-accent/10 rounded-2xl flex items-center justify-center text-wl-accent">
                                        <useCase.icon className="w-8 h-8" />
                                    </div>
                                    <div className="px-4 py-1 rounded-full border border-wl-accent/20 text-xs font-bold uppercase tracking-wider text-wl-accent">
                                        {useCase.category}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {useCase.title}
                                </h3>
                                <p className="text-wl-muted-dark mb-8 leading-relaxed font-medium">
                                    {useCase.description}
                                </p>
                                <div className="space-y-3">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Key Impact:</h4>
                                    {useCase.results.map((result, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <ArrowUpRight className="w-4 h-4 text-wl-accent" />
                                            <span className="text-wl-muted-dark font-medium">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
