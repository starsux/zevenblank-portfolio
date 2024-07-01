import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hotjar from '@hotjar/browser';


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

const siteId = 5043753;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
