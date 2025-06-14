
import { Target, Users, Award, Sparkles } from "lucide-react";
import { useFadeInUp, useStaggerAnimation } from "@/hooks/useGSAP";

const About = () => {
  const headerRef = useFadeInUp(0);
  const cardsRef = useStaggerAnimation();

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 md:mb-6 shadow-lg">
            <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why <span className="text-gradient">Livora</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Born from the frustration of endless diet confusion and conflicting nutrition advice, 
            Livora combines cutting-edge AI with traditional Indian wellness wisdom.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50/50 to-emerald-50/50 backdrop-blur-sm border border-green-100/50 hover:shadow-xl hover:shadow-green-100/20 transition-all duration-700 group cursor-pointer">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-green-200/50 group-hover:scale-110 transition-all duration-500">
              <Target className="w-6 md:w-8 h-6 md:h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-green-600 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
              To make personalized nutrition accessible to every Indian household through the power of AI and local food culture.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 backdrop-blur-sm border border-blue-100/50 hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-700 group cursor-pointer">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-blue-200/50 group-hover:scale-110 transition-all duration-500">
              <Users className="w-6 md:w-8 h-6 md:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Story</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
              Founded by nutrition enthusiasts who believe healthy food should be delicious, convenient, and tailored to your unique needs.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-50/50 to-pink-50/50 backdrop-blur-sm border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-700 group cursor-pointer">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-purple-200/50 group-hover:scale-110 transition-all duration-500">
              <Award className="w-6 md:w-8 h-6 md:h-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-300">Our Promise</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
              Evidence-based nutrition recommendations that respect your taste preferences, dietary restrictions, and lifestyle.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm text-white p-6 md:p-8 rounded-2xl hover:shadow-2xl hover:shadow-green-300/20 transition-all duration-700 group cursor-pointer border border-green-500/20">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-500">Ready to transform your relationship with food?</h3>
          <p className="text-green-100 text-base md:text-lg group-hover:text-white transition-colors duration-500">
            Join thousands of Indians who are already on their personalized health journey with Livora.
          </p>
          <div className="mt-3 md:mt-4 w-12 md:w-16 h-1 bg-white/30 mx-auto rounded-full group-hover:w-20 md:group-hover:w-24 group-hover:bg-white/60 transition-all duration-700"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
