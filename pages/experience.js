import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import experiencesData from "../data/experience/data.json";

const mentoringData = [
  {
    role: "Teaching Assistant",
    company: "American International University-Bangladesh",
    company_url: "https://www.aiub.edu",
    logo: "/images/experience/aiub.svg",
    start_date: "Sep 2021",
    end_date: "Dec 2021",
    duration: null,
    location: "Dhaka, Bangladesh",
    work_type: "On-site",
    employment_type: "Part-time",
    role_description: [
      "Assigned primary classroom and laboratory responsibility.",
      "Assisted students with their coding problems and debugging.",
    ],
    tech_stack: [],
  },
  {
    role: "Mentor",
    company: "Tech Serve4 U",
    company_url: "https://techserve4u.com/",
    logo: "/images/experience/techserve4u.jpeg",
    start_date: "Jul 2023",
    end_date: "Aug 2024",
    duration: null,
    location: "Remote",
    work_type: "Remote",
    employment_type: "Part-time",
    role_description: [
      "Conducted MERN program, delivered content and live sessions.",
      "Assisted students with technical guidance and real-time problem solving.",
    ],
    tech_stack: [],
  },
];

/* ── Single unified card — works on all screen sizes ── */
const ExperienceCard = ({ item }) => (
  <div
    className="exp-card"
    style={{
      background: "var(--card-bg)",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      padding: "1.25rem 1.5rem",
      marginBottom: "1rem",
      transition: "border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
      display: "flex",
      gap: "1.25rem",
      alignItems: "flex-start",
    }}
  >
    {item.logo && (
      <img
        src={item.logo}
        alt={item.company}
        style={{
          width: "48px",
          height: "48px",
          objectFit: "contain",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--bg)",
          padding: "4px",
          flexShrink: 0,
          marginTop: "4px",
        }}
      />
    )}
    <div style={{ flex: 1, minWidth: 0 }}>
      {/* Top row: role + badge */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "4px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-sans)", margin: 0, color: "var(--fg)" }}>
          {item.role}
        </h2>
        <span style={{
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          color: "var(--muted)",
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "2px 10px",
          whiteSpace: "nowrap",
        }}>
          {item.employment_type}
        </span>
      </div>

      {/* Company link */}
      <a
        href={item.company_url}
        target="_blank"
        rel="noreferrer"
        className="company-link"
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--muted)",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "4px",
          transition: "color 0.15s",
        }}
      >
        {item.company} ↗
      </a>

      {/* Date + location row */}
      <p style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "var(--font-mono)", margin: "0 0 1rem", opacity: 0.85, lineHeight: 1.6 }} suppressHydrationWarning>
        {item.start_date} – {item.end_date}
        {item.duration ? ` · ${item.duration}` : ""}
        &nbsp;·&nbsp; {item.location} &nbsp;·&nbsp; {item.work_type}
      </p>

      {/* Bullet points */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
        {item.role_description.map((desc, i) => (
          <li key={i} style={{ display: "flex", gap: "8px", fontSize: "13.5px", lineHeight: 1.7, color: "var(--fg)", alignItems: "flex-start" }}>
            <span style={{ color: "var(--muted)", flexShrink: 0, marginTop: "2px" }}>—</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      {item.tech_stack && item.tech_stack.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {item.tech_stack.map((tech, i) => (
            <span key={i} className="badge">{tech}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ── Section wrapper with heading ── */
const ExperienceSection = ({ title, subtitle, badge, items }) => (
  <div style={{ marginBottom: "3rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.4rem", flexWrap: "wrap" }}>
      <h2 className="section-heading" style={{ marginBottom: 0 }}>{title}</h2>
      {badge && (
        <span style={{
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          color: "var(--muted)",
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "3px 12px",
          whiteSpace: "nowrap",
        }}>
          {badge}
        </span>
      )}
    </div>
    <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>{subtitle}</p>
    <div>
      {items.map((item, i) => (
        <ExperienceCard key={i} item={item} />
      ))}
    </div>
  </div>
);

const Experience = () => (
  <React.Fragment>
    <Seo title="Experience" />

    <style>{`
      .exp-card:hover {
        border-color: var(--muted);
        transform: translateY(-2px);
        box-shadow: 0 6px 24px rgba(0,0,0,0.06);
      }
      [data-theme='dark'] .exp-card:hover {
        box-shadow: 0 6px 24px rgba(255,255,255,0.03);
      }
      .company-link:hover { color: var(--fg); }
    `}</style>

    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
      <header><Header /></header>

      <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="container-narrow">

          <ExperienceSection
            title="Experience"
            subtitle="Where I've worked and what I've shipped."
            items={experiencesData}
          />

          <ExperienceSection
            title="Mentoring"
            badge="Teaching & Guidance"
            subtitle="Sharing knowledge and guiding the next generation of developers."
            items={mentoringData}
          />

        </div>
      </main>

      <Footer />
    </div>
  </React.Fragment>
);

export default Experience;
