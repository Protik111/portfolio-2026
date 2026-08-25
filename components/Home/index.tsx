import Link from "next/link";
import TechStack from "./Skills";
import { projectsData } from "../../data/projects/projects";
import ProjectCard from "./ProjectCard";
import { experiencesData } from "../../data/experience/data";
import { blogsData } from "../../data/blogs/blogs";
import type { Experience, BlogPost } from "../../lib/types";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";

/* ── Shared section header ──────────────────────────────────────── */
const SectionHeader = ({ title, href }: { title: string; href: string }) => (
  <div className="mb-6 flex items-baseline justify-between">
    <h2 className="section-heading mb-0">{title}</h2>
    <Link href={href} className="inline-flex items-center gap-1 text-[13px] text-muted transition-colors duration-150">
      View All ↗
    </Link>
  </div>
);

/* ── Compact experience row ─────────────────────────────────────── */
const ExperienceRow = ({ item, isLast }: { item: Experience; isLast: boolean }) => (
  <div
    className="flex gap-4"
    style={{
      paddingBottom: isLast ? 0 : "1.25rem",
      borderBottom: isLast ? "none" : "1px solid var(--border)",
      marginBottom: isLast ? 0 : "1.25rem",
    }}
  >
    {/* logo + line */}
    <div className="flex shrink-0 flex-col items-center pt-0.5">
      {item.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.logo}
          alt={item.company}
          className="h-9 w-9 shrink-0 rounded-md border border-border bg-bg object-contain p-[3px]"
        />
      ) : (
        <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-fg" />
      )}
      {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
    </div>

    {/* content */}
    <div className="min-w-0 flex-1">
      <div className="mb-[3px] flex flex-wrap items-start justify-between gap-1">
        <span className="text-sm font-semibold text-fg">
          {item.role}
          {" · "}
          <a
            href={item.company_url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-muted no-underline transition-colors duration-150"
          >
            {item.company}
          </a>
        </span>
        <span className="mono font-mono text-[11px] whitespace-nowrap text-muted">
          {item.start_date} – {item.end_date}
        </span>
      </div>

      <p className="mono m-0 mb-2 font-mono text-[12.5px] text-muted">
        📍 {item.location} · {item.employment_type}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {item.tech_stack.map((tech, i) => (
          <span key={i} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ── Compact blog card ──────────────────────────────────────────── */
const BlogCard = ({ item }: { item: BlogPost }) => (
  <a href={item.href} target="_blank" rel="noopener noreferrer" className="card block no-underline">
    {item.cover_image && (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={item.cover_image} alt={item.title} className="block h-40 w-full object-cover" />
    )}
    <div className="px-5 py-4">
      <h3 className="mb-1.5 text-[14.5px] leading-[1.4] font-semibold text-fg">{item.title}</h3>
      <p className="mono mb-1.5 text-[11.5px] text-muted">{item.date}</p>
      {item.subtitle && <p className="mb-3 text-[12.5px] leading-[1.5] text-muted">{item.subtitle}</p>}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => (
            <span key={i} className="badge">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </a>
);

const contactLinks = [
  {
    href: "mailto:rafiurprotik111@gmail.com",
    label: "Send an email",
    icon: <HiOutlineMail size={17} color="#7c3aed" />,
    iconBg: "rgba(124,58,237,0.10)",
    target: undefined,
  },
  {
    href: "https://www.linkedin.com/in/rafiur-rahman-protik/",
    label: "LinkedIn",
    icon: <FaLinkedin size={16} color="#0077B5" />,
    iconBg: "rgba(0,119,181,0.10)",
    target: "_blank",
  },
  {
    href: "https://calendly.com/rafiurprotik111",
    label: "Book a call",
    icon: <BsCalendar2Check size={15} color="#00a3ff" />,
    iconBg: "rgba(0,163,255,0.10)",
    target: "_blank",
  },
];

const educationEntries = [
  {
    logo: "/images/education/aiub.png",
    alt: "AIUB",
    name: "American International University-Bangladesh",
    degree: "BSc in Computer Science & Engineering",
    years: "2017 – 2021",
  },
  {
    logo: "/images/education/baf.png",
    alt: "BAF Shaheen College",
    name: "BAF Shaheen College, Dhaka",
    degree: "Higher Secondary School Certificate (HSC)",
    years: "2014 – 2016",
  },
];

/* ── Home composite component ───────────────────────────────────── */
const Home = () => {
  return (
    <>
      {/* ── Projects ── */}
      <section className="pb-14">
        <div className="container-wide">
          <SectionHeader title="Projects" href="/projects" />
          <div className="grid-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="pb-14">
        <div className="container-wide">
          <SectionHeader title="Experience" href="/experience" />
          <div className="rounded-xl border border-border bg-card-bg p-6">
            {experiencesData.map((item, i) => (
              <ExperienceRow key={i} item={item} isLast={i === experiencesData.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Education ── */}
      <section className="pb-14">
        <div className="container-wide">
          <SectionHeader title="Education" href="#" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {educationEntries.map((edu) => (
              <div key={edu.name} className="card flex-row items-start gap-5 p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={edu.logo}
                  alt={edu.alt}
                  className="h-[52px] w-[52px] shrink-0 rounded-lg border border-border bg-bg object-contain p-1"
                />
                <div>
                  <h3 className="mb-[3px] text-sm leading-[1.35] font-bold text-fg">{edu.name}</h3>
                  <p className="mb-1.5 text-[13px] text-muted">{edu.degree}</p>
                  <span className="mono inline-block rounded-full border border-border bg-bg px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    {edu.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blogs ── */}
      <section className="pb-14">
        <div className="container-wide">
          <SectionHeader title="Blogs" href="/blogs" />
          <div className="grid-2">
            {blogsData.slice(0, 4).map((item, i) => (
              <BlogCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Connect ── */}
      <section className="pb-16">
        <div className="container-narrow">
          <hr className="divider" />
          <div className="flex flex-col gap-5">
            <div>
              <p className="mono mb-2 text-xs text-muted">Start here</p>
              <h2 className="mb-4 font-serif text-[1.85rem] leading-[1.3] font-bold text-fg">
                Let&apos;s build something <em>great</em> together.
              </h2>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map(({ href, label, icon, iconBg, target }) => (
                  <a
                    key={label}
                    href={href}
                    target={target}
                    rel={target ? "noreferrer" : undefined}
                    className="btn-neo gap-2 rounded-[10px] py-[7px] pr-[14px] pl-[7px] text-sm font-medium"
                  >
                    <span
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]"
                      style={{ background: iconBg }}
                    >
                      {icon}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
