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
            gap: "0.85rem",
            marginBottom: "1.75rem",
            padding: "0.75rem 1rem",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            width: "fit-content",
          }}
        >
          <img
            src="/profile.JPG"
            alt="Protik"
            width={46}
            height={46}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              border: "1px solid var(--border)",
              flexShrink: 0,
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              Rafiur Rahman Protik
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "13px",
                margin: 0,
              }}
            >
              Software Engineer
            </p>
          </div>
        </div>

        {/* Intro text */}
        <div
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "var(--fg)",
            marginBottom: "1rem",
          }}
        >
          <p style={{ margin: "0 0 0.6rem" }}>
            hi, i&apos;m{" "}
            <strong>protik</strong> — a fullstack developer &amp; software engineer.{" "}
            <a
              href="https://github.com/Protik111"
              target="_blank"
              rel="noreferrer"
              className="btn-neo"
            >
              <FaGithub size={12} /> GitHub
            </a>
          </p>
          <p style={{ margin: "0 0 0.6rem" }}>
            i build scalable apps using{" "}
            <strong>TypeScript, React &amp; Node.js</strong>, always shipping.
          </p>
          <p style={{ margin: 0 }}>
            got an idea worth building?{" "}
            <a
              href="https://www.linkedin.com/in/rafiur-rahman-protik/"
              target="_blank"
              rel="noreferrer"
              className="btn-neo"
            >
              <FaLinkedin size={12} /> LinkedIn
            </a>{" "}
            OR{" "}
            <a
              href="mailto:rafiurprotik111@gmail.com"
              className="btn-neo"
            >
              <HiOutlineMail size={13} /> Email me
            </a>
          </p>
        </div>

        {/* GitHub contribution graph (static image from GitHub) */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://ghchart.rshah.org/737373/Protik111"
            alt="GitHub contribution chart"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              opacity: 0.85,
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <p
            className="mono"
            style={{
              color: "var(--muted)",
              marginTop: "0.5rem",
              marginBottom: 0,
              fontSize: "12px",
            }}
          >
            GitHub activity
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
