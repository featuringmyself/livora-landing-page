
import { Target, Users, Award, Sparkles } from "lucide-react";
import { useFadeInUp, useStaggerAnimation, useMagneticEffect } from "@/hooks/useGSAP";

const About = () => {
  const headerRef = useFadeInUp(0);
  const cardsRef = useStaggerAnimation();
  const magneticRef = useMagneticEffect();

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-green-200/10 to-emerald-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/10 to-purple-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 md:mb-6 shadow-2xl backdrop-blur-sm border border-green-200/50">
            <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why <span className="text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Livora</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Born from the frustration of endless diet confusion and conflicting nutrition advice, 
            Livora combines cutting-edge AI with traditional Indian wellness wisdom.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-green-50/60 to-emerald-50/60 backdrop-blur-md border border-green-100/60 hover:shadow-2xl hover:shadow-green-100/30 transition-all duration-700 group cursor-pointer hover:-translate-y-2">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl group-hover:shadow-green-200/60 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Target className="w-6 md:w-8 h-6 md:h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-green-600 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
              To make personalized nutrition accessible to every Indian household through the power of AI and local food culture.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50/60 to-indigo-50/60 backdrop-blur-md border border-blue-100/60 hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-700 group cursor-pointer hover:-translate-y-2">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl group-hover:shadow-blue-200/60 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Users className="w-6 md:w-8 h-6 md:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Story</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
              Founded by nutrition enthusiasts who believe healthy food should be delicious, convenient, and tailored to your unique needs.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-purple-50/60 to-pink-50/60 backdrop-blur-md border border-purple-100/60 hover:shadow-2xl hover:shadow-purple-100/30 transition-all duration-700 group cursor-pointer hover:-translate-y-2">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl group-hover:shadow-purple-200/60 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Award className="w-6 md:w-8 h-6 md:h-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-300">Our Promise</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
              Evidence-based nutrition recommendations that respect your taste preferences, dietary restrictions, and lifestyle.
            </p>
          </div>
        </div>

        <div ref={magneticRef} className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600/95 to-emerald-600/95 backdrop-blur-md text-white p-6 md:p-8 rounded-3xl hover:shadow-2xl hover:shadow-green-300/30 transition-all duration-700 group cursor-pointer border border-green-500/30 hover:-translate-y-1">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-500">Ready to transform your relationship with food?</h3>
            <p className="text-green-100 text-base md:text-lg group-hover:text-white transition-colors duration-500">
              Join thousands of Indians who are already on their personalized health journey with Livora.
            </p>
            <div className="mt-3 md:mt-4 w-12 md:w-16 h-1 bg-white/30 mx-auto rounded-full group-hover:w-20 md:group-hover:w-24 group-hover:bg-white/60 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
