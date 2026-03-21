"use client";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Users2 } from "lucide-react";

const societies = [
  { id: "cultural", name: "Cultural" },
  { id: "technical", name: "Technical" },
  { id: "sports", name: "Sports" },
  { id: "welfare", name: "Student Welfare" },
  { id: "creative", name: "Creative & Literary" },
];

const SocietiesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
      }),
      { threshold: 0.1 }
    );

    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="societies"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-40 px-4 sm:px-6 bg-white dot-grid overflow-hidden border-t border-gray-100"
    >
      <div className="relative max-w-[1400px] mx-auto z-10">

        {/* HEADER */}
        <div
          data-reveal
          className="mb-12 sm:mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 md:gap-10"
        >
          <div className="max-w-2xl text-center md:text-left">


            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-8xl font-semibold text-gray-900 leading-[0.9] tracking-tight">
              STUDENT<br />
              <span className="text-[#7a2e2e]">SOCIETIES.</span>
            </h2>
          </div>

          <div className="max-w-xs mx-auto md:mx-0 text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg text-gray-500 font-medium leading-relaxed">
              Explore diverse communities, collaborate with peers, and find where you truly belong.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-10">
          {societies.map((s) => (
            <Link
              to={`/societies#${s.id}`}
              key={s.name}
              data-reveal
              className="premium-card aspect-[4/3] min-h-[180px] sm:min-h-[200px] md:min-h-[260px]
              group flex flex-col items-center justify-center text-center
              p-6 sm:p-8 md:p-12
              transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              {/* ICON */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 rounded-2xl bg-[#7a2e2e]/10 flex items-center justify-center">
                <span className="text-[#7a2e2e] font-orbitron text-base sm:text-lg">
                  {s.name.charAt(0)}
                </span>
              </div>

              {/* NAME */}
              <h3 className="text-base sm:text-lg md:text-2xl font-orbitron font-semibold text-gray-900 group-hover:text-[#7a2e2e] transition-colors">
                {s.name}
              </h3>

              {/* ARROW */}
              <div className="mt-3 sm:mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#7a2e2e]" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal className="mt-16 sm:mt-20 md:mt-28 text-center">
          <Link
            to="/societies"
            className="inline-flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-orbitron uppercase tracking-[0.2em] text-gray-900 hover:text-[#7a2e2e] transition-colors group"
          >
            View all Clubs
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#7a2e2e] transition-all">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SocietiesSection;