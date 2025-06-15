
import { ArrowDown, Sparkles, Heart, Zap, Star, Leaf, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParallaxEffect, useMagneticEffect, useTextReveal, useHoverGlow } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useTextReveal();
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useParallaxEffect(0.2);
  const magneticButtonRef = useMagneticEffect();
  const glowButtonRef = useHoverGlow();

  useEffect(() => {
    const tl = gsap.timeline();

    // Enhanced hero entrance with morphing effects
    tl.fromTo(subtitleRef.current,
      { 
        opacity: 0, 
        y: 40,
        filter: 'blur(8px)',
        scale: 0.96
      },
      { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.8, 
        ease: "power4.out",
        delay: 0.8
      }
    )
    .fromTo(buttonsRef.current?.children,
      { 
        opacity: 0, 
        y: 30,
        scale: 0.85,
        filter: 'blur(4px)'
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2, 
        stagger: 0.2, 
        ease: "elastic.out(1, 0.6)" 
      },
      "-=0.8"
    );

    // Enhanced floating elements with elegant 3D transforms
    if (floatingElementsRef.current) {
      const floatingElements = floatingElementsRef.current.querySelectorAll('.floating-element');
      
      gsap.fromTo(floatingElements,
        { 
          opacity: 0, 
          scale: 0.3,
          rotateX: 90,
          z: -200
        },
        { 
          opacity: 0.9, 
          scale: 1,
          rotateX: 0,
          z: 0,
          duration: 2,
          stagger: 0.15,
          ease: "back.out(1.4)",
          delay: 1.5
        }
      );

      // Elegant continuous floating with subtle rotation
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: `+=${8 + index * 2}`,
          x: `+=${3 + index * 0.5}`,
          rotation: `+=${180 + index * 15}`,
          duration: 12 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.6
        });

        // Refined mouse interaction
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            scale: 1.15,
            rotation: '+=30',
            duration: 0.8,
            ease: "back.out(1.4)"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)"
          });
        });
      });
    }

    // Elegant background orbs with morphing
    const backgroundElements = document.querySelectorAll('.bg-gradient-orb');
    backgroundElements.forEach((element, index) => {
      gsap.to(element, {
        rotation: 360,
        scale: "1.08",
        duration: 120 + index * 30,
        repeat: -1,
        ease: "none"
      });

      gsap.to(element, {
        borderRadius: "60% 40% 35% 65% / 55% 35% 65% 45%",
        duration: 20 + index * 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      gsap.to(window, {
        duration: 2.5,
        scrollTo: { y: waitlistSection, offsetY: 0 },
        ease: "power4.inOut"
      });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen bg-gradient-to-br from-rose-50/80 via-white to-violet-50/60 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Elegant Background */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="bg-gradient-orb absolute top-10 left-4 md:left-20 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-rose-200/25 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="bg-gradient-orb absolute bottom-20 right-2 md:right-10 w-56 md:w-96 h-56 md:h-96 bg-gradient-to-r from-violet-200/20 to-purple-300/25 rounded-full blur-3xl"></div>
        <div className="bg-gradient-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-r from-emerald-200/15 to-teal-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Refined Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="floating-element absolute top-20 left-10 opacity-80">
          <div className="w-14 lg:w-18 h-14 lg:h-18 bg-gradient-to-br from-rose-100/95 to-pink-200/90 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-rose-200/60 hover:shadow-rose-300/40 transition-all duration-700">
            <Heart className="w-7 lg:w-9 h-7 lg:h-9 text-rose-600" />
          </div>
        </div>
        
        <div className="floating-element absolute top-32 right-16 opacity-80">
          <div className="w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br from-amber-100/95 to-orange-200/90 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-amber-200/60">
            <Zap className="w-6 lg:w-7 h-6 lg:h-7 text-amber-600" />
          </div>
        </div>
        
        <div className="floating-element absolute bottom-32 left-20 opacity-80">
          <div className="w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-br from-sky-100/95 to-blue-200/90 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-sky-200/60">
            <Sparkles className="w-7 lg:w-8 h-7 lg:h-8 text-sky-600" />
          </div>
        </div>

        <div className="floating-element absolute top-1/3 right-32 opacity-80">
          <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-purple-100/95 to-violet-200/90 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-purple-200/60">
            <Star className="w-5 lg:w-6 h-5 lg:h-6 text-purple-600" />
          </div>
        </div>

        <div className="floating-element absolute bottom-1/4 right-20 opacity-80">
          <div className="w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br from-emerald-100/95 to-green-200/90 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-emerald-200/60">
            <Leaf className="w-6 lg:w-7 h-6 lg:h-7 text-emerald-600" />
          </div>
        </div>

        <div className="floating-element absolute top-3/4 left-40 opacity-80">
          <div className="w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-br from-red-100/95 to-rose-200/90 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl border border-red-200/60">
            <Apple className="w-7 lg:w-8 h-7 lg:h-8 text-red-600" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <div>
          {/* Elegant Badge with refined shimmer */}
          <div className="hero-badge inline-flex items-center bg-gradient-to-r from-rose-100/98 via-white/95 to-violet-100/98 backdrop-blur-xl text-slate-800 px-6 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold mb-8 md:mb-10 shadow-2xl border border-rose-200/70 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 mr-3 md:mr-4 relative z-10 text-rose-500" />
            <span className="relative z-10">🌸 India's First AI-Powered Health Meal Subscription</span>
          </div>
          
          {/* Elegant Title */}
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 md:mb-10 leading-tight tracking-tight">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600">
              Livora
            </span>
          </h1>
          
          {/* Refined Problem Statement */}
          <div className="relative mb-8">
            <p ref={subtitleRef} className="text-xl md:text-3xl lg:text-4xl text-slate-700 mb-6 max-w-4xl mx-auto font-bold leading-relaxed px-4">
              Tired of guessing what to eat for your health goals?
            </p>
          </div>
          
          {/* Elegant Description */}
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-600 mb-14 md:mb-18 max-w-3xl mx-auto font-medium leading-relaxed px-4 opacity-95">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">
              personalized AI meal plans
            </span>{" "}
            +{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-bold">
              curated healthy snacks
            </span>{" "}
            delivered to your doorstep.
          </p>
          
          {/* Refined CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-18 md:mb-22 px-4">
            <div ref={magneticButtonRef}>
              <div ref={glowButtonRef}>
                <Button 
                  onClick={scrollToWaitlist}
                  className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white px-8 md:px-12 py-5 md:py-7 text-xl md:text-2xl rounded-full shadow-2xl border border-rose-400/40 relative overflow-hidden group transition-all duration-1000 hover:shadow-rose-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                  <Heart className="w-6 md:w-7 h-6 md:h-7 mr-3 md:mr-4 relative z-10" />
                  <span className="relative z-10">Join the Waitlist</span>
                  <Sparkles className="w-5 md:w-6 h-5 md:h-6 ml-3 md:ml-4 relative z-10" />
                </Button>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-slate-200/90 bg-white/95 backdrop-blur-xl text-slate-700 px-8 md:px-12 py-5 md:py-7 text-xl md:text-2xl rounded-full hover:bg-slate-50/98 hover:border-slate-300 hover:shadow-2xl transition-all duration-1000 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100/0 via-slate-100/60 to-slate-100/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              <Zap className="w-5 md:w-6 h-5 md:h-6 mr-3 md:mr-4 relative z-10" />
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>

          {/* Elegant Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 text-base md:text-xl text-slate-600 mb-10 md:mb-14 px-4">
            <div className="flex items-center group cursor-pointer">
              <div className="w-4 md:w-5 h-4 md:h-5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mr-3 md:mr-4 shadow-lg group-hover:shadow-emerald-400/60 transition-all duration-700 group-hover:scale-125"></div>
              <span className="font-semibold group-hover:text-emerald-600 transition-colors duration-500">AI-Powered Nutrition</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-4 md:w-5 h-4 md:h-5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mr-3 md:mr-4 shadow-lg group-hover:shadow-sky-400/60 transition-all duration-700 group-hover:scale-125"></div>
              <span className="font-semibold group-hover:text-sky-600 transition-colors duration-500">Doctor Reviewed</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-4 md:w-5 h-4 md:h-5 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mr-3 md:mr-4 shadow-lg group-hover:shadow-violet-400/60 transition-all duration-700 group-hover:scale-125"></div>
              <span className="font-semibold group-hover:text-violet-600 transition-colors duration-500">Fresh Daily Delivery</span>
            </div>
          </div>
        </div>
        
        {/* Elegant Arrow */}
        <div className="cursor-pointer group" onClick={scrollToWaitlist}>
          <ArrowDown className="w-7 md:w-9 h-7 md:h-9 text-rose-500 mx-auto hover:text-rose-600 transition-all duration-700 animate-bounce group-hover:scale-125 group-hover:shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
