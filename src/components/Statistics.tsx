
import { useCounterAnimation, useFadeInUp } from "@/hooks/useGSAP";

const Statistics = () => {
  const headerRef = useFadeInUp(0);
  const counter1Ref = useCounterAnimation(50000, 2.5);
  const counter2Ref = useCounterAnimation(95, 2);
  const counter3Ref = useCounterAnimation(24, 1.5);
  const counter4Ref = useCounterAnimation(4.8, 3);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Join the growing community of health-conscious individuals transforming their lives with Livora.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span ref={counter1Ref}>0</span>+
            </div>
            <div className="text-green-200 text-lg font-medium">Happy Users</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span ref={counter2Ref}>0</span>%
            </div>
            <div className="text-green-200 text-lg font-medium">Success Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span ref={counter3Ref}>0</span>/7
            </div>
            <div className="text-green-200 text-lg font-medium">Support Available</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span ref={counter4Ref}>0</span>/5
            </div>
            <div className="text-green-200 text-lg font-medium">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
