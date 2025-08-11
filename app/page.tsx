export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Resize the window to see how the "magic element" changes position.</p>

      <div
        data-testid="magic-element"
        className="bg-green-200 p-4 rounded shadow md:w-1/2"
      >
        🌟 Magic Element (Home)
      </div>
    </div>
  );
}
