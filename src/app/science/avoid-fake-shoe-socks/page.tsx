import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const AvoidFakeShoeSocksPage = () => {
    return (
        <div className="min-h-screen bg-background-white">
            <Nav />

            <main className="w-full">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-6">
                    <nav className="text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">Why to Avoid Fake Shoe-Socks</span>
                    </nav>
                </div>

                {/* Page Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-text-primary text-center">
                            Why to Avoid Fake Shoe-Socks
                        </h1>
                        <p className="text-text-secondary text-lg mb-8 text-center">
                            Learn how to spot fake shoe-socks and why authentic Attipas products matter for your baby&apos;s safety.
                        </p>

                        <div className="bg-background-light-grey-alt rounded-xl p-8">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-text-secondary">
                                Our guide on identifying fake shoe-socks is currently being developed. Learn about the importance of authentic products for your baby&apos;s safety.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AvoidFakeShoeSocksPage;
