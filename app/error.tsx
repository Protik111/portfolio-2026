"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-32 max-[720px]:pt-16 pb-16 text-center">
        <div className="container-narrow">
          <p className="mono mb-2 text-muted">500</p>
          <h1 className="mb-4 font-serif text-[2.5rem] font-bold">
            Internal server error
          </h1>
          <p className="mb-8 text-muted">
            Oops! Something unexpected happened.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={reset}
              className="btn-neo px-[18px] py-[7px] text-sm"
            >
              Try again
            </button>
            <Link href="/" className="btn-neo px-[18px] py-[7px] text-sm">
              ← Back to safety
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
