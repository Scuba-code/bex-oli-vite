export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Bex & Oli
        </h1>
        <p className="text-2xl md:text-3xl text-blue-600 font-light mb-8">
          Diving the World
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Exploring the world's oceans, one dive at a time. We're a marine biologist 
          and dive instructor sharing stories, tips and maps from reefs across the globe.
        </p>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/about" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Meet Bex & Oli
          </a>
          <a 
            href="/map" 
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Our Map
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🐠</div>
            <h3 className="text-xl font-semibold mb-2">Dive Adventures</h3>
            <p className="text-gray-600">
              From the Great Barrier Reef to Thailand's waters, explore our diving experiences.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="text-xl font-semibold mb-2">Marine Conservation</h3>
            <p className="text-gray-600">
              Following Bex's marine biology work and coral restoration projects.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
            <p className="text-gray-600">
              Track our journey and discover dive sites around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
