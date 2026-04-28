import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Member, Section, allSections } from "@/data/membersData";
import { allSections2024 } from "@/data/membersData_2024"; // ✅ ADDED


// ─── YEARS ───────────────────────────────────────────────
const YEARS = ["2024-25", "2025-26", "2026-27"] as const;

// ─── CUSTOM DROPDOWN ─────────────────────────────────────
const YearDropdown = ({
  activeYear,
  setActiveYear,
}: {
  activeYear: string;
  setActiveYear: (year: any) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-5 py-3 border-2 border-black/20 dark:border-white/10 rounded-xl bg-white dark:bg-[#0b0b0f] text-sm font-semibold flex items-center gap-2"
      >
        {activeYear}
        <span className="text-xs">▼</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute mt-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0b0f] shadow-lg z-50 overflow-hidden"
          >
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-sm transition
                  ${
                    activeYear === year
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-black/5 dark:hover:bg-white/5"
                  }
                `}
              >
                {year}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── WRAPPER ─────────────────────────────────────────────
const GlowWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-3xl p-[1px] bg-yellow-400 dark:bg-gradient-to-r dark:from-purple-500/60 dark:via-blue-500/50 dark:to-cyan-400/60">
    <div className="rounded-3xl bg-white shadow-[4px_4px_0px_0px_black] dark:bg-[#0b0b0f]/95 dark:shadow-none">
      {children}
    </div>
  </div>
);

// ─── MEMBER CARD ─────────────────────────────────────────
const MemberCard = ({ member }: { member: Member }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="rounded-3xl cursor-pointer"
  >
    <div className="rounded-3xl p-5 flex flex-col gap-2 border h-full bg-white border-black/10 shadow-[4px_4px_0px_0px_black] dark:bg-transparent dark:border-white/5 dark:shadow-none">
      <Link to={`/members/${member.slug}`} className="text-base font-semibold">
        {member.name}
      </Link>

      {member.dept && (
        <p className="text-xs opacity-60">{member.dept}</p>
      )}

      {member.chapter && (
        <p className="text-xs opacity-50">{member.chapter}</p>
      )}

      {member.email && (
        <p className="text-xs text-blue-600 dark:text-cyan-400 break-all">
          {member.email}
        </p>
      )}

      {member.phone && (
        <a href={`tel:${member.phone}`} className="text-sm opacity-70">
          {member.phone}
        </a>
      )}
    </div>
  </motion.div>
);

// ─── SECTION BLOCK ───────────────────────────────────────
const SectionBlock = ({ section }: { section: Section }) => {
  const [open, setOpen] = useState(true);

  return (
    <GlowWrapper>
      <div className="p-6 md:p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {section.title}
          </h2>

          <button
            onClick={() => setOpen(!open)}
            className="text-xs opacity-50 hover:opacity-100"
          >
            {open ? "Hide" : "Show"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.members.map((m, i) => (
        <MemberCard key={i} member={m} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlowWrapper>
  );
};

// ─── PAGE ────────────────────────────────────────────────
const MembersPage = () => {
  const [activeYear, setActiveYear] =
    useState<typeof YEARS[number]>("2025-26");

  return (
    <div className="min-h-screen bg-white dark:bg-[#050507] flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-[1300px] mx-auto px-4 pt-28 pb-20 w-full">

        {/* DROPDOWN */}
        <div className="mb-10">
          <YearDropdown
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />
        </div>

        {/* 2025-26 */}
        {activeYear === "2025-26" &&
          allSections.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}

        {/* 2026-27 */}
        {activeYear === "2026-27" && (
          <div className="py-32 text-center">
            <h2 className="text-3xl font-semibold mb-2">
              2026–27 Committee
            </h2>
            <p className="opacity-60">
              Team is under formation. Stay tuned.
            </p>
          </div>
        )}

        {/* 🔥 FIXED 2024-25 (NOW SHOWS DATA) */}
        {activeYear === "2024-25" &&
          allSections2024.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}

      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;