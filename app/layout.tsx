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
          id="keak-general-script"
          src="https://3xawjsjkilfsb1o2.public.blob.vercel-storage.com/scripts/mgce557b-mh3uvo-domain-4-httpsselector-playground.vercel.app.js"
          type="text/javascript"
          data-domain="4"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
