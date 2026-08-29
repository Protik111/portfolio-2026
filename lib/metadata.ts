import type { Metadata } from "next";

export const SITE_URL = "https://www.rafiurrahmanprotik.com";
export const SITE_NAME = "Rafiur Rahman Protik";
export const DEFAULT_DESCRIPTION =
  "Software engineer and full-stack developer from Bangladesh building scalable web apps with JavaScript, TypeScript, React, Node.js, and Next.js.";
export const DEFAULT_KEYWORDS = [
  "Rafiur Rahman Protik",
  "Protik",
  "Full Stack Developer",
  "Software Engineer",
  "Bangladesh developer",
  "Next.js developer",
  "React developer",
  "Node.js developer",
  "Portfolio",
  "JavaScript developer",
  "TypeScript developer",
];
const DEFAULT_OG_IMAGE = "/profile.jpeg";

/**
 * Builds a page's Metadata object for the App Router metadata API.
 * Replaces the old <Seo /> component (which rendered next/head tags) —
 * every page passes its own title/description/path the same way it used
 * to pass props to <Seo />.
 */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = new URL(path, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: fullTitle,
    description,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: canonicalUrl },
    icons: {
      shortcut: "/bracket.ico",
      apple: "/bracket.png",
      other: [{ rel: "icon", url: "/bracket.ico" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@Protik111",
      creator: "@Protik111",
      title: fullTitle,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonicalUrl,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
  };
}
