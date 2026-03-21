"use client";

import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";

const ABOUT_TEXT = "IEM Student Gymkhana is where campus life finds its energy. It brings together creativity, innovation, and leadership — turning ideas into experiences that shape who we become. From large-scale fests to close-knit communities, it’s where students connect, create, and grow.";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < ABOUT_TEXT.length) {
        setDisplayedText(ABOUT_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-reveal-up");
            if (
              e.target.getAttribute("data-typewriter") === "true" &&
              !hasStartedTyping
            ) {
              setHasStartedTyping(true);
              setTimeout(() => setIsTyping(true), 400);
            }
          }
        }),
      { threshold: 0.2 }
    );

    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      if (el.getAttribute("data-typewriter") !== "true") {
        (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
        (el as HTMLElement).style.opacity = "0";
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasStartedTyping]);

  return (
    <section
      ref={ref}
      className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-background dot-grid overflow-hidden border-t border-gray-100"
    >
      {/* MAROON GLOW */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#7a2e2e]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-center">
        
        {/* LEFT */}
        <div
          data-reveal
          className="max-w-md mx-auto md:mx-0 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-5 text-[#7a2e2e]">
            <Info className="w-5 h-5" />
            <span className="text-[10px] sm:text-xs font-orbitron uppercase tracking-[0.25em]">
              Our Mission
            </span>
          </div>

          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-8xl font-semibold text-gray-900 leading-[0.9] tracking-tight mb-6">
            ABOUT<span className="text-[#7a2e2e]">.</span>
          </h2>

          <p className="text-base sm:text-lg font-medium text-gray-500 leading-relaxed">
            Building a culture of creativity, collaboration, and leadership at IEM.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div
          data-reveal
          data-typewriter="true"
          className="premium-card p-6 sm:p-8 md:p-16 flex flex-col justify-center min-h-[240px] md:min-h-[320px]"
        >
          <p className="text-base sm:text-lg md:text-3xl font-semibold leading-[1.5] text-gray-800 tracking-tight">
            {displayedText}
            <span
              className={`inline-block w-1 h-6 sm:h-7 md:h-10 bg-[#7a2e2e] ml-2 translate-y-1 ${
                isTyping || !hasStartedTyping ? "animate-pulse" : "opacity-0"
              }`}
            ></span>
          </p>

          {/* CIRCLES */}
          <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6 border-t border-gray-100 pt-6 md:pt-10">
            <div className="flex -space-x-2 md:-space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-[#7a2e2e]" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-[#9f4a4a]" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-[#c27a7a]" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-[#e0b3b3]" />
            </div>

            <span className="text-[10px] sm:text-sm font-orbitron text-gray-400 uppercase tracking-widest">
              Est. 1989
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;