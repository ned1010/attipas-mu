import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShopProductsGrid from "@/components/sections/ProductGrid";
import Link from "next/link";
import { notFound } from "next/navigation";

// Collection configuration
const COLLECTIONS = {
    "all-products": {
        title: "All Products",
        description: "Discover our complete collection of baby shoes",
        category: "All"
    },
    "summer-baby-shoes": {
        title: "Summer Baby Shoes",
        description: "Lightweight and breathable shoes for summer",
        category: "Summer"
    },
    "winter-shoes": {
        title: "Winter Baby Shoes",
        description: "Warm and cozy shoes for winter months",
        category: "Winter"
    },
    "kids-mesh-shoes": {
        title: "Mesh Baby Shoes",
        description: "Breathable mesh shoes for active toddlers",
        category: "Mesh"
    },
    "bamboo-baby-shoes": {
        title: "Bamboo Baby Shoes",
        description: "Eco-friendly bamboo fiber baby shoes",
        category: "Bamboo"
    },
    "aqua-shoes": {
        title: "Aqua Baby Shoes",
        description: "Water-resistant shoes for beach and pool",
        category: "Aqua"
    },
    "animal-baby-shoes": {
        title: "Animal Baby Shoes",
        description: "Fun animal-themed designs for little ones",
        category: "Animal"
    },
    "gift-packs": {
        title: "New Baby Gifts",
        description: "Perfect gift sets for new parents",
        category: "Gifts"
    },
    "knee-pads": {
        title: "Crawling Knee Pads",
        description: "Protective knee pads for crawling babies",
        category: "Accessories"
    },
    "baby-socks": {
        title: "Non Slip Baby Socks",
        description: "Safe non-slip socks for early walkers",
        category: "Socks"
    },
    "larger-sizes": {
        title: "Larger Baby Shoes (US 7.5-8.5)",
        description: "Extended sizes for growing toddlers",
        category: "Large"
    },
    "silicone-baby-feeding-set": {
        title: "Baby Feeding & Teething",
        description: "Safe silicone feeding and teething products",
        category: "Feeding"
    },
    "on-sale-items": {
        title: "Sale Items",
        description: "Great deals on baby shoes and accessories",
        category: "Sale"
    }
} as const;

type CollectionSlug = keyof typeof COLLECTIONS;

interface CollectionPageProps {
    params: {
        slug: string;
    };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;

    // Check if the collection exists
    if (!(slug in COLLECTIONS)) {
        notFound();
    }

    const collection = COLLECTIONS[slug as CollectionSlug];

    return (
        <div className="min-h-screen bg-background-white">
            <Nav />

            <main className="w-full">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-6">
                    <nav className="text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/collections/all-products" className="hover:text-foreground">Collections</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">{collection.title}</span>
                    </nav>
                </div>

                {/* Collection Header */}
                <div className="container mx-auto px-4 pb-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 uppercase tracking-wide text-text-primary">
                            {collection.title}
                        </h1>
                        <p className="text-text-secondary text-lg">
                            {collection.description}
                        </p>
                    </div>
                </div>

                <ShopProductsGrid collectionType={collection.category} />
            </main>

            <Footer />
        </div>
    );
}

// Generate static params for known collections
export async function generateStaticParams() {
    return Object.keys(COLLECTIONS).map((slug) => ({
        slug,
    }));
}
