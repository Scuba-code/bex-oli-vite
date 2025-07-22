export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bex & Oli</h3>
            <p className="text-gray-400 mb-4">
              Exploring the world's oceans, one dive at a time. Marine biology meets dive instruction.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="/dive" className="block text-gray-400 hover:text-white transition-colors">Dive Adventures</a>
              <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="/map" className="block text-gray-400 hover:text-white transition-colors">Interactive Map</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Follow our adventures</p>
              <p className="text-sm text-gray-500">
                For PADI training & courses:{' '}
                <a
                  href="https://oliverscubadiving.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Oliver's Scuba Diving
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bex & Oli. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Vite + React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
