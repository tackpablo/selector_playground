import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

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
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/test1">Test 1</Link>
          <Link href="/test2">Test 2</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
