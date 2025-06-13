
import Hero from "@/components/Hero";
import MealShowcase from "@/components/MealShowcase";
import ProductMockup from "@/components/ProductMockup";
import SocialProof from "@/components/SocialProof";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MealShowcase />
      <ProductMockup />
      <SocialProof />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
