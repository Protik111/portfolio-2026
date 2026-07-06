import React from "react";
import Image from "next/image";

// Featured subset of the full skills list
const techStack = [
  { name: "Next.js", iconURL: "/assets/next-js.svg" },
  { name: "TypeScript", iconURL: "/assets/typescript.svg" },
  { name: "React.js", iconURL: "/assets/react.svg" },
  { name: "Node.js", iconURL: "/assets/nodejs.svg" },
  { name: "Express.js", iconURL: "/assets/express-js.svg" },
  { name: "NestJS", iconURL: "/assets/nest-js.svg" },
  { name: "JavaScript", iconURL: "/assets/javascript.svg" },
  { name: "TailwindCSS", iconURL: "/assets/tailwind-css.svg" },
  { name: "MongoDB", iconURL: "/assets/mongodb.svg" },
  { name: "PostgreSQL", iconURL: "/assets/postgresql.png" },
  { name: "Redis", iconURL: "/assets/redis.svg" },
  { name: "Prisma", iconURL: "/assets/prisma.svg" },
  { name: "Docker", iconURL: "/assets/docker.svg" },
  { name: "Socket.io", iconURL: "/assets/socket-io.png" },
  { name: "Vite", iconURL: "/assets/vite.png" },
  { name: "Vercel", iconURL: "/assets/vercel.svg" },
  { name: "Git", iconURL: "/assets/git.svg" },
  { name: "GitHub Actions", iconURL: "/assets/githubactions.svg" },
  { name: "Nginx", iconURL: "/assets/nginx.svg" },
  { name: "AWS", iconURL: "/assets/amazon-web-services.svg" },
];

const TechStack = () => (
  <section style={{ paddingBottom: "3.5rem" }}>
    <div className="container-wide">
      <h2 className="section-heading">Tech Stack</h2>
      <p style={{ color: "var(--muted)", fontSize: "13.5px", marginBottom: "1.25rem" }}>
        the tech arsenal behind my builds
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {techStack.map((tech) => (
          <span key={tech.name} className="badge">
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
  </section>
);

export default TechStack;
