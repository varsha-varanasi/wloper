'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function BlogPreview() {
    // Show the first 3 posts
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="section-padding bg-wl-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-wl-accent/5 blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wl-accent/10 border border-wl-accent/20 mb-6"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wl-accent">Inside Wloper</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black leading-tight"
                        >
                            Insights from India's <br />
                            <span className="heading-gradient">Hardcore Tech Team</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/blog" className="btn-secondary group">
                            View All 155 Articles
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {featuredPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass rounded-[3rem] border border-white/5 hover:border-wl-accent/20 transition-all flex flex-col group h-full cursor-pointer relative overflow-hidden"
                        >
                            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20"></Link>

                            {/* Post Image Container */}
                            <div className="relative h-64 overflow-hidden bg-white/5">
                                <Image
                                    src={post.image || "/images/envato-labs-ai-8c704ec1-bca5-4f0e-9049-c06414cf0508.jpg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wl-dark via-transparent to-transparent opacity-60"></div>

                                {/* Icon Overlay */}
                                <div className="absolute bottom-6 left-8 w-14 h-14 rounded-2xl glass-strong flex items-center justify-center text-wl-accent border border-white/10 group-hover:bg-wl-accent group-hover:text-black transition-all">
                                    <post.icon className="w-7 h-7" />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-wl-accent shadow-[0_0_10px_rgba(202,246,72,0.3)]">
                                        {post.category}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-wl-muted-dark opacity-60">
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-wl-accent transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-wl-muted-dark font-medium leading-relaxed mb-8 flex-1 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-xs font-bold text-wl-muted-dark">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1 text-wl-accent font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Read More <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
