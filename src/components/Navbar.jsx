export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold">Bex & Oli</div>
      <div className="space-x-6">
        <a href="/" className="text-gray-700 hover:text-sea">Home</a>
        <a href="/map" className="text-gray-700 hover:text-sea">Dive Map</a>
        <a href="/blog" className="text-gray-700 hover:text-sea">Blog</a>
        <a href="/about" className="text-gray-700 hover:text-sea">About</a>
      </div>
    </nav>
  );
}
