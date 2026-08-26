"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, LayoutGrid, Zap, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";



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
          className="w-full h-full object-cover opacity-50"
        >
          <source
            src="/bg-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/90" />
        {/* yellow glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,_hsl(var(--yellow-400)/0.12)_0%,_transparent_70%)]" />
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:28px_28px]" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center">
      </div>

      {/* AUDITION LIVE CTA — bottom center */}
      <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/auditions"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest rounded-full shadow-[0_4px_20px_hsl(var(--yellow-400)/0.4)] hover:-translate-y-1 hover:shadow-[0_6px_28px_hsl(var(--yellow-400)/0.55)] active:translate-y-0 transition-all"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600/60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
            Auditions Live
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
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
        className="absolute bottom-6 right-6 z-0 p-3 bg-black/40 hover:bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 hover:border-yellow-400 transition-all rounded-full backdrop-blur-md"
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

    </section>
  );
};

export default HeroSection;