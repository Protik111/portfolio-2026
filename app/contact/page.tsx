import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { buildMetadata } from "../../lib/metadata";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar2Check } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = buildMetadata({ title: "Contact", path: "/contact" });

const contactBtnClass =
  "contact-btn inline-flex items-center gap-2.5 rounded-xl border border-border bg-card-bg px-[22px] py-[13px] font-sans text-[14.5px] font-medium whitespace-nowrap text-fg no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-muted hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] active:translate-y-0 dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.04)]";

const iconBoxClass = "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl";

const Contact = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />

      <main className="pt-24 max-[720px]:pt-16 pb-16">
        <div className="container-narrow">
          <p className="mono mb-3 text-muted">Start here</p>
          <h1 className="section-heading mb-3">
            Let&apos;s build something <em>great</em> together.
          </h1>
          <p className="mb-12 text-[14.5px] leading-[1.7] text-muted">
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            I&apos;m always happy to connect.
          </p>

          <div className="flex flex-col gap-4">
            {/* Book a call */}
            <div className="exp-card flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-border bg-card-bg p-6 transition-[border-color,box-shadow,transform] duration-200">
              <div className="flex items-center gap-4">
                <div className={iconBoxClass} style={{ background: "rgba(0, 163, 255, 0.10)" }}>
                  <BsCalendar2Check size={22} color="#00a3ff" />
                </div>
                <div>
                  <p className="m-0 text-[15px] font-semibold">Book a free call</p>
                  <p className="contact-option-desc m-0 text-[13px] leading-[1.5] text-muted">
                    30-min intro session — no strings attached.
                  </p>
                </div>
              </div>
              <a
                href="https://calendly.com/rafiurprotik111"
                target="_blank"
                rel="noreferrer"
                className={contactBtnClass}
                id="btn-book-call"
              >
                <span className="flex items-center gap-1.5">
                  Schedule on Calendly
                  <FiArrowUpRight size={16} />
                </span>
              </a>
            </div>

            {/* Send an email */}
            <div className="exp-card flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-border bg-card-bg p-6 transition-[border-color,box-shadow,transform] duration-200">
              <div className="flex items-center gap-4">
                <div className={iconBoxClass} style={{ background: "rgba(124, 58, 237, 0.10)" }}>
                  <HiOutlineMail size={24} color="#7c3aed" />
                </div>
                <div>
                  <p className="m-0 text-[15px] font-semibold">Send an email</p>
                  <p className="contact-option-desc m-0 text-[13px] leading-[1.5] text-muted">
                    rafiurprotik111@gmail.com
                  </p>
                </div>
              </div>
              <a href="mailto:rafiurprotik111@gmail.com" className={contactBtnClass} id="btn-send-email">
                <span className="flex items-center gap-1.5">
                  Open mail
                  <HiOutlineMail size={15} />
                </span>
              </a>
            </div>
          </div>

          {/* Divider + response note */}
          <div className="mt-12 rounded-xl border-l-[3px] border-border bg-card-bg px-6 py-5">
            <p className="m-0 text-[13.5px] leading-[1.7] text-muted">
              <strong className="text-fg">Typical response time:</strong> I usually reply within 24
              hours. For urgent matters, booking a call is the fastest way to connect.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
