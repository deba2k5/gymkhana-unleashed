"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Societies", "Events", "Members", "FAQ"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 PATH FIX FUNCTION
  const getPath = (item: string) => {
    if (item === "Home") return "/";
    if (item === "Societies") return "/societies";
    if (item === "Members") return "/members";
    if (item === "FAQ") return "/faq";
    return `#${item.toLowerCase()}`; // Events etc.
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        
        <div
          className={`w-full max-w-[1100px] transition-all duration-300 rounded-2xl ${
            scrolled
              ? "bg-[#7a2e2e]/95 backdrop-blur-lg shadow-xl py-3"
              : "bg-[#7a2e2e]/90 backdrop-blur-md py-4"
          }`}
        >
          <div className="flex items-center justify-between px-5 md:px-8">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img
                src="/IEM_logo.jpeg"
                alt="IEM Logo"
                className="h-10 md:h-12 object-contain"
              />
            </a>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={getPath(item)}
                    className="relative text-xs font-orbitron font-semibold text-white/80 hover:text-white transition-colors uppercase tracking-[0.2em]
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* 🔥 FLOATING MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4 md:hidden">
          
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* MENU CARD */}
          <div className="relative w-full max-w-[350px] bg-[#7a2e2e]/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 flex flex-col gap-6 animate-slideDown">

            {/* CLOSE */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* ITEMS */}
            {navItems.map((item) => (
              <a
                key={item}
                href={getPath(item)}   // ✅ FIXED HERE
                onClick={() => setMobileOpen(false)}
                className="text-lg font-orbitron font-semibold text-white text-center hover:text-gray-200 transition-colors uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.3s ease;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;