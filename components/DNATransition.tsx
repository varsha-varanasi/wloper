'use client';

import { motion } from 'framer-motion';

const dnaVariants = {
    initial: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        opacity: 0,
    },
    animate: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    exit: {
        clipPath: [
            'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)', // Unzip effect
        ],
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: "circIn"
        }
    }
};

export default function DNATransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={dnaVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
