import type { CaseStudy } from "../../lib/types";

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "distributed-job-processing-platform",
    title: "Distributed Job Processing Platform",
    category: "Distributed Systems",
    summary:
      "Built a resilient async processing system for report generation and content tasks that needed queue-based orchestration, retry safety, and scalable worker execution.",
    challenge:
      "The bottleneck was not raw compute — it was coordinating long-running workloads across multiple services without losing reliability under failure, retries, and bursts of demand.",
    solution:
      "I designed a producer-consumer architecture using Redis-backed queues, background workers, and durable storage for task metadata. The services were decoupled so the API layer could respond fast while processing happened asynchronously and recoverably.",
    impact:
      "This improved throughput, isolated failures between services, and made the system resilient to spikes without degrading user-facing latency.",
    metrics: [
      "Queue-based async orchestration",
      "Retry-safe task execution",
      "Failure isolation across services",
      "Scalable worker fan-out",
    ],
    stack: ["Node.js", "Redis", "Docker", "BullMQ", "PostgreSQL", "AWS S3"],
  },
  {
    slug: "content-processing-microservices",
    title: "Content Processing Microservices",
    category: "Cloud & Architecture",
    summary:
      "Designed a content-processing workflow that accepted large file and text workloads and pushed them through multiple stages with API gateway and event-driven coordination.",
    challenge:
      "The main issue was maintaining clean service boundaries while enabling real-time updates, identity enforcement, and high-throughput processing without a monolithic bottleneck.",
    solution:
      "I separated Gateway, Identity, Processing, and Event-driven components, and introduced SSE-based progress visibility so the frontend could track long-running jobs without constant polling.",
    impact:
      "The design made the platform easier to extend, safer to operate, and better suited for asynchronous content workflows at scale.",
    metrics: [
      "API gateway protection",
      "OAuth-based identity flow",
      "SSE real-time status updates",
      "Event-driven orchestration",
    ],
    stack: [
      "TypeScript",
      "NestJS",
      "Keycloak",
      "Kafka-like patterns",
      "Redis",
      "PostgreSQL",
    ],
  },
  {
    slug: "ai-enabled-workflow-evaluation",
    title: "AI Workflow & Evaluation Thinking",
    category: "AI Engineering",
    summary:
      "Focused on building AI-first product patterns where quality, observability, and evaluation matter as much as model choice itself.",
    challenge:
      "AI systems often look promising in demos but fail in production because they lack structured evaluation, guardrails, and reliable feedback loops.",
    solution:
      "The approach is grounded in system design fundamentals: model selection, prompt architecture, observability, and evaluation loops that help detect quality drift over time.",
    impact:
      "This creates a stronger engineering mindset around trustworthy AI products rather than shipping output without measurement or failure handling.",
    metrics: [
      "Prompt architecture",
      "Evaluation-first design",
      "Observability for AI workflows",
      "Guardrails and reliability",
    ],
    stack: [
      "LLM Apps",
      "RAG",
      "Evaluation",
      "Prompt Design",
      "Python",
      "AI Ops",
    ],
  },
];
