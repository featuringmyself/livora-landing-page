import { useEffect } from "react";
import ReactGA from 'react-ga4';
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
import { ParticleBackground } from "@/components/ui/particle-background";

const Index = () => {
  useEffect(()=>{
    ReactGA.initialize('G-Z26DWLB985');
    ReactGA.send({hitType: 'pageview', page: '/', title: 'Home Page'});
  },[])
  return (
    <div className="min-h-screen relative">
      <ParticleBackground 
        particleCount={30} 
        colors={['#22c55e', '#3b82f6', '#8b5cf6']}
        className="opacity-30"
      />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
