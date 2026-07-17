import { Section } from "./membersData";

const slugify = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

// ─── PORTFOLIO DETAILS (from "GYMKHANA 2021-2025 (Responses)" form) ──────────
interface MemberDetails {
  about?: string;
  achievements?: string[];
  image?: string;
  dept?: string;
}

const IMG = (file: string) => `/members/2024-25/${file}`;

const MEMBER_DETAILS: Record<string, MemberDetails> = {
  "aniruddha-mallick": {
    dept: "ECE",
    about:
      "2025 Electronics Engineering graduate, currently working at Exide Industries, where I am gaining hands-on experience in industrial operations and process optimization. Position - IEEE IEM APS Chapter Chairperson. Contribution - Led key technical events of IEEE chapters and also our technical event SYTRON.",
    achievements: [
      "Senior Production Officer at Exide Industries Ltd.",
      "IEEE IEM APS Chapter Chairperson",
      "Led key technical events of IEEE chapters, including SYTRON",
    ],
    image: IMG("aniruddha-mallick.jpg"),
  },
  "vaishnavi-sharma": {
    dept: "CSBS",
    about: "Alumni Relations Head for the IEM Student's Gymkhana, 2021-2025 batch.",
    achievements: ["Alumni Relations Head"],
    image: IMG("vaishnavi-sharma.jpg"),
  },
  "spandan-sarkar": {
    dept: "CSE (AIML)",
    about:
      "Student Welfare Head and Departmental Representative at the Anti-Ragging Committee. Recipient of the Sudarshan Chakraborty Award for Best Student Performance, with two patents filed and two research papers published.",
    achievements: [
      "Student Welfare Head",
      "Departmental Representative, Anti-Ragging Committee",
      "Sudarshan Chakraborty Award for Best Student Performance",
      "Winner, RedBull Basement",
      "Finalist, Yukti Innovation Challenge and IIT Bombay E-Summit",
      "Filed 2 patents and published 2 research papers",
      "Event Head, Smart Makers Festival",
      "PR & Publicity Lead, IEMPACT",
      "Core Team Member, Marathon",
      "College Coordinator, Youngotsav by Taaza TV",
      "Founding Member, IEM Freedom Cup",
      "Organised the 10th Edition of IEEE Quarter Tech Talk",
    ],
    image: IMG("spandan-sarkar.jpeg"),
  },
  "mahin-raj": {
    dept: "MBA",
    about:
      "IEM Official Football Team Captain (2025) and winner of the inter-college Badminton tournament at GCETTS. Captained both the MBA Cricket and Football teams (2023–2025).",
    achievements: [
      "Official Football Team Captain, 2025",
      "Winner, inter-college Badminton tournament at GCETTS",
      "Captain, MBA Cricket and Football Team (2023-2025)",
      "Champion Captain, Inter-department Football Tournament 2025",
    ],
    image: IMG("mahin-raj.jpg"),
  },
  "ayan-guha-roy": {
    dept: "Mechanical Engineering",
    about:
      "Past intern at Paharpur Cooling Towers Limited. President, ISHRAE IEM Model Student Chapter; Vice President, ASHRAE IEM Student Branch.",
    achievements: [
      "Past Intern, Paharpur Cooling Towers Limited",
      "President, ISHRAE IEM Model Student Chapter",
      "Vice President, ASHRAE IEM Student Branch",
      "Winner, ASHRAE RAL International Award",
      "Finalist, Solar Decathlon India Competition 2023-24",
      "Runner-Up, ISHRAE Global Student Poster Design Competition 2024",
      "Grand Finalist, ISHRAE aQuest National Quiz Competition 2023-24",
      "Volunteer, IEMPACT and Innovacion",
    ],
    image: IMG("ayan-guha-roy.jpg"),
  },
  "debahuti-banerjee": {
    dept: "BCA",
    about:
      "From the BCA Department, Batch 2022–25. Participated in various sports and cultural events organised by the department and college.",
    achievements: [
      "IEM Marathon Representative from BCA",
      "Shri Birendra Kumar Chakroborty Gold Medal Award for The Best BCA Student '22-25",
    ],
    image: IMG("debahuti-banerjee.jpg"),
  },
  "bidhan-sarkar": {
    dept: "Electrical Engineering",
    about:
      "Enthusiastic and active student of the Electrical Engineering Department, Batch 2021–2025. Served as Alumni Relations Coordinator in the Student's Gymkhana.",
    achievements: [
      "Alumni Relations Coordinator, Student's Gymkhana",
      "IEM Student's Gymkhana Appreciation Award for contribution to student council activities",
    ],
    image: IMG("bidhan-sarkar.jpeg"),
  },
  "rahul-kumar": {
    dept: "CSE",
    about:
      "Cricket Captain at Institute of Engineering & Management, leading teams and organizing multiple official and unofficial cricket tournaments.",
    achievements: [
      "IEM Cricket Captain",
      "Organized multiple official and unofficial cricket tournaments",
    ],
    image: IMG("rahul-kumar.jpg"),
  },
  "pratham-ojha": {
    dept: "IT",
    about:
      "Served as the Head of the IEM-UEM Kolkata Marathon 2025, handling event coordination, team management, and smooth execution of the marathon. Also a member of the Anti-Ragging Committee.",
    achievements: [
      "Head, IEM-UEM Kolkata Marathon Committee 2025",
      "Member, Anti-Ragging Committee",
    ],
    image: IMG("pratham-ojha.jpeg"),
  },
  "anushka-maji": {
    dept: "CSE",
    about:
      "Currently pursuing a Master's in Computer Systems at Arizona State University. Completed undergraduate studies at IEM, served as President of IEM Creations for the 2024–25 session, and was honored with a Gold Medal for academic excellence.",
    achievements: [
      "President, Magazine Club (IEM Creations), 2024-25",
      "Gold Medal for academic excellence",
      "Pursuing MS in Computer Systems, Arizona State University",
    ],
    image: IMG("anushka-maji.jpeg"),
  },
  "chandrika-biswas": {
    dept: "EE",
    about:
      "Served as the Chairperson of the IET-IEM Student Chapter, with experience ranging from anchoring events to leading and managing teams.",
    achievements: [
      "Chairperson, IET-IEM Student Chapter",
      "“Outstanding and Valued Contribution” Award, IET Kolkata Local Network",
      "Director's Award for Best Student Contribution, IEM",
    ],
    image: IMG("chandrika-biswas.jpg"),
  },
  "roshni-kundu": {
    dept: "BBA",
    about: "Student of BBA, batch of 2023-26. Appointed Art & Craft Lead of Gymkhana.",
    achievements: ["Art & Craft Lead, IEM Gymkhana"],
    image: IMG("roshni-kundu.jpg"),
  },
  "anamitra-kumar-sarkar": {
    dept: "ME",
    about:
      "Received the Director's Award for Overall Student Performance 2025. Served as Music Club Lead for 2024–25 and Vice President of the ASME IEM Student Chapter.",
    achievements: [
      "Director's Award for Overall Student Performance 2025",
      "Music Club Lead, 2024-25",
      "Vice President, ASME IEM Student Chapter",
      "Core Organizing Team Member & Music Events Lead, IEMPACT 2025",
    ],
    image: IMG("anamitra-kumar-sarkar.jpg"),
  },
  "satyaki-ghosh": {
    dept: "CSE",
    about:
      "Successfully organized IEMPACT, SMF, and key in-house events, while securing multiple awards for the college at prominent inter-college competitions.",
    achievements: [
      "Music Club Lead",
      "Organized IEMPACT, SMF, and key in-house events",
      "Secured awards at St. Xavier's University, Heritage Academy, and BESC competitions",
    ],
    image: IMG("satyaki-ghosh.jpeg"),
  },
  "saurabh-kumar": {
    dept: "CSE",
    about:
      "Served as Vice-Captain in organizing Interdepartmental Cricket Tournaments and IEMPL events, managing team coordination, match operations, and event execution.",
    achievements: [
      "Vice-Captain, IEM Cricket",
      "Organized Interdepartmental Cricket Tournaments and IEMPL events",
    ],
  },
  "reshab-chowbey": {
    dept: "BBA",
    about:
      "Business Administration graduate from IEM with a strong passion for leadership, creativity, and community engagement. Served as Head of the Photography Club during the 2024–2025 academic session.",
    achievements: [
      "Head, Photography Club, 2024-25",
      "Dr. Sudarshan Chakraborty Award for Best Student Performance",
    ],
  },
  "swapneel-chaudhuri": {
    dept: "CSE",
    about:
      "Dedicated professional with a strong academic background, recognized for contributions as Cultural Head. Currently working as Senior Analyst at Capgemini.",
    achievements: [
      "Gold Medal for academic excellence",
      "Cultural Secretary",
      "Senior Analyst, Capgemini",
    ],
  },
  "shrestha-ghosh": {
    dept: "CSE",
    about:
      "Active member of the Students' Gymkhana (2024–25), contributing to organizing teams of major institutional events including SMF, IEMPACT'25, Converge, and Elevate. Represented IEM in inter-college cultural fests.",
    achievements: [
      "Eastern Dance Club Head",
      "IEEE IEM Computer Society Chairperson",
      "Winner, Calcutta Youth Meet 2023 (Dance)",
      "Winner, Rhapsody hosted by Medical College (Dance)",
    ],
  },
  "dibyadarshi-das": {
    dept: "EEE (Electrical and Electronics Engineering)",
    about: "Batch of IEM 2K25. Music Club Head with a strong record in music, cycling, and photography competitions.",
    achievements: [
      "Umang'23 Unconventional Orchestra Runners-Up",
      "Umang'24 War of Sounds Winner",
      "Xavrang'25 Runners-Up",
      "Amiphoria'25 Winner",
      "Ecstasy'25 Runners-Up",
      "Urjamaam'22 Instrumental Winner",
      "Official Bicycle Marshall, JBG Kolkata World Marathon 2024",
      "Chief Bicycle Marshall, IEM-UEM Marathon 2025",
      "1st MTB finisher, Tour de Bengal 2024 (Bengal's first Cycling Stage Race)",
      "Phototron'24 Winner",
    ],
  },
  "prerona-paul": {
    dept: "BCA",
    about:
      "BCA graduate with a strong interest in communication, coordination, and professional development. Served as Head of Alumni Relations for the BCA department.",
    achievements: [
      "Head of Alumni Relations, BCA department",
      "Analyst Trainee, Cognizant",
    ],
  },
};

const withDetails = (name: string) => ({
  name,
  slug: slugify(name),
  ...MEMBER_DETAILS[slugify(name)],
});

// ─── TOP DESIGNATIONS ─────────────────────────────
const GENERAL_SECRETARY: Section = {
  title: "General Secretary",
  accentColor: "#EF4444",
  members: [{ name: "Ayush Bera", slug: slugify("Ayush Bera") }],
};

const VICE_PRESIDENT: Section = {
  title: "Vice President",
  accentColor: "#EF4444",
  members: [{ name: "Vidhi Mantri", slug: slugify("Vidhi Mantri") }],
};

const CULTURAL_HEAD: Section = {
  title: "Cultural Head",
  accentColor: "#F97316",
  members: ["Swapneel Chaudhuri","Megha Biswas"]
    .map(withDetails),
};

const TECH_HEAD: Section = {
  title: "Institution Technical Lead",
  accentColor: "#3B82F6",
  members: ["Sagnik Sinha","Meghna Bardhan"]
    .map(withDetails),
};

const WELFARE: Section = {
  title: "Student Welfare Head",
  accentColor: "#10B981",
  members: ["Spandan Sarkar","Pritha Saha"]
    .map(withDetails),
};

// ─── MAJOR COMMITTEES ─────────────────────────────
const ALUMNI: Section = {
  title: "Alumni Relations",
  accentColor: "#6366F1",
  members: [
    "Mayukh Majumder","Diya Sheik Sarkar","Aindrila Kole","Bidhan Sarkar",
    "Ayushi Chaddha","Sajudra Gupta","Veena Venugopal","Susovan Majhi",
    "Arpit Kumar","Ahan Ganguly","Vaishnavi Sharma","Prerona Paul",
    "Akash Mishra","Srishtika Mazumdar"
  ].map(withDetails),
};

const PLACEMENT: Section = {
  title: "Placement Cell",
  accentColor: "#3B82F6",
  members: [
    "Soumya Chatterjee","Soumyojit Chatterjee","Aditya Raj","Bishal Ghosh",
    "Shubham Shankar","Raihan Khan","Rohan Sinha","Aritra Dutta",
    "Mayukh Paul","Somdutee Chowdhury"
  ].map(withDetails),
};

const CULTURAL_REP: Section = {
  title: "Cultural Committee Representative",
  accentColor: "#EC4899",
  members: ["Ankita Sarkar","Swarthak Mondal"]
    .map(withDetails),
};

const COMPUTER_SOCIETY: Section = {
  title: "Computer Society",
  accentColor: "#8B5CF6",
  members: ["Rohit Kumar"].map(withDetails),
};

// ─── EVENT COMMITTEES ─────────────────────────────
const MARATHON: Section = {
  title: "Marathon Committee",
  accentColor: "#14B8A6",
  members: [
    "Abhidipan Jana","Pratham Ojha","Vaishali Kumari",
    "Debahuti Banerjee","Rudranil Dolui"
  ].map(withDetails),
};

const WORKSHOP: Section = {
  title: "Workshop & Seminar",
  accentColor: "#F59E0B",
  members: ["Sumanta Roy","Debajyoti Mitra"]
    .map(withDetails),
};

// ─── SPORTS ─────────────────────────────
const SPORTS_HEAD: Section = {
  title: "Sports Head & Co-Head",
  accentColor: "#10B981",
  members: ["Nilanjan Bhattacharya","Soham Sengupta"]
    .map(withDetails),
};

const FOOTBALL: Section = {
  title: "Football Team",
  accentColor: "#22C55E",
  members: [
    "Akash Banerjee","Mahin Raj","Aishik Ghorai",
    "Ambar Roy","Saugata Saha","Abir Hore"
  ].map(withDetails),
};

const CRICKET: Section = {
  title: "Cricket Team",
  accentColor: "#16A34A",
  members: [
    "Rahul Kumar","Priyanshu Gautam","Raj Yadav",
    "Satyam Chaurasia","Arindam Mallick","Saurabh Kumar"
  ].map(withDetails),
};

// ─── ADMIN ─────────────────────────────
const GYMKHANA: Section = {
  title: "Gymkhana Room In-Charge",
  accentColor: "#6B7280",
  members: ["Mayukh Majumder"].map(withDetails),
};

const MAINTENANCE: Section = {
  title: "Maintenance",
  accentColor: "#6B7280",
  members: [
    "Manila Das","Saranya Chattopadhyay","Kankana Ghosh Dastidar"
  ].map(withDetails),
};

const YOUNG_INDIA: Section = {
  title: "Young India & CII",
  accentColor: "#0EA5E9",
  members: ["Risavdeb Patra","Anusmita Hait"]
    .map(withDetails),
};

// ─── ANTI RAGGING ─────────────────────────────
const ANTI_RAGGING: Section = {
  title: "Anti-Ragging Committee",
  accentColor: "#DC2626",
  members: [
    "Mayukh Majumder","Pratham Ojha","Meghna Bardhan","Ayush Bera",
    "Dibyadarshi Das","Vishal Verma","Atri Panda","Spandan Sarkar",
    "Anusmita Hait","Aritra Dutta","Vidhi Mantri","Aniket Dey","Ahana Nandi"
  ].map(withDetails),
};

// ─── MEDIA ─────────────────────────────
const MEDIA: Section = {
  title: "Media Cell Head",
  accentColor: "#9333EA",
  members: ["Saptarshi Pal"].map(withDetails),
};

const GRAPHICS: Section = {
  title: "Graphics & Videography",
  accentColor: "#A855F7",
  members: [
    "Tannishtha Neogy","Saubhadra Chatterjee","Prasun Banerjee"
  ].map(withDetails),
};

// ─── CLUBS (ALL SEPARATE) ─────────────────────────────
const ECELL: Section = {
  title: "E-Cell",
  accentColor: "#7C3AED",
  members: ["Soham Chakraborty","Kaustav Giri"]
    .map(withDetails),
};

const CANTEEN: Section = {
  title: "Canteen Head",
  accentColor: "#F59E0B",
  members: ["Meghna Bardhan"].map(withDetails),
};

const MUSIC: Section = {
  title: "Music Club",
  accentColor: "#FACC15",
  members: [
    "Dibyadarshi Das","Satyaki Ghosh",
    "Anamitra Kumar Sarkar","Atri Panda","Moheli Chakraborty"
  ].map(withDetails),
};

const PHOTO: Section = {
  title: "Photography Club",
  accentColor: "#0EA5E9",
  members: ["Reshab Chowbey","Sayan Dey"]
    .map(withDetails),
};

const DEBATE: Section = {
  title: "Debate Club",
  accentColor: "#F43F5E",
  members: ["Soumi Roy"].map(withDetails),
};

const DANCE: Section = {
  title: "Dance Club",
  accentColor: "#EC4899",
  members: [
    "Shrestha Ghosh","Kaushani Dutta","Shreya Sarkar","Asmita Sinha"
  ].map(withDetails),
};

const ART: Section = {
  title: "Art & Craft Club",
  accentColor: "#F97316",
  members: ["Aishi Dutta","Arunima Nandi","Sneha Saha","Roshni Kundu"]
    .map(withDetails),
};

const QUIZ: Section = {
  title: "Quiz Club",
  accentColor: "#22C55E",
  members: [
    "Agnish Arpan Das","Tiyasha Banerjee","Saraswata Ghosh","Sourik Bhuiya"
  ].map(withDetails),
};

const DRAMA: Section = {
  title: "Drama Club",
  accentColor: "#6366F1",
  members: [
    "Bratyabandhu Bhattacharyya","Shaptorshi Chakraborty",
    "Subhomoy Ganguly","Unmisa Das","Ritankar Kundu"
  ].map(withDetails),
};

const MAGAZINE: Section = {
  title: "College Magazine",
  accentColor: "#2563EB",
  members: [
    "Anushka Maji","Aindrila Kundu","Kavya Rani","Subhadeep Chakraborty",
    "Kingshuk Ghosh","Prasun Banerjee","Arunima Nandi",
    "Abhishek Saha","Arkadyuti Ghosh","Srinjonee Saha","Anu Pandit"
  ].map(withDetails),
};

// ─── STUDENT CHAPTER HEADS ─────────────────────────────
const STUDENT_CHAPTERS: Section = {
  title: "Student Chapter Heads",
  accentColor: "#059669",
  members: [
    "Ayan Guha Roy","Subhajit Bag","Priyank Kumar Singh","Vishal Verma",
    "Chandrika Biswas","Mrinmoy Nath","Bishal Pal","Satyam Choudhary",
    "Rishiraj Ray","Aniruddha Mallick","Saikat Das","Anohita Mukherjee",
    "Sneha Das","Priyanshu Pathak","Ayantika Chakraborty","Ayush Jha","Shrestha Ghosh"
  ].map(withDetails),
};

// ─── EXTRA CLUBS ─────────────────────────────
const IEDC: Section = {
  title: "IEDC",
  accentColor: "#7C3AED",
  members: ["Saikat Das"].map(withDetails),
};

const HUMOUR: Section = {
  title: "Humour Club",
  accentColor: "#F97316",
  members: ["Md Tanzil Imam"].map(withDetails),
};

const FILM: Section = {
  title: "Film Society",
  accentColor: "#6366F1",
  members: ["Bratyabandhu Bhattacharyya"].map(withDetails),
};

const PET: Section = {
  title: "Pet Society",
  accentColor: "#10B981",
  members: ["Manila Das"].map(withDetails),
};

// ─── FINAL EXPORT ─────────────────────────────
export const allSections2024: Section[] = [
  GENERAL_SECRETARY,
  VICE_PRESIDENT,
  CULTURAL_HEAD,
  TECH_HEAD,
  WELFARE,
  ALUMNI,
  PLACEMENT,
  CULTURAL_REP,
  COMPUTER_SOCIETY,
  MARATHON,
  WORKSHOP,
  SPORTS_HEAD,
  FOOTBALL,
  CRICKET,
  GYMKHANA,
  MAINTENANCE,
  YOUNG_INDIA,
  ANTI_RAGGING,
  MEDIA,
  GRAPHICS,
  ECELL,
  CANTEEN,
  MUSIC,
  PHOTO,
  DEBATE,
  DANCE,
  ART,
  QUIZ,
  DRAMA,
  MAGAZINE,
  STUDENT_CHAPTERS,
  IEDC,
  HUMOUR,
  FILM,
  PET,
];