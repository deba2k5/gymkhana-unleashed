"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const societies = [
  {
    id: "dance",
    name: "Dance Club",
    image: "/ITRANAA.jpg",
    description: "Celebrating expression through classical to contemporary movements.",
  },
  {
    id: "music",
    name: "Music Club",
    image: "/Music.jpg",
    description: "Exploring diverse musical genres.",
  },
  {
    id: "drama",
    name: "Drama Club",
    image: "/CHORUS.jpg",
    description: "Bringing stories to life through theatre.",
  },
  {
    id: "offbeat",
    name: "Western Dance",
    image: "/Offbeat_Logo.jpeg",
    description: "Creative western dance community.",
  },
];

export default function SocietiesSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % societies.length);
  const prev = () => setIndex((p) => (p - 1 + societies.length) % societies.length);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-white border-t-4 border-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 flex justify-between items-end">
          <h2 className="text-6xl font-black">
            OUR <span className="text-outline">SOCIETIES</span>
          </h2>

          <div className="flex gap-3">
            <button onClick={prev} className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white">
              <ChevronLeft />
            </button>
            <button onClick={next} className="w-14 h-14 border-2 border-black bg-black text-white hover:bg-yellow-400 hover:text-black">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative flex justify-center"
          style={{ height: "clamp(360px, 44vw, 560px)", perspective: "2200px" }} // 🔽 reduced height
        >
          {societies.map((s, i) => {
            const total = societies.length;
            let dist = i - index;

            if (dist > total / 2) dist -= total;
            if (dist < -total / 2) dist += total;

            const abs = Math.abs(dist);
            const isActive = dist === 0;

            return (
              <motion.div
                key={s.id}
                animate={{
                  x: dist * 320, // 🔽 tighter spacing
                  scale: isActive ? 1 : 1 - abs * 0.18,
                  rotateY: dist * -26,
                  opacity: isActive ? 1 : 1 - abs * 0.5,
                  zIndex: 50 - abs,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                className="absolute cursor-pointer"
                style={{ width: "clamp(240px, 32vw, 500px)" }} // 🔽 reduced width
                onClick={() => setIndex(i)}
              >

                {/* CARD */}
                <div className="relative border-2 border-black bg-black overflow-hidden group">

                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end"> {/* 🔽 reduced padding */}
                    <h3 className="text-white font-black text-2xl md:text-3xl"> {/* 🔽 smaller text */}
                      {s.name}
                    </h3>

                    <p className="text-white/80 text-xs md:text-sm mt-2 max-w-[220px]">
                      {s.description}
                    </p>

                    <Link
                      to={`/societies#${s.id}`}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-white text-white text-xs hover:bg-yellow-400 hover:text-black"
                    >
                      Explore
                      <ArrowUpRight size={14} /> {/* 🔽 smaller icon */}
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="mt-20 flex justify-center gap-3">
          {societies.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 transition-all ${
                index === i ? "w-10 bg-black" : "w-3 bg-black/30"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/societies"
            className="px-8 py-2 font-black text-sm uppercase tracking-widest border-2 border-black shadow-[8px_8px_0px_#FACC15] hover:shadow-[4px_4px_0px_#FACC15] hover:translate-y-1 transition"
          >
            Explore All Societies
          </Link>
        </div>

      </div>
    </section>
  );
}