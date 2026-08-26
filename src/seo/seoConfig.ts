// Central per-route SEO metadata. Every page pulls its <title>/meta tags
// from here via the <Seo> component instead of hardcoding them inline.

export const SITE_NAME = "IEM Students' Gymkhana";
export const SITE_URL = "https://iemstudentgymkhana.iem.edu.in";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/IEM_logo.jpeg`;

export interface SeoRouteMeta {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  image?: string;
}

// Keep every title/description keyword-rich around "IEM Gymkhana" /
// "IEM Student Gymkhana" / "IEM Students' Gymkhana" so each indexed page
// reinforces the same brand terms Google should surface for those queries.
export const seoRoutes: Record<string, SeoRouteMeta> = {
  home: {
    title: "IEM Students' Gymkhana | Official Site — IEM Student Gymkhana, Kolkata",
    description:
      "IEM Students' Gymkhana is the official student governance body of the Institute of Engineering & Management, Kolkata — running clubs, societies, events, and campus life for every IEM student.",
    keywords:
      "IEM Gymkhana, IEM Student Gymkhana, IEM Students Gymkhana, IEM Kolkata, Institute of Engineering and Management Gymkhana, IEM student council, IEM clubs and societies",
    path: "/",
  },
  oath: {
    title: "The Gymkhana Oath | IEM Students' Gymkhana",
    description:
      "Read the official pledge of IEM Students' Gymkhana — the values of innovation, integrity, and excellence every IEM Gymkhana member stands for.",
    keywords: "IEM Gymkhana oath, IEM Student Gymkhana pledge, IEM Kolkata student values",
    path: "/oath",
  },
  societies: {
    title: "Clubs & Societies | IEM Students' Gymkhana",
    description:
      "Explore every club and society under IEM Students' Gymkhana — cultural, technical, literary, and sports societies at IEM Kolkata.",
    keywords: "IEM Gymkhana clubs, IEM Student Gymkhana societies, IEM Kolkata clubs, IEM cultural societies, IEM technical societies",
    path: "/societies",
  },
  events: {
    title: "Events & Fests | IEM Students' Gymkhana",
    description:
      "All the flagship events, fests, and competitions organized by IEM Students' Gymkhana — from IEMPACT to Innovación and beyond.",
    keywords: "IEM Gymkhana events, IEM Student Gymkhana fests, IEM Kolkata events, IEMPACT, Innovacion IEM",
    path: "/events",
  },
  awards: {
    title: "Awards & Achievements | IEM Students' Gymkhana",
    description:
      "Celebrating the achievements and award-winning talent of IEM Students' Gymkhana members across cultural, technical, and sports domains.",
    keywords: "IEM Gymkhana awards, IEM Student Gymkhana achievements, IEM Kolkata student awards",
    path: "/awards",
  },
  members: {
    title: "Our Team | IEM Students' Gymkhana",
    description:
      "Meet the student leadership of IEM Students' Gymkhana — the office bearers and society heads driving campus life at IEM Kolkata.",
    keywords: "IEM Gymkhana members, IEM Student Gymkhana team, IEM Kolkata student leadership",
    path: "/members",
  },
  auditions: {
    title: "Auditions Live — Join a Club | IEM Students' Gymkhana",
    description:
      "Auditions are open across IEM Students' Gymkhana clubs and societies. Apply now to join Music, Dance, Debate, Tech, and more at IEM Kolkata.",
    keywords: "IEM Gymkhana auditions, IEM Student Gymkhana recruitment, IEM Kolkata club auditions, join IEM clubs",
    path: "/auditions",
  },
};
