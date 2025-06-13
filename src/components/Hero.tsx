
import { ArrowDown, Sparkles, Heart, Zap, Star, Leaf, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-r from-green-200/30 to-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-100 hover:scale-110 transition-transform">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-green-200/50">
            <Heart className="w-8 h-8 text-green-600 animate-pulse" />
          </div>
        </div>
        
        <div className="absolute top-32 right-16 animate-bounce delay-300 hover:scale-110 transition-transform">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-orange-200/50">
            <Zap className="w-6 h-6 text-orange-600 animate-pulse" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-20 animate-bounce delay-500 hover:scale-110 transition-transform">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-blue-200/50">
            <Sparkles className="w-7 h-7 text-blue-600 animate-pulse" />
          </div>
        </div>

        <div className="absolute top-1/3 right-32 animate-bounce delay-700 hover:scale-110 transition-transform">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-purple-200/50">
            <Star className="w-5 h-5 text-purple-600 animate-pulse" />
          </div>
        </div>

        <div className="absolute bottom-1/4 right-20 animate-bounce delay-900 hover:scale-110 transition-transform">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-emerald-200/50">
            <Leaf className="w-6 h-6 text-emerald-600 animate-pulse" />
          </div>
        </div>

        <div className="absolute top-3/4 left-32 animate-bounce delay-1100 hover:scale-110 transition-transform">
          <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-red-200/50">
            <Apple className="w-7 h-7 text-red-600 animate-pulse" />
          </div>
        </div>
        
        {/* Floating Food Emojis with enhanced animation */}
        <div className="absolute top-40 right-32 text-5xl animate-bounce hover:scale-125 transition-transform cursor-pointer">🥗</div>
        <div className="absolute bottom-40 right-20 text-4xl animate-bounce delay-200 hover:scale-125 transition-transform cursor-pointer">🍎</div>
        <div className="absolute top-60 left-32 text-4xl animate-bounce delay-400 hover:scale-125 transition-transform cursor-pointer">🥑</div>
        <div className="absolute bottom-60 left-40 text-3xl animate-bounce delay-600 hover:scale-125 transition-transform cursor-pointer">🥕</div>
        <div className="absolute top-1/2 right-10 text-3xl animate-bounce delay-800 hover:scale-125 transition-transform cursor-pointer">🫐</div>
        <div className="absolute bottom-1/3 left-10 text-4xl animate-bounce delay-1000 hover:scale-125 transition-transform cursor-pointer">🥦</div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-green-400/30 rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Badge with Gradient */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 via-emerald-50 to-green-100 text-green-800 px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl border-2 border-green-200/50 backdrop-blur-sm hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 mr-3 animate-spin" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🎉 India's First AI-Powered Health Meal Subscription
            </span>
          </div>
          
          {/* Enhanced Title with Multiple Gradients */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
            Meet{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 animate-pulse">
                Livora
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-30 animate-pulse"></div>
            </span>
          </h1>
          
          {/* Problem Statement with Animation */}
          <div className="relative mb-6 group">
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto font-bold leading-relaxed">
              Tired of guessing what to eat for your health goals?
            </p>
            <div className="absolute -top-3 -right-8 md:-right-16 rotate-12 group-hover:rotate-6 transition-transform">
              <div className="bg-gradient-to-r from-yellow-300 to-orange-300 text-yellow-900 px-4 py-2 rounded-xl text-sm font-black shadow-xl border-2 border-yellow-400/50">
                No More Guesswork! 🎯
              </div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold">
              personalized AI meal plans
            </span>{" "}
            +{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
              curated healthy snacks
            </span>{" "}
            delivered to your doorstep. Because your health deserves more than guesswork.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-green-300/50 transform transition-all duration-300 group border-2 border-green-400/30"
            >
              <Heart className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Join the Waitlist
              <Sparkles className="w-5 h-5 ml-3 group-hover:animate-spin" />
            </Button>
            <Button 
              variant="outline" 
              className="border-3 border-green-300 bg-white/80 backdrop-blur-sm text-green-700 px-10 py-6 text-xl rounded-2xl hover:bg-green-50 hover:border-green-400 hover:shadow-xl transition-all duration-300 group"
            >
              <Zap className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Learn More
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-600 mb-12">
            <div className="flex items-center group hover:scale-105 transition-transform">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-3 animate-pulse shadow-lg"></div>
              <span className="font-semibold">AI-Powered Nutrition</span>
            </div>
            <div className="flex items-center group hover:scale-105 transition-transform">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 animate-pulse shadow-lg"></div>
              <span className="font-semibold">Doctor Reviewed</span>
            </div>
            <div className="flex items-center group hover:scale-105 transition-transform">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-3 animate-pulse shadow-lg"></div>
              <span className="font-semibold">Fresh Daily Delivery</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Arrow */}
        <div className="animate-bounce group cursor-pointer" onClick={scrollToWaitlist}>
          <ArrowDown className="w-8 h-8 text-green-600 mx-auto group-hover:text-green-700 transition-colors shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
