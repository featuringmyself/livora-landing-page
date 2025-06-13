
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Gift, Crown, Zap, CheckCircle, Sparkles } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would typically send the email to your backend
    console.log("Waitlist signup:", email);
    
    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you as soon as Livora launches with exclusive early access.",
    });
  };

  return (
    <section id="waitlist" className="py-12 md:py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
      {/* Animated background elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-12 md:w-16 h-12 md:h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-8 md:w-12 h-8 md:h-12 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-10 md:w-14 h-10 md:h-14 bg-white rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 md:mb-6 animate-float">
            <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-white animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 hover:scale-105 transition-transform duration-300">
            Be the First to Experience <span className="text-green-200 animate-pulse">Livora</span>
          </h2>
          
          <p className="text-lg md:text-xl text-green-100 mb-8 md:mb-12 max-w-2xl mx-auto hover:text-white transition-colors duration-300 px-4">
            Join our exclusive waitlist and get early access to India's most intelligent 
            meal planning platform, plus special launch pricing.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-sm md:max-w-md mx-auto hover:shadow-3xl transition-all duration-500 hover-lift animate-scale-in">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="relative group">
                  <Mail className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300 w-4 md:w-5 h-4 md:h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-base md:text-lg p-3 md:p-4 pl-10 md:pl-12 border-2 border-gray-200 rounded-xl focus:border-green-500 hover:border-green-300 transition-all duration-300"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-base md:text-lg py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <Zap className="w-4 md:w-5 h-4 md:h-5 mr-2 group-hover:animate-bounce" />
                  Join the Waitlist
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 ml-2 group-hover:animate-spin" />
                </Button>
              </form>
            ) : (
              <div className="text-center animate-scale-in">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 animate-bounce">
                  <CheckCircle className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">You're In!</h3>
                <p className="text-gray-600 text-sm md:text-base">We'll be in touch soon with exclusive updates.</p>
              </div>
            )}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="text-green-100 group cursor-pointer animate-slide-in-left">
              <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                <Gift className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">50% OFF</div>
              <div className="text-xs md:text-sm group-hover:text-white transition-colors duration-300">Early Bird Pricing</div>
            </div>
            <div className="text-green-100 group cursor-pointer animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                <Crown className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">FIRST</div>
              <div className="text-xs md:text-sm group-hover:text-white transition-colors duration-300">Access to Features</div>
            </div>
            <div className="text-green-100 group cursor-pointer animate-slide-in-right">
              <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">FREE</div>
              <div className="text-xs md:text-sm group-hover:text-white transition-colors duration-300">Nutritionist Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
