"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";
import { motion } from "framer-motion";
import { useState } from "react";

const fullText = `"We, the students of IEM Gymkhana, pledge to uphold the values of innovation, integrity, and absolute excellence. We vow to work relentlessly, stand united in our diversity, and foster a community where every idea has the power to shape the future. Through sports, culture, and technology, we promise to push boundaries and build a legacy that transcends time."`;

const OathPage = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-yellow-400 selection:text-black flex flex-col transition-colors">
      <Navbar />

      <main className="flex-grow relative pt-32 pb-24 md:pt-48 md:pb-32 flex items-center overflow-hidden">
        {/* BACKGROUND - Static, never re-renders */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none transition-opacity" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none transition-opacity" />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 w-full text-center">
          {/* ANIMATED TAG - Static after initial animation */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mb-10 inline-flex"
          >
            <div className="bg-yellow-400 px-5 py-2 border-[3px] border-primary shadow-[4px_4px_0px_var(--primary)] transition-colors">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">
                STUDENT PLEDGE
              </span>
            </div>
          </motion.div>

          {/* HEADING - Static after initial animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-space font-black text-foreground uppercase tracking-tighter mb-14 transition-colors"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9 }}
          >
            THE GYMKHANA <br />
            <span className="text-outline">OATH.</span>
          </motion.h1>

          {/* TYPEWRITER SECTION */}
          <div className="relative text-left">
            {/* Decorative left border (desktop only) */}
            <div className="hidden md:block absolute -left-10 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-primary/50 to-transparent transition-colors" />

            {/* ISOLATED TYPEWRITER COMPONENT - Handles all typing logic & interactions */}
            <TypewriterText text={fullText} onComplete={() => setIsTypingDone(true)} />

            {/* FOOTER - Fades in when typing completes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingDone ? 1 : 0, y: isTypingDone ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="mt-12 pt-8 border-t-[2px] border-primary/10 flex flex-col md:flex-row justify-between gap-4 transition-colors"
            >
              <div>
                <div className="text-foreground/50 font-black uppercase tracking-widest text-xs mb-2 transition-colors">
                  ESTABLISHED 1989
                </div>
                <div className="text-foreground font-space font-black uppercase tracking-tighter text-2xl transition-colors">
                  IEM STUDENT BODY
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OathPage;