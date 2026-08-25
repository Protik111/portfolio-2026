import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { experiencesData } from "../../data/experience/data";
import type { Experience } from "../../lib/types";

export const metadata: Metadata = buildMetadata({ title: "Experience", path: "/experience" });

const mentoringData: Experience[] = [
  {
    role: "Teaching Assistant",
    company: "American International University-Bangladesh",
    company_url: "https://www.aiub.edu",
    logo: "/images/experience/aiub.svg",
    start_date: "Sep 2021",
    end_date: "Dec 2021",
    duration: null,
    location: "Dhaka, Bangladesh",
    work_type: "On-site",
    employment_type: "Part-time",
    role_description: [
      "Assigned primary classroom and laboratory responsibility.",
      "Assisted students with their coding problems and debugging.",
    ],
    tech_stack: [],
  },
  {
    role: "Mentor",
    company: "Tech Serve4 U",
    company_url: "https://techserve4u.com/",
    logo: "/images/experience/techserve4u.jpeg",
    start_date: "Jul 2023",
    end_date: "Aug 2024",
    duration: null,
    location: "Remote",
    work_type: "Remote",
    employment_type: "Part-time",
    role_description: [
      "Conducted MERN program, delivered content and live sessions.",
      "Assisted students with technical guidance and real-time problem solving.",
    ],
    tech_stack: [],
  },
];

/* ── Single unified card — works on all screen sizes ── */
const ExperienceCard = ({ item }: { item: Experience }) => (
  <div className="exp-card mb-4 flex items-start gap-5 rounded-xl border border-border bg-card-bg p-6 transition-[border-color,transform,box-shadow] duration-150">
    {item.logo && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.logo}
        alt={item.company}
        className="mt-1 h-12 w-12 shrink-0 rounded-lg border border-border bg-bg object-contain p-1"
      />
    )}
    <div className="min-w-0 flex-1">
      {/* Top row: role + badge */}
      <div className="mb-1 flex flex-wrap items-start justify-between gap-1.5">
        <h2 className="m-0 font-sans text-[15px] font-bold text-fg">{item.role}</h2>
        <span className="mono rounded-full border border-border bg-bg px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap text-muted">
          {item.employment_type}
        </span>
      </div>

      {/* Company link */}
      <a
        href={item.company_url}
        target="_blank"
        rel="noreferrer"
        className="company-link mb-1 inline-block text-[13px] font-semibold text-muted no-underline transition-colors duration-150"
      >
        {item.company} ↗
      </a>

      {/* Date + location row */}
      <p className="mono m-0 mb-4 font-mono text-xs leading-[1.6] text-muted opacity-85" suppressHydrationWarning>
        {item.start_date} – {item.end_date}
        {item.duration ? ` · ${item.duration}` : ""}
        &nbsp;·&nbsp; {item.location} &nbsp;·&nbsp; {item.work_type}
      </p>

      {/* Bullet points */}
      <ul className="m-0 mb-4 flex list-none flex-col gap-2 p-0">
        {item.role_description.map((desc, i) => (
          <li key={i} className="flex items-start gap-2 text-[13.5px] leading-[1.7] text-fg">
            <span className="mt-0.5 shrink-0 text-muted">—</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      {item.tech_stack && item.tech_stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.tech_stack.map((tech, i) => (
            <span key={i} className="badge">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ── Section wrapper with heading ── */
const ExperienceSection = ({
  title,
  subtitle,
  badge,
  items,
}: {
  title: string;
  subtitle: string;
  badge?: string;
  items: Experience[];
}) => (
  <div className="mb-12">
    <div className="mb-1.5 flex flex-wrap items-center gap-3">
      <h2 className="section-heading mb-0">{title}</h2>
      {badge && (
        <span className="mono rounded-full border border-border bg-card-bg px-3 py-[3px] font-mono text-[11px] whitespace-nowrap text-muted">
          {badge}
        </span>
      )}
    </div>
    <p className="mb-6 text-sm text-muted">{subtitle}</p>
    <div>
      {items.map((item, i) => (
        <ExperienceCard key={i} item={item} />
      ))}
    </div>
  </div>
);

const Experience = () => (
  <div className="min-h-screen bg-bg text-fg">
    <Header />

    <main className="pt-24 max-[720px]:pt-16 pb-16">
      <div className="container-narrow">
        <ExperienceSection title="Experience" subtitle="Where I've worked and what I've shipped." items={experiencesData} />

        <ExperienceSection
          title="Mentoring"
          badge="Teaching & Guidance"
          subtitle="Sharing knowledge and guiding the next generation of developers."
          items={mentoringData}
        />
      </div>
    </main>

    <Footer />
  </div>
);

export default Experience;
