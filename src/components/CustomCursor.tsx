import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { resolvedTheme } = useTheme();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("data-cursor") === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden lg:block">
      {/* Outer Ring */}
      <motion.div
        className={`absolute w-8 h-8 border rounded-full ${
          resolvedTheme === "dark" ? "border-white" : "border-black"
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering
            ? resolvedTheme === "dark"
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.05)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
      {/* Inner Dot */}
      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default CustomCursor;
