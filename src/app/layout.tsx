
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleSnippet from "./GoogleSnippet";
import { Analytics } from "@vercel/analytics/react"

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zevenblank's portfolio",
  description: "Official Art Portfolio by zevenblank.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="p:domain_verify" content="c43700326c4b9a5a49583ec073af5e76"/>
      <SpeedInsights/>
      <Analytics/>
      <body className={inter.className}>{children}</body>
      <GoogleSnippet/>
    </html>
  );
}
