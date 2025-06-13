
import { Smartphone, Zap, Leaf, CheckCircle } from "lucide-react";

const ProductMockup = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 animate-float">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
              Your AI Nutritionist, <span className="text-gradient">Always Ready</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
              Our intelligent platform learns your preferences, tracks your goals, and delivers 
              personalized meal recommendations that evolve with your health journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-green-100 rounded-full p-2 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">AI-Powered Personalization</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Every meal plan is unique to your body, goals, and taste preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-green-100 rounded-full p-2 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Leaf className="w-4 h-4 text-green-600" />
                </div>
                <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">Fresh, Local Ingredients</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Sourced from trusted local farmers and suppliers across India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-green-100 rounded-full p-2 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">Flexible Delivery</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Weekly plans that adapt to your schedule and dietary changes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto hover:shadow-3xl transition-all duration-500 hover-lift group">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full mb-6 group-hover:h-3 transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="bg-gray-100 h-16 rounded-xl flex items-center px-4 hover:bg-green-50 transition-colors duration-300 group cursor-pointer">
                  <div className="w-8 h-8 bg-green-600 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded mb-1 w-24 shimmer-bg"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="bg-green-50 h-16 rounded-xl flex items-center px-4 hover:bg-green-100 transition-colors duration-300 group cursor-pointer animate-glow">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full mr-3 animate-pulse group-hover:animate-spin"></div>
                  <div>
                    <div className="h-3 bg-green-300 rounded mb-1 w-28"></div>
                    <div className="h-2 bg-green-200 rounded w-20"></div>
                  </div>
                </div>
                <div className="bg-gray-100 h-16 rounded-xl flex items-center px-4 hover:bg-blue-50 transition-colors duration-300 group cursor-pointer">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded mb-1 w-20"></div>
                    <div className="h-2 bg-gray-200 rounded w-14"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 h-12 rounded-xl hover:h-14 transition-all duration-300 cursor-pointer group-hover:shadow-lg"></div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover-lift cursor-pointer">
              <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse hover:animate-spin transition-all duration-300"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover-lift cursor-pointer" style={{ animationDelay: '1s' }}>
              <div className="w-6 h-6 bg-emerald-500 rounded-full animate-pulse hover:animate-bounce transition-all duration-300"></div>
            </div>
            <div className="absolute top-1/2 -left-8 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover-lift cursor-pointer" style={{ animationDelay: '2s' }}>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockup;
