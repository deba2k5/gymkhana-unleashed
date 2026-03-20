const quickLinks = ["Home", "Societies", "Events", "Members", "FAQ"];
const socials = ["Instagram", "Twitter", "LinkedIn", "YouTube"];

const Footer = () => (
  <footer className="relative bg-foreground text-background py-16 px-6 overflow-hidden">
    {/* Bauhaus shapes in footer */}
    <div className="absolute top-8 right-12 w-32 h-32 bg-bauhaus-blue/15 bauhaus-circle" />
    <div className="absolute bottom-4 left-8 w-20 h-20 bg-bauhaus-yellow/10 rotate-45" />

    <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-bauhaus-red bauhaus-circle" />
          <h3 className="text-3xl font-bold uppercase">GYMKHANA</h3>
        </div>
        <p className="text-lg font-medium opacity-60">
          Institute of Engineering & Management
          <br />
          Kolkata, India
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold uppercase mb-4 opacity-80">Quick Links</h4>
        <ul className="space-y-2">
          {quickLinks.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-base font-medium uppercase opacity-50 transition-opacity hover:opacity-100"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold uppercase mb-4 opacity-80">Follow Us</h4>
        <div className="flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="px-4 py-2 text-sm font-bold uppercase glass-dark rounded-lg transition-all hover:bg-background/20"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="relative max-w-[1400px] mx-auto mt-12 pt-8 border-t border-background/15">
      <p className="text-center text-sm font-medium uppercase opacity-40">
        © 2025 IEM Gymkhana. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
