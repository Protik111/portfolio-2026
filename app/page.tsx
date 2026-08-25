import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Home from "../components/Home";
import Footer from "../components/Footer";
import CelestialLoader from "../components/Loader";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({ title: "Portfolio", path: "/" });

export default function Landing() {
  return (
    <>
      <CelestialLoader />
      <div className="min-h-screen bg-bg text-fg">
        <Header />
        <main>
          <Hero />
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}
