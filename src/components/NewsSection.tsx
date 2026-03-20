import { useEffect, useRef } from "react";
import { ArrowUpRight, Zap } from "lucide-react";

const featuredNews = {
  headline: "IEM Receives 'University of the Year' Excellence Award",
  tag: "BREAKING",
  date: "Just Now",
  desc: "In a groundbreaking achievement, Gymkhana celebrates as IEM is recognized nationally for its unparalleled contribution to student life, open-source tech, and cultural preservation.",
};

const newsTrack1 = [
  { headline: "IEM Wins National Robotics Championship 2024", tag: "TECH", date: "2 Hours Ago" },
  { headline: "Dance Troupe Bags Gold at Inter-College Fest", tag: "CULTURE", date: "5 Hours Ago" },
  { headline: "New AI & Machine Learning Lab Inaugurated", tag: "INFRA", date: "Yesterday" },
  { headline: "Marathon 2024: Record 3000 Participants", tag: "SPORTS", date: "Mar 12" },
  { headline: "Literary Society Publishes Annual Anthology 'Echoes'", tag: "LITERARY", date: "Mar 10" },
];

const newsTrack2 = [
  { headline: "Alumni Fund Scholarship Launched for Top Students", tag: "WELFARE", date: "Mar 08" },
  { headline: "Gymkhana Announces Mega Bootcamp for Startups", tag: "INNOVATION", date: "Mar 05" },
  { headline: "Debate Team Reaches Finals at National Moot Court", tag: "LITERARY", date: "Feb 28" },
  { headline: "Cybersecurity Workshop Features Industry Experts", tag: "TECH", date: "Feb 25" },
  { headline: "Annual Photography Exhibition 'Lenscraft' Opens", tag: "CREATIVE", date: "Feb 20" },
];

const NewsSection = () => {
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
    <section ref={ref} className="relative py-24 md:py-40 bg-background border-t border-gray-100 dot-grid overflow-hidden">

      {/* Inline Styles for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 35s linear infinite;
        }
        .marquee-track:hover .animate-marquee-left,
        .marquee-track:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative max-w-[1400px] mx-auto z-10 px-6 lg:px-8">
        
        {/* Header */}
        <div data-reveal className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
              Latest <span className="text-gray-400">News.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Live updates, achievements, and announcements from across the campus ecosystem.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
            Go to Newsroom
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Layout: 1 Featured Column + Marquee Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Featured Breaking News Card */}
          <div 
            data-reveal 
            className="lg:col-span-1 group relative overflow-hidden bg-gray-900 rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[400px]"
          >
            {/* Ambient inner glow */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[80px] translate-y-1/3 translate-x-1/3 pointer-events-none transition-all duration-700 group-hover:bg-blue-500/40" />
            
            <div className="relative z-10 flex justify-between items-start mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 text-red-500 rounded-full text-xs font-bold uppercase tracking-widest border border-red-500/20">
                <Zap className="w-3.5 h-3.5 fill-current" />
                {featuredNews.tag}
              </span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{featuredNews.date}</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                {featuredNews.headline}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-8">
                {featuredNews.desc}
              </p>
              
              <div className="flex items-center gap-3 text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                Read full story
              </div>
            </div>
          </div>

          {/* Marquee Tracks Container (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-6 overflow-hidden relative rounded-[2rem] marquee-track">
            
            {/* Track 1: Right to Left */}
            <div className="flex w-[200%] animate-marquee-left">
              {[...newsTrack1, ...newsTrack1].map((item, i) => (
                <div
                  key={`t1-${i}`}
                  className="premium-card w-[320px] md:w-[380px] flex-shrink-0 mx-4 p-8 group flex flex-col justify-between min-h-[240px]"
                >
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-500 rounded-md text-[10px] font-black tracking-[0.1em] uppercase border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-8">
                    {item.headline}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900 transition-colors">Read Article</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Track 2: Left to Right */}
            <div className="flex w-[200%] animate-marquee-right">
              {[...newsTrack2, ...newsTrack2].map((item, i) => (
                <div
                  key={`t2-${i}`}
                  className="premium-card w-[320px] md:w-[380px] flex-shrink-0 mx-4 p-8 group flex flex-col justify-between min-h-[240px]"
                >
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-500 rounded-md text-[10px] font-black tracking-[0.1em] uppercase border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-8">
                    {item.headline}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900 transition-colors">Read Article</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Fades for Marquee Ends (Only visible inside the marquee container) */}
            <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
