"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const colorSpanRef = useRef<HTMLSpanElement>(null);
  const fontSizeSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const colorEl = colorSpanRef.current;
    const fontSizeEl = fontSizeSpanRef.current;
    if (!colorEl || !fontSizeEl) return;

    const onColorClick = () => {
      colorEl.style.color = colorEl.style.color === "red" ? "" : "red";
    };
    const onFontSizeClick = () => {
      fontSizeEl.style.fontSize =
        fontSizeEl.style.fontSize === "2em" ? "" : "2em";
    };

    colorEl.addEventListener("click", onColorClick);
    fontSizeEl.addEventListener("click", onFontSizeClick);
    return () => {
      colorEl.removeEventListener("click", onColorClick);
      fontSizeEl.removeEventListener("click", onFontSizeClick);
    };
  }, []);

  return (
    <div className="space-y-8 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>Resize the window to see how the "magic element" changes position.</p>

      <div
        data-testid="magic-element"
        className="bg-green-200 p-4 rounded shadow md:w-1/2"
      >
        🌟 Magic Element (Home)
      </div>

      <nav className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Test Pages</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/test1" className="text-blue-600 hover:underline">
              Test Page 1 - Here, .rounded.shadow became .rounded-xl.shadow-lg,
              breaking the old query.
            </Link>
          </li>
          <li>
            <Link href="/test2" className="text-blue-600 hover:underline">
              Test Page 2 - Here, the ID changed and bg-red-500 → bg-red-400, so
              #magic-2 or the old class combo will fail.
            </Link>
          </li>
          <li>
            <Link href="/test3" className="text-blue-600 hover:underline">
              Test Page 3 - Here, the original .rounded.shadow is gone, replaced
              with .rounded-md.shadow-md and dynamic colors.
            </Link>
          </li>
          <li>
            <span
              ref={colorSpanRef}
              role="button"
              tabIndex={0}
              className="cursor-pointer hover:underline"
              onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLElement).click()}
            >
              Changes text from default color to red
            </span>
          </li>
          <li>
            <span
              ref={fontSizeSpanRef}
              role="button"
              tabIndex={0}
              className="cursor-pointer hover:underline"
              onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLElement).click()}
            >
              Changes font size to double from default
            </span>
          </li>
        </ul>
      </nav>

      <div className="mt-12 flex gap-4">
        <img
          src="/image1.jpg"
          alt="Random nature image"
          className="w-1/2 h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="/image2.jpg"
          alt="Random city image"
          className="w-1/2 h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
}
