
import { ArrowDown, Sparkles, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-bounce delay-300">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-orange-600" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-7 h-7 text-blue-600" />
          </div>
        </div>
        
        {/* Floating Food Emojis */}
        <div className="absolute top-40 right-32 text-4xl animate-pulse">🥗</div>
        <div className="absolute bottom-40 right-20 text-3xl animate-pulse delay-200">🍎</div>
        <div className="absolute top-60 left-32 text-3xl animate-pulse delay-400">🥑</div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-green-200">
            <Sparkles className="w-4 h-4 mr-2" />
            🎉 India's First AI-Powered Health Meal Subscription
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-pulse">Livora</span>
          </h1>
          
          <div className="relative mb-4">
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-medium">
              Tired of guessing what to eat for your health goals?
            </p>
            <div className="absolute -top-2 -right-4 md:right-20 rotate-12">
              <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                No More Guesswork! 🎯
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover personalized AI meal plans + curated healthy snacks delivered to your doorstep. 
            Because your health deserves more than guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover-scale transform transition-all duration-300 group"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-green-200 text-green-700 px-8 py-4 text-lg rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              AI-Powered Nutrition
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Doctor Reviewed
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              Fresh Daily Delivery
            </div>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-green-600 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
