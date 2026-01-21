import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact | Initialize Project Protocol",
    description: "Connect with the WLOPER engineering center. Start your project with our specialized pods for AI, Blockchain, and Web engineering.",
    openGraph: {
        title: "Contact | Initialize Project Protocol",
        description: "Direct link to the WLOPER engineering command center.",
        images: [{ url: '/images/envato-labs-ai-6ff54a92-2b68-43ec-8639-abdd5b65ef00.jpg' }]
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
