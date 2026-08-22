import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* Inline script to set data-theme before first paint to avoid flash */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var stored = localStorage.getItem('theme');
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var dark = stored === 'dark' || (!stored && prefersDark);
                    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
                  } catch(e) {}
                })();
              `,
            }}
          />
          {/* Inline script to flag a real reload of the homepage before first
              paint, so the celestial loader (components/Loader) can be shown
              with zero flash. Never fires on a fresh navigation or on
              client-side route changes — only on an actual F5/hard refresh
              of "/". Self-clears after 6s as a safety net in case React
              never mounts to take over. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
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
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
