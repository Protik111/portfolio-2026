import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { caseStudiesData } from "../../data/caseStudies/caseStudies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  path: "/case-studies",
});

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-narrow">
          <h1 className="section-heading">Case Studies</h1>
          <p className="mb-8 text-sm text-muted">
            Engineering decisions, trade-offs, and system thinking behind the
            work.
          </p>

          <div className="flex flex-col gap-6">
            {caseStudiesData.map((study) => (
              <article key={study.slug} className="card p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="badge">{study.category}</span>
                  <span className="mono text-[11px] text-muted">
                    Engineering Case Study
                  </span>
                </div>

                <h2 className="mb-2 text-[1.35rem] font-bold text-fg">
                  {study.title}
                </h2>
                <p className="mb-4 text-sm leading-[1.7] text-muted">
                  {study.summary}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-fg/80">
                      Challenge
                    </h3>
                    <p className="text-sm leading-[1.7] text-muted">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-fg/80">
                      Solution
                    </h3>
                    <p className="text-sm leading-[1.7] text-muted">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-fg/80">
                    Impact
                  </h3>
                  <p className="mb-4 text-sm leading-[1.7] text-muted">
                    {study.impact}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-fg/80">
                    Key points
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-[1.7] text-muted">
                    {study.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {study.stack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
