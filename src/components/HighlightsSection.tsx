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
    <section ref={ref} className="relative py-28 px-6 bg-background overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-bauhaus-blue/8 bauhaus-circle" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-bauhaus-yellow/10 rotate-45" />
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-bauhaus-red/8 bauhaus-triangle" />
      </div>

      <div className="relative max-w-[1400px] mx-auto text-center">
        <div data-reveal className="glass-strong rounded-3xl p-12 md:p-20 neumorph">
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-foreground mb-8">
            #1 TECH FEST
            <br />
            <span className="text-primary">IN KOLKATA</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
            {[
              { num: "15,000+", label: "Footfall" },
              { num: "200+", label: "Events" },
              { num: "50+", label: "Colleges" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-foreground">{s.num}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          {/* Bauhaus dots */}
          <div className="flex justify-center gap-3 mt-10">
            <div className="w-5 h-5 bg-bauhaus-red bauhaus-circle" />
            <div className="w-5 h-5 bg-bauhaus-blue bauhaus-circle" />
            <div className="w-5 h-5 bg-bauhaus-yellow bauhaus-circle" />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 glass-strong rounded-2xl py-5 -mx-2 overflow-hidden neumorph-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="text-xl md:text-3xl font-bold uppercase text-foreground/40 mx-6">
                INNOVATE · CREATE · COMPETE · CELEBRATE · UNITE ·&nbsp;
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
