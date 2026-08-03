"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UemNavbar from "@/components/uem/UemNavbar";
import UemFooter from "@/components/uem/UemFooter";

type Category = "CULTURAL" | "TECHNICAL" | "SPORTS";

const categoryMeta: { id: Category; label: string; description: string }[] = [
  { id: "CULTURAL", label: "Cultural Societies", description: "Music, dance, drama, debate, literature & film." },
  { id: "TECHNICAL", label: "Technical Societies", description: "Design, media, documentation & tech-driven clubs." },
  { id: "SPORTS", label: "Sports Clubs", description: "Sports and fitness communities." },
];

const UemSocietiesPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-transparent">
      <UemNavbar />

      <main className="pt-40 pb-32">
        <div className="max-w-[1300px] mx-auto px-6">

          <div className="relative mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-7xl md:text-8xl font-black relative z-10"
            >
              <span className="text-foreground">OUR</span>
              <br />
              <span className="text-violet-500">CLUBS AND SOCIETIES.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-foreground/70 max-w-xl transition-colors"
          >
            Discover all clubs and societies at UEM.
          </motion.p>
        </div>

        {/* CATEGORY CARDS */}
        <AnimatePresence mode="wait">
          {!activeCategory && (
            <motion.div
              key="uem-category-cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1300px] mx-auto px-6 py-24 grid md:grid-cols-3 gap-10"
            >
              {categoryMeta.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.03, rotate: -0.5 }}
                  className="
                    group text-left p-10 border-[3px] border-primary bg-background
                    shadow-[8px_8px_0px_#8B5CF6]
                    hover:shadow-[14px_14px_0px_#8B5CF6]
                    hover:-translate-y-2
                    transition-all duration-300
                  "
                >
                  <p className="text-sm font-bold text-foreground/40 mb-4">
                    0 Clubs
                  </p>
                  <h3 className="text-3xl font-black mb-4 text-foreground">
                    {cat.label}
                  </h3>
                  <p className="text-foreground/70 mb-8">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-black uppercase text-violet-500 group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}

          {activeCategory && (
            <motion.div
              key="uem-coming-soon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto px-6 py-24"
            >
              <button
                onClick={() => setActiveCategory(null)}
                className="inline-flex items-center gap-2 text-sm font-black uppercase text-foreground/60 hover:text-violet-500 transition-colors mb-10"
              >
                <ArrowLeft className="w-5 h-5" />
                All Categories
              </button>

              <div className="relative border-[3px] border-primary bg-card brutalist-shadow overflow-hidden py-24 px-6 flex flex-col items-center text-center gap-6">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="relative w-20 h-20 border-[3px] border-violet-600 flex items-center justify-center brutalist-shadow-sm">
                  <Clock className="w-9 h-9 text-violet-600" />
                </div>

                <p className="relative text-[11px] font-black uppercase tracking-[0.45em] text-foreground/50">
                  UEM Gymkhana &middot; {categoryMeta.find((c) => c.id === activeCategory)?.label}
                </p>

                <h2
                  className="relative font-space font-black text-foreground uppercase tracking-tighter"
                  style={{ fontSize: "clamp(2rem,6vw,4.5rem)", lineHeight: 0.9 }}
                >
                  Coming Soon
                </h2>

                <p className="relative max-w-xl text-sm md:text-base font-bold uppercase tracking-tight text-foreground/50 leading-relaxed">
                  {categoryMeta.find((c) => c.id === activeCategory)?.label} at University of
                  Engineering &amp; Management, Kolkata is being built. Please check back soon.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <UemFooter />
    </div>
  );
};

export default UemSocietiesPage;
