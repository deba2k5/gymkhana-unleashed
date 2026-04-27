import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Award, 
  User, 
  Mail, 
  Linkedin,
  Twitter,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allSections, Member } from "@/data/membersData";

const MemberDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the member and their section
  let member: Member | undefined;
  let memberSectionTitle: string = "";
  
  for (const section of allSections) {
    member = section.members.find((m) => m.slug === slug);
    if (member) {
      memberSectionTitle = section.title;
      break;
    }
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050507] text-black dark:text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 font-outfit">Member Not Found</h1>
        <Link to="/members" className="text-blue-600 hover:underline flex items-center gap-2 font-inter">
          <ArrowLeft size={20} /> Back to Members
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#050507] text-black dark:text-white flex flex-col font-inter selection:bg-blue-500/30">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 overflow-hidden border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#08080a]">
          {/* Decorative background effects */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/[0.03] to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <button
                onClick={() => navigate(-1)}
                className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
                  <ArrowLeft size={16} />
                </div>
                Directory
              </button>
            </motion.div>

            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-16">
              {/* Profile Info - Left Side */}
              <div className="flex-grow max-w-3xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <div className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20">
                      {memberSectionTitle}
                    </div>
                  </div>

                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black dark:text-white font-outfit leading-[0.9]">
                    {member.name}
                  </h1>

                  <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <p className="text-xl md:text-2xl font-bold text-black/80 dark:text-white/70">{member.dept || "Institute of Engineering & Management"}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Contact Icons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-8 pt-12 border-t border-black/5 dark:border-white/5 mt-12"
                >
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Mail size={20} />
                      </div>
                      <div className="text-left hidden sm:block">
                        <p className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">Official Email</p>
                        <p className="text-sm font-bold truncate max-w-[200px]">{member.email || "member@iem.edu"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                        <Linkedin size={20} />
                      </div>
                      <div className="text-left hidden sm:block">
                        <p className="text-[10px] font-black uppercase tracking-widest text-black/30 dark:text-white/30">Professional</p>
                        <p className="text-sm font-bold">LinkedIn</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Profile Image - Top Right Corner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className="relative shrink-0 lg:mb-4"
              >
                <div className="relative z-20">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border-[12px] border-white dark:border-[#101014] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black flex items-center justify-center">
                        <User size={120} className="text-black/5 dark:text-white/5" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative Shapes Behind Image */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-20"
          >
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-24">
              {/* About Section */}
              <motion.section variants={itemVariants} className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-blue-600"></div>
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">About</h2>
                </div>
                
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-black/60 dark:text-white/50 font-medium">
                    {member.about || "As an integral part of the IEM Gymkhana leadership, this individual oversees critical aspects of student development, community engagement, and institutional growth. With a focus on fostering a collaborative environment, they have consistently demonstrated excellence in event coordination, strategic planning, and peer mentorship within the Institute of Engineering & Management."}
                  </p>
                </div>
              </motion.section>

              {/* Achievements - Normal Bullets */}
              <motion.section variants={itemVariants} className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/5">
                  <div className="space-y-2">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">Achievements</h2>
                    <h3 className="text-4xl font-bold font-outfit">4-Year Track Record</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {member.achievements && member.achievements.length > 0 ? (
                    <ul className="space-y-6">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-4 group">
                          <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mt-1">
                            <ChevronRight size={14} />
                          </div>
                          <p className="text-xl font-semibold text-black/80 dark:text-white/80 leading-snug">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-black/40 dark:text-white/30 italic text-lg">Additional records pending documentation.</p>
                  )}
                </div>
              </motion.section>
            </div>

            {/* Sidebar - Simplified */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div variants={itemVariants} className="pt-8 text-center lg:text-left">
                <p className="text-[10px] font-bold text-black/20 dark:text-white/10 uppercase tracking-widest">IEM Gymkhana Member Profile</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberDetailPage;
