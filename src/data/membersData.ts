// ─── TYPES ───────────────────────────────────────────────────────────────────
export interface Member {
  slug: string;
  about?: string;
  image?: string;
  achievements?: string[];
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
    { name: "Prof. Banani Chakrabarti", slug: "prof-banani-chakrabarti", dept: "Institute of Engineering & Management, Kolkata" },
    { name: "Prof. (Dr.) Satyajit Chakrabarti", slug: "prof-dr-satyajit-chakrabarti", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

export const VICE_PATRON: Section = {
  title: "Vice Patron",
  accentColor: "#1e1e1e",
  members: [
    { name: "Prof. (Dr.) Arun Kumar Bar", slug: "prof-dr-arun-kumar-bar", dept: "Institute of Engineering & Management, Kolkata" },
    { name: "Prof. (Dr.) Biswajoy Chatterjee", slug: "prof-dr-biswajoy-chatterjee", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

export const PRESIDENT: Section = {
  title: "President",
  accentColor: "#FACC15",
  members: [
    { name: "Prof. (Dr.) Sanghamitra Poddar", slug: "prof-dr-sanghamitra-poddar", dept: "Institute of Engineering & Management, Kolkata" },
  ],
};

export const FACULTY: Section = {
  title: "Faculty Members",
  accentColor: "#3B82F6",
  members: [
    { name: "Prof. (Dr.) Malay Gangopadhyay", slug: "prof-dr-malay-gangopadhyay" },
    { name: "Prof. (Dr.) Debika Bhattacharyya", slug: "prof-dr-debika-bhattacharyya" },
    { name: "Prof. (Dr.) Moutushi Biswas Singh", slug: "prof-dr-moutushi-biswas-singh" },
    { name: "Prof. Gauri Majumder", slug: "prof-gauri-majumder" },
    { name: "Prof. (Dr.) Prabir Kumar Das", slug: "prof-dr-prabir-kumar-das" },
    { name: "Prof. (Dr.) Koyel Ganguly", slug: "prof-dr-koyel-ganguly" },
    { name: "Prof. Srijita Chakraborty", slug: "prof-srijita-chakraborty" },
    { name: "Prof. Soham Kanti Bishnu", slug: "prof-soham-kanti-bishnu" },
    { name: "Prof. (Dr.) Amartya Mukherjee", slug: "prof-dr-amartya-mukherjee" },
    { name: "Prof. Shreyasi Dutta", slug: "prof-shreyasi-dutta" },
    { name: "Prof. (Dr.) Samapika DasBiswas", slug: "prof-dr-samapika-dasbiswas" },
    { name: "Prof. (Dr.) Sukanya Mukherjee", slug: "prof-dr-sukanya-mukherjee" },
    { name: "Prof. Bavrabi Ghosh", slug: "prof-bavrabi-ghosh" },
    { name: "Prof. Sanhita Ghosh", slug: "prof-sanhita-ghosh" },
    { name: "Prof. Ajanta Ghosh", slug: "prof-ajanta-ghosh" },
    { name: "Prof. (Dr.) Rabin Mazumder", slug: "prof-dr-rabin-mazumder" },
    { name: "Prof. (Dr.) Shambhu Prasad Chakraborty", slug: "prof-dr-shambhu-prasad-chakraborty" },
    { name: "Prof. Shrabana Chattopadhyay", slug: "prof-shrabana-chattopadhyay" },
    { name: "Prof. (Dr.) Dwaipayan De", slug: "prof-dr-dwaipayan-de" },
    { name: "Prof. Saptaparna Ghosh", slug: "prof-saptaparna-ghosh" },
    { name: "Prof. Anupam Bhattacharya", slug: "prof-anupam-bhattacharya" },
    { name: "Prof. Nayantara Mitra", slug: "prof-nayantara-mitra" },
    { name: "Prof. (Dr.) Gunjan Kumar", slug: "prof-dr-gunjan-kumar" },
    { name: "Prof. (Dr.) Rahul Baidya", slug: "prof-dr-rahul-baidya" },
    { name: "Prof. (Dr.) Sainik Kumar Mahata", slug: "prof-dr-sainik-kumar-mahata" },
    { name: "Prof. Arindam Chakraborty", slug: "prof-arindam-chakraborty" },
    { name: "Prof. Avijit Bose", slug: "prof-avijit-bose" },
    { name: "Prof. (Dr.) Ratna Chakraborty", slug: "prof-dr-ratna-chakraborty" },
    { name: "Prof. (Dr.) Subhabrata Banerjee", slug: "prof-dr-subhabrata-banerjee" },
    { name: "Prof. Kaustav Bose", slug: "prof-kaustav-bose" },
    { name: "Prof. Ujjwal Basu", slug: "prof-ujjwal-basu" },
    { name: "Prof. (Dr.) Subhajit Kar", slug: "prof-dr-subhajit-kar" },
    { name: "Prof. (Dr.) Rajat Subhra Paul", slug: "prof-dr-rajat-subhra-paul" },
    { name: "Prof. Amit Kumar Das", slug: "prof-amit-kumar-das" },
  ],
};

export const GENERAL_SECRETARY: Section = {
  title: "General Secretary",
  accentColor: "#EF4444",
  members: [
    { name: "Surjyanshu Ghosh", slug: "surjyanshu-ghosh", dept: "B.TECH (CSE AI)", phone: "7439122770", email: "surjyanshuatwork@gmail.com",
      about: "As the General Secretary of IEM Gymkhana, Surjyanshu oversees the overall coordination and management of all student activities, events, and initiatives within the institute. He is a passionate leader dedicated to fostering a vibrant and inclusive campus culture.",
      achievements: [
        "Led the organization of IEMPACT 2024 with 5000+ attendees.",
        "Introduced the Smart Makers Festival to promote innovation among students.",
        "Streamlined the communication between different societies and the management.",
        "Represented IEM at multiple national level leadership summits."
      ] },
  ],
};

export const VICE_PRESIDENT: Section = {
  title: "Vice President",
  accentColor: "#8B5CF6",
  members: [
    { name: "Sayantika Neogi", slug: "sayantika-neogi", dept: "B.TECH (CSE)", phone: "9749125069", email: "sayantikaneogi22@gmail.com",
      about: "Sayantika is a dynamic leader serving as the Vice President of IEM Gymkhana. She plays a crucial role in supporting student welfare and ensuring the smooth execution of gymkhana operations.",
      achievements: [
        "Co-organized the IEM-UEM Kolkata Marathon with record participation.",
        "Spearheaded the Anti-Ragging awareness campaign on campus.",
        "Developed a more efficient system for student grievance redressal.",
        "Coordinated with various student chapters for technical workshops."
      ] },
  ],
};

export const CULTURAL_HEAD: Section = {
  title: "Cultural Head",
  accentColor: "#F97316",
  members: [
    { name: "Priyanshu Pathak", slug: "priyanshu-pathak", dept: "B.TECH (ME)", phone: "9609569944" },
    { name: "Bratyabandhu Bhattacharya", slug: "bratyabandhu-bhattacharya", dept: "B.TECH (ECE)", phone: "8240005041" },
  ],
};

export const STUDENT_WELFARE_HEAD: Section = {
  title: "Student Welfare Head",
  accentColor: "#10B981",
  members: [
    { name: "Rajdeep Rudra", slug: "rajdeep-rudra", dept: "B.TECH (IOT)", phone: "7450960683" },
    { name: "Saptarshi Samanta", slug: "saptarshi-samanta", dept: "B.TECH (EE)", phone: "8597769342" },
  ],
};

export const TECH_HEAD: Section = {
  title: "Technical Head",
  subtitle: "Institution Technical Lead",
  accentColor: "#3B82F6",
  members: [
    { name: "Subhomoy Ganguly", slug: "subhomoy-ganguly", dept: "B.TECH (CSE)", phone: "6289056389" },
    { name: "Roshan Rataria", slug: "roshan-rataria", dept: "B.TECH (CSBS)", phone: "9874017285" },
  ],
};

export const INNOVACION: Section = {
  title: "Annual Tech Fest — Innovacion Lead",
  accentColor: "#FACC15",
  members: [
    { name: "Aniket Chakraborty", slug: "aniket-chakraborty", dept: "B.TECH (CSE)", phone: "8240815528" },
  ],
};

export const ANTI_RAGGING: Section = {
  title: "Anti-Ragging Committee",
  accentColor: "#EF4444",
  brochureLink: "/societies/OFFICIAL GYMKHANA 2025-2026.pdf",
  note: "Click the brochure link to view the official Anti-Ragging Committee document.",
  members: [
    { name: "Tahiti Dutta", slug: "tahiti-dutta", dept: "BTECH (CSE)", phone: "6289081990" },
    { name: "Arshiya Nandy", slug: "arshiya-nandy", dept: "BTECH (IT)", phone: "9903259956" },
    { name: "Archy Dey", slug: "archy-dey", dept: "BTECH (ECE)", phone: "7595905600" },
    { name: "Puspargha Roy", slug: "puspargha-roy", dept: "BTECH (EE)", phone: "6295471846" },
    { name: "Satish Kumar", slug: "satish-kumar", dept: "BTECH (EEE)", phone: "9546718246" },
    { name: "Anurag Jaiswal", slug: "anurag-jaiswal", dept: "BTECH (ME)", phone: "8102568081" },
    { name: "Suvam Nath", slug: "suvam-nath", dept: "BTECH (AI)", phone: "9064529491" },
    { name: "Soumyo Mallick", slug: "soumyo-mallick", dept: "BTECH (AIML)", phone: "9830322964" },
    { name: "Nakshatra Ghosh", slug: "nakshatra-ghosh", dept: "BTECH (IOT)", phone: "9883757307" },
    { name: "Pramiti Dey", slug: "pramiti-dey", dept: "BTECH (IOTCSBT)", phone: "9064610174" },
    { name: "Dipanwita Saha", slug: "dipanwita-saha", dept: "BTECH (CSBS)", phone: "8777579209" },
    { name: "Soumyajeet Chowdhury", slug: "soumyajeet-chowdhury", dept: "BCA", phone: "7980045149" },
    { name: "Trijoy Chakraborty", slug: "trijoy-chakraborty", dept: "BBA", phone: "6289202644" },
    { name: "Aatreya Bose", slug: "aatreya-bose", dept: "MBA", phone: "7003992663" },
    { name: "Ritika Yadav", slug: "ritika-yadav", dept: "BHM", phone: "8617564157" },
    { name: "Aqsa Nadeem", slug: "aqsa-nadeem", dept: "BBA LLB", phone: "7439874201" },
  ],
};

export const ALUMNI_RELATIONS: Section = {
  title: "Alumni Relations",
  accentColor: "#6366F1",
  members: [
    { name: "Subhranil Ghosh", slug: "subhranil-ghosh", dept: "BTECH (ECE)", phone: "9874053868" },
    { name: "Sumana Dutta", slug: "sumana-dutta", dept: "BTECH (CSBS)", phone: "7602435296" },
    { name: "Mayuri Chakraborty", slug: "mayuri-chakraborty", dept: "BBA", phone: "9163645647" },
    { name: "Sayan Polley", slug: "sayan-polley", dept: "MBA", phone: "8337086051" },
    { name: "Anushka Das", slug: "anushka-das", dept: "BBA LLB", phone: "9073329056" },
  ],
};

export const CULTURAL_COMMITTEE: Section = {
  title: "Cultural Committee Representatives",
  accentColor: "#F97316",
  members: [
    { name: "Sundrali Mukerjee", slug: "sundrali-mukerjee", dept: "BCA", phone: "8582980223" },
    { name: "Ankita Ghosh", slug: "ankita-ghosh", dept: "BBA", phone: "6290946109" },
    { name: "Esha Barman", slug: "esha-barman", dept: "MBA", phone: "7044425517" },
    { name: "Ankita Saha", slug: "ankita-saha", dept: "BHM", phone: "7407146330" },
    { name: "Swastika Paul", slug: "swastika-paul", dept: "BBA LLB", phone: "9800932017" },
  ],
};

export const GRAPHICS: Section = {
  title: "Graphics & Videography",
  accentColor: "#8B5CF6",
  members: [
    { name: "Swastika Saha", slug: "swastika-saha", dept: "B.TECH (CSE)", phone: "8100301829" },
    { name: "Rupsa Ghosal", slug: "rupsa-ghosal", dept: "BBA", phone: "9147385758" },
    { name: "Ankita Mandal", slug: "ankita-mandal", dept: "B.TECH (IOTCSBT)", phone: "9051025318" },
    { name: "Paramartha Ghosh", slug: "paramartha-ghosh", dept: "B.TECH (IOTCSBT)", phone: "7797032617" },
  ],
};

export const MARATHON: Section = {
  title: "IEM-UEM Kolkata Marathon Committee",
  accentColor: "#10B981",
  members: [
    { name: "Asutosh Saha (Head)", slug: "asutosh-saha-head", dept: "B.TECH (EEE)", phone: "8825194164" },
    { name: "Anand Mani (Head)", slug: "anand-mani-head", dept: "B.TECH (CSE)", phone: "7209732494" },
    { name: "Sneha Paul (Head)", slug: "sneha-paul-head", dept: "B.TECH (ECE)", phone: "9903082295" },
    { name: "Pradum Kumar Pandey (Head)", slug: "pradum-kumar-pandey-head", dept: "B.TECH (EEE)", phone: "9608369286" },
    { name: "Rohan Sinha", slug: "rohan-sinha", dept: "BCA", phone: "8640000158" },
    { name: "Aankana Das", slug: "aankana-das", dept: "BCA", phone: "9674524578" },
    { name: "Tridip Acharjee", slug: "tridip-acharjee", dept: "BBA", phone: "8017200751" },
    { name: "Sagnik Roy", slug: "sagnik-roy", dept: "BBA", phone: "6289758752" },
    { name: "Sourav Nayak", slug: "sourav-nayak", dept: "MBA", phone: "7550813563" },
    { name: "Prem Mondol", slug: "prem-mondol", dept: "BHM", phone: "8100758192" },
    { name: "Roni Majumdar", slug: "roni-majumdar", dept: "BBA LLB", phone: "9883415959" },
    { name: "Nitin Singh", slug: "nitin-singh", dept: "BBA LLB", phone: "7439485314" },
  ],
};

export const SPORTS: Section = {
  title: "Department of Sports",
  subtitle: "Faculty Head: Prof. Asim Dawn",
  accentColor: "#EF4444",
  members: [
    { name: "Debjit Roy (Sports Head)", slug: "debjit-roy-sports-head", dept: "B.TECH ECE", phone: "7679023121" },
    { name: "Anurag Shaw (Sports Co-Head)", slug: "anurag-shaw-sports-co-head", dept: "B.TECH ECE", phone: "6291729361" },
    { name: "Aniket Dutta (Rep.)", slug: "aniket-dutta-rep", dept: "BBA", phone: "6290660356" },
    { name: "Meghna Kundu (Rep.)", slug: "meghna-kundu-rep", dept: "MBA", phone: "8334012311" },
    { name: "Adnan Hasnain (Rep.)", slug: "adnan-hasnain-rep", dept: "BHM", phone: "8777018684" },
    { name: "Dhrubajyoti Mukherjee (Rep.)", slug: "dhrubajyoti-mukherjee-rep", dept: "BBA LLB", phone: "9875614172" },
    { name: "Rangshit Ghosh — Football Captain", slug: "rangshit-ghosh-football-captain", dept: "B.TECH (IOTCSBT)", phone: "9330116501" },
    { name: "Soubarno Das — Football Vice-Captain", slug: "soubarno-das-football-vice-captain", dept: "BCA", phone: "7439310122" },
    { name: "Aryadeep Aich — Football", slug: "aryadeep-aich-football", dept: "B.TECH (ECE)", phone: "7044021236" },
    { name: "Agniva Paul — Football", slug: "agniva-paul-football", dept: "BBA", phone: "6289383507" },
    { name: "Kshitij Das — Football", slug: "kshitij-das-football", dept: "MBA", phone: "9903291584" },
    { name: "Ankesh Kumar — Cricket Captain", slug: "ankesh-kumar-cricket-captain", dept: "B.TECH (EE)", phone: "8210286734" },
    { name: "Pranav Kumar — Cricket Vice-Captain", slug: "pranav-kumar-cricket-vice-captain", dept: "B.TECH (CSE)", phone: "6201287635" },
    { name: "Krishnendu Paul — Cricket", slug: "krishnendu-paul-cricket", dept: "BCA", phone: "9475743303" },
    { name: "Abdul Sahil — Cricket", slug: "abdul-sahil-cricket", dept: "BBA", phone: "6289488870" },
    { name: "Himel Jana — Cricket", slug: "himel-jana-cricket", dept: "BCA", phone: "7063076214" },
  ],
};

export const GYMKHANA_ROOM: Section = {
  title: "Gymkhana Room-in-Charge",
  accentColor: "#1e1e1e",
  members: [
    { name: "Subhranil Ghosh", slug: "subhranil-ghosh", dept: "BTECH (ECE)", phone: "9874053868" },
  ],
};

export const CANTEEN_HEAD: Section = {
  title: "Canteen Head",
  accentColor: "#F97316",
  members: [
    { name: "Asmita Das", slug: "asmita-das", dept: "B.TECH (ECE)", phone: "7439486919" },
  ],
};

export const MUSIC_CLUB: Section = {
  title: "Music Club",
  subtitle: "Faculty Head: Prof. Dr. Malay Gangopadhyay & Prof. Dr. Amartya Mukherjee",
  accentColor: "#FACC15",
  members: [
    { name: "Rajdeep Sengupta (Head)", slug: "rajdeep-sengupta-head", dept: "B.TECH (IOT)", phone: "9831895110" },
    { name: "Arighna Bhattacharya (Co-Head)", slug: "arighna-bhattacharya-co-head", dept: "B.TECH (ECE)", phone: "7439487159" },
    { name: "Adrija Acharyya (Co-Head)", slug: "adrija-acharyya-co-head", dept: "B.TECH (ECE)", phone: "7908760641" },
    { name: "Anurupa Maitra", slug: "anurupa-maitra", dept: "BCA", phone: "8100306290" },
  ],
};

export const DANCE_CLUB: Section = {
  title: "Dance Club",
  subtitle: "Faculty Head: Prof. Dr. Koyel Ganguly",
  accentColor: "#EC4899",
  members: [
    { name: "Prakriti Mukhopadhyay (Eastern Head)", slug: "prakriti-mukhopadhyay-eastern-head", dept: "B.TECH (CSE)", phone: "9907444649" },
    { name: "Snikta Banerjee (Eastern Co-Head)", slug: "snikta-banerjee-eastern-co-head", dept: "B.TECH (IOT)", phone: "9674173204" },
    { name: "Indrani Banerjee (Eastern)", slug: "indrani-banerjee-eastern", dept: "BCA", phone: "8697550225" },
    { name: "Soham Sarkar (Western Head)", slug: "soham-sarkar-western-head", dept: "B.TECH (ECE)", phone: "9832249929" },
    { name: "Priyanjana Paul (Western Co-Head)", slug: "priyanjana-paul-western-co-head", dept: "B.TECH (EEE)", phone: "6290836210" },
    { name: "Srija Das (D'cyphers Head)", slug: "srija-das-dcyphers-head", dept: "B.TECH (AIML)", phone: "8910055095" },
    { name: "Akansha Sinha (D'cyphers Co-Head)", slug: "akansha-sinha-dcyphers-co-head", dept: "B.TECH (CSBS)", phone: "6292017298" },
  ],
};

export const COMPUTER_SOCIETY: Section = {
  title: "Computer Society",
  accentColor: "#3B82F6",
  members: [
    { name: "Samya Dutta", slug: "samya-dutta", dept: "B.TECH (CSE)", phone: "8420030435" },
  ],
};

export const PHOTOGRAPHY_CLUB: Section = {
  title: "Photography Club",
  subtitle: "Faculty Head: Prof. Dr. Rajiv Ghosh",
  accentColor: "#1e1e1e",
  members: [
    { name: "Arghya Banerjee", slug: "arghya-banerjee", dept: "B.TECH (AIML)", phone: "6294566708" },
    { name: "Subham Saha", slug: "subham-saha", dept: "BCA", phone: "9163799483" },
    { name: "Ankush Saha", slug: "ankush-saha", dept: "BBA", phone: "7044778799" },
  ],
};

export const DEBATE_CLUB: Section = {
  title: "Debate Club",
  subtitle: "Faculty Head: Prof. Shreyasi Dutta",
  accentColor: "#6366F1",
  members: [
    { name: "Rajsekhar Hajrah", slug: "rajsekhar-hajrah", dept: "B.TECH (AIML)", phone: "8902697173" },
    { name: "Vishal Roy", slug: "vishal-roy", dept: "B.TECH (EE)", phone: "8399995198" },
  ],
};

export const ART_CRAFT: Section = {
  title: "Art & Craft Club",
  subtitle: "Faculty Head: Prof. Dr. Ranabik Banik",
  accentColor: "#F97316",
  members: [
    { name: "Sneha Das", slug: "sneha-das", dept: "B.TECH (EE)", phone: "8777684510" },
    { name: "Sebanjana Jana", slug: "sebanjana-jana", dept: "BCA", phone: "6290601300" },
    { name: "Roshni Kundu", slug: "roshni-kundu", dept: "BBA", phone: "8334813230" },
    { name: "Prasun Dey Sarkar", slug: "prasun-dey-sarkar", dept: "MBA", phone: "9123000149" },
    { name: "Priyanka Bairagi", slug: "priyanka-bairagi", dept: "BHM", phone: "6290421363" },
    { name: "Esha Singh", slug: "esha-singh", dept: "BBA LLB", phone: "9432056136" },
  ],
};

export const QUIZ_CLUB: Section = {
  title: "Quiz Club",
  subtitle: "Faculty Head: Prof. Soham Kanti Bishnu",
  accentColor: "#10B981",
  members: [
    { name: "Saswat Sharma (Head)", slug: "saswat-sharma-head", dept: "B.TECH (AI)", phone: "6291156394" },
    { name: "Manan Bhutiani", slug: "manan-bhutiani", dept: "B.TECH (AI)", phone: "9903353460" },
    { name: "Mahek Agarwal", slug: "mahek-agarwal", dept: "BCA", phone: "8336007439" },
  ],
};

export const DRAMA_CLUB: Section = {
  title: "Drama Club",
  subtitle: "Faculty Head: Prof. Dwaipayan De",
  accentColor: "#8B5CF6",
  members: [
    { name: "Shaptorsi Chakraborty", slug: "shaptorsi-chakraborty", dept: "B.TECH (EEE)", phone: "9123304829" },
    { name: "Ritankar Kundu", slug: "ritankar-kundu", dept: "B.TECH (ECE)", phone: "8420281840" },
  ],
};

export const HUMOUR_CLUB: Section = {
  title: "IEM Humour Club",
  accentColor: "#FACC15",
  members: [
    { name: "Md Tanzil Imam", slug: "md-tanzil-imam", dept: "B.TECH (IT)", phone: "9330657193" },
  ],
};

export const COLLEGE_MAGAZINE: Section = {
  title: "College Magazine",
  subtitle: "Faculty Head: Prof. Dr. Sanghamitra Poddar & Prof. Bavrabi Ghosh",
  accentColor: "#3B82F6",
  members: [
    { name: "Patatri Acharjee (President)", slug: "patatri-acharjee-president", dept: "BTECH (CSE)", phone: "9903856428" },
    { name: "Aahana Chowdhury (President)", slug: "aahana-chowdhury-president", dept: "BTECH (ECE)", phone: "9874745674" },
    { name: "Saikat Debnath (Vice President)", slug: "saikat-debnath-vice-president", dept: "BCA", phone: "8240700894" },
    { name: "Sumona Dutta", slug: "sumona-dutta", dept: "BCA", phone: "8597827328" },
    { name: "Angshu Halder", slug: "angshu-halder", dept: "BCA", phone: "8585842355" },
    { name: "Navonita Ghosal", slug: "navonita-ghosal", dept: "BCA", phone: "6289518939" },
    { name: "Avipsa Saha", slug: "avipsa-saha", dept: "BBA", phone: "8420555659" },
    { name: "Baishakhi Mukherjee", slug: "baishakhi-mukherjee", dept: "BBA", phone: "9875580213" },
    { name: "Triya Majhi", slug: "triya-majhi", dept: "BBA", phone: "7001256413" },
    { name: "Sumouli Chatterjee", slug: "sumouli-chatterjee", dept: "BBA", phone: "7439495348" },
    { name: "Rashi Chakraborty", slug: "rashi-chakraborty", dept: "MBA", phone: "7003136571" },
    { name: "Shilindhra Paul", slug: "shilindhra-paul", dept: "MBA", phone: "8617360996" },
  ],
};

export const STUDENT_CHAPTERS: Section = {
  title: "Student Chapter Heads",
  accentColor: "#6366F1",
  members: [
    { name: "Abhirup Chakraborty", slug: "abhirup-chakraborty", chapter: "ISHRAE", dept: "B.TECH (ME)", phone: "9831148603" },
    { name: "Diptangsu Panja", slug: "diptangsu-panja", chapter: "ASHRAE", dept: "B.TECH (ME)", phone: "6289448636" },
    { name: "Avinandan Mukherjee", slug: "avinandan-mukherjee", chapter: "SAE", dept: "B.TECH (ME)", phone: "9836714226" },
    { name: "Prince Dey", slug: "prince-dey", chapter: "IEI (ME)", dept: "B.TECH (ME)", phone: "6291857014" },
    { name: "Aritra Roy", slug: "aritra-roy", chapter: "IET (EE)", dept: "B.TECH (EE)", phone: "9609191814" },
    { name: "Sombit Mukhuti", slug: "sombit-mukhuti", chapter: "IEI (EE)", dept: "B.TECH (EE)", phone: "9137216980" },
    { name: "Shreyasi Porel", slug: "shreyasi-porel", chapter: "IIW", dept: "B.TECH (ME)", phone: "8240274614" },
    { name: "Rakshit Ahuja", slug: "rakshit-ahuja", chapter: "IEEE IEM SB", dept: "B.TECH (IOT)", phone: "7004494292" },
    { name: "Rakshit Ahuja", slug: "rakshit-ahuja", chapter: "IEEE IEM MTT-S", dept: "B.TECH (IOT)", phone: "7004494292" },
    { name: "Subhadra Bhattacharyya", slug: "subhadra-bhattacharyya", chapter: "IEEE IEM EDS", dept: "B.TECH (ECE)", phone: "9339747625" },
    { name: "Arunima Samanta", slug: "arunima-samanta", chapter: "IEEE IEM APS", dept: "B.TECH (ECE)", phone: "7718567410" },
    { name: "Shatavisha Dasgupta", slug: "shatavisha-dasgupta", chapter: "IEEE IEM CAS-S", dept: "B.TECH (ECE)", phone: "9051501030" },
    { name: "Patatri Acharjee", slug: "patatri-acharjee", chapter: "IEEE IEM WIE", dept: "B.TECH (CSE)", phone: "9903856428" },
    { name: "Sneha Das", slug: "sneha-das", chapter: "IEEE IEM-IAS SBC", dept: "B.TECH (EE)", phone: "8777684510" },
    { name: "Pragyo Banerjee", slug: "pragyo-banerjee", chapter: "ASME", dept: "B.TECH (ME)", phone: "9073833447" },
    { name: "Barshana Chatterjee", slug: "barshana-chatterjee", chapter: "Toastmaster Club", dept: "B.TECH (ECE)", phone: "7044852009" },
    { name: "Ishan Mishra", slug: "ishan-mishra", chapter: "IEM GDG", dept: "B.TECH (ECE)", phone: "6202468406" },
    { name: "Samya Dutta", slug: "samya-dutta", chapter: "IEEE IEM CS", dept: "B.TECH (CSE AI)", phone: "8420030435" },
    { name: "Anand Kumar Singh", slug: "anand-kumar-singh", chapter: "PREEHUB", dept: "B.TECH (CSE)", phone: "8969979393" },
    { name: "Tina Maity", slug: "tina-maity", chapter: "IEEE Solid State Circuit Society", dept: "B.TECH (EE)", phone: "9330481181" },
    { name: "Mounik Biswas", slug: "mounik-biswas", chapter: "IEM-IETE Students' Forum", dept: "B.TECH (CSE AI)", phone: "7318698164" },
    { name: "Ayananshu Ghosh", slug: "ayananshu-ghosh", chapter: "IEEE Control System Society", dept: "B.TECH (EE)", phone: "7439490546" },
    { name: "Arkadeep Ghosh", slug: "arkadeep-ghosh", chapter: "Industrial Electronics Society SBC (IEEE IES SBC)", dept: "B.TECH (EE)", phone: "9874077839" },
  ],
};

export const INNOVATION_CELL: Section = {
  title: "Innovation & Entrepreneurship Development Cell — IEM",
  subtitle: "Faculty Head: Prof. (Dr.) Subhabrata Banerjee",
  accentColor: "#F97316",
  members: [
    { name: "Sagnik Chakraborty", slug: "sagnik-chakraborty", dept: "B.TECH (ECE)", phone: "9062064111" },
  ],
};

export const LITERARY_SOCIETY: Section = {
  title: "IEM Literary Society",
  accentColor: "#FACC15",
  members: [
    { name: "Spandan Chakrabarty", slug: "spandan-chakrabarty", dept: "B.TECH (ECE)", phone: "9836364257" },
  ],
};

export const FILM_SOCIETY: Section = {
  title: "Film Society",
  accentColor: "#1e1e1e",
  members: [
    { name: "Bratyabandhu Bhattacharyya", slug: "bratyabandhu-bhattacharyya", dept: "B.TECH (ECE)", phone: "8240005041" },
  ],
};

export const PET_SOCIETY: Section = {
  title: "IEM Pet Society",
  accentColor: "#10B981",
  members: [
    { name: "Zinnia Ghosh", slug: "zinnia-ghosh", dept: "BCA", phone: "7044835500" },
    { name: "Himel Jana", slug: "himel-jana", dept: "BCA", phone: "7063076214" },
  ],
};

export const ECELL: Section = {
  title: "E-Cell Head",
  accentColor: "#6366F1",
  members: [
    { name: "Ahana Mukherjee", slug: "ahana-mukherjee", dept: "B.TECH (IT)", phone: "8240435586" },
    { name: "Nakshatra Ghosh", slug: "nakshatra-ghosh", dept: "B.TECH (IOT)", phone: "9883757307" },
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