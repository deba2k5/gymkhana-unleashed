"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="w-10 h-10 border-2 border-primary bg-background" />
  );

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative w-10 h-10 flex items-center justify-center
        border-2 border-primary bg-background
        text-foreground transition-all duration-300
        hover:bg-yellow-400 hover:text-black
        brutalist-shadow-sm
      "
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {isDark ? (
          <Moon className="h-full w-full" />
        ) : (
          <Sun className="h-full w-full" />
        )}
      </div>
    </motion.button>
  );
}

