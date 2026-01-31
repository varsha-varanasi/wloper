'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Search, Calendar, ArrowRight, Rss,
    ChevronRight, Sparkles, LayoutGrid, List
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const categories = ['All', 'AI', 'Blockchain', 'My Products', 'Website Development', 'Digital Marketing'];

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    const currentPosts = filteredPosts.slice(0, postsPerPage * currentPage);

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
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
                            }
                        ]
                    })
                }}
            />
            {/* Minimal Background Art */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wl-accent/5 rounded-full blur-[140px] pointer-events-none -mr-96 -mt-96" />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="tag-label"
                        >
                            <Rss className="w-4 h-4 text-wl-accent" />
                            Research & Insights
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-6 max-w-4xl"
                        >
                            The <span className="text-wl-accent">WLOPER</span> Journal
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-16 text-white/50"
                        >
                            Technical breakdowns and strategic insights from the frontier of AI and Web Engineering.
                        </motion.p>
                    </div>

                    {/* Modern Filter Toolbar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-strong p-4 rounded-[2rem] border border-white/5 flex flex-col md:flex-row gap-4 items-center"
                    >
                        <div className="relative flex-1 group w-full">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-wl-accent transition-colors" />
                            <input
                                type="text"
                                placeholder="Search the archive..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-wl-accent/30 focus:outline-none transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar max-w-full lg:max-w-xl">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`whitespace-nowrap px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${selectedCategory === cat
                                        ? 'bg-wl-accent text-black border-wl-accent'
                                        : 'bg-white/5 border-transparent text-white/40 hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-wl-accent text-black' : 'text-white/40 hover:text-white'}`}
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-wl-accent text-black' : 'text-white/40 hover:text-white'}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-40">
                <div className="container-custom">
                    <div className={viewMode === 'grid'
                        ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        : "flex flex-col gap-6"
                    }>
                        <AnimatePresence mode="popLayout">
                            {currentPosts.map((post, idx) => (
                                <motion.div
                                    layout
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                                        <div className={`glass-strong rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-wl-accent/30 h-full flex ${viewMode === 'list' ? 'flex-row items-center gap-8 p-6' : 'flex-col'}`}>

                                            {/* Media Box */}
                                            <div className={`relative overflow-hidden bg-white/5 ${viewMode === 'list' ? 'w-48 h-32 rounded-2xl flex-shrink-0' : 'aspect-[16/10]'}`}>
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
                                                    className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-wl-dark to-transparent" />

                                                {/* Float Badge */}
                                                <div className="absolute top-4 left-4 z-20">
                                                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                                                        <span className="text-[9px] font-black uppercase tracking-widest text-wl-accent">{post.category}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Box */}
                                            <div className={`flex flex-col flex-1 ${viewMode === 'list' ? '' : 'p-8'}`}>
                                                <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-white/30 mb-4 tracking-tighter">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                    <span className="w-1 h-1 rounded-full bg-white/10" />
                                                    {post.readTime}
                                                </div>

                                                <h3 className={`font-bold leading-snug group-hover:text-wl-accent transition-colors ${viewMode === 'list' ? 'text-xl mb-2' : 'text-2xl mb-4'}`}>
                                                    {post.title}
                                                </h3>

                                                {viewMode === 'grid' && (
                                                    <p className="text-sm text-white/50 line-clamp-2 mb-8 flex-1">
                                                        {post.excerpt}
                                                    </p>
                                                )}

                                                <div className="flex items-center gap-2 text-wl-accent text-[10px] font-black uppercase tracking-widest transform translate-x-0 group-hover:translate-x-2 transition-transform">
                                                    Initialize Protocol <ChevronRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Load More */}
                    {filteredPosts.length > currentPosts.length && (
                        <div className="mt-20 text-center">
                            <button
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                className="group inline-flex items-center gap-4 bg-white/5 border border-white/10 px-12 py-6 rounded-2xl hover:border-wl-accent/50 transition-all"
                            >
                                <span className="text-sm font-black uppercase tracking-widest">Access More Data</span>
                                <Sparkles className="w-5 h-5 text-wl-accent transition-transform group-hover:rotate-12" />
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-40 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                                <Search className="w-8 h-8 text-white/20" />
                            </div>
                            <h3 className="heading-sm mb-4">No matching records found</h3>
                            <p className="subtitle-md mx-auto">Neural search returned zero results for your current query.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
