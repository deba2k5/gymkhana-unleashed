"use client";

import { useEffect, useState } from "react";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);

    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 4000);

    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-black overflow-hidden">

      {/* 🎬 VIDEO */}
      <video
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {isMobile ? (
          <source src="/gymkhana.mp4" type="video/mp4" />
        ) : (
          <source src="/gymkhana%28laptop%29.mp4" type="video/mp4" />
        )}
      </video>

      {/* ⏭️ SKIP BUTTON */}
      {showSkip && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={onFinish}
            className="
              px-6 py-2.5
              text-xs font-semibold uppercase tracking-widest
              rounded-full

              backdrop-blur-sm bg-white/10
              border-2 border-white

              text-white
              hover:bg-white hover:text-black

              transition-all duration-200
            "
          >
            Skip
          </button>
        </div>
      )}

    </div>
  );
};

export default Loader;