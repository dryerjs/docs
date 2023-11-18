import "../styles/main.scss";

export const runtime = "experimental-edge";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
