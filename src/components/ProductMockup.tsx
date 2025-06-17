import { Smartphone, Zap, Leaf, CheckCircle } from "lucide-react";
import { useFadeInUp, useSlideInLeft, useSlideInRight, useStaggerAnimation } from "@/hooks/useGSAP";

const ProductMockup = () => {
  const headerRef = useFadeInUp(0);
  const leftContentRef = useSlideInLeft(0.3);
  const rightContentRef = useSlideInRight(0.6);
  const featuresRef = useStaggerAnimation({ stagger: 0.2 });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div ref={leftContentRef} className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 md:mb-6 animate-float">
              <Smartphone className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 hover:scale-105 transition-transform duration-300">
              Your AI Nutritionist, <span className="text-gradient">Always Ready</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 hover:text-gray-700 transition-colors duration-300">
              Our intelligent platform learns your preferences, tracks your goals, and delivers 
              personalized meal recommendations that evolve with your health journey.
            </p>
            
            <div ref={featuresRef} className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4 group cursor-pointer">
                <div className="bg-green-100 rounded-full p-2 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ">
                  <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-green-600" />
                </div>
                <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300 text-sm md:text-base">AI-Powered Personalization</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">Every meal plan is unique to your body, goals, and taste preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4 group cursor-pointer">
                <div className="bg-green-100 rounded-full p-2 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 " style={{ animationDelay: '0.5s' }}>
                  <Leaf className="w-3 md:w-4 h-3 md:h-4 text-green-600" />
                </div>
                <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300 text-sm md:text-base">Fresh, Local Ingredients</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">Sourced from trusted local farmers and suppliers across India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4 group cursor-pointer">
                <div className="bg-green-100 rounded-full p-2 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 " style={{ animationDelay: '1s' }}>
                  <Zap className="w-3 md:w-4 h-3 md:h-4 text-green-600" />
                </div>
                <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300 text-sm md:text-base">Flexible Delivery</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">Weekly plans that adapt to your schedule and dietary changes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={rightContentRef} className="relative order-1 lg:order-2 flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto hover:shadow-3xl transition-all duration-500 hover-lift group">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full mb-4 md:mb-6 group-hover:h-3 transition-all duration-300"></div>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-gray-100 h-12 md:h-16 rounded-xl flex items-center px-3 md:px-4 hover:bg-green-50 transition-colors duration-300 group cursor-pointer">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-green-600 rounded-full mr-2 md:mr-3 animate-pulse group-hover:animate-bounce"></div>
                  <div>
                    <div className="h-2 md:h-3 bg-gray-300 rounded mb-1 w-20 md:w-24 shimmer-bg"></div>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded w-12 md:w-16"></div>
                  </div>
                </div>
                <div className="bg-green-50 h-12 md:h-16 rounded-xl flex items-center px-3 md:px-4 hover:bg-green-100 transition-colors duration-300 group cursor-pointer animate-glow">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-emerald-500 rounded-full mr-2 md:mr-3 animate-pulse group-hover:animate-spin"></div>
                  <div>
                    <div className="h-2 md:h-3 bg-green-300 rounded mb-1 w-24 md:w-28"></div>
                    <div className="h-1.5 md:h-2 bg-green-200 rounded w-16 md:w-20"></div>
                  </div>
                </div>
                <div className="bg-gray-100 h-12 md:h-16 rounded-xl flex items-center px-3 md:px-4 hover:bg-blue-50 transition-colors duration-300 group cursor-pointer">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-blue-500 rounded-full mr-2 md:mr-3 animate-pulse group-hover:animate-bounce"></div>
                  <div>
                    <div className="h-2 md:h-3 bg-gray-300 rounded mb-1 w-16 md:w-20"></div>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded w-10 md:w-14"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-6 bg-gradient-to-r from-green-600 to-emerald-600 h-10 md:h-12 rounded-xl hover:h-12 md:hover:h-14 transition-all duration-300 cursor-pointer group-hover:shadow-lg"></div>
            </div>
            
            {/* Enhanced floating elements - Hidden on mobile */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white rounded-full p-2 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover-lift cursor-pointer hidden sm:block">
              <div className="w-4 md:w-8 h-4 md:h-8 bg-green-600 rounded-full animate-pulse hover:animate-spin transition-all duration-300"></div>
            </div>
            <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover-lift cursor-pointer hidden sm:block" style={{ animationDelay: '1s' }}>
              <div className="w-3 md:w-6 h-3 md:h-6 bg-emerald-500 rounded-full animate-pulse hover:animate-bounce transition-all duration-300"></div>
            </div>
            <div className="absolute top-1/2 -left-4 md:-left-8 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover-lift cursor-pointer hidden sm:block" style={{ animationDelay: '2s' }}>
              <div className="w-2 md:w-4 h-2 md:h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockup;
