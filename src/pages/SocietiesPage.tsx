"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clubs, type Club } from "@/data/societiesData";

/* LOGOS */
const logoMap: Record<string, string> = {
  music: "/Music.jpg",
  "itran-a": "/ITRANAA.jpg",
  offbeat: "/Offbeat_Logo.jpeg",
  chorus: "/CHORUS.jpg",
  oratoria: "/Oratoria.png",
  film: "/film.jpg",
  arc: "/ARC.png",
  photography: "/Photography.png",
  pet: "/pet.jpeg",
  iemlit: "/coming.png",
  humour: "/coming.png"
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const SocietiesPage = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("ALL");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = clubs.filter((c) => {
    const matchesTab = activeTab === "ALL" || c.category === activeTab;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.about.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* HERO */}
        <div className="bg-transparent text-foreground px-6 py-12 border-b-[3px] border-primary transition-colors">
          <div className="max-w-[1300px] mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-black uppercase text-foreground/60 hover:text-yellow-400 mb-10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>

            <div className="relative mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-7xl md:text-8xl font-black relative z-10 uppercase"
              >
                <span className="text-foreground">OUR</span>
                <br />
                <span className="text-yellow-400">CLUBS AND SOCIETIES.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-foreground/70 max-w-xl transition-colors font-bold uppercase tracking-tight"
            >
              The beating heart of campus life. Find your crew and make history.
            </motion.p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="max-w-[1300px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b-[3px] border-primary/10">
          <div className="flex flex-wrap gap-2">
            {["ALL", "CULTURAL", "LITERARY", "MANAGEMENT", "TECHNICAL"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-all border-2 ${activeTab === tab ? "bg-yellow-400 border-yellow-400 text-black shadow-[4px_4px_0_0_black]" : "hover:border-yellow-400/50 opacity-40 hover:opacity-100"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30 group-focus-within:text-yellow-400 group-focus-within:opacity-100 transition-all" />
            <input
              type="text"
              placeholder="SEARCH SOCIETIES..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-foreground/5 border-2 border-transparent focus:border-yellow-400 focus:bg-background h-12 pl-12 pr-4 text-[10px] font-black uppercase tracking-widest outline-none transition-all"
            />
          </div>
        </div>

        {/* CONTENT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[1300px] mx-auto px-6 py-24 space-y-32"
        >
          {filtered.map((club, i) => (
            <motion.div
              key={club.id}
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="
                group grid lg:grid-cols-[260px_1fr] gap-16 
                border-t-[3px] border-primary pt-16
                transition-all duration-300
              "
            >
              {/* LOGO */}
              <div className="flex justify-center">
                <div className="
                  w-44 h-44 border-[3px] border-primary bg-background flex items-center justify-center
                  shadow-[8px_8px_0px_#FACC15]
                  group-hover:shadow-[14px_14px_0px_#FACC15]
                  group-hover:-translate-y-2
                  transition-all duration-300
                  overflow-hidden
                ">
                  <img
                    src={logoMap[club.id] || "/coming.png"}
                    alt={club.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="
                    text-4xl md:text-5xl font-black inline-block px-3 py-1 text-foreground
                    shadow-[4px_4px_0px_#FACC15]
                    group-hover:shadow-[8px_8px_0px_#FACC15]
                    transition-all uppercase tracking-tighter
                  ">
                    {club.name}
                  </h2>
                  <span className="text-[10px] font-black tracking-[0.3em] opacity-30 uppercase mt-2">{club.category}</span>
                </div>

                <p className="text-lg font-bold text-foreground/70 transition-colors uppercase tracking-tight leading-tight">
                  {club.about || "Details will be updated soon."}
                </p>

                {/* LEADS */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase">
                    CORE CONTACTS
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {club.people.map((p, idx) => {
                      const parts = p.split("—");
                      const name = parts[0]?.trim();
                      const phone = parts[1]?.trim();
                      return (
                        <a
                          key={idx}
                          href={phone ? `tel:${phone}` : "#"}
                          onClick={(e) => !phone && e.preventDefault()}
                          className={`
                            flex items-center gap-2 px-4 py-2 border border-primary text-[11px] font-black uppercase tracking-widest
                            shadow-[3px_3px_0px_#FACC15]
                            hover:shadow-[5px_5px_0px_#FACC15]
                            transition-all
                            ${!phone && "cursor-default opacity-60"}
                          `}
                        >
                          <Phone className="w-3 h-3 opacity-30" />
                          <span>{name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* ACHIEVEMENTS */}
                {club.achievements.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase">
                      ACHIEVEMENTS
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {club.achievements.map((a, i) => (
                        <div
                          key={i}
                          className="pl-4 py-2 border-l-[3px] border-yellow-400 text-xs font-bold uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-all"
                        >
                          {a}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SOCIAL / ACTIONS */}
                <div className="flex items-center gap-3 pt-4">
                  {club.instagram && (
                    <a
                      href={club.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center w-12 h-12
                        border-[2px] border-primary text-foreground
                        shadow-[3px_3px_0px_#FACC15]
                        hover:shadow-[6px_6px_0px_#FACC15]
                        hover:bg-yellow-400 hover:text-black
                        transition-all duration-200
                      "
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}

                  {club.drive && (
                    <a
                      href={club.drive}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center h-12 px-6
                        border-[2px] border-primary text-[11px] font-black uppercase tracking-widest text-foreground
                        shadow-[3px_3px_0px_#FACC15]
                        hover:shadow-[6px_6px_0px_#FACC15]
                        hover:bg-yellow-400 hover:text-black
                        transition-all
                      "
                    >
                      Portfolio
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SocietiesPage;