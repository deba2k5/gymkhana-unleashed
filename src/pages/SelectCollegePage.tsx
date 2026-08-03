"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SelectCollegePageProps {
  onSelect: (college: "iem" | "uem") => void;
}

const colleges = [
  {
    key: "iem" as const,
    name: "Institute of Engineering & Management",
    short: "IEM",
    city: "Kolkata",
    logo: "/IEM_logo.jpeg",
    ink: "#C1272D", // bauhaus red
    accent: "#F2B705", // bauhaus mustard
  },
  {
    key: "uem" as const,
    name: "University of Engineering & Management",
    short: "UEM",
    city: "Kolkata",
    logo: null,
    ink: "#1D4E89", // bauhaus blue
    accent: "#F2B705",
  },
];

const SelectCollegePage = ({ onSelect }: SelectCollegePageProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F3EEE1] flex items-center justify-center px-6 py-16">
      {/* ── BAUHAUS BACKGROUND GEOMETRY ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* big red circle, upper-left, half off-canvas */}
        <div className="absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-[#C1272D]" />
        {/* mustard quarter block, lower-right */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F2B705]" />
        {/* navy triangle, lower-left */}
        <div
          className="absolute bottom-0 left-[8%] w-0 h-0 opacity-90"
          style={{
            borderLeft: "90px solid transparent",
            borderRight: "90px solid transparent",
            borderBottom: "150px solid #1D4E89",
          }}
        />
        {/* thin black ruling lines */}
        <div className="absolute top-[18%] left-0 w-full h-[3px] bg-black/90" />
        <div className="absolute top-[18%] left-[12%] w-[3px] h-40 bg-black/90" />
        {/* small offset circle top-right */}
        <div className="absolute top-16 right-[14%] w-16 h-16 rounded-full border-[6px] border-black" />
        {/* cream veil so shapes stay subtle behind content */}
        <div className="absolute inset-0 bg-[#F3EEE1]/80" />
      </div>

      <div className="relative w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[#C1272D]" />
            <span className="w-3 h-3 bg-[#1D4E89]" />
            <span
              className="w-0 h-0"
              style={{
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderBottom: "12px solid #F2B705",
              }}
            />
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-black/60">
              Gymkhana Portal
            </p>
          </div>

          <h1
            className="font-space font-black uppercase tracking-tighter text-black"
            style={{ fontSize: "clamp(2.2rem,7vw,5rem)", lineHeight: 0.95 }}
          >
            Choose Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">College</span>
              <span className="absolute left-0 right-0 bottom-1 h-[0.35em] bg-[#F2B705] -z-0" />
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {colleges.map((college, i) => (
            <motion.button
              key={college.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              whileHover={{ y: -6 }}
              whileTap={{ y: 2 }}
              onClick={() => onSelect(college.key)}
              className="group relative border-[4px] border-black bg-white overflow-hidden text-left transition-all duration-200"
              style={{
                boxShadow: `10px 10px 0px ${college.ink}`,
              }}
            >
              {/* corner geometry per card */}
              {college.key === "iem" ? (
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#F2B705] opacity-90" />
              ) : (
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 opacity-90 rotate-45"
                  style={{ backgroundColor: "#F2B705" }}
                />
              )}

              <div className="relative p-8 md:p-12 flex flex-col items-center text-center gap-6">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 bg-white flex items-center justify-center p-3 border-[4px] transition-transform group-hover:-rotate-3"
                  style={{ borderColor: college.ink, boxShadow: `4px 4px 0px ${college.ink}` }}
                >
                  {college.logo ? (
                    <img
                      src={college.logo}
                      alt={`${college.short} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-space font-black text-3xl" style={{ color: college.ink }}>
                      {college.short}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="font-space font-black text-2xl md:text-3xl uppercase tracking-tight text-black leading-tight">
                    {college.short}
                  </h2>
                  <p className="mt-2 text-xs md:text-sm font-bold uppercase tracking-widest text-black/55 leading-relaxed">
                    {college.name}
                  </p>
                  <p
                    className="mt-1 text-[10px] font-black uppercase tracking-[0.4em]"
                    style={{ color: college.ink }}
                  >
                    {college.city}
                  </p>
                </div>

                <div className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 border-[3px] border-black text-[11px] font-black uppercase tracking-widest text-black bg-transparent group-hover:bg-black group-hover:text-white transition-colors">
                  Select
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCollegePage;
