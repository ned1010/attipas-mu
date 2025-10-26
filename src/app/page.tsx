import Nav from "@/components/Nav";
import BestSeller from "@/components/sections/BestSeller";

import MidSeasonSaleGrid from "@/components/sections/Sale";

import Footer from "@/components/Footer";
import BrandMarque from "@/components/sections/BrandMarque";
import SocialMediaSection from "@/components/sections/SocialMedia";
import Testimonial from "@/components/sections/Testimonial";


import HeroCarousel from "@/components/sections/HeroCarousel";
import NewArrival from "@/components/sections/NewArrival";
import ModelSection from "@/components/ModelSection";
import TopCollections from "@/components/sections/TopCollection";
import VideoSection from "@/components/sections/VideoSection";
export default function Page() {
  return (
    <div className="min-h-screen bg-background-white">
      <Nav />

      <main className="w-full">
        {/* <CarouselSection /> */}
        <HeroCarousel />
        <BrandMarque />


        {/* Marquee 
        science backed 
        Best sellers 
        Testimonials 
        CTA - discount or sales product 
        social media links
        footer  */}
        {/* <HeroBanner /> */}
        {/* <BestSeller /> */}
        <ModelSection />

        {/* <ReviewsCarousel />

        <BreathableMeshShoesGrid />

        <OscarsFeatureVideo />

     

        <MediaFeaturesCollage />

        <SharkTankFeature />

        <AwardsShowcase /> */}

        <NewArrival />
        <VideoSection />
        <Testimonial />

        <MidSeasonSaleGrid />
        <TopCollections />



        <SocialMediaSection />

      </main>

      <Footer />
    </div>
  );
}