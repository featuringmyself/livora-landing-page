import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Gift, Crown, Zap, CheckCircle, Sparkles, Bell, Star } from "lucide-react";

const MemoizedEmailInput = React.memo(function MemoizedEmailInput({ value, onChange }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative group">
      <span id="mail-icon-anchor" className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"></span>
      <Input
        type="email"
        placeholder="Enter your email address"
        value={value}
        onChange={onChange}
        className="w-full text-lg p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-green-500 hover:border-green-300 transition-all duration-300 bg-white/90"
        required
      />
    </div>
  );
});

const WaitlistAnimatedSection = React.memo(function WaitlistAnimatedSection({
  isSubmitted,
  email,
  setEmail,
  handleSubmit
}: {
  isSubmitted: boolean,
  email: string,
  setEmail: (email: string) => void,
  handleSubmit: (e: React.FormEvent) => void
}) {
  return (
    <div>
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
        <Bell className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
        Join the <span className="text-green-200">Livora</span> Revolution
      </h2>
      <p className="text-sm md:text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
        Be among the first to experience India's most intelligent meal planning platform. 
        Get early access + weekly health tips delivered straight to your inbox.
      </p>
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl max-w-lg mx-auto mb-12 hover:shadow-3xl transition-all duration-500">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-gray-700 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">Join 10,000+ health enthusiasts</span>
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
            </div>
            <MemoizedEmailInput value={email} onChange={e => setEmail(e.target.value)} />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Sparkles className="w-5 h-5 mr-2" />
              Get Early Access + Health Tips
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </form>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome to Livora! 🎉</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              You're all set! Check your email for a welcome message with exclusive early access details.
            </p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center group cursor-pointer">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300  shadow-lg">
            <Gift className="w-7 h-7 text-white" />
          </div>
          <div className="text-xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">50% OFF</div>
          <div className="text-sm md:text-lg leading-tight text-green-200 group-hover:text-white transition-colors duration-300">Early Bird Pricing</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300  shadow-lg" style={{ animationDelay: '0.5s' }}>
            <Crown className="w-7 h-7 text-white" />
          </div>
          <div className="text-md md:text-xl leading-tight md:leading-normal font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">Special Access</div>
          <div className="text-sm md:text-lg leading-tight md:leading-normal text-green-200 group-hover:text-white transition-colors duration-300">Before Public Launch</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300  shadow-lg" style={{ animationDelay: '1s' }}>
            <Mail className="w-7 h-7 text-white" />
          </div>
          <div className="text-lg md:text-xl leading-tight md:leading-normal font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">Weekly Tips</div>
          <div className="text-green-200 group-hover:text-white text-sm md:text-lg leading-tight md:leading-normal transition-colors duration-300">Expert Health Content</div>
        </div>
      </div>
    </div>
  );
});

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Waitlist signup:", email);
    setIsSubmitted(true);
    setEmail("");
    toast({
      title: "Welcome to Livora! 🎉",
      description: "You'll get early access + exclusive health tips delivered to your inbox.",
    });
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-14 h-14 bg-white rounded-full" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-white rounded-full" style={{ animationDelay: '1.5s' }}></div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <WaitlistAnimatedSection
          isSubmitted={isSubmitted}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default Waitlist;
