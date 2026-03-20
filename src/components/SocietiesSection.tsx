import { useEffect, useRef } from "react";

const societies = [
  { name: "Cultural", subs: ["Music", "Dance", "Drama", "Fashion"], color: "bauhaus-red", shape: "circle" },
  { name: "Technical", subs: ["Robotics", "Coding", "AI/ML", "Web Dev"], color: "bauhaus-blue", shape: "square" },
  { name: "Sports", subs: ["Cricket", "Football", "Basketball", "Athletics"], color: "bauhaus-yellow", shape: "triangle" },
  { name: "Student Welfare", subs: ["Mentorship", "Counseling", "Health", "Outreach"], color: "bauhaus-red", shape: "circle" },
  { name: "Creative & Literary", subs: ["Poetry", "Writing", "Photography", "Film"], color: "bauhaus-blue", shape: "triangle" },
  { name: "Innovation Hub", subs: ["Startups", "Hackathons", "Workshops", "Research"], color: "bauhaus-yellow", shape: "square" },
];

const ShapeIcon = ({ shape, color }: { shape: string; color: string }) => {
  const cls = `w-10 h-10 bg-${color}/30`;
  if (shape === "circle") return <div className={`${cls} bauhaus-circle`} />;
  if (shape === "triangle") return <div className={`${cls} bauhaus-triangle`} />;
  return <div className={`${cls} rotate-12 rounded-sm`} />;
};

const SocietiesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-scale");
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.08}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="societies" ref={ref} className="relative py-28 px-6 bg-background overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-bauhaus-blue/5 bauhaus-circle" />

      <div className="relative max-w-[1400px] mx-auto">
        <div data-reveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-bauhaus-blue rounded-full" />
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Community</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-foreground">
            SOCIETIES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {societies.map((s) => (
            <div
              key={s.name}
              data-reveal
              className="glass-strong rounded-2xl p-7 neumorph neumorph-hover group"
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-xl md:text-2xl font-bold uppercase text-foreground">{s.name}</h3>
                <ShapeIcon shape={s.shape} color={s.color} />
              </div>
              <div className="flex flex-wrap gap-2">
                {s.subs.map((sub) => (
                  <span
                    key={sub}
                    className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded-md bg-background neumorph-sm text-foreground/70 transition-colors group-hover:text-foreground"
                  >
                    {sub}
                  </span>
                ))}
              </div>
              {/* Accent line */}
              <div className={`mt-5 w-full h-1 bg-${s.color}/40 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;
