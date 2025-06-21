import { useState } from "react";
import { ChevronDown, HelpCircle, Plus, Minus } from "lucide-react";
import { useFadeInUp, useStaggerAnimation, useTiltEffect, usePulseEffect } from "@/hooks/useGSAP";

const FAQ = () => {
  const headerRef = useFadeInUp(0);
  const faqRef = useStaggerAnimation();
  const pulseRef = usePulseEffect(3000);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Livora create personalized meal plans?",
      answer: "Livora uses advanced AI algorithms that analyze your health goals, dietary preferences, allergies, and lifestyle to create customized meal plans. Our system continuously learns from your feedback to improve recommendations."
    },
    {
      question: "Can I use Livora if I have specific dietary restrictions?",
      answer: "Absolutely! Livora supports various dietary restrictions including vegetarian, vegan, gluten-free, diabetes-friendly, and many others. Simply specify your requirements during setup."
    },
    {
      question: "How often are meal plans updated?",
      answer: "Your meal plans are dynamically updated based on your preferences, seasonal availability, and health progress. You can request new plans anytime or let our AI automatically refresh them weekly."
    },
    {
      question: "Is Livora suitable for families?",
      answer: "Yes! Livora can create meal plans for entire families, accommodating different dietary needs, age groups, and preferences while ensuring everyone enjoys healthy, delicious meals together."
    },
    {
      question: "Do you provide grocery lists and cooking instructions?",
      answer: "Each meal plan comes with detailed grocery lists, step-by-step cooking instructions, and nutritional information. We also provide ingredient substitutions and cooking tips."
    },
    {
      question: "What makes Livora different from other meal planning apps?",
      answer: "Livora combines AI technology with traditional Indian nutrition wisdom, offers extensive local cuisine options, and provides personalized recommendations based on Indian dietary patterns and preferences."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={pulseRef}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"
        ></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">Questions</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 md:max-w-2xl max-w-[80%] mx-auto">
            Everything you need to know about Livora and how it works for your health journey.
          </p>
        </div>

        <div ref={faqRef} className="space-y-3">
          {faqs.map((faq, index) => {
            const FAQItem = () => {
              const tiltRef = useTiltEffect(0.02);
              
              return (
                <div 
                  ref={tiltRef}
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative"
                >
                  {/* Hover background effect - very subtle */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <button
                    className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-300 group relative z-10"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-md md:text-xl leading-tight md:leading-normal font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-blue-600 transition-transform duration-300 rotate-180" />
                      ) : (
                        <Plus className="w-4 h-4 text-blue-600 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 md:px-8 pb-6 border-t border-gray-100 relative z-10">
                      <p className="text-gray-600 leading-relaxed pt-4 text-sm md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated border - very subtle */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating particles - smaller and more subtle */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" style={{ animationDelay: '0.5s' }} />
                </div>
              );
            };
            
            return <FAQItem key={index} />;
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions? <span className="text-blue-600 font-medium cursor-pointer hover:underline">Contact our support team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
