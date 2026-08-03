"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import UemNavbar from "@/components/uem/UemNavbar";
import UemFooter from "@/components/uem/UemFooter";

interface UemComingSoonPageProps {
  section: string;
}

const UemComingSoonPage = ({ section }: UemComingSoonPageProps) => {
  return (
    <div className="min-h-screen bg-transparent">
      <UemNavbar />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative border-[3px] border-primary bg-card brutalist-shadow overflow-hidden py-24 px-6 flex flex-col items-center text-center gap-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative w-20 h-20 border-[3px] border-violet-600 flex items-center justify-center brutalist-shadow-sm">
              <Clock className="w-9 h-9 text-violet-600" />
            </div>

            <p className="relative text-[11px] font-black uppercase tracking-[0.45em] text-foreground/50">
              UEM Gymkhana &middot; {section}
            </p>

            <h1
              className="relative font-space font-black text-foreground uppercase tracking-tighter"
              style={{ fontSize: "clamp(2rem,6vw,4.5rem)", lineHeight: 0.9 }}
            >
              Coming Soon
            </h1>

            <p className="relative max-w-xl text-sm md:text-base font-bold uppercase tracking-tight text-foreground/50 leading-relaxed">
              The {section.toLowerCase()} page for University of Engineering &amp; Management,
              Kolkata is being built. Please check back soon.
            </p>
          </motion.div>
        </div>
      </main>

      <UemFooter />
    </div>
  );
};

export default UemComingSoonPage;
