import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({ title: "Not Found", path: "/404" });

const NotFound = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-32 max-[720px]:pt-16 pb-16 text-center">
        <div className="container-narrow">
          <p className="mono mb-2 text-muted">404</p>
          <h1 className="mb-4 font-serif text-[2.5rem] font-bold">Page not found</h1>
          <p className="mb-8 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="btn-neo px-[18px] py-[7px] text-sm">
            ← Back home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
