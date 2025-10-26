"use client";

import React from "react";
import { SlidingLogoMarquee, SlidingLogoMarqueeItem } from "@/components/ui/sliding-logo-marquee";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://djunoemhhucuiipi.public.blob.vercel-storage.com';

const BrandMarque = () => {
    // Brand logos configuration
    const logos: SlidingLogoMarqueeItem[] = [
        {
            id: "safety",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/safe.png`} alt="Safety Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Safety</span>
                </div>
            ),
        },
        {
            id: "lightweight",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/light.png`} alt="Light Weight Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Light Weight</span>
                </div>
            ),
        },
        {
            id: "breathable",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/breathable.png`} alt="Breathable Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Breathable</span>
                </div>
            ),
        },
        {
            id: "comfortable",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/comfortable.png`} alt="Comfortable Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Comfortable</span>
                </div>
            ),

        },
        {
            id: "non-slip",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/no-slip.png`} alt="Non Slip Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Non Slip</span>
                </div>
            )
        },
        {
            id: "convenient",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/convenience.png`} alt="Convenient Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Convenient</span>
                </div>
            ),
        },
        {
            id: "flexible",
            content: (
                <div className="flex items-center flex-col justify-center h-full">
                    <Image src={`${BASE_URL}/logo/big_toe.png`} alt="Flexiable Icon" width={100} height={100} />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Flexible</span>
                </div>
            ),
        }
    ];

    // const handleBrandClick = (item: SlidingLogoMarqueeItem) => {
    //     console.log("Clicked:", item.id);
    //     // Add analytics tracking or other click handling logic here
    // };

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto px-4">
                <SlidingLogoMarquee
                    items={logos}
                    speed={60}
                    height="160px"
                    enableBlur={true}
                    pauseOnHover={true}
                    showGridBackground={false}
                    gap="2rem"
                    scale={1}
                    direction="horizontal"
                    autoPlay={true}
                    className="rounded-lg"
                />
            </div>
        </section>
    );
};

export default BrandMarque;
