// ─── TYPES ───────────────────────────────────────────────────────────────────
export interface Member {
  name: string;
  dept?: string;
  phone?: string;
  role?: string;
  email?: string;
  chapter?: string;
}

export interface Section {
  title: string;
  subtitle?: string;
  accentColor: string;
  members: Member[];
  note?: string;
  brochureLink?: string;
  facultyHead?: string;
}

// ─── DATA (from OFFICIAL GYMKHANA 2025-2026 brochure) ────────────────────────

export const PATRON: Section = {
  title: "Patron",
  accentColor: "#1e1e1e",
  members: [
    { name: "Prof. Banani Chakrabarti", dept: "Institute of Engineering & Management, Kolkata" },
    { name: "Prof. (Dr.) Satyajit Chakrabarti", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

export const VICE_PATRON: Section = {
  title: "Vice Patron",
  accentColor: "#1e1e1e",
  members: [
    { name: "Prof. (Dr.) Arun Kumar Bar", dept: "Institute of Engineering & Management, Kolkata" },
    { name: "Prof. (Dr.) Biswajoy Chatterjee", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

export const PRESIDENT: Section = {
  title: "President",
  accentColor: "#FACC15",
  members: [
    { name: "Prof. (Dr.) Sanghamitra Poddar", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

export const FACULTY: Section = {
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

export const GENERAL_SECRETARY: Section = {
  title: "General Secretary",
  accentColor: "#EF4444",
  members: [
    { name: "Surjyanshu Ghosh", dept: "B.TECH (CSE AI)", phone: "7439122770", email: "surjyanshuatwork@gmail.com" },
  ],
};

export const VICE_PRESIDENT: Section = {
  title: "Vice President",
  accentColor: "#8B5CF6",
  members: [
    { name: "Sayantika Neogi", dept: "B.TECH (CSE)", phone: "9749125069", email: "sayantikaneogi22@gmail.com" },
  ],
};

export const CULTURAL_HEAD: Section = {
  title: "Cultural Head",
  accentColor: "#F97316",
  members: [
    { name: "Priyanshu Pathak", dept: "B.TECH (ME)", phone: "9609569944" },
    { name: "Bratyabandhu Bhattacharya", dept: "B.TECH (ECE)", phone: "8240005041" },
  ],
};

export const STUDENT_WELFARE_HEAD: Section = {
  title: "Student Welfare Head",
  accentColor: "#10B981",
  members: [
    { name: "Rajdeep Rudra", dept: "B.TECH (IOT)", phone: "7450960683" },
    { name: "Saptarshi Samanta", dept: "B.TECH (EE)", phone: "8597769342" },
  ],
};

export const TECH_HEAD: Section = {
  title: "Technical Head",
  subtitle: "Institution Technical Lead",
  accentColor: "#3B82F6",
  members: [
    { name: "Subhomoy Ganguly", dept: "B.TECH (CSE)", phone: "6289056389" },
    { name: "Roshan Rataria", dept: "B.TECH (CSBS)", phone: "9874017285" },
  ],
};

export const INNOVACION: Section = {
  title: "Annual Tech Fest — Innovacion Lead",
  accentColor: "#FACC15",
  members: [
    { name: "Aniket Chakraborty", dept: "B.TECH (CSE)", phone: "8240815528" },
  ],
};

export const ANTI_RAGGING: Section = {
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

export const ALUMNI_RELATIONS: Section = {
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

export const CULTURAL_COMMITTEE: Section = {
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

export const GRAPHICS: Section = {
  title: "Graphics & Videography",
  accentColor: "#8B5CF6",
  members: [
    { name: "Swastika Saha", dept: "B.TECH (CSE)", phone: "8100301829" },
    { name: "Rupsa Ghosal", dept: "BBA", phone: "9147385758" },
    { name: "Ankita Mandal", dept: "B.TECH (IOTCSBT)", phone: "9051025318" },
    { name: "Paramartha Ghosh", dept: "B.TECH (IOTCSBT)", phone: "7797032617" },
  ],
};

export const MARATHON: Section = {
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

export const SPORTS: Section = {
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

export const GYMKHANA_ROOM: Section = {
  title: "Gymkhana Room-in-Charge",
  accentColor: "#1e1e1e",
  members: [
    { name: "Subhranil Ghosh", dept: "BTECH (ECE)", phone: "9874053868" },
  ],
};

export const CANTEEN_HEAD: Section = {
  title: "Canteen Head",
  accentColor: "#F97316",
  members: [
    { name: "Asmita Das", dept: "B.TECH (ECE)", phone: "7439486919" },
  ],
};

export const MUSIC_CLUB: Section = {
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

export const DANCE_CLUB: Section = {
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

export const COMPUTER_SOCIETY: Section = {
  title: "Computer Society",
  accentColor: "#3B82F6",
  members: [
    { name: "Samya Dutta", dept: "B.TECH (CSE)", phone: "8420030435" },
  ],
};

export const PHOTOGRAPHY_CLUB: Section = {
  title: "Photography Club",
  subtitle: "Faculty Head: Prof. Dr. Rajiv Ghosh",
  accentColor: "#1e1e1e",
  members: [
    { name: "Arghya Banerjee", dept: "B.TECH (AIML)", phone: "6294566708" },
    { name: "Subham Saha", dept: "BCA", phone: "9163799483" },
    { name: "Ankush Saha", dept: "BBA", phone: "7044778799" },
  ],
};

export const DEBATE_CLUB: Section = {
  title: "Debate Club",
  subtitle: "Faculty Head: Prof. Shreyasi Dutta",
  accentColor: "#6366F1",
  members: [
    { name: "Rajsekhar Hajrah", dept: "B.TECH (AIML)", phone: "8902697173" },
    { name: "Vishal Roy", dept: "B.TECH (EE)", phone: "8399995198" },
  ],
};

export const ART_CRAFT: Section = {
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

export const QUIZ_CLUB: Section = {
  title: "Quiz Club",
  subtitle: "Faculty Head: Prof. Soham Kanti Bishnu",
  accentColor: "#10B981",
  members: [
    { name: "Saswat Sharma (Head)", dept: "B.TECH (AI)", phone: "6291156394" },
    { name: "Manan Bhutiani", dept: "B.TECH (AI)", phone: "9903353460" },
    { name: "Mahek Agarwal", dept: "BCA", phone: "8336007439" },
  ],
};

export const DRAMA_CLUB: Section = {
  title: "Drama Club",
  subtitle: "Faculty Head: Prof. Dwaipayan De",
  accentColor: "#8B5CF6",
  members: [
    { name: "Shaptorsi Chakraborty", dept: "B.TECH (EEE)", phone: "9123304829" },
    { name: "Ritankar Kundu", dept: "B.TECH (ECE)", phone: "8420281840" },
  ],
};

export const HUMOUR_CLUB: Section = {
  title: "IEM Humour Club",
  accentColor: "#FACC15",
  members: [
    { name: "Md Tanzil Imam", dept: "B.TECH (IT)", phone: "9330657193" },
  ],
};

export const COLLEGE_MAGAZINE: Section = {
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

export const STUDENT_CHAPTERS: Section = {
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

export const INNOVATION_CELL: Section = {
  title: "Innovation & Entrepreneurship Development Cell — IEM",
  subtitle: "Faculty Head: Prof. (Dr.) Subhabrata Banerjee",
  accentColor: "#F97316",
  members: [
    { name: "Sagnik Chakraborty", dept: "B.TECH (ECE)", phone: "9062064111" },
  ],
};

export const LITERARY_SOCIETY: Section = {
  title: "IEM Literary Society",
  accentColor: "#FACC15",
  members: [
    { name: "Spandan Chakrabarty", dept: "B.TECH (ECE)", phone: "9836364257" },
  ],
};

export const FILM_SOCIETY: Section = {
  title: "Film Society",
  accentColor: "#1e1e1e",
  members: [
    { name: "Bratyabandhu Bhattacharyya", dept: "B.TECH (ECE)", phone: "8240005041" },
  ],
};

export const PET_SOCIETY: Section = {
  title: "IEM Pet Society",
  accentColor: "#10B981",
  members: [
    { name: "Zinnia Ghosh", dept: "BCA", phone: "7044835500" },
    { name: "Himel Jana", dept: "BCA", phone: "7063076214" },
  ],
};

export const ECELL: Section = {
  title: "E-Cell Head",
  accentColor: "#6366F1",
  members: [
    { name: "Ahana Mukherjee", dept: "B.TECH (IT)", phone: "8240435586" },
    { name: "Nakshatra Ghosh", dept: "B.TECH (IOT)", phone: "9883757307" },
  ],
};

// ─── ORDERED SECTIONS ────────────────────────────────────────────────────────
export const allSections: Section[] = [
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