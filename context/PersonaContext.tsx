'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type PersonaType = 'CTO' | 'MARKETER' | 'FOUNDER';

interface PersonaContextType {
    persona: PersonaType;
    setPersona: (persona: PersonaType) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
    const [persona, setPersona] = useState<PersonaType>('FOUNDER');

    return (
        <PersonaContext.Provider value={{ persona, setPersona }}>
            {children}
        </PersonaContext.Provider>
    );
}

export function usePersona() {
    const context = useContext(PersonaContext);
    if (context === undefined) {
        throw new Error('usePersona must be used within a PersonaProvider');
    }
    return context;
}
