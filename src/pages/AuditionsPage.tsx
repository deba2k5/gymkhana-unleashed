"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const AuditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Navbar />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-transparent border-b-4 border-primary overflow-hidden transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.05]" />
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-yellow-400/10 blur-[120px]" />

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
                  className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest border-[3px] border-primary shadow-[6px_6px_0px_var(--primary)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--primary)] active:translate-y-0 active:shadow-[3px_3px_0px_var(--primary)] transition-all"
                >
                  Apply Now
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              ) : (
                <div className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-background border-[3px] border-primary text-foreground/60 text-sm font-black uppercase tracking-widest">
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
                  className="p-8 border-[3px] border-primary bg-background shadow-[6px_6px_0px_var(--primary)] transition-colors"
                >
                  <div className="text-5xl font-space font-black text-yellow-400 mb-4">
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

        {/* ─── CLUB CONTACTS ─── */}
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-14 h-[3px] bg-yellow-400" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/40">
                Open Auditions
              </span>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {clubs.filter((club) => club.formLink).map((club) => (
                <motion.div
                  key={club.id}
                  variants={item}
                  className="p-8 border-[3px] border-primary bg-background flex flex-col shadow-[5px_5px_0px_var(--primary)] transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-[3px] border-primary bg-black shadow-[3px_3px_0px_hsl(var(--yellow-400))]">
                      <img
                        src={club.logo || fallbackLogoMap[club.id] || "/coming.png"}
                        alt={`${club.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-yellow-400 tracking-[0.4em] uppercase mb-1 block">
                        {club.category}
                      </span>
                      <h3 className="font-space font-black text-foreground uppercase tracking-tighter transition-colors text-xl leading-tight">
                        {club.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[11px] font-bold text-foreground/55 uppercase tracking-wide leading-relaxed line-clamp-2 mb-5 transition-colors">
                    {club.about}
                  </p>

                  <div className="mt-auto pt-5 border-t-2 border-primary/10">
                    {club.formLink && (
                      <a
                        href={club.formLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400 text-black rounded-full text-[11px] font-black uppercase tracking-wide hover:-translate-y-[1px] transition-all"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        Apply Now
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditionsPage;
