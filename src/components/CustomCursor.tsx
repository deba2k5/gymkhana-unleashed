import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { resolvedTheme } = useTheme();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hoverCheck = (e: MouseEvent) => {
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

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverCheck);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverCheck);
    };
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden lg:block">

      {/* 🔥 OUTER AMBIENT GLOW (very soft, wide) */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 380 : 300,
          height: isHovering ? 380 : 300,
          opacity: isHovering ? 0.45 : 0.3,
          backgroundColor: isDark
            ? "rgba(168,85,247,0.5)"
            : "rgba(250,204,21,0.5)",
        }}
        transition={{ duration: 0.1 }}
      />

      {/* 🔥 MID GLOW (main visible layer) */}
      <motion.div
        className="absolute rounded-full blur-[70px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 240 : 200,
          height: isHovering ? 240 : 200,
          opacity: isHovering ? 0.7 : 0.55,
          background: isDark
            ? "radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(168,85,247,0.5) 40%, transparent 80%)"
            : "radial-gradient(circle, rgba(250,204,21,0.9) 0%, rgba(250,204,21,0.5) 40%, transparent 80%)",
        }}
        transition={{ duration: 0.08 }}
      />

    </div>
  );
};

export default CustomCursor;