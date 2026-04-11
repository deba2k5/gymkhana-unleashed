import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { societiesDetails } from "../data/societiesDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SocietiesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Handle scroll to hash on load
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-yellow-400 selection:text-black flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-[1400px] mx-auto px-6 lg:px-12 py-32 md:py-48 w-full">
        <div className="mb-24 text-center lg:text-left max-w-4xl relative">
          <Link to="/" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors group mb-8">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <br/>

          <div className="inline-flex px-4 py-1.5 border-[3px] border-black bg-yellow-400 brutalist-shadow mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
              Official Hub
            </span>
          </div>
          
          <h1 className="font-space font-black tracking-tighter text-black mb-8 leading-[0.85]" style={{ fontSize: "clamp(3.5rem,8vw,7rem)" }}>
            THE <br /><span className="text-outline">SOCIETIES.</span>
          </h1>
          <p className="font-space text-xl md:text-2xl text-black/70 font-bold leading-relaxed max-w-2xl">
            Detailed insights into the organizations that drive technical excellence and cultural vibrancy at IEM.
          </p>
        </div>

        <div className="space-y-40">
          {societiesDetails.map((society) => (
            <div 
              key={society.id} 
              id={society.id} 
              className="scroll-mt-32 w-full grid lg:grid-cols-[1fr_3fr] gap-16 md:gap-24 items-start border-t-[4px] border-black pt-24"
            >
              {/* Sticky sidebar for society title */}
              <div className="lg:sticky lg:top-40">
                <div className="w-16 h-16 bg-white p-2 border-[3px] border-black brutalist-shadow mb-8 transition-transform hover:rotate-6">
                  <img src="/iem-3d-logo.png" alt="IEM Logo" className="w-full h-full object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                </div>
                <div className="w-12 h-2 mb-8 bg-black" />
                <h2 className="text-4xl md:text-5xl font-space font-black text-black tracking-tighter mb-6 leading-none uppercase">
                  {society.name}
                </h2>
                <div className="inline-flex px-3 py-1.5 border-[3px] border-black text-[10px] font-black uppercase tracking-[0.2em] text-black mb-10 bg-white">
                  Active Club
                </div>
                
                <div className="hidden lg:block">
                  <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.2em] mb-6">Directory</p>
                  <ul className="space-y-4 flex flex-col items-start">
                    {societiesDetails.map(s => (
                      <li key={s.id}>
                        <Link 
                          to={`#${s.id}`} 
                          className={`text-sm font-space font-black uppercase tracking-widest transition-all ${society.id === s.id ? 'text-black border-b-2 border-black pb-1' : 'text-black/40 hover:text-black hover:border-b-2 hover:border-black/40'}`}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content block */}
              <div className="prose prose-slate prose-lg md:prose-xl max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: society.content }} 
                  className="space-y-10 text-black/80 leading-relaxed font-sans
                    [&>h2]:text-4xl [&>h2]:font-space [&>h2]:font-black [&>h2]:text-black [&>h2]:tracking-tighter [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:uppercase [&>h2]:text-[1.8rem]
                    [&>h3]:text-2xl [&>h3]:font-space [&>h3]:font-black [&>h3]:text-black [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:uppercase [&>h3]:tracking-tight
                    [&>p]:font-bold [&>p]:leading-relaxed [&>p]:text-black/70
                    [&>ul]:space-y-4 [&>ul]:list-none [&>ul>li]:pl-8 [&>ul>li]:relative [&>ul>li]:font-bold [&>ul>li]:text-black/70
                    [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-3 [&>ul>li]:before:w-3 [&>ul>li]:before:h-3 [&>ul>li]:before:border-[2px] [&>ul>li]:before:border-black [&>ul>li]:before:bg-yellow-400"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocietiesPage;
