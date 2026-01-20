'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
    const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text' | 'magnetic'>('default');
    const [cursorText, setCursorText] = useState('');

    const [nearestPos, setNearestPos] = useState<{ x: number; y: number } | null>(null);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const neuralPointsPosRef = useRef<{ x: number, y: number }[]>([]);

    useEffect(() => {
        // Cache neural points positions to avoid layout thrashing
        const updatePoints = () => {
            const elements = Array.from(document.querySelectorAll('.neural-point'));
            neuralPointsPosRef.current = elements.map(el => {
                const rect = el.getBoundingClientRect();
                return {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };
            });
        };

        // Initial update and listeners
        updatePoints();
        const debouncedUpdate = () => requestAnimationFrame(updatePoints);

        window.addEventListener('scroll', debouncedUpdate, { passive: true });
        window.addEventListener('resize', debouncedUpdate, { passive: true });

        // Optimized mouse handler
        const moveMouse = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            mouseX.set(x);
            mouseY.set(y);

            // Calculation using cached positions
            if (neuralPointsPosRef.current.length > 0) {
                let minDistSq = 300 * 300; // Squared distance comparison is faster
                let closest: { x: number; y: number } | null = null;

                // Simple loop is faster than forEach for high frequency
                const points = neuralPointsPosRef.current;
                const len = points.length;

                for (let i = 0; i < len; i++) {
                    const point = points[i];
                    const dx = x - point.x;
                    const dy = y - point.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < minDistSq) {
                        minDistSq = distSq;
                        closest = point;
                    }
                }
                setNearestPos(closest);
            } else if (nearestPos) {
                setNearestPos(null);
            }
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, [data-cursor-text]');

            if (interactive) {
                if (interactive.hasAttribute('data-cursor-text')) {
                    setCursorType('text');
                    setCursorText(interactive.getAttribute('data-cursor-text') || '');
                } else {
                    setCursorType('hover');
                }
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', moveMouse, { passive: true });
        window.addEventListener('mouseover', handleOver, { passive: true });

        return () => {
            window.removeEventListener('scroll', updatePoints);
            window.removeEventListener('resize', updatePoints);
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleOver);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Neural Connection Line */}
            <svg className="absolute inset-0 w-full h-full">
                <AnimatePresence>
                    {nearestPos && (
                        <motion.line
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            x1={mouseX}
                            y1={mouseY}
                            x2={nearestPos.x}
                            y2={nearestPos.y}
                            stroke="rgba(202, 246, 72, 0.3)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            className="drop-shadow-[0_0_8px_rgba(202,246,72,0.8)]"
                        />
                    )}
                </AnimatePresence>
            </svg>

            {/* Main Dot */}
            <motion.div
                className="absolute w-3 h-3 bg-wl-accent rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{
                    left: mouseX,
                    top: mouseY,
                }}
            />

            {/* Glowing Ring */}
            <motion.div
                className="absolute rounded-full border border-wl-accent/50 -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: springX,
                    top: springY,
                    width: cursorType === 'hover' ? 80 : cursorType === 'text' ? 120 : 40,
                    height: cursorType === 'hover' ? 80 : cursorType === 'text' ? 120 : 40,
                    backgroundColor: cursorType === 'hover' ? 'rgba(202, 246, 72, 0.1)' : 'transparent',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            >
                <AnimatePresence>
                    {cursorType === 'text' && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-wl-accent uppercase tracking-tighter text-center px-4"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
