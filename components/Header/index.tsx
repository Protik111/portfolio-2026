"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false); // controls render
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOpen = () => {
    setVisible(true);
    // tiny delay so the element is mounted before transition fires
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)));
  };

  const handleClose = () => {
    setMenuOpen(false);
    // wait for CSS transition to finish before unmounting
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 280);
  };

  const toggle = () => (visible ? handleClose() : handleOpen());

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate: close the mobile menu whenever the route changes
    handleClose();
  }, [pathname]);

  return (
    <>
      {/* ── Desktop pill nav ── */}
      <nav className="header-desktop fixed top-4 left-1/2 z-[100] -translate-x-1/2">
        <div
          className="pill-nav transition-shadow duration-200"
          style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.10)" : "0 1px 8px rgba(0,0,0,0.06)" }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>
              {link.label}
            </Link>
          ))}
          <div className="mx-1 h-[18px] w-px bg-border" />
          <ThemeToggleButton />
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <nav
        className="header-mobile fixed top-0 right-0 left-0 z-[100] flex items-center justify-between px-5 py-2.5 bg-bg backdrop-blur-md transition-[border-color,box-shadow] duration-200"
        style={{
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <Link href="/" className="flex items-center">
          <Image src="/bracket.png" alt="Protik" width={32} height={32} className="object-contain opacity-85" />
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <button
            onClick={toggle}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card-bg text-fg transition-[background,transform] duration-200"
            style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown — always rendered when visible, animated via opacity+transform ── */}
      {visible && (
        <div
          className="header-mobile fixed top-[52px] right-0 left-0 z-[99] flex flex-col gap-0.5 border-b border-border bg-bg px-5 pt-3 pb-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-[opacity,transform] duration-250"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-[15px] transition-[background,color] duration-150"
                style={{
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--fg)" : "var(--muted)",
                  background: active ? "var(--card-bg)" : "transparent",
                  border: active ? "1px solid var(--border)" : "1px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;
