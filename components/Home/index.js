import React from "react";
import NextLink from "next/link";
import TechStack from "./Skills";
import { projectsData } from "../../data/projects/projects";
import ProjectCard from "./ProjectCard";
import experiencesData from "../../data/experience/data.json";
import { blogsData } from "../../data/blogs/blogs";

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
    <NextLink
      href={href}
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
    {/* dot + line */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--fg)",
          flexShrink: 0,
        }}
      />
      {!isLast && (
        <div
          style={{
            width: "1px",
            flex: 1,
            background: "var(--border)",
            marginTop: "6px",
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
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {item.subtitle}
        </p>
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

      {/* ── Tech Stack ── */}
      <TechStack />

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
                <a
                  href="mailto:rafiurprotik111@gmail.com"
                  className="btn-neo"
                  style={{ fontSize: "14px", padding: "6px 16px" }}
                >
                  ✉ Send an email
                </a>
                <a
                  href="https://www.linkedin.com/in/rafiur-rahman-protik/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neo"
                  style={{ fontSize: "14px", padding: "6px 16px" }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
