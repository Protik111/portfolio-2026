import type { Project } from "../../lib/types";

export const projectsData: Project[] = [
  {
    slug: "content-processing-platform",
    title: "Content Processing Platform",
    description:
      "A scalable, event-driven microservices platform built to handle heavy content processing workflows (such as text extraction and summarization) asynchronously. The system leverages modern backend architecture patterns including an API Gateway, OAuth2 Identity Management, publish/subscribe messaging, and Server-Sent Events (SSE) for real-time frontend updates.",
    tools: [
      "nodejs",
      "microservices",
      "typescript",
      "keycloak",
      "rabbitmq",
      "postgresql",
      "sse",
      "prisma",
      "kong-api-gateway",
    ],
    links: {
      github: "https://github.com/Protik111/content-processing-platform",
      site: "",
      youtube: "",
    },
    images: {
      light: "/images/projects/content-processing-platform-dark.jpg",
      dark: "/images/projects/content-processing-platform.jpg",
    },
    status: "Active",
    caseStudy: {
      summary:
        "Built an asynchronous workflow platform for content processing where long-running jobs needed resilience, user feedback, and clean service boundaries.",
      challenge:
        "The biggest challenge was coordinating multiple internal stages without making the API slow or creating brittle failure paths. We needed a system that could process large workloads reliably while still letting users track job progress in real time.",
      solution:
        "I split concerns across gateway, identity, and processing services and used an event-driven, queue-based model for asynchronous processing. Server-Sent Events kept the UI updated without polling noise.",
      impact:
        "The result was a more reliable processing flow with cleaner architecture, tighter operational boundaries, and a much better user experience for long-running jobs.",
      metrics: [
        "Asynchronous job orchestration",
        "Real-time task visibility",
        "Failure-isolated service design",
        "Scalable content processing pipeline",
      ],
      stack: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Keycloak"],
    },
  },
  {
    slug: "distributed-job-queue-system",
    title: "Distributed Job Queue System",
    description:
      "This project implements a production-grade distributed job queue system designed for asynchronous report generation. Leveraging a decoupled microservices architecture, it ensures high availability, scalability, and reliability by using Redis as a message broker and AWS S3 for persistent storage.",
    tools: [
      "nodejs",
      "docker",
      "redis",
      "aws",
      "distributed-systems",
      "cicd",
      "pulumi",
      "bullmq",
    ],
    links: {
      github: "https://github.com/Protik111/distributed-report-queue",
      site: "",
      youtube: "",
    },
    images: {
      light: "/images/projects/distributed-job-queue.png",
      dark: "/images/projects/distributed-job-queue.png",
    },
    status: "Running",
    caseStudy: {
      summary:
        "Built a reliable worker-based system for async report generation where throughput and retry safety were more important than synchronous response time.",
      challenge:
        "When reports scale in volume, direct synchronous processing creates latency spikes, overload, and brittle retry behavior. The workflow needed durable execution with clear failure isolation.",
      solution:
        "I implemented a queue-based architecture with worker processes, Redis-backed messaging, and durable storage for generated artifacts. This allowed the API to remain responsive while reports were processed asynchronously.",
      impact:
        "The system became far more resilient under load and easier to scale independently without sacrificing user experience or operational confidence.",
      metrics: [
        "Distributed task queueing",
        "Retry-safe job execution",
        "Scalable asynchronous processing",
        "Cloud artifact storage pipeline",
      ],
      stack: ["Node.js", "Redis", "BullMQ", "Docker", "AWS S3", "PostgreSQL"],
    },
  },
  {
    slug: "collaborative-document-system",
    title: "Collaborative Document System",
    description:
      "A real-time, block-based collaborative document editing system built with NestJS and WebSockets. Think of it as a developer-friendly, extensible take on modern documentation platforms.",
    tools: ["socket-io", "postgresql", "typeorm", "nestjs"],
    links: {
      github: "https://github.com/Protik111/collaborative-document-system",
      site: "",
      youtube: "",
    },
    images: {
      light: "/images/projects/collaborative-document-system.jpg",
      dark: "/images/projects/collaborative-document-system.jpg",
    },
    status: "Active",
    caseStudy: {
      summary:
        "Designed a collaborative editing platform focused on real-time state synchronization and safe multi-user interaction patterns.",
      challenge:
        "The main design concern was making concurrent edits feel consistent while keeping updates efficient and predictable across multiple clients.",
      solution:
        "I used a WebSocket-driven model with structured document state updates, event ordering, and backend logic that keeps collaboration consistent without overcomplicating the editor flow.",
      impact:
        "The project demonstrates how to build live collaborative experiences with a strong emphasis on coordination, consistency, and user responsiveness.",
      metrics: [
        "Real-time collaboration",
        "WebSocket synchronization",
        "Event-driven document updates",
        "User interaction consistency",
      ],
      stack: ["NestJS", "Socket.io", "TypeORM", "PostgreSQL", "WebSockets"],
    },
  },
  {
    slug: "video-streaming-platform",
    title: "Video Streaming Platform",
    description:
      "This service allows users to upload videos, convert them into HLS format, and add a watermark before storing them in a cloud storage solution like Cloudinary. The service also provides an API to fetch and play these videos.",
    tools: [
      "nodejs",
      "redis",
      "typescript",
      "ffmpeg",
      "docker-compose",
      "reactjs",
      "videojs",
      "cloudinary",
      "express-js",
      "prisma",
      "postgresql",
    ],
    links: {
      github: "https://github.com/Protik111/video-upload-service",
      site: "",
      youtube: "",
    },
    images: {
      light: "/images/projects/video-upload.jpg",
      dark: "/images/projects/video-upload.jpg",
    },
    status: "Active",
    caseStudy: {
      summary:
        "Built a media pipeline for uploading, processing, and serving video content with streaming-friendly delivery and cloud storage integration.",
      challenge:
        "Video workloads create heavy processing and storage constraints. The platform needed to handle uploads and conversion efficiently while keeping playback and delivery smooth for end users.",
      solution:
        "I created a queue-backed processing flow that converted uploads to HLS and stored final artifacts in cloud storage, while exposing a clean content API for playback.",
      impact:
        "This created a clean production-style media handling pattern with operational separation between ingestion, processing, and delivery.",
      metrics: [
        "Media processing workflow",
        "HLS conversion pipeline",
        "Cloud storage integration",
        "Playback-ready media delivery",
      ],
      stack: [
        "Node.js",
        "FFmpeg",
        "React",
        "Cloudinary",
        "Redis",
        "PostgreSQL",
      ],
    },
  },
];
