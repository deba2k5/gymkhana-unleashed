import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CardCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // matching the 4000ms from PhotoCarousel
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.img
        key={current}
        src={`/events/${images[current]}`}
        alt="Event thumbnail"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    </AnimatePresence>
  );
}
