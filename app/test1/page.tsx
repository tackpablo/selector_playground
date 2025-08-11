export default function Test1Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">
        Test Page 1: Flex Reordering & Conditional Elements
      </h1>

      <p>
        This page uses flexbox with responsive reordering and conditional
        elements that only appear on certain screen sizes.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <div
          data-testid="magic-element"
          className="bg-blue-200 p-6 rounded shadow order-2 md:order-1"
          id="magic-1"
        >
          🌟 Magic Element (Test 1) <br />
          <span className="hidden md:inline">
            Visible on tablet and desktop only
          </span>
          <span className="md:hidden">Visible on mobile only</span>
        </div>

        <div className="bg-gray-300 p-6 rounded shadow flex-1 order-1 md:order-2">
          <p>Other content changes order on different screen sizes.</p>

          <div className="mt-4">
            <div className="hidden sm:block bg-yellow-300 p-2 rounded">
              <strong>Visible only on small+ screens (≥640px)</strong>
            </div>
            <div className="block sm:hidden bg-yellow-200 p-2 rounded">
              <strong>Visible only on extra small screens (&lt;640px)</strong>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-sm text-gray-500">
        Resize the window to see how the magic element's position and visibility
        changes.
      </footer>
    </main>
  );
}
