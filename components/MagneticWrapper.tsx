'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface MagneticWrapperProps {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

export default function MagneticWrapper({
    children,
    strength = 0.5,
    className = "",
}: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(true); // default true — skip on SSR
    // Cache rect on mouseenter to avoid getBoundingClientRect in every mousemove
    const cachedRect = useRef<DOMRect | null>(null);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (ref.current) cachedRect.current = ref.current.getBoundingClientRect();
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile || !cachedRect.current) return;
        const { clientX, clientY } = e;
        if (rafId.current !== null) return; // already scheduled
        rafId.current = requestAnimationFrame(() => {
            rafId.current = null;
            if (!cachedRect.current) return;
            const { left, top, width, height } = cachedRect.current;
            setPosition({
                x: (clientX - (left + width / 2)) * strength,
                y: (clientY - (top + height / 2)) * strength,
            });
        });
    }, [isMobile, strength]);

    const handleMouseLeave = useCallback(() => {
        if (rafId.current !== null) { cancelAnimationFrame(rafId.current); rafId.current = null; }
        cachedRect.current = null;
        setPosition({ x: 0, y: 0 });
    }, []);

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
