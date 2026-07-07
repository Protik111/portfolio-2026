import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import ThemeToggleButton from "../../utils/ThemeToggleButton";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        className="pill-nav"
        style={{
          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.10)"
            : "0 1px 8px rgba(0,0,0,0.06)",
        }}
      >
        {navLinks.map((link) => (
          <NextLink
            key={link.href}
            href={link.href}
            className={router.pathname === link.href ? "active" : ""}
          >
            {link.label}
          </NextLink>
        ))}
        <div style={{ width: 1, height: 18, background: "var(--border)", margin: "0 4px" }} />
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Header;
