import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";

const ABOUT_TEXT = "IEM Gymkhana is the beating heart of campus life at the Institute of Engineering & Management. We unite students across cultural, technical, sports, and creative domains — fostering talent, building communities, and creating moments that define your college experience. From massive tech fests to intimate poetry slams, Gymkhana is where it all happens.";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < ABOUT_TEXT.length) {
        setDisplayedText(ABOUT_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("animate-reveal-up");
          if (e.target.getAttribute("data-typewriter") === "true" && !hasStartedTyping) {
            setHasStartedTyping(true);
            setTimeout(() => setIsTyping(true), 400);
          }
        }
      }),
      { threshold: 0.2 }
    );
    
    ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
      if (el.getAttribute("data-typewriter") !== "true") {
        (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
        (el as HTMLElement).style.opacity = "0";
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [hasStartedTyping]);

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-background dot-grid overflow-hidden border-t border-gray-100">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-[0.7fr_1.3fr] gap-16 md:gap-24 items-center">
        
        {/* Left Side: Header */}
        <div data-reveal className="max-w-md">
          <div className="flex items-center gap-3 mb-6 text-blue-600">
            <Info className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Our Mission</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-8">
            ABOUT<span className="text-gray-300">.</span>
          </h2>
          <p className="text-lg font-medium text-gray-500 leading-relaxed">
            Building a legacy of excellence, creativity, and community for every student at IEM.
          </p>
        </div>

        {/* Right Side: Narrative Card */}
        <div 
          data-reveal 
          data-typewriter="true" 
          className="premium-card p-10 md:p-16 flex flex-col justify-center min-h-[350px]"
        >
          <p className="text-xl md:text-3xl font-bold leading-[1.4] text-gray-800 tracking-tight">
            {displayedText}
            <span className={`inline-block w-1.5 h-8 md:h-10 bg-blue-600 ml-2 translate-y-2 ${(isTyping || !hasStartedTyping) ? 'animate-pulse' : 'opacity-0'}`}></span>
          </p>
          
          <div className="mt-12 flex items-center gap-6 border-t border-gray-100 pt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <div className={`w-full h-full bg-blue-${i * 100 + 200}`} />
                </div>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Est. 1989</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
