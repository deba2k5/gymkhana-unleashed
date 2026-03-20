import { useEffect, useRef } from "react";
import { ArrowUpRight, Zap } from "lucide-react";

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
    <section id="home" ref={ref} className="relative min-h-screen pt-24 md:pt-32 overflow-hidden bg-background dot-grid">
      
      {/* Premium Ambient Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center min-h-[calc(100vh-120px)]">
        
        {/* Left Side: Impact Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <div data-reveal className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600">
            <Zap className="w-4 h-4 fill-current" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Official Campus Hub</span>
          </div>
          
          <h1
            data-reveal
            className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter text-gray-900 mb-8"
          >
            IEM
            <br />
            <span className="text-blue-600">GYM</span>KHANA
          </h1>
          
          <p
            data-reveal
            className="text-xl md:text-2xl font-medium text-gray-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            The beating heart of campus life. Fostering culture, technical excellence, and the leaders of tomorrow.
          </p>
          
          <div data-reveal className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#societies"
              className="px-8 py-4 bg-gray-900 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-blue-600/20 group flex items-center gap-2"
            >
              Explore Societies
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-gray-200 text-gray-900 text-sm font-black uppercase tracking-widest rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              Join the Team
            </a>
          </div>
          
          {/* Quick Stats or Tags */}
          <div data-reveal className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 opacity-40">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900">40+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Student Clubs</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900">5k+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Active Members</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900">100+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Events Yearly</span>
            </div>
          </div>
        </div>

        {/* Right Side: Hero Visual */}
        <div className="relative flex items-center justify-center lg:h-full">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <div
            className="relative transition-transform duration-700 hover:scale-105"
            style={{ perspective: "1500px" }}
          >
            <img
              src="/iem-3d-logo.png"
              alt="IEM 3D Logo"
              className="w-full max-w-[600px] h-auto transition-all duration-500 drop-shadow-2xl"
              style={{
                transform: "rotateY(-10deg) rotateX(5deg)",
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15)) drop-shadow(0 0 40px rgba(59,130,246,0.1))",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLImageElement).style.transform = "rotateY(0deg) rotateX(0deg)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLImageElement).style.transform = "rotateY(-10deg) rotateX(5deg)";
              }}
            />
          </div>
          
          {/* Floating Accents */}
          <div className="absolute top-1/4 right-0 w-12 h-12 bg-blue-500/10 rounded-full blur-xl animate-bounce" />
          <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-rose-500/10 rounded-full blur-xl animate-pulse" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
