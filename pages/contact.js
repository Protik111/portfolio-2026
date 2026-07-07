import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar2Check } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <React.Fragment>
      <Seo title="Contact" />

      <style>{`
        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 22px;
          font-size: 14.5px;
          font-family: var(--font-sans);
          font-weight: 500;
          background: var(--card-bg);
          color: var(--fg);
          border: 1px solid var(--border);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .contact-btn:hover {
          border-color: var(--muted);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
        }
        [data-theme='dark'] .contact-btn:hover {
          box-shadow: 0 6px 20px rgba(255,255,255,0.04);
        }
        .contact-btn:active {
          transform: translateY(0);
        }
        .contact-btn .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          flex-shrink: 0;
        }
        .contact-btn .btn-arrow {
          margin-left: auto;
          color: var(--muted);
          flex-shrink: 0;
        }
        .contact-option {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .contact-option-label {
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-option-desc {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>

        <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="container-narrow">

            {/* Heading */}
            <p className="mono" style={{ color: "var(--muted)", marginBottom: "0.75rem" }}>
              Start here
            </p>
            <h1 className="section-heading" style={{ marginBottom: "0.75rem" }}>
              Let&apos;s build something <em>great</em> together.
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "14.5px", marginBottom: "3rem", lineHeight: 1.7 }}>
              Whether you have a project in mind, want to collaborate, or just want to say hi — I&apos;m always happy to connect.
            </p>

            {/* Two action cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              {/* Book a call */}
              <div
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                }}
                className="exp-card"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "rgba(0, 163, 255, 0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <BsCalendar2Check size={22} color="#00a3ff" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: "15px" }}>Book a free call</p>
                    <p className="contact-option-desc">30-min intro session — no strings attached.</p>
                  </div>
                </div>
                <a
                  href="https://calendly.com/rafiurprotik111"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                  id="btn-book-call"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    Schedule on Calendly
                    <FiArrowUpRight size={16} />
                  </span>
                </a>
              </div>

              {/* Send an email */}
              <div
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                }}
                className="exp-card"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "rgba(124, 58, 237, 0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <HiOutlineMail size={24} color="#7c3aed" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: "15px" }}>Send an email</p>
                    <p className="contact-option-desc">rafiurprotik111@gmail.com</p>
                  </div>
                </div>
                <a
                  href="mailto:rafiurprotik111@gmail.com"
                  className="contact-btn"
                  id="btn-send-email"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    Open mail
                    <HiOutlineMail size={15} />
                  </span>
                </a>
              </div>

            </div>

            {/* Divider + response note */}
            <div style={{
              marginTop: "3rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "12px",
              borderLeft: "3px solid var(--border)",
              background: "var(--card-bg)",
            }}>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "13.5px", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--fg)" }}>Typical response time:</strong> I usually reply within 24 hours. For urgent matters, booking a call is the fastest way to connect.
              </p>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
