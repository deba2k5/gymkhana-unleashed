import { useState } from "react";
import { Phone, ArrowLeft, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface Member {
  name: string;
  dept?: string;
  phone?: string;
  role?: string;
  email?: string;
  chapter?: string;
}

interface Section {
  title: string;
  subtitle?: string;
  accentColor: string;
  members: Member[];
  note?: string;
  brochureLink?: string;
  facultyHead?: string;
}

// ─── DATA (from OFFICIAL GYMKHANA 2025-2026 brochure) ────────────────────────

const PATRON: Section = {
  title: "Patron",
  accentColor: "#1e1e1e",
  members: [
    { name: "Prof. Banani Chakrabarti", dept: "Institute of Engineering & Management, Kolkata" },
    { name: "Prof. (Dr.) Satyajit Chakrabarti", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

const VICE_PATRON: Section = {
  title: "Vice Patron",
  accentColor: "#1e1e1e",
  members: [
    { name: "Prof. (Dr.) Arun Kumar Bar", dept: "Institute of Engineering & Management, Kolkata" },
    { name: "Prof. (Dr.) Biswajoy Chatterjee", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

const PRESIDENT: Section = {
  title: "President",
  accentColor: "#FACC15",
  members: [
    { name: "Prof. (Dr.) Sanghamitra Poddar", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

const FACULTY: Section = {
  title: "Faculty Members",
  accentColor: "#3B82F6",
  members: [
    { name: "Prof. (Dr.) Malay Gangopadhyay" },
    { name: "Prof. (Dr.) Debika Bhattacharyya" },
    { name: "Prof. (Dr.) Moutushi Biswas Singh" },
    { name: "Prof. Gauri Majumder" },
    { name: "Prof. (Dr.) Prabir Kumar Das" },
    { name: "Prof. (Dr.) Koyel Ganguly" },
    { name: "Prof. Srijita Chakraborty" },
    { name: "Prof. Soham Kanti Bishnu" },
    { name: "Prof. (Dr.) Amartya Mukherjee" },
    { name: "Prof. Shreyasi Dutta" },
    { name: "Prof. (Dr.) Samapika DasBiswas" },
    { name: "Prof. (Dr.) Sukanya Mukherjee" },
    { name: "Prof. Bavrabi Ghosh" },
    { name: "Prof. Sanhita Ghosh" },
    { name: "Prof. Ajanta Ghosh" },
    { name: "Prof. (Dr.) Rabin Mazumder" },
    { name: "Prof. (Dr.) Shambhu Prasad Chakraborty" },
    { name: "Prof. Shrabana Chattopadhyay" },
    { name: "Prof. (Dr.) Dwaipayan De" },
    { name: "Prof. Saptaparna Ghosh" },
    { name: "Prof. Anupam Bhattacharya" },
    { name: "Prof. Nayantara Mitra" },
    { name: "Prof. (Dr.) Gunjan Kumar" },
    { name: "Prof. (Dr.) Rahul Baidya" },
    { name: "Prof. (Dr.) Sainik Kumar Mahata" },
    { name: "Prof. Arindam Chakraborty" },
    { name: "Prof. Avijit Bose" },
    { name: "Prof. (Dr.) Ratna Chakraborty" },
    { name: "Prof. (Dr.) Subhabrata Banerjee" },
    { name: "Prof. Kaustav Bose" },
    { name: "Prof. Ujjwal Basu" },
    { name: "Prof. (Dr.) Subhajit Kar" },
    { name: "Prof. (Dr.) Rajat Subhra Paul" },
    { name: "Prof. Amit Kumar Das" },
  ],
};

const GENERAL_SECRETARY: Section = {
  title: "General Secretary",
  accentColor: "#EF4444",
  members: [
    { name: "Surjyanshu Ghosh", dept: "B.TECH (CSE AI)", phone: "7439122770", email: "surjyanshuatwork@gmail.com" },
  ],
};

const VICE_PRESIDENT: Section = {
  title: "Vice President",
  accentColor: "#8B5CF6",
  members: [
    { name: "Sayantika Neogi", dept: "B.TECH (CSE)", phone: "9749125069", email: "sayantikaneogi22@gmail.com" },
  ],
};

const CULTURAL_HEAD: Section = {
  title: "Cultural Head",
  accentColor: "#F97316",
  members: [
    { name: "Priyanshu Pathak", dept: "B.TECH (ME)", phone: "9609569944" },
    { name: "Bratyabandhu Bhattacharya", dept: "B.TECH (ECE)", phone: "8240005041" },
  ],
};

const STUDENT_WELFARE_HEAD: Section = {
  title: "Student Welfare Head",
  accentColor: "#10B981",
  members: [
    { name: "Rajdeep Rudra", dept: "B.TECH (IOT)", phone: "7450960683" },
    { name: "Saptarshi Samanta", dept: "B.TECH (EE)", phone: "8597769342" },
  ],
};

const TECH_HEAD: Section = {
  title: "Technical Head",
  subtitle: "Institution Technical Lead",
  accentColor: "#3B82F6",
  members: [
    { name: "Subhomoy Ganguly", dept: "B.TECH (CSE)", phone: "6289056389" },
    { name: "Roshan Rataria", dept: "B.TECH (CSBS)", phone: "9874017285" },
  ],
};

const INNOVACION: Section = {
  title: "Annual Tech Fest — Innovacion Lead",
  accentColor: "#FACC15",
  members: [
    { name: "Aniket Chakraborty", dept: "B.TECH (CSE)", phone: "8240815528" },
  ],
};

const ANTI_RAGGING: Section = {
  title: "Anti-Ragging Committee",
  accentColor: "#EF4444",
  brochureLink: "/societies/OFFICIAL GYMKHANA 2025-2026.pdf",
  note: "Click the brochure link to view the official Anti-Ragging Committee document.",
  members: [
    { name: "Tahiti Dutta", dept: "BTECH (CSE)", phone: "6289081990" },
    { name: "Arshiya Nandy", dept: "BTECH (IT)", phone: "9903259956" },
    { name: "Archy Dey", dept: "BTECH (ECE)", phone: "7595905600" },
    { name: "Puspargha Roy", dept: "BTECH (EE)", phone: "6295471846" },
    { name: "Satish Kumar", dept: "BTECH (EEE)", phone: "9546718246" },
    { name: "Anurag Jaiswal", dept: "BTECH (ME)", phone: "8102568081" },
    { name: "Suvam Nath", dept: "BTECH (AI)", phone: "9064529491" },
    { name: "Soumyo Mallick", dept: "BTECH (AIML)", phone: "9830322964" },
    { name: "Nakshatra Ghosh", dept: "BTECH (IOT)", phone: "9883757307" },
    { name: "Pramiti Dey", dept: "BTECH (IOTCSBT)", phone: "9064610174" },
    { name: "Dipanwita Saha", dept: "BTECH (CSBS)", phone: "8777579209" },
    { name: "Soumyajeet Chowdhury", dept: "BCA", phone: "7980045149" },
    { name: "Trijoy Chakraborty", dept: "BBA", phone: "6289202644" },
    { name: "Aatreya Bose", dept: "MBA", phone: "7003992663" },
    { name: "Ritika Yadav", dept: "BHM", phone: "8617564157" },
    { name: "Aqsa Nadeem", dept: "BBA LLB", phone: "7439874201" },
  ],
};

const ALUMNI_RELATIONS: Section = {
  title: "Alumni Relations",
  accentColor: "#6366F1",
  members: [
    { name: "Subhranil Ghosh", dept: "BTECH (ECE)", phone: "9874053868" },
    { name: "Sumana Dutta", dept: "BTECH (CSBS)", phone: "7602435296" },
    { name: "Mayuri Chakraborty", dept: "BBA", phone: "9163645647" },
    { name: "Sayan Polley", dept: "MBA", phone: "8337086051" },
    { name: "Anushka Das", dept: "BBA LLB", phone: "9073329056" },
  ],
};

const CULTURAL_COMMITTEE: Section = {
  title: "Cultural Committee Representatives",
  accentColor: "#F97316",
  members: [
    { name: "Sundrali Mukerjee", dept: "BCA", phone: "8582980223" },
    { name: "Ankita Ghosh", dept: "BBA", phone: "6290946109" },
    { name: "Esha Barman", dept: "MBA", phone: "7044425517" },
    { name: "Ankita Saha", dept: "BHM", phone: "7407146330" },
    { name: "Swastika Paul", dept: "BBA LLB", phone: "9800932017" },
  ],
};

const GRAPHICS: Section = {
  title: "Graphics & Videography",
  accentColor: "#8B5CF6",
  members: [
    { name: "Swastika Saha", dept: "B.TECH (CSE)", phone: "8100301829" },
    { name: "Rupsa Ghosal", dept: "BBA", phone: "9147385758" },
    { name: "Ankita Mandal", dept: "B.TECH (IOTCSBT)", phone: "9051025318" },
    { name: "Paramartha Ghosh", dept: "B.TECH (IOTCSBT)", phone: "7797032617" },
  ],
};

const MARATHON: Section = {
  title: "IEM-UEM Kolkata Marathon Committee",
  accentColor: "#10B981",
  members: [
    { name: "Asutosh Saha (Head)", dept: "B.TECH (EEE)", phone: "8825194164" },
    { name: "Anand Mani (Head)", dept: "B.TECH (CSE)", phone: "7209732494" },
    { name: "Sneha Paul (Head)", dept: "B.TECH (ECE)", phone: "9903082295" },
    { name: "Pradum Kumar Pandey (Head)", dept: "B.TECH (EEE)", phone: "9608369286" },
    { name: "Rohan Sinha", dept: "BCA", phone: "8640000158" },
    { name: "Aankana Das", dept: "BCA", phone: "9674524578" },
    { name: "Tridip Acharjee", dept: "BBA", phone: "8017200751" },
    { name: "Sagnik Roy", dept: "BBA", phone: "6289758752" },
    { name: "Sourav Nayak", dept: "MBA", phone: "7550813563" },
    { name: "Prem Mondol", dept: "BHM", phone: "8100758192" },
    { name: "Roni Majumdar", dept: "BBA LLB", phone: "9883415959" },
    { name: "Nitin Singh", dept: "BBA LLB", phone: "7439485314" },
  ],
};

const SPORTS: Section = {
  title: "Department of Sports",
  subtitle: "Faculty Head: Prof. Asim Dawn",
  accentColor: "#EF4444",
  members: [
    { name: "Debjit Roy (Sports Head)", dept: "B.TECH ECE", phone: "7679023121" },
    { name: "Anurag Shaw (Sports Co-Head)", dept: "B.TECH ECE", phone: "6291729361" },
    { name: "Aniket Dutta (Rep.)", dept: "BBA", phone: "6290660356" },
    { name: "Meghna Kundu (Rep.)", dept: "MBA", phone: "8334012311" },
    { name: "Adnan Hasnain (Rep.)", dept: "BHM", phone: "8777018684" },
    { name: "Dhrubajyoti Mukherjee (Rep.)", dept: "BBA LLB", phone: "9875614172" },
    { name: "Rangshit Ghosh — Football Captain", dept: "B.TECH (IOTCSBT)", phone: "9330116501" },
    { name: "Soubarno Das — Football Vice-Captain", dept: "BCA", phone: "7439310122" },
    { name: "Aryadeep Aich — Football", dept: "B.TECH (ECE)", phone: "7044021236" },
    { name: "Agniva Paul — Football", dept: "BBA", phone: "6289383507" },
    { name: "Kshitij Das — Football", dept: "MBA", phone: "9903291584" },
    { name: "Ankesh Kumar — Cricket Captain", dept: "B.TECH (EE)", phone: "8210286734" },
    { name: "Pranav Kumar — Cricket Vice-Captain", dept: "B.TECH (CSE)", phone: "6201287635" },
    { name: "Krishnendu Paul — Cricket", dept: "BCA", phone: "9475743303" },
    { name: "Abdul Sahil — Cricket", dept: "BBA", phone: "6289488870" },
    { name: "Himel Jana — Cricket", dept: "BCA", phone: "7063076214" },
  ],
};

const GYMKHANA_ROOM: Section = {
  title: "Gymkhana Room-in-Charge",
  accentColor: "#1e1e1e",
  members: [
    { name: "Subhranil Ghosh", dept: "BTECH (ECE)", phone: "9874053868" },
  ],
};

const CANTEEN_HEAD: Section = {
  title: "Canteen Head",
  accentColor: "#F97316",
  members: [
    { name: "Asmita Das", dept: "B.TECH (ECE)", phone: "7439486919" },
  ],
};

const MUSIC_CLUB: Section = {
  title: "Music Club",
  subtitle: "Faculty Head: Prof. Dr. Malay Gangopadhyay & Prof. Dr. Amartya Mukherjee",
  accentColor: "#FACC15",
  members: [
    { name: "Rajdeep Sengupta (Head)", dept: "B.TECH (IOT)", phone: "9831895110" },
    { name: "Arighna Bhattacharya (Co-Head)", dept: "B.TECH (ECE)", phone: "7439487159" },
    { name: "Adrija Acharyya (Co-Head)", dept: "B.TECH (ECE)", phone: "7908760641" },
    { name: "Anurupa Maitra", dept: "BCA", phone: "8100306290" },
  ],
};

const DANCE_CLUB: Section = {
  title: "Dance Club",
  subtitle: "Faculty Head: Prof. Dr. Koyel Ganguly",
  accentColor: "#EC4899",
  members: [
    { name: "Prakriti Mukhopadhyay (Eastern Head)", dept: "B.TECH (CSE)", phone: "9907444649" },
    { name: "Snikta Banerjee (Eastern Co-Head)", dept: "B.TECH (IOT)", phone: "9674173204" },
    { name: "Indrani Banerjee (Eastern)", dept: "BCA", phone: "8697550225" },
    { name: "Soham Sarkar (Western Head)", dept: "B.TECH (ECE)", phone: "9832249929" },
    { name: "Priyanjana Paul (Western Co-Head)", dept: "B.TECH (EEE)", phone: "6290836210" },
    { name: "Srija Das (D'cyphers Head)", dept: "B.TECH (AIML)", phone: "8910055095" },
    { name: "Akansha Sinha (D'cyphers Co-Head)", dept: "B.TECH (CSBS)", phone: "6292017298" },
  ],
};

const COMPUTER_SOCIETY: Section = {
  title: "Computer Society",
  accentColor: "#3B82F6",
  members: [
    { name: "Samya Dutta", dept: "B.TECH (CSE)", phone: "8420030435" },
  ],
};

const PHOTOGRAPHY_CLUB: Section = {
  title: "Photography Club",
  subtitle: "Faculty Head: Prof. Dr. Rajiv Ghosh",
  accentColor: "#1e1e1e",
  members: [
    { name: "Arghya Banerjee", dept: "B.TECH (AIML)", phone: "6294566708" },
    { name: "Subham Saha", dept: "BCA", phone: "9163799483" },
    { name: "Ankush Saha", dept: "BBA", phone: "7044778799" },
  ],
};

const DEBATE_CLUB: Section = {
  title: "Debate Club",
  subtitle: "Faculty Head: Prof. Shreyasi Dutta",
  accentColor: "#6366F1",
  members: [
    { name: "Rajsekhar Hajrah", dept: "B.TECH (AIML)", phone: "8902697173" },
    { name: "Vishal Roy", dept: "B.TECH (EE)", phone: "8399995198" },
  ],
};

const ART_CRAFT: Section = {
  title: "Art & Craft Club",
  subtitle: "Faculty Head: Prof. Dr. Ranabik Banik",
  accentColor: "#F97316",
  members: [
    { name: "Sneha Das", dept: "B.TECH (EE)", phone: "8777684510" },
    { name: "Sebanjana Jana", dept: "BCA", phone: "6290601300" },
    { name: "Roshni Kundu", dept: "BBA", phone: "8334813230" },
    { name: "Prasun Dey Sarkar", dept: "MBA", phone: "9123000149" },
    { name: "Priyanka Bairagi", dept: "BHM", phone: "6290421363" },
    { name: "Esha Singh", dept: "BBA LLB", phone: "9432056136" },
  ],
};

const QUIZ_CLUB: Section = {
  title: "Quiz Club",
  subtitle: "Faculty Head: Prof. Soham Kanti Bishnu",
  accentColor: "#10B981",
  members: [
    { name: "Saswat Sharma (Head)", dept: "B.TECH (AI)", phone: "6291156394" },
    { name: "Manan Bhutiani", dept: "B.TECH (AI)", phone: "9903353460" },
    { name: "Mahek Agarwal", dept: "BCA", phone: "8336007439" },
  ],
};

const DRAMA_CLUB: Section = {
  title: "Drama Club",
  subtitle: "Faculty Head: Prof. Dwaipayan De",
  accentColor: "#8B5CF6",
  members: [
    { name: "Shaptorsi Chakraborty", dept: "B.TECH (EEE)", phone: "9123304829" },
    { name: "Ritankar Kundu", dept: "B.TECH (ECE)", phone: "8420281840" },
  ],
};

const HUMOUR_CLUB: Section = {
  title: "IEM Humour Club",
  accentColor: "#FACC15",
  members: [
    { name: "Md Tanzil Imam", dept: "B.TECH (IT)", phone: "9330657193" },
  ],
};

const COLLEGE_MAGAZINE: Section = {
  title: "College Magazine",
  subtitle: "Faculty Head: Prof. Dr. Sanghamitra Poddar & Prof. Bavrabi Ghosh",
  accentColor: "#3B82F6",
  members: [
    { name: "Patatri Acharjee (President)", dept: "BTECH (CSE)", phone: "9903856428" },
    { name: "Aahana Chowdhury (President)", dept: "BTECH (ECE)", phone: "9874745674" },
    { name: "Saikat Debnath (Vice President)", dept: "BCA", phone: "8240700894" },
    { name: "Sumona Dutta", dept: "BCA", phone: "8597827328" },
    { name: "Angshu Halder", dept: "BCA", phone: "8585842355" },
    { name: "Navonita Ghosal", dept: "BCA", phone: "6289518939" },
    { name: "Avipsa Saha", dept: "BBA", phone: "8420555659" },
    { name: "Baishakhi Mukherjee", dept: "BBA", phone: "9875580213" },
    { name: "Triya Majhi", dept: "BBA", phone: "7001256413" },
    { name: "Sumouli Chatterjee", dept: "BBA", phone: "7439495348" },
    { name: "Rashi Chakraborty", dept: "MBA", phone: "7003136571" },
    { name: "Shilindhra Paul", dept: "MBA", phone: "8617360996" },
  ],
};

const STUDENT_CHAPTERS: Section = {
  title: "Student Chapter Heads",
  accentColor: "#6366F1",
  members: [
    { name: "Abhirup Chakraborty", chapter: "ISHRAE", dept: "B.TECH (ME)", phone: "9831148603" },
    { name: "Diptangsu Panja", chapter: "ASHRAE", dept: "B.TECH (ME)", phone: "6289448636" },
    { name: "Avinandan Mukherjee", chapter: "SAE", dept: "B.TECH (ME)", phone: "9836714226" },
    { name: "Prince Dey", chapter: "IEI (ME)", dept: "B.TECH (ME)", phone: "6291857014" },
    { name: "Aritra Roy", chapter: "IET (EE)", dept: "B.TECH (EE)", phone: "9609191814" },
    { name: "Sombit Mukhuti", chapter: "IEI (EE)", dept: "B.TECH (EE)", phone: "9137216980" },
    { name: "Shreyasi Porel", chapter: "IIW", dept: "B.TECH (ME)", phone: "8240274614" },
    { name: "Rakshit Ahuja", chapter: "IEEE IEM SB", dept: "B.TECH (IOT)", phone: "7004494292" },
    { name: "Rakshit Ahuja", chapter: "IEEE IEM MTT-S", dept: "B.TECH (IOT)", phone: "7004494292" },
    { name: "Subhadra Bhattacharyya", chapter: "IEEE IEM EDS", dept: "B.TECH (ECE)", phone: "9339747625" },
    { name: "Arunima Samanta", chapter: "IEEE IEM APS", dept: "B.TECH (ECE)", phone: "7718567410" },
    { name: "Shatavisha Dasgupta", chapter: "IEEE IEM CAS-S", dept: "B.TECH (ECE)", phone: "9051501030" },
    { name: "Patatri Acharjee", chapter: "IEEE IEM WIE", dept: "B.TECH (CSE)", phone: "9903856428" },
    { name: "Sneha Das", chapter: "IEEE IEM-IAS SBC", dept: "B.TECH (EE)", phone: "8777684510" },
    { name: "Pragyo Banerjee", chapter: "ASME", dept: "B.TECH (ME)", phone: "9073833447" },
    { name: "Barshana Chatterjee", chapter: "Toastmaster Club", dept: "B.TECH (ECE)", phone: "7044852009" },
    { name: "Ishan Mishra", chapter: "IEM GDG", dept: "B.TECH (ECE)", phone: "6202468406" },
    { name: "Samya Dutta", chapter: "IEEE IEM CS", dept: "B.TECH (CSE AI)", phone: "8420030435" },
    { name: "Anand Kumar Singh", chapter: "PREEHUB", dept: "B.TECH (CSE)", phone: "8969979393" },
    { name: "Tina Maity", chapter: "IEEE Solid State Circuit Society", dept: "B.TECH (EE)", phone: "9330481181" },
    { name: "Mounik Biswas", chapter: "IEM-IETE Students' Forum", dept: "B.TECH (CSE AI)", phone: "7318698164" },
    { name: "Ayananshu Ghosh", chapter: "IEEE Control System Society", dept: "B.TECH (EE)", phone: "7439490546" },
    { name: "Arkadeep Ghosh", chapter: "Industrial Electronics Society SBC (IEEE IES SBC)", dept: "B.TECH (EE)", phone: "9874077839" },
  ],
};

const INNOVATION_CELL: Section = {
  title: "Innovation & Entrepreneurship Development Cell — IEM",
  subtitle: "Faculty Head: Prof. (Dr.) Subhabrata Banerjee",
  accentColor: "#F97316",
  members: [
    { name: "Sagnik Chakraborty", dept: "B.TECH (ECE)", phone: "9062064111" },
  ],
};

const LITERARY_SOCIETY: Section = {
  title: "IEM Literary Society",
  accentColor: "#FACC15",
  members: [
    { name: "Spandan Chakrabarty", dept: "B.TECH (ECE)", phone: "9836364257" },
  ],
};

const FILM_SOCIETY: Section = {
  title: "Film Society",
  accentColor: "#1e1e1e",
  members: [
    { name: "Bratyabandhu Bhattacharyya", dept: "B.TECH (ECE)", phone: "8240005041" },
  ],
};

const PET_SOCIETY: Section = {
  title: "IEM Pet Society",
  accentColor: "#10B981",
  members: [
    { name: "Zinnia Ghosh", dept: "BCA", phone: "7044835500" },
    { name: "Himel Jana", dept: "BCA", phone: "7063076214" },
  ],
};

const ECELL: Section = {
  title: "E-Cell Head",
  accentColor: "#6366F1",
  members: [
    { name: "Ahana Mukherjee", dept: "B.TECH (IT)", phone: "8240435586" },
    { name: "Nakshatra Ghosh", dept: "B.TECH (IOT)", phone: "9883757307" },
  ],
};

// ─── ORDERED SECTIONS ────────────────────────────────────────────────────────
const allSections: Section[] = [
  PATRON, VICE_PATRON, PRESIDENT, FACULTY,
  GENERAL_SECRETARY, VICE_PRESIDENT, CULTURAL_HEAD,
  STUDENT_WELFARE_HEAD, TECH_HEAD, INNOVACION,
  ANTI_RAGGING,
  ALUMNI_RELATIONS, CULTURAL_COMMITTEE, GRAPHICS,
  MARATHON, SPORTS, GYMKHANA_ROOM, CANTEEN_HEAD,
  MUSIC_CLUB, DANCE_CLUB, COMPUTER_SOCIETY,
  PHOTOGRAPHY_CLUB, DEBATE_CLUB, ART_CRAFT, QUIZ_CLUB,
  DRAMA_CLUB, HUMOUR_CLUB, COLLEGE_MAGAZINE,
  STUDENT_CHAPTERS, INNOVATION_CELL, LITERARY_SOCIETY,
  FILM_SOCIETY, PET_SOCIETY, ECELL,
];

// ─── MEMBER CARD ─────────────────────────────────────────────────────────────
const MemberCard = ({ member, accent }: { member: Member; accent: string }) => (
  <div className="bg-white border-[2px] border-black p-4 flex flex-col gap-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-all">
    <div className="flex items-start justify-between gap-2">
      <p className="font-space font-black text-black text-sm leading-tight uppercase">{member.name}</p>
      {member.chapter && (
        <span className="shrink-0 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border border-black text-black/60">{member.chapter}</span>
      )}
    </div>
    {member.dept && (
      <p className="text-[11px] font-bold text-black/60 uppercase tracking-wide">{member.dept}</p>
    )}
    {member.email && (
      <p className="text-[11px] font-bold text-blue-600 break-all">{member.email}</p>
    )}
    {member.phone && (
      <a href={`tel:${member.phone}`} className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-black" style={{ color: accent }}>
        <Phone className="w-3 h-3" />
        {member.phone}
      </a>
    )}
  </div>
);

// ─── SECTION BLOCK ───────────────────────────────────────────────────────────
const SectionBlock = ({ section }: { section: Section }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-t-[4px] border-black pt-8 pb-4">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-3 h-3 border-[2px] border-black" style={{ background: section.accentColor }} />
            <h2 className="font-space font-black text-black text-2xl md:text-3xl uppercase tracking-tighter leading-none">
              {section.title}
            </h2>
          </div>
          {section.subtitle && (
            <p className="text-sm font-bold text-black/60 uppercase tracking-wide ml-5">{section.subtitle}</p>
          )}
          {section.note && (
            <p className="text-xs font-bold text-red-600 ml-5 mt-1">{section.note}</p>
          )}
          {section.brochureLink && (
            <a
              href={section.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 ml-5 font-black text-xs uppercase tracking-widest border-[2px] border-black px-3 py-1.5 bg-red-500 text-white hover:bg-red-600 brutalist-shadow transition-all"
            >
              <ExternalLink className="w-3 h-3" />
              View Official Brochure
            </a>
          )}
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="shrink-0 flex items-center gap-1 font-black text-xs uppercase tracking-widest border-[2px] border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all self-start"
        >
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {open ? "Collapse" : "Expand"}
        </button>
      </div>

      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {section.members.map((m, i) => (
            <MemberCard key={i} member={m} accent={section.accentColor} />
          ))}
        </div>
      )}
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const YEARS = ["2025-2026", "2026-2027"] as const;

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const [activeYear, setActiveYear] = useState<typeof YEARS[number]>("2025-2026");

  const filtered = search.trim().length < 2
    ? allSections
    : allSections.map(sec => ({
        ...sec,
        members: sec.members.filter(m =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          (m.dept || "").toLowerCase().includes(search.toLowerCase()) ||
          (m.chapter || "").toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(sec => sec.members.length > 0);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-yellow-400 selection:text-black flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 w-full">

        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors group mb-8">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mt-6 mb-6">
            <div className="w-14 h-[3px] bg-black" />
            <span className="text-[11px] font-black tracking-[0.45em] text-black/40 uppercase">IEM Student Gymkhana</span>
          </div>

          <h1
            className="font-space font-black text-black tracking-tighter leading-[0.85] mb-6"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            MEET THE <br /><span className="text-outline">TEAM.</span>
          </h1>
          <p className="font-space font-bold text-black/60 text-lg uppercase tracking-wider max-w-lg">
            Official Gymkhana Committee — Institute of Engineering & Management, Kolkata
          </p>
        </div>

        {/* ─── YEAR DROPDOWN ───────────────────────────────────────── */}
        <div className="mb-12">
          <select
            value={activeYear}
            onChange={e => { setActiveYear(e.target.value as typeof YEARS[number]); setSearch(""); }}
            className="px-6 py-3 pr-12 font-space font-black text-sm uppercase tracking-wider border-[3px] border-black bg-white text-black cursor-pointer appearance-none focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            {YEARS.map(year => (
              <option key={year} value={year}>
                {year} Student Gymkhana
              </option>
            ))}
          </select>
        </div>

        {/* ─── 2025-2026 CONTENT ──────────────────────────────────── */}
        {activeYear === "2025-2026" && (
          <>
            {/* Search */}
            <div className="mb-12">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search by name, dept or chapter…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full border-[3px] border-black px-5 py-3 font-space font-bold text-sm placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] transition-all"
                />
              </div>
            </div>

            {/* Quick-jump index */}
            <div className="mb-16 flex flex-wrap gap-2">
              {allSections.map((sec, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="text-[10px] font-black uppercase tracking-wider px-3 py-1 border-[2px] border-black hover:bg-black hover:text-white transition-all"
                >
                  {sec.title}
                </a>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {filtered.map((section, i) => (
                <div key={i} id={`section-${i}`}>
                  <SectionBlock section={section} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-space font-black text-4xl text-black/20 uppercase">No results found.</p>
              </div>
            )}
          </>
        )}

        {/* ─── 2026-2027 COMING SOON ──────────────────────────────── */}
        {activeYear === "2026-2027" && (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 border-[4px] border-black bg-yellow-400 brutalist-shadow flex items-center justify-center mb-10 animate-pulse">
              <span className="font-space font-black text-4xl text-black">?</span>
            </div>
            <h2
              className="font-space font-black text-black uppercase tracking-tighter mb-6"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 0.9 }}
            >
              COMING <span className="text-outline">SOON.</span>
            </h2>
            <p className="font-space font-bold text-black/50 text-lg uppercase tracking-wider max-w-md mb-10">
              The 2026-2027 Student Gymkhana Committee will be revealed soon. Stay tuned!
            </p>
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-black/30">
              <div className="w-8 h-[2px] bg-black/20" />
              Under Formation
              <div className="w-8 h-[2px] bg-black/20" />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;