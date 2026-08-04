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
    accent: "#E4572E",
    secondary: "#2E5EAA",
    bg: "#FFF4E0",
  },
  {
    key: "uem" as const,
    name: "University of Engineering & Management",
    short: "UEM",
    city: "Kolkata",
    logo: null,
    accent: "#2E5EAA",
    secondary: "#F2B705",
    bg: "#E9F1FB",
  },
];

const SelectCollegePage = ({ onSelect }: SelectCollegePageProps) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-6 py-16 overflow-hidden bg-[#FBF6EC]">
      {/* Bauhaus geometric background shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#F2B705]/40 pointer-events-none" />
      <div className="absolute top-24 -right-20 w-72 h-72 bg-[#2E5EAA]/15 pointer-events-none" style={{ borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%" }} />
      <div
        className="absolute bottom-10 left-[8%] w-0 h-0 pointer-events-none"
        style={{
          borderLeft: "70px solid transparent",
          borderRight: "70px solid transparent",
          borderBottom: "120px solid rgba(228,87,46,0.18)",
        }}
      />
      <div className="absolute bottom-16 right-[10%] w-40 h-40 border-[10px] border-[#2E5EAA]/25 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-10 h-40 bg-[#E4572E]/20 -rotate-12 pointer-events-none hidden md:block" />

      <div className="relative w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#E4572E]" />
            <span className="w-3 h-3 bg-[#2E5EAA]" />
            <span
              className="w-0 h-0"
              style={{
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: "10px solid #F2B705",
              }}
            />
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-[#1A1A1A]/60">
              Gymkhana Portal
            </p>
          </div>
          <h1
            className="font-space font-black text-[#1A1A1A] uppercase tracking-tighter"
            style={{ fontSize: "clamp(2.2rem,7vw,5rem)", lineHeight: 0.95 }}
          >
            Choose Your <span className="text-[#E4572E]">College</span>
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
              className="group relative border-[3px] border-[#1A1A1A] overflow-hidden text-left transition-all duration-200 shadow-[8px_8px_0px_#1A1A1A] hover:shadow-[10px_10px_0px_var(--card-accent)]"
              style={{ ["--card-accent" as string]: college.accent, backgroundColor: college.bg }}
            >
              {/* Decorative bauhaus shapes */}
              <span
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-70 pointer-events-none"
                style={{ backgroundColor: college.secondary }}
              />
              <span
                className="absolute bottom-4 right-6 w-0 h-0 pointer-events-none"
                style={{
                  borderLeft: "18px solid transparent",
                  borderRight: "18px solid transparent",
                  borderBottom: `30px solid ${college.accent}`,
                  opacity: 0.5,
                }}
              />

              <div className="relative p-8 md:p-12 flex flex-col items-center text-center gap-6">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center p-3 border-[3px] border-[#1A1A1A] transition-transform group-hover:-rotate-3"
                  style={{ boxShadow: `4px 4px 0px ${college.accent}` }}
                >
                  {college.logo ? (
                    <img
                      src={college.logo}
                      alt={`${college.short} logo`}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <span
                      className="font-space font-black text-3xl"
                      style={{ color: college.accent }}
                    >
                      {college.short}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="font-space font-black text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A] leading-tight">
                    {college.short}
                  </h2>
                  <p className="mt-2 text-xs md:text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/60 leading-relaxed">
                    {college.name}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/40">
                    {college.city}
                  </p>
                </div>

                <div
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2 border-2 border-[#1A1A1A] text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] transition-all group-hover:text-white"
                  style={{ ["--card-accent" as string]: college.accent }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = college.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
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
