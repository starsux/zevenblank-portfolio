"use client"
import Script from 'next/script';


export default function GoogleSnippet() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-31MHC68E43"></Script>
      <Script id="google-snippet">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-31MHC68E43');
          `}
      </Script>
    </>
  );
};
