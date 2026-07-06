import React from "react";
import Head from "next/head";

const Seo = ({
  title = "Rafiur Rahman Protik",
  description = "Hey! I am Protik, a full-stack developer from Bangladesh.",
  OGImage = "profile.JPG",
  OGType = "website",
  canonicalUrl = "https://protikdev.vercel.app/",
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Rafiur Rahman Protik`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Rafiur Rahman Protik" />
        <meta name="author" content="Protik" />
        <link rel="apple-touch-icon" href="/bracket.png" />
        <link rel="shortcut icon" href="/bracket.ico" type="image/x-icon" />

        {/* twitter metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Protik111" />
        <meta name="twitter:creator" content="@Protik111" />
        <meta name="twitter:title" content="Rafiur Rahman Protik" />
        <meta
          name="twitter:description"
          content="Hey! I am Protik, a full-stack developer from Bangladesh."
        />
        <meta name="twitter:image" content="/profile.JPG" />

        {/* canonical link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={OGType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OGImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:section" content={title} />
        <meta property="article:published_time" content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
