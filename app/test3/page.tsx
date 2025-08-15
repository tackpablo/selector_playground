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

      {/* Magic Element 1 — Your original */}
      <div
        data-testid="magic-element"
        className={`p-4 rounded-md ${isDesktopOrTablet ? "shadow-md" : "p"} ${
          isDesktopOrTablet
            ? "bg-purple-400 text-white"
            : "bg-purple-200 text-purple-900"
        }`}
        data-variant={isDesktopOrTablet ? "desktop" : "mobile"}
      >
        🌟 Magic Element 1 — Changes between `.rounded-md.shadow-md` and
        `.rounded-md.p`
      </div>

      {/* Magic Element 2 — Different selector scenario */}
      <div
        data-testid="magic-element-2"
        className={`rounded-xl ${
          isDesktopOrTablet
            ? "shadow-lg"
            : "border border-dashed border-gray-500"
        } p-4`}
        data-variant={isDesktopOrTablet ? "desktop" : "mobile"}
      >
        🔮 Magic Element 2 — Changes between `.rounded-xl.shadow-lg` and
        `.rounded-xl.border-dashed`
      </div>

      {/* Magic Element 3 — Adds/removes a completely different utility class */}
      <div
        data-testid="magic-element-3"
        className={`rounded-lg shadow ${
          isDesktopOrTablet ? "bg-green-500" : "bg-red-500"
        } text-white p-2`}
        data-variant={isDesktopOrTablet ? "desktop" : "mobile"}
      >
        ✨ Magic Element 3 — Color swap based on device size
      </div>
    </div>
  );
}
