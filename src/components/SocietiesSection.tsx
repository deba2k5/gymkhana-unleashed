import { useEffect, useRef } from "react";

const societies = [
  { name: "Cultural", color: "bg-neo-yellow", subs: ["Music", "Dance", "Drama", "Fashion"], rotate: "rotate-1" },
  { name: "Technical", color: "bg-neo-cyan", subs: ["Robotics", "Coding", "AI/ML", "Web Dev"], rotate: "-rotate-2" },
  { name: "Sports", color: "bg-neo-red", subs: ["Cricket", "Football", "Basketball", "Athletics"], rotate: "rotate-2" },
  { name: "Student Welfare", color: "bg-neo-green", subs: ["Mentorship", "Counseling", "Health", "Outreach"], rotate: "-rotate-1" },
  { name: "Creative & Literary", color: "bg-primary", subs: ["Poetry", "Writing", "Photography", "Film"], rotate: "rotate-3" },
  { name: "Innovation Hub", color: "bg-background", subs: ["Startups", "Hackathons", "Workshops", "Research"], rotate: "-rotate-2" },
];

const SocietiesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-scale");
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.08}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="societies" ref={ref} className="bg-foreground py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 data-reveal className="text-5xl md:text-7xl font-bold uppercase text-background mb-16 -rotate-1">
          SOCIETIES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {societies.map((s) => (
            <div
              key={s.name}
              data-reveal
              className={`${s.color} neo-border-thick p-6 ${s.rotate} neo-shadow-lg neo-card-hover`}
            >
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">{s.name}</h3>
              <div className="flex flex-wrap gap-2">
                {s.subs.map((sub) => (
                  <span
                    key={sub}
                    className="inline-block px-3 py-1 text-sm font-bold uppercase neo-border bg-background"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;
