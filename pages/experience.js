import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import experiencesData from "../data/experience/data.json";

/* ── tiny inline styles reused across cards ─────────────────────── */
const styles = {
  page: {
    minHeight: "100vh",
    background: "var(--bg)",
    color: "var(--fg)",
  },
  main: {
    paddingTop: "6rem",
    paddingBottom: "4rem",
  },
  subtitle: {
    color: "var(--muted)",
    fontSize: "14px",
    marginBottom: "2.5rem",
  },
  /* timeline wrapper */
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },
  /* single entry row */
  entry: {
    display: "grid",
    gridTemplateColumns: "160px 24px 1fr",
    gap: "0 24px",
    position: "relative",
  },
  /* left column – dates */
  dateCol: {
    paddingTop: "1.6rem",
    textAlign: "right",
  },
  dateRange: {
    fontSize: "12px",
    fontFamily: "var(--font-mono)",
    color: "var(--muted)",
    lineHeight: 1.5,
  },
  duration: {
    fontSize: "11px",
    fontFamily: "var(--font-mono)",
    color: "var(--muted)",
    marginTop: "4px",
    opacity: 0.7,
  },
  /* centre column – vertical line + dot */
  lineCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--fg)",
    marginTop: "1.75rem",
    flexShrink: 0,
    zIndex: 1,
  },
  line: {
    width: "1px",
    flex: 1,
    background: "var(--border)",
  },
  /* right column – card */
  card: {
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginTop: "1rem",
    marginBottom: "1.5rem",
    transition: "border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
  },
  companyRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "6px",
  },
  role: {
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: "var(--font-sans)",
    margin: 0,
  },
  employmentBadge: {
    fontSize: "11px",
    fontFamily: "var(--font-mono)",
    color: "var(--muted)",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    padding: "2px 10px",
    whiteSpace: "nowrap",
  },
  companyLink: {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--muted)",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "2px",
    transition: "color 0.15s",
  },
  location: {
    fontSize: "12px",
    color: "var(--muted)",
    fontFamily: "var(--font-mono)",
    marginBottom: "1rem",
    opacity: 0.8,
  },
  bulletList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  bullet: {
    display: "flex",
    gap: "8px",
    fontSize: "13.5px",
    lineHeight: 1.7,
    color: "var(--fg)",
    alignItems: "flex-start",
  },
  bulletDot: {
    color: "var(--muted)",
    flexShrink: 0,
    marginTop: "2px",
  },
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "4px",
  },
};

const ExperienceCard = ({ item, isLast }) => (
  <div style={styles.entry}>
    {/* ── LEFT: dates ── */}
    <div style={styles.dateCol}>
      <p style={styles.dateRange}>
        {item.start_date}
        <br />
        {item.end_date}
      </p>
      {item.duration && <p style={styles.duration}>{item.duration}</p>}
    </div>

    {/* ── CENTRE: dot + line ── */}
    <div style={styles.lineCol}>
      <div style={styles.dot} />
      {!isLast && <div style={styles.line} />}
    </div>

    {/* ── RIGHT: card ── */}
    <div
      style={styles.card}
      className="exp-card"
    >
      {/* Company + employment type */}
      <div style={styles.companyRow}>
        <h2 style={styles.role}>{item.role}</h2>
        <span style={styles.employmentBadge}>{item.employment_type}</span>
      </div>

      <a
        href={item.company_url}
        target="_blank"
        rel="noreferrer"
        style={styles.companyLink}
        className="company-link"
      >
        {item.company} ↗
      </a>

      <p style={styles.location}>
        📍 {item.location} &nbsp;·&nbsp; {item.work_type}
      </p>

      {/* Bullet points */}
      <ul style={styles.bulletList}>
        {item.role_description.map((desc, i) => (
          <li key={i} style={styles.bullet}>
            <span style={styles.bulletDot}>—</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack badges */}
      <div style={styles.techRow}>
        {item.tech_stack.map((tech, i) => (
          <span key={i} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Mobile-friendly fallback (stacked layout) ──────────────────── */
const ExperienceCardMobile = ({ item }) => (
  <div
    style={{
      background: "var(--card-bg)",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      padding: "1.25rem",
      marginBottom: "1.25rem",
    }}
    className="exp-card"
  >
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "4px" }}>
      <h2 style={{ ...styles.role, fontSize: "14px" }}>{item.role}</h2>
      <span style={styles.employmentBadge}>{item.employment_type}</span>
    </div>

    <a href={item.company_url} target="_blank" rel="noreferrer" style={styles.companyLink}>
      {item.company} ↗
    </a>

    <p style={{ ...styles.location, marginBottom: "0.5rem" }}>
      {item.start_date} – {item.end_date}
      {item.duration ? ` · ${item.duration}` : ""}
    </p>
    <p style={{ ...styles.location, marginTop: 0 }}>
      📍 {item.location} · {item.work_type}
    </p>

    <ul style={styles.bulletList}>
      {item.role_description.map((desc, i) => (
        <li key={i} style={styles.bullet}>
          <span style={styles.bulletDot}>—</span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>

    <div style={styles.techRow}>
      {item.tech_stack.map((tech, i) => (
        <span key={i} className="badge">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <React.Fragment>
      <Seo title="Experience" />

      <style>{`
        /* card hover */
        .exp-card:hover {
          border-color: var(--muted);
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.06);
        }
        [data-theme='dark'] .exp-card:hover {
          box-shadow: 0 6px 24px rgba(255,255,255,0.03);
        }
        .company-link:hover {
          color: var(--fg);
        }
        /* show desktop timeline on md+, hide on mobile */
        .exp-desktop { display: block; }
        .exp-mobile  { display: none;  }
        @media (max-width: 660px) {
          .exp-desktop { display: none;  }
          .exp-mobile  { display: block; }
        }
      `}</style>

      <div style={styles.page}>
        <header>
          <Header />
        </header>

        <main style={styles.main}>
          <div className="container-narrow">
            <h1 className="section-heading">Experience</h1>
            <p style={styles.subtitle}>
              Where I&apos;ve worked and what I&apos;ve shipped.
            </p>

            {/* ── Desktop: timeline layout ── */}
            <div className="exp-desktop" style={styles.timeline}>
              {experiencesData.map((item, i) => (
                <ExperienceCard
                  key={i}
                  item={item}
                  isLast={i === experiencesData.length - 1}
                />
              ))}
            </div>

            {/* ── Mobile: stacked cards ── */}
            <div className="exp-mobile">
              {experiencesData.map((item, i) => (
                <ExperienceCardMobile key={i} item={item} />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Experience;
