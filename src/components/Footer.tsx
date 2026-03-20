const quickLinks = ["Home", "Societies", "Events", "Members", "FAQ"];
const socials = ["Instagram", "Twitter", "LinkedIn", "YouTube"];

const Footer = () => (
  <footer className="bg-foreground text-background py-16 px-6">
    <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-3xl font-bold uppercase mb-4">GYMKHANA</h3>
        <p className="text-lg font-medium opacity-80">
          Institute of Engineering & Management
          <br />
          Kolkata, India
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold uppercase mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {quickLinks.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-lg font-semibold uppercase hover:text-neo-yellow transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold uppercase mb-4">Follow Us</h4>
        <div className="flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="px-4 py-2 text-sm font-bold uppercase bg-background text-foreground neo-border neo-shadow neo-shadow-hover border-background"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t-[3px] border-background/30">
      <p className="text-center text-sm font-semibold uppercase opacity-60">
        © 2025 IEM Gymkhana. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
