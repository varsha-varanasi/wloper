'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Search, Clock, Calendar, ArrowRight, Rss,
    ChevronLeft, ChevronRight, Hash, Filter, Sparkles
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
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

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className="bg-wl-dark text-white overflow-hidden pb-32">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                        alt="Blog Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/95 via-wl-dark/80 to-wl-dark"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="tag-label"
                        >
                            <Rss className="w-4 h-4 text-wl-accent" />
                            Wloper Intelligence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-xl mb-10 max-w-6xl text-balance"
                        >
                            The <span className="text-wl-accent">Knowledge</span> Hub
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="subtitle-lg mx-auto mb-14 text-white/60"
                        >
                            100+ expert articles covering AI, Blockchain, Website Development, and Digital Marketing.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Filter & Search Toolbar */}
            <section className="sticky top-20 z-40 bg-wl-dark/80 backdrop-blur-xl border-y border-white/5 py-6">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-wl-muted-dark" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-4 text-white focus:border-wl-accent/50 focus:bg-white/10 focus:outline-none transition-all font-medium"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${selectedCategory === cat
                                        ? 'bg-wl-accent text-black border-wl-accent shadow-[0_0_20px_rgba(202,246,72,0.3)]'
                                        : 'bg-white/5 border-white/5 text-wl-muted-dark hover:border-white/20'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post (Visible on Page 1) */}
            {currentPage === 1 && searchQuery === '' && selectedCategory === 'All' && (
                <section className="section-padding pb-10">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-strong rounded-[4rem] border border-wl-accent/20 overflow-hidden relative group cursor-pointer"
                        >
                            <div className="grid lg:grid-cols-2">
                                <div className="p-12 md:p-20 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-wl-accent flex items-center justify-center">
                                            <Sparkles className="w-6 h-6 text-black" />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest text-wl-accent">Featured Story</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight group-hover:text-wl-accent transition-colors">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-xl text-wl-muted-dark mb-10 font-medium leading-relaxed">
                                        {blogPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <div className="flex items-center gap-2 text-wl-muted-dark text-sm">
                                            <Calendar className="w-4 h-4" />
                                            {blogPosts[0].date}
                                        </div>
                                        <Link href={`/blog/${blogPosts[0].slug}`} className="btn-primary">
                                            Read Article <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="h-full bg-white/5 min-h-[400px] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-wl-dark via-transparent to-transparent z-10"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-1000">
                                        <Rss className="w-64 h-64 text-wl-accent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Post Grid */}
            <section className="section-padding pt-10">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        <AnimatePresence mode='popLayout'>
                            {currentPosts.map((post, idx) => (
                                <Link href={`/blog/${post.slug}`} key={post.id} className="block h-full group">
                                    <motion.article
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="glass rounded-[2.5rem] p-8 border border-white/5 hover:border-wl-accent/20 transition-all flex flex-col h-full cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-wl-accent group-hover:text-black transition-all">
                                                <post.icon className="w-7 h-7" />
                                            </div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-wl-muted-dark">
                                                {post.category}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-wl-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="subtitle-md mb-8 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-xs font-bold text-wl-muted-dark">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1 text-wl-accent font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                                View Post <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-32">
                            <Hash className="w-16 h-16 text-wl-accent/20 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                            <p className="text-wl-muted-dark">Try a different search term or category.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-12">
                            <button
                                onClick={() => paginate(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className="flex gap-2">
                                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                                    const pageNum = i + 1;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => paginate(pageNum)}
                                            className={`w-12 h-12 rounded-xl border font-bold transition-all ${currentPage === pageNum
                                                ? 'bg-wl-accent border-wl-accent text-black'
                                                : 'bg-white/5 border-white/5 text-wl-muted-dark hover:border-white/20'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                                {totalPages > 5 && <span className="flex items-center px-2 opacity-30">...</span>}
                            </div>
                            <button
                                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-wl-accent hover:text-black transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
