export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Coral Restoration on the Great Barrier Reef",
      date: "2024-12-15",
      excerpt: "Working with the Reef Cooperative on innovative coral restoration techniques including MARRS 'Reef Stars' and coral larvae reseeding.",
      category: "Conservation",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Diving with Manta Rays in Thailand",
      date: "2024-11-20",
      excerpt: "An unforgettable encounter with these gentle giants during our time teaching in Koh Tao's crystal-clear waters.",
      category: "Adventures",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Underwater Photography Tips for Beginners",
      date: "2024-10-10",
      excerpt: "Essential techniques for capturing stunning underwater images, from equipment setup to composition basics.",
      category: "Photography",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Marine Life Monitoring Techniques",
      date: "2024-09-05",
      excerpt: "Scientific methods for conducting fish, coral, and invertebrate surveys on SCUBA and snorkel.",
      category: "Science",
      readTime: "7 min read"
    }
  ];

  const categories = ["All", "Conservation", "Adventures", "Photography", "Science"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest adventures, conservation stories, and behind-the-scenes insights 
            from our underwater journeys around the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center">
                <div className="text-6xl text-white opacity-80">
                  {post.category === 'Conservation' ? '🌊' : 
                   post.category === 'Adventures' ? '🐠' :
                   post.category === 'Photography' ? '📸' : '🔬'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                  <a href="#" className="block">{post.title}</a>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified about our latest adventures, conservation updates, 
            and diving tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs opacity-70 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            🚧 Blog Content Coming Soon!
          </h3>
          <p className="text-yellow-700">
            We're currently building our blog content. Check back soon for detailed stories 
            about our diving adventures and conservation work.
          </p>
        </div>
      </div>
    </div>
  );
}
