"use client";

interface Skill {
  name: string;
  iconURL: string;
}

interface TechStackSection {
  title: string;
  skills: Skill[];
}

const techStackSections: TechStackSection[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", iconURL: "/assets/javascript.svg" },
      { name: "TypeScript", iconURL: "/assets/typescript.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", iconURL: "/assets/react.svg" },
      { name: "Redux", iconURL: "/assets/redux.svg" },
      { name: "Next.js", iconURL: "/assets/next-js.svg" },
      { name: "React Query", iconURL: "/assets/react-query.png" },
      { name: "Ant Design", iconURL: "/assets/ant-design.svg" },
      { name: "Shadcn UI", iconURL: "/assets/shadcn.png" },
      { name: "Tailwind", iconURL: "/assets/tailwind-css.svg" },
      { name: "SASS", iconURL: "/assets/sass.svg" },
      { name: "Framer Motion", iconURL: "/assets/framer.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", iconURL: "/assets/nodejs.svg" },
      { name: "Express.js", iconURL: "/assets/express-js.svg" },
      { name: "Nest.js", iconURL: "/assets/nest-js.svg" },
      { name: "WebSocket", iconURL: "/assets/websockets.png" },
      { name: "Redis", iconURL: "/assets/redis.svg" },
      { name: "RabbitMQ", iconURL: "/assets/rabbitmq.svg" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL", iconURL: "/assets/postgresql.png" },
      { name: "Prisma", iconURL: "/assets/prisma.svg" },
      { name: "TypeORM", iconURL: "/assets/typeorm.svg" },
      { name: "MongoDB", iconURL: "/assets/mongodb.svg" },
      { name: "Mongoose", iconURL: "/assets/mongoose.svg" },
    ],
  },
  {
    title: "Testing & API",
    skills: [
      { name: "Jest", iconURL: "/assets/jest.png" },
      { name: "Cypress", iconURL: "/assets/cypress.png" },
      { name: "Postman", iconURL: "/assets/postman.svg" },
      { name: "Swagger", iconURL: "/assets/swagger.png" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", iconURL: "/assets/git.svg" },
      { name: "AWS", iconURL: "/assets/amazon-web-services.svg" },
      { name: "Docker", iconURL: "/assets/docker.svg" },
      { name: "Linux (Ubuntu)", iconURL: "/assets/ubuntu.svg" },
      { name: "Nginx", iconURL: "/assets/nginx.svg" },
      { name: "CI/CD (GitHub Actions)", iconURL: "/assets/githubactions.svg" },
      { name: "Pulumi", iconURL: "/assets/pulumi.svg" },
    ],
  },
];

const TechStack = () => (
  <section className="pb-16">
    <div className="container-wide">
      <h2 className="section-heading">Tech Stack</h2>
      <p className="mb-4 text-sm text-muted">the tech arsenal behind my builds</p>

      <div className="mt-4 flex flex-col">
        {techStackSections.map((section, idx) => (
          <div
            key={section.title}
            className="tech-stack-row flex flex-wrap items-start gap-4 border-b border-border py-5"
            style={{ borderTop: idx === 0 ? "1px solid var(--border)" : "none" }}
          >
            <div className="tech-stack-label w-[150px] shrink-0 pt-0.5 text-[14.5px] font-semibold text-fg">
              {section.title}
            </div>

            <div className="flex min-w-[240px] flex-1 flex-wrap gap-2">
              {section.skills.map((tech) => (
                <span key={tech.name} className="badge" style={{ background: "transparent" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.iconURL}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
