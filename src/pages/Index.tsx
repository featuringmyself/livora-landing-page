
import Hero from "@/components/Hero";
import MealShowcase from "@/components/MealShowcase";
import Features from "@/components/Features";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import ProductMockup from "@/components/ProductMockup";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MealShowcase />
      <Features />
      <About />
      <Statistics />
      <ProductMockup />
      <SocialProof />
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
