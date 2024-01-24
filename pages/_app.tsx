import Script from "next/script";
import "../styles/main.scss";

export const runtime = "experimental-edge";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11479572312" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-11479572312');

        setTimeout(() => {
          gtag('event', 'conversion', {
            'send_to': 'AW-11479572312/a8_gCMbv7YoZENi-8eEq',
            'value': 1.0,
            'currency': 'VND'
          });
        }, 60000);
      `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
