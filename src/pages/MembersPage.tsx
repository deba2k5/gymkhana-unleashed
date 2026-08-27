import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Member, Section, allSections } from "@/data/membersData";
import { allSections2024 } from "@/data/membersData_2024"; // ✅ ADDED
import { allSections2026 } from "@/data/membersData_2026";
import Seo from "@/seo/Seo";
import { seoRoutes } from "@/seo/seoConfig";
import {
  ArrowUpRight,
  Sparkles,
  Search,
  X,
  Crown,
  GraduationCap,
  Users,
  Megaphone,
  HeartHandshake,
  Handshake,
  Cpu,
  Palette,
  Gamepad2,
  ShieldAlert,
  Trophy,
  Building2,
  UtensilsCrossed,
  Music,
  Camera,
  MessageSquare,
  Brain,
  Lightbulb,
  BookOpen,
  Clapperboard,
  Newspaper,
  Laugh,
  PawPrint,
  Landmark,
  Star,
  Footprints,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";


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

// ─── 2026-27 : section → icon map ────────────────────────
const sectionIcons: Record<string, LucideIcon> = {
  "Administration": Crown,
  "Faculty Members": GraduationCap,
  "Core Committee": Users,
  "Cultural Secretary": Megaphone,
  "Student Welfare Heads": HeartHandshake,
  "Alumni Relations": Handshake,
  "Institutional Technical Lead": Cpu,
  "Cultural Representative": Star,
  "IEM-UEM Kolkata Marathon": Footprints,
  "Graphics Club (A.R.C.)": Palette,
  "Tech Club": Cpu,
  "Gaming Club": Gamepad2,
  "Anti-Ragging Committee": ShieldAlert,
  "Sports": Trophy,
  "Sports Representative": Trophy,
  "Football": Trophy,
  "Cricket": Trophy,
  "Kabaddi": Trophy,
  "Badminton": Trophy,
  "Basketball": Trophy,
  "Gymkhana Room Incharge": Building2,
  "Canteen Head": UtensilsCrossed,
  "Music Club": Music,
  "Eastern Dance Club": Sparkles,
  "Western Dance Club": Sparkles,
  "Drama Club": Clapperboard,
  "Art and Craft Club": Palette,
  "Photography Club": Camera,
  "Debate Club": MessageSquare,
  "Quiz Club": Brain,
  "E-Cell": Lightbulb,
  "Literary Society": BookOpen,
  "Film Society": Clapperboard,
  "College Magazine": Newspaper,
  "IEM Humour Club": Laugh,
  "Pet Society": PawPrint,
  "Student Chapters": Landmark,
};
const getSectionIcon = (title: string): LucideIcon => sectionIcons[title] || Users;

// ─── 2026-27 : broad "community" grouping for the filter ─
type Community = "ADMIN" | "CULTURAL" | "TECH" | "SPORTS";

const communityMap: Record<string, Community> = {
  "Administration": "ADMIN",
  "Faculty Members": "ADMIN",
  "Core Committee": "ADMIN",
  "Cultural Secretary": "CULTURAL",
  "Student Welfare Heads": "ADMIN",
  "Alumni Relations": "ADMIN",
  "Institutional Technical Lead": "TECH",
  "Cultural Representative": "CULTURAL",
  "IEM-UEM Kolkata Marathon": "SPORTS",
  "Graphics Club (A.R.C.)": "CULTURAL",
  "Tech Club": "TECH",
  "Gaming Club": "CULTURAL",
  "Anti-Ragging Committee": "ADMIN",
  "Sports": "SPORTS",
  "Sports Representative": "SPORTS",
  "Football": "SPORTS",
  "Cricket": "SPORTS",
  "Kabaddi": "SPORTS",
  "Badminton": "SPORTS",
  "Basketball": "SPORTS",
  "Gymkhana Room Incharge": "ADMIN",
  "Canteen Head": "ADMIN",
  "Music Club": "CULTURAL",
  "Eastern Dance Club": "CULTURAL",
  "Western Dance Club": "CULTURAL",
  "Drama Club": "CULTURAL",
  "Art and Craft Club": "CULTURAL",
  "Photography Club": "CULTURAL",
  "Debate Club": "CULTURAL",
  "Quiz Club": "CULTURAL",
  "E-Cell": "TECH",
  "Literary Society": "CULTURAL",
  "Film Society": "CULTURAL",
  "College Magazine": "CULTURAL",
  "IEM Humour Club": "CULTURAL",
  "Pet Society": "CULTURAL",
  "Student Chapters": "TECH",
};

const communityFilters: { key: Community | "ALL"; label: string; icon: LucideIcon }[] = [
  { key: "ALL", label: "All", icon: LayoutGrid },
  { key: "CULTURAL", label: "Cultural Community", icon: Palette },
  { key: "TECH", label: "Tech Community", icon: Cpu },
  { key: "SPORTS", label: "Sports Community", icon: Trophy },
];

// ─── 2026-27 : initials avatar ───────────────────────────
const initials = (name: string) =>
  name
    .replace(/^(Prof\.|Dr\.)\s*/gi, "")
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

// ─── 2026-27 : quick-jump section nav (with scrollspy) ───
const QuickNav2026 = ({ sections, activeId }: { sections: Section[]; activeId: string }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = navRef.current?.querySelector(`[data-id="${activeId}"]`);
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeId]);

  return (
    <div className="sticky top-[76px] z-30 -mx-4 px-4 mb-12">
      <div
        ref={navRef}
        className="overflow-x-auto no-scrollbar rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#0b0b0f]/95 backdrop-blur-md shadow-[3px_3px_0px_0px_black] dark:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]"
      >
        <div className="flex gap-1.5 p-2.5 w-max">
          {sections.map((s) => {
            const id = anchorId(s.title);
            const Icon = getSectionIcon(s.title);
            const isActive = id === activeId;
            return (
              <a
                key={s.title}
                data-id={id}
                href={`#${id}`}
                className={`whitespace-nowrap flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-3 py-2 rounded-xl transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-black/50 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
                style={isActive ? { background: s.accentColor } : undefined}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {s.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── 2026-27 : member chip (click → portfolio) ───────────
const MemberChip2026 = ({ member, accent }: { member: Member; accent: string }) => (
  <Link
    to={`/members/${member.slug}`}
    className="group relative flex items-start gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-3.5 overflow-hidden hover:-translate-y-1 hover:border-transparent hover:shadow-[4px_4px_0px_0px_black] dark:hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.2)] transition-all duration-200"
    style={{ ["--accent" as string]: accent }}
  >
    <span
      className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity pointer-events-none"
      style={{ background: accent }}
    />
    <span
      className="relative shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-black text-white shadow-sm"
      style={{ background: accent }}
    >
      {initials(member.name)}
    </span>

    <span className="relative min-w-0 flex-1 flex flex-col gap-1">
      {member.role && (
        <span
          className="text-[9px] font-black uppercase tracking-wider truncate"
          style={{ color: accent }}
        >
          {member.role}
        </span>
      )}
      <span className="text-sm font-bold leading-snug truncate group-hover:underline">
        {member.name}
      </span>
      {member.dept && (
        <span className="text-[11px] opacity-50 truncate">{member.dept}</span>
      )}
      {member.phone && (
        <span className="text-[11px] opacity-40 truncate">{member.phone}</span>
      )}
    </span>

    <ArrowUpRight className="relative w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-60 transition-opacity mt-1" />
  </Link>
);

// ─── 2026-27 : section group ─────────────────────────────
const Section2026 = ({ section, index }: { section: Section; index: number }) => {
  const Icon = getSectionIcon(section.title);

  return (
    <motion.section
      id={anchorId(section.title)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className="scroll-mt-36 mb-14"
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
          style={{ background: section.accentColor }}
        >
          <Icon className="w-5 h-5" />
        </span>
        <h2 className="text-xl md:text-2xl font-black tracking-tight">
          {section.title}
        </h2>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50">
          {section.members.length}
        </span>
        <span
          className="hidden sm:block h-px flex-1 rounded-full"
          style={{ background: `linear-gradient(to right, ${section.accentColor}33, transparent)` }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {section.members.map((m, i) => (
          <MemberChip2026 key={i} member={m} accent={section.accentColor} />
        ))}
      </div>
    </motion.section>
  );
};

// ─── 2026-27 : stat tile ─────────────────────────────────
const StatTile = ({ icon: Icon, value, label }: { icon: LucideIcon; value: string | number; label: string }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] px-5 py-4">
    <span className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5" />
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-xl font-black">{value}</span>
      <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{label}</span>
    </span>
  </div>
);

// ─── 2026-27 : search result chip (flat, shows its team) ─
const SearchResultChip = ({ member, section }: { member: Member; section: Section }) => (
  <Link
    to={`/members/${member.slug}`}
    className="group relative flex items-start gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-3.5 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_black] dark:hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.2)] transition-all duration-200"
  >
    <span
      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-black text-white shadow-sm"
      style={{ background: section.accentColor }}
    >
      {initials(member.name)}
    </span>
    <span className="min-w-0 flex-1 flex flex-col gap-1">
      <span className="text-[9px] font-black uppercase tracking-wider truncate" style={{ color: section.accentColor }}>
        {member.role || section.title}
      </span>
      <span className="text-sm font-bold leading-snug truncate group-hover:underline">{member.name}</span>
      <span className="text-[11px] opacity-50 truncate">{section.title}</span>
    </span>
    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-60 transition-opacity mt-1" />
  </Link>
);

// ─── 2026-27 : full committee view ───────────────────────
const Committee2026 = () => {
  const [query, setQuery] = useState("");
  const [community, setCommunity] = useState<Community | "ALL">("ALL");
  const [activeId, setActiveId] = useState(anchorId(allSections2026[0].title));

  const filteredSections = useMemo(
    () =>
      community === "ALL"
        ? allSections2026
        : allSections2026.filter((s) => communityMap[s.title] === community),
    [community]
  );

  // Keep the scrollspy/quick-nav pointed at a section that's actually visible.
  useEffect(() => {
    if (filteredSections.length > 0) {
      setActiveId(anchorId(filteredSections[0].title));
    }
  }, [community]);

  const totalMembers = useMemo(
    () => allSections2026.reduce((acc, s) => acc + s.members.length, 0),
    []
  );
  const totalDepartments = useMemo(() => {
    const depts = new Set<string>();
    allSections2026.forEach((s) => s.members.forEach((m) => m.dept && depts.add(m.dept)));
    return depts.size;
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const results: { member: Member; section: Section }[] = [];
    allSections2026.forEach((section) => {
      section.members.forEach((member) => {
        if (
          member.name.toLowerCase().includes(q) ||
          member.role?.toLowerCase().includes(q) ||
          member.dept?.toLowerCase().includes(q) ||
          section.title.toLowerCase().includes(q)
        ) {
          results.push({ member, section });
        }
      });
    });
    return results;
  }, [query]);

  // Scrollspy: highlight the nav pill for the section currently in view.
  useEffect(() => {
    const sectionEls = filteredSections
      .map((s) => document.getElementById(anchorId(s.title)))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-140px 0px -70% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredSections]);

  return (
    <div className="relative">
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-72 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-400/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* HEADER */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em]">
          <Sparkles className="w-3 h-3" />
          2026 – 27 Session
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-br from-black to-black/60 dark:from-white dark:to-white/60 bg-clip-text text-transparent">
          The Gymkhana Committee
        </h1>
        <p className="opacity-60 max-w-2xl mx-auto text-sm md:text-base">
          Administration, faculty, core committee, and every club and chapter
          driving campus life this year — all in one directory.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-3xl mx-auto">
        <StatTile icon={Users} value={`${totalMembers}+`} label="Members" />
        <StatTile icon={Landmark} value={allSections2026.length} label="Teams" />
        <StatTile icon={GraduationCap} value={totalDepartments} label="Departments" />
        <StatTile icon={Crown} value="26–27" label="Session" />
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, role, or department…"
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* COMMUNITY FILTER */}
      {!query && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {communityFilters.map(({ key, label, icon: Icon }) => {
            const isActive = community === key;
            return (
              <button
                key={key}
                onClick={() => setCommunity(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
                    : "border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            );
          })}
        </div>
      )}

      {query ? (
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4">
            {searchResults.length} {searchResults.length === 1 ? "result" : "results"}
          </p>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {searchResults.map(({ member, section }, i) => (
                <SearchResultChip key={i} member={member} section={section} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 opacity-50 text-sm">
              No one matches "{query}" — try a different name or team.
            </div>
          )}
        </div>
      ) : filteredSections.length > 0 ? (
        <>
          <QuickNav2026 sections={filteredSections} activeId={activeId} />

          {filteredSections.map((section, i) => (
            <Section2026 key={section.title} section={section} index={i} />
          ))}
        </>
      ) : (
        <div className="text-center py-20 opacity-50 text-sm">
          No teams in this community yet.
        </div>
      )}
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