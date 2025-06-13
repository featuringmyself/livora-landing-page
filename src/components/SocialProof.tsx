
import { Play, Instagram, Heart } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4 md:mb-6 animate-float">
            <Instagram className="w-6 md:w-8 h-6 md:h-8 text-pink-600 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 hover:scale-105 transition-transform duration-300">
            See Our Community in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300 px-4">
            Join thousands of health enthusiasts who are already transforming their lives with Livora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Instagram Reel Placeholders with enhanced animations */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl aspect-[9/16] relative overflow-hidden group cursor-pointer hover-lift animate-scale-in">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 animate-float">
                  <Play className="w-5 md:w-6 h-5 md:h-6 text-pink-500 ml-1 group-hover:text-pink-600 transition-colors duration-300" />
                </div>
                <p className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors duration-300 text-sm md:text-base">Instagram Reel</p>
                <p className="text-gray-500 text-xs md:text-sm group-hover:text-gray-600 transition-colors duration-300">Coming Soon</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl aspect-[9/16] relative overflow-hidden group cursor-pointer hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Heart className="w-5 md:w-6 h-5 md:h-6 text-blue-500 group-hover:text-red-500 transition-colors duration-300" />
                </div>
                <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300 text-sm md:text-base">Customer Story</p>
                <p className="text-gray-500 text-xs md:text-sm group-hover:text-gray-600 transition-colors duration-300">Coming Soon</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl aspect-[9/16] relative overflow-hidden group cursor-pointer hover-lift animate-scale-in md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                  <Play className="w-5 md:w-6 h-5 md:h-6 text-green-500 ml-1 group-hover:text-green-600 transition-colors duration-300" />
                </div>
                <p className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-300 text-sm md:text-base">Recipe Demo</p>
                <p className="text-gray-500 text-xs md:text-sm group-hover:text-gray-600 transition-colors duration-300">Coming Soon</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center animate-fade-in">
          <p className="text-gray-600 mb-3 md:mb-4 hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">Follow us for daily health tips and behind-the-scenes content</p>
          <a 
            href="#" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105 group text-sm md:text-base"
          >
            <Instagram className="w-4 md:w-5 h-4 md:h-5 mr-2 group-hover:animate-bounce" />
            @livora_health
            <div className="ml-2 w-0 h-0.5 bg-green-600 group-hover:w-6 md:group-hover:w-8 transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
