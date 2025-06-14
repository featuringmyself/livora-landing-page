
import { useFadeInUp, useStaggerAnimation } from "@/hooks/useGSAP";

const MealShowcase = () => {
  const headerRef = useFadeInUp(0);
  const mealsRef = useStaggerAnimation();

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
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Curated for Your <span className="text-gradient">Health Goals</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Every meal is crafted by nutritionists and powered by AI to match your specific dietary needs, 
            preferences, and health objectives.
          </p>
        </div>

        <div ref={mealsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {meals.map((meal) => (
            <div 
              key={meal.id} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-700 overflow-hidden group cursor-pointer border border-gray-100/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-green-600/90 backdrop-blur-sm text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {meal.category}
                </div>
              </div>
              
              <div className="p-4 md:p-6 transform group-hover:-translate-y-1 transition-transform duration-500">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-500">{meal.name}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-500">{meal.description}</p>
                
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-3 md:p-4 group-hover:bg-green-50/80 transition-all duration-500 border border-gray-100/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Nutrition Info</span>
                    <span className="text-lg font-bold text-green-600 group-hover:scale-110 transition-transform duration-500">{meal.calories} cal</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs md:text-sm">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                      <div className="font-semibold text-gray-900">{meal.protein}</div>
                      <div className="text-gray-500">Protein</div>
                    </div>
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500 delay-75">
                      <div className="font-semibold text-gray-900">{meal.carbs}</div>
                      <div className="text-gray-500">Carbs</div>
                    </div>
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500 delay-100">
                      <div className="font-semibold text-gray-900">{meal.fat}</div>
                      <div className="text-gray-500">Fat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-base md:text-lg hover:text-green-600 transition-colors duration-500 cursor-default">
            And many more personalized options tailored just for you...
          </p>
        </div>
      </div>
    </section>
  );
};

export default MealShowcase;
