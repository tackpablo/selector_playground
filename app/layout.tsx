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
      <head>
        <script 
        id="keak-nextjs-script" 
        src="https://zzontar2hsjaawcn.public.blob.vercel-storage.com/scripts/domain-11-httpsselector-playground.vercel.app.js" 
        type="text/javascript" 
        data-domain="11"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
