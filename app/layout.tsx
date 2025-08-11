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
        <Script
          id="keak-script"
          src="https://keakdev.blob.core.windows.net/scripts/a56219c0-db4a-4176-8b15-7cdb47a521d7-19.js"
          data-cookie="19"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
