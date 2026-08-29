"use client";

const techIconMap: Record<string, string> = {
  "Node.js": "/assets/nodejs.svg",
  TypeScript: "/assets/typescript.svg",
  "React.js": "/assets/react.svg",
  React: "/assets/react.svg",
  PostgreSQL: "/assets/postgresql.png",
  Redis: "/assets/redis.svg",
  Docker: "/assets/docker.svg",
  "AWS S3": "/assets/amazon-web-services.svg",
  NestJS: "/assets/nest-js.svg",
  "Express.js": "/assets/express-js.svg",
  Prisma: "/assets/prisma.svg",
  MongoDB: "/assets/mongodb.svg",
  Mongoose: "/assets/mongoose.svg",
  RabbitMQ: "/assets/rabbitmq.svg",
  Nginx: "/assets/nginx.svg",
  Git: "/assets/git.svg",
  AWS: "/assets/amazon-web-services.svg",
  Pulumi: "/assets/pulumi.svg",
  FFmpeg: "/assets/ffmpeg.svg",
  Cloudinary: "/assets/cloudinary.svg",
  "Video.js": "/assets/videojs.svg",
  BullMQ: "/assets/bullmq.svg",
  Keycloak: "/assets/keycloak.svg",
  "Socket.io": "/assets/socket-io.png",
};

export function TechStackBadges({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <span
          key={tech}
          className="badge"
          style={{ background: "transparent" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={techIconMap[tech] || "/assets/file.svg"}
            alt={tech}
            width={14}
            height={14}
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {tech}
        </span>
      ))}
    </div>
  );
}
