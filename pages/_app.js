import "../styles/global.css";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }) {
  return (
    <>

      {/* ── Top-center radial glow ──────────────────────────────────
          A subtle bloom behind the nav, blended softly.
      ─────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "820px",
          height: "620px",
          background:
            "radial-gradient(ellipse at center, rgba(110,100,255,0.09) 0%, rgba(160,140,255,0.04) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
