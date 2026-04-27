import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, User, BookOpen, Phone, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allSections, Member } from "@/data/membersData";

const MemberDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the member by slug across all sections
  let member: Member | undefined;
  for (const section of allSections) {
    member = section.members.find((m) => m.slug === slug);
    if (member) break;
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050507] text-black dark:text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
        <Link to="/members" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Members
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#050507] text-black dark:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-black to-black/60 dark:from-white dark:to-white/40">
                {member.name}
              </h1>
              {member.dept && (
                <p className="text-xl md:text-2xl text-black/60 dark:text-white/40 font-medium">
                  {member.dept}
                </p>
              )}
            </motion.div>

            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-blue-600 dark:text-cyan-400">
                <User size={24} />
                <h2 className="text-2xl font-semibold uppercase tracking-wider">About</h2>
              </div>
              <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                  {member.about || "This member is a dedicated part of the IEM Gymkhana family, contributing to the growth and excellence of our institute through various initiatives and responsibilities."}
                </p>
              </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400">
                <Award size={24} />
                <h2 className="text-2xl font-semibold uppercase tracking-wider">Achievements (4 Years)</h2>
              </div>
              
              <div className="grid gap-4">
                {(member.achievements && member.achievements.length > 0) ? (
                  member.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-purple-500/50 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <BookOpen size={16} className="text-purple-600 dark:text-purple-400" />
                        </div>
                        <p className="text-lg text-black/80 dark:text-white/80 leading-snug">
                          {achievement}
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 italic text-black/50 dark:text-white/40">
                    Achievements for this member are currently being updated.
                  </div>
                )}
              </div>
            </motion.section>
          </div>

          {/* Sidebar / Image / Contact */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 group"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <User size={120} className="text-black/10 dark:text-white/10" />
                </div>
              )}
              {/* Decorative Glow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-6"
            >
              <h3 className="text-xl font-semibold border-b border-black/10 dark:border-white/10 pb-4">Contact Info</h3>
              
              <div className="space-y-4">
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 text-black/70 dark:text-white/70 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={18} className="text-blue-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-lg">{member.phone}</span>
                  </a>
                )}
                
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-black/70 dark:text-white/70 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={18} className="text-blue-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-lg break-all">{member.email}</span>
                  </a>
                )}

                {member.chapter && (
                  <div className="flex items-center gap-3 text-black/70 dark:text-white/70">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                      <BookOpen size={18} className="text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-lg">{member.chapter}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberDetailPage;
