import { useEffect, useRef } from "react";

const HighlightsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-scale");
      }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 px-6 bg-white overflow-hidden dot-grid border-t border-gray-100">

      <div className="relative max-w-[1400px] mx-auto text-center">
        <div data-reveal className="premium-card p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-gray-900 mb-12">
            #1 TECH FEST
            <br />
            <span className="text-blue-600">IN KOLKATA</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
            {[
              { num: "15,000+", label: "Annual Footfall" },
              { num: "200+", label: "Technical Events" },
              { num: "50+", label: "Partner Colleges" },
            ].map((s) => (
              <div key={s.label} className="text-center group">
                <p className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter group-hover:text-blue-600 transition-colors">{s.num}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-3">{s.label}</p>
              </div>
            ))}
          </div>
          {/* Brand Mark */}
          <div className="flex justify-center gap-3 mt-16 scale-75 md:scale-100">
            <div className="w-4 h-4 bg-gray-900 rounded-sm transform rotate-12" />
            <div className="w-4 h-4 bg-blue-600 rounded-sm transform -rotate-12" />
            <div className="w-4 h-4 bg-gray-200 rounded-sm transform rotate-45" />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 bg-gray-50 border-y border-gray-100 py-8 -mx-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="text-xl md:text-4xl font-black uppercase text-gray-200 mx-12 tracking-tighter">
                INNOVATE · CREATE · COMPETE · CELEBRATE · UNITE ·&nbsp;
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
