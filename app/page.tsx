import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: "Wloper | Next-Gen AI & Web Engineering Hub",
    description: "Building the future of digital presence through high-performance AI products, blockchain solutions, and strategic marketing engineering. Experience sub-millisecond response times and conversion-first architectures.",
    openGraph: {
        title: "Wloper | Next-Gen AI & Web Engineering Hub",
        description: "Transforming vision into scalable digital assets with institutional-grade tech.",
        images: [{ url: '/images/hero-bg.png' }]
    }
};

export default function Home() {
    return <HomeClient />;
}
