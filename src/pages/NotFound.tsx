import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, LifeBuoy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-2xl">
          <div className="inline-flex mb-8">
            <div className="bg-yellow-400 px-6 py-2 border-[3px] border-primary brutalist-shadow transition-colors">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-black">
                SYSTEM ERROR _ 404
              </span>
            </div>
          </div>

          <h1 className="font-space font-black uppercase tracking-tighter mb-6 leading-none" style={{ fontSize: "clamp(6rem, 15vw, 12rem)" }}>
            LOST<br />
            <span className="text-outline-primary" style={{ WebkitTextStroke: "2px var(--primary)", color: "transparent" }}>SOUL.</span>
          </h1>

          <p className="text-xl font-bold uppercase tracking-tight text-foreground/60 mb-12 max-w-md mx-auto leading-relaxed transition-colors">
            THE PAGE AT <code className="bg-primary/10 px-2 py-1 text-primary">{location.pathname}</code> HAS DISAPPEARED INTO THE DIGITAL VOID.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/" 
              className="group flex items-center gap-3 px-8 py-4 bg-yellow-400 border-[3px] border-primary text-black font-black uppercase tracking-widest hover:bg-white hover:-translate-y-1 transition-all brutalist-shadow active:translate-y-0 active:shadow-none"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Return to Hub
            </Link>
            
            <Link 
              to="/societies" 
              className="flex items-center gap-3 px-8 py-4 border-[3px] border-primary text-foreground font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all brutalist-shadow"
            >
              <LifeBuoy className="w-5 h-5" />
              Get Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
