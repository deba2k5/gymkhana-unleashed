import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Member, Section, allSections } from "@/data/membersData";

// ─── WRAPPER ─────────────────────────────────────────────
const GlowWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      relative rounded-3xl p-[1px]

      /* LIGHT (UNCHANGED — YOUR ORIGINAL) */
      bg-yellow-400

      /* DARK (your glow) */
      dark:bg-gradient-to-r 
      dark:from-purple-500/60 
      dark:via-blue-500/50 
      dark:to-cyan-400/60
    "
  >
    <div
      className="
        rounded-3xl

        /* LIGHT */
        bg-white shadow-[4px_4px_0px_0px_black]

        /* DARK */
        dark:bg-[#0b0b0f]/95 dark:shadow-none
      "
    >
      {children}
    </div>
  </div>
);

// ─── MEMBER CARD ─────────────────────────────────────────
const MemberCard = ({ member }: { member: Member }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}

    /* LIGHT interactions (same) */
    whileHover={{
      y: -6,
      scale: 1.02,
      boxShadow: "8px 8px 0px 0px black",
    }}
    whileTap={{
      scale: 0.97,
      boxShadow: "2px 2px 0px 0px black",
    }}

    className="rounded-3xl cursor-pointer"
  >
    <div
      className="
        rounded-3xl p-5 flex flex-col gap-2 border h-full

        /* LIGHT */
        bg-white border-black/10 shadow-[4px_4px_0px_0px_black]

        /* DARK */
        dark:bg-transparent dark:border-white/5 dark:shadow-none
      "
    >
      <Link 
        to={`/members/${member.slug}`}
        className="text-base font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
      >
        {member.name}
      </Link>

      {member.dept && (
        <p className="text-xs text-black/60 dark:text-white/50">
          {member.dept}
        </p>
      )}

      {member.chapter && (
        <p className="text-xs text-black/50 dark:text-white/40">
          {member.chapter}
        </p>
      )}

      {member.email && (
        <p className="text-xs text-blue-600 dark:text-cyan-400 break-all">
          {member.email}
        </p>
      )}

      {member.phone && (
        <a
          href={`tel:${member.phone}`}
          className="text-sm text-black/70 hover:text-blue-600 dark:text-white/70 dark:hover:text-cyan-400 transition"
        >
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
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
              {section.title}
            </h2>

            <div className="h-[2px] w-24 bg-yellow-400 dark:bg-gradient-to-r dark:from-purple-500 dark:to-cyan-400 mt-2 rounded-full" />

            {section.subtitle && (
              <p className="text-sm text-black/60 dark:text-white/50 mt-2">
                {section.subtitle}
              </p>
            )}

            {section.brochureLink && (
              <div className="flex flex-wrap items-center gap-4 mt-3">

                <a
                  href={section.brochureLink}
                  target="_blank"
                  className="text-xs text-blue-600 dark:text-cyan-400 hover:underline"
                >
                  View Official Brochure
                </a>

                {section.title === "Anti-Ragging Committee" && (
                  <div className="flex flex-col sm:flex-row gap-4 border-l border-black/10 dark:border-white/10 pl-4">

                    <div>
                      <span className="text-[10px] text-black/40 dark:text-white/40 uppercase">
                        General Secretary
                      </span>
                      <p className="text-xs text-black/80 dark:text-white/80">
                        Surjyangshu: 7439122770
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-black/40 dark:text-white/40 uppercase">
                        Vice President
                      </span>
                      <p className="text-xs text-black/80 dark:text-white/80">
                        Sayantika: 9749125069
                      </p>
                    </div>

                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-xs text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
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
  return (
    <div className="min-h-screen bg-white dark:bg-[#050507] text-black dark:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20 w-full">
        {allSections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;