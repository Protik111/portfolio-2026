import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        <p className="mono" style={{ color: "var(--muted)", marginBottom: "1.75rem" }}>
          {time || "──:──:── (GMT+6)"}
        </p>

        {/* Bio Card */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          {/* Left: avatar + name */}
          <img
            src="/profile.jpeg"
            alt="Protik"
            width={52}
            height={52}
            style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid var(--border)", flexShrink: 0 }}
          />
          <div>
            <p style={{ fontWeight: 600, fontSize: "16px", color: "var(--fg)", margin: 0 }}>
              Rafiur Rahman Protik
            </p>
            <p style={{ color: "var(--muted)", fontSize: "14px", margin: 0 }}>
              Full-stack Software Engineer &amp; DevOps Enthusiast
            </p>
          </div>
        </div>

        {/* Intro text */}
        <div style={{ fontSize: "15.5px", lineHeight: "1.8", color: "var(--fg)", marginBottom: "2rem" }}>
          <p style={{ margin: "0 0 1rem" }}>
            I&apos;m a passionate Full-stack Software Engineer with <strong>4+ years of experience</strong> building scalable,
            production-ready applications and cloud-native solutions. My expertise spans{" "}
            <strong>React.js, Next.js, TypeScript, Node.js, Docker, AWS, CI/CD, and microservices architecture</strong>.
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            I focus on solving real-world problems with clean code, scalable design, and cost-efficient cloud solutions.
            From video streaming platforms to containerized microservices, I enjoy tackling complex technical challenges
            and building systems that scale.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {[
              {
                href: "https://github.com/Protik111",
                label: "GitHub",
                icon: <FaGithub size={16} color="#24292e" />,
                iconBg: "rgba(36,41,46,0.10)",
                target: "_blank",
              },
              {
                href: "https://www.linkedin.com/in/rafiur-rahman-protik/",
                label: "LinkedIn",
                icon: <FaLinkedin size={16} color="#0077B5" />,
                iconBg: "rgba(0,119,181,0.10)",
                target: "_blank",
              },
              {
                href: "mailto:rafiurprotik111@gmail.com",
                label: "Email me",
                icon: <HiOutlineMail size={17} color="#7c3aed" />,
                iconBg: "rgba(124,58,237,0.10)",
                target: undefined,
              },
            ].map(({ href, label, icon, iconBg, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target ? "noreferrer" : undefined}
                className="btn-neo"
                style={{ padding: "7px 14px 7px 7px", borderRadius: "10px", fontWeight: 500, gap: "8px" }}
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

        {/* Cards below */}
        <div style={{ marginTop: "3.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", paddingBottom: "2rem" }}>

          {/* Terminal Card */}
          <div style={{
            background: "#0d1117",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            fontFamily: "var(--font-mono)"
          }}>
            <div style={{ padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid #30363d" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <div style={{ marginLeft: "10px", fontSize: "12px", color: "#8b949e" }}>protik@env: ~</div>
            </div>
            <div style={{ padding: "1.25rem", fontSize: "13.5px", lineHeight: "1.7", color: "#c9d1d9", overflowX: "auto" }}>
              <p style={{ margin: "0 0 0.5rem" }}><span style={{ color: "#7ee787" }}>$</span> whoami</p>
              <p style={{ margin: "0 0 1rem", color: "#8b949e" }}>Full-stack Software Engineer</p>
              <p style={{ margin: "0 0 0.5rem" }}><span style={{ color: "#7ee787" }}>$</span> ./deploy --env production</p>
              <p style={{ margin: 0, color: "#8b949e" }}>
                [OK] Packaging microservices...<br />
                [OK] Provisioning AWS infrastructure...<br />
                <span style={{ color: "#79c0ff" }}>➜ System successfully deployed to production!</span>
              </p>
            </div>
          </div>

          {/* Current Status Card */}
          <div style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 8px #22c55e" }} />
              <h3 style={{ margin: 0, fontSize: "15px", fontWeight: "600", color: "var(--fg)" }}>Current Status</h3>
            </div>
            <div style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: "1.6" }}>
              <p style={{ margin: "0 0 0.5rem" }}><strong style={{ color: "var(--fg)" }}>✓</strong> Actively building scalable microservices and cloud-native solutions.</p>
              <p style={{ margin: "0 0 0.5rem" }}><strong style={{ color: "var(--fg)" }}>✓</strong> Exploring event-driven architectures with RabbitMQ.</p>
              <p style={{ margin: 0 }}><strong style={{ color: "var(--fg)" }}>✓</strong> Architecting highly available distributed systems.</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
            {[
              { label: "Years Exp.", value: "4+" },
              { label: "Microservices", value: "3+" },
              { label: "Cloud Platforms", value: "AWS" },
            ].map((stat) => (
              <div key={stat.label} style={{ padding: "1rem 1.25rem", borderLeft: "3px solid var(--fg)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "28px", fontWeight: "700", color: "var(--fg)", marginBottom: "2px" }}>{stat.value}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
