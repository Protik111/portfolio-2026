import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggleButton = ({ style = {} }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
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
      style={{
        background: "transparent",
        border: "1px solid var(--border)",
        borderRadius: "50%",
        width: 32,
        height: 32,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--muted)",
        transition: "color 0.15s, border-color 0.15s, background-color 0.15s",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.16, ease: "easeInOut" }}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isDark ? <FaSun size={13} /> : <FaMoon size={13} />}
          </motion.div>
        </AnimatePresence>
      )}
    </button>
  );
};

export default ThemeToggleButton;
