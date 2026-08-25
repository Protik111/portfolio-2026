import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { projectsData } from "../../data/projects/projects";
import ProjectCard from "../../components/Home/ProjectCard";

export const metadata: Metadata = buildMetadata({ title: "Projects", path: "/projects" });

const Projects = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-wide">
          <h1 className="section-heading">Projects</h1>
          <p className="mb-8 text-sm text-muted">Things I&apos;ve built and shipped.</p>
          <div className="grid-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
