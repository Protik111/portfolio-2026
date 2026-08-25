"use client";

import { useEffect } from "react";

/**
 * Sets manual scroll restoration on mount — ported from the top of
 * pages/_app.js, which ran this as a module-level side effect.
 */
export default function ScrollRestoration() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
