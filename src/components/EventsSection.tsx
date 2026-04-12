"use client";

import { useRef } from "react";
import { ArrowUpRight, MapPin, Clock, MoveRight, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

const featuredEvent = {
  id: "01",
  name: "IEMPACT 2024",
  date: "MAR 25",
  desc: "The heartbeat of our cultural legacy. A national-level extravaganza featuring global talent, elite competitions, and unforgettable performances.",
  type: "FLAGSHIP — CULTURAL",
  location: "MAIN CAMPUS GROUNDS",
  time: "18:00 HRS",
};

const events = [
  { id: "02", name: "Innovacia",      date: "APR 15", type: "TECHNICAL",   desc: "Annual tech confluence pushing students beyond conventional engineering limits." },
  { id: "03", name: "IEM UEM Marathon", date: "MAY 02", type: "ATHLETICS",   desc: "Ultimate 5K endurance test promoting mental resilience and athletic community." },
  { id: "04", name: "Film Festival",   date: "MAY 10", type: "CREATIVE",    desc: "A cinematic odyssey showcasing student-produced media and narrative art." },
  { id: "05", name: "Alumni meet",   date: "AUG 20", type: "NETWORKING",  desc: "Forging multi-generational bridges between IEM leaders and the new guard." },
];

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="events"
      ref={ref}
      className="relative py-32 lg:py-52 bg-white border-t-4 border-black overflow-hidden"
    >
      {/* subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-20 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[3px] bg-black" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-black/50">
                CALENDAR
              </span>
            </div>
            <h2
              className="font-space font-black tracking-tighter text-black"
              style={{ fontSize: "clamp(3.5rem,10vw,9.5rem)", lineHeight: 0.82 }}
            >
              UPCOMING<br />
              <span className="text-outline">CHRONICLE.</span>
            </h2>
          </div>

          <button className="brutalist-button bg-black text-white hover:bg-yellow-400 hover:text-black px-10 py-4 text-sm self-start lg:self-auto">
            VIEW ALL EVENTS
            <MoveRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── EVENTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-12 group relative bg-black p-10 lg:p-16 overflow-hidden brutalist-shadow-lg cursor-pointer flex flex-col min-h-[500px] border-[3px] border-black"
          >
            {/* glow */}
            <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-yellow-400/8 blur-[100px] pointer-events-none group-hover:bg-yellow-400/15 transition-all duration-700" />

            {/* top bar */}
            <div className="relative z-10 flex justify-between items-start mb-auto">
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
            <div className="relative z-10 pt-10">
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
                      {featuredEvent.time}
                    </div>
                  </div>
                </div>

                {/* date widget */}
                <div className="shrink-0 bg-yellow-400 p-6 text-center brutalist-shadow border-2 border-black min-w-[100px]">
                  <span className="block text-[9px] font-black text-black/60 tracking-widest mb-1 uppercase">DATE</span>
                  <span className="block text-3xl font-space font-black text-black">{featuredEvent.date}</span>
                </div>
              </div>

              <p className="text-lg lg:text-xl font-bold uppercase tracking-tight text-white/65 leading-tight max-w-3xl">
                {featuredEvent.desc}
              </p>
            </div>
          </motion.div>

          {/* SECONDARY EVENTS */}
          {events.slice(0, 2).map((ev, idx) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18 + idx * 0.1 }}
              className="lg:col-span-6 premium-card p-10 bg-white group flex flex-col min-h-[300px] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-auto">
                <div className="w-14 h-14 bg-black flex flex-col items-center justify-center brutalist-shadow-sm text-white border-2 border-black">
                  <span className="text-[9px] font-black uppercase text-white/60 leading-none">{ev.date.split(" ")[0]}</span>
                  <span className="text-xl font-space font-black leading-tight">{ev.date.split(" ")[1]}</span>
                </div>
                <span className="text-[9px] font-black text-black/40 tracking-[0.3em] uppercase border border-black/20 px-3 py-1">
                  {ev.type}
                </span>
              </div>

              <div className="mt-8">
                <h4
                  className="font-space font-black text-black tracking-tighter uppercase mb-4 group-hover:text-yellow-500 transition-colors"
                  style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 0.9 }}
                >
                  {ev.name}
                </h4>
                <p className="text-[11px] font-bold text-black/55 uppercase tracking-wide mb-6 leading-relaxed">
                  {ev.desc}
                </p>
                <div className="pt-6 border-t-2 border-black/10 flex items-center justify-between group-hover:border-black transition-colors">
                  <span className="text-[10px] font-black tracking-widest text-black/50 uppercase">LEARN MORE</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* TERTIARY EVENTS */}
          {events.slice(2).map((ev, idx) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 + idx * 0.1 }}
              className="lg:col-span-6 premium-card p-10 bg-white group flex items-center justify-between gap-8 min-h-[200px] cursor-pointer"
            >
              <div className="flex-1">
                <span className="text-[9px] font-black text-black/40 tracking-[0.4em] uppercase block mb-3">{ev.type}</span>
                <h4
                  className="font-space font-black text-black tracking-tighter uppercase mb-3 group-hover:text-yellow-500 transition-colors"
                  style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", lineHeight: 0.9 }}
                >
                  {ev.name}
                </h4>
                <p className="text-[11px] font-bold text-black/55 uppercase tracking-wide">
                  {ev.desc}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-4">
                <span className="text-xl font-space font-black text-black italic">{ev.date}</span>
                <div className="w-11 h-11 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <MoveRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
