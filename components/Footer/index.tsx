import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-10">
      <div className="container-wide">
        <hr className="divider" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="m-0 text-[13px] text-muted">Rafiur Rahman Protik &copy; {year}</p>
          <nav className="flex gap-5">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12.5px] text-muted transition-colors duration-150 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
