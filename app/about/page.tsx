import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = buildMetadata({ title: "About", path: "/about" });

const About = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-narrow">
          <h1 className="section-heading">About</h1>

          {/* Profile Card */}
          <div className="mb-8 flex flex-wrap items-start gap-6">
            <Image
              src="/profile.jpeg"
              alt="Rafiur Rahman Protik"
              width={140}
              height={140}
              className="shrink-0 rounded-[10px] border border-border object-cover"
            />
            <div>
              <h2 className="mb-1 font-sans text-xl font-bold">Rafiur Rahman Protik</h2>
              <p className="mb-4 text-sm text-muted">Software Engineer · Fullstack Developer</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/Protik111" target="_blank" rel="noreferrer" className="btn-neo">
                  <FaGithub size={12} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rafiur-rahman-protik/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neo"
                >
                  <FaLinkedin size={12} /> LinkedIn
                </a>
                <a href="mailto:rafiurprotik111@gmail.com" className="btn-neo">
                  ✉ Email
                </a>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* About text */}
          <div className="text-[15px] leading-[1.8]">
            <p className="mb-4">
              👨‍🎓 I&apos;m a Software Engineer specializing in full-stack development with JavaScript
              and TypeScript. I work extensively with Node.js, Express.js, NestJS, and Next.js —
              building scalable, production-ready applications.
            </p>
            <p className="mb-4">
              🚀 I have deep experience with databases like MongoDB and PostgreSQL, and enjoy
              working with Prisma as an ORM. On the frontend, I use React.js, Redux, and React
              Query. I also work with Docker, cloud technologies, and CI/CD pipelines.
            </p>
            <p className="mb-8">
              💡 I&apos;m passionate about clean architecture, developer tooling, and meaningful
              software. Always shipping, always learning.
            </p>

            {/* Open for roles card */}
            <div className="flex items-start gap-4 rounded-[10px] border border-border bg-card-bg p-6">
              <span className="text-2xl">📢</span>
              <div>
                <p className="mb-1.5 text-base font-bold">Open for roles</p>
                <p className="m-0 text-sm text-muted">
                  As a fullstack developer, I&apos;m eager for new opportunities across frontend
                  and backend — full-time or freelance. Let&apos;s connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
