import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

import { projectsData } from "../data/projects/projects";
import ProjectCard from "../components/Home/ProjectCard";

const Projects = () => {
  return (
    <React.Fragment>
      <Seo title="Projects" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>
        <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="container-wide">
            <h1 className="section-heading">Projects</h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "14px" }}>
              Things I&apos;ve built and shipped.
            </p>
            <div className="grid-2">
              {projectsData.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Projects;
