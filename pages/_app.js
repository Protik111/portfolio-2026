import "../styles/global.css";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />;
}

export default MyApp;
