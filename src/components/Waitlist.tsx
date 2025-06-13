
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
    <section id="waitlist" className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Experience <span className="text-green-200">Livora</span>
          </h2>
          
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access to India's most intelligent 
            meal planning platform, plus special launch pricing.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-lg p-4 border-2 border-gray-200 rounded-xl focus:border-green-500"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4 rounded-xl shadow-lg hover-scale"
                >
                  Join the Waitlist
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
                <p className="text-gray-600">We'll be in touch soon with exclusive updates.</p>
              </div>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-green-100">
              <div className="text-3xl font-bold text-white mb-2">50% OFF</div>
              <div className="text-sm">Early Bird Pricing</div>
            </div>
            <div className="text-green-100">
              <div className="text-3xl font-bold text-white mb-2">FIRST</div>
              <div className="text-sm">Access to Features</div>
            </div>
            <div className="text-green-100">
              <div className="text-3xl font-bold text-white mb-2">FREE</div>
              <div className="text-sm">Nutritionist Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
