
const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Our Community in <span className="text-green-600">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of health enthusiasts who are already transforming their lives with Livora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instagram Reel Placeholders */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl aspect-[9/16] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-0 h-0 border-l-[10px] border-l-pink-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-700 font-medium">Instagram Reel</p>
                <p className="text-gray-500 text-sm">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl aspect-[9/16] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-0 h-0 border-l-[10px] border-l-blue-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-700 font-medium">Customer Story</p>
                <p className="text-gray-500 text-sm">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl aspect-[9/16] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-0 h-0 border-l-[10px] border-l-green-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-700 font-medium">Recipe Demo</p>
                <p className="text-gray-500 text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Follow us for daily health tips and behind-the-scenes content</p>
          <a 
            href="#" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium story-link"
          >
            @livora_health
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
