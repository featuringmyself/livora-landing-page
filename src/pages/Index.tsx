
import Hero from "@/components/Hero";
// import MealShowcase from "@/components/MealShowcase";
import Features from "@/components/Features";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import ProductMockup from "@/components/ProductMockup";
// import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import DashboardPreview from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <MealShowcase /> */}
      <Features />
      <DashboardPreview />
      <About />
      <ProductMockup />
      {/* <Statistics /> */}
      {/* <SocialProof /> */}
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
