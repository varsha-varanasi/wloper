import { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
    title: "Products | Autonomous AI & Build Engines",
    description: "Discover our suite of high-performance products, including AI interview screening and HCM systems. Specialized architecture for global enterprise scale.",
    openGraph: {
        title: "Products | The WLOPER Build Engines",
        description: "Deploy autonomous AI assets at global scale.",
    }
};

export default function ProductsPage() {
    return <ProductsClient />;
}
