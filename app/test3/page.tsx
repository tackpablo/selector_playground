"use client";
import { useState, useEffect } from "react";

export default function TestPage3() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktopOrTablet = width >= 768;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Test Page 3: Dynamic Class Names</h1>

      <div
        data-testid="magic-element"
        className={`p-4 rounded-md shadow-md ${
          isDesktopOrTablet
            ? "bg-purple-400 text-white"
            : "bg-purple-200 text-purple-900"
        }`}
        data-variant={isDesktopOrTablet ? "desktop" : "mobile"}
      >
        🌟 Magic Element (Test 3 — Modified)
      </div>
    </div>
  );
}
