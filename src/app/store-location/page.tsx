"use client";
import { Mail, Phone } from 'lucide-react';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
const ContactHero = () => {
    return (
        <section className="relative  overflow-hidden py-10">
            <div className="container relative z-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-[#666666] mb-6">
                    <Link href="/" className="hover:text-[#2B2B2B] transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-[#2B2B2B]">Contact</span>
                </div>

                {/* Title */}
                <div className="flex flex-col items-center text-center mb-4" >
                    <h2 className="text-center text-2xl font-bold uppercase text-dark-charcoal-alt mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-widest mb-5 ">
                        Have a question or want to learn more about our products? We&apos;d love to hear from you.
                    </p>
                </div >
            </div>

            {/* Background Text */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.03)] font-black text-[clamp(80px,20vw,200px)] leading-none select-none pointer-events-none font-body whitespace-nowrap"
                aria-hidden="true"
            >
                CONTACT
            </div>
        </section>
    );
};

const ContactInfo = () => {
    const contactItems = [
        {
            icon: Mail,
            title: "Email Us",
            content: "support@attipas.com",
            description: "We'll respond within 24 hours"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+230 5816 5618",
            description: "Mon-Fri from 8am to 6pm"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactItems.map((item, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#EDE9E3] rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-[#2B2B2B]" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg text-[#2B2B2B] mb-1">{item.title}</h3>
                            <p className="text-[#2B2B2B] font-medium mb-1">{item.content}</p>
                            <p className="text-sm text-[#666666]">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ContactFormSection = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column - Form */}
                    <div>
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4">
                                Send us a Message
                            </h2>
                            <p className="text-lg text-[#666666] mb-8">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>
                            {/* Form here */}
                            <div id='hubspot-form-container'>
                            </div>
                        </div>
                    </div>


                    {/* Right Column - Contact Info */}
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-12">
                            Contact Information
                        </h2>
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </section>
    );
};

type HubSpotFormCreateOptions = {
    portalId: string;
    formId: string;
    target: string;
    region?: string;
};

type HubSpotFormsApi = {
    create: (options: HubSpotFormCreateOptions) => void;
};

type HubSpotApi = {
    forms?: HubSpotFormsApi;
};

declare global {
    interface Window {
        hbspt?: HubSpotApi;
    }
}



const MapSection = () => {
    return (
        <section className="py-20 bg-[#d9a779]/20">
            <div className="container">

                <div className="flex flex-col items-center text-center mb-4" >
                    <h2 className="text-center text-2xl font-bold uppercase text-dark-charcoal-alt mb-4">
                        Our Location
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-widest mb-5 ">
                        Visit us at our flagship location in Mauritius
                    </p>
                </div >

                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890123!2d57.5034!3d-20.1609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA5JzM5LjIiUyA1N8KwMzAnMTIuNCJF!5e0!3m2!1sen!2smu!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Attipas Mauritius Store Location"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default function StoreLocationPage() {

    useEffect(() => {
        // Dynamically load the HubSpot form script
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
            // Initialize the form after the script loads
            if (window.hbspt && window.hbspt.forms) {
                window.hbspt.forms.create({
                    portalId: "46944519",
                    formId: "0cf01259-a3bb-467b-b8d4-5bafba5eaa11",
                    target: '#hubspot-form-container'  // Specify the target element for the form
                });
            }
        };

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Nav />

            <main className="w-full">
                <ContactHero />
                <ContactFormSection />
                <MapSection />
            </main>

            <Footer />
        </div>
    );
}