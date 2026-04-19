export interface Club {
  id: string;
  name: string;
  about: string;
  category: string;
  people: string[];
  achievements: string[];
  instagram?: string;
  drive?: string;
}

export const clubs: Club[] = [
  {
    id: "music",
    name: "The Eighth Note",
    category: "CULTURAL",
    instagram: "https://www.instagram.com/iemmusicclub/",
    about: "If music is your passion—whether you sing or play an instrument, rooted in Eastern traditions or Western styles—the Music Club offers a platform to collaborate, perform, and grow.",
    people: ["Rajdeep Sengupta — 9831895110", "Arighna Bhattacharya — 7439487159", "Adrija Acharyya — 7908760641"],
    achievements: ["Umang 2024 – Winner", "Xavrang 2026 – Winner", "Amiphoria 2025 – Winner"],
  },
  {
    id: "itran-a",
    name: "ITRAN-A",
    category: "CULTURAL",
    instagram: "https://www.instagram.com/itranaa.iem",
    about: "As we step into the rhythm and grace of our passion, we share one thing in common—a deep love for dance.",
    people: ["Prakriti Mukhopadhyay — 9907444649", "Snikta Banerjee — 9674173204"],
    achievements: ["Calcutta Youth Meet 2023 – Winner", "Ecstasia 2025 – Winner (Solo)"],
  },
  {
    id: "offbeat",
    name: "OffBeat",
    category: "CULTURAL",
    instagram: "https://www.instagram.com/offbeat_2526",
    about: "Offbeat, the official western dance club of IEM, Kolkata, is driven by creativity, confidence, and artistic excellence through dance.",
    people: ["Soham Sarkar — 9832249929", "Priyanjana Paul — 6290836210"],
    achievements: ["Sanskriti 2023 – 1st Prize", "Umang 2025 – 2nd Prize"],
  },
  {
    id: "chorus",
    name: "Chorus",
    category: "CULTURAL",
    instagram: "https://www.instagram.com/chorusdrama?igsh=MW4wYWh1YmQycmM4MQ==",
    about: "The official drama club of IEM, making stage our home and keeping theatre alive among youngsters.",
    people: ["Shaptorshi Chakraborty — 9123304829", "Ritankar Kundu — 8420281840"],
    achievements: ["Winner at Anubhuti 2019", "1st Runners Up at Sanskriti 2023"],
  },
  {
    id: "oratoria",
    name: "Oratoria-Debate Club",
    category: "LITERARY",
    instagram: "https://www.instagram.com/iemdebatingsociety?igsh=aGJ0MGp2MnBpM3cz",
    about: "Oratoria IEM Debating Society is dedicated to promoting linguistic diversity and meaningful discourse.",
    people: ["Rajsekhar Hajrah — 8902697173", "Vishal Roy — 8399995198"],
    achievements: ["IIT Kharagpur Communiqué 2026 – Best Delegation"],
  },
  {
    id: "arc",
    name: "ALUMNI RELATIONS CELL",
    category: "MANAGEMENT",
    about: "Connecting alumni and giving back to the alma mater through networking and mentorship.",
    people: ["Subhayan — 7980209425", "Ayon — 9832729904", "Shuvrajit — 9932066487", "Akshita — 9804868284"],
    achievements: ["Supported IEMPACT 2026", "IEM-UEM Kolkata Marathon 2026"],
    drive: "https://drive.google.com/drive/folders/1g6wXrMse3Fd1VQz2T5lEv8ApdtgXePhR?usp=sharing",
  },
  {
    id: "photography",
    name: "Photography Club",
    category: "CULTURAL",
    about: "Our Club focuses on covering all college events and building a professional network for photographers.",
    people: ["Arghya Banerjee — 6294566708", "Subham Saha — 9163799483", "Ankush Saha — 7044778799"],
    achievements: ["Photos used in various media houses and platforms."],
  },
  {
    id: "iemlit",
    name: "IEM LIT",
    category: "LITERARY",
    about: "A haven for writers and debaters exploring the power of words and logic.",
    people: ["Samarpita — 9831627448", "Mainak — 8777041530"],
    achievements: [],
  },
  {
    id: "humour",
    name: "Humour Club",
    category: "CULTURAL",
    about: "A community for improv, stand-up, and lighthearted entertainment.",
    people: ["Md Tanzil Imam — 9330657193"],
    achievements: [],
  },
  {
    id: "pet",
    name: "P.E.T.",
    category: "MANAGEMENT",
    about: "Physical Education and Techniques—promoting sports and healthy competition.",
    people: ["Subhashis — 8583858079", "Soham — 9477028148"],
    achievements: [],
  },
  {
    id: "film",
    name: "Film & Visual Arts",
    category: "CULTURAL",
    instagram: "https://www.instagram.com/aalokborsho",
    about: "Dedicated to fostering a deeper appreciation of cinema as an art form.",
    people: ["Bratyabandhu Bhattacharyya — 8240005041"],
    achievements: [],
  },
];
