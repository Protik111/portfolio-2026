import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Home from "../components/Home";
import Footer from "../components/Footer";
import CelestialLoader from "../components/Loader";
import JsonLd from "../components/SeoJsonLd";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  buildMetadata,
} from "../lib/metadata";
import { profiles } from "../utils/profiles";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  path: "/",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Software Engineer",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpeg`,
  email: "mailto:rafiurprotik111@gmail.com",
  sameAs: profiles
    .map((profile) => profile.link)
    .filter((link) => !link.startsWith("mailto:")),
  knowsAbout: [
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: SITE_NAME,
  },
};

export default function Landing() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
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
