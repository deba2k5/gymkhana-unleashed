import { useState } from "react";

const navItems = ["Home", "Societies", "Events", "Members", "FAQ"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        {/* Logo with Bauhaus circle accent */}
        <a href="#" className="flex items-center gap-3 select-none group">
          <div className="w-9 h-9 bg-bauhaus-red bauhaus-circle transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-foreground">
            GYMKHANA
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-5 py-2.5 text-sm font-semibold uppercase tracking-wide rounded-lg text-foreground/70 transition-all duration-200 hover:text-foreground hover:bg-foreground/5 neumorph-sm hover:neumorph active:neumorph-inset active:scale-97"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden neumorph-sm rounded-lg p-2.5 bg-card transition-all active:neumorph-inset"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : "mb-1"}`} />
          {!mobileOpen && <div className="w-5 h-0.5 bg-foreground mb-1" />}
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong mx-4 mb-4 rounded-lg overflow-hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 text-lg font-semibold uppercase border-b border-border/30 text-foreground/80 transition-colors hover:text-foreground hover:bg-foreground/5"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
