import React from "react";
import NextLink from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { profiles } from "../utils/profiles";

const Links = () => {
  return (
    <React.Fragment>
      <Seo title="Links" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>
        <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="container-narrow">
            <h1 className="section-heading">Links</h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "14px" }}>
              Connect with me across the web.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
              {profiles.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neo"
                  style={{
                    justifyContent: "center",
                    padding: "10px 16px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Links;
