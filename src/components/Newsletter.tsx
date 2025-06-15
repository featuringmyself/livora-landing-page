
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useFadeInUp } from "@/hooks/useGSAP";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const sectionRef = useFadeInUp(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    console.log("Newsletter signup:", email);
    setIsSubscribed(true);
    setEmail("");
    
    toast({
      title: "Successfully subscribed! 📧",
      description: "You'll receive our latest health tips and updates.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div ref={sectionRef}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Updated with <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Health Tips</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get weekly nutrition insights, healthy recipes, and exclusive wellness content 
            delivered straight to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 focus:border-green-400"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">Thanks for subscribing!</span>
              </div>
            </div>
          )}

          <div className="mt-8 text-sm text-gray-400">
            Join 10,000+ health enthusiasts • Unsubscribe anytime • No spam, ever
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
