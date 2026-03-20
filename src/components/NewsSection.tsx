import { useEffect, useRef } from "react";

const newsItems = [
  { headline: "IEM WINS NATIONAL ROBOTICS CHAMPIONSHIP", tag: "TECH", size: "large" },
  { headline: "Dance Troupe Bags Gold at Inter-College Fest", tag: "CULTURE", size: "medium" },
  { headline: "New AI Lab Inaugurated on Campus", tag: "INFRA", size: "small" },
  { headline: "Marathon 2025: Record 3000 Participants", tag: "SPORTS", size: "medium" },
  { headline: "Literary Society Publishes Annual Anthology", tag: "LITERARY", size: "small" },
  { headline: "Alumni Fund Scholarship Launched", tag: "WELFARE", size: "small" },
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
      (el as HTMLElement).style.animationDelay = `${i * 0.08}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 data-reveal className="text-5xl md:text-7xl font-bold uppercase mb-16 -rotate-1">
          NEWS & ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <div
              key={i}
              data-reveal
              className={`neo-border-thick bg-background p-6 neo-shadow neo-card-hover ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              } ${item.size === "medium" ? "md:col-span-1" : ""}`}
            >
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase bg-neo-cyan neo-border mb-4">
                {item.tag}
              </span>
              <h3
                className={`font-bold uppercase leading-tight ${
                  item.size === "large"
                    ? "text-3xl md:text-5xl"
                    : item.size === "medium"
                    ? "text-2xl md:text-3xl"
                    : "text-xl"
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
