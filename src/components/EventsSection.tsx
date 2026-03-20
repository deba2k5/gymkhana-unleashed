import { useEffect, useRef } from "react";

const events = [
  { name: "IEMPACT", desc: "The flagship cultural extravaganza", accent: "bg-bauhaus-red" },
  { name: "INNOVACION", desc: "Annual tech fest pushing boundaries", accent: "bg-bauhaus-blue" },
  { name: "MARATHON", desc: "5K run for fitness and community", accent: "bg-bauhaus-yellow" },
  { name: "FILM FESTIVAL", desc: "Student cinema & storytelling", accent: "bg-bauhaus-red" },
  { name: "ALUMNI MEET", desc: "Bridging generations of IEM", accent: "bg-bauhaus-blue" },
];

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" ref={ref} className="relative py-28 px-6 bg-background overflow-hidden">
      <div className="absolute -bottom-16 left-1/4 w-60 h-60 bg-bauhaus-yellow/8 bauhaus-triangle animate-spin-slow" />

      <div className="relative max-w-[1400px] mx-auto">
        <div data-reveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-bauhaus-yellow rounded-full" />
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">What's Happening</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-foreground">
            EVENTS
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
          {events.map((ev) => (
            <div
              key={ev.name}
              data-reveal
              className="glass-strong rounded-2xl p-8 min-w-[280px] md:min-w-[340px] flex-shrink-0 neumorph neumorph-hover group"
            >
              <div className={`w-10 h-2 ${ev.accent} rounded-full mb-5 transition-all duration-300 group-hover:w-16`} />
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-3 leading-tight text-foreground">
                {ev.name}
              </h3>
              <p className="text-base font-medium text-muted-foreground mb-6">{ev.desc}</p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase bg-card rounded-lg neumorph-sm text-foreground/80 transition-all group-hover:text-foreground group-hover:neumorph active:neumorph-inset active:scale-97">
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
