import Link from "next/link";

export default function HomePage() {
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
              Test Page 1 - Flexbox reordering + conditional text visibility on
              mobile/tablet/desktop + elements changing order and visibility
            </Link>
          </li>
          <li>
            <Link href="/test2" className="text-blue-600 hover:underline">
              Test Page 2 - Sidebar & main content with different orders + magic
              element changes ID & style + sidebar content changes with screen
              size
            </Link>
          </li>
          <li>
            <Link href="/test3" className="text-blue-600 hover:underline">
              Test Page 3 - Article with conditional background/text color based
              on window width + editable magic element + grid layout changes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
