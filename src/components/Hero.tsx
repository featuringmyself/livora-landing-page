
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            🎉 India's First AI-Powered Health Meal Subscription
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Meet <span className="text-green-600">Livora</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Tired of guessing what to eat for your health goals?
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover personalized AI meal plans + curated healthy snacks delivered to your doorstep. 
            Because your health deserves more than guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover-scale"
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              className="border-green-200 text-green-700 px-8 py-4 text-lg rounded-xl hover:bg-green-50"
            >
              Learn More
            </Button>
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
