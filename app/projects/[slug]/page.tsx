import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { TechStackBadges } from "../../../components/TechStackBadges";
import { buildMetadata } from "../../../lib/metadata";
import { projectsData } from "../../../data/projects/projects";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return buildMetadata({ title: "Project Not Found", path: "/projects" });
  }

  return buildMetadata({
    title: project.title,
    description: project.caseStudy?.summary ?? project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-fg">
        <Header />
        <main className="pt-24 max-[720px]:pt-16 pb-16">
          <div className="container-narrow">
            <h1 className="section-heading">Project not found</h1>
            <Link href="/projects" className="btn-neo inline-flex">
              Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-wide">
          <Link
            href="/projects"
            className="mb-4 inline-flex text-sm text-muted"
          >
            ← Back to projects
          </Link>

          <article className="card overflow-hidden">
            <div className="border-b border-border p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="badge">{project.status}</span>
                <span className="mono text-[11px] text-muted">
                  Engineering Case Study
                </span>
              </div>

              <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images.light}
                  alt={project.title}
                  className="block h-[260px] w-full object-cover md:h-[420px]"
                />
              </div>

              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-bg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-muted inline-flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
                  </svg>
                  {project.caseStudy?.stack?.[0] ?? "System Design"}
                </span>
                <span className="rounded-full border border-border bg-bg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-muted inline-flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 17.5a4.5 4.5 0 0 1-9 0V5h18v12.5a4.5 4.5 0 0 1-9 0"></path>
                    <path d="M9 6.5v5m6-5v5"></path>
                  </svg>
                  {project.caseStudy?.stack?.[1] ?? "Architecture"}
                </span>
                <span className="rounded-full border border-border bg-bg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-muted inline-flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
                    <polyline points="10 17 14 13 10 9"></polyline>
                  </svg>
                  {project.caseStudy?.stack?.[2] ?? "Product"}
                </span>
              </div>

              <h1 className="mb-3 text-3xl font-bold text-fg md:text-4xl">
                {project.title}
              </h1>
              <p className="max-w-4xl text-base leading-[1.9] text-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-border bg-card-bg px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-fg/40"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-border bg-card-bg px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-fg/40"
                  >
                    YouTube ↗
                  </a>
                )}
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-border bg-card-bg px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-fg/40"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            {caseStudy && (
              <div className="space-y-8 p-6 md:p-8">
                <section>
                  <h2 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-fg/80">
                    Summary
                  </h2>
                  <p className="text-base leading-[1.9] text-muted">
                    {caseStudy.summary}
                  </p>
                </section>

                <div className="grid gap-8 md:grid-cols-2">
                  <section>
                    <h2 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-fg/80">
                      Challenge
                    </h2>
                    <p className="text-base leading-[1.9] text-muted">
                      {caseStudy.challenge}
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-fg/80">
                      Solution
                    </h2>
                    <p className="text-base leading-[1.9] text-muted">
                      {caseStudy.solution}
                    </p>
                  </section>
                </div>

                <section>
                  <h2 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-fg/80">
                    Impact
                  </h2>
                  <p className="text-base leading-[1.9] text-muted">
                    {caseStudy.impact}
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-lg font-semibold uppercase tracking-[0.08em] text-fg/80">
                    What mattered most
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-[1.9] text-muted">
                    {caseStudy.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-border bg-card-bg p-5 md:p-6">
                  <h2 className="mb-3 text-lg font-semibold uppercase tracking-[0.08em] text-fg/80">
                    Stack & Project Category
                  </h2>

                  <div className="mb-4">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.08em] text-muted">
                      Category
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-border bg-bg px-3 py-1.5 text-sm font-medium text-fg">
                        {project.caseStudy?.stack?.[0]
                          ? "System Design"
                          : "Software Engineering"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.08em] text-muted">
                      Stack
                    </p>
                    <TechStackBadges stack={caseStudy.stack} />
                  </div>
                </section>
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
