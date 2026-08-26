"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./ModeToggle";

const navItems = [
  { name: "Home", path: "/", id: "01" },
  { name: "Oath", path: "/oath", id: "02" },
  { name: "Societies", path: "/societies", id: "03" },
  { name: "Events", path: "/events", id: "04" },
  { name: "Awards", path: "/awards", id: "05" },
  { name: "Members", path: "/members", id: "06" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 inset-x-4 sm:top-5 sm:inset-x-6 z-50"
      >
        <div className="max-w-[1440px] mx-auto backdrop-blur-lg border-[3px] border-primary rounded-2xl bg-background/95 shadow-[5px_5px_0px_hsl(var(--yellow-400))] dark:shadow-[5px_5px_0px_#8B5CF6] transition-colors">
          <div className="px-4 sm:px-6 flex items-center justify-between h-[56px] sm:h-[64px]">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 group flex-1 min-w-0">
              
              {/* ✅ LOGO BOX WITH THEME SHADOW */}
              <div
                className="
                  w-11 h-11 bg-white flex items-center justify-center p-[4px]
                  border border-primary/10
                  shadow-[3px_3px_0px_hsl(var(--yellow-400))]
                  dark:shadow-[3px_3px_0px_#8B5CF6]
                "
              >
                <img
                  src="/IEM_logo.jpeg"
                  alt="IEM logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="leading-none flex-1 min-w-0">
                <div className="font-black uppercase tracking-wider text-[12px] sm:text-[14px] flex items-center gap-1 whitespace-nowrap">
                  <span className="text-black dark:text-white">IEM</span>
                  <span className="text-black dark:text-white">STUDENTS’</span>
                  <span className="text-black dark:text-yellow-400 drop-shadow-[1px_1px_0px_#000]">
                    GYMKHANA
                  </span>
                </div>

                <div className="text-[8px] font-bold text-foreground/40 tracking-[0.5em] uppercase mt-1 hidden sm:block">
                  THE CENTRAL HUB
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`relative px-5 py-2 text-[12px] font-black uppercase tracking-widest transition-all duration-200 group
                        hover:-translate-y-[1px] active:translate-y-[2px]
                        ${
                          isActive
                            ? "dark:text-black text-primary-foreground"
                            : "text-foreground/60 hover:text-foreground"
                        }
                      `}
                    >
                      {/* ✅ ACTIVE TAB */}
                      {isActive && (
                        <span
                          className="
                            absolute inset-0 -z-10
                            dark:bg-white bg-primary
                            shadow-[3px_3px_0px_hsl(var(--yellow-400))]
                            dark:shadow-[3px_3px_0px_#8B5CF6]
                          "
                        />
                      )}

                      <span className="relative z-10">{item.name}</span>

                      {!isActive && (
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <Link
                to="/auditions"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest rounded-full shadow-[0_2px_10px_hsl(var(--yellow-400)/0.4)] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_hsl(var(--yellow-400)/0.55)] active:translate-y-0 transition-all shrink-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600/60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                </span>
                Auditions Live
              </Link>

              <div className="hidden sm:block">
                <ModeToggle />
              </div>

              {/* 🍔 HAMBURGER */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-white z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="font-black text-lg tracking-wide text-white">MENU</span>
                <ModeToggle />
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-6 px-6 py-10">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/auditions"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest rounded-full w-fit"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600/60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                  </span>
                  Auditions Live
                </Link>
              </motion.div>

              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="
                      relative text-2xl font-black uppercase tracking-wide
                      text-white/80 hover:text-yellow-400
                      transition-all duration-300
                      group block w-fit
                    "
                  >
                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>

                    <span className="
                      absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400
                      group-hover:w-full transition-all duration-300
                    " />

                    <span className="
                      absolute inset-0 bg-white/5 scale-x-0 origin-left
                      group-hover:scale-x-100 transition-transform duration-300 -z-10
                    " />
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;