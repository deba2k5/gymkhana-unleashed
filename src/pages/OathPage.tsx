"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fullText = `"We, the students of IEM Gymkhana, pledge to uphold the values of innovation, integrity, and absolute excellence. We vow to work relentlessly, stand united in our diversity, and foster a community where every idea has the power to shape the future. Through sports, culture, and technology, we promise to push boundaries and build a legacy that transcends time."`;

const OathPage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        requestAnimationFrame(() => {
          setText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        });
      }, 6); // fast typing

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="min-h-screen bg-white selection:bg-yellow-400 selection:text-black flex flex-col">
      <Navbar />

      <main className="flex-grow relative pt-32 pb-24 md:pt-48 md:pb-32 flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-200 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 w-full text-center">

          {/* 🔥 ANIMATED TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mb-10 inline-flex"
          >
            <div className="bg-yellow-400 px-5 py-2 border-[3px] border-black shadow-[4px_4px_0px_#000]">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">
                STUDENT PLEDGE
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-space font-black text-black uppercase tracking-tighter mb-14"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9 }}
          >
            THE GYMKHANA <br />
            <span className="text-outline">OATH.</span>
          </motion.h1>

          {/* TYPEWRITER TEXT */}
          <div className="relative text-left">

            <div className="hidden md:block absolute -left-10 top-0 bottom-0 w-[3px] bg-gradient-to-b from-black via-black/50 to-transparent" />

            {/* 🔽 REDUCED SIZE */}
            <p className="font-space font-semibold text-black/80 text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.7] tracking-tight italic">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            {/* FOOTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index > fullText.length - 5 ? 1 : 0 }}
              className="mt-12 pt-8 border-t-[2px] border-black/10 flex flex-col md:flex-row justify-between gap-4"
            >
              <div>
                <div className="text-black/50 font-black uppercase tracking-widest text-xs mb-2">
                  ESTABLISHED 1989
                </div>
                <div className="text-black font-space font-black uppercase tracking-tighter text-2xl">
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