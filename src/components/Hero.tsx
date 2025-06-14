
import { ArrowDown, Sparkles, Heart, Zap, Star, Leaf, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero entrance animation
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(buttonsRef.current?.children,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Floating elements animation
    if (floatingElementsRef.current) {
      const floatingElements = floatingElementsRef.current.querySelectorAll('.floating-element');
      gsap.fromTo(floatingElements,
        { opacity: 0, scale: 0, rotation: -180 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          duration: 1,
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)",
          delay: 2
        }
      );

      // Continuous floating animation
      gsap.to(floatingElements, {
        y: "-=20",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }

    // Parallax effect for background elements
    const backgroundElements = document.querySelectorAll('.bg-gradient-orb');
    gsap.to(backgroundElements, {
      rotation: 360,
      duration: 100,
      repeat: -1,
      ease: "none"
    });

  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: waitlistSection, offsetY: 0 },
      ease: "power2.inOut"
    });
  };

  return (
    <section ref={heroRef} className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-gradient-orb absolute top-10 left-4 md:left-20 w-32 md:w-72 h-32 md:h-72 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="bg-gradient-orb absolute bottom-20 right-2 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-200/15 to-purple-300/15 rounded-full blur-3xl"></div>
        <div className="bg-gradient-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-yellow-200/15 to-orange-300/15 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Interactive Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="floating-element absolute top-20 left-10">
          <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-green-100/90 to-green-200/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-green-200/50">
            <Heart className="w-6 lg:w-8 h-6 lg:h-8 text-green-600" />
          </div>
        </div>
        
        <div className="floating-element absolute top-32 right-16">
          <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-orange-100/90 to-orange-200/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-orange-200/50">
            <Zap className="w-5 lg:w-6 h-5 lg:h-6 text-orange-600" />
          </div>
        </div>
        
        <div className="floating-element absolute bottom-32 left-20">
          <div className="w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br from-blue-100/90 to-blue-200/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-blue-200/50">
            <Sparkles className="w-6 lg:w-7 h-6 lg:h-7 text-blue-600" />
          </div>
        </div>

        <div className="floating-element absolute top-1/3 right-32">
          <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-br from-purple-100/90 to-purple-200/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-purple-200/50">
            <Star className="w-4 lg:w-5 h-4 lg:h-5 text-purple-600" />
          </div>
        </div>

        <div className="floating-element absolute bottom-1/4 right-20">
          <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-emerald-100/90 to-emerald-200/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-emerald-200/50">
            <Leaf className="w-5 lg:w-6 h-5 lg:h-6 text-emerald-600" />
          </div>
        </div>

        <div className="floating-element absolute top-3/4 left-40">
          <div className="w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br from-red-100/90 to-red-200/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-red-200/50">
            <Apple className="w-6 lg:w-7 h-6 lg:h-7 text-red-600" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <div>
          {/* Enhanced Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-100/80 via-emerald-50/80 to-green-100/80 backdrop-blur-sm text-green-800 px-4 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-xl border border-green-200/30">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🎉 India's First AI-Powered Health Meal Subscription
            </span>
          </div>
          
          {/* Enhanced Title */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
            Meet{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">
                Livora
              </span>
            </span>
          </h1>
          
          {/* Problem Statement */}
          <div className="relative mb-6 group">
            <p ref={subtitleRef} className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto font-bold leading-relaxed px-4">
              Tired of guessing what to eat for your health goals?
            </p>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold">
              personalized AI meal plans
            </span>{" "}
            +{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
              curated healthy snacks
            </span>{" "}
            delivered to your doorstep.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 px-4">
            <Button 
              onClick={scrollToWaitlist}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-500 group border border-green-400/20"
            >
              <Heart className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
              Join the Waitlist
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3 group-hover:rotate-180 transition-transform duration-500" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-green-200/60 bg-white/60 backdrop-blur-sm text-green-700 px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl rounded-2xl hover:bg-green-50/80 hover:border-green-300 hover:shadow-lg transition-all duration-500 group"
            >
              <Zap className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
              Learn More
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-lg text-gray-600 mb-8 md:mb-12 px-4">
            <div className="flex items-center group">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2 md:mr-3 shadow-sm"></div>
              <span className="font-semibold group-hover:text-green-600 transition-colors duration-300">AI-Powered Nutrition</span>
            </div>
            <div className="flex items-center group">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-2 md:mr-3 shadow-sm"></div>
              <span className="font-semibold group-hover:text-blue-600 transition-colors duration-300">Doctor Reviewed</span>
            </div>
            <div className="flex items-center group">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-2 md:mr-3 shadow-sm"></div>
              <span className="font-semibold group-hover:text-purple-600 transition-colors duration-300">Fresh Daily Delivery</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Arrow */}
        <div className="group cursor-pointer" onClick={scrollToWaitlist}>
          <ArrowDown className="w-6 md:w-8 h-6 md:h-8 text-green-600 mx-auto group-hover:text-green-700 transition-all duration-300 group-hover:translate-y-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
