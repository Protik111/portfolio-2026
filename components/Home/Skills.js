import React from "react";
import Image from "next/image";

const techStackSections = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", iconURL: "/assets/javascript.svg" },
      { name: "TypeScript", iconURL: "/assets/typescript.svg" },
    ]
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
    ]
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
    ]
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL", iconURL: "/assets/postgresql.png" },
      { name: "Prisma", iconURL: "/assets/prisma.svg" },
      { name: "TypeORM", iconURL: "/assets/typeorm.svg" },
      { name: "MongoDB", iconURL: "/assets/mongodb.svg" },
      { name: "Mongoose", iconURL: "/assets/mongoose.svg" },
    ]
  },
  {
    title: "Testing & API",
    skills: [
      { name: "Jest", iconURL: "/assets/jest.png" },
      { name: "Cypress", iconURL: "/assets/cypress.png" },
      { name: "Postman", iconURL: "/assets/postman.svg" },
      { name: "Swagger", iconURL: "/assets/swagger.png" },
    ]
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
    ]
  },
];

const TechStack = () => (
  <section style={{ paddingBottom: "4rem" }}>
    <div className="container-wide">
      <h2 className="section-heading">Tech Stack</h2>
      <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1rem" }}>
        the tech arsenal behind my builds
      </p>
      
      <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
        {techStackSections.map((section, idx) => (
          <div 
            key={section.title} 
            className="tech-stack-row"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "1.25rem 0",
              borderTop: idx === 0 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div 
              className="tech-stack-label"
              style={{
                width: "150px",
                flexShrink: 0,
                color: "var(--fg)",
                fontWeight: "600",
                fontSize: "14.5px",
                paddingTop: "2px"
              }}
            >
              {section.title}
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", flex: 1, minWidth: "240px" }}>
              {section.skills.map((tech) => (
                <span 
                  key={tech.name} 
                  className="badge"
                  style={{ background: "transparent" }}
                >
                  <img
                    src={tech.iconURL}
                    alt={tech.name}
                    width={14}
                    height={14}
                    style={{ objectFit: "contain" }}
                    onError={(e) => { e.target.style.display = "none"; }}
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
