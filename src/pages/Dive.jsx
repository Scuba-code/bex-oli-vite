export default function Dive() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Dive Adventures</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our best dives, breathtaking underwater photos, and marine encounters.
        </p>
      </header>

      <main className="space-y-8 max-w-3xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700">🐠 Koh Tao, Thailand</h2>
          <p className="text-gray-600 mt-2">
            Some of our favorite dives happened around Shark Bay and Chumphon Pinnacle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">🐢 Great Barrier Reef, Australia</h2>
          <p className="text-gray-600 mt-2">
            We've led dives around Hastings Reef and Flynn Reef — unforgettable moments with turtles and rays!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">📷 Photo Gallery (Coming Soon)</h2>
          <p className="text-gray-500 mt-2 italic">
            We'll be adding an underwater gallery from our Olympus TG-7 setup.
          </p>
        </section>
      </main>
    </div>
  );
}
