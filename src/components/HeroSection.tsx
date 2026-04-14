"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, LayoutGrid, Zap, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { val: "5K+",  label: "MEMBERS" },
  { val: "15+",  label: "SOCIETIES" },
  { val: "50+",  label: "EVENTS / YEAR" },
  { val: "1989", label: "ESTABLISHED" },
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-40 pb-20">

      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay muted={isMuted} loop playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="/bg-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/90" />
        {/* yellow glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,_rgba(250,204,21,0.12)_0%,_transparent_70%)]" />
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:28px_28px]" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center">



        {/* HEADLINE */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="block text-[clamp(3.2rem,9vw,11.5rem)] leading-[0.82] font-space font-black tracking-[-0.04em] text-outline-white"
          >
            IEM STUDENT
          </motion.h1>
        </div>
        <div className="mb-12 overflow-hidden">
          <motion.div
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.23, 1, 0.32, 1], delay: 0.22 }}
            className="block text-[clamp(3.2rem,9vw,11.5rem)] leading-[0.82] font-space font-black tracking-[-0.04em] text-outline-white"
          >
            GYMKHANA
          </motion.div>
        </div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-base md:text-lg text-white/65 font-bold uppercase tracking-[0.18em] mb-14 max-w-xl mx-auto leading-relaxed"
        >
          THE EPICENTER OF CAMPUS CULTURE, INNOVATION &amp; LEADERSHIP
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap gap-5 items-center justify-center mb-24"
        >
          <a
            href="#societies"
            className="brutalist-button bg-yellow-400 text-black hover:bg-white px-10 py-4 text-sm"
          >
            EXPLORE SOCIETIES
            <LayoutGrid className="w-5 h-5" />
          </a>
          <a
            href="#events"
            style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
            className="brutalist-button bg-transparent hover:bg-white hover:text-black px-10 py-4 text-sm"
          >
            UPCOMING EVENTS
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* STATS ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="block text-3xl md:text-4xl font-space font-black text-white leading-none">
                {s.val}
              </span>
              <span className="block text-[10px] font-black text-white/45 tracking-[0.3em] uppercase mt-2">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── BOTTOM PROGRESS BAR ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3.5, delay: 1, ease: "easeOut" }}
          className="h-full bg-yellow-400 origin-left"
        />
      </div>
      {/* SOUND TOGGLE */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-50 p-3 bg-black/40 hover:bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 hover:border-yellow-400 transition-all rounded-full backdrop-blur-md"
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

    </section>
  );
};

export default HeroSection;