import React from "react";
import NextLink from "next/link";
import TechStack from "./Skills";

// Placeholder projects — will be replaced with real data later
const featuredProjects = [
  {
    title: "Content Processing Platform",
    description:
      "Scalable, event-driven microservices platform for high-throughput content processing using RabbitMQ, NestJS, and TypeScript.",
    tags: ["NestJS", "TypeScript", "RabbitMQ", "Docker"],
    link: "https://github.com/Protik111",
  },
  {
    title: "Collaborative Document System",
    description:
      "Real-time collaborative editor with block-based content, full-text search, and WebSocket synchronization.",
    tags: ["Next.js", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://github.com/Protik111",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, featuring a clean design system inspired by minimalist aesthetics.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/Protik111",
  },
  {
    title: "Auth Microservice",
    description:
      "Robust authentication microservice with JWT, refresh tokens, role-based access control, and secure session management.",
    tags: ["Node.js", "TypeScript", "Prisma", "Redis"],
    link: "https://github.com/Protik111",
  },
];

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="card"
    style={{ display: "block", padding: "1.1rem 1.25rem", textDecoration: "none" }}
  >
    <h3
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: "15px",
        margin: "0 0 0.4rem",
        color: "var(--fg)",
      }}
    >
      {project.title}
    </h3>
    <p
      style={{
        color: "var(--muted)",
        fontSize: "13.5px",
        lineHeight: "1.6",
        margin: "0 0 0.75rem",
      }}
    >
      {project.description}
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {project.tags.map((t) => (
        <span
          key={t}
          className="mono"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "1px 7px",
            fontSize: "11.5px",
            color: "var(--muted)",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </a>
);

const Home = () => {
  return (
    <>
      {/* Projects Section */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="container-wide">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
            }}
          >
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              Projects
            </h2>
            <NextLink
              href="/projects"
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View All ↗
            </NextLink>
          </div>
          <div className="grid-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Contact / Connect Section */}
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
                Let&apos;s build something{" "}
                <em>great</em> together.
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
