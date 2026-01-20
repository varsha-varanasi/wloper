'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "OpenAI", "Nvidia", "Microsoft", "Google Cloud", "AWS", "Anthropic", "Meta", "Tesla",
    "OpenAI", "Nvidia", "Microsoft", "Google Cloud", "AWS", "Anthropic", "Meta", "Tesla"
];

export default function LogoMarquee() {
    return (
        <section className="py-20 bg-wl-dark border-y border-white/5 overflow-hidden">


            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className="flex whitespace-nowrap gap-16 items-center"
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-4 group cursor-default">
                            <span className="text-3xl md:text-5xl font-black text-white/20 group-hover:text-wl-accent transition-colors duration-500 uppercase">
                                {logo}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-wl-accent/20 group-hover:bg-wl-accent transition-colors"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
