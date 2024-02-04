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

          window.fbAsyncInit = function() {
            FB.init({
              xfbml: true,
              version: 'v19.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

          setTimeout(3000, () => {
            const chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "111256075414630");
            chatbox.setAttribute("attribution", "biz_inbox");
          });
        `}
      </Script>
      
      <Component {...pageProps} />
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
}
