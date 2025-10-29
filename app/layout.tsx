import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Selector Playground",
  description: "Testing selectors across breakpoints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <Script
          id="keak-script"
          src="https://zzontar2hsjaawcn.public.blob.vercel-storage.com/scripts/domain-11-httpsselector-playground.vercel.app.js"
          data-domain="11"
          strategy="afterInteractive"
        ></Script>
      </body>
    </html>
  );
}
