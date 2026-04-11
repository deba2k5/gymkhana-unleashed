"use client";

import { useRef } from "react";
import { ArrowUpRight, MoveRight, Radio } from "lucide-react";
import { motion, useInView } from "framer-motion";

const featuredNews = {
  headline: "IEM Receives 'University of the Year' Excellence Award",
  tag: "BREAKING_NEWS",
  date: "LIVE NOW",
  desc: "IEM Kolkata has been recognized nationally for its contribution to student leadership, pioneering open-source technical education, and cultural infrastructure development.",
};

const newsTrack1 = [
  { headline: "Robotics Championship 2024 Secured",      tag: "TECH",     date: "2H AGO"   },
  { headline: "Campus Marathon: 3000+ Participants",      tag: "SPORTS",   date: "4H AGO"   },
  { headline: "AI Lab V2.0 Phase Integration Complete",   tag: "INFRA",    date: "08 MAR"  },
  { headline: "Dance Troupe Gold at All-India Festival",  tag: "CULTURE",  date: "05 MAR"  },
];

const newsTrack2 = [
  { headline: "Literary Anthology 'Echoes' Released",     tag: "LITERARY", date: "02 MAR"  },
  { headline: "Startup Bootcamp Batch 24 Launched",       tag: "INNOV",    date: "28 FEB"  },
  { headline: "Debate Team Qualifies for Nationals",      tag: "CIVIC",    date: "25 FEB"  },
  { headline: "Cybersecurity Workshop: Industry Leaders", tag: "TECH",     date: "20 FEB"  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-52 bg-white border-t-4 border-black overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-20 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[3px] bg-black" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-black/50">
                BULLETIN
              </span>
            </div>
            <h2
              className="font-space font-black tracking-tighter text-black"
              style={{ fontSize: "clamp(3.5rem,10vw,9.5rem)", lineHeight: 0.82 }}
            >
              LATEST<br />
              <span className="text-outline">REPORTS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-8 py-4 bg-black text-white text-xs font-black tracking-widest uppercase brutalist-shadow border-2 border-black self-start lg:self-auto">
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
            className="group relative bg-black p-10 lg:p-16 overflow-hidden brutalist-shadow-lg cursor-pointer flex flex-col justify-between min-h-[500px] border-[3px] border-black"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />

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
              <div className="w-14 h-14 border-2 border-white/25 flex items-center justify-center text-white group-hover/link:bg-white group-hover/link:text-black transition-all duration-400">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black text-white tracking-widest uppercase group-hover/link:translate-x-2 transition-transform">
                READ FULL REPORT
              </span>
            </div>
          </motion.div>

          {/* MARQUEE NEWS TRACKS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex flex-col justify-center gap-8 overflow-hidden py-2"
          >
            {/* Track 1 */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee-slow whitespace-nowrap gap-6">
                {[...newsTrack1, ...newsTrack1, ...newsTrack1].map((n, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[340px] border-[3px] border-black p-7 bg-white hover:bg-yellow-50 transition-colors cursor-pointer group"
                    style={{ boxShadow: "4px 4px 0px 0px #000" }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black text-black/50 tracking-[0.4em] uppercase border border-black/20 px-2 py-0.5">
                        {n.tag}
                      </span>
                      <span className="text-[10px] font-black text-black/60 uppercase tracking-wide">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-space font-black text-black tracking-tighter uppercase leading-tight group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {n.headline}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 (reversed) */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee-slower whitespace-nowrap gap-6">
                {[...newsTrack2, ...newsTrack2, ...newsTrack2].map((n, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[340px] border-[3px] border-black p-7 bg-black hover:bg-gray-900 transition-colors cursor-pointer group"
                    style={{ boxShadow: "4px 4px 0px 0px #FACC15" }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black text-white/50 tracking-[0.4em] uppercase border border-white/20 px-2 py-0.5">
                        {n.tag}
                      </span>
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-wide">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-space font-black text-white tracking-tighter uppercase leading-tight group-hover:text-yellow-400 transition-colors line-clamp-2">
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
