"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

type Review = {
  id: number
  rating: number
  date: string
  title: string
  productName: string
  productImage: string | null
  reviewText: string
  reviewerName: string
  country: string
}

const reviewsData: Review[] = [
  {
    id: 1,
    rating: 5,
    date: '10/05/2025',
    title: 'Happy feet',
    productName: 'Palette - Berry',
    productImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d882f16-c55c-4aa3-8b1c-763b8e4df647-attipas-com-au/assets/images/101407_6597958697056-4.jpg?',
    reviewText: 'So happy with these . My daughter loves them.',
    reviewerName: 'Caitlin H.',
    country: 'Australia',
  },
  {
    id: 2,
    rating: 5,
    date: '09/18/2025',
    title: 'These socks are made for walking',
    productName: 'Attipas Flower - Gray',
    productImage: null,
    reviewText: 'My baby absolutely loves these socks. She can still walk around comfortably and easily, whereas other brands hinder her steps.',
    reviewerName: 'Michelle B.',
    country: 'Australia',
  },
  {
    id: 3,
    rating: 5,
    date: '09/10/2025',
    title: 'Perfect for my son',
    productName: 'First Walking Shoes - Breathable Mesh (Blue)',
    productImage: null,
    reviewText: 'Perfect for my son',
    reviewerName: 'Tiffany',
    country: 'Australia',
  },
  {
    id: 4,
    rating: 5,
    date: '07/21/2025',
    title: 'Soft and safe',
    productName: 'First Walking Shoes - Breathable Mesh (Solid Grey)',
    productImage: null,
    reviewText: 'Some early shoes look great but aren’t safe. Attipas shoes look great, are very comfy, easy to put on, safe for walking, no trips, and securely strap.',
    reviewerName: 'Cheryl E.',
    country: 'Australia',
  },
  {
    id: 5,
    rating: 5,
    date: '07/20/2025',
    title: 'The only shoes my 1yo wears!!',
    productName: 'First Walking Shoes - Breathable Mesh (Blue)',
    productImage: null,
    reviewText: 'Bought this to try out because my toddler refused to wear any shoes (besides regular Attipas). He loves this mesh shoes so much that I have now bought one of each size, up until the largest size available. Very soft and super comfortable.',
    reviewerName: 'Hui M.',
    country: 'Australia',
  },
  {
    id: 6,
    rating: 5,
    date: '03/19/2025',
    title: 'Great shoes',
    productName: 'First Walking Shoes - Breathable Mesh (Blue)',
    productImage: null,
    reviewText: 'These shoes have been great, our little one loves wearing them and is extremely confident in wearing them.',
    reviewerName: 'Michelle S.',
    country: 'Australia',
  },
];

const StarRating = ({ rating, className }: { rating: number; className?: string }) => (
  <div className={`flex items-center gap-0.5 ${className}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#ffc700] fill-[#ffc700]' : 'text-gray-300 fill-gray-300'}`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <Card className="flex flex-col h-full p-[15px] bg-white border border-gray-200 rounded-lg transition-shadow hover:shadow-lg">
    <div className="flex justify-between items-center mb-2">
      <StarRating rating={review.rating} />
      <span className="text-xs text-gray-500">{review.date}</span>
    </div>

    <a href="#" className="font-bold text-lg text-text-primary hover:underline mb-2 line-clamp-2">{review.title}</a>
    
    <div className="flex-grow mb-4">
      <p className="italic text-sm text-[#666]">{review.reviewText}</p>
    </div>
    
    <div className="mt-auto pt-4 border-t border-gray-100 flex items-start gap-3">
      {review.productImage ? (
        <Image src={review.productImage} width={80} height={80} alt={review.productName} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
      ) : (
        <div className="w-20 h-20 rounded-md bg-gray-200 flex-shrink-0" />
      )}
      <div className="flex flex-col justify-start h-full text-sm">
        <a href="#" className="font-bold text-text-primary hover:underline text-xs">{review.productName}</a>
        <p className="text-gray-600 mt-1">{review.reviewerName}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <Image src="https://s3-us-west-2.amazonaws.com/stamped.io/cdn/images/shopify_verified-by-shop-gray.svg" width={90} height={16} alt="Verified by SHOP" className="h-4 w-auto" />
          <span className="text-xs text-gray-500">{review.country}</span>
        </div>
      </div>
    </div>
  </Card>
);


export default function ReviewsCarousel() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container">
        <h2 className="text-center text-xl md:text-2xl font-bold uppercase tracking-wider text-[#333] mb-8">
          Thousands of Real Reviews
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-1">
            <h3 className="text-lg text-text-secondary mb-4 sm:mb-0">Real Reviews from Real Customers</h3>
            <div className="flex items-center gap-3">
              <StarRating rating={5} />
              <span className="text-sm text-gray-700 font-medium">1896 Reviews</span>
              <CarouselPrevious className="relative h-9 w-9 translate-y-0 left-0 top-0 rounded-full bg-accent-blue-grey text-white border-none hover:bg-accent-blue-grey-dark" />
              <CarouselNext className="relative h-9 w-9 translate-y-0 right-0 top-0 rounded-full bg-accent-blue-grey text-white border-none hover:bg-accent-blue-grey-dark" />
            </div>
          </div>
          
          <CarouselContent className="-ml-4">
            {reviewsData.map((review) => (
              <CarouselItem key={review.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}