import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import CelestialLoader from "../components/Loader";

export default function Landing() {
  return (
    <React.Fragment>
      <CelestialLoader />
      <Seo title="Portfolio" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>
        <main>
          <Hero />
          <Home />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
