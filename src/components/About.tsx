import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { useFadeInUp } from "@/hooks/useGSAP";

const About = () => {
  const headerRef = useFadeInUp(0);
  const contentRef = useFadeInUp(0.2);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-white to-emerald-50/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-200/10 to-emerald-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/10 to-purple-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Revolutionizing healthy eating with{" "}
                <span className="text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  AI-powered
                </span>{" "}
                personalized meal plans
              </h3>
              
              <p className="md:text-xl text-base text-gray-600 leading-relaxed">
                We combine cutting-edge AI with expert nutritionists to create customized meal plans that are both nutritious and delicious.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-sm md:text-lg text-gray-700">
                    Fresh, dietitian-approved meals delivered to your doorstep
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-sm md:text-lg text-gray-700">
                    Flexible subscriptions with full control - pause, modify, or cancel anytime
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-sm md:text-lg text-gray-700">
                    Customize meals, swap ingredients, and track live macros
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="md:pt-6 pt-2 pb-6">
              <button 
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white md:px-8 px-4 md:py-5 py-3 rounded-2xl font-semibold md:text-xl text-sm shadow-2xl hover:shadow-green-200/50 hover:scale-105 transition-all duration-300 group"
              >
                <span>Get Ready for the Health Revolution</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-green-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-2xl"></div>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-xl border-4 border-white relative">
                    <Heart className="w-16 h-16 text-green-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900">Personalized Nutrition Made Simple</h4>
                  <p className="text-gray-600 leading-relaxed">
                    AI-powered recommendations tailored to your individual goals, preferences, and lifestyle.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
