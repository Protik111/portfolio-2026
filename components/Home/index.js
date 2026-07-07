import React from "react";
import NextLink from "next/link";
import TechStack from "./Skills";
import { projectsData } from "../../data/projects/projects";
import ProjectCard from "./ProjectCard";

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
            {projectsData.map((project) => (
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
