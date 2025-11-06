import Link from "next/link";

export default function Test1Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Test Page 1: Changed Classes</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div
          data-testid="magic-element"
          // Changed class order + added extra class so old selector fails
          className="p-6 bg-blue-200 rounded-xl shadow-lg order-2 md:order-1"
          id="magic-1-new"
        >
          🌟 Magic Element (Test 1 — Modified) <br />
          <span className="hidden md:inline">
            Visible on tablet and desktop only
          </span>
          <span className="md:hidden">Visible on mobile only</span>
        </div>

        <div className="bg-gray-300 p-6 rounded shadow flex-1 order-1 md:order-2">
          <p>Other content changes order on different screen sizes.</p>
        </div>
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
            <Link href="/test2" className="text-blue-600 hover:underline">
              Test Page 2
            </Link>
          </li>
          <li>
            <Link href="/test3" className="text-blue-600 hover:underline">
              Test Page 3
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
