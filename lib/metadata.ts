import type { Metadata } from "next";

export const SITE_URL = "https://protikdev.vercel.app";
export const SITE_NAME = "Rafiur Rahman Protik";
export const DEFAULT_DESCRIPTION =
  "Hey! I am Protik, a full-stack developer from Bangladesh.";
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
    title: fullTitle,
    description,
    authors: [{ name: SITE_NAME }],
    alternates: { canonical: canonicalUrl },
    icons: {
      shortcut: "/bracket.ico",
      apple: "/bracket.png",
    },
    twitter: {
      card: "summary",
      site: "@Protik111",
      creator: "@Protik111",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: fullTitle,
      title: fullTitle,
      description,
      url: canonicalUrl,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
