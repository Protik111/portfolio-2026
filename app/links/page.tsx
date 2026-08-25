import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { profiles } from "../../utils/profiles";

export const metadata: Metadata = buildMetadata({ title: "Links", path: "/links" });

const Links = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-narrow">
          <h1 className="section-heading">Links</h1>
          <p className="mb-8 text-sm text-muted">Connect with me across the web.</p>
          <div className="flex max-w-[400px] flex-col gap-2.5">
            {profiles.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="btn-neo justify-center px-4 py-2.5 text-center text-sm"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Links;
