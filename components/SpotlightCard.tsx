'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const opacityValue = useMotionValue(0);
    const rectRef = useRef<DOMRect | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile || !rectRef.current) return;

        mouseX.set(e.clientX - rectRef.current.left);
        mouseY.set(e.clientY - rectRef.current.top);
    };

    const handleMouseEnter = () => {
        if (isMobile) return;
        opacityValue.set(1);
        if (divRef.current) {
            rectRef.current = divRef.current.getBoundingClientRect();
        }
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        opacityValue.set(0);
        rectRef.current = null;
    };

    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(202, 246, 72, 0.1), transparent 40%)`;

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-wl-dark-card p-8 group transition-all duration-300 hover:border-wl-accent/30 ${className}`}
        >
            {!isMobile && (
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity: opacityValue,
                        background: background,
                    }}
                />
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
