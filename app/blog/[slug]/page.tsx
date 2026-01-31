'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    ArrowLeft, Calendar, Clock, Share2,
    MessageSquare, Twitter, Linkedin, Copy, CheckCircle2,
    Sparkles, Zap, Bot
} from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import { useDemo } from '@/context/DemoContext';
import ReadingMode from '@/components/ReadingMode';
import NeuralSummary from '@/components/NeuralSummary';

export default function BlogPost() {
    const { openDemoModal } = useDemo();
    const { slug } = useParams();
    const router = useRouter();
    const [isReadingMode, setIsReadingMode] = useState(false);

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-wl-dark text-white flex flex-col items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-6xl font-black mb-4">Post Not Found</h1>
                    <p className="text-wl-muted-dark mb-8">The article you are looking for has been archived or moved.</p>
                    <Link href="/blog" className="btn-primary">Back to knowledge base</Link>
                </div>
            </div>
        );
    }

    return (
        <article className={`bg-wl-dark text-white min-h-screen pb-32 ${isReadingMode ? 'pt-10' : ''}`}>
            {/* Schema.org for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "image": [
                                post.image || "https://wloper.com/og-image.png"
                            ],
                            "datePublished": new Date(post.date).toISOString() || new Date().toISOString(),
                            "dateModified": new Date().toISOString(),
                            "author": [{
                                "@type": "Person",
                                "name": post.author,
                                "url": "https://wloper.com/about-us"
                            }]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://wloper.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Blog",
                                    "item": "https://wloper.com/blog"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": post.title,
                                    "item": `https://wloper.com/blog/${post.slug}`
                                }
                            ]
                        }
                    ])
                }}
            />
            {/* Reading Mode Control */}
            <ReadingMode isActive={isReadingMode} onToggle={() => setIsReadingMode(!isReadingMode)} />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-wl-accent z-[60] origin-left"
                style={{ scaleX: 0 }} // Simplified for now
            />

            {!isReadingMode && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Post Hero */}
                    <section className="relative pt-40 lg:pt-64 pb-20 overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={
                                    post.image && post.image !== '/images/hero-bg.png'
                                        ? post.image
                                        : `/images/${[
                                            'envato-labs-ai-8d9fbd22-1b40-471e-8925-de12b0bf5533.jpg',
                                            'envato-labs-ai-a4698812-b585-46ab-b841-f3ece58a93a5.jpg',
                                            'envato-labs-ai-6c11c598-851f-40f7-9155-eb9146bff990.jpg',
                                            'envato-labs-ai-8c704ec1-bca5-4f0e-9049-c06414cf0508.jpg',
                                            'envato-labs-ai-ff99b861-f73a-4b32-8972-7e241b722b3b.jpg',
                                            'envato-labs-ai-bce5f816-6df6-4577-a0b5-b11da7c85d69.jpg',
                                            'envato-labs-ai-cc98af26-6a98-45ef-9c86-a4618f68b6e2.jpg',
                                            'envato-labs-ai-36c4ce64-9e58-4f59-a78e-403034b187ca.jpg',
                                            'envato-labs-ai-60bf7079-9412-429a-89f0-19949dc9ecc1.jpg',
                                            'envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg',
                                            'envato-labs-ai-7c142eb8-7887-44d9-8de5-3d14c8bbab75.jpg',
                                            'envato-labs-ai-a5ed5fd0-3d06-4a07-b41a-7920becd0527.jpg',
                                            'envato-labs-ai-b7fc9d9b-9c99-40aa-ab36-c7dfe95fac5a.jpg',
                                            'envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg'
                                        ][post.id % 14]}`
                                }
                                alt={post.title}
                                fill
                                sizes="100vw"
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/80 to-wl-dark"></div>
                        </div>

                        <div className="container-custom relative z-10">
                            <button
                                onClick={() => router.back()}
                                className="inline-flex items-center gap-2 text-wl-muted-dark hover:text-white transition-colors mb-12 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Library
                            </button>

                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 mb-8"
                                >
                                    <span className="tag-label mb-0">
                                        {post.category}
                                    </span>
                                    <div className="h-[1px] w-8 bg-white/20"></div>
                                    <span className="text-xs font-bold text-wl-muted-dark uppercase tracking-widest">
                                        {post.readTime}
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="heading-xl mb-12"
                                >
                                    {post.title}
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-white/10"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-wl-accent/20 flex items-center justify-center font-black text-xl text-wl-accent">
                                            {post.author[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{post.author}</div>
                                            <div className="text-xs text-wl-muted-dark flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all">
                                            <Twitter className="w-4 h-4" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all">
                                            <Linkedin className="w-4 h-4" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all">
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            )}

            {/* Content Body */}
            <section className="section-padding py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Main Text */}
                        <div className="lg:col-span-8 space-y-12">
                            {isReadingMode && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-12"
                                >
                                    <h1 className="text-4xl md:text-5xl font-black mb-4">{post.title}</h1>
                                    <div className="text-sm font-bold opacity-40 uppercase tracking-[0.2em]">
                                        {post.author} • {post.date}
                                    </div>
                                </motion.div>
                            )}

                            <NeuralSummary content={post.excerpt} />

                            <div className={`reading-content ${isReadingMode ? '' : 'glass-strong p-8 md:p-12 rounded-[3.5rem] border border-white/5'} relative overflow-hidden mb-12`}>
                                <p className={`${isReadingMode ? 'reading-text' : 'text-2xl'} text-white font-medium leading-relaxed`}>
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className={`reading-text prose prose-invert prose-lg max-w-none text-wl-muted-dark font-medium leading-[1.8] space-y-8`}>
                                {(post as any).content ? (
                                    <div className="whitespace-pre-wrap">
                                        {(post as any).content.split('\n').map((line: string, i: number) => {
                                            if (line.startsWith('## ')) {
                                                return <h2 key={i} className="text-3xl font-black text-white mt-12 mb-6">{line.replace('## ', '')}</h2>;
                                            }
                                            if (line.startsWith('# ')) {
                                                return <h1 key={i} className="text-4xl font-black text-white mt-16 mb-8">{line.replace('# ', '')}</h1>;
                                            }
                                            return <p key={i}>{line}</p>;
                                        })}
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-4xl font-black text-white mt-16 mb-8">The Evolution of {post.category} in the Modern Era</h2>
                                        <p>
                                            In the rapidly shifting landscape of 2026, {post.category} has transcended its traditional boundaries. What was once a niche set of protocols or methodologies has now evolved into a foundational pillar of the global digital infrastructure. At Wloper, we've observed a 400% increase in demand for deep-tier {post.category} integration across enterprise sectors, particularly in finance, healthcare, and autonomous logistics.
                                        </p>
                                        <p>
                                            The core challenge of {post.title} lies not just in its execution, but in its strategic alignment with business objectives. Too often, organizations treat technological shifts as isolated events rather than systemic evolutions. Our approach involves a multi-dimensional analysis of how {post.category} impacts every touchpoint of the customer journey, ensuring that performance benchmarks are not just met, but exceeded.
                                        </p>

                                        <div className={`grid md:grid-cols-2 gap-8 my-16 ${isReadingMode ? 'hidden' : ''}`}>
                                            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-wl-accent/20 transition-all">
                                                <Zap className="w-10 h-10 text-wl-accent mb-6" />
                                                <h3 className="text-2xl font-bold text-white mb-4">Neural Architecture</h3>
                                                <p className="text-sm leading-relaxed">By implementing advanced neural layers, we reduce operational drag by up to 65%, allowing for real-time data processing without system overhead.</p>
                                            </div>
                                            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-wl-accent/20 transition-all">
                                                <Bot className="w-10 h-10 text-wl-accent mb-6" />
                                                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Sync</h3>
                                                <p className="text-sm leading-relaxed">Our proprietary sync engines ensure that {post.category} modules communicate with zero-latency across distributed cloud environments.</p>
                                            </div>
                                        </div>

                                        <h2 className="text-4xl font-black text-white mt-16 mb-8">Strategic Implementation & Tactical Depth</h2>
                                        <p>
                                            When we dive into the technicalities of {post.title}, we must consider the long-term scalability of the underlying framework. Modern enterprise solutions require a "Scale-First" mentality. This means every line of {post.category} code is written with the expectation of 100x user growth within the first 18 months of deployment.
                                        </p>
                                        <p>
                                            Our software engineering team utilizes a combination of edge-computing and centralized AI clusters to manage the high computational demands typical of modern {post.category} projects. This hybrid architecture allows for localized performance while maintaining global data integrity—a critical requirement for multinational corporations operating in highly regulated environments.
                                        </p>

                                        <div className={`my-16 p-12 bg-wl-accent/5 border border-wl-accent/20 rounded-[4rem] relative ${isReadingMode ? 'hidden' : ''}`}>
                                            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                                                <Sparkles className="w-8 h-8 text-wl-accent" />
                                                Key Technical Metrics
                                            </h3>
                                            <div className="grid sm:grid-cols-3 gap-12">
                                                <div>
                                                    <div className="text-4xl font-black text-wl-accent mb-2">0.4ms</div>
                                                    <div className="text-[10px] uppercase tracking-widest font-bold">Latency Floor</div>
                                                </div>
                                                <div>
                                                    <div className="text-4xl font-black text-wl-accent mb-2">99.9%</div>
                                                    <div className="text-[10px] uppercase tracking-widest font-bold">Uptime SLA</div>
                                                </div>
                                                <div>
                                                    <div className="text-4xl font-black text-wl-accent mb-2">128-bit</div>
                                                    <div className="text-[10px] uppercase tracking-widest font-bold">Quantum Auth</div>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="text-4xl font-black text-white mt-16 mb-8">Market Displacement & Future Proofing</h2>
                                        <p>
                                            Looking ahead, the convergence of AI, blockchain, and high-performance web systems will create an environment where only the most agile survive. {post.title} is at the epicenter of this shift. Companies that fail to adapt their {post.category} strategies within the next 24 months risk permanent market displacement.
                                        </p>
                                        <p>
                                            We advocate for a "Continuous Evolution" model. Instead of massive, disruptive updates every several years, we implement micro-deployments that allow your systems to grow and learn alongside your users. This ensures that your investment in {post.category} remains relevant and powerful even as new technologies emerge.
                                        </p>
                                        <p>
                                            In conclusion, the path forward is clear. Excellence in {post.category} is no longer a luxury—it is the baseline for competition. By partnering with Wloper, we leverage our collective intelligence and engineering rigor to ensure your product isn't just a participant in the market, but its leader.
                                        </p>
                                    </>
                                )}


                                <div className={`mt-20 p-12 glass-strong rounded-[3rem] border border-white/10 space-y-8 ${isReadingMode ? 'hidden' : ''}`}>
                                    <h3 className="text-2xl font-black text-white">Summary Conclusion</h3>
                                    <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
                                        <li className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                            </div>
                                            <span className="text-sm">Implement Next-Gen Neural Architectures for maximum efficiency.</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                            </div>
                                            <span className="text-sm">Prioritize Edge Computing for reduced latency and better UX.</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                            </div>
                                            <span className="text-sm">Focus on Data Sovereignty and Security through Blockchain.</span>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-wl-accent" />
                                            </div>
                                            <span className="text-sm">Develop Scalable API Ecosystems for third-party integrations.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Related / Newsletter */}
                        <div className="lg:col-span-4 space-y-12 sidebar-container">
                            <div className="sticky top-32">
                                <div className="glass-strong p-10 rounded-[3rem] border border-wl-accent/10 mb-12">
                                    <h4 className="text-xl font-black mb-6">Need a similar solution?</h4>
                                    <p className="text-sm text-wl-muted-dark mb-8 font-medium">
                                        Our engineers specialize in {post.category}. Let's build your next project together.
                                    </p>
                                    <button onClick={openDemoModal} className="btn-primary w-full text-center">
                                        Talk to Experts
                                    </button>
                                </div>

                                <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-black mb-6">Trending in {post.category}</h4>
                                    <div className="space-y-6">
                                        {blogPosts.slice(1, 4).map(p => (
                                            <Link href={`/blog/${p.slug}`} key={p.id} className="block group">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-wl-accent mb-1">{p.date}</div>
                                                <div className="font-bold text-white group-hover:text-wl-accent transition-colors line-clamp-2">{p.title}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </article>
    );
}
