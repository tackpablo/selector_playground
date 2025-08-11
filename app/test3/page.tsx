"use client";
import { useState, useEffect } from "react";

export default function TestPage3() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktopOrTablet = width >= 768;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Test Page 3</h1>
      <p>Resize window to see dynamic JS-driven style changes.</p>

      <div
        data-testid="magic-element"
        className={`p-4 rounded shadow ${
          isDesktopOrTablet
            ? "bg-purple-300 text-white"
            : "bg-purple-100 text-purple-900"
        }`}
      >
        🌟 Magic Element (Test 3)
      </div>

      <input
        className={`mt-4 p-2 border rounded w-full ${
          isDesktopOrTablet
            ? "bg-purple-300 text-white"
            : "bg-purple-100 text-purple-900"
        }`}
        placeholder="Try resizing to see input style change"
      />
    </div>
  );
}
