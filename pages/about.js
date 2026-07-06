import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <React.Fragment>
      <Seo title="About" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>
        <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="container-narrow">
            <h1 className="section-heading">About</h1>

            {/* Profile Card */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <img
                src="/profile.JPG"
                alt="Rafiur Rahman Protik"
                width={140}
                height={140}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  border: "1px solid var(--border)",
                  flexShrink: 0,
                }}
              />
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    margin: "0 0 0.25rem",
                  }}
                >
                  Rafiur Rahman Protik
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "14px", margin: "0 0 1rem" }}>
                  Software Engineer · Fullstack Developer
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <a
                    href="https://github.com/Protik111"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neo"
                  >
                    <FaGithub size={12} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rafiur-rahman-protik/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neo"
                  >
                    <FaLinkedin size={12} /> LinkedIn
                  </a>
                  <a href="mailto:rafiurprotik111@gmail.com" className="btn-neo">
                    ✉ Email
                  </a>
                </div>
              </div>
            </div>

            <hr className="divider" />

            {/* About text */}
            <div style={{ lineHeight: 1.8, fontSize: "15px" }}>
              <p style={{ marginBottom: "1rem" }}>
                👨‍🎓 I&apos;m a Software Engineer specializing in full-stack development
                with JavaScript and TypeScript. I work extensively with Node.js, Express.js,
                NestJS, and Next.js — building scalable, production-ready applications.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                🚀 I have deep experience with databases like MongoDB and PostgreSQL, and enjoy
                working with Prisma as an ORM. On the frontend, I use React.js, Redux, and
                React Query. I also work with Docker, cloud technologies, and CI/CD pipelines.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                💡 I&apos;m passionate about clean architecture, developer tooling, and meaningful
                software. Always shipping, always learning.
              </p>

              {/* Open for roles card */}
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📢</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "16px", margin: "0 0 0.4rem" }}>
                    Open for roles
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: "14px", margin: 0 }}>
                    As a fullstack developer, I&apos;m eager for new opportunities across
                    frontend and backend — full-time or freelance. Let&apos;s connect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
