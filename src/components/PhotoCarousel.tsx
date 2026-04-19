import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, Pause, Play, Expand } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo, Variants } from "framer-motion";

interface PhotoCarouselProps {
  images: string[];
  eventName: string;
  basePath?: string;
}

export default function PhotoCarousel({ images, eventName, basePath = "/events" }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const dragProgress = useTransform(dragX, [-200, 0, 200], [1, 0, -1]);

  const total = images.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + total) % total);
  }, [total]);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || lightbox) return;
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, [autoPlay, lightbox, go]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [go]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
    }),
  };

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  return (
    <>
      {/* ─── MAIN CAROUSEL ─── */}
      <div ref={containerRef} className="relative">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[3px] bg-primary transition-colors" />
            <span className="text-[11px] font-black tracking-[0.45em] uppercase text-foreground/40 transition-colors">
              PHOTO GALLERY
            </span>
          </div>
        </div>

        {/* Main display area */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 items-stretch">
          {/* Previous thumbnail - hidden on mobile */}
          <div className="hidden lg:block col-span-2 h-full">
            <button
              onClick={() => go(-1)}
              className="group relative w-full h-full overflow-hidden border-[3px] border-primary/20 hover:border-primary transition-all"
              style={{ boxShadow: "3px 3px 0 0 var(--primary)" }}
            >
              <img
                src={`${basePath}/${images[prevIdx]}`}
                alt={`${eventName} - Previous`}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </button>
          </div>

          {/* Main image */}
          <div className="col-span-12 lg:col-span-8">
            <div
              className="relative overflow-hidden border-[3px] border-primary aspect-[16/10] bg-black"
              style={{ boxShadow: "6px 6px 0 0 var(--primary)" }}
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  onClick={() => setLightbox(true)}
                >
                  <img
                    src={`${basePath}/${images[current]}`}
                    alt={`${eventName} - Photo ${current + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.style.background = "#111";
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlays */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Next thumbnail - hidden on mobile */}
          <div className="hidden lg:block col-span-2 h-full">
            <button
              onClick={() => go(1)}
              className="group relative w-full h-full overflow-hidden border-[3px] border-primary/20 hover:border-primary transition-all"
              style={{ boxShadow: "3px 3px 0 0 var(--primary)" }}
            >
              <img
                src={`${basePath}/${images[nextIdx]}`}
                alt={`${eventName} - Next`}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 z-50 w-12 h-12 border-2 border-white/20 bg-black/50 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-50 px-4 py-2 border-2 border-white/20 bg-black/50 font-space font-black text-sm text-white/80 tracking-widest">
              <span className="text-yellow-400">{String(current + 1).padStart(2, "0")}</span>
              <span className="text-white/20 mx-1">/</span>
              {String(total).padStart(2, "0")}
            </div>

            {/* Lightbox nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-4 lg:left-8 z-50 w-14 h-14 border-2 border-white/20 bg-black/50 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-4 lg:right-8 z-50 w-14 h-14 border-2 border-white/20 bg-black/50 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
                  src={`${basePath}/${images[current]}`}
                  alt={`${eventName} - Photo ${current + 1}`}
                  className="max-w-full max-h-[85vh] object-contain border-[3px] border-white/10"
                  style={{ boxShadow: "0 0 60px rgba(0,0,0,0.5)" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </AnimatePresence>
            </div>

            {/* Lightbox thumbnail strip */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 px-6">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); goTo(i); }}
                  className={`shrink-0 w-14 h-10 lg:w-20 lg:h-14 overflow-hidden border-2 transition-all ${i === current ? "border-yellow-400 opacity-100" : "border-white/10 opacity-40 hover:opacity-70"
                    }`}
                >
                  <img
                    src={`${basePath}/${img}`}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
