import { useEffect, useRef } from "react";

const events = [
  { name: "IEMPACT", desc: "The flagship cultural extravaganza", color: "bg-neo-yellow", rotate: "rotate-2" },
  { name: "INNOVACION", desc: "Annual tech fest pushing boundaries", color: "bg-neo-cyan", rotate: "-rotate-3" },
  { name: "MARATHON", desc: "5K run for fitness and community", color: "bg-neo-green", rotate: "rotate-1" },
  { name: "FILM FESTIVAL", desc: "Student cinema & storytelling", color: "bg-neo-red", rotate: "-rotate-2" },
  { name: "ALUMNI MEET", desc: "Bridging generations of IEM", color: "bg-primary", rotate: "rotate-3" },
];

const EventsSection = () => {
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
    <section id="events" ref={ref} className="bg-background py-24 px-6 neo-border-thick border-l-0 border-r-0">
      <div className="max-w-[1400px] mx-auto">
        <h2 data-reveal className="text-5xl md:text-7xl font-bold uppercase mb-16 rotate-1">
          EVENTS
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar">
          {events.map((ev) => (
            <div
              key={ev.name}
              data-reveal
              className={`${ev.color} neo-border-thick p-8 min-w-[280px] md:min-w-[340px] ${ev.rotate} neo-shadow-lg neo-card-hover flex-shrink-0`}
            >
              <h3 className="text-3xl md:text-4xl font-bold uppercase mb-3 leading-[0.95]">
                {ev.name}
              </h3>
              <p className="text-base font-semibold">{ev.desc}</p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 text-sm font-bold uppercase bg-foreground text-background neo-border neo-shadow-hover neo-shadow">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
