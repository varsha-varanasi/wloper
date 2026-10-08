'use client';

/**
 * DeferredWidgets — loads non-critical floating UI components
 * 3 seconds after the page becomes interactive.
 *
 * This removes ~60 KB of JS from the initial execution budget,
 * which directly cuts Total Blocking Time (TBT) during the
 * LCP window.
 */

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const AIAssistant = dynamic(() => import('@/components/AIAssistant'), { ssr: false, loading: () => null });
const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), { ssr: false, loading: () => null });
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'), { ssr: false, loading: () => null });
const StickyLeadBar = dynamic(() => import('@/components/StickyLeadBar'), { ssr: false, loading: () => null });

export default function DeferredWidgets() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Use requestIdleCallback if available (Chrome/Edge), else setTimeout 3s
        if ('requestIdleCallback' in window) {
            const id = (window as any).requestIdleCallback(() => setReady(true), { timeout: 3000 });
            return () => (window as any).cancelIdleCallback(id);
        } else {
            const t = setTimeout(() => setReady(true), 3000);
            return () => clearTimeout(t);
        }
    }, []);

    if (!ready) return null;

    return (
        <>
            <AIAssistant />
            <NewsletterPopup />
            <WhatsAppFloat />
            <StickyLeadBar />
        </>
    );
}
