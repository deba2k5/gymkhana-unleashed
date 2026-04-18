"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const societies = [
  { id: "dance", name: "Dance Club", image: "/ITRANAA.jpg", description: "Celebrating expression through classical to contemporary movements." },
  { id: "music", name: "Music Club", image: "/Music.jpg", description: "Exploring diverse musical genres." },
  { id: "drama", name: "Drama Club", image: "/CHORUS.jpg", description: "Bringing stories to life through theatre." },
  { id: "offbeat", name: "Western Dance", image: "/Offbeat_Logo.jpeg", description: "Creative western dance community." },
  { id: "photography", name: "Photography Club", image: "/Photography.png", description: "Capturing moments through lenses." },
  { id: "film", name: "Film Society", image: "/film.jpg", description: "Exploring cinema and storytelling." },
  { id: "debate", name: "Debate Club", image: "/Oratoria.png", description: "Enhancing public speaking and logic." },
  { id: "art", name: "ARC", image: "/ARC.png", description: "Creative design and digital art hub." },
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
    <section className="relative py-32 bg-background border-t-4 border-primary overflow-hidden transition-colors">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 flex justify-between items-end">
          <h2 className="text-6xl font-black text-foreground">
            OUR <span className="text-outline">SOCIETIES</span>
          </h2>

          <div className="flex gap-3">
            <button onClick={prev} className="w-14 h-14 border-2 border-primary flex items-center justify-center bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <ChevronLeft />
            </button>
            <button onClick={next} className="w-14 h-14 border-2 border-primary bg-primary text-primary-foreground hover:bg-yellow-400 hover:text-black transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative flex justify-center"
          style={{ height: "clamp(300px, 40vw, 500px)", perspective: "2200px" }}
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
                  x: dist * 200,               // ✅ tighter spacing
                  scale: isActive ? 1 : 1 - abs * 0.12, // ✅ smaller scale drop
                  rotateY: dist * -18,         // ✅ softer rotation
                  opacity: isActive ? 1 : 1 - abs * 0.3,
                  zIndex: 50 - abs,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                className="absolute cursor-pointer"
                style={{ width: "clamp(180px, 20vw, 320px)" }} // ✅ smaller cards
                onClick={() => setIndex(i)}
              >

                {/* CARD */}
                <div className="relative border-2 border-primary bg-black overflow-hidden group">

                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-black text-lg md:text-xl">
                      {s.name}
                    </h3>

                    <p className="text-white/80 text-[10px] md:text-xs mt-1 max-w-[200px]">
                      {s.description}
                    </p>

                    <Link
                      to={`/societies#${s.id}`}
                      className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 border border-white text-white text-[10px] hover:bg-yellow-400 hover:text-black"
                    >
                      Explore
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="mt-16 flex justify-center gap-3">
          {societies.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 transition-all ${
                index === i ? "w-10 bg-primary" : "w-3 bg-primary/30"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/societies"
            className="
              px-8 py-2 font-black text-sm uppercase tracking-widest
              border-2 border-primary
              bg-white text-black
              shadow-[8px_8px_0px_#FACC15]
              hover:bg-violet-600 hover:text-white
              hover:shadow-[4px_4px_0px_#FACC15]
              hover:translate-y-1
              transition-all
            "
          >
            Explore All Societies
          </Link>
        </div>

      </div>
    </section>
  );
}