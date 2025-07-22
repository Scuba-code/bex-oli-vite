export default function Dive() {
  const diveLocations = [
    {
      name: "Great Barrier Reef",
      country: "Australia",
      description: "Working on coral restoration and reef recovery projects with the Reef Cooperative.",
      highlights: ["Coral restoration", "Scientific monitoring", "Marine conservation"],
      emoji: "🪸"
    },
    {
      name: "Koh Tao",
      country: "Thailand", 
      description: "Crystal clear waters and diverse marine life make this a premier diving destination.",
      highlights: ["PADI instruction", "Underwater photography", "Marine diversity"],
      emoji: "🐠"
    },
    {
      name: "Oman",
      country: "Middle East",
      description: "Unique diving experiences in the Arabian Peninsula with incredible visibility.",
      highlights: ["Technical diving", "Unique marine ecosystems", "Photography opportunities"],
      emoji: "🐙"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dive Adventures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the underwater worlds we've discovered, from coral restoration projects 
            to pristine dive sites around the globe.
          </p>
        </div>

        {/* Featured Locations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {diveLocations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{location.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{location.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{location.country}</p>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="space-y-2">
                  {location.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diving Philosophy */}
        <div className="bg-blue-900 text-white rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Diving Philosophy</h2>
            <p className="text-xl mb-6 opacity-90">
              "Every dive is an opportunity to learn, document, and protect our oceans."
            </p>
            <p className="text-lg opacity-80">
              We believe in responsible diving practices that prioritize marine conservation, 
              education, and sustainable tourism. Our work combines scientific research with 
              dive instruction to create meaningful underwater experiences.
            </p>
          </div>
        </div>

        {/* Diving Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-lg p-8">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-700">Combined Dives Logged</p>
          </div>
          <div className="text-center bg-white rounded-lg p-8">
            <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
            <p className="text-gray-700">Countries Explored</p>
          </div>
          <div className="text-center bg-white rounded-lg p-8">
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <p className="text-gray-700">Students Certified</p>
          </div>
        </div>

        {/* Equipment & Photography */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Underwater Photography
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Olympus TG-7 underwater camera
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Professional underwater housing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Underwater strobes and lighting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Macro and wide-angle lenses
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Photography Focus</h3>
              <p className="text-gray-700 mb-4">
                Our underwater photography focuses on documenting marine life, coral health, 
                and conservation efforts. From macro shots of coral polyps to wide-angle 
                reef scenes, we capture the beauty and importance of healthy marine ecosystems.
              </p>
              <p className="text-gray-600">
                These images support research, education, and conservation awareness initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
