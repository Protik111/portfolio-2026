import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { buildMetadata } from "../lib/metadata";
import ScrollRestoration from "../components/ScrollRestoration";

export const metadata: Metadata = buildMetadata({ path: "/" });

// Sets data-theme on <html> before first paint, avoiding a flash of the
// wrong theme. Ported verbatim from pages/_document.js.
const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  } catch(e) {}
})();
`;

// Flags a real reload of the homepage before first paint, so the celestial
// loader (components/Loader) can be shown with zero flash. Never fires on a
// fresh navigation or client-side route change — only on an actual F5/hard
// refresh of "/". Self-clears after 6s as a safety net in case React never
// mounts to take over. Ported verbatim from pages/_document.js.
const RELOAD_LOADER_SCRIPT = `
(function() {
  try {
    if (window.location.pathname !== '/') return;
    var entries = performance.getEntriesByType && performance.getEntriesByType('navigation');
    var isReload = !!(entries && entries.length && entries[0].type === 'reload');
    if (!isReload && performance.navigation && performance.navigation.type === 1) {
      isReload = true;
    }
    if (isReload) {
      document.documentElement.classList.add('is-reload-loading');
      setTimeout(function () {
        document.documentElement.classList.remove('is-reload-loading');
      }, 6000);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: RELOAD_LOADER_SCRIPT }} />
        <ScrollRestoration />
        <div id="app-root">
          <div aria-hidden="true" className="top-glow" />
          {children}
        </div>
      </body>
    </html>
  );
}
