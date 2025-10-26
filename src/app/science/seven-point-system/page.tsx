import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const SevenPointSystemPage = () => {
    return (
        <div className="min-h-screen bg-background-white">
            <Nav />

            <main className="w-full">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-6">
                    <nav className="text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">Seven Point System</span>
                    </nav>
                </div>

                {/* Page Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-text-primary text-center">
                            Seven Point System
                        </h1>
                        <p className="text-text-secondary text-lg mb-8 text-center">
                            The science behind Attipas baby shoes and our commitment to healthy foot development.
                        </p>

                        <div className="bg-background-light-grey-alt rounded-xl p-8">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-text-secondary">
                                Our detailed science page is currently being developed. Learn about our seven-point system for healthy baby foot development.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SevenPointSystemPage;