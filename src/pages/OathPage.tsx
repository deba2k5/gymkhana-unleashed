import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const OathPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-yellow-400 selection:text-black flex flex-col">
      <Navbar />

      <main className="flex-grow relative pt-32 pb-24 md:pt-48 md:pb-32 flex items-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-200 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 w-full text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 inline-flex"
          >
            <div className="bg-yellow-400 px-5 py-2 border-[3px] border-black brutalist-shadow">
              <span className="text-[10px] font-black tracking-[0.4em] text-black uppercase">
                STUDENT PLEDGE
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-space font-black text-black uppercase tracking-tighter mb-16"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 0.9 }}
          >
            THE GYMKHANA <br />
            <span className="text-outline">OATH.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decoration lines */}
            <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-[4px] bg-gradient-to-b from-black via-black/50 to-transparent" />
            
            <p className="font-space font-bold text-black/80 text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-[1.6] tracking-tight text-left italic">
              "We, the students of IEM Gymkhana, pledge to uphold the values of innovation, integrity, and absolute excellence. We vow to work relentlessly, stand united in our diversity, and foster a community where every idea has the power to shape the future. Through sports, culture, and technology, we promise to push boundaries and build a legacy that transcends time."
            </p>
            
            <div className="mt-12 pt-8 border-t-[3px] border-black/10 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-black/50 font-black uppercase tracking-widest text-sm mb-2">
                  ESTABLISHED 1989
                </div>
                <div className="text-black font-space font-black uppercase tracking-tighter text-3xl">
                  IEM STUDENT BODY
                </div>
              </div>
              <div className="w-24 h-24 rounded-full border-[3px] border-black bg-yellow-400 flex items-center justify-center brutalist-shadow transform rotate-12">
                <span className="font-space font-black text-4xl">G</span>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OathPage;
