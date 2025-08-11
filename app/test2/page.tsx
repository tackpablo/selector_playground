export default function Test2Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">
        Test Page 2: Sidebar and Main Content Responsive Layout
      </h1>

      <p>
        This page features a sidebar that collapses or moves below the content
        on smaller screens. The magic element is inside the sidebar with
        changing classes and IDs.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <aside
          data-testid="magic-element"
          id="magic-2"
          className="bg-red-500 text-white p-6 rounded shadow order-2 md:order-1 md:w-1/3"
          style={{
            outline: "2px solid rgb(70, 131, 255)",
            outlineOffset: "2px",
          }}
        >
          🌟 Magic Element (Test 2)
          <p className="mt-2 hidden md:block">
            Sidebar content only visible on tablet and desktop.
          </p>
          <p className="mt-2 block md:hidden font-bold">
            Sidebar content changes on mobile.
          </p>
        </aside>

        <section className="bg-gray-100 p-6 rounded shadow flex-1 order-1 md:order-2">
          <h2 className="text-xl font-semibold">Main Content</h2>
          <p>
            Resize the window to see sidebar reorder and magic element style
            changes.
          </p>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Click Me
          </button>
        </section>
      </div>
    </main>
  );
}
