"use client"

import type { AppProps } from 'next/app'
import Script from 'next/script';

const HOTJAR_ID = 5043753;

const HotjarSnippet = () => {
    if (HOTJAR_ID) return null
    return (
      <>
        <Script id="hotjar-snippet">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </>
    );
  };


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}