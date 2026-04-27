"use client";

import { useRef } from "react";
import { ArrowUpRight, MapPin, Clock, MoveRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { events, featuredEvent } from "@/data/eventsData";
import { CardCarousel } from "./ui/CardCarousel";

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const secondary = events.filter(e => !e.featured).slice(0, 2);
  const tertiary = events.filter(e => !e.featured).slice(2, 4);

  return (
    <section
      id="events"
      ref={ref}
      className="relative py-32 lg:py-52 bg-background border-t-4 border-primary overflow-hidden transition-colors"
    >
      {/* subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground))_1px,transparent_0)] opacity-[0.03] bg-[length:24px_24px] pointer-events-none transition-opacity" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-20 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[3px] bg-primary transition-colors" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/50 transition-colors">
                CALENDAR
              </span>
            </div>
            <h2
              className="font-space font-black tracking-tighter text-foreground transition-colors"
              style={{ fontSize: "clamp(3.5rem,10vw,9.5rem)", lineHeight: 0.82 }}
            >
              UPCOMING<br />
              <span className="text-outline">CHRONICLE.</span>
            </h2>
          </div>

<Link
  to="/events"
  className="
    brutalist-button brutalist-shadow
    bg-white text-black
    hover:bg-violet-600 hover:text-white
    hover:shadow-none
    px-10 py-4 text-sm
    self-start lg:self-auto
    inline-flex items-center gap-3
    transition-all duration-200
  "
>
  VIEW ALL EVENTS
  <MoveRight className="w-5 h-5" />
</Link>
        </div>

        {/* ── EVENTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-12 group relative overflow-hidden brutalist-shadow-lg border-[3px] border-primary"
          >
            {/* Background image carousel */}
            <div className="absolute inset-0 bg-black">
              <CardCarousel images={featuredEvent.images} />
            </div>
            <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-700" />
            {/* glow */}
            <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-yellow-400/8 blur-[100px] pointer-events-none group-hover:bg-yellow-400/15 transition-all duration-700" />

            <Link to={`/events/${featuredEvent.slug}`} className="relative z-10 p-10 lg:p-16 flex flex-col min-h-[500px] cursor-pointer">
              {/* top bar */}
              <div className="flex justify-between items-start mb-auto">
                <div className="flex items-center gap-4">
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-[10px] font-black text-white/60 tracking-[0.45em] uppercase">
                    FEATURED EVENT
                  </span>
                </div>
                <div className="w-14 h-14 border-2 border-white/25 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black transition-all">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              </div>

              {/* content */}
              <div className="pt-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-8">
                  <div className="flex-1">
                    <span className="text-[11px] font-black text-yellow-400 tracking-[0.3em] uppercase block mb-4">
                      {featuredEvent.type}
                    </span>
                    <h3
                      className="font-space font-black text-white uppercase tracking-tighter mb-6"
                      style={{ fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 0.85 }}
                    >
                      {featuredEvent.name}
                    </h3>
                    <div className="flex flex-wrap gap-8">
                      <div className="flex items-center gap-2 text-[11px] font-black text-white/55 uppercase tracking-widest">
                        <MapPin className="w-4 h-4 text-yellow-400" />
                        {featuredEvent.location}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-black text-white/55 uppercase tracking-widest">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        {featuredEvent.displayDate}
                      </div>
                    </div>
                  </div>

                  {/* date widget */}
                  <div className="shrink-0 bg-yellow-400 p-6 text-center brutalist-shadow border-2 border-primary min-w-[100px] transition-colors">
                    <span className="block text-[9px] font-black text-black/60 tracking-widest mb-1 uppercase">DATE</span>
                    <span className="block text-3xl font-space font-black text-black">{featuredEvent.displayDate}</span>
                  </div>
                </div>

                <p className="text-lg lg:text-xl font-bold uppercase tracking-tight text-white/65 leading-tight max-w-3xl">
                  {featuredEvent.desc}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* SECONDARY EVENTS */}
          {secondary.map((ev, idx) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18 + idx * 0.1 }}
              className="lg:col-span-6 group relative overflow-hidden border-[3px] border-primary bg-card transition-colors brutalist-shadow"
            >
              {/* Thumbnail */}
              <div className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-black text-transparent mix-blend-screen">
                <CardCarousel images={ev.images} />
              </div>
              <Link to={`/events/${ev.slug}`} className="relative z-10 p-10 flex flex-col min-h-[300px] cursor-pointer">
                <div className="flex justify-between items-start mb-auto">
                  {ev.displayDate && (
                    <div className="w-14 h-14 bg-primary flex flex-col items-center justify-center text-primary-foreground border-2 border-primary transition-colors" style={{ boxShadow: "3px 3px 0 0 #facc15" }}>
                      <span className="text-[9px] font-black uppercase text-white/60 leading-none">{ev.displayDate.split(" ")[0]}</span>
                      <span className="text-xl font-space font-black leading-tight">{ev.displayDate.split(" ")[1]}</span>
                    </div>
                  )}
                  <span className="text-[9px] font-black text-foreground/40 tracking-[0.3em] uppercase border border-primary/20 px-3 py-1 transition-colors">
                    {ev.type}
                  </span>
                </div>

                <div className="mt-8">
                  <h4
                    className="font-space font-black text-foreground tracking-tighter uppercase mb-4 group-hover:text-yellow-500 transition-colors"
                    style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 0.9 }}
                  >
                    {ev.shortName}
                  </h4>
                  <p className="text-[11px] font-bold text-foreground/55 uppercase tracking-wide mb-6 leading-relaxed line-clamp-3 transition-colors">
                    {ev.desc}
                  </p>
                  <div className="pt-6 border-t-2 border-primary/10 flex items-center justify-between group-hover:border-primary transition-colors">
                    <span className="text-[10px] font-black tracking-widest text-foreground/50 uppercase transition-colors">LEARN MORE</span>
                    <ArrowUpRight className="w-5 h-5 text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* TERTIARY EVENTS */}
          {tertiary.map((ev, idx) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 + idx * 0.1 }}
              className="lg:col-span-6 group relative overflow-hidden border-[3px] border-primary bg-card transition-colors brutalist-shadow"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-black text-transparent mix-blend-screen">
                <CardCarousel images={ev.images} />
              </div>
              <Link to={`/events/${ev.slug}`} className="relative z-10 p-10 flex items-center justify-between gap-8 min-h-[200px] cursor-pointer">
                <div className="flex-1">
                  <span className="text-[9px] font-black text-foreground/40 tracking-[0.4em] uppercase block mb-3 transition-colors">{ev.type}</span>
                  <h4
                    className="font-space font-black text-foreground tracking-tighter uppercase mb-3 group-hover:text-yellow-500 transition-colors"
                    style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", lineHeight: 0.9 }}
                  >
                    {ev.shortName}
                  </h4>
                  <p className="text-[11px] font-bold text-foreground/55 uppercase tracking-wide line-clamp-2 transition-colors">
                    {ev.desc}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-4">
                  {ev.displayDate && (
                    <span className="text-xl font-space font-black text-foreground italic transition-colors">{ev.displayDate}</span>
                  )}
                  <div className="w-11 h-11 border-2 border-primary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MoveRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
