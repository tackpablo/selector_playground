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
    </main>
  );
}
