import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleSnippet from "./GoogleSnippet";
import { Analytics } from "@vercel/analytics/react";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./providers/PostHogProvider";
import thumb from "@/app/assets/thumb.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zevenblank's portfolio",
  description: "Official Art Portfolio by zevenblank.",
  
  openGraph:{
    title: "zevenblank Art Portfolio",
    description: "Check out my artworks.  ",
    images:[{
      url: thumb.src,
      width: 1200 ,
      height: 630,
      alt: "zevenblank portfolio",
  }],
    locale: "en_US",
    type: "website",
  },
  verification: {
    other: {
      "p:domain_verify": "c43700326c4b9a5a49583ec073af5e76"
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">

      <meta name="twitter:image" content={thumb.src} />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />

      <SpeedInsights />
      <Analytics />
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
      <GoogleSnippet />
    </html>
  );
}
