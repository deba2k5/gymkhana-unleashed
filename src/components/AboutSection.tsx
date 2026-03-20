import { useEffect, useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
      }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 px-6 bg-background overflow-hidden">
      {/* Bauhaus accent shape */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-bauhaus-yellow/10 bauhaus-circle" />

      <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <div data-reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-bauhaus-red rounded-full" />
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Who We Are</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-foreground">
            ABOUT
          </h2>
        </div>
        <div data-reveal className="glass-strong rounded-2xl p-8 md:p-10 neumorph">
          <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/80">
            IEM Gymkhana is the beating heart of campus life at the Institute of Engineering & Management.
            We unite students across cultural, technical, sports, and creative domains — fostering talent,
            building communities, and creating moments that define your college experience. From massive
            tech fests to intimate poetry slams, Gymkhana is where it all happens.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-4 h-4 bg-bauhaus-blue bauhaus-circle" />
            <div className="w-4 h-4 bg-bauhaus-red bauhaus-circle" />
            <div className="w-4 h-4 bg-bauhaus-yellow bauhaus-circle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
