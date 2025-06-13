
const ProductMockup = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your AI Nutritionist, <span className="text-green-600">Always Ready</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our intelligent platform learns your preferences, tracks your goals, and delivers 
              personalized meal recommendations that evolve with your health journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI-Powered Personalization</h3>
                  <p className="text-gray-600">Every meal plan is unique to your body, goals, and taste preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fresh, Local Ingredients</h3>
                  <p className="text-gray-600">Sourced from trusted local farmers and suppliers across India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Flexible Delivery</h3>
                  <p className="text-gray-600">Weekly plans that adapt to your schedule and dietary changes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto">
              <div className="bg-green-600 h-2 rounded-full mb-6"></div>
              <div className="space-y-4">
                <div className="bg-gray-100 h-16 rounded-xl flex items-center px-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full mr-3"></div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded mb-1 w-24"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="bg-green-50 h-16 rounded-xl flex items-center px-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full mr-3"></div>
                  <div>
                    <div className="h-3 bg-green-300 rounded mb-1 w-28"></div>
                    <div className="h-2 bg-green-200 rounded w-20"></div>
                  </div>
                </div>
                <div className="bg-gray-100 h-16 rounded-xl flex items-center px-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded mb-1 w-20"></div>
                    <div className="h-2 bg-gray-200 rounded w-14"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-green-600 h-12 rounded-xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockup;
