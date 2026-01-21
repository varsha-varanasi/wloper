import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About | The WLOPER Protocol & Engineering DNA",
    description: "Learn about the mission, team, and specialized technical clusters behind Wloper. We architect the future of intelligent systems through elite engineering and autonomous AI.",
    openGraph: {
        title: "About | The WLOPER Protocol & Engineering DNA",
        description: "Specialized production hub where elite engineering meets autonomous artificial intelligence.",
        images: [{ url: '/images/envato-labs-ai-fccc6df9-0659-4f2e-9c05-9c652f034c3f.jpg' }]
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
