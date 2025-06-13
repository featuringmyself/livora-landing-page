
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
    <section id="waitlist" className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-14 h-14 bg-white rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-float">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
            Be the First to Experience <span className="text-green-200 animate-pulse">Livora</span>
          </h2>
          
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Join our exclusive waitlist and get early access to India's most intelligent 
            meal planning platform, plus special launch pricing.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto hover:shadow-3xl transition-all duration-500 hover-lift animate-scale-in">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-lg p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-green-500 hover:border-green-300 transition-all duration-300"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Join the Waitlist
                  <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
                </Button>
              </form>
            ) : (
              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
                <p className="text-gray-600">We'll be in touch soon with exclusive updates.</p>
              </div>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-green-100 group cursor-pointer animate-slide-in-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">50% OFF</div>
              <div className="text-sm group-hover:text-white transition-colors duration-300">Early Bird Pricing</div>
            </div>
            <div className="text-green-100 group cursor-pointer animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">FIRST</div>
              <div className="text-sm group-hover:text-white transition-colors duration-300">Access to Features</div>
            </div>
            <div className="text-green-100 group cursor-pointer animate-slide-in-right">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">FREE</div>
              <div className="text-sm group-hover:text-white transition-colors duration-300">Nutritionist Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
