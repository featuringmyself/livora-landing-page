import { useFadeInUp, useStaggerAnimation } from "@/hooks/useGSAP";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MealShowcase = () => {
  const headerRef = useFadeInUp(0);
  const mealsRef = useStaggerAnimation();
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant parallax background effect
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }
  }, []);

  const meals = [
    {
      id: 1,
      name: "Power Quinoa Bowl",
      description: "Protein-packed quinoa with roasted vegetables and tahini dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
      calories: 420,
      protein: "18g",
      carbs: "45g",
      fat: "16g",
      category: "Lunch"
    },
    {
      id: 2,
      name: "Spiced Chickpea Curry",
      description: "Traditional Indian curry with coconut milk and aromatic spices",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
      calories: 380,
      protein: "15g",
      carbs: "42g",
      fat: "14g",
      category: "Dinner"
    },
    {
      id: 3,
      name: "Green Smoothie Bowl",
      description: "Nutrient-dense blend with spinach, mango, and coconut flakes",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop&crop=center",
      calories: 280,
      protein: "12g",
      carbs: "35g",
      fat: "8g",
      category: "Breakfast"
    },
    {
      id: 4,
      name: "Almond Energy Bites",
      description: "No-bake protein balls with dates, almonds, and dark chocolate",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&crop=center",
      calories: 150,
      protein: "6g",
      carbs: "12g",
      fat: "9g",
      category: "Snack"
    },
    {
      id: 5,
      name: "Masala Oats Khichdi",
      description: "Comfort food reimagined with steel-cut oats and Indian spices",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&crop=center",
      calories: 320,
      protein: "14g",
      carbs: "38g",
      fat: "12g",
      category: "Dinner"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50/60 via-white to-rose-50/40 relative overflow-hidden">
      {/* Elegant background with parallax */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-rose-200/12 to-pink-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-violet-200/12 to-purple-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-emerald-200/10 to-teal-300/12 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 tracking-tight">
            Curated for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600">Health Goals</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto px-4 leading-relaxed font-medium">
            Every meal is crafted by nutritionists and powered by AI to match your specific dietary needs, 
            preferences, and health objectives.
          </p>
        </div>

        <div ref={mealsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
          {meals.map((meal, index) => (
            <div 
              key={meal.id} 
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-rose-200/30 transition-all duration-1000 overflow-hidden group cursor-pointer border border-slate-100/80 hover:-translate-y-4 hover:rotate-1 relative"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                transformOrigin: 'center center'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-4 md:top-5 right-4 md:right-5 bg-gradient-to-r from-rose-500/95 to-pink-500/95 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full text-sm md:text-base font-semibold transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 shadow-lg">
                  {meal.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 transform group-hover:-translate-y-2 transition-transform duration-700">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors duration-700">{meal.name}</h3>
                <p className="text-slate-600 mb-4 md:mb-6 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-700">{meal.description}</p>
                
                <div className="bg-gradient-to-r from-slate-50/95 to-rose-50/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 group-hover:from-rose-50/95 group-hover:to-pink-50/90 transition-all duration-700 border border-slate-100/80 group-hover:border-rose-200/60">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm md:text-base font-semibold text-slate-700">Nutrition Info</span>
                    <span className="text-xl md:text-2xl font-bold text-rose-600 group-hover:scale-110 transition-transform duration-700">{meal.calories} cal</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm md:text-base">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-700">
                      <div className="font-bold text-slate-900">{meal.protein}</div>
                      <div className="text-slate-500 text-xs md:text-sm">Protein</div>
                    </div>
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-700 delay-100">
                      <div className="font-bold text-slate-900">{meal.carbs}</div>
                      <div className="text-slate-500 text-xs md:text-sm">Carbs</div>
                    </div>
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-700 delay-200">
                      <div className="font-bold text-slate-900">{meal.fat}</div>
                      <div className="text-slate-500 text-xs md:text-sm">Fat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-600 text-xl md:text-2xl hover:text-rose-600 transition-colors duration-700 cursor-default font-medium">
            And many more personalized options tailored just for you...
          </p>
        </div>
      </div>
    </section>
  );
};

export default MealShowcase;
