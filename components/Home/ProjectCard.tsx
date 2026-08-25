import type { ReactNode } from "react";
import type { Project } from "../../lib/types";

// Inline SVG components for technologies that don't have local files in /assets/
const customIcons: Record<string, ReactNode> = {
  microservices: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="6" height="6" rx="1.5"></rect>
      <rect x="16" y="2" width="6" height="6" rx="1.5"></rect>
      <rect x="9" y="9" width="6" height="6" rx="1.5"></rect>
      <rect x="2" y="16" width="6" height="6" rx="1.5"></rect>
      <rect x="16" y="16" width="6" height="6" rx="1.5"></rect>
      <path d="M8 5h8M8 19h8M5 8v8M19 8v8"></path>
    </svg>
  ),
  keycloak: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <circle cx="12" cy="10" r="2.5"></circle>
      <path d="M12 12.5V16.5"></path>
    </svg>
  ),
  sse: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  ),
  "kong-api-gateway": (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  "distributed-systems": (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.5"></circle>
      <circle cx="19" cy="5" r="2"></circle>
      <circle cx="5" cy="5" r="2"></circle>
      <circle cx="5" cy="19" r="2"></circle>
      <circle cx="19" cy="19" r="2"></circle>
      <line x1="7" y1="7" x2="10" y2="10"></line>
      <line x1="17" y1="7" x2="14" y2="10"></line>
      <line x1="7" y1="17" x2="10" y2="12"></line>
      <line x1="17" y1="17" x2="14" y2="12"></line>
    </svg>
  ),
  bullmq: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="18" y2="12"></line>
      <line x1="3" y1="18" x2="15" y2="18"></line>
    </svg>
  ),
  ffmpeg: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      <circle cx="8" cy="12" r="2"></circle>
    </svg>
  ),
  videojs: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="6 3 20 12 6 21 6 3"></polygon>
    </svg>
  ),
  cloudinary: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19A5.5 5.5 0 0 0 18 8.05a7 7 0 0 0-13.95.95A5.5 5.5 0 0 0 4.5 19H17.5z"></path>
    </svg>
  ),
};

interface ToolInfo {
  name: string;
  src?: string | null;
  customIcon?: ReactNode;
}

const getToolInfo = (toolKey: string): ToolInfo => {
  const normKey = toolKey.toLowerCase().trim();

  // Mapping from tags to display names and asset icon links if available
  const mappings: Record<string, ToolInfo> = {
    nodejs: { name: "Node.js", src: "/assets/nodejs.svg" },
    typescript: { name: "TypeScript", src: "/assets/typescript.svg" },
    rabbitmq: { name: "RabbitMQ", src: "/assets/rabbitmq.svg" },
    postgresql: { name: "PostgreSQL", src: "/assets/postgresql.png" },
    prisma: { name: "Prisma", src: "/assets/prisma.svg" },
    docker: { name: "Docker", src: "/assets/docker.svg" },
    redis: { name: "Redis", src: "/assets/redis.svg" },
    aws: { name: "AWS S3", src: "/assets/amazon-web-services.svg" },
    pulumi: { name: "Pulumi", src: "/assets/pulumi.svg" },
    "socket-io": { name: "Socket.io", src: "/assets/socket-io.png" },
    nestjs: { name: "NestJS", src: "/assets/nest-js.svg" },
    typeorm: { name: "TypeORM", src: "/assets/typeorm.svg" },
    reactjs: { name: "React.js", src: "/assets/react.svg" },
    "express-js": { name: "Express.js", src: "/assets/express-js.svg" },
    cicd: { name: "GitHub Actions CI/CD", src: "/assets/githubactions.svg" },
    "docker-compose": { name: "Docker Compose", src: "/assets/docker.svg" },
    microservices: { name: "Microservices Architecture", customIcon: customIcons.microservices },
    keycloak: { name: "Keycloak Identity Management", customIcon: customIcons.keycloak },
    sse: { name: "Server-Sent Events (SSE)", customIcon: customIcons.sse },
    "kong-api-gateway": { name: "Kong API Gateway", customIcon: customIcons["kong-api-gateway"] },
    "distributed-systems": { name: "Distributed Systems Architecture", customIcon: customIcons["distributed-systems"] },
    bullmq: { name: "BullMQ Distributed Queue", customIcon: customIcons.bullmq },
    ffmpeg: { name: "FFmpeg Media Processor", customIcon: customIcons.ffmpeg },
    videojs: { name: "Video.js Player", customIcon: customIcons.videojs },
    cloudinary: { name: "Cloudinary Cloud Storage", customIcon: customIcons.cloudinary },
  };

  return mappings[normKey] || { name: toolKey, src: null };
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card">
      {/* Dynamic Image Header (Light / Dark responsive) */}
      <div className="relative h-[170px] w-full overflow-hidden border-b border-border bg-card-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="img-light h-full w-full object-cover" src={project.images.light} alt={project.title} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="img-dark h-full w-full object-cover" src={project.images.dark} alt={project.title} />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title and Links Row */}
        <div className="mb-2.5 flex items-center justify-between">
          <h3 className="m-0 font-sans text-[17.5px] font-semibold text-fg">{project.title}</h3>

          {/* Social / Direct Platforms Links */}
          <div className="flex items-center gap-2.5">
            {project.links.site && (
              <div className="tooltip tooltip-right">
                <a href={project.links.site} target="_blank" rel="noreferrer" className="link-hover flex items-center text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </a>
                <span className="tooltiptext">Live Site</span>
              </div>
            )}
            {project.links.github && (
              <div className="tooltip tooltip-right">
                <a href={project.links.github} target="_blank" rel="noreferrer" className="link-hover flex items-center text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <span className="tooltiptext">GitHub Repository</span>
              </div>
            )}
            {project.links.youtube && (
              <div className="tooltip tooltip-right">
                <a href={project.links.youtube} target="_blank" rel="noreferrer" className="link-hover flex items-center text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <span className="tooltiptext">YouTube Demo</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="mb-5 grow text-[13.2px] leading-[1.65] text-muted">{project.description}</p>

        {/* Footer Row (Status Pill + Tech Stack Icons) */}
        <div className="mt-auto flex items-center justify-between">
          {/* Status Indicator */}
          <div className="flex items-center">
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] leading-none font-medium"
              style={{
                background: project.status === "Running" ? "rgba(34, 197, 94, 0.06)" : "rgba(59, 130, 246, 0.06)",
                border: project.status === "Running" ? "1px solid rgba(34, 197, 94, 0.15)" : "1px solid rgba(59, 130, 246, 0.15)",
                color: project.status === "Running" ? "#22c55e" : "#3b82f6",
              }}
            >
              <span
                className={`inline-block h-[5px] w-[5px] rounded-full ${project.status === "Running" ? "pulse-dot" : ""}`}
                style={{ backgroundColor: project.status === "Running" ? "#22c55e" : "#3b82f6" }}
              />
              {project.status}
            </div>
          </div>

          {/* Technology Icons */}
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {project.tools.map((tool) => {
              const toolInfo = getToolInfo(tool);
              return (
                <div key={tool} className="tooltip tooltip-right">
                  <div
                    className="flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full border border-border bg-bg text-muted"
                    style={{ padding: toolInfo.src ? "3px" : "4px" }}
                  >
                    {toolInfo.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={toolInfo.src} alt={toolInfo.name} className="h-full w-full object-contain" />
                    ) : (
                      toolInfo.customIcon || <span className="text-[8px] font-bold">{tool.substring(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <span className="tooltiptext">{toolInfo.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
