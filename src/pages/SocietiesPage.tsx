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
  debate:"/Oratoria.png",
  film:"/film.jpg",
  arc:"ARC.png",

  photography:"/Photography.png",
  pet:"/pet.jpeg",
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
  id: "debate",
  name: "Oratoria-Debate Club",
   instagram:
    "https://www.instagram.com/iemdebatingsociety?igsh=aGJ0MGp2MnBpM3cz",
  about: "Oratoria IEM Debating Society, established on 25th February 2025 in alignment with International Mother Language Day, is dedicated to promoting linguistic diversity, intellectual expression, and meaningful discourse.\n\nStarting with a small group of 10–15 members, the Society has grown into a strong community of 52, driven by its vision: Discover, Debate, Deliver.\n\nIt serves as a platform for developing analytical thinking, articulate communication, and principled debate, through structured sessions, training, and competitive forums.\n\nOratoria has consistently nurtured individuals who excel in debating, public speaking, and policy discourse, shaping future leaders and changemakers.",
  people: [
    "Rajsekhar Hajrah — 8902697173",
    "Vishal Roy — 8399995198",
  ],
  achievements: [
    "IIT Kharagpur Communiqué — High Commendation (Biplab Jha)",
    "NIT Durgapur — Best Delegate (Aditya Lahiri, Raj Sekhar Hajrah)",
    "Rotary Forum of Diplomacy 2025 — Verbal Mention (Sreyobrata Saha, Sreeparna Barman; Adrija Chatterjee, Sampurna Datta; Raj Sekhar Hajrah, Vishal Roy; Adrija Dan), Special Mention (Sanniddh Mukherjee), Honourable Mention (Arka Chowdhury)",
    "Bengal Diplomacy Summit 2025 — Verbal Mention (Nilaksha Sinha Roy), Special Mention (Sanniddh Mukherjee), Honourable Mention (Arka Chowdhury)",
    "Eclecticia 2K25 — High Commendation (Soumik Mondal), Verbal Mention (Nilaksha Sinha Roy, Arka Chowdhury)",
    "KIITMUN 2025 — Special Mention (Ankita Mondal, Soumil Jana), Honourable Mention (Nilaksha Sinha Roy)",
    "IIT Kharagpur Communiqué 2026 — Best Delegation"
  ],
},
{
  id: "arc",
  name: "ARC",
   about: "The team responsible for the artwork that catches your eye, the videos that leave an impression on you, and the designs that just seem to be done the right way. For the A.R.C., creation is a process—one that involves experimentation, improvement, and perfection at every step. It’s not about following a fixed style or working within limits, but about a group of individuals exploring graphic, video, and digital art techniques with purpose and expertise.",
  
  people: [
    "Paramartha Ghosh",
    "Ankita Mandal",
    "Rupsa Ghosh",
    "Swastika Saha"
  ],

achievements: [
    "Supported major events including IEMPACT 2026, IEM–UEM Kolkata Marathon 2026, FED CUP 2026, IEMMUN ’25, and Comicverse 2025.",
    "Delivered high-quality graphics, video content, and digital artwork for large-scale college and external events.",
    "Contributed creative assets used across multiple media houses and social platforms."
  ],


  drive: "https://drive.google.com/drive/folders/1g6wXrMse3Fd1VQz2T5lEv8ApdtgXePhR?usp=sharing"
} as any,

{
  id: "photography",
  name: "Photography Club",
  about: "Our Club focuses on covering all college events. Other than that, we have built a network where photographers get actual paid work. Most importantly, our club focuses on organizing more competitions and photowalks.",
  
  people: [
    "Arghya Banerjee — 6294566708",
    "Subham Saha — 9163799483",
    "Ankush Saha — 7044778799",
  ],

  achievements: [
    "Club heads have been awarded Best Student Performance. Photographs from our club are used in various media houses and social media platforms."
  ],
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
  about: "The Pet Society is a student-driven community dedicated to promoting animal welfare, compassion, and responsible pet care. It brings together animal lovers who are passionate about creating a safer and kinder environment for pets and stray animals.",
  people: [
    "Zinnia Ghosh — 7044835500",
    "Himel Jana — 7063076214",
  ],
  achievements: [],
},
{
  id: "film",
  name: "Aalokborsho",
     instagram:
    "https://www.instagram.com/aalokborsho?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D",
  about: `The Film Society is dedicated to fostering a deeper appreciation of cinema as an art form and a medium of expression. We create a platform for critical viewing, thoughtful discussion, and creative exploration. By bridging the gap between audience and creator, we aim to cultivate a culture of storytelling, perspective, and innovation within the student community.`,
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
    <div className="min-h-screen bg-transparent text-foreground flex flex-col transition-colors">
      <Navbar />

      <main className="flex-grow">

        {/* HERO */}
        <div className="bg-transparent text-foreground px-6 py-24 border-b-[3px] border-primary transition-colors">
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
    <span className="text-foreground">OUR</span>
    <br />
    <span className="text-yellow-400">CLUBS AND SOCIETIES.</span>
  </motion.h1>

</div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-foreground/70 max-w-xl transition-colors"
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
                border-t-[3px] border-primary pt-16
                transition-all duration-300
              "
            >

              {/* LOGO */}
              <div className="flex justify-center">
                <div className="
                  w-44 h-44 border-[3px] border-primary bg-background flex items-center justify-center
                  shadow-[8px_8px_0px_FACC15]
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
                  text-4xl font-black inline-block px-3 py-1 text-foreground
                  shadow-[4px_4px_0px_#FACC15]
                  group-hover:shadow-[8px_8px_0px_#FACC15]
                  transition-all
                ">
                  {club.name}
                </h2>

                <p className="text-lg text-foreground/70 transition-colors">
                  {club.about || "Details will be updated soon."}
                </p>

                {/* LEADS */}
                <div>
                  <p className="text-sm font-bold text-foreground/50 mb-2 transition-colors">
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
                              px-3 py-1 border border-primary text-sm text-foreground
                              shadow-[2px_2px_0px_#FACC15]
                              hover:shadow-[4px_4px_0px_#FACC15]
                              transition-all
                            "
                          >
                            {p}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-foreground/40">To be updated</p>
                  )}
                </div>

                {/* ACHIEVEMENTS */}
{club.achievements.length > 0 && (
  <div>
    <p className="text-sm font-bold text-foreground/50 mb-2 transition-colors">
      Achievements
    </p>

    <div className="space-y-2">
      {club.achievements.map((a, i) => (
        <div
          key={i}
          className="
            pl-4 py-1 border-l-[3px] border-yellow-400
            hover:bg-yellow-50 hover:text-black transition
          "
        >
          {a}
        </div>
      ))}
    </div>
  </div>
)}
{/* SOCIAL */}
<div className="flex items-center gap-3">

  {club.instagram && (
<a
  href={club.instagram}
  target="_blank"
  rel="noreferrer"
  className="
    inline-flex items-center justify-center w-11 h-11
    border-[2px] border-primary text-foreground
    shadow-[3px_3px_0px_#FACC15]
    hover:shadow-[6px_6px_0px_#FACC15]
    hover:bg-white hover:text-black hover:border-white
    transition-all duration-200
  "
>
      <Instagram className="w-5 h-5" />
    </a>
  )}

  {/* ✅ DRIVE BUTTON ONLY FOR ARC */}
  {club.id === "arc" && (
    <a
      href="https://drive.google.com/drive/folders/1g6wXrMse3Fd1VQz2T5lEv8ApdtgXePhR?usp=sharing"
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center justify-center h-11 px-4
        border-[2px] border-primary text-sm font-bold text-foreground
        shadow-[3px_3px_0px_#FACC15]
        hover:shadow-[6px_6px_0px_#FACC15]
        hover:bg-primary hover:text-primary-foreground
        transition-all
      "
    >
      Portfolio
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