import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "Services | Specialized Tech & Build Protocols",
    description: "Explore our elite build protocols for AI Strategy, Blockchain Engineering, and Digital Growth. We architect scalable infrastructure that defines industry leaders.",
    openGraph: {
        title: "Services | Professional Engineering Hub",
        description: "Institutional-grade tech for AI, Web3, and Growth.",
    }
};

export default function ServicesPage() {
    return <ServicesClient />;
}
