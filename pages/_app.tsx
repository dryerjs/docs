import Script from "next/script";
import "../styles/main.scss";

export const runtime = "experimental-edge";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-L709X1Q4RB" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L709X1Q4RB');
      `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
