
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useFadeInUp, useStaggerAnimation } from "@/hooks/useGSAP";

const FAQ = () => {
  const headerRef = useFadeInUp(0);
  const faqRef = useStaggerAnimation();
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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Livora and how it works.
          </p>
        </div>

        <div ref={faqRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-2xl transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
