import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Member, Section, allSections } from "@/data/membersData";
import { allSections2024 } from "@/data/membersData_2024"; // ✅ ADDED
import { allSections2026 } from "@/data/membersData_2026";
import Seo from "@/seo/Seo";
import { seoRoutes } from "@/seo/seoConfig";
import { ArrowUpRight, Sparkles } from "lucide-react";


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

// ─── 2026-27 : slugify helper for anchors ────────────────
const anchorId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// ─── 2026-27 : quick-jump section nav ────────────────────
const QuickNav2026 = ({ sections }: { sections: Section[] }) => (
  <div className="sticky top-[76px] z-30 -mx-4 px-4 mb-10">
    <div className="overflow-x-auto no-scrollbar rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0b0b0f]/90 backdrop-blur-md shadow-[3px_3px_0px_0px_black] dark:shadow-none">
      <div className="flex gap-2 p-3 w-max">
        {sections.map((s) => (
          <a
            key={s.title}
            href={`#${anchorId(s.title)}`}
            className="whitespace-nowrap text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {s.title}
          </a>
        ))}
      </div>
    </div>
  </div>
);

// ─── 2026-27 : member chip (click → portfolio) ───────────
const MemberChip2026 = ({ member, accent }: { member: Member; accent: string }) => (
  <Link
    to={`/members/${member.slug}`}
    className="group relative flex flex-col gap-1.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 pt-3.5 overflow-hidden hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_black] dark:hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.15)] transition-all duration-200"
  >
    <span
      className="absolute top-0 left-0 right-0 h-[3px]"
      style={{ background: accent }}
    />
    {member.role && (
      <span
        className="text-[9px] font-black uppercase tracking-wider truncate"
        style={{ color: accent }}
      >
        {member.role}
      </span>
    )}
    <span className="text-sm font-bold leading-snug flex items-start justify-between gap-2">
      <span className="group-hover:underline">{member.name}</span>
      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-60 transition-opacity mt-0.5" />
    </span>
    {member.dept && (
      <span className="text-[11px] opacity-50 truncate">{member.dept}</span>
    )}
    {member.phone && (
      <span className="text-[11px] opacity-40 truncate">{member.phone}</span>
    )}
  </Link>
);

// ─── 2026-27 : section group ─────────────────────────────
const Section2026 = ({ section, index }: { section: Section; index: number }) => (
  <motion.section
    id={anchorId(section.title)}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
    className="scroll-mt-32 mb-14"
  >
    <div className="flex items-center gap-3 mb-6">
      <span
        className="w-2 h-8 rounded-full shrink-0"
        style={{ background: section.accentColor }}
      />
      <h2 className="text-xl md:text-2xl font-black tracking-tight">
        {section.title}
      </h2>
      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50">
        {section.members.length}
      </span>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
      {section.members.map((m, i) => (
        <MemberChip2026 key={i} member={m} accent={section.accentColor} />
      ))}
    </div>
  </motion.section>
);

// ─── 2026-27 : full committee view ───────────────────────
const Committee2026 = () => {
  const totalMembers = allSections2026.reduce((acc, s) => acc + s.members.length, 0);

  return (
    <div>
      {/* HEADER */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em]">
          <Sparkles className="w-3 h-3" />
          2026 – 27 Session
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
          The Gymkhana Committee
        </h1>
        <p className="opacity-60 max-w-2xl mx-auto text-sm md:text-base">
          {totalMembers}+ students and faculty across {allSections2026.length} teams —
          administration, faculty, core committee, and every club and chapter
          driving campus life this year.
        </p>
      </div>

      <QuickNav2026 sections={allSections2026} />

      {allSections2026.map((section, i) => (
        <Section2026 key={section.title} section={section} index={i} />
      ))}
    </div>
  );
};

// ─── PAGE ────────────────────────────────────────────────
const MembersPage = () => {
  const [activeYear, setActiveYear] =
    useState<typeof YEARS[number]>("2026-27");

  return (
    <div className="min-h-screen bg-white dark:bg-[#050507] flex flex-col">
      <Seo {...seoRoutes.members} />
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
        {activeYear === "2026-27" && <Committee2026 />}

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