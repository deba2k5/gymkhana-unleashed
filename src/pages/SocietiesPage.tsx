"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Category = "CULTURAL" | "TECHNICAL" | "SPORTS";

const categoryMeta: { id: Category; label: string; description: string }[] = [
  { id: "CULTURAL", label: "Cultural Societies", description: "Music, dance, drama, debate, literature & film." },
  { id: "TECHNICAL", label: "Technical Societies", description: "Design, media, documentation & tech-driven clubs." },
  { id: "SPORTS", label: "Sports Clubs", description: "Sports and fitness communities." },
];

/* LOGOS */
const logoMap: Record<string, string> = {
  music: "/Music.jpg",
  itrana: "/ITRANAA.jpg",
  offbeat: "/Offbeat_Logo.jpeg",
  chorus: "/CHORUS.jpg",
  debate:"/Oratoria.png",
  film:"/film.jpg",
  arc:"ARC.png",
  lit:"/lit.jpg",
  photography:"/Photography.png",
  pet:"/pet.jpeg",
};

/* CLUBS */
const clubs = [
{
  id: "music",
  name: "The Eighth Note",
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
    instagram:
    "https://www.instagram.com/iemliterarysociety?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D",
  about: " The Literary Society of IEM is an energetic group of thinkers, writers, speakers, and creators committed to fostering a love for literature, communication, and creativity within campus activities.As the literary branch of the Institute of Engineering and Management, the society offers a space for students to share their thoughts, delve into language, and appreciate the influence of words through interactive events like debates, quizzes, poetry, storytelling, public speaking, creative writing, and cultural collaborations. We advocate for the fusion of Literature and Technology to inspire meaningful innovation, new viewpoints, and significant ideas for today’s world.We also recognize the potential of youth—encouraging emerging talents to question norms, think boldly, and embrace the unconventional.With creativity at our foundation and innovation as our goal, we aim to cultivate a vibrant environment where talent can express itself and originality can shine.",
  people: [
    "Spandan Chakrabarty — 9836364257",
    "Swastik Gayen",
    "Sankha Subhra Mahata",
    "Sweta Mandal"
  ],
  achievements: [],
},
// {
//   id: "humour",
//   name: "Humour Club",
//   about: "",
//   people: [
//     "Md Tanzil Imam — 9330657193",
//   ],
//   achievements: [],
// },
{
  id: "pet",
  name: "Pet Society",
  category: "CULTURAL" as Category,
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
  category: "CULTURAL" as Category,
     instagram:
    "https://www.instagram.com/aalokborsho?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D",
  about: `The Film Society is dedicated to fostering a deeper appreciation of cinema as an art form and a medium of expression. We create a platform for critical viewing, thoughtful discussion, and creative exploration. By bridging the gap between audience and creator, we aim to cultivate a culture of storytelling, perspective, and innovation within the student community.`,
  people: [
    "Bratyabandhu Bhattacharyya — 8240005041",
  ],
  achievements: [],
},

/* ══════════════════════════════════════════
   PROFESSIONAL & TECHNICAL CHAPTERS — 2025-26
════════════════════════════════════════════ */
{
  id: "ishrae",
  name: "ISHRAE Student Chapter",
  category: "TECHNICAL" as Category,
  about: "The Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE) student chapter at IEM, connecting students with the HVAC&R industry through talks, projects, and site visits.",
  people: ["Abhirup Chakraborty — 9831148603"],
  achievements: [],
},
{
  id: "ashrae",
  name: "ASHRAE Student Chapter",
  category: "TECHNICAL" as Category,
  about: "The American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) student chapter, promoting research and best practice in building services and sustainable engineering.",
  people: ["Diptangsu Panja — 6289448636"],
  achievements: [],
},
{
  id: "sae",
  name: "SAE Student Chapter",
  category: "TECHNICAL" as Category,
  about: "The Society of Automotive Engineers (SAE) collegiate chapter, engaging students in automotive design, mobility engineering, and national-level design competitions.",
  people: ["Avinandan Mukherjee — 9836714226"],
  achievements: [],
},
{
  id: "iei-me",
  name: "IEI Student Chapter — Mechanical",
  category: "TECHNICAL" as Category,
  about: "The Institution of Engineers (India) student chapter for Mechanical Engineering, encouraging professional development and engineering excellence among students.",
  people: ["Prince Dey — 6291857014"],
  achievements: [],
},
{
  id: "iet-ee",
  name: "IET Student Chapter — Electrical",
  category: "TECHNICAL" as Category,
  about: "The Institution of Engineering and Technology (IET) student chapter for Electrical Engineering, connecting students to global engineering standards and networks.",
  people: ["Aritra Roy — 9609191814"],
  achievements: [],
},
{
  id: "iei-ee",
  name: "IEI Student Chapter — Electrical",
  category: "TECHNICAL" as Category,
  about: "The Institution of Engineers (India) student chapter for Electrical Engineering, promoting technical growth and professional networking.",
  people: ["Sombit Mukhuti — 9137216980"],
  achievements: [],
},
{
  id: "iiw",
  name: "IIW Student Chapter",
  category: "TECHNICAL" as Category,
  about: "The Indian Institute of Welding (IIW) student chapter, focused on welding, fabrication, and materials joining technology.",
  people: ["Shreyasi Porel — 8240274614"],
  achievements: [],
},
{
  id: "ieee-sb",
  name: "IEEE IEM Student Branch",
  category: "TECHNICAL" as Category,
  about: "The umbrella IEEE Student Branch at IEM, coordinating all IEEE affinity groups, societies, and chapters on campus and representing IEM in IEEE Region 10 activities.",
  people: ["Rakshit Ahuja — 7004494292"],
  achievements: [],
},
{
  id: "ieee-mtts",
  name: "IEEE MTT-S Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Microwave Theory and Techniques Society (MTT-S) student chapter, exploring RF, microwave, and wireless engineering.",
  people: ["Rakshit Ahuja — 7004494292"],
  achievements: [],
},
{
  id: "ieee-eds",
  name: "IEEE EDS Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Electron Devices Society (EDS) student chapter, focused on semiconductor devices and electronics research.",
  people: ["Subhadra Bhattacharyya — 9339747625"],
  achievements: [],
},
{
  id: "ieee-aps",
  name: "IEEE APS Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Antennas and Propagation Society (APS) student chapter, engaging students in antenna design and electromagnetic wave propagation.",
  people: ["Arunima Samanta — 7718567410"],
  achievements: [],
},
{
  id: "ieee-cas",
  name: "IEEE CAS-S Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Circuits and Systems Society (CAS-S) student chapter, focused on analog and digital circuit design.",
  people: ["Shatavisha Dasgupta — 9051501030"],
  achievements: [],
},
{
  id: "ieee-wie",
  name: "IEEE WIE Affinity Group",
  category: "TECHNICAL" as Category,
  about: "IEEE Women in Engineering (WIE), an affinity group dedicated to promoting and supporting women in engineering and technology at IEM.",
  people: ["Patatri Acharjee — 9903856428"],
  achievements: [],
},
{
  id: "ieee-ias",
  name: "IEEE IAS Student Branch Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Industry Applications Society (IAS) student branch chapter, bridging academic learning with industrial application of electrical engineering.",
  people: ["Sneha Das — 8777684510"],
  achievements: [],
},
{
  id: "asme",
  name: "ASME Student Chapter",
  category: "TECHNICAL" as Category,
  about: "The American Society of Mechanical Engineers (ASME) student chapter, fostering innovation and technical excellence in mechanical engineering.",
  people: ["Pragyo Banerjee — 9073833447"],
  achievements: [],
},
{
  id: "toastmasters",
  name: "Toastmasters Club",
  category: "TECHNICAL" as Category,
  about: "The IEM Toastmasters Club, dedicated to building public speaking, communication, and leadership skills through structured practice.",
  people: ["Barshana Chatterjee — 7044852009"],
  achievements: [],
},
{
  id: "gdg",
  name: "Google Developer Group (GDG) — IEM",
  category: "TECHNICAL" as Category,
  about: "The IEM chapter of Google Developer Groups, running workshops, hackathons, and study jams around Google technologies and modern software development.",
  people: ["Ishan Mishra — 6202468406"],
  achievements: [],
},
{
  id: "ieee-cs",
  name: "IEEE Computer Society Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Computer Society (CS) student chapter, focused on software engineering, computing research, and emerging technologies.",
  people: ["Samya Dutta — 8420030435"],
  achievements: [],
},
{
  id: "preehub",
  name: "PreeHub",
  category: "TECHNICAL" as Category,
  about: "PreeHub supports students with career readiness, placement preparation, and professional development resources.",
  people: ["Anand Kumar Singh — 8969979393"],
  achievements: [],
},
{
  id: "ieee-sscs",
  name: "IEEE Solid State Circuits Society Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Solid State Circuits Society (SSCS) student chapter, focused on integrated circuit and chip design.",
  people: ["Tina Maity — 9330481181"],
  achievements: [],
},
{
  id: "iete",
  name: "IEM-IETE Students' Forum",
  category: "TECHNICAL" as Category,
  about: "The Institution of Electronics and Telecommunication Engineers (IETE) student forum at IEM, promoting research and innovation in electronics and telecom.",
  people: ["Mounik Biswas — 7318698164"],
  achievements: [],
},
{
  id: "ieee-css",
  name: "IEEE Control Systems Society Chapter",
  category: "TECHNICAL" as Category,
  about: "The IEEE Control Systems Society (CSS) student chapter, exploring automation, robotics, and control theory.",
  people: ["Ayananshu Ghosh — 7439490546"],
  achievements: [],
},
{
  id: "ieee-ies",
  name: "IEEE Industrial Electronics Society SBC",
  category: "TECHNICAL" as Category,
  about: "The IEEE Industrial Electronics Society (IES) Student Branch Chapter, focused on industrial automation and power electronics.",
  people: ["Arkadeep Ghosh — 9874077839"],
  achievements: [],
},
{
  id: "ecell",
  name: "Innovation & Entrepreneurship Development Cell (E-Cell)",
  category: "TECHNICAL" as Category,
  about: "The Innovation & Entrepreneurship Development Cell nurtures a startup mindset on campus through ideation sessions, mentorship, and entrepreneurship events. Faculty Head: Prof. (Dr.) Subhabrata Banerjee.",
  people: [
    "Sagnik Chakraborty — 9062064111",
    "Ahana Mukherjee — 8240435586",
    "Nakshatra Ghosh — 9883757307",
  ],
  achievements: [],
},

/* ══════════════════════════════════════════
   ADDITIONAL CULTURAL CLUBS — 2025-26
════════════════════════════════════════════ */
{
  id: "quiz-club",
  name: "Quiz Club",
  category: "CULTURAL" as Category,
  about: "The Quiz Club brings together curious minds for trivia, general knowledge, and competitive quizzing events across campus and inter-college meets. Faculty Head: Prof. Soham Kanti Bishnu.",
  people: [
    "Saswat Sharma (Head) — 6291156394",
    "Manan Bhutiani — 9903353460",
    "Mahek Agarwal — 8336007439",
  ],
  achievements: [],
},
{
  id: "art-craft",
  name: "Art and Craft Club",
  category: "CULTURAL" as Category,
  about: "The Art and Craft Club is a creative space for students to explore visual art, handicrafts, and design through workshops and campus exhibitions. Faculty Head: Prof. Dr. Ranabik Banik.",
  people: [
    "Sneha Das — 8777684510",
    "Sebanjana Jana — 6290601300",
    "Roshni Kundu — 8334813230",
    "Prasun Dey Sarkar — 9123000149",
    "Priyanka Bairagi — 6290421363",
    "Esha Singh — 9432056136",
  ],
  achievements: [],
},

/* ══════════════════════════════════════════
   SPORTS — 2025-26
════════════════════════════════════════════ */
{
  id: "sports-council",
  name: "Sports Council",
  category: "SPORTS" as Category,
  about: "The Sports Council oversees all sporting activities and representative teams at IEM, organizing tournaments and inter-college fixtures. Faculty Head: Prof. Asim Dawn.",
  people: [
    "Debjit Roy (Sports Head) — 7679023121",
    "Anurag Shaw (Sports Co-Head) — 6291729361",
    "Aniket Dutta — 6290660356",
    "Meghna Kundu — 8334012311",
    "Adnan Hasnain — 8777018684",
    "Dhrubajyoti Mukherjee — 9875614172",
  ],
  achievements: [],
},
{
  id: "football",
  name: "Football Club",
  category: "SPORTS" as Category,
  about: "The IEM Football Club represents the college in inter-college and university-level football tournaments.",
  people: [
    "Rangshit Ghosh (Captain) — 9330116501",
    "Soubarno Das (Vice-Captain) — 7439310122",
    "Aryadeep Aich — 7044021236",
    "Agniva Paul — 6289383507",
    "Kshitij Das — 9903291584",
  ],
  achievements: [],
},
{
  id: "cricket",
  name: "Cricket Club",
  category: "SPORTS" as Category,
  about: "The IEM Cricket Club represents the college in inter-college and university-level cricket tournaments.",
  people: [
    "Ankesh Kumar (Captain) — 8210286734",
    "Pranav Kumar (Vice Captain) — 6201287635",
    "Krishnendu Paul — 9475743303",
    "Abdul Sahil — 6289488870",
    "Himel Jana — 7063076214",
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
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  const visibleClubs = clubs.filter((c) => c.category === activeCategory);

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

<div className="relative mb-10 max-w-full overflow-hidden">

  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      font-black leading-none
      text-transparent
      stroke-text
      absolute top-10 left-0
      opacity-90
      pointer-events-none
      whitespace-normal
      max-w-full
    "
    style={{ fontSize: "clamp(2.5rem, 13vw, 11.25rem)" }}
  >
    CLUBS & SOCIETIES
  </motion.h1>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-5xl sm:text-7xl md:text-8xl font-black relative z-10"
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

        {/* CATEGORY CARDS */}
        <AnimatePresence mode="wait">
        {!activeCategory && (
          <motion.div
            key="category-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-[1300px] mx-auto px-6 py-24 grid md:grid-cols-3 gap-10"
          >
            {categoryMeta.map((cat) => {
              const count = clubs.filter((c) => c.category === cat.id).length;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.03, rotate: -0.5 }}
                  className="
                    group text-left p-10 border-[3px] border-primary bg-background
                    shadow-[8px_8px_0px_#FACC15]
                    hover:shadow-[14px_14px_0px_#FACC15]
                    hover:-translate-y-2
                    transition-all duration-300
                  "
                >
                  <p className="text-sm font-bold text-foreground/40 mb-4">
                    {count} {count === 1 ? "Club" : "Clubs"}
                  </p>
                  <h3 className="text-3xl font-black mb-4 text-foreground">
                    {cat.label}
                  </h3>
                  <p className="text-foreground/70 mb-8">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-black uppercase text-yellow-400 group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {activeCategory && (
        <motion.div
          key="club-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-[1300px] mx-auto px-6 py-24"
        >

          <button
            onClick={() => setActiveCategory(null)}
            className="inline-flex items-center gap-2 text-sm font-black uppercase text-foreground/60 hover:text-yellow-400 transition-colors mb-10"
          >
            <ArrowLeft className="w-5 h-5" />
            All Categories
          </button>

          <h2 className="text-5xl font-black text-foreground mb-16">
            {categoryMeta.find((c) => c.id === activeCategory)?.label}
          </h2>

          {visibleClubs.length === 0 && (
            <p className="text-foreground/50 text-lg">
              No clubs added under this category yet. Check back soon.
            </p>
          )}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-32"
          >
          {visibleClubs.map((club, i) => (
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

        </motion.div>
        )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
};

export default SocietiesPage;