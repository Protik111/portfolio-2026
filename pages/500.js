import React from "react";
import NextLink from "next/link";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Custom500 = () => {
  return (
    <React.Fragment>
      <Seo title="Internal Server Error" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <Header />
        <main
          style={{ paddingTop: "8rem", paddingBottom: "4rem", textAlign: "center" }}
        >
          <div className="container-narrow">
            <p className="mono" style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
              500
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Internal server error
            </h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
              Oops! Something unexpected happened.
            </p>
            <NextLink href="/" passHref>
              <a className="btn-neo" style={{ fontSize: "14px", padding: "7px 18px" }}>
                ← Back to safety
              </a>
            </NextLink>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Custom500;
