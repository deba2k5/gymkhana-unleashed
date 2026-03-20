import { useState } from "react";

const navItems = ["Home", "Societies", "Events", "Members", "FAQ"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background neo-border-thick border-t-0 border-l-0 border-r-0">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight uppercase select-none">
          GYMKHANA
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-sm font-bold uppercase tracking-wide neo-border bg-background transition-colors duration-100 hover:bg-foreground hover:text-background active:scale-95"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden neo-border p-2 bg-primary neo-shadow neo-shadow-hover active:scale-95"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden neo-border-thick border-l-0 border-r-0 bg-background">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 text-lg font-bold uppercase border-b-[3px] border-foreground transition-colors hover:bg-foreground hover:text-background"
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
