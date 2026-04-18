"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { useReducedMotion } from "framer-motion";

const TYPING_DELAY_MIN_MS = 10;
const TYPING_DELAY_MAX_MS = 130;
const BACKSPACE_DELAY_MIN_MS = 30;
const BACKSPACE_DELAY_MAX_MS = 80;
const MISTAKE_PROBABILITY = 0.1;
const CURSOR_HANG_MS = 3000;

interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
}

const TypewriterText = ({ text, onComplete }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  // TIMING PARAMETERS 
  const getRandomDelay = () => Math.random() * (TYPING_DELAY_MAX_MS - TYPING_DELAY_MIN_MS) + TYPING_DELAY_MIN_MS;
  const getBackspaceDelay = () => Math.random() * (BACKSPACE_DELAY_MAX_MS - BACKSPACE_DELAY_MIN_MS) + BACKSPACE_DELAY_MIN_MS;

  // TYPO GENERATION
  const shouldMakeMistake = () => Math.random() < MISTAKE_PROBABILITY;

  const getRandomMistakeChars = () => {
    const numChars = Math.floor(Math.random() * 2) + 1; // 1 to 2
    const chars = "cljnuidshfwehfruhtgoirewngiore"; //natural typo letters
    let mistakes = "";
    for (let i = 0; i < numChars; i++) {
      mistakes += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return mistakes;
  };

  // EVENT HANDLERS
  const handleSkipAnimation = () => {
    setDisplayText(text);
    setIndex(text.length);
    setIsBackspacing(false);
    setIsComplete(true);
    if (onComplete) {
      onComplete();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.code === "Space" || e.code === "Enter") && !isComplete) {
      e.preventDefault();
      handleSkipAnimation();
    }
  };

  // MAIN TYPING EFFECT
  useEffect(() => {
    // instantly display all text when reduced motion is requested
    if (prefersReducedMotion) {
      setDisplayText(text);
      setIndex(text.length);
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
      return;
    }

    if (index < text.length && !isComplete) {
      let timeout: NodeJS.Timeout;

      if (isBackspacing) {
        // delete one character at a time
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setBackspaceCount((prev) => prev - 1);

          if (backspaceCount <= 1) {
            setIsBackspacing(false);
          }
        }, getBackspaceDelay());
      } else {
        // check for typo
        if (shouldMakeMistake() && text[index] !== " " && text[index] !== '"') {
          const mistakeChars = getRandomMistakeChars();
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev + mistakeChars);
            setBackspaceCount(mistakeChars.length);
            setIsBackspacing(true);
          }, getRandomDelay());
        } else {
          // type correct character
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev + text[index]);
            setIndex(index + 1);
          }, getRandomDelay());
        }
      }

      return () => clearTimeout(timeout);
    }

    if (index >= text.length && !isComplete) {
      // animation finished, mark complete
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [index, isBackspacing, backspaceCount, isComplete, text, prefersReducedMotion, onComplete]);

  useEffect(() => {
    if (isComplete) {
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, CURSOR_HANG_MS);
      return () => clearTimeout(cursorTimeout);
    }
  }, [isComplete]);

  return (
    <div
      className="relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Student Oath typewriter text"
    >
      {/* Hidden text for screen readers */}
      <span className="sr-only">{text}</span>

      {/* DESKTOP: Interactive text container with hover tooltip */}
      <div className="group cursor-pointer" onClick={handleSkipAnimation}>
        <div aria-hidden="true">
          <p className="font-space font-semibold text-foreground/80 text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.7] tracking-tight italic transition-colors">
            {displayText}
            {!isComplete && showCursor && (
              <span className="animate-hard-blink">|</span>
            )}
          </p>
        </div>

        {/* DESKTOP TOOLTIP: Shows on hover via group-hover (CSS-based, performant) */}
        {!isComplete && (
          <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-yellow-400 border-[2px] border-primary px-4 py-2 whitespace-nowrap brutalist-shadow">
              <span className="font-space font-black uppercase tracking-widest text-xs text-black">
                Press Space or Click to Skip
              </span>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE: Permanent skip button (visible on small screens) */}
      {!isComplete && (
        <div className="md:hidden mt-4 flex justify-end">
          <button
            onClick={handleSkipAnimation}
            className="bg-yellow-400 border-[2px] border-primary px-4 py-2 font-space font-black uppercase tracking-widest text-xs text-black hover:bg-yellow-300 transition-all brutalist-shadow"
          >
            Tap to skip
          </button>
        </div>
      )}
    </div>
  );
};

export default TypewriterText;
