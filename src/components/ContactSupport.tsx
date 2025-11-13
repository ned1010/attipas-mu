import { Button } from "@/components/ui/button";
import Link from "next/link";
interface ContactSupportProps {
    title: string;
    description: string;
    buttonText: string;
}
const ContactSupport = ({ title, description, buttonText }: ContactSupportProps) => {
    return (
        <section className="py-16 px-6 bg-[#82b7a8]/80 text-white">
            <div className="container max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold uppercase text-dark-charcoal-alt mb-4">
                    {title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-widest mb-5 ">
                    {description}
                </p>
                <Button variant="coral" className="border-0 cursor-pointer">
                    <Link href="tel:+23058165618" className="text-white">{buttonText}</Link>
                </Button>
            </div>
        </section>

    )
}

export default ContactSupport;


