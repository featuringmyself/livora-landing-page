
import { Play, Instagram, Heart } from "lucide-react";
import { useFadeInUp, useStaggerAnimation } from "@/hooks/useGSAP";

const SocialProof = () => {
  const headerRef = useFadeInUp(0);
  const cardsRef = useStaggerAnimation();

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4 md:mb-6">
            <Instagram className="w-6 md:w-8 h-6 md:h-8 text-pink-600" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            See Our Community in <span className="text-gradient bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Join thousands of health enthusiasts who are already transforming their lives with Livora.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Instagram Reel Placeholders with proper aspect ratio */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl aspect-[3/4] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white rounded-full flex items-center justify-center mb-3 mx-auto shadow-md">
                  <Play className="w-5 md:w-6 h-5 md:h-6 text-pink-500 ml-1" />
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base">Instagram Reel</p>
                <p className="text-gray-500 text-xs md:text-sm">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl aspect-[3/4] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white rounded-full flex items-center justify-center mb-3 mx-auto shadow-md">
                  <Heart className="w-5 md:w-6 h-5 md:h-6 text-blue-500" />
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base">Customer Story</p>
                <p className="text-gray-500 text-xs md:text-sm">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl aspect-[3/4] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white rounded-full flex items-center justify-center mb-3 mx-auto shadow-md">
                  <Play className="w-5 md:w-6 h-5 md:h-6 text-green-500 ml-1" />
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base">Recipe Demo</p>
                <p className="text-gray-500 text-xs md:text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-3 text-sm md:text-base">Follow us for daily health tips and behind-the-scenes content</p>
          <a 
            href="#" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300 text-sm md:text-base"
          >
            <Instagram className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            @livora_health
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
