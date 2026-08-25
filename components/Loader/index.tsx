"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const EXIT_MS = 250; // must match the opacity transition in globals.css
const MIN_VISIBLE_MS = 500;

/**
 * Reload loader — a simple centered spinner on a solid (non-transparent)
 * background, shown only on the homepage, and only when the browser tab
 * was actually reloaded (F5 / hard refresh), never on a normal first visit
 * or client-side navigation between pages.
 *
 * Zero-flash technique: this component always renders its full markup (so
 * server and client hydration output match — no mismatch), but visibility
 * is gated purely by the `is-reload-loading` class on <html>, which an
 * inline script in app/layout.tsx sets *before* this HTML is even parsed.
 * That keeps this component itself hydration-safe while still painting
 * before the underlying page ever becomes visible.
 */
const CelestialLoader = () => {
  const [leaving, setLeaving] = useState(false);
  const [percent, setPercent] = useState(0);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("is-reload-loading")) return undefined;

    document.body.style.overflow = "hidden";

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / MIN_VISIBLE_MS);
      setPercent(Math.round(t * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        timeoutRef.current = setTimeout(() => {
          html.classList.remove("is-reload-loading");
          document.body.style.overflow = "";
        }, EXIT_MS);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`celestial-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <Image src="/bracket.png" alt="" className="celestial-logo" width={52} height={52} aria-hidden="true" />
      <p className="celestial-name">
        Compiling <span className="celestial-percent">{String(percent).padStart(2, "0")}%</span>
      </p>
    </div>
  );
};

export default CelestialLoader;
