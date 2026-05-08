import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ExperienceSection from "@/components/ExperienceSection";
import CollectionSection from "@/components/CollectionSection";
import RitualSection from "@/components/RitualSection";
import IngredientsSection from "@/components/IngredientsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ParallaxSection from "@/components/ParallaxSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OriginSection from "@/components/OriginSection";
import NewsletterSection from "@/components/NewsletterSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <ExperienceSection />
      <CollectionSection />
      <RitualSection />
      <IngredientsSection />
      <BenefitsSection />
      <ParallaxSection />
      <TestimonialsSection />
      <OriginSection />
      <NewsletterSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
