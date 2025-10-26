
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import ModelSelectionModal from '@/components/modelSelectionModal';
import { getModelBySlug, getAdjacentModels } from '@/lib/models.utils';
import { notFound } from 'next/navigation';
import ContactSupport from "@/components/ContactSupport";
import ModelContent from '@/components/ModelContent';
interface ModelPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ModelPage({ params }: ModelPageProps) {
    const { slug } = await params;
    const model = getModelBySlug(slug);

    if (!model) {
        notFound();
    }

    const { prev: prevModel, next: nextModel } = getAdjacentModels(slug);

    return (
        <div className="min-h-screen bg-background">
            <Nav />
            <main className=" w-full">
                <div className="container mx-auto px-4 py-6 ">
                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center gap-2  mb-8 text-sm text-muted-foreground">
                        <Link href="/" className="flex items-center gap-1 hover:text-accent-orange transition-colors">
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/models" className="hover:text-accent-orange transition-colors">
                            Models
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-text-primary font-medium">{model.name}</span>
                    </nav>


                    {/* Product Name Header with Navigation */}
                    <div className="flex items-center justify-between">
                        {prevModel ? (
                            <Link
                                href={`/models/${prevModel.slug}`}
                                className="flex items-center gap-2 text-text-secondary hover:text-accent-orange transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span className="text-sm">{prevModel.name}</span>
                            </Link>
                        ) : (
                            <div></div>
                        )}

                        <h1 className="text-2xl md:text-4xl font-bold text-text-primary">{model.name}</h1>

                        {nextModel ? (
                            <Link
                                href={`/models/${nextModel.slug}`}
                                className="flex items-center gap-2 text-text-secondary hover:text-accent-orange transition-colors"
                            >
                                <span className="text-sm">{nextModel.name}</span>
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        ) : (
                            <div></div>
                        )}
                    </div>

                    {/* Model Selection Modal  */}
                    <ModelSelectionModal />

                    <ModelContent model={model} />


                </div>
            </main>
            <ContactSupport title="Need Help Finding shoes?" description="Our customer service team is here to help you find the perfect fit for your little one" buttonText="Contact Customer Service" />



            <Footer />
        </div>
    );
}


