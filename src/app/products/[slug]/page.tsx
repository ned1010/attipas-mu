"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Minus, Plus, Star, ShieldCheck, Truck, RefreshCcw, Share2, Heart, ZoomIn } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/cart-context";
import { useCurrency } from "@/contexts/currency-context";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://djunoemhhucuiipi.public.blob.vercel-storage.com';
// Mock product data - in production, this would come from a database or API
type ProductSize = {
    label: string;
    value: string;
    ageRange: string;
};

type ProductDetails = {
    material: string;
    sole: string;
    care: string;
    origin: string;
};

type Product = {
    name: string;
    slug: string;
    price: number;
    salePrice: number | null;
    rating: number;
    reviewCount: number;
    description: string;
    features: string[];
    details: ProductDetails;
    sizes: ProductSize[];
    images: string[];
    badges: string[];
};

const PRODUCT_DATA: Record<string, Product> = {
    "pop-peach": {
        name: "Breathable Bamboo - Pop Peach",
        slug: "pop-peach",
        price: 31.00,
        salePrice: null,
        rating: 4.9,
        reviewCount: 127,
        description: "Introducing our Breathable Bamboo Pop Peach baby shoes - the perfect combination of comfort, style, and functionality for your little one's growing feet.",
        features: [
            "Made with breathable bamboo fabric for ultimate comfort",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care",
            "Recommended for ages 6 months to 4 years"
        ],
        details: {
            material: "60% Bamboo, 30% Cotton, 10% Elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`

        ],
        badges: ["BESTSELLER", "SHOE-SOCKS"]
    },
    "aqua-shoes-sun-yellow": {
        name: "Breathable Bamboo - Sun Yellow",
        slug: "aqua-shoes-sun-yellow",
        price: 31.00,
        salePrice: null,
        rating: 4.8,
        reviewCount: 93,
        description: "Brighten up your baby's steps with our vibrant Sun Yellow breathable bamboo shoes. Perfect for active toddlers who love to explore!",
        features: [
            "Made with breathable bamboo fabric for ultimate comfort",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care",
            "Recommended for ages 6 months to 4 years"
        ],
        details: {
            material: "60% Bamboo, 30% Cotton, 10% Elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "NEW"]
    },
    "attipas-endangered-koala-gray": {
        name: "Attipas Koala - Grey",
        slug: "attipas-endangered-koala-gray",
        price: 31.00,
        salePrice: null,
        rating: 5.0,
        reviewCount: 156,
        description: "Adorable koala design that supports endangered species awareness. These comfortable baby shoes are perfect for little explorers.",
        features: [
            "Cute koala design with educational value",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "SHOE-SOCKS"]
    },
    "breathable-bamboo-cat-pink": {
        name: "First Walking Shoes - Cat Pink",
        slug: "breathable-bamboo-cat-pink",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.8,
        reviewCount: 89,
        description: "Adorable cat-themed baby shoes with breathable bamboo fabric. Perfect for little ones who love cute animal designs.",
        features: [
            "Cute cat design with breathable bamboo fabric",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care",
            "Recommended for ages 6 months to 4 years"
        ],
        details: {
            material: "60% Bamboo, 30% Cotton, 10% Elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "20% OFF"]
    },
    "breathable-bamboo-butterfly-purple": {
        name: "First Walking Shoes - Butterfly Purple",
        slug: "breathable-bamboo-butterfly-purple",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.7,
        reviewCount: 76,
        description: "Beautiful butterfly design in purple with breathable bamboo fabric. Perfect for little ones who love colorful designs.",
        features: [
            "Beautiful butterfly design with breathable bamboo fabric",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care",
            "Recommended for ages 6 months to 4 years"
        ],
        details: {
            material: "60% Bamboo, 30% Cotton, 10% Elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER"]
    },
    "breathable-bamboo": {
        name: "First Walking Shoes - Breathable Bamboo",
        slug: "breathable-bamboo",
        price: 44.00,
        salePrice: null,
        rating: 4.9,
        reviewCount: 203,
        description: "Our premium breathable bamboo baby shoes with superior comfort and durability. Perfect for active toddlers.",
        features: [
            "Premium breathable bamboo fabric for ultimate comfort",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care",
            "Recommended for ages 6 months to 4 years"
        ],
        details: {
            material: "60% Bamboo, 30% Cotton, 10% Elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "RESTOCK ALERT"]
    },
    "see-through-bear-beige": {
        name: "Attipas Zootopia Bear Beige",
        slug: "see-through-bear-beige",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.6,
        reviewCount: 112,
        description: "Adorable bear design in beige with see-through elements. Perfect for little ones who love cute animal themes.",
        features: [
            "Cute bear design with see-through elements",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["SHOE-SOCKS"]
    },
    "zootopia-penguin-navy": {
        name: "Attipas Zootopia Penguin Navy",
        slug: "zootopia-penguin-navy",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.8,
        reviewCount: 134,
        description: "Adorable penguin design in navy blue. Part of our Zootopia collection featuring cute animal themes.",
        features: [
            "Cute penguin design from Zootopia collection",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["SHOE-SOCKS"]
    },
    "heart-pink": {
        name: "Heart - Pink",
        slug: "heart-pink",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.7,
        reviewCount: 98,
        description: "Adorable heart-themed baby shoes in pink. Perfect for little ones who love sweet designs.",
        features: [
            "Cute heart design in pink",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["20% OFF"]
    },
    "attipas-bong-bong-pink": {
        name: "Attipas Bong Bong - Pink",
        slug: "attipas-bong-bong-pink",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.6,
        reviewCount: 87,
        description: "Fun and playful Bong Bong design in pink. Perfect for active toddlers who love to bounce around.",
        features: [
            "Playful Bong Bong design",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["SALE"]
    },
    "palette-berry": {
        name: "Palette - Berry",
        slug: "palette-berry",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.8,
        reviewCount: 112,
        description: "Beautiful berry color from our Palette collection. Rich and vibrant design for stylish little ones.",
        features: [
            "Beautiful berry color from Palette collection",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["20% OFF"]
    },
    "zootopia-bear-beige": {
        name: "Zootopia Bear - Beige",
        slug: "zootopia-bear-beige",
        price: 25.00,
        salePrice: null,
        rating: 4.5,
        reviewCount: 76,
        description: "Adorable bear design in beige from our Zootopia collection. Coming soon with exciting new features.",
        features: [
            "Cute bear design from Zootopia collection",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["20% OFF", "COMING SOON"]
    },
    "palette-white-chocolate": {
        name: "Palette - White Chocolate",
        slug: "palette-white-chocolate",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.7,
        reviewCount: 94,
        description: "Elegant white chocolate color from our Palette collection. Sophisticated and timeless design.",
        features: [
            "Elegant white chocolate color from Palette collection",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["20% OFF"]
    },
    "star-charcoal": {
        name: "Star - Charcoal",
        slug: "star-charcoal",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.9,
        reviewCount: 145,
        description: "Stylish star pattern in charcoal color. Perfect for little stars who love to shine.",
        features: [
            "Stylish star pattern in charcoal",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "20% OFF"]
    },
    "attipas-flower-gray": {
        name: "Attipas Flower - Gray",
        slug: "attipas-flower-gray",
        price: 31.00,
        salePrice: 25.00,
        rating: 4.6,
        reviewCount: 103,
        description: "Beautiful flower design in gray. Elegant and sophisticated for stylish little ones.",
        features: [
            "Beautiful flower design in gray",
            "Made with soft, breathable materials",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight sock-shoe hybrid design",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Cotton blend with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "20% OFF"]
    },
    "first-walking-shoes-breathable-mesh-solid-grey": {
        name: "First Walking Shoes - Breathable Mesh (Solid Grey)",
        slug: "first-walking-shoes-breathable-mesh-solid-grey",
        price: 44.00,
        salePrice: 35.00,
        rating: 4.8,
        reviewCount: 167,
        description: "Premium breathable mesh in solid grey. Perfect for first steps with superior comfort and support.",
        features: [
            "Premium breathable mesh material",
            "Solid grey color for versatile styling",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight design for natural movement",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Breathable mesh with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "20% OFF"]
    },
    "first-walking-shoes-breathable-mesh-solid-pink": {
        name: "First Walking Shoes - Breathable Mesh (Solid Pink)",
        slug: "first-walking-shoes-breathable-mesh-solid-pink",
        price: 44.00,
        salePrice: 35.00,
        rating: 4.7,
        reviewCount: 134,
        description: "Premium breathable mesh in solid pink. Perfect for first steps with superior comfort and support.",
        features: [
            "Premium breathable mesh material",
            "Solid pink color for stylish little ones",
            "Flexible, non-slip rubber sole for safe first steps",
            "Lightweight design for natural movement",
            "Easy slip-on design - stays on baby's feet",
            "Machine washable for easy care"
        ],
        details: {
            material: "Breathable mesh with elastane",
            sole: "Natural Rubber",
            care: "Machine washable at 30°C",
            origin: "Made in Korea"
        },
        sizes: [
            { label: "XS (10.5cm)", value: "xs", ageRange: "6-12 months" },
            { label: "S (11.5cm)", value: "s", ageRange: "12-18 months" },
            { label: "M (12.5cm)", value: "m", ageRange: "18-24 months" },
            { label: "L (13.5cm)", value: "l", ageRange: "24-30 months" },
            { label: "XL (14.5cm)", value: "xl", ageRange: "30+ months" }
        ],
        images: [
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-2.webp`,
            `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-3.webp`
        ],
        badges: ["BESTSELLER", "20% OFF"]
    }
};

// Related products
const RELATED_PRODUCTS = [
    {
        slug: "pop-peach",
        name: "Breathable Bamboo - Pop Peach",
        price: 31.00,
        image: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`
    },
    {
        slug: "aqua-shoes-sun-yellow",
        name: "Breathable Bamboo - Sun Yellow",
        price: 31.00,
        image: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`
    },
    {
        slug: "attipas-endangered-koala-gray",
        name: "Attipas Koala - Grey",
        price: 31.00,
        image: `${BASE_URL}/baby-shoe/shoe-details/butterfly/A25BU-Butterfly-1.webp`
    }
];

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = PRODUCT_DATA[params.slug];
    const { addItem } = useCart();
    const { convertPrice, currencySymbol } = useCurrency();

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [showSizeError, setShowSizeError] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [imageZoom, setImageZoom] = useState(false);

    // If product not found, show 404-like message
    if (!product) {
        return (
            <div className="min-h-screen bg-background-white">
                <Nav />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground mb-8">The product you&apos;re looking for doesn&apos; exist.</p>
                    <Link href="/" className="text-accent-pink hover:underline">
                        Return to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const displayPrice = convertPrice(product.price);
    const displaySalePrice = product.salePrice !== null ? convertPrice(product.salePrice) : null;
    const savingsPercentage = product.salePrice !== null
        ? Math.round(((product.price - product.salePrice) / product.price) * 100)
        : null;
    const finalPrice = displaySalePrice || displayPrice;

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowSizeError(true);
            return;
        }

        const selectedSizeData = product.sizes.find(s => s.value === selectedSize);

        // Add the item to cart (quantity is handled automatically by addItem)
        for (let i = 0; i < quantity; i++) {
            addItem({
                id: `${product.slug}-${selectedSize}`,
                name: `${product.name} - ${selectedSizeData?.label}`,
                price: product.price.toFixed(2),
                salePrice: product.salePrice ? product.salePrice.toFixed(2) : null,
                imageSrc: product.images[0]
            });
        }

        setShowSizeError(false);
    };

    const incrementQuantity = () => setQuantity(q => q + 1);
    const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href,
                });
            } catch {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Get related products excluding current product
    const relatedProducts = RELATED_PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 4);

    return (
        <div className="min-h-screen bg-background-white">
            <Nav />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4 border-b border-gray-100">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-accent-blue-grey transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/collections/all-products" className="hover:text-accent-blue-grey transition-colors">Products</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{product.name}</span>
                </nav>
            </div>

            {/* Product Details */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column - Images */}
                    <div className="space-y-4 lg:sticky lg:top-4 lg:self-start">
                        {/* Main Image */}
                        <div className="relative aspect-square bg-background-light-grey rounded-2xl overflow-hidden group">
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                fill
                                className={`object-cover transition-transform duration-500 ${imageZoom ? 'scale-150' : 'scale-100'}`}
                                priority
                            />

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                {product.badges.map((badge: string, index: number) => (
                                    <span
                                        key={index}
                                        className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-md ${badge === "BESTSELLER"
                                            ? "bg-black text-white"
                                            : "bg-accent-pink text-white"
                                            }`}
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="absolute top-4 right-4 flex gap-2 z-10">
                                <button
                                    onClick={handleShare}
                                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-md transition-all hover:scale-110"
                                    title="Share product"
                                >
                                    <Share2 className="w-4 h-4 text-gray-700" />
                                </button>
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-md transition-all hover:scale-110"
                                    title="Add to wishlist"
                                >
                                    <Heart className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-accent-pink text-accent-pink' : 'text-gray-700'}`} />
                                </button>
                            </div>

                            {/* Zoom Button */}
                            <button
                                onClick={() => setImageZoom(!imageZoom)}
                                className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-md z-10"
                                title={imageZoom ? "Zoom out" : "Zoom in"}
                            >
                                <ZoomIn className="w-4 h-4 text-gray-700" />
                            </button>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-3">
                            {product.images.map((image: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedImage(index);
                                        setImageZoom(false);
                                    }}
                                    className={`aspect-square relative bg-background-light-grey rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                        ? "border-accent-blue-grey ring-2 ring-accent-blue-grey/20"
                                        : "border-transparent hover:border-gray-300"
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 leading-tight">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? "fill-star-yellow text-star-yellow"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-text-primary">{product.rating}</span> ({product.reviewCount} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                {displaySalePrice ? (
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <span className="text-4xl font-bold text-accent-pink">
                                            {currencySymbol}{displaySalePrice}
                                        </span>
                                        <span className="text-2xl text-muted-foreground line-through">
                                            {currencySymbol}{displayPrice}
                                        </span>
                                        {savingsPercentage !== null && (
                                            <span className="text-sm text-white bg-accent-pink font-semibold px-3 py-1.5 rounded-full">
                                                SAVE {savingsPercentage}%
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <span className="text-4xl font-bold text-text-primary">
                                        {currencySymbol}{displayPrice}
                                    </span>
                                )}
                                <p className="text-sm text-muted-foreground mt-2">Tax included. Shipping calculated at checkout.</p>
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary leading-relaxed text-lg mb-6">
                                {product.description}
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div className="bg-background-light-grey-alt rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                                    Select Size
                                </label>
                                <button className="text-sm text-accent-blue-grey hover:text-accent-blue-grey-dark font-medium underline">
                                    Size Guide
                                </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size.value}
                                        onClick={() => {
                                            setSelectedSize(size.value);
                                            setShowSizeError(false);
                                        }}
                                        className={`p-4 rounded-xl border-2 transition-all text-left ${selectedSize === size.value
                                            ? "border-accent-blue-grey bg-accent-blue-grey text-white shadow-md"
                                            : "border-gray-200 hover:border-accent-blue-grey/50 bg-white"
                                            }`}
                                    >
                                        <div className="font-bold text-sm">{size.label}</div>
                                        <div className={`text-xs mt-1 ${selectedSize === size.value ? 'text-white/80' : 'text-muted-foreground'}`}>
                                            {size.ageRange}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {showSizeError && (
                                <p className="text-sm text-red-600 mt-3 font-medium">⚠ Please select a size</p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="text-sm font-bold text-foreground uppercase tracking-wider mb-3 block">
                                Quantity
                            </label>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={decrementQuantity}
                                        className="p-4 hover:bg-gray-100 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-8 font-bold text-lg">{quantity}</span>
                                    <button
                                        onClick={incrementQuantity}
                                        className="p-4 hover:bg-gray-100 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-muted-foreground">
                                        In stock - ships within 1-2 business days
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-accent-blue-grey text-white py-5 px-8 rounded-xl font-bold uppercase text-base tracking-wider hover:bg-accent-blue-grey-dark transition-all shadow-lg hover:shadow-xl transform active:scale-95"
                        >
                            Add to Cart - {currencySymbol}{(parseFloat(finalPrice) * quantity).toFixed(2)}
                        </button>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                            <div className="text-center p-4 bg-background-light-grey-alt rounded-xl">
                                <Truck className="w-7 h-7 mx-auto mb-2 text-accent-blue-grey" />
                                <p className="text-xs font-bold mb-1">Free Shipping</p>
                                <p className="text-xs text-muted-foreground">Over $50</p>
                            </div>
                            <div className="text-center p-4 bg-background-light-grey-alt rounded-xl">
                                <RefreshCcw className="w-7 h-7 mx-auto mb-2 text-accent-blue-grey" />
                                <p className="text-xs font-bold mb-1">Easy Returns</p>
                                <p className="text-xs text-muted-foreground">30 Days</p>
                            </div>
                            <div className="text-center p-4 bg-background-light-grey-alt rounded-xl">
                                <ShieldCheck className="w-7 h-7 mx-auto mb-2 text-accent-blue-grey" />
                                <p className="text-xs font-bold mb-1">Secure Payment</p>
                                <p className="text-xs text-muted-foreground">SSL Protected</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="mt-20 grid md:grid-cols-2 gap-12 py-12 border-t border-gray-100">
                    {/* Features */}
                    <div className="bg-background-light-grey-alt rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide flex items-center gap-2">
                            <span className="w-1 h-8 bg-accent-pink rounded-full"></span>
                            Key Features
                        </h3>
                        <ul className="space-y-4">
                            {product.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-accent-pink mt-1 text-xl">✓</span>
                                    <span className="text-text-secondary">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Details */}
                    <div className="bg-background-light-grey-alt rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide flex items-center gap-2">
                            <span className="w-1 h-8 bg-accent-blue-grey rounded-full"></span>
                            Product Details
                        </h3>
                        <dl className="space-y-4">
                            {Object.entries(product.details).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-gray-200 pb-3">
                                    <dt className="font-bold text-text-primary capitalize">{key}:</dt>
                                    <dd className="text-text-secondary text-right">{value as string}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20 pt-12 border-t border-gray-100">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wide text-text-primary">
                                You May Also Like
                            </h2>
                            <p className="text-text-secondary text-lg">
                                Discover more from our collection
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map((related) => {
                                const relatedPrice = convertPrice(related.price);
                                return (
                                    <Link
                                        key={related.slug}
                                        href={`/products/${related.slug}`}
                                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                                    >
                                        <div className="relative aspect-square bg-background-light-grey overflow-hidden">
                                            <Image
                                                src={related.image}
                                                alt={related.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-text-primary group-hover:text-accent-blue-grey transition-colors">
                                                {related.name}
                                            </h3>
                                            <p className="text-lg font-bold text-text-primary">
                                                {currencySymbol}{relatedPrice}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}