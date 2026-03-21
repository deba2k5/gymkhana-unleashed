"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Geometric3DBackground from "./Geometric3DBackground";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el, i) => {
      const element = el as HTMLElement;
      element.style.transitionDelay = `${i * 0.12}s`;
      observer.observe(element);
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      logoRef.current.style.transform = `
        translate(${x}px, ${y}px)
        rotateX(${y * -0.5}deg)
        rotateY(${x * 0.5}deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen pt-20 md:pt-28 overflow-hidden bg-background"
    >
      <Geometric3DBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[calc(100vh-100px)]">
        
        {/* LEFT */}
        <div className="text-center lg:text-left">

          <h1
            data-reveal
            className="font-orbitron text-[clamp(2.3rem,7vw,4.5rem)] leading-[1.05] tracking-wide lg:tracking-wider text-gray-900 mb-5 reveal"
          >
            IEM
            <br />
            <span className="text-[#7a2e2e]">
              Student Gymkhana
            </span>
          </h1>

          {/* ✅ UPDATED SUBTEXT */}
          <p
            data-reveal
            className="text-base sm:text-lg md:text-xl font-medium text-gray-500 mb-8 max-w-md mx-auto lg:mx-0 reveal"
          >
            welcomes you! 
          </p>

          <div
            data-reveal
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 reveal"
          >
            <a
              href="#societies"
              className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#7a2e2e] transition-all duration-300 shadow-lg hover:shadow-[#7a2e2e]/30 group flex items-center justify-center gap-2"
            >
              Find Your Tribe
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#events"
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-900 text-sm font-bold uppercase tracking-widest rounded-full hover:border-[#7a2e2e] hover:text-[#7a2e2e] transition-all duration-300 bg-white/60 backdrop-blur-sm"
            >
              Explore Events
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center mt-8 lg:mt-0">
          <img
            ref={logoRef}
            src="/iem-3d-logo.png"
            alt="IEM Logo"
            className="w-[80%] sm:w-full max-w-[380px] lg:max-w-[450px] drop-shadow-2xl reveal transition-transform duration-200 ease-out will-change-transform"
            data-reveal
          />
        </div>
      </div>

      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
            filter: blur(10px);
            transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .reveal-active {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;