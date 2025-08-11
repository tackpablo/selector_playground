export default function Test2Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Test Page 2: Changed Attributes</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <aside
          data-testid="magic-element"
          // Changed ID and added dynamic attribute
          id="magic-2-renamed"
          className="p-6 bg-red-400 text-white rounded-xl shadow-lg order-2 md:order-1 md:w-1/3"
          data-extra="sidebar-magic"
        >
          🌟 Magic Element (Test 2 — Modified)
        </aside>

        <section className="bg-gray-100 p-6 rounded shadow flex-1 order-1 md:order-2">
          <h2>Main Content</h2>
          <p>Resize window to see style changes.</p>
        </section>
      </div>
    </main>
  );
}
