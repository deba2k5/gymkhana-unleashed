"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/eventsData";

const navItems = [
  { name: "Home",      path: "/",          id: "01" },
  { name: "Oath",      path: "/oath",      id: "02" },
  { name: "Societies", path: "/societies", id: "03" },
  { name: "Events",    path: "/events",    id: "04", hasDropdown: true },
  { name: "Members",   path: "/members",   id: "05" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setEventsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ══════════════════════════════════════════════
          DESKTOP / TABLET NAV BAR
      ══════════════════════════════════════════════ */}
      <motion.nav
        animate={{ y: scrolled ? 0 : 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Top yellow accent line */}
        <div className="h-1 w-full bg-yellow-400" />

        {/* Main bar */}
        <div
          className="w-full transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.97)"
              : "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: scrolled ? "3px solid #000" : "3px solid rgba(0,0,0,0.12)",
            boxShadow: scrolled ? "0 4px 0px 0px #000" : "none",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center gap-4 group flex-shrink-0">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-11 h-11 bg-black flex items-center justify-center p-[7px]"
                style={{ boxShadow: "3px 3px 0px 0px #FACC15" }}
              >
                <img
                  src="/iem-3d-logo.png"
                  alt="IEM"
                  className="w-full h-full object-contain invert"
                />
              </motion.div>

              <div className="leading-none ml-2">
                <div className="font-outfit font-black text-black uppercase tracking-widest text-[1rem] leading-none flex items-center gap-1.5 overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  >
                    IEM
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-black/50"
                  >
                    STUDENT
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="text-yellow-500"
                  >
                    GYMKHANA
                  </motion.span>
                </div>
                <div className="text-[8px] font-bold text-black/40 tracking-[0.6em] uppercase mt-1.5">
                  THE CENTRAL HUB
                </div>
              </div>
            </Link>

            {/* ── DESKTOP NAV LINKS ── */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                if (item.hasDropdown) {
                  return (
                    <li key={item.name} className="relative" ref={dropdownRef}>
                      {/* Events trigger */}
                      <button
                        onClick={() => setEventsOpen(o => !o)}
                        className="relative px-5 py-2 flex items-center gap-1.5 group"
                      >
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-black"
                            style={{ zIndex: -1 }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span
                          className={`text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-200 ${
                            isActive ? "text-white" : "text-black/45 group-hover:text-black"
                          }`}
                        >
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isActive ? "text-white" : "text-black/40 group-hover:text-black"
                          } ${eventsOpen ? "rotate-180" : ""}`}
                        />
                        {!isActive && (
                          <span className="absolute bottom-0 left-5 right-5 h-[2.5px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250" />
                        )}
                      </button>

                      {/* Dropdown panel */}
                      <AnimatePresence>
                        {eventsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scaleY: 0.9 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: 8, scaleY: 0.95 }}
                            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                            style={{
                              transformOrigin: "top center",
                              boxShadow: "6px 6px 0 0 #000",
                            }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white border-[3px] border-black z-[200]"
                          >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-black bg-black">
                              <span className="text-[10px] font-black text-white/50 tracking-[0.4em] uppercase">
                                ALL EVENTS — 2025 / 2026
                              </span>
                              <Link
                                to="/events"
                                className="flex items-center gap-1.5 text-[10px] font-black text-yellow-400 uppercase tracking-widest hover:text-white transition-colors"
                                onClick={() => setEventsOpen(false)}
                              >
                                VIEW ALL
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            {/* Events grid */}
                            <div className="grid grid-cols-2 gap-0 max-h-[420px] overflow-y-auto">
                              {events.map((ev, i) => (
                                <Link
                                  key={ev.id}
                                  to={`/events/${ev.slug}`}
                                  onClick={() => setEventsOpen(false)}
                                  className="group flex items-center gap-4 px-5 py-4 border-b border-r border-black/10 hover:bg-yellow-50 hover:border-yellow-400 transition-all last:border-b-0"
                                >
                                  {/* Thumbnail */}
                                  <div className="w-14 h-10 shrink-0 border-2 border-black overflow-hidden bg-black/5">
                                    <img
                                      src={`/events/${ev.images[0]}`}
                                      alt={ev.shortName}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                      }}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-[8px] font-black text-black/35 tracking-[0.3em] uppercase block leading-none mb-1">
                                      {ev.displayDate} · {ev.category}
                                    </span>
                                    <span className="text-[12px] font-space font-black text-black uppercase tracking-tight leading-tight group-hover:text-yellow-700 transition-colors truncate block">
                                      {ev.shortName}
                                    </span>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-black/20 group-hover:text-yellow-600 shrink-0 transition-colors" />
                                </Link>
                              ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="border-t-2 border-black px-6 py-3 bg-yellow-400 flex items-center justify-between">
                              <span className="text-[10px] font-black text-black/60 uppercase tracking-widest">
                                {events.length} EVENTS TOTAL
                              </span>
                              <Link
                                to="/events"
                                onClick={() => setEventsOpen(false)}
                                className="flex items-center gap-2 text-[11px] font-black text-black uppercase tracking-widest hover:underline"
                              >
                                EXPLORE FULL CALENDAR
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="relative px-5 py-2 flex items-center gap-1.5 group"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-black"
                          style={{ zIndex: -1 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span
                        className={`
                          text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-200
                          ${isActive ? "text-white" : "text-black/45 group-hover:text-black"}
                        `}
                      >
                        {item.name}
                      </span>
                      {!isActive && (
                        <span className="absolute bottom-0 left-5 right-5 h-[2.5px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── RIGHT: STATUS + CTA + HAMBURGER ── */}
            <div className="flex items-center gap-4">
              {/* Live pill */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border-2 border-black/10 bg-black/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black text-black/40 tracking-widest uppercase">
                  LIVE
                </span>
              </div>

              {/* CTA button */}
              <Link
                to="/members"
                className="hidden sm:flex items-center gap-2 font-space font-black text-[11px] uppercase tracking-[0.15em] text-white px-6 h-10 border-[3px] border-black bg-black transition-all duration-200"
                style={{ boxShadow: "4px 4px 0px 0px #FACC15" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#FACC15";
                  (e.currentTarget as HTMLElement).style.color = "#000";
                  (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px 0px #000";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#000";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px 0px #FACC15";
                }}
              >
                TEAM
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-11 h-11 border-[3px] border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all"
                style={{ boxShadow: "3px 3px 0px 0px #000" }}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════════
          FULL-SCREEN MOBILE MENU OVERLAY
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[100] bg-black flex flex-col"
          >
            {/* Top accent */}
            <div className="h-1 bg-yellow-400 w-full flex-shrink-0" />

            {/* Header row */}
            <div className="flex justify-between items-center px-8 py-6 border-b-2 border-white/10 flex-shrink-0">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 bg-yellow-400 flex items-center justify-center p-[6px]"
                  style={{ boxShadow: "3px 3px 0px 0px #fff" }}
                >
                  <img src="/iem-3d-logo.png" alt="IEM" className="w-full h-full object-contain" />
                </div>
                <span className="font-space font-black text-white text-lg uppercase tracking-tighter">
                  IEM <span className="text-yellow-400">GYMKHANA</span>
                </span>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-12 h-12 border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-start px-8 gap-0 overflow-y-auto py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  {item.hasDropdown ? (
                    <>
                      {/* Events accordion header */}
                      <button
                        onClick={() => setMobileEventsOpen(o => !o)}
                        className="group w-full flex items-center justify-between py-5 border-b border-white/10 hover:border-yellow-400 transition-colors"
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-yellow-400 font-black text-sm font-space italic">{item.id}</span>
                          <span
                            className="font-space font-black uppercase tracking-tighter text-white group-hover:text-yellow-400 transition-colors"
                            style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)", lineHeight: 1 }}
                          >
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-8 h-8 text-white/30 group-hover:text-yellow-400 transition-all flex-shrink-0 ${mobileEventsOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Events accordion body */}
                      <AnimatePresence>
                        {mobileEventsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            {/* All Events link */}
                            <Link
                              to="/events"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between px-4 py-3 my-1 bg-yellow-400 border-2 border-black"
                              style={{ boxShadow: "3px 3px 0 0 #fff" }}
                            >
                              <span className="text-[12px] font-black text-black uppercase tracking-widest">VIEW ALL EVENTS</span>
                              <ArrowUpRight className="w-4 h-4 text-black" />
                            </Link>

                            {/* Individual events */}
                            <div className="grid grid-cols-1 gap-0 mb-4 border-2 border-white/10">
                              {events.map((ev) => (
                                <Link
                                  key={ev.id}
                                  to={`/events/${ev.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="group flex items-center gap-3 px-4 py-3 border-b border-white/10 hover:bg-white/5 transition-colors"
                                >
                                  <div className="w-12 h-8 shrink-0 border border-white/20 overflow-hidden bg-white/5">
                                    <img
                                      src={`/events/${ev.images[0]}`}
                                      alt=""
                                      className="w-full h-full object-cover"
                                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-[8px] font-black text-white/30 tracking-widest uppercase block">{ev.displayDate}</span>
                                    <span className="text-[12px] font-black text-white uppercase tracking-tight group-hover:text-yellow-400 transition-colors truncate block">
                                      {ev.shortName}
                                    </span>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-yellow-400 shrink-0 transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-yellow-400 transition-colors"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-yellow-400 font-black text-sm font-space italic">
                          {item.id}
                        </span>
                        <span
                          className="font-space font-black uppercase tracking-tighter text-white group-hover:text-yellow-400 transition-colors"
                          style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)", lineHeight: 1 }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-yellow-400 transition-colors flex-shrink-0" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Footer row */}
            <div className="px-8 py-6 border-t-2 border-white/10 flex-shrink-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-[9px] font-black text-white/30 tracking-[0.5em] uppercase mb-1">
                  CONTACT
                </div>
                <a
                  href="mailto:gymkhana@iem.edu.in"
                  className="font-space font-black text-white text-lg uppercase tracking-tight hover:text-yellow-400 transition-colors"
                >
                  GYMKHANA@IEM.EDU.IN
                </a>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-yellow-400 border-2 border-yellow-400">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="text-[10px] font-black text-black uppercase tracking-widest">
                  ALL SYSTEMS ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;