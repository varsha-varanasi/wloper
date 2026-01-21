'use client';

import { motion } from 'framer-motion';
import { usePersona, PersonaType } from '@/context/PersonaContext';
import { User, Shield, BarChart3 } from 'lucide-react';

export default function PersonaSwitcher() {
    const { persona, setPersona } = usePersona();

    const personas: { id: PersonaType; label: string; icon: any }[] = [
        { id: 'FOUNDER', label: 'Founder', icon: User },
        { id: 'MARKETER', label: 'Marketer', icon: BarChart3 },
        { id: 'CTO', label: 'CTO', icon: Shield },
    ];

    return (
        <div className="fixed bottom-10 left-10 z-[60] hidden lg:block">
            <div className="glass-strong rounded-full p-2 flex items-center gap-2 border border-white/10 shadow-2xl">
                {personas.map((p) => {
                    const Icon = p.icon;
                    const isActive = persona === p.id;
                    return (
                        <button
                            key={p.id}
                            onClick={() => setPersona(p.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 relative group overflow-hidden ${isActive
                                    ? 'text-black font-bold'
                                    : 'text-white/40 hover:text-white'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="persona-bg"
                                    className="absolute inset-0 bg-wl-accent"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <Icon className={`w-4 h-4 relative z-10 transition-transform ${isActive ? 'scale-110' : ''}`} />
                            <span className="text-[12px] uppercase tracking-widest relative z-10">
                                {p.label}
                            </span>
                        </button>
                    );
                })}
            </div>
            <div className="mt-3 text-[10px] text-white/20 font-black uppercase tracking-[0.2em] text-center">
                Select Your Interface Protocol
            </div>
        </div>
    );
}
