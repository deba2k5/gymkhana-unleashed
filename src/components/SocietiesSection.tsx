"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, ChevronLeft, ChevronRight,
  Binary, Music, Trophy, Heart, Edit3, Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const societies = [
  {
    id: "humour",  name: "Humour Club",    number: "01",
    image: "/societies/cultural.png",
    description: "Bringing joy and laughter through stand-up comedy and improv.",
    icon: Edit3,    color: "#EF4444",
  },
  {
    id: "dance", name: "Dance Club",   number: "02",
    image: "/societies/cultural.png",
    description: "Celebrating expression through classical to contemporary movements.",
    icon: Rocket,   color: "#3B82F6",
  },
  {
    id: "music",    name: "Music Club",      number: "03",
    image: "/societies/cultural.png",
    description: "The symphony of IEM - exploring diverse musical genres.",
    icon: Music,   color: "#FACC15",
  },
  {
    id: "debate",   name: "Debate Society",     number: "04",
    image: "/societies/technical.png",
    description: "Fostering critical thinking, rhetoric, and public speaking.",
    icon: Binary,    color: "#EF4444",
  },
  {
    id: "drama",  name: "Drama Club", number: "05",
    image: "/societies/cultural.png",
    description: "Bringing stories to life through theatrical expressions.",
    icon: Heart,    color: "#3B82F6",
  },
  {
    id: "photography",name: "Photography Club",      number: "06",
    image: "/societies/creative.png",
    description: "Documenting campus life and capturing memorable visual art.",
    icon: Trophy,   color: "#FACC15",
  },
  {
    id: "lit",name: "Lit Club",      number: "07",
    image: "/societies/creative.png",
    description: "A community for lovers of reading, writing, and literature.",
    icon: Edit3,   color: "#EF4444",
  },
  {
    id: "pet",name: "Pet Society",      number: "08",
    image: "/societies/welfare.png",
    description: "Promoting animal welfare and spreading compassion for our furry friends.",
    icon: Heart,   color: "#3B82F6",
  },
  {
    id: "film",name: "Film Society",      number: "09",
    image: "/societies/creative.png",
    description: "Celebrating cinematic journeys and the art of visual storytelling.",
    icon: Rocket,   color: "#FACC15",
  },
];

const SocietiesSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % societies.length);
  const prev = () => setIndex((p) => (p - 1 + societies.length) % societies.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % societies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const active = societies[index];

  return (
    <section
      id="societies"
      className="relative py-32 lg:py-52 bg-white border-t-4 border-black overflow-hidden"
    >
      {/* Atmospheric blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-20 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[3px] bg-black" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-black/50">
                THE ECOSYSTEM
              </span>
            </div>
            <h2
              className="font-space font-black tracking-tighter text-black"
              style={{ fontSize: "clamp(3.5rem,10vw,9.5rem)", lineHeight: 0.82 }}
            >
              OUR<br />
              <span className="text-outline">SOCIETIES.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="max-w-[240px] text-sm font-bold text-black/50 uppercase tracking-wider leading-relaxed hidden lg:block text-right">
              EXPLORE THE CORE PILLARS OF STUDENT EXCELLENCE AT IEM.
            </p>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-16 h-16 border-[3px] border-black flex items-center justify-center hover:bg-black hover:text-white transition-all brutalist-shadow bg-white text-black"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-16 h-16 border-[3px] border-black flex items-center justify-center bg-black text-white hover:bg-yellow-400 hover:text-black hover:border-black transition-all brutalist-shadow"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>

        {/* ── CAROUSEL ENGINE ── */}
        <div
          className="relative flex items-center justify-center overflow-visible"
          style={{ height: "clamp(460px, 55vw, 700px)", perspective: "2800px" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {societies.map((s, i) => {
              const half = Math.floor(societies.length / 2);
              let dist = i - index;
              if (dist > half)  dist -= societies.length;
              if (dist < -half) dist += societies.length;
              const abs   = Math.abs(dist);
              const isActive = dist === 0;

              return (
                <motion.div
                  key={s.id}
                  initial={false}
                  animate={{
                    x: dist * (typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 550),
                    scale: 1 - abs * 0.13,
                    rotateY: dist * -42,
                    z: -abs * 900,
                    opacity: abs > 2 ? 0 : 1 - abs * 0.32,
                  }}
                  transition={{ type: "spring", stiffness: 160, damping: 26 }}
                  className={`absolute ${
                    isActive ? "z-50 cursor-default" : "z-10 cursor-pointer"
                  }`}
                  style={{ width: "clamp(320px, 45vw, 680px)", aspectRatio: "16/9" }}
                  onClick={() => !isActive && setIndex(i)}
                >
                  {/* CARD */}
                  <div
                    className="relative w-full h-full border-[3px] border-black overflow-hidden bg-black brutalist-shadow-lg group"
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105 brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    {/* Content (always visible) */}
                    <div className="relative h-full flex flex-col justify-between p-8 lg:p-12 z-20">
                      {/* Top row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 border-2 border-white/20 flex items-center justify-center"
                            style={{ background: `${s.color}33` }}
                          >
                            <s.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-[10px] font-black text-white/60 tracking-[0.4em] uppercase">
                            {s.number}
                          </span>
                        </div>
                        <span
                          className="text-[2.5rem] font-space font-black tracking-tighter leading-none"
                          style={{ color: `${s.color}30` }}
                        >
                          #{s.number}
                        </span>
                      </div>

                      {/* Bottom: name + description + CTA */}
                      <div className="space-y-4">
                        <h3
                          className="font-space font-black text-white tracking-tighter uppercase leading-[0.85]"
                          style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
                        >
                          {s.name}
                        </h3>
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wide leading-snug max-w-xs">
                          {s.description}
                        </p>
                        <Link
                          to={`/societies#${s.id}`}
                          className="brutalist-button bg-white text-black hover:bg-yellow-400 text-xs w-full justify-between px-6 py-3"
                        >
                          EXPLORE SOCIETY
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Reflection */}
                  {isActive && (
                    <div
                      className="absolute top-[100%] left-0 right-0 pointer-events-none overflow-hidden reflection-floor"
                      style={{ height: "35%", transform: "scaleY(-0.5)", opacity: 0.08 }}
                    >
                      <img src={s.image} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── DOT PROGRESS ── */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {societies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Society ${i + 1}`}
                className={`h-1.5 transition-all duration-400 rounded-none border-0 p-0 ${
                  index === i ? "w-10 bg-black" : "w-3 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
            {String(index + 1).padStart(2, "0")} / {String(societies.length).padStart(2, "0")} — {active.name.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;