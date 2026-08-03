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
    accent: "#FACC15",
  },
  {
    key: "uem" as const,
    name: "University of Engineering & Management",
    short: "UEM",
    city: "Kolkata",
    logo: null,
    accent: "#8B5CF6",
  },
];

const SelectCollegePage = ({ onSelect }: SelectCollegePageProps) => {
  return (
    <div className="relative min-h-screen w-full bg-background flex items-center justify-center px-6 py-16 overflow-hidden transition-colors">
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.45em] text-foreground/50 mb-4">
            Gymkhana Portal
          </p>
          <h1
            className="font-space font-black text-foreground uppercase tracking-tighter"
            style={{ fontSize: "clamp(2.2rem,7vw,5rem)", lineHeight: 0.95 }}
          >
            Choose Your <span className="text-yellow-400 dark:text-violet-500">College</span>
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
              className="group relative border-[3px] border-primary bg-card overflow-hidden text-left brutalist-shadow hover:shadow-[10px_10px_0px_var(--card-accent)] transition-all duration-200"
              style={{ ["--card-accent" as string]: college.accent }}
            >
              <div className="relative p-8 md:p-12 flex flex-col items-center text-center gap-6">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 bg-white flex items-center justify-center p-3 border-[3px] border-primary/10 shadow-[4px_4px_0px_var(--card-accent)] transition-transform group-hover:-rotate-3"
                  style={{ ["--card-accent" as string]: college.accent }}
                >
                  {college.logo ? (
                    <img
                      src={college.logo}
                      alt={`${college.short} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-space font-black text-3xl text-violet-600">
                      {college.short}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="font-space font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground leading-tight">
                    {college.short}
                  </h2>
                  <p className="mt-2 text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/50 leading-relaxed">
                    {college.name}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/35">
                    {college.city}
                  </p>
                </div>

                <div className="mt-2 inline-flex items-center gap-2 px-5 py-2 border-2 border-primary text-[11px] font-black uppercase tracking-widest text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
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
