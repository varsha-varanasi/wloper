'use client';

import { motion } from 'framer-motion';
import { Compass, Cpu, Zap } from 'lucide-react';
import { useInterface } from '@/context/InterfaceContext';
import { usePersona, PersonaType } from '@/context/PersonaContext';

export default function PersonaSwitcher() {
    const { persona, setPersona } = usePersona();
    const { showNotification, triggerProtocolEffect } = useInterface();

    const personas: { id: PersonaType; label: string; icon: any }[] = [
        { id: 'STRATEGY', label: 'STRATEGY', icon: Compass },
        { id: 'ENGINEERING', label: 'ENGINEERING', icon: Cpu },
        { id: 'SCALE', label: 'SCALE', icon: Zap },
    ];

    const handleProtocolSwitch = (id: PersonaType) => {
        if (id === persona) return;

        // Trigger cinematic effects
        triggerProtocolEffect();

        // Update state
        setPersona(id);

        // Show high-tech notification
        const messages = {
            STRATEGY: "STRATEGIC AUDIT DEPOT ENGAGED: ARCHITECTING VISION",
            ENGINEERING: "NEURAL FORGE ACTIVE: DEEP-STACK CORE INITIALIZED",
            SCALE: "APEX PROTOCOL ONLINE: OPTIMIZING REVENUE VELOCITY"
        };
        showNotification(messages[id]);
    };

    return (
        <div className="fixed bottom-10 left-10 z-[60] hidden lg:block">
            <div className="glass-strong rounded-full p-2 flex items-center gap-2 border border-white/10 shadow-2xl">
                {personas.map((p) => {
                    const Icon = p.icon;
                    const isActive = persona === p.id;
                    return (
                        <button
                            key={p.id}
                            onClick={() => handleProtocolSwitch(p.id)}
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
