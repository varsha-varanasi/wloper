'use client';

import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';
import { Check } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';

export default function PricingPage() {
    const { openDemoModal } = useDemo();
    const websitePackages = [
        {
            name: 'Starter',
            price: '$2,999',
            description: 'Perfect for small businesses and startups',
            features: [
                'Up to 5 pages',
                'Responsive design',
                'Basic SEO setup',
                'Contact form',
                '1 month support',
                'Mobile optimized',
            ],
        },
        {
            name: 'Professional',
            price: '$5,999',
            description: 'Ideal for growing businesses',
            features: [
                'Up to 15 pages',
                'Custom design',
                'Advanced SEO',
                'CMS integration',
                '3 months support',
                'Performance optimization',
                'Analytics setup',
                'Blog functionality',
            ],
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large-scale applications',
            features: [
                'Unlimited pages',
                'Custom functionality',
                'Advanced integrations',
                'Dedicated support',
                '12 months support',
                'Priority updates',
                'Custom features',
                'Training included',
            ],
        },
    ];

    const marketingPlans = [
        {
            name: 'Basic',
            price: '$999/mo',
            features: [
                'Social media management (2 platforms)',
                'Content creation (8 posts/month)',
                'Monthly analytics report',
                'Email support',
            ],
        },
        {
            name: 'Growth',
            price: '$2,499/mo',
            features: [
                'Social media management (4 platforms)',
                'Content creation (20 posts/month)',
                'SEO optimization',
                'Email marketing campaigns',
                'Weekly analytics reports',
                'Dedicated account manager',
            ],
            popular: true,
        },
        {
            name: 'Premium',
            price: '$4,999/mo',
            features: [
                'Full-service digital marketing',
                'Unlimited content creation',
                'PPC campaign management',
                'Advanced analytics & reporting',
                'Brand strategy consulting',
                'Priority support',
            ],
        },
    ];

    return (
        <div className="bg-wl-dark text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-1/4 w-[40%] h-[40%] bg-wl-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="tag-label"
                        >
                            <Check className="w-4 h-4 text-wl-accent" />
                            Pricing Protocols
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            Simple, Transparent <span className="text-wl-accent">Investment.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            Choose the perfect plan for your business needs. No hidden fees. Optimized for high-growth enterprises and specialized labs.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Website Packages */}
            <section className="section-padding bg-wl-dark relative">
                <div className="container-custom">
                    <h2 className="heading-md text-center mb-16">Website Development Packages</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {websitePackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative rounded-[2rem] p-8 border hover:-translate-y-2 transition-all duration-500 overflow-hidden ${pkg.popular
                                    ? 'glass-strong border-wl-accent/30'
                                    : 'glass border-white/5'
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 bg-wl-accent text-black px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                <div className={`text-4xl font-black mb-4 ${pkg.popular ? 'text-wl-accent' : 'text-white'}`}>{pkg.price}</div>
                                <p className="text-wl-muted-dark mb-8 text-sm font-medium">{pkg.description}</p>
                                <ul className="space-y-4 mb-10">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-wl-accent shrink-0" />
                                            <span className="text-wl-muted-dark font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <CTAButton onClick={openDemoModal} variant={pkg.popular ? 'primary' : 'secondary'} className="w-full">
                                    Get Started
                                </CTAButton>

                                {pkg.popular && (
                                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-wl-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marketing Plans */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <h2 className="heading-md text-center mb-16">Digital Marketing Plans</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {marketingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative rounded-[2rem] p-8 border hover:-translate-y-2 transition-all duration-500 ${plan.popular
                                    ? 'glass-strong border-wl-accent/30'
                                    : 'glass border-white/5'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-wl-accent text-black px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className={`text-4xl font-black mb-8 ${plan.popular ? 'text-wl-accent' : 'text-white'}`}>{plan.price}</div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-wl-accent shrink-0" />
                                            <span className="text-wl-muted-dark font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <CTAButton onClick={openDemoModal} variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                                    Get Started
                                </CTAButton>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - NEW */}
            <section className="section-padding bg-wl-dark relative">
                <div className="absolute top-1/2 right-0 w-[30%] h-[30%] bg-wl-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-md text-center mb-16">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: 'Do you offer custom pricing for enterprise clients?',
                                    a: 'Yes! We offer flexible pricing for enterprise clients with custom requirements. Contact us for a tailored quote.'
                                },
                                {
                                    q: 'What payment methods do you accept?',
                                    a: 'We accept all major credit cards, bank transfers, and can set up invoicing for ongoing monthly services.'
                                },
                                {
                                    q: 'Can I upgrade or downgrade my plan?',
                                    a: 'Absolutely! You can upgrade or downgrade your service plan at any time. Changes take effect immediately.'
                                },
                                {
                                    q: 'Is there a money-back guarantee?',
                                    a: 'Yes, we offer a 30-day satisfaction guarantee on all our website development packages. Marketing services have a 14-day trial period.'
                                },
                                {
                                    q: 'What\'s included in support and maintenance?',
                                    a: 'Support includes bug fixes, security updates, performance monitoring, and technical assistance. The duration varies by package.'
                                }
                            ].map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass p-8 rounded-[2rem] border border-white/5 hover:border-wl-accent/20 transition-all"
                                >
                                    <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                                    <p className="text-wl-muted-dark leading-relaxed font-medium">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Interview Platform Pricing */}
            <section className="section-padding bg-wl-dark relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-strong border border-wl-accent/20 rounded-[3rem] p-12 lg:p-16 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-wl-accent/5 pointer-events-none"></div>
                            <div className="relative z-10">
                                <h2 className="heading-md mb-6">AI Interview Platform</h2>
                                <div className="text-5xl lg:text-6xl font-black text-wl-accent mb-6">Custom Pricing</div>
                                <p className="text-xl text-wl-muted-dark mb-10 max-w-2xl mx-auto font-medium">
                                    Our AI Interview Platform pricing is tailored to your hiring volume and specific needs.
                                    Contact us for a personalized quote and live demo.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <CTAButton onClick={openDemoModal} variant="primary">
                                        Request Demo & Pricing
                                    </CTAButton>
                                    <CTAButton href="/products" variant="secondary">
                                        Learn More
                                    </CTAButton>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
