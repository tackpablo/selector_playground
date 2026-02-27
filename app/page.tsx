"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const colorSpanRef = useRef<HTMLSpanElement>(null);
  const fontSizeSpanRef = useRef<HTMLSpanElement>(null);
  const [showWaitedElement, setShowWaitedElement] = useState(false);

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

      {/* ─── Sections for WebMCP step types (ensure_page, click, fill_form, wait_element, extract, return) ─── */}

      <section id="step-ensure-page" className="mt-12 p-6 bg-slate-100 rounded-lg shadow" aria-label="Navigate to another page">
        <h2 className="text-xl font-semibold mb-3">Ensure page (navigation)</h2>
        <p className="text-slate-600 mb-4">Tools can use ensure_page to navigate before other steps.</p>
        <Link href="/test1" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" id="nav-to-test1">
          Go to Test Page 1
        </Link>
      </section>

      <section id="step-click" className="mt-8 p-6 bg-amber-50 rounded-lg shadow" aria-label="Click actions">
        <h2 className="text-xl font-semibold mb-3">Click</h2>
        <p className="text-slate-600 mb-4">Tools can click buttons or links.</p>
        <button type="button" id="action-submit-demo" className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
          Click me (demo action)
        </button>
      </section>

      <section id="step-fill-form" className="mt-8 p-6 bg-emerald-50 rounded-lg shadow" aria-label="Fill form">
        <h2 className="text-xl font-semibold mb-3">Fill form</h2>
        <p className="text-slate-600 mb-4">Tools can fill inputs and submit.</p>
        <form id="demo-form" action="/test1" method="get" className="space-y-3 max-w-sm">
          <label htmlFor="demo-name" className="block text-sm font-medium">Name</label>
          <input type="text" id="demo-name" name="name" placeholder="Your name" className="w-full border rounded px-3 py-2" />
          <label htmlFor="demo-email" className="block text-sm font-medium">Email</label>
          <input type="email" id="demo-email" name="email" placeholder="you@example.com" className="w-full border rounded px-3 py-2" />
          <button type="submit" id="demo-form-submit" className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
            Submit
          </button>
        </form>
      </section>

      <section id="step-wait-element" className="mt-8 p-6 bg-violet-50 rounded-lg shadow" aria-label="Wait for element">
        <h2 className="text-xl font-semibold mb-3">Wait element</h2>
        <p className="text-slate-600 mb-4">Tools can wait for an element to appear (e.g. after click).</p>
        <button type="button" id="show-waited-element" className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700" onClick={() => setShowWaitedElement(true)}>
          Show content below
        </button>
        {showWaitedElement && (
          <div id="waited-content" className="mt-4 p-4 bg-violet-100 rounded border border-violet-200">
            Content appeared after click. A tool can wait for this element.
          </div>
        )}
      </section>

      <section id="step-extract" className="mt-8 p-6 bg-rose-50 rounded-lg shadow" aria-label="Extract content">
        <h2 className="text-xl font-semibold mb-3">Extract</h2>
        <p className="text-slate-600 mb-4">Tools can extract text or attributes from an element.</p>
        <div id="extract-target" data-price="99" data-currency="USD" className="p-4 bg-rose-100 rounded border border-rose-200">
          <span className="font-semibold">Price:</span> <span data-value="price">$99</span>
          <br />
          <span className="font-semibold">Status:</span> <span data-value="status">In stock</span>
        </div>
      </section>

      <section id="step-return" className="mt-8 p-6 bg-slate-200 rounded-lg shadow" aria-label="Return result">
        <h2 className="text-xl font-semibold mb-3">Return</h2>
        <p className="text-slate-600">Every tool ends with a return step (no extra UI).</p>
      </section>
    </div>
  );
}
