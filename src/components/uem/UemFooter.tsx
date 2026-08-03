"use client";

import { Link } from "react-router-dom";

const UemFooter = () => (
  <footer className="relative bg-background text-foreground pt-28 pb-12 px-6 lg:px-12 border-t-4 border-violet-600 overflow-hidden transition-colors">
    <div className="absolute bottom-0 left-0 select-none pointer-events-none overflow-hidden">
      <span
        className="font-space font-black tracking-tighter uppercase whitespace-nowrap text-foreground opacity-[0.03]"
        style={{ fontSize: "28vw", lineHeight: 0.85 }}
      >
        GYMKHANA
      </span>
    </div>

    <div className="relative max-w-[1400px] mx-auto z-10">
      <div className="flex items-center gap-5 mb-10">
        <Link
          to="/uem"
          className="w-20 h-20 bg-white border-2 border-violet-600 flex items-center justify-center brutalist-shadow hover:-rotate-6 transition-transform"
        >
          <span className="font-space font-black text-xl text-violet-600">UEM</span>
        </Link>

        <div>
          <h3
            className="font-space font-black tracking-tighter uppercase text-foreground"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", lineHeight: 0.9 }}
          >
            UEM STUDENT <span className="text-violet-500">GYMKHANA</span>
          </h3>

          <span className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase block mt-2">
            ALL DETAILS COMING SOON
          </span>
        </div>
      </div>

      <div className="pt-10 border-t-2 border-primary/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-[0.45em] text-foreground/35">
          © 2026 GYMKHANA_OS_V3.0
        </p>
      </div>
    </div>
  </footer>
);

export default UemFooter;
