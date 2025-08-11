export default function Test2Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Test Page 2</h1>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="bg-red-200 p-4 flex-1">Column 1</div>
        <div className="bg-red-300 p-4 flex-1">Column 2</div>
        <div
          data-testid="magic-element"
          className="bg-red-500 text-white p-4 rounded shadow order-first md:order-none"
        >
          🌟 Magic Element (Test 2)
        </div>
      </div>
    </div>
  );
}
