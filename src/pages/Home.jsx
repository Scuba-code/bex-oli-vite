// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-blue-700 font-bold text-4xl">Hello World</h1>
        <h2 className="text-2xl text-gray-900 font-bold mt-4">
  🔥 If this is red, Tailwind colors are working!
</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Follow our adventures around the world as we explore oceans, reefs, and undiscovered places.
        </p>
      </header>

      <main className="text-center mt-10">
        <p className="text-sm text-gray-500">&copy; 2025 Bex & Oli. All rights reserved.</p>
        <p className="text-sm mt-1 italic text-gray-400">
          (Psst… check out <a
            href="https://oliverscubadiving.com"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oliver’s scuba site
          </a> for training & courses)
        </p>
      </main>
    </div>
  );
}
