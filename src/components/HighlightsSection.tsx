"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HighlightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 bg-background border-t-4 border-primary overflow-hidden transition-colors"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* MAIN STATS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="premium-card p-12 lg:p-20 bg-background text-foreground border-4 border-primary relative overflow-hidden mb-0 transition-colors brutalist-shadow"
        >
          {/* Yellow accent glow */}
          <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-yellow-400/10 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Side label */}
          <div className="absolute top-0 right-10 h-full flex items-center pointer-events-none select-none">
            <span className="text-[9px] font-black text-primary/10 tracking-[1.2em] vertical-text uppercase transition-colors">
              REAL_TIME_DATA / STATS_2024
            </span>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">

            {/* Badge */}
            <div className="flex justify-center mb-10">
              <div className="px-6 py-2 bg-yellow-400 text-black font-black text-[11px] tracking-[0.4em] uppercase brutalist-shadow-sm border-2 border-primary">
                BENCHMARK_2024
              </div>
            </div>

            {/* Headline */}
            <h2
              className="font-space font-black uppercase text-foreground mb-16 transition-colors"
              style={{ fontSize: "clamp(2.8rem,9vw,8rem)", lineHeight: 0.85 }}
            >
              #1 TECH FEST<br />
              <span className="text-outline-white"
                style={{ WebkitTextStroke: "2px rgba(250,204,21,0.8)", color: "transparent" }}>
                IN KOLKATA.
              </span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                { num: "15K+", label: "ANNUAL_FOOTFALL",  desc: "Global attendance record"  },
                { num: "200+", label: "TECH_EVENTS",      desc: "Events & competitions"      },
                { num: "50+",  label: "PARTNER_COLLEGES", desc: "Allied institutions"         },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group cursor-default"
                >
                  <span
                    className="block font-space font-black text-foreground tracking-tighter mb-3 group-hover:text-yellow-400 transition-colors"
                    style={{ fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 1 }}
                  >
                    {s.num}
                  </span>
                  <span className="block text-[11px] font-black text-foreground/70 tracking-[0.3em] uppercase mb-2 transition-colors">
                    {s.label}
                  </span>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest transition-colors">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* MARQUEE BAND */}
      <div className="mt-20 border-y-4 border-primary bg-yellow-400 py-5 whitespace-nowrap overflow-hidden -rotate-[1deg] scale-105 transition-colors">
        <div className="flex animate-marquee-fast">
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl lg:text-4xl font-space font-black uppercase text-black tracking-tighter mx-12 flex items-center gap-8">
                <span className="w-3 h-3 bg-black rotate-45 inline-block" />
                INNOVATE // CREATE // COMPETE // CELEBRATE // UNITE
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
