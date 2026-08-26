"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { clubs } from "@/data/societiesData";

// TODO: replace with the live auditions Google Form link when available
const AUDITION_FORM_LINK = "";

// Fallback logos for clubs without a dedicated `logo` field in societiesData
const fallbackLogoMap: Record<string, string> = {
  photography: "/Photography.png",
  film: "/film.jpg",
};

const categoryStyles: Record<string, string> = {
  CULTURAL: "bg-pink-500 text-white",
  TECHNICAL: "bg-blue-500 text-white",
  LITERARY: "bg-purple-500 text-white",
  MANAGEMENT: "bg-orange-400 text-black",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const AuditionsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openClubs = useMemo(() => clubs.filter((club) => club.formLink), []);
  const categories = useMemo(
    () => ["ALL", ...Array.from(new Set(openClubs.map((c) => c.category)))],
    [openClubs]
  );
  const visibleClubs = useMemo(
    () =>
      activeCategory === "ALL"
        ? openClubs
        : openClubs.filter((c) => c.category === activeCategory),
    [openClubs, activeCategory]
  );

  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Navbar />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-transparent border-b-4 border-primary overflow-hidden transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.05]" />
          <div className="absolute top-0 left-0 w-[55%] h-[55%] bg-yellow-400/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-black uppercase text-foreground/60 hover:text-yellow-400 mb-10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 bg-yellow-400 px-5 py-2 rounded-full shadow-[0_4px_20px_hsl(var(--yellow-400)/0.4)] transition-colors">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600/60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                </span>
                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-black">
                  Auditions Live
                </span>
              </div>

              <h1
                className="font-space font-black tracking-tighter text-foreground mb-6 transition-colors"
                style={{ fontSize: "clamp(3.5rem,11vw,10rem)", lineHeight: 0.85 }}
              >
                JOIN THE <br />
                <span style={{ WebkitTextStroke: "2px hsl(var(--yellow-400))", color: "transparent" }}>
                  GYMKHANA.
                </span>
              </h1>

              <p className="text-lg font-bold uppercase tracking-tight text-foreground/50 max-w-2xl leading-relaxed transition-colors">
                Auditions are now open across our clubs and societies. Sign up, show us
                what you've got, and become part of the crew that runs IEM's biggest
                stages, screens, and scoreboards.
              </p>

              {AUDITION_FORM_LINK ? (
                <a
                  href={AUDITION_FORM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1 hover:shadow-[8px_8px_0px_hsl(var(--primary)/var(--shadow-opacity))] active:translate-y-0 active:shadow-[3px_3px_0px_hsl(var(--primary)/var(--shadow-opacity))] transition-all"
                >
                  Apply Now
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              ) : (
                <div className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-background border-[3px] border-primary rounded-2xl text-foreground/60 text-sm font-black uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-yellow-500 shrink-0" />
                  Application form opening soon — check the open auditions below
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-24 border-b-4 border-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-14 h-[3px] bg-yellow-400" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/40">
                How It Works
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Pick Your Society",
                  desc: "Browse the clubs below and find the one that matches your passion — cultural, technical, or sports.",
                },
                {
                  step: "02",
                  title: "Fill The Form",
                  desc: "Hit Apply Now on the club of your choice and fill out the audition form with your details.",
                },
                {
                  step: "03",
                  title: "Show Up & Perform",
                  desc: "Attend the audition slot, bring your best, and join the society that keeps IEM Gymkhana alive.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="group p-8 border-[3px] border-primary bg-background rounded-3xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_hsl(var(--primary)/var(--shadow-opacity))] transition-all duration-300"
                >
                  <div className="text-5xl font-space font-black text-yellow-400 mb-4 group-hover:scale-110 origin-left transition-transform duration-300">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-space font-black uppercase tracking-tighter text-foreground mb-3 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-tight text-foreground/50 leading-relaxed transition-colors">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OPEN AUDITIONS ─── */}
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-[3px] bg-yellow-400" />
                  <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/40">
                    Open Auditions
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground/40 uppercase tracking-wide">
                  {openClubs.length} {openClubs.length === 1 ? "society" : "societies"} recruiting right now
                </p>
              </div>

              {/* CATEGORY FILTER */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border-2 border-primary transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground/60 hover:text-foreground hover:bg-yellow-400/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {visibleClubs.map((club) => (
                  <motion.div
                    key={club.id}
                    variants={item}
                    className="group relative p-8 border-[3px] border-primary bg-background rounded-3xl flex flex-col overflow-hidden shadow-[5px_5px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_hsl(var(--primary)/var(--shadow-opacity))] transition-all duration-300"
                  >
                    {/* corner glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-yellow-400/20 transition-colors duration-500" />

                    <div className="relative flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-[3px] border-primary bg-black shadow-[0_0_0_4px_hsl(var(--yellow-400)/0.25)] group-hover:shadow-[0_0_0_6px_hsl(var(--yellow-400)/0.35)] transition-all duration-300">
                        <img
                          src={club.logo || fallbackLogoMap[club.id] || "/coming.png"}
                          alt={`${club.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-[0.3em] uppercase mb-1.5 ${
                            categoryStyles[club.category] || "bg-yellow-400 text-black"
                          }`}
                        >
                          {club.category}
                        </span>
                        <h3 className="font-space font-black text-foreground uppercase tracking-tighter transition-colors text-xl leading-tight">
                          {club.name}
                        </h3>
                      </div>
                    </div>

                    <p className="relative text-[12px] font-bold text-foreground/70 normal-case tracking-normal leading-relaxed mb-5 transition-colors">
                      {club.about}
                    </p>

                    <div className="relative mt-auto pt-5 border-t-2 border-primary/10">
                      {club.formLink && (
                        <a
                          href={club.formLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full text-[11px] font-black uppercase tracking-wide hover:-translate-y-[1px] hover:shadow-[0_4px_16px_hsl(var(--yellow-400)/0.5)] transition-all"
                        >
                          <ArrowUpRight className="w-3 h-3" />
                          Apply Now
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditionsPage;
