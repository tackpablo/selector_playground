export default function Test1Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Test Page 1</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-blue-200 p-4">Box A</div>
        <div
          data-testid="magic-element"
          className="bg-blue-400 p-4 rounded shadow hidden sm:block"
        >
          🌟 Magic Element (Test 1)
        </div>
        <div className="bg-blue-300 p-4">Box C</div>
      </div>
    </div>
  );
}
