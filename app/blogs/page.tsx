import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { blogsData } from "../../data/blogs/blogs";

export const metadata: Metadata = buildMetadata({ title: "Blogs", path: "/blogs" });

const Blogs = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-wide">
          <h1 className="section-heading">Blogs</h1>
          <p className="mb-8 text-sm text-muted">Things I think about and write down.</p>
          <div className="grid-2">
            {blogsData.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card block no-underline"
              >
                {item.cover_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.cover_image} alt={item.title} className="block h-[180px] w-full object-cover" />
                )}
                <div className="px-5 py-4">
                  <h3 className="mb-1.5 text-[15px] leading-[1.4] font-semibold text-fg">{item.title}</h3>
                  <p className="mono mb-2 text-xs text-muted">{item.date}</p>
                  {item.subtitle && <p className="mb-3 text-[13px] leading-[1.5] text-muted">{item.subtitle}</p>}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
