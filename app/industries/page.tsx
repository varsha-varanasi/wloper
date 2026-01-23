'use client';

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { Stethoscope, Landmark, GraduationCap, ShoppingBag, Building2, Car, Utensils, Cpu, ArrowRight, Briefcase } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';

export default function IndustriesPage() {
    const { openDemoModal } = useDemo();
    const industries = [
        {
            icon: Stethoscope,
            title: 'Healthcare',
            description: 'HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.',
            useCases: [
                'Patient management systems',
                'Telemedicine platforms',
                'Healthcare AI chatbots',
                'Medical staff recruitment with AI',
            ],
        },
        {
            icon: Landmark,
            title: 'Finance & Banking',
            description: 'Secure, scalable solutions for financial institutions and fintech startups.',
            useCases: [
                'Online banking platforms',
                'Payment processing systems',
                'Financial analytics dashboards',
                'Automated candidate screening',
            ],
        },
        {
            icon: GraduationCap,
            title: 'Education & EdTech',
            description: 'Innovative learning platforms and educational technology solutions.',
            useCases: [
                'Learning management systems',
                'Online course platforms',
                'Student assessment tools',
                'AI-powered student evaluation',
            ],
        },
        {
            icon: ShoppingBag,
            title: 'E-commerce & Retail',
            description: 'Complete online shopping experiences that drive sales and customer loyalty.',
            useCases: [
                'Custom e-commerce platforms',
                'Inventory management systems',
                'Customer loyalty programs',
                'Retail staff hiring automation',
            ],
        },
        {
            icon: Building2,
            title: 'Real Estate',
            description: 'Property management and real estate marketplace solutions.',
            useCases: [
                'Property listing platforms',
                'Virtual tour integrations',
                'CRM for real estate agents',
                'Real estate agent recruitment',
            ],
        },
        {
            icon: Car,
            title: 'Automotive',
            description: 'Digital solutions for automotive dealers and service providers.',
            useCases: [
                'Vehicle inventory systems',
                'Service booking platforms',
                'Automotive marketplaces',
                'Technician skill assessment',
            ],
        },
        {
            icon: Utensils,
            title: 'Food & Hospitality',
            description: 'Restaurant management and hospitality booking systems.',
            useCases: [
                'Online ordering platforms',
                'Reservation systems',
                'Menu management tools',
                'Staff hiring for restaurants',
            ],
        },
        {
            icon: Cpu,
            title: 'Technology & SaaS',
            description: 'Software solutions for tech companies and SaaS providers.',
            useCases: [
                'SaaS product development',
                'API integrations',
                'Developer tools',
                'Technical talent acquisition',
            ],
        },
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[60%] h-[60%] bg-wl-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <NextImage
                        src="/images/envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg"
                        alt="Industries Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-wl-dark/60"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="tag-label"
                        >
                            <Briefcase className="w-4 h-4 text-wl-accent" />
                            Our Expertise
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Industries We <span className="text-wl-accent">Serve.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Delivering specialized solutions across diverse industries with deep domain expertise and technical supremacy.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-wl-accent/30 transition-all group"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-wl-accent group-hover:bg-wl-accent group-hover:text-black transition-all shrink-0">
                                        <industry.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-wl-accent transition-colors">
                                            {industry.title}
                                        </h3>
                                        <p className="text-wl-muted-dark mb-6 leading-relaxed font-medium">
                                            {industry.description}
                                        </p>
                                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                                            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 opacity-50">Applications & Use Cases</h4>
                                            <ul className="space-y-3">
                                                {industry.useCases.map((useCase, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <ArrowRight className="w-4 h-4 text-wl-accent mt-1 shrink-0" />
                                                        <span className="text-wl-muted-dark text-sm font-medium">{useCase}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong border border-wl-accent/20 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-wl-accent/5 pointer-events-none"></div>

                        <h2 className="heading-md mb-6">
                            Don't See Your Industry?
                        </h2>
                        <p className="text-xl text-wl-muted-dark mb-10 max-w-2xl mx-auto font-medium">
                            We work with businesses across all sectors. Contact us to discuss your specific needs.
                        </p>
                        <button
                            onClick={openDemoModal}
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full font-bold bg-wl-accent text-black hover:scale-105 transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
