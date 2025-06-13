
import { Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-green-600">Livora</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from the frustration of endless diet confusion and conflicting nutrition advice, 
            Livora combines cutting-edge AI with traditional Indian wellness wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To make personalized nutrition accessible to every Indian household through the power of AI and local food culture.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600">
              Founded by nutrition enthusiasts who believe healthy food should be delicious, convenient, and tailored to your unique needs.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600">
              Evidence-based nutrition recommendations that respect your taste preferences, dietary restrictions, and lifestyle.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your relationship with food?</h3>
          <p className="text-green-100 text-lg">
            Join thousands of Indians who are already on their personalized health journey with Livora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
