import NextLink from "next/link";
import React from "react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <React.Fragment>
      <Seo title="Not Found" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <Header />
        <main
          style={{
            paddingTop: "8rem",
            paddingBottom: "4rem",
            textAlign: "center",
          }}
        >
          <div className="container-narrow">
            <p className="mono" style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
              404
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Page not found
            </h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <NextLink href="/" passHref>
              <a className="btn-neo" style={{ fontSize: "14px", padding: "7px 18px" }}>
                ← Back home
              </a>
            </NextLink>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default NotFound;
