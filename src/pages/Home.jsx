// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <header className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-sea-dark font-bold text-4xl sm:text-5xl">
          Bex &amp; Oli: Diving the World
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Exploring the world’s oceans, one dive at a time.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          We&rsquo;re a marine biologist and dive instructor sharing stories, tips and maps from reefs across the globe.
        </p>
      </header>

      <main className="text-center mt-16">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Bex &amp; Oli. All rights reserved.</p>
        <p className="text-sm mt-1 italic text-gray-400">
          (Psst… check out <a
            href="https://oliverscubadiving.com"
            className="text-sea hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oliver’s scuba site
          </a> for training &amp; courses)
        </p>
      </main>
    </div>
  );
}
