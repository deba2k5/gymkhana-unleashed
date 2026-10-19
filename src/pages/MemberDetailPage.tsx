import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Trophy,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allSections, Member } from "@/data/membersData";
import { allSections2024 } from "@/data/membersData_2024";
import { allSections2026 } from "@/data/membersData_2026";

const SESSIONS: { sections: typeof allSections2026; label: string }[] = [
  { sections: allSections2026, label: "2026 – 27" },
  { sections: allSections, label: "2025 – 26" },
  { sections: allSections2024, label: "2024 – 25" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const InfoRow = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      <div className="w-10 h-10 shrink-0 rounded-xl border-[2px] border-primary bg-background flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors">
        <Icon className="w-4 h-4 text-foreground group-hover:text-black transition-colors" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
          {label}
        </p>
        <p className="text-sm font-bold text-foreground truncate">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const MemberDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  let member: Member | undefined;
  let memberSectionTitle = "";
  let sessionLabel = "";

  for (const { sections, label } of SESSIONS) {
    for (const section of sections) {
      member = section.members.find((m) => m.slug === slug);
      if (member) {
        memberSectionTitle = section.title;
        sessionLabel = label;
        break;
      }
    }
    if (member) break;
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-32 text-center">
          <h1 className="font-space text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">
            Member Not Found
          </h1>
          <p className="text-sm font-bold text-foreground/50 uppercase tracking-wide mb-8">
            This profile doesn't exist or may have moved.
          </p>
          <Link
            to="/members"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Directory
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const roleDiffersFromSection = member.role && member.role !== memberSectionTitle;

  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Navbar />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-transparent border-b-4 border-primary overflow-hidden transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.05]" />
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-yellow-400/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[35%] h-[35%] bg-primary/10 blur-[120px] rounded-full" />

          <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 z-10">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-black uppercase text-foreground/60 hover:text-yellow-400 mb-8 sm:mb-10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Directory
            </button>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
            >
              {/* AVATAR */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-[2rem] overflow-hidden border-[3px] border-primary bg-black shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-primary/10 flex items-center justify-center">
                    <User className="w-12 h-12 text-foreground/20" />
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-[0.2em]">
                    {memberSectionTitle}
                  </span>
                  {roleDiffersFromSection && (
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em]">
                      {member.role}
                    </span>
                  )}
                  {sessionLabel && (
                    <span className="px-3 py-1 rounded-full border-2 border-primary text-foreground/60 text-[10px] font-black uppercase tracking-[0.2em]">
                      {sessionLabel}
                    </span>
                  )}
                </div>

                <h1
                  className="font-space font-black tracking-tighter text-foreground mb-3 transition-colors break-words"
                  style={{ fontSize: "clamp(2.25rem,5.5vw,4rem)", lineHeight: 0.95 }}
                >
                  {member.name}
                </h1>

                {(member.dept || member.role) && (
                  <p className="text-sm sm:text-base font-bold text-foreground/50 uppercase tracking-wide">
                    {member.dept || member.role}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CONTENT ─── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
            >
              {/* MAIN */}
              <div className="lg:col-span-8 space-y-10">
                {/* ABOUT */}
                <motion.div
                  variants={item}
                  className="p-6 sm:p-8 border-[3px] border-primary bg-background rounded-3xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-black" />
                    </div>
                    <h2 className="font-space text-lg sm:text-xl font-black uppercase tracking-tighter">
                      About
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/70 font-medium">
                    {member.about ||
                      "As an integral part of the IEM Gymkhana leadership, this individual oversees critical aspects of student development, community engagement, and institutional growth — consistently demonstrating excellence in event coordination, strategic planning, and peer mentorship within the Institute of Engineering & Management."}
                  </p>
                </motion.div>

                {/* ACHIEVEMENTS */}
                <motion.div
                  variants={item}
                  className="p-6 sm:p-8 border-[3px] border-primary bg-background rounded-3xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))]"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5 text-black" />
                    </div>
                    <h2 className="font-space text-lg sm:text-xl font-black uppercase tracking-tighter">
                      Achievements &amp; Track Record
                    </h2>
                  </div>

                  {member.achievements && member.achievements.length > 0 ? (
                    <ul className="space-y-4">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 mt-0.5 rounded-full bg-yellow-400/15 border-2 border-yellow-400 flex items-center justify-center">
                            <ChevronRight className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                          </span>
                          <p className="text-sm sm:text-base font-bold text-foreground/80 leading-snug">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm font-bold text-foreground/40 italic">
                      Additional records pending documentation.
                    </p>
                  )}
                </motion.div>
              </div>

              {/* SIDEBAR */}
              <div className="lg:col-span-4">
                <motion.div
                  variants={item}
                  className="lg:sticky lg:top-28 p-6 sm:p-8 border-[3px] border-primary bg-background rounded-3xl shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))]"
                >
                  <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-2">
                    Quick Info
                  </h3>

                  <div className="divide-y divide-primary/10">
                    {member.role && (
                      <InfoRow icon={Briefcase} label="Role" value={member.role} />
                    )}
                    {member.dept && (
                      <InfoRow icon={Building2} label="Department" value={member.dept} />
                    )}
                    {sessionLabel && (
                      <InfoRow icon={CalendarDays} label="Session" value={sessionLabel} />
                    )}
                    {member.email && (
                      <InfoRow
                        icon={Mail}
                        label="Email"
                        value={member.email}
                        href={`mailto:${member.email}`}
                      />
                    )}
                    {member.phone && (
                      <InfoRow
                        icon={Phone}
                        label="Phone"
                        value={member.phone}
                        href={`tel:${member.phone}`}
                      />
                    )}
                  </div>

                  <Link
                    to="/members"
                    className="mt-6 inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-yellow-400 text-black text-xs font-black uppercase tracking-widest rounded-2xl shadow-[4px_4px_0px_hsl(var(--primary)/var(--shadow-opacity))] hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(var(--primary)/var(--shadow-opacity))] active:translate-y-0 transition-all"
                  >
                    All Members
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MemberDetailPage;
