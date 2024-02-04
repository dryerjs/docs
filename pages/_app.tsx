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
            'send_to': 'AW-11486140135/KTE3CN-Ps44ZEOetguUq',
            'value': 1.0,
            'currency': 'VND'
          });
        }, 60000);
      `}
      </Script>
      <Script>
        {`
        <!-- Hotjar Tracking Code for https://dryerjs.com -->
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3852479,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
