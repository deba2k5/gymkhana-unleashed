import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { societiesDetails } from "../data/societiesDetails";

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
    <div className="min-h-screen bg-background dot-grid font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="flex h-16 items-center px-6 md:px-12 max-w-[1400px] mx-auto">
          <Link to="/" className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="mb-24 text-center lg:text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
            Official Documentation
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.85]">
            THE <br /><span className="text-gray-300">SOCIETIES.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Detailed insights into the organizations that drive technical excellence and cultural vibrancy at IEM.
          </p>
        </div>

        <div className="space-y-40">
          {societiesDetails.map((society) => (
            <div 
              key={society.id} 
              id={society.id} 
              className="scroll-mt-32 w-full grid lg:grid-cols-[1fr_3fr] gap-16 md:gap-24 items-start border-t border-gray-100 pt-24"
            >
              {/* Sticky sidebar for society title */}
              <div className="lg:sticky lg:top-32">
                <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm border border-gray-100 mb-8 transition-transform hover:rotate-6">
                  <img src="/iem-3d-logo.png" alt="IEM Logo" className="w-full h-full object-contain" />
                </div>
                <div className="w-12 h-1.5 mb-8 rounded-full bg-blue-600" />
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
                  {society.name}
                </h2>
                <div className="inline-flex px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-10">
                  Active Member Club
                </div>
                
                <div className="hidden lg:block">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Directory</p>
                  <ul className="space-y-4">
                    {societiesDetails.map(s => (
                      <li key={s.id}>
                        <Link 
                          to={`#${s.id}`} 
                          className={`text-sm font-bold uppercase tracking-widest transition-colors ${society.id === s.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-900'}`}
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
                  className="space-y-10 text-gray-800/80 leading-relaxed 
                    [&>h2]:text-4xl [&>h2]:font-black [&>h2]:text-gray-900 [&>h2]:tracking-tight [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:uppercase [&>h2]:text-[1.8rem]
                    [&>h3]:text-2xl [&>h3]:font-black [&>h3]:text-gray-900 [&>h3]:mt-12 [&>h3]:mb-6
                    [&>p]:font-medium [&>p]:leading-relaxed
                    [&>ul]:space-y-3 [&>ul]:list-none [&>ul>li]:pl-6 [&>ul>li]:relative 
                    [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-1/2 [&>ul>li]:before:-translate-y-1/2 [&>ul>li]:before:w-2 [&>ul>li]:before:h-2 [&>ul>li]:before:bg-blue-600 [&>ul>li]:before:rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SocietiesPage;
