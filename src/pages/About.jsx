export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Bex & Oli
          </h1>
          <p className="text-xl text-gray-600">
            Meet the marine biologist and dive instructor behind the adventures
          </p>
        </div>

        {/* Bex Section */}
        <div className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">About Bex</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🌊</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Marine Biologist & Conservation Specialist</h3>
                <p className="text-gray-700 mb-4">
                  Rebecca Carman is a Marine Biologist with an MSc Distinction in Tropical Marine Biology 
                  and PADI Divemaster with over 500 logged dives. Since 2023, she has worked as the Marine 
                  Science Officer for the Reef Cooperative on the Great Barrier Reef.
                </p>
                <p className="text-gray-700 mb-4">
                  Her work includes managing reef recovery projects, coral larvae reseeding, and leading 
                  scientific monitoring surveys covering fish, coral and invertebrate assemblages.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Coral reef restoration and monitoring</li>
                  <li>MARRS 'Reef Stars' implementation</li>
                  <li>Traditional Owner training programs</li>
                  <li>Scientific survey techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Oli Section */}
        <div className="mb-16">
          <div className="bg-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">About Oli</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Dive Instructor & Underwater Photographer</h3>
                <p className="text-gray-700 mb-4">
                  Oli is a certified PADI dive instructor with years of experience teaching and guiding 
                  divers in some of the world's most spectacular underwater locations. From the Great 
                  Barrier Reef to Thailand's pristine waters, he combines technical diving expertise 
                  with underwater photography.
                </p>
                <p className="text-gray-700 mb-4">
                  His experience spans locations including Koh Tao (Thailand), Oman, and the Great Barrier Reef, 
                  where he has worked as both instructor and underwater photographer using professional TG-7 equipment.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>PADI dive instruction and certification</li>
                  <li>Underwater photography (TG-7 specialist)</li>
                  <li>Technical diving and advanced certifications</li>
                  <li>International dive site expertise</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  For PADI courses and training, visit{' '}
                  <a 
                    href="https://oliverscubadiving.com" 
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oliver's Scuba Diving
                  </a>
                </p>
              </div>
              <div>
                <div className="w-32 h-32 bg-teal-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🤿</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Together Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Together</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Bex and Oli combine marine biology expertise with dive instruction to create unique 
            experiences that educate and inspire. Whether working on conservation projects on the 
            Great Barrier Reef, exploring new dive sites, or sharing their knowledge through this platform, 
            they're passionate about ocean preservation and underwater exploration.
          </p>
          <p className="text-gray-600 mb-4">
            Their shared passion for the ocean has taken them across the globe, documenting reefs, 
            teaching new divers, and supporting marine conservation efforts.
          </p>
          <p className="text-gray-600">
            Follow their journey as they dive, document, and protect marine environments around the world.
          </p>
        </div>
      </div>
    </div>
  );
}
