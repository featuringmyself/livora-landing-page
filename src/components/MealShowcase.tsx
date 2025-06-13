
const MealShowcase = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curated for Your <span className="text-green-600">Health Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every meal is crafted by nutritionists and powered by AI to match your specific dietary needs, 
            preferences, and health objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {meals.map((meal, index) => (
            <div 
              key={meal.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {meal.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{meal.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{meal.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Nutrition Info</span>
                    <span className="text-lg font-bold text-green-600">{meal.calories} cal</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{meal.protein}</div>
                      <div className="text-gray-500">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{meal.carbs}</div>
                      <div className="text-gray-500">Carbs</div>
                    </div>
                    <div className="text-center">
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
          <p className="text-gray-600 text-lg">
            And many more personalized options tailored just for you...
          </p>
        </div>
      </div>
    </section>
  );
};

export default MealShowcase;
