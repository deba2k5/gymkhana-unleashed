import { useState } from "react";
import { Phone, ArrowLeft, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Member, Section, allSections } from "@/data/membersData";

// ─── MEMBER CARD ─────────────────────────────────────────────────────────────
const MemberCard = ({ member, accent }: { member: Member; accent: string }) => (
    <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{
      y: -6,
      scale: 1.02,
      boxShadow: "6px 6px 0px rgba(0,0,0,0.9)"
    }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 120, damping: 12 }}
    className="bg-white border-[2px] border-black p-4 flex flex-col gap-1 transition-all"
  >
    <div className="flex items-start justify-between gap-2">
      <p className="font-space font-black text-black text-sm leading-tight uppercase">
        {member.name}
      </p>

      {member.chapter && (
        <span className="shrink-0 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border border-black text-black/60">
          {member.chapter}
        </span>
      )}
    </div>

    {member.dept && (
      <p className="text-[11px] font-bold text-black/60 uppercase tracking-wide">
        {member.dept}
      </p>
    )}

    {member.email && (
      <p className="text-[11px] font-bold text-blue-600 break-all">
        {member.email}
      </p>
    )}

    {member.phone && (
      <motion.a
        href={`tel:${member.phone}`}
        whileHover={{ scale: 1.05 }}
        className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-black"
        style={{ color: "#FACC15" }}
      >
        <Phone className="w-3 h-3" />
        {member.phone}
      </motion.a>
    )}
  </motion.div>
);

// ─── SECTION BLOCK ───────────────────────────────────────────────────────────
const SectionBlock = ({ section }: { section: Section }) => {
  const [open, setOpen] = useState(false); //improve performance on low-end device

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t-[4px] border-black pt-8 pb-4"
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-3 h-3 border-[2px] border-black"
              style={{ background: "#FACC15" }}
            />
            <h2 className="font-space font-black text-black text-2xl md:text-3xl uppercase tracking-tighter leading-none">
              {section.title}
            </h2>
          </div>

          {section.subtitle && (
            <p className="text-sm font-bold text-black/60 uppercase tracking-wide ml-5">
              {section.subtitle}
            </p>
          )}

          {section.note && (
            <p className="text-xs font-bold text-red-600 ml-5 mt-1">
              {section.note}
            </p>
          )}

          {section.brochureLink && (
            <motion.a
              href={section.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-2 ml-5 font-black text-xs uppercase tracking-widest border-[2px] border-black px-3 py-1.5 bg-red-500 text-white hover:bg-red-600 brutalist-shadow transition-all"
            >
              <ExternalLink className="w-3 h-3" />
              View Official Brochure
            </motion.a>
          )}
        </div>

        <motion.button
          onClick={() => setOpen(o => !o)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0 flex items-center gap-1 font-black text-xs uppercase tracking-widest border-[2px] border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all self-start"
        >
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {open ? "Collapse" : "Expand"}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: { staggerChildren: 0.06 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
            >
              {section.members.map((m, i) => (
<MemberCard key={i} member={m} accent="#FACC15" />              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
// ─── PAGE ─────────────────────────────────────────────────────────────────────
const YEARS = ["2025-2026", "2026-2027"] as const;

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const [activeYear, setActiveYear] = useState<typeof YEARS[number]>("2025-2026");

  const filtered = search.trim().length < 2
    ? allSections
    : allSections.map(sec => ({
        ...sec,
        members: sec.members.filter(m =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          (m.dept || "").toLowerCase().includes(search.toLowerCase()) ||
          (m.chapter || "").toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(sec => sec.members.length > 0);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-yellow-400 selection:text-black flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 w-full">

        {/* Header */}
<div className="mb-12">
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors group mb-8"
  >
    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
    Back to Home
  </Link>

  <div className="flex items-center gap-4 mt-6 mb-6">
    <div className="w-14 h-[3px] bg-yellow-400" />
    <span className="text-[11px] font-black tracking-[0.45em] text-black/50 uppercase">
      IEM Student Gymkhana
    </span>
  </div>

 <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="font-space font-black text-black tracking-tighter leading-[0.9] mb-6"
  style={{ fontSize: "clamp(2.5rem,10vw,7rem)" }}
>
  {/* MEET THE */}
  <span className="relative inline-block">
    MEET THE
    <span className="absolute left-0 bottom-1 w-full h-2 md:h-3 bg-yellow-400 -z-10"></span>
  </span>

  <br />

  {/* TEAM */}
  <span
    className="inline-block mt-2 text-yellow-400 px-2 md:px-3 py-1"
    style={{
      WebkitTextStroke: "2px black",
    }}
  >
    TEAM.
  </span>
</motion.h1>

  <p className="font-space font-bold text-black/60 text-lg uppercase tracking-wider max-w-lg">
    Official Gymkhana Committee — Institute of Engineering & Management, Kolkata
  </p>
</div>

        {/* ─── YEAR DROPDOWN ───────────────────────────────────────── */}
        <div className="mb-12">
          <select
            value={activeYear}
            onChange={e => { setActiveYear(e.target.value as typeof YEARS[number]); setSearch(""); }}
            className="px-6 py-3 pr-12 font-space font-black text-sm uppercase tracking-wider border-[3px] border-black bg-white text-black cursor-pointer appearance-none focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            {YEARS.map(year => (
              <option key={year} value={year}>
                {year} Student Gymkhana
              </option>
            ))}
          </select>
        </div>

        {/* ─── 2025-2026 CONTENT ──────────────────────────────────── */}
        {activeYear === "2025-2026" && (
          <>
<div className="mb-12">
  <div className="max-w-md flex">

    <input
      type="text"
      placeholder="Search by name, dept or chapter…"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="w-full border-[3px] border-black px-5 py-3 font-space font-bold text-sm placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15]"
    />

    <button
      className="border-[3px] border-l-0 border-black px-4 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 active:scale-95"
    >
      <Search className="w-4 h-4 text-black" />
    </button>

  </div>
</div>



            {/* Sections */}
            <div className="space-y-12">
              {filtered.map((section, i) => (
                <div key={i} id={`section-${i}`}>
                  <SectionBlock section={section} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-space font-black text-4xl text-black/20 uppercase">No results found.</p>
              </div>
            )}
          </>
        )}

        {/* ─── 2026-2027 COMING SOON ──────────────────────────────── */}
        {activeYear === "2026-2027" && (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 border-[4px] border-black bg-yellow-400 brutalist-shadow flex items-center justify-center mb-10 animate-pulse">
              <span className="font-space font-black text-4xl text-black">?</span>
            </div>
            <h2
              className="font-space font-black text-black uppercase tracking-tighter mb-6"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 0.9 }}
            >
              COMING <span className="text-outline">SOON.</span>
            </h2>
            <p className="font-space font-bold text-black/50 text-lg uppercase tracking-wider max-w-md mb-10">
              The 2026-2027 Student Gymkhana Committee will be revealed soon. Stay tuned!
            </p>
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-black/30">
              <div className="w-8 h-[2px] bg-black/20" />
              Under Formation
              <div className="w-8 h-[2px] bg-black/20" />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;