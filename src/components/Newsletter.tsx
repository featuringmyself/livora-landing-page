
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
      title: "Successfully subscribed! 💌",
      description: "You'll receive our latest health tips and updates.",
    });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-violet-900 relative overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div ref={sectionRef}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full mb-8 shadow-2xl">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Stay Updated with <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">Health Tips</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed">
            Get weekly nutrition insights, healthy recipes, and exclusive wellness content 
            delivered straight to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-slate-300 focus:border-rose-400 rounded-full px-6 py-4 text-lg"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-rose-500 to-violet-500 hover:from-rose-600 hover:to-violet-600 text-white px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-700 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-4 text-rose-400 bg-white/10 backdrop-blur-xl rounded-full px-8 py-6">
                <CheckCircle className="w-8 h-8" />
                <span className="text-xl font-semibold">Thanks for subscribing!</span>
              </div>
            </div>
          )}

          <div className="mt-10 text-base text-slate-400">
            Join 10,000+ health enthusiasts • Unsubscribe anytime • No spam, ever
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
