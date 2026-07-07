import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import ThemeToggleButton from "../../utils/ThemeToggleButton";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false); // controls render
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    handleClose();
  }, [router.pathname]);

  const handleOpen = () => {
    setVisible(true);
    // tiny delay so the element is mounted before transition fires
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)));
  };

  const handleClose = () => {
    setMenuOpen(false);
    // wait for CSS transition to finish before unmounting
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 280);
  };

  const toggle = () => (visible ? handleClose() : handleOpen());

  return (
    <>
      {/* ── Desktop pill nav ── */}
      <nav className="header-desktop" style={{ position: "fixed", top: "1rem", left: "50%", transform: "translateX(-50%)", zIndex: 100 }}>
        <div
          className="pill-nav"
          style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.10)" : "0 1px 8px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s ease" }}
        >
          {navLinks.map((link) => (
            <NextLink key={link.href} href={link.href} className={router.pathname === link.href ? "active" : ""}>
              {link.label}
            </NextLink>
          ))}
          <div style={{ width: 1, height: 18, background: "var(--border)", margin: "0 4px" }} />
          <ThemeToggleButton />
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <nav
        className="header-mobile"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0.6rem 1.25rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "var(--bg)",
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: "blur(12px)",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <NextLink href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/bracket.png"
            alt="Protik"
            style={{ width: 32, height: 32, objectFit: "contain", opacity: 0.85 }}
          />
        </NextLink>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ThemeToggleButton />
          <button
            onClick={toggle}
            aria-label="Toggle menu"
            style={{
              background: "var(--card-bg)", border: "1px solid var(--border)",
              borderRadius: "8px", width: 36, height: 36,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--fg)", transition: "background 0.15s, transform 0.2s ease",
              transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown — always rendered when visible, animated via opacity+transform ── */}
      {visible && (
        <div
          className="header-mobile"
          style={{
            position: "fixed", top: "52px", left: 0, right: 0, zIndex: 99,
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
            padding: "0.75rem 1.25rem 1rem",
            display: "flex", flexDirection: "column", gap: "2px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            // animated properties
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          {navLinks.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              style={{
                padding: "10px 12px", borderRadius: "8px",
                fontSize: "15px",
                fontWeight: router.pathname === link.href ? 600 : 500,
                color: router.pathname === link.href ? "var(--fg)" : "var(--muted)",
                background: router.pathname === link.href ? "var(--card-bg)" : "transparent",
                border: router.pathname === link.href ? "1px solid var(--border)" : "1px solid transparent",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {link.label}
            </NextLink>
          ))}
        </div>
      )}

      <style>{`
        .header-desktop { display: flex !important; }
        .header-mobile  { display: none  !important; }

        @media (max-width: 720px) {
          .header-desktop { display: none  !important; }
          .header-mobile  { display: flex  !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
