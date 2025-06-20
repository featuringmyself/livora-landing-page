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
        y: 30,
        filter: 'blur(10px)',
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.8
      }
    )
    .fromTo(buttonsRef.current?.children,
      { 
        opacity: 0, 
        y: 25,
        scale: 0.8,
        filter: 'blur(5px)'
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1, 
        stagger: 0.2, 
        ease: "elastic.out(1, 0.5)" 
      },
      "-=0.8"
    );

    // Enhanced floating elements with 3D transforms
    if (floatingElementsRef.current) {
      const floatingElements = floatingElementsRef.current.querySelectorAll('.floating-element');
      
      gsap.fromTo(floatingElements,
        { 
          opacity: 0, 
          scale: 0.5,
          rotateX: 90,
          z: -100,
          filter: 'blur(10px)'
        },
        { 
          opacity: 0.8, 
          scale: 1,
          rotateX: 0,
          z: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 1.2
        }
      );

      // Advanced continuous floating with rotation
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: `+=${15 + index * 4}`,
          x: `+=${8 + index * 2}`,
          rotation: `+=${360 + index * 45}`,
          duration: 10 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });

        // Mouse interaction
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            scale: 1.4,
            rotation: '+=90',
            filter: 'blur(0px)',
            duration: 0.8,
            ease: "back.out(1.7)"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: "back.out(1.7)"
          });
        });
      });
    }

    // Background orbs with morphing animation
    const backgroundElements = document.querySelectorAll('.bg-gradient-orb');
    backgroundElements.forEach((element, index) => {
      gsap.to(element, {
        rotation: 360,
        scale: "1.2",
        duration: 60 + index * 30,
        repeat: -1,
        ease: "none"
      });

      gsap.to(element, {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        duration: 20 + index * 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Add floating motion to background orbs
      gsap.to(element, {
        y: `+=${50 + index * 20}`,
        x: `+=${30 + index * 15}`,
        duration: 15 + index * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 2
      });
    });

    // Text shimmer effect
    const badge = document.querySelector('.hero-badge');
    if (badge) {
      gsap.to(badge, {
        backgroundPosition: "200% center",
        duration: 3,
        repeat: -1,
        ease: "none"
      });
    }

    // Enhanced title animation with character reveal
    if (titleRef.current) {
      const titleText = titleRef.current.textContent;
      titleRef.current.innerHTML = '';
      
      // Create character spans
      const chars = titleText?.split('').map(char => 
        char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
      ).join('');
      
      titleRef.current.innerHTML = chars || '';
      
      const titleChars = titleRef.current.querySelectorAll('.char');
      
      gsap.fromTo(titleChars,
        { 
          opacity: 0, 
          y: 50,
          rotationX: 90,
          scale: 0.5
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.03,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );
    }

    // Enhanced button hover animations
    const buttons = buttonsRef.current?.querySelectorAll('button');
    buttons?.forEach((button, index) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Trust indicators animation
    const trustIndicators = document.querySelectorAll('.flex.items-center.group');
    gsap.fromTo(trustIndicators,
      { 
        opacity: 0, 
        x: -20,
        scale: 0.9
      },
      { 
        opacity: 1, 
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 2
      }
    );

    // Arrow bounce animation
    const arrow = document.querySelector('.animate-bounce');
    if (arrow) {
      gsap.to(arrow, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2.5
      });
    }

    return () => {
      // Cleanup animations
      tl.kill();
      gsap.killTweensOf(floatingElementsRef.current?.querySelectorAll('.floating-element'));
      gsap.killTweensOf(backgroundElements);
      gsap.killTweensOf(titleRef.current?.querySelectorAll('.char'));
      gsap.killTweensOf(trustIndicators);
      gsap.killTweensOf(arrow);
    };
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Parallax Background */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="bg-gradient-orb absolute top-10 left-4 md:left-20 w-32 md:w-72 h-32 md:h-72 bg-gradient-to-r from-green-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="bg-gradient-orb absolute bottom-20 right-2 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-200/25 to-purple-300/25 rounded-full blur-3xl"></div>
        <div className="bg-gradient-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="floating-element absolute top-20 left-10 opacity-70">
          <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-green-100/90 to-green-200/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-green-200/50 hover:shadow-green-300/50 transition-all duration-500">
            <Heart className="w-6 lg:w-8 h-6 lg:h-8 text-green-600" />
          </div>
        </div>
        
        <div className="floating-element absolute top-32 right-16 opacity-70">
          <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-orange-100/90 to-orange-200/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-orange-200/50">
            <Zap className="w-5 lg:w-6 h-5 lg:h-6 text-orange-600" />
          </div>
        </div>
        
        <div className="floating-element absolute bottom-32 left-20 opacity-70">
          <div className="w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br from-blue-100/90 to-blue-200/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-blue-200/50">
            <Sparkles className="w-6 lg:w-7 h-6 lg:h-7 text-blue-600" />
          </div>
        </div>

        <div className="floating-element absolute top-1/3 right-32 opacity-70">
          <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-br from-purple-100/90 to-purple-200/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-purple-200/50">
            <Star className="w-4 lg:w-5 h-4 lg:h-5 text-purple-600" />
          </div>
        </div>

        <div className="floating-element absolute bottom-1/4 right-20 opacity-70">
          <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-emerald-100/90 to-emerald-200/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-emerald-200/50">
            <Leaf className="w-5 lg:w-6 h-5 lg:h-6 text-emerald-600" />
          </div>
        </div>

        <div className="floating-element absolute top-3/4 left-40 opacity-70">
          <div className="w-12 lg:w-14 h-12 lg:h-14 bg-gradient-to-br from-red-100/90 to-red-200/90 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-red-200/50">
            <Apple className="w-6 lg:w-7 h-6 lg:h-7 text-red-600" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <div>
          {/* Enhanced Badge with shimmer */}
          <div className="hero-badge inline-flex items-center bg-gradient-to-r from-green-100/95 via-emerald-50/95 to-green-100/95 backdrop-blur-md text-green-800 px-4 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-2xl border border-green-200/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 relative z-10" />
            <span className="relative z-10">🎉 India's First AI-Powered Health Meal Subscription</span>
          </div>
          
          {/* Title with text reveal */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-green-600">
              Livora
            </span>
          </h1>
          
          {/* Problem Statement */}
          <div className="relative mb-6">
            <p ref={subtitleRef} className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto font-bold leading-relaxed px-4">
              Tired of guessing what to eat for your health goals?
            </p>
          </div>
          
          {/* Description */}
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed px-4 opacity-90">
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
            <div ref={magneticButtonRef}>
              <div ref={glowButtonRef}>
                <Button 
                  onClick={scrollToWaitlist}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl rounded-2xl shadow-2xl border border-green-400/30 relative overflow-hidden group transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Heart className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 relative z-10" />
                  <span className="relative z-10">Join the Waitlist</span>
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3 relative z-10" />
                </Button>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-green-200/90 bg-white/90 backdrop-blur-md text-green-700 px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl rounded-2xl hover:bg-green-50/95 hover:border-green-300 hover:shadow-2xl transition-all duration-700 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-100/50 to-green-100/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Zap className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 relative z-10" />
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 md:gap-8 text-sm md:text-lg text-gray-600 mb-8 md:mb-12 px-4">
            <div className="flex items-center group cursor-pointer">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2 md:mr-3 shadow-lg group-hover:shadow-green-400/50 transition-all duration-500 group-hover:scale-125"></div>
              <span className="font-semibold group-hover:text-green-600 transition-colors duration-300">AI-Powered Nutrition</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-2 md:mr-3 shadow-lg group-hover:shadow-blue-400/50 transition-all duration-500 group-hover:scale-125"></div>
              <span className="font-semibold group-hover:text-blue-600 transition-colors duration-300">Doctor Reviewed</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-2 md:mr-3 shadow-lg group-hover:shadow-purple-400/50 transition-all duration-500 group-hover:scale-125"></div>
              <span className="font-semibold group-hover:text-purple-600 transition-colors duration-300">Fresh Daily Delivery</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Arrow */}
        <div className="cursor-pointer group" onClick={scrollToWaitlist}>
          <ArrowDown className="w-6 md:w-8 h-6 md:h-8 text-green-600 mx-auto hover:text-green-700 transition-all duration-500 animate-bounce group-hover:scale-125 group-hover:shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
