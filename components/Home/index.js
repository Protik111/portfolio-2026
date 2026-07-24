import React from "react";
import NextLink from "next/link";
import TechStack from "./Skills";
import { projectsData } from "../../data/projects/projects";
import ProjectCard from "./ProjectCard";
import experiencesData from "../../data/experience/data.json";
import { blogsData } from "../../data/blogs/blogs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";

/* ── Shared section header ──────────────────────────────────────── */
const SectionHeader = ({ title, href }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "1.5rem",
    }}
  >
    <h2 className="section-heading" style={{ marginBottom: 0 }}>
      {title}
    </h2>
    <NextLink href={href} passHref>
      <a
        style={{
          fontSize: "13px",
          color: "var(--muted)",
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          transition: "color 0.15s",
        }}
      >
        View All ↗
      </a>
    </NextLink>
  </div>
);

/* ── Compact experience row ─────────────────────────────────────── */
const ExperienceRow = ({ item, isLast }) => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      paddingBottom: isLast ? 0 : "1.25rem",
      borderBottom: isLast ? "none" : "1px solid var(--border)",
      marginBottom: isLast ? 0 : "1.25rem",
    }}
  >
    {/* logo + line */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2px",
        flexShrink: 0,
      }}
    >
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.company}
          style={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            background: "var(--bg)",
            padding: "3px",
            flexShrink: 0,
          }}
        />
      ) : (
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--fg)",
            flexShrink: 0,
            marginTop: "12px",
          }}
        />
      )}
      {!isLast && (
        <div
          style={{
            width: "1px",
            flex: 1,
            background: "var(--border)",
            marginTop: "8px",
          }}
        />
      )}
    </div>

    {/* content */}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "4px",
          marginBottom: "3px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--fg)",
          }}
        >
          {item.role}
          {" · "}
          <a
            href={item.company_url}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--muted)",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            {item.company}
          </a>
        </span>
        <span
          style={{
            fontSize: "11px",
            fontFamily: "var(--font-mono)",
            color: "var(--muted)",
            whiteSpace: "nowrap",
          }}
        >
          {item.start_date} – {item.end_date}
        </span>
      </div>

      <p
        style={{
          fontSize: "12.5px",
          color: "var(--muted)",
          margin: "0 0 8px",
          fontFamily: "var(--font-mono)",
        }}
      >
        📍 {item.location} · {item.employment_type}
      </p>

      {/* Tech badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {item.tech_stack.map((tech, i) => (
          <span key={i} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ── Compact blog card ──────────────────────────────────────────── */
const BlogCard = ({ item }) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="card"
    style={{ display: "block", textDecoration: "none" }}
  >
    {item.cover_image && (
      <img
        src={item.cover_image}
        alt={item.title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          display: "block",
        }}
      />
    )}
    <div style={{ padding: "1rem 1.25rem" }}>
      <h3
        style={{
          fontWeight: 600,
          fontSize: "14.5px",
          margin: "0 0 0.4rem",
          color: "var(--fg)",
          lineHeight: 1.4,
        }}
      >
        {item.title}
      </h3>
      <p
        className="mono"
        style={{
          color: "var(--muted)",
          fontSize: "11.5px",
          margin: "0 0 0.4rem",
        }}
      >
        {item.date}
      </p>
      {item.subtitle && (
        <p
          style={{
            color: "var(--muted)",
            fontSize: "12.5px",
            margin: "0 0 0.75rem",
            lineHeight: 1.5,
          }}
        >
          {item.subtitle}
        </p>
      )}
      {item.tags && item.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {item.tags.map((tag, i) => (
            <span key={i} className="badge">{tag}</span>
          ))}
        </div>
      )}
    </div>
  </a>
);

/* ── Home composite component ───────────────────────────────────── */
const Home = () => {
  return (
    <>
      {/* ── Projects ── */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="container-wide">
          <SectionHeader title="Projects" href="/projects" />
          <div className="grid-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="container-wide">
          <SectionHeader title="Experience" href="/experience" />
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            {experiencesData.map((item, i) => (
              <ExperienceRow
                key={i}
                item={item}
                isLast={i === experiencesData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Education ── */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="container-wide">
          <SectionHeader title="Education" href="#" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {/* AIUB */}
            <div
              className="card"
              style={{ padding: "1.5rem", flexDirection: "row", gap: "1.25rem", alignItems: "flex-start" }}
            >
              <img
                src="/images/education/aiub.png"
                alt="AIUB"
                style={{
                  width: "52px",
                  height: "52px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  padding: "4px",
                  flexShrink: 0,
                }}
              />
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "14px", margin: "0 0 3px", color: "var(--fg)", lineHeight: 1.35 }}>
                  American International University-Bangladesh
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 6px" }}>
                  BSc in Computer Science & Engineering
                </p>
                <span
                  className="mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "20px",
                    padding: "2px 10px",
                    display: "inline-block",
                  }}
                >
                  2017 – 2021
                </span>
              </div>
            </div>

            {/* BAF Shaheen College */}
            <div
              className="card"
              style={{ padding: "1.5rem", flexDirection: "row", gap: "1.25rem", alignItems: "flex-start" }}
            >
              <img
                src="/images/education/baf.png"
                alt="BAF Shaheen College"
                style={{
                  width: "52px",
                  height: "52px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  padding: "4px",
                  flexShrink: 0,
                }}
              />
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "14px", margin: "0 0 3px", color: "var(--fg)", lineHeight: 1.35 }}>
                  BAF Shaheen College, Dhaka
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 6px" }}>
                  Higher Secondary School Certificate (HSC)
                </p>
                <span
                  className="mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "20px",
                    padding: "2px 10px",
                    display: "inline-block",
                  }}
                >
                  2014 – 2016
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blogs ── */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="container-wide">
          <SectionHeader title="Blogs" href="/blogs" />
          <div className="grid-2">
            {blogsData.slice(0, 4).map((item, i) => (
              <BlogCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      

      {/* ── Contact / Connect ── */}
      <section style={{ paddingBottom: "4rem" }}>
        <div className="container-narrow">
          <hr className="divider" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div>
              <p
                className="mono"
                style={{ color: "var(--muted)", marginBottom: "0.5rem", fontSize: "12px" }}
              >
                Start here
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.85rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  margin: "0 0 1rem",
                  color: "var(--fg)",
                }}
              >
                Let&apos;s build something <em>great</em> together.
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  {
                    href: "mailto:rafiurprotik111@gmail.com",
                    label: "Send an email",
                    icon: <HiOutlineMail size={17} color="#7c3aed" />,
                    iconBg: "rgba(124,58,237,0.10)",
                    target: undefined,
                  },
                  {
                    href: "https://www.linkedin.com/in/rafiur-rahman-protik/",
                    label: "LinkedIn",
                    icon: <FaLinkedin size={16} color="#0077B5" />,
                    iconBg: "rgba(0,119,181,0.10)",
                    target: "_blank",
                  },
                  {
                    href: "https://calendly.com/rafiurprotik111",
                    label: "Book a call",
                    icon: <BsCalendar2Check size={15} color="#00a3ff" />,
                    iconBg: "rgba(0,163,255,0.10)",
                    target: "_blank",
                  },
                ].map(({ href, label, icon, iconBg, target }) => (
                  <a
                    key={label}
                    href={href}
                    target={target}
                    rel={target ? "noreferrer" : undefined}
                    className="btn-neo"
                    style={{ padding: "7px 14px 7px 7px", borderRadius: "10px", fontWeight: 500, gap: "8px", fontSize: "14px" }}
                  >
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: "7px",
                      background: iconBg,
                      flexShrink: 0,
                    }}>
                      {icon}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
