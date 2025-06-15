
import { useCounterAnimation, useFadeInUp } from "@/hooks/useGSAP";

const Statistics = () => {
  const headerRef = useFadeInUp(0);
  const counter1Ref = useCounterAnimation(50000, 2.5);
  const counter2Ref = useCounterAnimation(95, 2);
  const counter3Ref = useCounterAnimation(24, 1.5);
  const counter4Ref = useCounterAnimation(4.8, 3);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-violet-900 to-rose-900 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-rose-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-violet-400/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Trusted by Thousands
          </h2>
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
            Join the growing community of health-conscious individuals transforming their lives with Livora.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-700 group-hover:text-rose-300">
              <span ref={counter1Ref}>0</span>+
            </div>
            <div className="text-rose-200 text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-700">Happy Users</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-700 group-hover:text-violet-300">
              <span ref={counter2Ref}>0</span>%
            </div>
            <div className="text-violet-200 text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-700">Success Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-700 group-hover:text-pink-300">
              <span ref={counter3Ref}>0</span>/7
            </div>
            <div className="text-pink-200 text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-700">Support Available</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-700 group-hover:text-emerald-300">
              <span ref={counter4Ref}>0</span>/5
            </div>
            <div className="text-emerald-200 text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-700">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
