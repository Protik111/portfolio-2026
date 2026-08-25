import type { Metadata } from "next";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({ title: "Resume", path: "/resume" });

const Resume = () => {
  return (
    <div className="h-screen">
      <iframe src="https://heyprotik.vercel.app/resume/resume.pdf" title="Resume" width="100%" height="100%" />
    </div>
  );
};

export default Resume;
