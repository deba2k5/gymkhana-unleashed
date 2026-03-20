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
    <section ref={ref} className="bg-background py-24 px-6 neo-border-thick border-l-0 border-r-0">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
        <div data-reveal>
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-4 -rotate-1">
            ABOUT
          </h2>
          <div className="w-32 h-3 bg-neo-red neo-border mt-2" />
        </div>
        <div data-reveal className="neo-border-thick bg-primary p-8 rotate-1 neo-shadow-lg">
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            IEM Gymkhana is the beating heart of campus life at the Institute of Engineering & Management.
            We unite students across cultural, technical, sports, and creative domains — fostering talent,
            building communities, and creating moments that define your college experience. From massive
            tech fests to intimate poetry slams, Gymkhana is where it all happens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
