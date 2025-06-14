
import { Target, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 md:mb-6 hover:animate-float">
            <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-green-600 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 hover:scale-105 transition-transform duration-300">
            Why <span className="text-gradient">Livora</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300 px-4">
            Born from the frustration of endless diet confusion and conflicting nutrition advice, 
            Livora combines cutting-edge AI with traditional Indian wellness wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-500 group cursor-pointer animate-slide-in-left hover-glow">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover:animate-float">
              <Target className="w-6 md:w-8 h-6 md:h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-green-600 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
              To make personalized nutrition accessible to every Indian household through the power of AI and local food culture.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-500 group cursor-pointer animate-scale-in hover-glow" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 md:w-16 h-12 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover:animate-float" style={{ animationDelay: '1s' }}>
              <Users className="w-6 md:w-8 h-6 md:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Story</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
              Founded by nutrition enthusiasts who believe healthy food should be delicious, convenient, and tailored to your unique needs.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-500 group cursor-pointer animate-slide-in-right hover-glow">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover:animate-float" style={{ animationDelay: '2s' }}>
              <Award className="w-6 md:w-8 h-6 md:h-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-300">Our Promise</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
              Evidence-based nutrition recommendations that respect your taste preferences, dietary restrictions, and lifestyle.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 md:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-fade-in hover-glow">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">Ready to transform your relationship with food?</h3>
          <p className="text-green-100 text-base md:text-lg group-hover:text-white transition-colors duration-300">
            Join thousands of Indians who are already on their personalized health journey with Livora.
          </p>
          <div className="mt-3 md:mt-4 w-12 md:w-16 h-1 bg-white/30 mx-auto rounded-full group-hover:w-20 md:group-hover:w-24 group-hover:bg-white/50 transition-all duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
