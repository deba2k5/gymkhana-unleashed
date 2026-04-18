"use client";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Filter, MoveRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events, type Event } from "@/data/eventsData";

const CATEGORIES = ["ALL", "FLAGSHIP", "SPORTS", "TECHNICAL", "CULTURAL", "ACADEMIC", "NETWORKING"] as const;

const categoryColors: Record<string, string> = {
  FLAGSHIP:    "bg-yellow-400 text-black",
  SPORTS:      "bg-green-400 text-black",
  TECHNICAL:   "bg-blue-500 text-white",
  CULTURAL:    "bg-pink-500 text-white",
  ACADEMIC:    "bg-purple-500 text-white",
  NETWORKING:  "bg-orange-400 text-black",
};

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  const filtered = activeCategory === "ALL"
    ? events
    : events.filter(e => e.category === activeCategory);

  const featured = filtered.find(e => e.featured) || filtered[0];
  const rest = filtered.filter(e => e.id !== featured?.id);

  return (
    <>
      <Navbar />
      <main className="bg-transparent min-h-screen text-foreground transition-colors">

        {/* ─── HERO ─── */}
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-transparent border-b-4 border-primary overflow-hidden transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.05]" />
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary/5 blur-[120px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[3px] bg-yellow-400" />
                <span className="text-[11px] font-black tracking-[0.45em] uppercase text-white/40">
                  IEM GYMKHANA — EVENTS CHRONICLE
                </span>
              </div>

              <h1
                className="font-space font-black tracking-tighter text-foreground mb-6 transition-colors"
                style={{ fontSize: "clamp(4rem,12vw,11rem)", lineHeight: 0.82 }}
              >
                ALL<br />
                <span style={{ WebkitTextStroke: "2px #facc15", color: "transparent" }}>EVENTS.</span>
              </h1>

              <p className="text-lg font-bold uppercase tracking-tight text-foreground/50 max-w-2xl leading-relaxed transition-colors">
                Every milestone, competition, celebration, and achievement — documented from the IEM Student's Gymkhana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── FILTER BAR ─── */}
        <section className="sticky top-0 z-40 bg-background border-b-4 border-primary transition-colors">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 py-5 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 shrink-0 mr-4">
                <Filter className="w-4 h-4 text-foreground/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">FILTER</span>
              </div>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] border-2 border-primary transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-yellow-400 hover:text-black"
                  }`}
                  style={{ boxShadow: activeCategory === cat ? "3px 3px 0 0 #facc15" : "3px 3px 0 0 var(--primary)" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EVENTS GRID ─── */}
        <section ref={ref} className="py-24 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

            {filtered.length === 0 && (
              <div className="text-center py-32">
                <p className="text-2xl font-space font-black text-foreground/30 uppercase tracking-widest transition-colors">No events found</p>
              </div>
            )}

            {/* FEATURED LARGE CARD */}
            {featured && (
              <motion.div
                key={featured.id + activeCategory}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-10"
              >
                <Link
                  to={`/events/${featured.slug}`}
                  className="group relative flex flex-col lg:flex-row overflow-hidden border-[3px] border-primary transition-colors"
                  style={{ boxShadow: "8px 8px 0 0 var(--primary)", minHeight: "520px" }}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-[55%] min-h-[300px] lg:min-h-full overflow-hidden">
                    <img
                      src={`/events/${featured.images[0]}`}
                      alt={featured.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).parentElement!.style.background = "#111";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
                  </div>

                  {/* Content */}
                  <div className="relative bg-background flex-1 p-10 lg:p-16 flex flex-col justify-between transition-colors">
                    <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-primary/5 blur-[80px]" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className={`px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase brutalist-shadow-sm ${categoryColors[featured.category] || "bg-yellow-400 text-black"}`}>
                          {featured.category}
                        </div>
                        {featured.featured && (
                          <div className="flex items-center gap-2 px-3 py-1 border border-yellow-400/30">
                            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                            <span className="text-[9px] font-black text-yellow-400 tracking-widest uppercase">FEATURED</span>
                          </div>
                        )}
                      </div>

                      <span className="block text-[11px] font-black text-yellow-400 tracking-[0.3em] uppercase mb-3">
                        {featured.type}
                      </span>
                      <h2
                        className="font-space font-black text-foreground uppercase tracking-tighter mb-6 group-hover:text-yellow-400 transition-colors"
                        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 0.88 }}
                      >
                        {featured.name}
                      </h2>

                      <p className="text-base font-bold uppercase tracking-tight text-foreground/60 leading-relaxed max-w-lg mb-8 transition-colors">
                        {featured.desc}
                      </p>

                      {featured.highlights && (
                        <div className="grid grid-cols-2 gap-3">
                          {featured.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 shrink-0" />
                              <span className="text-[10px] font-black text-foreground/50 uppercase tracking-wide transition-colors">{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex items-center justify-between mt-10 pt-8 border-t border-white/10">
                      <div className="text-4xl font-space font-black text-foreground/20 italic transition-colors">
                        {featured.displayDate}
                      </div>
                      <div className="flex items-center gap-4 group/btn transition-colors">
                        <span className="text-[11px] font-black text-foreground/50 tracking-widest uppercase group-hover/btn:text-yellow-400 transition-colors">VIEW EVENT</span>
                        <div className="w-12 h-12 border-2 border-primary/20 flex items-center justify-center text-foreground group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black transition-all">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* REMAINING EVENTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {rest.map((ev, idx) => (
                <EventCard key={ev.id} event={ev} idx={idx} inView={inView} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EventCard({ event: ev, idx, inView }: { event: Event; idx: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 + (idx % 6) * 0.07 }}
    >
      <Link
        to={`/events/${ev.slug}`}
        className="group relative flex flex-col overflow-hidden border-[3px] border-primary bg-background h-full transition-colors"
        style={{ boxShadow: "5px 5px 0 0 var(--primary)" }}
      >
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden bg-black">
          <img
            src={`/events/${ev.images[0]}`}
            alt={ev.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-[9px] font-black tracking-[0.3em] uppercase ${categoryColors[ev.category] || "bg-yellow-400 text-black"}`}>
              {ev.category}
            </span>
          </div>

          {/* Date badge */}
          <div className="absolute bottom-4 right-4 bg-yellow-400 px-3 py-1.5 text-center border-2 border-primary" style={{ boxShadow: "2px 2px 0 0 var(--primary)" }}>
            <span className="block text-[9px] font-black text-black/60 uppercase tracking-widest leading-none">{ev.displayDate.split(" ")[0]}</span>
            <span className="block text-lg font-space font-black text-black leading-tight">{ev.displayDate.split(" ")[1]}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 flex flex-col flex-1">
          <span className="text-[9px] font-black text-foreground/40 tracking-[0.4em] uppercase block mb-2 transition-colors">{ev.type}</span>
          <h3
            className="font-space font-black text-foreground tracking-tighter uppercase mb-3 group-hover:text-yellow-600 transition-colors"
            style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", lineHeight: 0.92 }}
          >
            {ev.shortName}
          </h3>
          <p className="text-[11px] font-bold text-foreground/55 uppercase tracking-wide leading-relaxed line-clamp-3 flex-1 transition-colors">
            {ev.desc}
          </p>

          <div className="mt-6 pt-5 border-t-2 border-primary/10 flex items-center justify-between group-hover:border-primary transition-colors">
            <span className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">EXPLORE</span>
            <div className="w-9 h-9 border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <MoveRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
