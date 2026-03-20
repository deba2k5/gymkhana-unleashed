import { useEffect, useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("animate-reveal-up");
      }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen pt-20 overflow-hidden bg-background">
      {/* Bauhaus geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-bauhaus-blue/10 bauhaus-circle animate-float" />
        <div className="absolute top-1/3 -left-16 w-[250px] h-[250px] bg-bauhaus-red/10 bauhaus-circle" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/4 w-[180px] h-[180px] bg-bauhaus-yellow/15 bauhaus-triangle animate-spin-slow" />
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-bauhaus-red/8 rotate-45" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center min-h-[calc(100vh-80px)]">
        {/* Left text */}
        <div>
          <div data-reveal className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass rounded-full neumorph-sm">
            <div className="w-2.5 h-2.5 bg-bauhaus-red bauhaus-circle" />
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground/60">Institute of Engineering & Management</span>
          </div>
          <h1
            data-reveal
            className="text-[clamp(3rem,9vw,7.5rem)] font-bold uppercase leading-[0.9] tracking-tight mb-6 text-foreground"
          >
            IEM
            <br />
            <span className="text-primary">GYM</span>KHANA
          </h1>
          <p
            data-reveal
            className="text-xl md:text-2xl font-medium mb-10 max-w-lg text-muted-foreground leading-relaxed"
          >
            Where Culture Meets Innovation
          </p>
          <div data-reveal className="flex flex-wrap gap-4">
            <a
              href="#societies"
              className="inline-flex items-center px-7 py-3.5 text-base font-bold uppercase bg-primary text-primary-foreground rounded-lg neumorph neumorph-hover tracking-wide"
            >
              Explore Societies
            </a>
            <a
              href="#"
              className="inline-flex items-center px-7 py-3.5 text-base font-bold uppercase glass rounded-lg neumorph neumorph-hover tracking-wide text-foreground"
            >
              Join Now
              <span className="ml-2 w-2.5 h-2.5 bg-bauhaus-yellow bauhaus-circle" />
            </a>
          </div>
        </div>

        {/* Right — Bauhaus composition */}
        <div className="relative hidden md:flex items-center justify-center h-[480px]">
          {/* Large blue circle */}
          <div data-reveal className="absolute w-64 h-64 bg-bauhaus-blue/20 bauhaus-circle neumorph animate-float" style={{ top: "10%", right: "5%" }} />
          {/* Red circle */}
          <div data-reveal className="absolute w-36 h-36 bg-bauhaus-red/25 bauhaus-circle neumorph-sm" style={{ top: "55%", right: "40%", animationDelay: "0.15s" }} />
          {/* Yellow triangle */}
          <div data-reveal className="absolute w-32 h-32 bg-bauhaus-yellow/30 bauhaus-triangle" style={{ top: "15%", right: "45%", animationDelay: "0.25s" }} />
          {/* Glass card floating */}
          <div data-reveal className="absolute glass-strong rounded-xl p-6 neumorph" style={{ bottom: "8%", right: "8%", animationDelay: "0.35s" }}>
            <p className="text-3xl font-bold text-foreground">EST.</p>
            <p className="text-5xl font-bold text-primary">2024</p>
          </div>
          {/* Small square */}
          <div data-reveal className="absolute w-16 h-16 bg-bauhaus-black/10 rotate-12 neumorph-sm" style={{ top: "5%", left: "10%", animationDelay: "0.45s" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
