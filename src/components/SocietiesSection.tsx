import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Users2, Bookmark } from "lucide-react";

const societies = [
  { id: "cultural", name: "Cultural", subs: ["Music", "Dance", "Drama", "Fashion"], color: "blue" },
  { id: "technical", name: "Technical", subs: ["Robotics", "Coding", "AI/ML", "Web Dev"], color: "blue" },
  { id: "sports", name: "Sports", subs: ["Cricket", "Football", "Basketball", "Athletics"], color: "blue" },
  { id: "welfare", name: "Student Welfare", subs: ["Mentorship", "Counseling", "Health", "Outreach"], color: "blue" },
  { id: "creative", name: "Creative & Literary", subs: ["Poetry", "Writing", "Photography", "Film"], color: "blue" },
  { id: "innovation", name: "Innovation Hub", subs: ["Startups", "Hackathons", "Workshops", "Research"], color: "blue" },
];

const SocietiesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="societies" ref={ref} className="relative py-24 md:py-40 px-6 bg-white dot-grid overflow-hidden border-t border-gray-100">
      
      <div className="relative max-w-[1400px] mx-auto z-10">
        
        {/* Header Section */}
        <div data-reveal className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest border border-blue-100">
              <Users2 className="w-4 h-4" />
              <span>The Ecosystem</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter">
              STUDENT<br /><span className="text-gray-300">SOCIETIES.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Cultivate your passions, expand your network, and collaborate with peers across technical and creative domains.
            </p>
          </div>
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {societies.map((s) => (
            <Link
              to={`/societies#${s.id}`}
              key={s.name}
              data-reveal
              className="premium-card group flex flex-col p-10 md:p-12"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-gray-100 p-1.5 transition-all duration-500 group-hover:bg-blue-50 group-hover:border-blue-500 group-hover:scale-110 shadow-sm">
                  <img src="/iem-3d-logo.png" alt="IEM Logo" className="w-full h-full object-contain transition-opacity" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                {s.name}
              </h3>
              
              <div className="flex flex-wrap gap-2.5 mb-10 flex-1">
                {s.subs.map((sub) => (
                  <span
                    key={sub}
                    className="inline-flex items-center px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-lg bg-gray-50 text-gray-500 border border-transparent transition-all duration-300 group-hover:bg-white group-hover:border-gray-200 group-hover:text-gray-900"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Refined Footer */}
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                  Explore Department
                </span>
                <div className="h-[3px] w-6 bg-gray-100 rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-blue-600" />
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div data-reveal className="mt-32 text-center">
          <Link 
            to="/societies" 
            className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 hover:text-blue-600 transition-colors group"
          >
            View all 40+ Clubs
            <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-blue-600 transition-all">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;
