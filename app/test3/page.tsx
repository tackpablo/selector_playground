"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function TestPage3() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated to match your script's device detection
  const getDeviceType = (width: number) => {
    if (width <= 767) return "mobile";
    if (width <= 1024) return "tablet";
    return "desktop";
  };

  const deviceType = getDeviceType(width);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Test Page 3: Dynamic Class Names</h1>
      <p className="text-sm text-gray-600">
        Current device: {deviceType} ({width}px)
      </p>

      {/* Magic Element 1 — Now has 3 distinct states */}
      <div
        // data-testid="magic-element"
        className={`p-4 rounded-md ${
          deviceType === "mobile"
            ? "p bg-purple-200 text-purple-900"
            : deviceType === "tablet"
            ? "shadow-sm bg-purple-300 text-purple-800" // Tablet-specific styling
            : "shadow-md bg-purple-400 text-white" // Desktop styling
        }`}
        // data-variant={deviceType}
      >
        🌟 Magic Element 1 — Mobile: .p, Tablet: .shadow-sm, Desktop: .shadow-md
      </div>

      {/* Magic Element 2 — Different styling pattern */}
      <div
        // data-testid="magic-element-2"
        className={`rounded-xl p-4 ${
          deviceType === "mobile"
            ? "border border-dashed border-gray-500 bg-gray-50"
            : deviceType === "tablet"
            ? "shadow border border-solid border-gray-300 bg-white" // Tablet-specific
            : "shadow-lg bg-white" // Desktop
        }`}
        // data-variant={deviceType}
      >
        🔮 Magic Element 2 — Mobile: .border-dashed, Tablet: .border-solid,
        Desktop: .shadow-lg
      </div>

      {/* Magic Element 3 — Color progression */}
      <div
        // data-testid="magic-element-3"
        className={`rounded-lg shadow p-2 text-white ${
          deviceType === "mobile"
            ? "bg-red-500"
            : deviceType === "tablet"
            ? "bg-orange-500" // Tablet gets orange
            : "bg-green-500" // Desktop gets green
        }`}
        // data-variant={deviceType}
      >
        ✨ Magic Element 3 — Mobile: red, Tablet: orange, Desktop: green
      </div>

      <nav className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Navigation</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home Page
            </Link>
          </li>
          <li>
            <Link href="/test1" className="text-blue-600 hover:underline">
              Test Page 1
            </Link>
          </li>
          <li>
            <Link href="/test2" className="text-blue-600 hover:underline">
              Test Page 2
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
