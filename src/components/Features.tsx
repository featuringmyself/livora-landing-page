import { Brain, Heart, Zap, Shield, Users, Star } from "lucide-react";
import { useFadeInUp, useStaggerFromLeft, useTiltEffect, usePulseEffect } from "@/hooks/useGSAP";

const Features = () => {
  const headerRef = useFadeInUp(0);
  const featuresRef = useStaggerFromLeft({ stagger: 0.15 });
  const pulseRef = usePulseEffect(3000);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Nutrition",
      description: "Advanced algorithms analyze your health data to create personalized meal plans that adapt to your changing needs."
    },
    {
      icon: Heart,
      title: "Heart-Healthy Focus",
      description: "Every recommendation is designed to support cardiovascular health while satisfying your taste preferences."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Meals timed and balanced to maintain steady energy levels throughout your day, no more afternoon crashes."
    },
    {
      icon: Shield,
      title: "Allergen Protection",
      description: "Comprehensive allergen tracking ensures your safety while exploring new cuisines and ingredients."
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Create meal plans that work for the whole family, with options for different dietary needs and preferences."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Sourced ingredients and recipes from certified nutritionists and renowned chefs across India."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={pulseRef}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"
        ></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Livora</span>?
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make Livora the most advanced nutrition platform for Indian families.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => {
            const tiltRef = useTiltEffect(0.05);
            
            return (
              <div 
                ref={tiltRef}
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              >
                {/* Hover background effect - reduced opacity */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border - much more subtle */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-3 md:block">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-green-600 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-4 group-hover:text-green-600 transition-colors duration-300 group-hover:translate-x-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Floating particles on hover - smaller and more subtle */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-green-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
