import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Dhaka",
        }) + " (GMT+6)"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
      <div className="container-narrow">
        {/* Live clock */}
        <p
          className="mono"
          style={{ color: "var(--muted)", marginBottom: "1.75rem" }}
        >
          {time || "──:──:── (GMT+6)"}
        </p>

        {/* Bio Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src="/profile.jpeg"
            alt="Protik"
            width={52}
            height={52}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "1px solid var(--border)",
              flexShrink: 0,
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 600,
                fontSize: "16px",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              Rafiur Rahman Protik
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "14px",
                margin: 0,
              }}
            >
              Full-stack Software Engineer & DevOps Enthusiast
            </p>
          </div>
        </div>

        {/* Intro text */}
        <div
          style={{
            fontSize: "15.5px",
            lineHeight: "1.8",
            color: "var(--fg)",
            marginBottom: "2rem",
          }}
        >
          <p style={{ margin: "0 0 1rem" }}>
            I’m a passionate Full-stack Software Engineer building scalable, production-ready applications and cloud-native solutions. My expertise spans <strong>React.js, Next.js, TypeScript, Node.js, Docker, AWS, CI/CD, and microservices architecture</strong>.
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            I focus on solving real-world problems with clean code, scalable design, and cost-efficient cloud solutions. From video streaming platforms to containerized microservices, I enjoy tackling complex technical challenges and building systems that scale.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <a
              href="https://github.com/Protik111"
              target="_blank"
              rel="noreferrer"
              className="btn-neo"
            >
              <FaGithub size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rafiur-rahman-protik/"
              target="_blank"
              rel="noreferrer"
              className="btn-neo"
            >
              <FaLinkedin size={15} /> LinkedIn
            </a>
            <a
              href="mailto:rafiurprotik111@gmail.com"
              className="btn-neo"
            >
              <HiOutlineMail size={16} /> Email me
            </a>
          </div>
        </div>

        {/* GitHub contribution graph */}
        <div
          style={{
            marginTop: "2.5rem",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
          }}
        >
          <div 
            style={{ 
              padding: "0.85rem 1.25rem", 
              borderBottom: "1px solid var(--border)", 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              background: "var(--bg)"
            }}
          >
            <FaGithub size={15} color="var(--fg)" />
            <h3 style={{ margin: 0, fontSize: '14.5px', fontWeight: '600', color: 'var(--fg)' }}>
              Commits & Activity
            </h3>
          </div>
          <div style={{ padding: "1.25rem", overflowX: "auto" }}>
            <img
              src="https://ghchart.rshah.org/737373/Protik111"
              alt="Protik111's GitHub chart"
              style={{
                minWidth: "750px",
                width: "100%",
                display: "block",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
