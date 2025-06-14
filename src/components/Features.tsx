
import { Brain, Heart, Zap, Shield, Users, Star } from "lucide-react";
import { useFadeInUp, useStaggerAnimation } from "@/hooks/useGSAP";

const Features = () => {
  const headerRef = useFadeInUp(0);
  const featuresRef = useStaggerAnimation();

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
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Livora</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make Livora the most advanced nutrition platform for Indian families.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-green-600 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
