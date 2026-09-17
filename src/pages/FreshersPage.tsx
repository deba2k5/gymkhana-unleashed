"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Users, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/seo/Seo";
import { seoRoutes } from "@/seo/seoConfig";

const FRESHERS_FORM_LINK = "https://forms.gle/MEgdiumm3YdJzG4o7";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FreshersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Seo {...seoRoutes.freshers} />
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
                  Registrations Open
                </span>
              </div>

              <h1
                className="font-space font-black tracking-tighter text-foreground mb-6 transition-colors"
                style={{ fontSize: "clamp(3.5rem,11vw,10rem)", lineHeight: 0.85 }}
              >
                WELCOME, <br />
                <span style={{ WebkitTextStroke: "2px hsl(var(--yellow-400))", color: "transparent" }}>
                  FRESHERS.
                </span>
              </h1>

              <p className="text-lg font-bold uppercase tracking-tight text-foreground/50 max-w-2xl leading-relaxed transition-colors">
                Your IEM journey starts here. Register with the Gymkhana to get plugged
                into clubs, societies, events, and everything that makes campus life at
                IEM unforgettable.
              </p>

              <a
                href={FRESHERS_FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1 hover:shadow-[8px_8px_0px_hsl(var(--primary)/var(--shadow-opacity))] active:translate-y-0 active:shadow-[3px_3px_0px_hsl(var(--primary)/var(--shadow-opacity))] transition-all"
              >
                Register Now
                <ArrowUpRight className="w-5 h-5" />
              </a>
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
                  title: "Fill The Form",
                  desc: "Tap Register Now and share a few details about yourself — it only takes a minute.",
                },
                {
                  step: "02",
                  title: "Get Onboarded",
                  desc: "Our team adds you to the freshers network so you never miss a club update or event.",
                },
                {
                  step: "03",
                  title: "Explore & Join In",
                  desc: "Browse clubs and societies, attend auditions, and start building your IEM story.",
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

        {/* ─── WHY REGISTER ─── */}
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-14 h-[3px] bg-yellow-400" />
              <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/40">
                Why Register
              </span>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                {
                  icon: Users,
                  title: "20+ Clubs & Societies",
                  desc: "From cultural to technical to literary — find the crew that matches your passion.",
                },
                {
                  icon: Sparkles,
                  title: "First Access To Events",
                  desc: "Get priority updates on auditions, fests, competitions, and workshops all year round.",
                },
                {
                  icon: Trophy,
                  title: "Build Your Campus Story",
                  desc: "Earn recognition, leadership roles, and lifelong friendships across IEM Gymkhana.",
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  className="group relative p-8 border-[3px] border-primary bg-background rounded-3xl overflow-hidden shadow-[5px_5px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_hsl(var(--primary)/var(--shadow-opacity))] transition-all duration-300"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-yellow-400/20 transition-colors duration-500" />

                  <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-400 mb-6 shadow-[0_4px_16px_hsl(var(--yellow-400)/0.4)]">
                    <f.icon className="w-7 h-7 text-black" />
                  </div>

                  <h3 className="relative font-space font-black text-foreground uppercase tracking-tighter text-xl leading-tight mb-3 transition-colors">
                    {f.title}
                  </h3>
                  <p className="relative text-[12px] font-bold text-foreground/70 normal-case tracking-normal leading-relaxed transition-colors">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16 flex flex-col items-center text-center gap-6 p-10 border-[3px] border-primary bg-background rounded-3xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))]">
              <h3 className="font-space font-black uppercase tracking-tighter text-foreground text-2xl sm:text-3xl">
                Ready to join the Gymkhana?
              </h3>
              <p className="text-sm font-bold uppercase tracking-tight text-foreground/50 max-w-xl">
                Registration takes less than two minutes. Don't miss out on the year ahead.
              </p>
              <a
                href={FRESHERS_FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1 hover:shadow-[8px_8px_0px_hsl(var(--primary)/var(--shadow-opacity))] active:translate-y-0 active:shadow-[3px_3px_0px_hsl(var(--primary)/var(--shadow-opacity))] transition-all"
              >
                Register Now
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreshersPage;
