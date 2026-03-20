import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dot-grid">
      <div className="text-center p-12 premium-card max-w-lg mx-6">
        <h1 className="mb-6 text-9xl font-black text-gray-900 tracking-tighter">404</h1>
        <p className="mb-8 text-xl text-gray-500 font-medium">This page seems to have escaped the perimeter.</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-gray-900 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
        >
          Return to Hub
        </a>
      </div>
    </div>
  );
};

export default NotFound;
