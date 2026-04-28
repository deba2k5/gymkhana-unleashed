import { Section } from "./membersData";

const slugify = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

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
    .map(n => ({ name: n, slug: slugify(n) })),
};

const TECH_HEAD: Section = {
  title: "Institution Technical Lead",
  accentColor: "#3B82F6",
  members: ["Sagnik Sinha","Meghna Bardhan"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

const WELFARE: Section = {
  title: "Student Welfare Head",
  accentColor: "#10B981",
  members: ["Spandan Sarkar","Pritha Saha"]
    .map(n => ({ name: n, slug: slugify(n) })),
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
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const PLACEMENT: Section = {
  title: "Placement Cell",
  accentColor: "#3B82F6",
  members: [
    "Soumya Chatterjee","Soumyojit Chatterjee","Aditya Raj","Bishal Ghosh",
    "Shubham Shankar","Raihan Khan","Rohan Sinha","Aritra Dutta",
    "Mayukh Paul","Somdutee Chowdhury"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const CULTURAL_REP: Section = {
  title: "Cultural Committee Representative",
  accentColor: "#EC4899",
  members: ["Ankita Sarkar","Swarthak Mondal"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

const COMPUTER_SOCIETY: Section = {
  title: "Computer Society",
  accentColor: "#8B5CF6",
  members: ["Rohit Kumar"].map(n => ({ name: n, slug: slugify(n) })),
};

// ─── EVENT COMMITTEES ─────────────────────────────
const MARATHON: Section = {
  title: "Marathon Committee",
  accentColor: "#14B8A6",
  members: [
    "Abhidipan Jana","Pratham Ojha","Vaishali Kumari",
    "Debahuti Banerjee","Rudranil Dolui"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const WORKSHOP: Section = {
  title: "Workshop & Seminar",
  accentColor: "#F59E0B",
  members: ["Sumanta Roy","Debajyoti Mitra"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

// ─── SPORTS ─────────────────────────────
const SPORTS_HEAD: Section = {
  title: "Sports Head & Co-Head",
  accentColor: "#10B981",
  members: ["Nilanjan Bhattacharya","Soham Sengupta"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

const FOOTBALL: Section = {
  title: "Football Team",
  accentColor: "#22C55E",
  members: [
    "Akash Banerjee","Mahin Raj","Aishik Ghorai",
    "Ambar Roy","Saugata Saha","Abir Hore"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const CRICKET: Section = {
  title: "Cricket Team",
  accentColor: "#16A34A",
  members: [
    "Rahul Kumar","Priyanshu Gautam","Raj Yadav",
    "Satyam Chaurasia","Arindam Mallick"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

// ─── ADMIN ─────────────────────────────
const GYMKHANA: Section = {
  title: "Gymkhana Room In-Charge",
  accentColor: "#6B7280",
  members: ["Mayukh Majumder"].map(n => ({ name: n, slug: slugify(n) })),
};

const MAINTENANCE: Section = {
  title: "Maintenance",
  accentColor: "#6B7280",
  members: [
    "Manila Das","Saranya Chattopadhyay","Kankana Ghosh Dastidar"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const YOUNG_INDIA: Section = {
  title: "Young India & CII",
  accentColor: "#0EA5E9",
  members: ["Risavdeb Patra","Anusmita Hait"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

// ─── ANTI RAGGING ─────────────────────────────
const ANTI_RAGGING: Section = {
  title: "Anti-Ragging Committee",
  accentColor: "#DC2626",
  members: [
    "Mayukh Majumder","Pratham Ojha","Meghna Bardhan","Ayush Bera",
    "Dibyadarshi Das","Vishal Verma","Atri Panda","Spandan Sarkar",
    "Anusmita Hait","Aritra Dutta","Vidhi Mantri","Aniket Dey","Ahana Nandi"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

// ─── MEDIA ─────────────────────────────
const MEDIA: Section = {
  title: "Media Cell Head",
  accentColor: "#9333EA",
  members: ["Saptarshi Pal"].map(n => ({ name: n, slug: slugify(n) })),
};

const GRAPHICS: Section = {
  title: "Graphics & Videography",
  accentColor: "#A855F7",
  members: [
    "Tannishtha Neogy","Saubhadra Chatterjee","Prasun Banerjee"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

// ─── CLUBS (ALL SEPARATE) ─────────────────────────────
const ECELL: Section = {
  title: "E-Cell",
  accentColor: "#7C3AED",
  members: ["Soham Chakraborty","Kaustav Giri"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

const CANTEEN: Section = {
  title: "Canteen Head",
  accentColor: "#F59E0B",
  members: ["Meghna Bardhan"].map(n => ({ name: n, slug: slugify(n) })),
};

const MUSIC: Section = {
  title: "Music Club",
  accentColor: "#FACC15",
  members: [
    "Dibyadarshi Das","Satyaki Ghosh",
    "Anamitra Kumar Sarkar","Atri Panda","Moheli Chakraborty"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const PHOTO: Section = {
  title: "Photography Club",
  accentColor: "#0EA5E9",
  members: ["Reshab Chowbey","Sayan Dey"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

const DEBATE: Section = {
  title: "Debate Club",
  accentColor: "#F43F5E",
  members: ["Soumi Roy"].map(n => ({ name: n, slug: slugify(n) })),
};

const DANCE: Section = {
  title: "Dance Club",
  accentColor: "#EC4899",
  members: [
    "Shrestha Ghosh","Kaushani Dutta","Shreya Sarkar","Asmita Sinha"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const ART: Section = {
  title: "Art & Craft Club",
  accentColor: "#F97316",
  members: ["Aishi Dutta","Arunima Nandi","Sneha Saha"]
    .map(n => ({ name: n, slug: slugify(n) })),
};

const QUIZ: Section = {
  title: "Quiz Club",
  accentColor: "#22C55E",
  members: [
    "Agnish Arpan Das","Tiyasha Banerjee","Saraswata Ghosh","Sourik Bhuiya"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const DRAMA: Section = {
  title: "Drama Club",
  accentColor: "#6366F1",
  members: [
    "Bratyabandhu Bhattacharyya","Shaptorshi Chakraborty",
    "Subhomoy Ganguly","Unmisa Das","Ritankar Kundu"
  ].map(n => ({ name: n, slug: slugify(n) })),
};

const MAGAZINE: Section = {
  title: "College Magazine",
  accentColor: "#2563EB",
  members: [
    "Anushka Maji","Aindrila Kundu","Kavya Rani","Subhadeep Chakraborty",
    "Kingshuk Ghosh","Prasun Banerjee","Arunima Nandi",
    "Abhishek Saha","Arkadyuti Ghosh","Srinjonee Saha","Anu Pandit"
  ].map(n => ({ name: n, slug: slugify(n) })),
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
  ].map(n => ({ name: n, slug: slugify(n) })),
};

// ─── EXTRA CLUBS ─────────────────────────────
const IEDC: Section = {
  title: "IEDC",
  accentColor: "#7C3AED",
  members: ["Saikat Das"].map(n => ({ name: n, slug: slugify(n) })),
};

const HUMOUR: Section = {
  title: "Humour Club",
  accentColor: "#F97316",
  members: ["Md Tanzil Imam"].map(n => ({ name: n, slug: slugify(n) })),
};

const FILM: Section = {
  title: "Film Society",
  accentColor: "#6366F1",
  members: ["Bratyabandhu Bhattacharyya"].map(n => ({ name: n, slug: slugify(n) })),
};

const PET: Section = {
  title: "Pet Society",
  accentColor: "#10B981",
  members: ["Manila Das"].map(n => ({ name: n, slug: slugify(n) })),
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