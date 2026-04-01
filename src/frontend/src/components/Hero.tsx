import { motion } from "motion/react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative bg-navy overflow-hidden min-h-[520px] flex items-center"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.052 252) 0%, oklch(0.22 0.058 252) 50%, oklch(0.28 0.065 252) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                Citizen Awareness Initiative
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight tracking-tight mb-4">
              Know Your
              <span className="block text-accent">LPG Rights</span>
            </h1>

            <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Stay informed about rising LPG prices, subsidy cuts, safety
              guidelines, and government schemes affecting millions of Indian
              households.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                data-ocid="hero.price_tracker.button"
                onClick={() => scrollTo("prices")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "oklch(var(--accent))" }}
              >
                📊 LPG Price Tracker
              </button>
              <button
                type="button"
                data-ocid="hero.subsidy_schemes.button"
                onClick={() => scrollTo("schemes")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "oklch(var(--primary))" }}
              >
                🏛️ Subsidy Schemes
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: "Cities Tracked", value: "25+" },
                { label: "Active Schemes", value: "8" },
                { label: "Safety Tips", value: "12+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-accent/40 pl-3"
                >
                  <div className="text-xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/assets/generated/hero-lpg-family.dim_700x500.jpg"
                alt="Indian family cooking on LPG stove"
                className="w-full h-[380px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to left, transparent 60%, oklch(0.22 0.058 252) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 bg-destructive/90 backdrop-blur-sm text-white rounded-lg px-4 py-2">
                <div className="text-xs font-semibold uppercase tracking-wide">
                  LPG Emergency Helpline
                </div>
                <div className="text-2xl font-black">1906</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
