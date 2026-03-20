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
    <section ref={ref} className="bg-neo-green py-24 px-6 neo-border-thick border-l-0 border-r-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        <div data-reveal>
          <h2 className="text-[clamp(3rem,8vw,9rem)] font-bold uppercase leading-[0.85] tracking-tight mb-8">
            #1 TECH FEST
            <br />
            IN KOLKATA
          </h2>
          <div className="inline-block neo-border-thick bg-foreground text-background px-8 py-4 text-xl md:text-2xl font-bold uppercase rotate-2 neo-shadow-lg">
            15,000+ FOOTFALL · 200+ EVENTS · 50+ COLLEGES
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 neo-border-thick bg-foreground py-4 -mx-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold uppercase text-background mx-8">
                INNOVATE · CREATE · COMPETE · CELEBRATE · UNITE ·&nbsp;
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
