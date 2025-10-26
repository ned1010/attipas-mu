import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';
import { MODELS_DATA } from '@/lib/models.utils';
import ContactSupport from "@/components/ContactSupport";

const ModelsPage = () => {
    const models = Object.values(MODELS_DATA);

    return (
        <div className="min-h-screen bg-background">
            <Nav />
            <main className="w-full">
                <div className="container mx-auto px-4 py-6">
                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
                        <Link href="/" className="flex items-center gap-1 hover:text-accent-orange transition-colors">
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-text-primary font-medium">Models</span>
                    </nav>

                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-text-primary mb-4">Attipas Models</h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Discover our complete collection of baby shoes designed for comfort, safety, and style.
                        </p>
                    </div>

                    {/* Models Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">


                        {/* Models Grid */}
                        {models.map((model) => (
                            <Link
                                key={model.slug}
                                href={`/models/${model.slug}`}
                                className="group relative block overflow-hidden"
                            >
                                {/* Model Image */}
                                <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
                                    <Image
                                        src={model.image}
                                        alt={`${model.name} - Attipas Baby Shoes`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Model Info */}
                                <div className="p-4 text-ce bg-[#d9a779]/30">
                                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-orange transition-colors">
                                        {model.name}
                                    </h3>

                                    {/* Color Variants */}
                                    {/* <div className="flex flex-wrap gap-2 mb-3">
                                        {model.specifications.color.slice(0, 3).map((color, index) => (
                                            <div key={index} className="flex items-center gap-1">
                                                <div className="w-4 h-4 rounded-full border border-border overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={color.colorImages}
                                                        alt={color.name}
                                                        width={16}
                                                        height={16}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <span className="text-xs text-text-tertiary capitalize">
                                                    {color.name}
                                                </span>
                                            </div>
                                        ))}
                                        {model.specifications.color.length > 3 && (
                                            <span className="text-xs text-text-tertiary">
                                                +{model.specifications.color.length - 3} more
                                            </span>
                                        )}
                                    </div> */}

                                    {/* Specifications Preview */}
                                    {/* <div className="text-sm text-text-secondary space-y-1">
                                        <div className="flex justify-between">
                                            <span>Upper:</span>
                                            <span className="text-text-tertiary truncate ml-2">
                                                {model.specifications.upper.split(',')[0]}...
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Weight:</span>
                                            <span className="text-text-tertiary">
                                                {model.specifications.weight}
                                            </span>
                                        </div>
                                    </div> */}

                                    {/* View Details Button */}
                                    {/* <div className="mt-4 pt-3 border-t border-border">
                                        <span className="text-sm font-medium text-accent-orange group-hover:text-accent-orange/80 transition-colors">
                                            View Details →
                                        </span>
                                    </div> */}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Models Count */}
                    <div className="text-center text-text-secondary pt-8">
                        <p>Showing all {models.length} models</p>
                    </div>
                </div>
            </main>

            <ContactSupport
                title="Need Help Choosing?"
                description="Our customer service team is here to help you find the perfect Attipas model for your little one"
                buttonText="Contact Customer Service"
            />

            <Footer />
        </div>
    );
};

export default ModelsPage;