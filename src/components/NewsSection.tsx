import { useEffect, useRef } from "react";

const newsItems = [
  { headline: "IEM Wins National Robotics Championship", tag: "TECH", size: "large" as const },
  { headline: "Dance Troupe Bags Gold at Inter-College Fest", tag: "CULTURE", size: "medium" as const },
  { headline: "New AI Lab Inaugurated on Campus", tag: "INFRA", size: "small" as const },
  { headline: "Marathon 2025: Record 3000 Participants", tag: "SPORTS", size: "medium" as const },
  { headline: "Literary Society Publishes Annual Anthology", tag: "LITERARY", size: "small" as const },
  { headline: "Alumni Fund Scholarship Launched", tag: "WELFARE", size: "small" as const },
];

const tagColors: Record<string, string> = {
  TECH: "bg-bauhaus-blue/20 text-bauhaus-blue",
  CULTURE: "bg-bauhaus-red/20 text-bauhaus-red",
  INFRA: "bg-bauhaus-yellow/25 text-foreground",
  SPORTS: "bg-bauhaus-red/20 text-bauhaus-red",
  LITERARY: "bg-bauhaus-blue/20 text-bauhaus-blue",
  WELFARE: "bg-bauhaus-yellow/25 text-foreground",
};

const NewsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
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
    <section ref={ref} className="relative py-28 px-6 bg-background overflow-hidden">
      <div className="absolute top-10 right-20 w-40 h-40 bg-bauhaus-red/6 bauhaus-circle" />

      <div className="relative max-w-[1400px] mx-auto">
        <div data-reveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-bauhaus-red rounded-full" />
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Latest Updates</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-foreground">
            NEWS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <div
              key={i}
              data-reveal
              className={`glass-strong rounded-2xl p-7 neumorph neumorph-hover ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase rounded-md mb-4 ${tagColors[item.tag] || "bg-muted text-muted-foreground"}`}>
                {item.tag}
              </span>
              <h3
                className={`font-bold leading-tight text-foreground ${
                  item.size === "large"
                    ? "text-2xl md:text-4xl"
                    : item.size === "medium"
                    ? "text-xl md:text-2xl"
                    : "text-lg"
                }`}
              >
                {item.headline}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
