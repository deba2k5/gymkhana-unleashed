"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, Sparkles, MoveRight } from "lucide-react";

const stats = [
  { label: "ANNUAL EVENTS", val: "50+",  icon: Sparkles },
  { label: "TOTAL FOOTFALL", val: "15K+", icon: Zap },
  { label: "ACTIVE 24/7",   val: "365",  icon: Target },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-52 bg-white border-t-4 border-black overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span
          className="font-black tracking-tighter uppercase whitespace-nowrap text-black opacity-[0.025] -rotate-6"
          style={{ fontSize: "22vw", lineHeight: 1 }}
        >
          IDENTITY
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* ── LEFT: HEADING ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section tag */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-[3px] bg-black" />
              <span className="text-[11px] font-black tracking-[0.4em] uppercase text-black/50">
                OUR MISSION
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-space font-black tracking-tighter text-black mb-10"
              style={{ fontSize: "clamp(4rem,11vw,9rem)", lineHeight: 0.82 }}
            >
              CORE<br />
              <span className="text-outline">CULTURE.</span>
            </h2>

            <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-black leading-[1.2] mb-10 max-w-md">
              More than a student body —{" "}
              <span className="bg-yellow-400 text-black px-1.5">an accelerator</span>{" "}
              for campus evolution.
            </p>

            <a
              href="#societies"
              className="brutalist-button bg-black text-white hover:bg-yellow-400 hover:text-black px-8 py-4 text-sm"
            >
              JOIN THE LEGACY
              <MoveRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* ── RIGHT: CONTENT CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Offset shadow frame */}
            <div
              className="absolute inset-0 bg-yellow-400/30 border-2 border-black/15"
              style={{ transform: "translate(10px,10px)", zIndex: 0 }}
            />

            <div className="relative premium-card p-10 lg:p-16 bg-white z-10">
              {/* Side text */}
              <div className="absolute top-0 right-8 h-full flex items-center pointer-events-none select-none">
                <span className="text-[9px] font-black text-black/10 tracking-[1.2em] vertical-text uppercase">
                  ESTABLISHED 1989
                </span>
              </div>

              <span className="text-[11px] font-black text-yellow-500 tracking-[0.3em] uppercase block mb-5">
                THE NARRATIVE
              </span>

              <p className="text-lg md:text-xl font-medium leading-[1.55] text-black/80 mb-12 font-outfit">
                IEM Gymkhana is the official student member council board of the
                Institute of Engineering & Management, Kolkata. It serves as the
                central body that represents student interests, coordinates
                extracurricular and co-curricular activities, and fosters a
                vibrant campus culture.
                <br /><br />
                The Gymkhana also plays a key role in organizing major events,
                competitions, and initiatives that enhance student engagement
                and leadership development.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t-2 border-black/15">
                {stats.map((s, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-2 mb-3">
                      <s.icon className="w-4 h-4 text-black/35 group-hover:text-yellow-500 transition-colors" />
                      <span className="text-[9px] font-black text-black/55 tracking-widest uppercase leading-tight">
                        {s.label}
                      </span>
                    </div>
                    <span className="text-3xl md:text-4xl font-space font-black text-black tracking-tighter">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;