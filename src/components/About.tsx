
import { Target, Users, Award, Sparkles } from "lucide-react";
import { useFadeInUp, useStaggerAnimation, useMagneticEffect, useHoverGlow } from "@/hooks/useGSAP";

const About = () => {
  const headerRef = useFadeInUp(0);
  const cardsRef = useStaggerAnimation();
  const magneticRef = useMagneticEffect();
  const glowRef = useHoverGlow();

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 to-emerald-50/40 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-green-200/15 to-emerald-300/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/15 to-purple-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-200/10 to-orange-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 md:mb-6 shadow-2xl backdrop-blur-md border border-green-200/60 hover:shadow-green-300/50 transition-all duration-700 hover:scale-110 hover:rotate-12">
            <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why <span className="text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Livora</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Born from the frustration of endless diet confusion and conflicting nutrition advice, 
            Livora combines cutting-edge AI with traditional Indian wellness wisdom.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-xl border border-green-100/80 hover:shadow-2xl hover:shadow-green-100/40 transition-all duration-1000 group cursor-pointer hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-100/30 to-green-100/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl group-hover:shadow-green-200/80 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative z-10">
              <Target className="w-6 md:w-8 h-6 md:h-8 text-green-600 group-hover:text-green-700 transition-colors duration-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-green-600 transition-colors duration-500 relative z-10">Our Mission</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 text-sm md:text-base leading-relaxed relative z-10">
              To make personalized nutrition accessible to every Indian household through the power of AI and local food culture.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-xl border border-blue-100/80 hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-1000 group cursor-pointer hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-100/30 to-blue-100/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl group-hover:shadow-blue-200/80 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative z-10">
              <Users className="w-6 md:w-8 h-6 md:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-500 relative z-10">Our Story</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 text-sm md:text-base leading-relaxed relative z-10">
              Founded by nutrition enthusiasts who believe healthy food should be delicious, convenient, and tailored to your unique needs.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-xl border border-purple-100/80 hover:shadow-2xl hover:shadow-purple-100/40 transition-all duration-1000 group cursor-pointer hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 via-purple-100/30 to-purple-100/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl group-hover:shadow-purple-200/80 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative z-10">
              <Award className="w-6 md:w-8 h-6 md:h-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-500 relative z-10">Our Promise</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 text-sm md:text-base leading-relaxed relative z-10">
              Evidence-based nutrition recommendations that respect your taste preferences, dietary restrictions, and lifestyle.
            </p>
          </div>
        </div>

        <div ref={magneticRef} className="mt-12 md:mt-16 text-center">
          <div ref={glowRef} className="bg-gradient-to-r from-green-600/95 to-emerald-600/95 backdrop-blur-xl text-white p-6 md:p-8 rounded-3xl transition-all duration-1000 group cursor-pointer border border-green-500/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-700 relative z-10">Ready to transform your relationship with food?</h3>
            <p className="text-green-100 text-base md:text-lg group-hover:text-white transition-colors duration-700 relative z-10">
              Join thousands of Indians who are already on their personalized health journey with Livora.
            </p>
            <div className="mt-3 md:mt-4 w-12 md:w-16 h-1 bg-white/40 mx-auto rounded-full group-hover:w-20 md:group-hover:w-24 group-hover:bg-white/80 transition-all duration-1000 relative z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
