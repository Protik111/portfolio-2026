"use client";

import { useState, useEffect, type CSSProperties } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggleButton = ({ style = {} }: { style?: CSSProperties }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deliberate client-only mount flag: the sun/moon icon depends on
    // localStorage + matchMedia, which don't exist during SSR, so we can't
    // know which icon to render until after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const val = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", val);
    localStorage.setItem("theme", val);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-transparent text-muted transition-colors duration-150 cursor-pointer"
      style={style}
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.16, ease: "easeInOut" }}
            className="absolute flex items-center justify-center"
          >
            {isDark ? (
              <FaSun
                size={13}
                style={{
                  color: "#fbbf24",
                  filter: "drop-shadow(0 0 6px rgba(251, 191, 36, 0.6)",
                }}
              />
            ) : (
              <FaMoon
                size={13}
                style={{
                  color: "#7c3aed",
                  filter: "drop-shadow(0 0 6px rgba(124, 58, 237, 0.45)",
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </button>
  );
};

export default ThemeToggleButton;
