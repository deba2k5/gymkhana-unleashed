"use client";

import { Link } from "react-router-dom";
import { Instagram, Sparkles, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/iem.gymkhana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const navLinks = {
  discover: ["Societies", "Events", "Galleria", "Initiatives"],
  connect: ["Portal Access", "Team Hierarchy", "IEM Main", "UEM Hub"],
};

const Footer = () => (
  <footer className="relative bg-background text-foreground pt-28 pb-12 px-6 lg:px-12 border-t-4 border-yellow-400 dark:border-violet-600 overflow-hidden transition-colors">

    {/* Watermark */}
    <div className="absolute bottom-0 left-0 select-none pointer-events-none overflow-hidden">
      <span
        className="font-space font-black tracking-tighter uppercase whitespace-nowrap text-foreground opacity-[0.03]"
        style={{ fontSize: "28vw", lineHeight: 0.85 }}
      >
        GYMKHANA
      </span>
    </div>

    <div className="relative max-w-[1400px] mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">

        {/* BRAND */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-5 mb-10">
            <Link
              to="/"
              className="w-20 h-20 bg-white border-2 border-yellow-400 flex items-center justify-center p-3 brutalist-shadow hover:-rotate-6 transition-transform"
            >
              <img src="/IEM_logo.jpeg" alt="IEM Logo" className="w-full h-full object-contain" />
            </Link>

            <div>
              <h3
                className="font-space font-black tracking-tighter uppercase text-foreground"
                style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", lineHeight: 0.9 }}
              >
                IEM STUDENT <span className="text-yellow-400">GYMKHANA</span>
              </h3>

              <span className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase block mt-2">
                TECHNICAL EXCELLENCE HUB
              </span>
            </div>
          </div>

          <p className="text-base font-bold uppercase tracking-tight text-foreground/60 leading-relaxed mb-10 max-w-md">
            IEM Student Gymkhana — the engine of innovation, culture, and leadership excellence on campus.
          </p>

          {/* ✅ ONLY INSTAGRAM */}
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border-[3px] border-primary/25 flex items-center justify-center text-foreground/60 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all brutalist-shadow-sm"
              >
                <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
                  {s.icon}
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* NAV */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">

          {/* Discover */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-yellow-400" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/70">DISCOVER</h4>
            </div>
            <ul className="space-y-5">
              {navLinks.discover.map((l) => (
                <li key={l}>
                  <Link
                    to="#"
                    className="text-sm font-black text-foreground/50 hover:text-foreground uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1.5px] bg-yellow-400 transition-all" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-blue-400" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/70">CONNECT</h4>
            </div>
            <ul className="space-y-5">
              {navLinks.connect.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm font-black text-foreground/50 hover:text-foreground uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1.5px] bg-blue-400 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-foreground" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/70">SUBSCRIBE</h4>
            </div>

            <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-6">
              GET LATEST UPDATES ON CAMPUS EVENTS AND OPPORTUNITIES.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full px-5 py-4 bg-foreground/5 border-[3px] border-primary/25 text-xs font-black text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-yellow-400"
              />

              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-yellow-400 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <MoveRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="pt-10 border-t-2 border-primary/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

        <p className="text-[10px] font-black uppercase tracking-[0.45em] text-foreground/35">
          © 2026 GYMKHANA_OS_V3.0
        </p>

        <div className="flex items-center gap-3 px-5 py-2.5 bg-yellow-400 text-black text-[10px] font-black tracking-widest uppercase brutalist-shadow-sm">
          <Sparkles className="w-4 h-4" />
          By Debangshu , Debangkita
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;