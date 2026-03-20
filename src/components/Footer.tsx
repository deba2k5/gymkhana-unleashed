import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const quickLinks = ["Home", "Societies", "Events", "Members", "FAQ"];
const socials = [
  { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { name: "Twitter", icon: <Twitter className="w-4 h-4" /> },
  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { name: "GitHub", icon: <Github className="w-4 h-4" /> },
];

const Footer = () => (
  <footer className="relative bg-white pt-24 pb-12 px-6 overflow-hidden border-t border-gray-100 dot-grid">
    
    <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
      
      {/* Brand Column */}
      <div className="lg:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 p-1">
            <img src="/iem-3d-logo.png" alt="IEM Logo" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl font-black tracking-tighter text-gray-900">
            GYMKHANA<span className="text-blue-600">.</span>
          </h3>
        </div>
        <p className="text-lg font-medium text-gray-500 leading-relaxed mb-8">
          The heartbeat of campus culture, technical excellence, and community spirit at IEM Kolkata.
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href="#"
              className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="grid grid-cols-2 gap-8 lg:col-span-2">
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Explore</h4>
          <ul className="space-y-4">
            {quickLinks.map((l) => {
              const path = l === "Home" ? "/" : l === "Societies" ? "/societies" : l === "Members" ? "/members" : l === "FAQ" ? "/faq" : `#${l.toLowerCase()}`;
              return (
                <li key={l}>
                  <Link
                    to={path}
                    className="text-[10px] font-black text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
                  >
                    {l}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Resources</h4>
          <ul className="space-y-4">
            {["Governance", "Join Team", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter / CTA Column */}
      <div className="lg:col-span-1">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Stay Updated</h4>
        <p className="text-sm text-gray-500 mb-6 font-medium">Get the latest news and event updates straight to your inbox.</p>
        <div className="relative">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
          <button className="absolute right-2 top-2 bottom-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/10">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative max-w-[1400px] mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
        © 2025 IEM Gymkhana — Made by Debangshu Chatterjee
      </p>
      <div className="flex gap-8">
        <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors">Privacy</a>
        <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
