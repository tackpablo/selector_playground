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
        <nav className="bg-gray-100 border-b border-gray-300 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex gap-6 items-center">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Home
              </Link>
              <Link
                href="/test1"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Test 1
              </Link>
              <Link
                href="/test2"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Test 2
              </Link>
              <Link
                href="/test3"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Test 3
              </Link>
            </div>
          </div>
        </nav>
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
