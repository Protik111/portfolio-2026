import React from "react";
import NextLink from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ paddingBottom: "2.5rem" }}>
      <div className="container-wide">
        <hr className="divider" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              margin: 0,
            }}
          >
            Rafiur Rahman Protik &copy; {year}
          </p>
          <nav style={{ display: "flex", gap: "1.25rem" }}>
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/blogs", label: "Blogs" },
              { href: "/contact", label: "Contact" },
              { href: "/resume", label: "Resume" },
            ].map((link) => (
              <NextLink key={link.href} href={link.href} passHref>
                <a
                  style={{
                    fontSize: "12.5px",
                    color: "var(--muted)",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
                >
                  {link.label}
                </a>
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
