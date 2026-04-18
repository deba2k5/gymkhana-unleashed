"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AtmosphericBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none">
      {/* ── BASE COLOR ANIMATION ── */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isDark ? "#08040F" : "#fffef5",
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* ── MIDNIGHT NEBULA GLOWS (DARK MODE ONLY) ── */}
      <AnimatePresence>
        {isDark && (
          <>
            {/* Primary Glow — Electric Violet (top-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 0.22,
                scale: 1,
                x: [0, 40, -30, 15, 0],
                y: [0, -50, 30, -20, 0],
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                opacity: { duration: 1.2 },
                scale: { duration: 1.2 },
                x: { duration: 28, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 22, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                background: "radial-gradient(ellipse, rgba(124,58,237,0.9) 0%, rgba(109,40,217,0.4) 40%, transparent 70%)",
              }}
              className="absolute top-[-15%] right-[-10%] w-[65vw] h-[65vw] rounded-full blur-[100px]"
            />

            {/* Secondary Glow — Vivid Fuchsia/Magenta (bottom-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 0.16,
                scale: 1,
                x: [0, -60, 35, -20, 0],
                y: [0, 50, -30, 20, 0],
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                opacity: { duration: 1.2 },
                scale: { duration: 1.2 },
                x: { duration: 35, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 26, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                background: "radial-gradient(ellipse, rgba(192,38,211,0.85) 0%, rgba(168,85,247,0.35) 45%, transparent 70%)",
              }}
              className="absolute bottom-[-20%] left-[-15%] w-[75vw] h-[75vw] rounded-full blur-[120px]"
            />

            {/* Tertiary Glow — Deep Indigo (center-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 0.12,
                scale: [1, 1.1, 0.95, 1],
                x: [0, 25, -15, 0],
                y: [0, -30, 20, 0],
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                opacity: { duration: 1.5 },
                scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 40, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 32, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                background: "radial-gradient(ellipse, rgba(79,70,229,0.8) 0%, rgba(124,58,237,0.3) 50%, transparent 70%)",
              }}
              className="absolute top-[30%] left-[10%] w-[55vw] h-[55vw] rounded-full blur-[140px]"
            />

            {/* Accent Micro-glow — Soft violet center pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.04, 0.10, 0.04],
                scale: [0.9, 1.05, 0.9],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 60%)",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full blur-[100px]"
            />

            {/* Edge vignette — deepens corners */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(8,4,15,0.7) 100%)"
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* ── INTERACTIVE GRID OVERLAY ── */}
      <motion.div
        animate={{
          opacity: isDark ? 0.06 : 0.02,
        }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[radial-gradient(rgba(167,139,250,0.12)_1px,transparent_0)] bg-[length:40px_40px] mix-blend-screen"
      />

      {/* ── GRAIN TEXTURE ── */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen overflow-hidden">
        <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
      </div>
    </div>
  );
};
