"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ctaLinks = [
  {
    href: "https://github.com/Protik111",
    label: "GitHub",
    icon: <FaGithub size={16} color="#24292e" />,
    iconBg: "rgba(36,41,46,0.10)",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/rafiur-rahman-protik/",
    label: "LinkedIn",
    icon: <FaLinkedin size={16} color="#0077B5" />,
    iconBg: "rgba(0,119,181,0.10)",
    target: "_blank",
  },
  {
    href: "mailto:rafiurprotik111@gmail.com",
    label: "Email me",
    icon: <HiOutlineMail size={17} color="#7c3aed" />,
    iconBg: "rgba(124,58,237,0.10)",
    target: undefined,
  },
];

const statCards = [
  { label: "Years Exp.", value: "4+" },
  { label: "Microservices", value: "3+" },
  { label: "Cloud Platforms", value: "AWS" },
];

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Dhaka",
        }) + " (GMT+6)"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pt-24 pb-8">
      <div className="container-narrow">
        {/* Live clock */}
        <p className="mono mb-7 text-muted">{time || "──:──:── (GMT+6)"}</p>

        {/* Bio Card */}
        <div className="mb-6 flex items-center gap-4">
          <Image
            src="/profile.jpeg"
            alt="Protik"
            width={52}
            height={52}
            className="shrink-0 rounded-full border border-border object-cover"
          />
          <div>
            <p className="m-0 text-base font-semibold text-fg">Rafiur Rahman Protik</p>
            <p className="m-0 text-sm text-muted">Full-stack Software Engineer &amp; DevOps Enthusiast</p>
          </div>
        </div>

        {/* Intro text */}
        <div className="mb-8 text-[15.5px] leading-[1.8] text-fg">
          <p className="mb-4">
            I&apos;m a passionate Full-stack Software Engineer with <strong>4+ years of experience</strong>{" "}
            building scalable, production-ready applications and cloud-native solutions. My expertise
            spans <strong>React.js, Next.js, TypeScript, Node.js, Docker, AWS, CI/CD, and microservices
            architecture</strong>.
          </p>
          <p className="mb-5">
            I focus on solving real-world problems with clean code, scalable design, and cost-efficient
            cloud solutions. From video streaming platforms to containerized microservices, I enjoy
            tackling complex technical challenges and building systems that scale.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {ctaLinks.map(({ href, label, icon, iconBg, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target ? "noreferrer" : undefined}
                className="btn-neo gap-2 rounded-[10px] py-[7px] pr-[14px] pl-[7px] font-medium"
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

        {/* Cards below */}
        <div className="mt-14 flex flex-col gap-6 pb-8">
          {/* Terminal Card */}
          <div className="overflow-hidden rounded-[10px] border border-border font-mono shadow-[0_4px_12px_rgba(0,0,0,0.05)]" style={{ background: "#0d1117" }}>
            <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: "#30363d" }}>
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f56" }} />
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#27c93f" }} />
              <div className="ml-2.5 text-xs" style={{ color: "#8b949e" }}>protik@env: ~</div>
            </div>
            <div className="overflow-x-auto p-5 text-[13.5px] leading-[1.7]" style={{ color: "#c9d1d9" }}>
              <p className="mb-2">
                <span style={{ color: "#7ee787" }}>$</span> whoami
              </p>
              <p className="mb-4" style={{ color: "#8b949e" }}>Full-stack Software Engineer</p>
              <p className="mb-2">
                <span style={{ color: "#7ee787" }}>$</span> ./deploy --env production
              </p>
              <p className="m-0" style={{ color: "#8b949e" }}>
                [OK] Packaging microservices...
                <br />
                [OK] Provisioning AWS infrastructure...
                <br />
                <span style={{ color: "#79c0ff" }}>➜ System successfully deployed to production!</span>
              </p>
            </div>
          </div>

          {/* Current Status Card */}
          <div className="flex flex-col gap-4 rounded-[10px] border border-border bg-card-bg p-6">
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
              <h3 className="m-0 text-[15px] font-semibold text-fg">Current Status</h3>
            </div>
            <div className="text-[14.5px] leading-[1.6] text-muted">
              <p className="mb-2">
                <strong className="text-fg">✓</strong> Actively building scalable microservices and
                cloud-native solutions.
              </p>
              <p className="mb-2">
                <strong className="text-fg">✓</strong> Exploring event-driven architectures with
                RabbitMQ.
              </p>
              <p className="m-0">
                <strong className="text-fg">✓</strong> Architecting highly available distributed
                systems.
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
            {statCards.map((stat) => (
              <div key={stat.label} className="flex flex-col border-l-[3px] border-fg px-5 py-4">
                <div className="mb-0.5 text-[28px] font-bold text-fg">{stat.value}</div>
                <div className="text-[13px] tracking-wide text-muted uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
