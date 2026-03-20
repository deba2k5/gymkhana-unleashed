import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen bg-primary pt-24 md:pt-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center min-h-[calc(100vh-80px)]">
        {/* Left */}
        <div className="relative z-10">
          <h1
            data-reveal
            className="text-[clamp(3.5rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight mb-6"
          >
            IEM
            <br />
            GYMKHANA
          </h1>
          <p
            data-reveal
            className="text-xl md:text-2xl font-semibold mb-8 max-w-md"
            style={{ marginLeft: "4px" }}
          >
            Where Culture Meets Innovation
          </p>
          <div data-reveal className="flex flex-wrap gap-4">
            <a
              href="#societies"
              className="inline-block px-6 py-3 text-lg font-bold uppercase bg-foreground text-background neo-border neo-shadow neo-shadow-hover"
            >
              Explore Societies
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 text-lg font-bold uppercase bg-neo-red neo-border neo-shadow neo-shadow-hover"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Right — abstract shapes */}
        <div className="relative hidden md:block h-[500px]">
          <div
            data-reveal
            className="absolute top-8 right-4 w-56 h-56 bg-neo-cyan neo-border-thick rotate-6"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            data-reveal
            className="absolute top-32 right-28 w-40 h-40 bg-neo-red neo-border-thick -rotate-12"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            data-reveal
            className="absolute bottom-12 right-8 w-64 h-48 bg-foreground neo-border-thick rotate-3 flex items-center justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-background text-4xl font-bold uppercase tracking-tight rotate-[-3deg]">
              EST. 2024
            </span>
          </div>
          <div
            data-reveal
            className="absolute top-0 left-0 w-20 h-20 bg-neo-green neo-border-thick rotate-12"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            data-reveal
            className="absolute bottom-0 left-12 w-32 h-16 bg-primary neo-border-thick -rotate-6"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
