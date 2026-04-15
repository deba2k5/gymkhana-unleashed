"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* LOGOS */
const logoMap: Record<string, string> = {
  music: "/Music.jpg",
  itrana: "/ITRANAA.jpg",
  offbeat: "/Offbeat_Logo.jpeg",
  chorus: "/CHORUS.jpg",
};

/* CLUBS */
const clubs = [
{
  id: "music",
  name: "The Eighth Note",
  instagram: "https://www.instagram.com/iemmusicclub/",
  about:
    "If music is your passion—whether you sing or play an instrument, rooted in Eastern traditions or Western styles—the Music Club offers a platform to collaborate, perform, and grow. From college events to inter-college fests, it nurtures both artistry and stage presence.",
  people: [
    "Rajdeep Sengupta — 9831895110",
    "Arighna Bhattacharya — 7439487159",
    "Adrija Acharyya — 7908760641",
    
  ],
  achievements: [
    "Umang 2024 – Winner",
    "Umang 2023 – Runners Up",
    "Xavrang 2026 – Winner",
    "Xavrang 2025 – Runners Up",
    "Amiphoria 2025 – Winner",
    "Ecstasy 2025 – Runners Up",
  ],
},
{
  id: "itrana",
  name: "Itranaa",
  instagram: "https://www.instagram.com/itranaa.iem",
  about:
    "As we step into the rhythm and grace of our passion, we share one thing in common—a deep love for dance. From in-house performances to inter-college victories, Itranaa nurtures expression, discipline, and artistic excellence.",
  people: [
    "Prakriti Mukhopadhyay — 9907444649",
    "Snikta Banerjee — 9674173204",
    
  ],
  achievements: [
    "Sanskriti 2021 – 1st Runners Up",
    "Calcutta Youth Meet 2023 – Winner",
    "Samgra 2024 – 1st Runners Up",
    "Rhapsody 2023 – 1st Runners Up",
    "Umang 2025 – 1st Runners Up",
    "Ecstasia 2025 – Winner (Solo)",
  ],
},
{
  id: "offbeat",
  name: "OffBeat",
  instagram: "https://www.instagram.com/offbeat_2526",
  about:
    "Offbeat, the official western dance club of IEM, Kolkata, is driven by creativity, confidence, and artistic excellence through dance. It fosters a community where dancers explore diverse styles, perform, and grow together.",
  people: [
    "Soham Sarkar — 9832249929",
    "Priyanjana Paul — 6290836210",
  ],
  achievements: [
    "Sanskriti 2023 – 1st Prize",
    "Ripples 2025 – 2nd Prize",
    "Umang 2025 – 2nd Prize",
  ],
},
{
  id: "chorus",
  name: "Chorus",
  instagram:
    "https://www.instagram.com/chorusdrama?igsh=MW4wYWh1YmQycmM4MQ==",
  about:
    "The official drama club of IEM, making stage our home and keeping theatre alive among youngsters.",
  people: [
    "Shaptorshi Chakraborty — 9123304829",
    "Ritankar Kundu — 8420281840",
  ],
  achievements: [
    "Winner at Anubhuti 2019",
    "1st Runners Up at Sanskriti 2023",
    "Special Mention at Anubhuti 2025",
    "Special Invitation at Gyan Manch by Kolkata RomRoma",
  ],
},
{
  id: "arc",
  name: "ARC",
  about: "",
  people: [],
  achievements: [],
},
{
  id: "debate",
  name: "Debate Society",
  about: "",
  people: [
    "Rajsekhar Hajrah — 8902697173",
    "Vishal Roy — 8399995198",
  ],
  achievements: [],
},
{
  id: "photography",
  name: "Photography Club",
  about: "",
  people: [
    "Arghya Banerjee — 6294566708",
    "Subham Saha — 9163799483",
    "Ankush Saha — 7044778799",
  ],
  achievements: [],
},
{
  id: "lit",
  name: "Literary Society",
  about: "",
  people: [
    "Spandan Chakrabarty — 9836364257",
  ],
  achievements: [],
},
{
  id: "humour",
  name: "Humour Club",
  about: "",
  people: [
    "Md Tanzil Imam — 9330657193",
  ],
  achievements: [],
},
{
  id: "pet",
  name: "Pet Society",
  about: "",
  people: [
    "Zinnia Ghosh — 7044835500",
    "Himel Jana — 7063076214",
  ],
  achievements: [],
},
{
  id: "film",
  name: "Film Society",
  about: "",
  people: [
    "Bratyabandhu Bhattacharyya — 8240005041",
  ],
  achievements: [],
},
];

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      <main className="flex-grow">

        {/* HERO */}
        <div className="bg-black text-white px-6 py-24 border-b-[3px] border-yellow-400">
          <div className="max-w-[1300px] mx-auto">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-black uppercase text-white/60 hover:text-yellow-400 mb-10"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>

<div className="relative mb-10">

  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      text-[120px] md:text-[180px] font-black leading-none
      text-transparent
      stroke-text
      absolute top-10 left-0
      opacity-90
      pointer-events-none
    "
  >
    CLUBS & SOCIETIES
  </motion.h1>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-7xl md:text-8xl font-black relative z-10"
  >
    <span className="text-white">OUR</span>
    <br />
    <span className="text-yellow-400">CLUBS AND SOCIETIES.</span>
  </motion.h1>

</div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/70 max-w-xl"
            >
              Discover all clubs and societies at IEM.
            </motion.p>
          </div>
        </div>

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[1300px] mx-auto px-6 py-24 space-y-32"
        >

          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              variants={item}
              whileHover={{ scale: 1.02, rotate: -0.2 }}
              className="
                group grid lg:grid-cols-[260px_1fr] gap-16 
                border-t-[3px] border-black pt-16
                transition-all duration-300
              "
            >

              {/* LOGO */}
              <div className="flex justify-center">
                <div className="
                  w-44 h-44 border-[3px] border-black bg-white flex items-center justify-center
                  shadow-[8px_8px_0px_#FACC15]
                  group-hover:shadow-[14px_14px_0px_#FACC15]
                  group-hover:-translate-y-2
                  transition-all duration-300
                ">
                  <img
                    src={logoMap[club.id] || "/coming.png"}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-4">

                <h2 className="
                  text-4xl font-black inline-block px-3 py-1
                  shadow-[4px_4px_0px_#FACC15]
                  group-hover:shadow-[8px_8px_0px_#FACC15]
                  transition
                ">
                  {club.name}
                </h2>

                <p className="text-lg text-black/70">
                  {club.about || "Details will be updated soon."}
                </p>

                {/* LEADS */}
                <div>
                  <p className="text-sm font-bold text-black/50 mb-2">
                    Leads
                  </p>

                  {club.people.length ? (
                    <div className="flex flex-wrap gap-2">
                      {club.people.map((p, i) => {
                        const phone = p.split("—")[1]?.trim();

                        return (
                          <a
                            key={i}
                            href={`tel:${phone}`}
                            className="
                              px-3 py-1 border border-black text-sm
                              shadow-[2px_2px_0px_#FACC15]
                              hover:shadow-[4px_4px_0px_#FACC15]
                              transition
                            "
                          >
                            {p}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-black/40">To be updated</p>
                  )}
                </div>

                {/* ACHIEVEMENTS */}
                <div>
                  <p className="text-sm font-bold text-black/50 mb-2">
                    Achievements
                  </p>

                  {club.achievements.length ? (
                    <div className="space-y-2">
                      {club.achievements.map((a, i) => (
                        <div
                          key={i}
                          className="
                            pl-4 py-1 border-l-[3px] border-yellow-400
                            hover:bg-yellow-50 transition
                          "
                        >
                          {a}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-black/40">To be updated</p>
                  )}
                </div>

                {/* SOCIAL */}
                {club.instagram && (
                  <a
                    href={club.instagram}
                    target="_blank"
                    className="
                      inline-flex items-center justify-center w-11 h-11
                      border-[2px] border-black
                      shadow-[3px_3px_0px_#FACC15]
                      hover:shadow-[6px_6px_0px_#FACC15]
                      hover:bg-black hover:text-white
                      transition
                    "
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}

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