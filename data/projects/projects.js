export const projectsData = [
  {
    title: "Content Processing Platform",
    description: "A scalable, event-driven microservices platform built to handle heavy content processing workflows (such as text extraction and summarization) asynchronously. The system leverages modern backend architecture patterns including an API Gateway, OAuth2 Identity Management, publish/subscribe messaging, and Server-Sent Events (SSE) for real-time frontend updates.",
    tools: ["nodejs", "microservices", "typescript", "keycloak", "rabbitmq", "postgresql", "sse", "prisma", "kong-api-gateway"],
    links: {
      github: "https://github.com/Protik111/content-processing-platform",
      site: "",
      youtube: ""
    },
    images: {
      light: "/images/projects/content-processing-platform-dark.jpg",
      dark: "/images/projects/content-processing-platform.jpg"
    },
    status: "Active"
  },
  {
    title: "Distributed Job Queue System",
    description: "This project implements a production-grade distributed job queue system designed for asynchronous report generation. Leveraging a decoupled microservices architecture, it ensures high availability, scalability, and reliability by using Redis as a message broker and AWS S3 for persistent storage.",
    tools: ["nodejs", "docker", "redis", "aws", "distributed-systems", "cicd", "pulumi", "bullmq"],
    links: {
      github: "https://github.com/Protik111/distributed-report-queue",
      site: "",
      youtube: ""
    },
    images: {
      light: "/images/projects/distributed-job-queue.png",
      dark: "/images/projects/distributed-job-queue.png"
    },
    status: "Running"
  },
  {
    title: "Collaborative Document System",
    description: "A real-time, block-based collaborative document editing system built with NestJS and WebSockets. Think of it as a developer-friendly, extensible take on modern documentation platforms.",
    tools: ["socket-io", "postgresql", "typeorm", "nestjs"],
    links: {
      github: "https://github.com/Protik111/collaborative-document-system",
      site: "",
      youtube: ""
    },
    images: {
      light: "/images/projects/collaborative-document-system.jpg",
      dark: "/images/projects/collaborative-document-system.jpg"
    },
    status: "Active"
  },
  {
    title: "Video Streaming Platform",
    description: "This service allows users to upload videos, convert them into HLS format, and add a watermark before storing them in a cloud storage solution like Cloudinary. The service also provides an API to fetch and play these videos.",
    tools: ["nodejs", "redis", "typescript", "ffmpeg", "docker-compose", "reactjs", "videojs", "cloudinary", "express-js", "prisma", "postgresql"],
    links: {
      github: "https://github.com/Protik111/video-upload-service",
      site: "",
      youtube: ""
    },
    images: {
      light: "/images/projects/video-upload.jpg",
      dark: "/images/projects/video-upload.jpg"
    },
    status: "Active"
  }
];
