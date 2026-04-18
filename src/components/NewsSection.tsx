"use client";

import { useRef } from "react";
import { ArrowUpRight, MoveRight, Radio } from "lucide-react";
import { motion, useInView } from "framer-motion";

const featuredNews = {
  headline: "IEM Signs Historic MOU with IBM — Opens First IBM CAS in India",
  tag: "BREAKING_NEWS",
  date: "JAN 7, 2025",
  desc: "IEM signed a landmark MOU with IBM to open the first IBM Center for Advanced Studies (CAS), becoming a frontier of AI and enterprise technology education in India.",
};

const newsTrack1 = [
  { headline: "IEM-UEM Cyclothon 2025: Students Rally For Green Future",       tag: "SPORTS",   date: "JAN 19" },
  { headline: "Cannes Film Content Creators Festival 2025 — IEM in France",    tag: "CULTURE",  date: "APR 12" },
  { headline: "Innovate 2025: International Conference in Davos, Switzerland", tag: "TECH",     date: "APR 16" },
  { headline: "IIEEE World AI-IoT Congress 2025 — Seattle, Washington",        tag: "TECH",     date: "MAY 28" },
  { headline: "MoU with Pegasystems: First University in Eastern India",        tag: "ACADEMIC", date: "JUN 20" },
  { headline: "IEM Futsal 2025 — CSE Dept Clinches Championship",              tag: "SPORTS",   date: "JUL 12" },
];

const newsTrack2 = [
  { headline: "Comicverse 2025 — Fandom Unites the Campus",                   tag: "CULTURE",  date: "JUL 19" },
  { headline: "Bengal E-Summit 2025: Startup Culture Promoted at IEM",        tag: "INNOV",    date: "JUL 26" },
  { headline: "Freedom Cup 2025: Dravida Dominators Are Champions",           tag: "SPORTS",   date: "AUG 02" },
  { headline: "National Sports Day 2025 — Multi-Sport Celebration at IEM",    tag: "SPORTS",   date: "AUG 29" },
  { headline: "IEM MUN 2025 — Young Diplomats Debate Global Issues",           tag: "CIVIC",    date: "SEP 13" },
  { headline: "Smart Makers Festival 2025 — World's Innovators at IEM",       tag: "TECH",     date: "SEP 06" },
];

const newsTrack3 = [
  { headline: "Bienvenue 2025 — Freshers' Welcome Night Electrifies Campus",  tag: "CULTURE",  date: "OCT 17" },
  { headline: "IEM Badminton Blitz Season 3 — Rouhish Paul Takes Title",      tag: "SPORTS",   date: "OCT"    },
  { headline: "Homecoming 2025 — Alumni Return to Where It All Began",        tag: "ALUMNI",   date: "DEC 18" },
  { headline: "Inter-Year Football Championship — B.Tech 3rd Year Champions", tag: "SPORTS",   date: "DEC 07" },
  { headline: "Innovación 2026 — 150+ Projects, Global Participation",        tag: "TECH",     date: "MAR 13" },
  { headline: "IEM-UEM Kolkata Marathon 2026 — 10K, Half & Full Marathon",    tag: "SPORTS",   date: "FEB 22" },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-52 bg-background border-t-4 border-primary overflow-hidden transition-colors"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-20 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[3px] bg-primary transition-colors" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/50 transition-colors">
                BULLETIN
              </span>
            </div>
            <h2
              className="font-space font-black tracking-tighter text-foreground transition-colors"
              style={{ fontSize: "clamp(3.5rem,10vw,9.5rem)", lineHeight: 0.82 }}
            >
              LATEST<br />
              <span className="text-outline">REPORTS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground text-xs font-black tracking-widest uppercase brutalist-shadow border-2 border-primary self-start lg:self-auto transition-colors">
            <Radio className="w-4 h-4 text-yellow-400 animate-pulse" />
            LIVE FEED SYNCHRONIZED
          </div>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">

          {/* FEATURED NEWS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="group relative bg-black p-10 lg:p-16 overflow-hidden brutalist-shadow-lg cursor-pointer flex flex-col justify-between min-h-[500px] border-[3px] border-primary transition-colors"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,_rgba(250,204,21,0.1)_0%,_transparent_70%)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-1.5 bg-yellow-400 text-black text-[10px] font-black tracking-[0.2em] uppercase brutalist-shadow-sm">
                  {featuredNews.tag}
                </div>
                <span className="text-[10px] font-black text-white/50 tracking-[0.2em] uppercase">
                  {featuredNews.date}
                </span>
              </div>

              <h3
                className="font-space font-black text-white uppercase tracking-tighter mb-8 group-hover:text-yellow-400 transition-colors duration-500"
                style={{ fontSize: "clamp(2rem,5vw,3.8rem)", lineHeight: 0.9 }}
              >
                {featuredNews.headline}
              </h3>

              <p className="text-lg font-bold uppercase tracking-tight text-white/65 leading-snug max-w-md">
                {featuredNews.desc}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-5 mt-10 group/link">
              <div className="w-14 h-14 border-2 border-white/25 flex items-center justify-center text-white group-hover/link:bg-yellow-400 group-hover/link:border-yellow-400 group-hover/link:text-black transition-all duration-400">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black text-white tracking-widest uppercase group-hover/link:text-yellow-400 group-hover/link:translate-x-2 transition-all">
                READ FULL REPORT
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex flex-col justify-center gap-6 overflow-hidden py-2"
          >
            {/* Track 1 */}
            <div className="overflow-x-auto hide-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
              <div className="flex animate-marquee-slow whitespace-nowrap gap-6 min-w-max">
                {[...newsTrack1, ...newsTrack1, ...newsTrack1].map((n, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[320px] border-[3px] border-primary p-6 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group brutalist-shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black tracking-[0.4em] uppercase border border-primary/20 px-2 py-0.5 text-foreground/50 group-hover:text-primary-foreground/50 transition-colors">
                        {n.tag}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wide text-foreground/60 group-hover:text-primary-foreground/60 transition-colors">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-space font-black tracking-tighter uppercase leading-tight group-hover:text-primary-foreground transition-colors line-clamp-2">
                      {n.headline}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 (reversed) */}
            <div className="overflow-x-auto hide-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
              <div className="flex animate-marquee-slower whitespace-nowrap gap-6 min-w-max">
                {[...newsTrack2, ...newsTrack2, ...newsTrack2].map((n, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[320px] border-[3px] border-primary p-6 bg-card hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer group brutalist-shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black tracking-[0.4em] uppercase border border-primary/20 px-2 py-0.5 text-foreground/50 group-hover:text-black/50 transition-colors">
                        {n.tag}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wide text-foreground/60 group-hover:text-black/60 transition-colors">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-space font-black tracking-tighter uppercase leading-tight group-hover:text-black transition-colors line-clamp-2">
                      {n.headline}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 3 */}
            <div className="overflow-x-auto hide-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
              <div className="flex animate-marquee-slow whitespace-nowrap gap-6 min-w-max" style={{ animationDirection: "reverse" }}>
                {[...newsTrack3, ...newsTrack3, ...newsTrack3].map((n, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[320px] border-[3px] border-primary p-6 bg-yellow-400 text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group brutalist-shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black tracking-[0.4em] uppercase border border-black/20 px-2 py-0.5 group-hover:border-white/20 transition-colors">
                        {n.tag}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wide group-hover:text-white/60 transition-colors">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-space font-black tracking-tighter uppercase leading-tight group-hover:text-white transition-colors line-clamp-2">
                      {n.headline}
                    </h4>
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

export default NewsSection;
