import React from "react";
import Link from "next/link";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { blogsData } from "../../data/blogs/blogs";

const Blog = () => {
  return (
    <React.Fragment>
      <Seo title="Blogs" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>
        <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="container-wide">
            <h1 className="section-heading">Blogs</h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "14px" }}>
              Things I think about and write down.
            </p>
            <div className="grid-2">
              {blogsData?.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  {item.cover_image && (
                    <img
                      src={item.cover_image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  )}
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        margin: "0 0 0.4rem",
                        color: "var(--fg)",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mono"
                      style={{
                        color: "var(--muted)",
                        fontSize: "12px",
                        margin: "0 0 0.5rem",
                      }}
                    >
                      {item.date}
                    </p>
                    {item.subtitle && (
                      <p
                        style={{
                          color: "var(--muted)",
                          fontSize: "13px",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                  </div>
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

export default Blog;
