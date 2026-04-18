"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Trophy, Search, ChevronDown, Users, Award, Star, Medal, GraduationCap, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { awardsData, type AwardCategory } from "../data/awardsData";

// Department badge colour map
const deptColors: Record<string, string> = {
  CSE: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  ECE: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  EE: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-violet-300",
  EEE: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  IT: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  ME: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  IoT: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  IoTCSBT: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  BCA: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  BBA: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  MBA: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  CSBS: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
};

const getDeptColor = (dept: string) => {
  const key = Object.keys(deptColors).find((k) => dept.startsWith(k));
  return key ? deptColors[key] : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300";
};

const categoryIcons: Record<string, typeof Trophy> = {
  "scientific-mind": Star,
  "techno-wiz": Medal,
  "overall-performance": Trophy,
  "best-contribution": Award,
  "academic-excellence": GraduationCap,
};

/* ── AWARD CARD (lazy expanded panel) ── */
function AwardPanel({ category, delay, index }: { category: AwardCategory; delay: number; index: number }){
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const Icon = categoryIcons[category.id] ?? Trophy;

  const filtered = category.recipients.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay }}
  className={`relative border-[2px] border-primary bg-card overflow-hidden ${
    index === 0 ? "gold-border-glow" : "brutalist-shadow"
  }`}
>
      
      {/* ── HEADER ── */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left group"
      >
        <div className="flex items-center justify-between gap-4 p-6 lg:p-8">
          <div className="flex items-center gap-5">


            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-foreground/50 mb-1 transition-colors">
                {category.title}
              </p>
              <h3 className="font-space font-black text-foreground tracking-tighter uppercase leading-none text-xl md:text-2xl transition-colors">
                {category.subtitle}
              </h3>
              <p className="mt-2 text-xs font-bold text-foreground/50 uppercase tracking-widest transition-colors">
                {category.recipients.length} Recipients
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">


            {/* Toggle */}
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 border-[2px] border-primary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all brutalist-shadow-sm"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* Accent bar */}
        <div className="h-[3px] w-full" style={{ background: category.accentDark }} />
      </button>

      {/* ── EXPANDED PANEL ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 lg:p-8 border-t-[3px] border-primary/20">
              {/* Search bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search by name or department…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-background border-[2px] border-primary/30 focus:border-primary text-sm font-bold text-foreground placeholder:text-foreground/35 focus:outline-none transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Results tag */}
              {search && (
                <p className="text-xs font-black text-foreground/50 uppercase tracking-widest mb-4">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"
                </p>
              )}

              {/* Recipients grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filtered.map((r, i) => (
                  <motion.div
                    key={`${r.name}-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.015, duration: 0.3 }}
                    className="flex items-center gap-3 p-3 bg-background border-[2px] border-primary/15 hover:border-primary/60 transition-all group/card"
                  >
                    {/* Serial number */}
                    <span
                      className="w-7 h-7 shrink-0 flex items-center justify-center text-[10px] font-black border-[2px] border-primary/20 text-foreground/50 group-hover/card:border-primary/60 transition-all"
                      style={{ fontSize: "9px" }}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-black text-foreground uppercase tracking-tight leading-tight truncate transition-colors group-hover/card:text-primary">
                        {r.name}
                      </p>
                      <span
                        className={`inline-block mt-1 text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-none ${getDeptColor(r.department)}`}
                      >
                        {r.department}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {filtered.length === 0 && (
                  <div className="col-span-full py-10 text-center text-foreground/40 font-bold uppercase tracking-widest text-sm">
                    No results found.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */
export default function AwardsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const totalRecipients = awardsData.reduce((acc, c) => acc + c.recipients.length, 0);

  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Navbar />

      {/* ══ HERO ══ */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-24 lg:pt-52 lg:pb-40 px-6 overflow-hidden border-b-4 border-primary"
      >
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        {/* Ambient glow behind the trophy */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] bg-violet-500/10 dark:bg-violet-600/15 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto z-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-14 h-[3px] bg-primary" />
            <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/50">
              IEM Gymkhana · 2026
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <h1
                className="font-space font-black tracking-tighter text-foreground uppercase"
                style={{ fontSize: "clamp(3.5rem,10vw,10rem)", lineHeight: 0.82 }}
              >
                ANNUAL
                <br />
                <span className="text-outline">AWARDS</span>
                <br />
                <span
                  className="text-primary"
                  style={{ fontSize: "clamp(2rem,5vw,5rem)" }}
                >
                
                </span>
              </h1>
            </motion.div>

            {/* Stats block */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex flex-wrap gap-4 lg:flex-col lg:items-end"
            >
              {[
                { label: "Award Categories", value: awardsData.length },
             
                { label: "Academic Year", value: "2025–26" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 py-4 border-[3px] border-primary bg-card brutalist-shadow-sm text-right transition-colors"
                >
                  <p
                    className="font-space font-black text-foreground"
                    style={{ fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50 mt-1 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 text-base md:text-lg font-bold uppercase tracking-tight text-foreground/55 max-w-2xl leading-relaxed border-l-4 border-primary pl-6 transition-colors"
          >
            Celebrating the brilliance, dedication, and extraordinary contributions of IEM's finest students across every department and discipline.
          </motion.p>
        </div>
      </section>



      {/* ══ AWARD PANELS ══ */}
      <main className="flex-1 py-20 lg:py-32 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
         {awardsData.map((cat, i) => (
  <div key={cat.id} id={cat.id} className="scroll-mt-24">
    <AwardPanel category={cat} delay={i * 0.05} index={i} />
  </div>
))}
        </div>
      </main>

      {/* ══ CLOSING BANNER ══ */}
      <section className="py-20 px-6 border-t-4 border-primary bg-card transition-colors">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-foreground/40 mb-3">
              IEM Student Gymkhana · Annual Award Ceremony
            </p>
            <h2
              className="font-space font-black text-foreground uppercase tracking-tighter"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", lineHeight: 0.88 }}
            >
              CONGRATULATIONS TO ALL <br />
              <span className="text-primary">AWARD WINNERS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground brutalist-shadow border-[3px] border-primary">
            <Trophy className="w-6 h-6" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Honoured</p>
              <p className="font-space font-black text-3xl">{totalRecipients}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
