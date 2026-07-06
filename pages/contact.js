import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { helpers } from "../helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  background: "var(--card-bg)",
  border: "1px solid var(--border)",
  borderRadius: "6px",
  color: "var(--fg)",
  fontFamily: "var(--font-sans)",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.15s",
};

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({
    isError: false,
    errorNameMessage: "",
    errorEmailMessage: "",
    errorMessage: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = data;
    if (!name) {
      setError({ ...error, isError: true, errorNameMessage: "Please enter your name" });
      return;
    }
    if (!email) {
      setError({ ...error, isError: true, errorEmailMessage: "Please enter your email" });
      return;
    }
    if (!message) {
      setError({ ...error, isError: true, errorMessage: "Please enter a message" });
      return;
    }
    if (helpers.validEmail && name && email && message) {
      setError({ isError: false, errorNameMessage: "", errorEmailMessage: "", errorMessage: "" });
      emailjs
        .sendForm("service_3c6dc6o", "template_irejry2", form.current, "user_Ta3F0tXRsdORTtPDWRwLm")
        .then((res) => {
          if (res.status === 200) {
            helpers.alertToastHandling("Thanks for reaching out! I'll get back to you shortly 🙂");
          }
        })
        .catch(console.error);
    }
  };

  return (
    <React.Fragment>
      <Seo title="Contact" />
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
        <header>
          <Header />
        </header>
        <main style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="container-narrow">
            <h1 className="section-heading">Contact</h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "14px" }}>
              Have an idea or want to work together? Drop me a message.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ fontSize: "13px", fontWeight: 500, display: "block", marginBottom: "6px" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={data.name}
                  placeholder="John Doe"
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  style={inputStyle}
                />
                {error.errorNameMessage && (
                  <p style={{ color: "#e53e3e", fontSize: "12px", marginTop: "4px" }}>
                    {error.errorNameMessage}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{ fontSize: "13px", fontWeight: 500, display: "block", marginBottom: "6px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  placeholder="johndoe@gmail.com"
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  style={inputStyle}
                />
                {error.errorEmailMessage && (
                  <p style={{ color: "#e53e3e", fontSize: "12px", marginTop: "4px" }}>
                    {error.errorEmailMessage}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{ fontSize: "13px", fontWeight: 500, display: "block", marginBottom: "6px" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={data.message}
                  placeholder="Hey! Let's connect..."
                  required
                  rows={5}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                {error.errorMessage && (
                  <p style={{ color: "#e53e3e", fontSize: "12px", marginTop: "4px" }}>
                    {error.errorMessage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-neo"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "10px 16px",
                  fontSize: "14px",
                }}
              >
                Send message →
              </button>
            </form>
          </div>
        </main>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </React.Fragment>
  );
};

export default Contact;
