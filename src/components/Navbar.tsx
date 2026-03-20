import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Societies", "Events", "Members", "FAQ"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-4 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm" : "py-6 bg-transparent"
    }`}>
      <div className="flex items-center justify-between px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 select-none group">
          <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 p-1 transition-all duration-500 group-hover:rotate-6 group-hover:shadow-md">
            <img src="/iem-3d-logo.png" alt="IEM Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">
            GYMKHANA<span className="text-blue-600">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-nowrap">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : item === "Societies" ? "/societies" : item === "Members" ? "/members" : item === "FAQ" ? "/faq" : `#${item.toLowerCase()}`;
            return (
              <li key={item}>
                <a
                  href={path}
                  className="relative text-xs font-black text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-[0.15em] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#"
              className="px-6 py-2.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/10"
            >
              Portal
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-[60] text-center flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 p-2 text-gray-900"
        >
          <X className="w-8 h-8" />
        </button>
        {navItems.map((item) => (
          <a
            key={item}
            href={item === "Societies" ? "/societies" : `#${item.toLowerCase()}`}
            onClick={() => setMobileOpen(false)}
            className="text-4xl font-black text-gray-900 hover:text-blue-600 transition-colors uppercase tracking-tight"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
