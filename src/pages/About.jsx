export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-20 px-4 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">About Bex & Oli</h2>
      <p className="text-center text-gray-600 mb-8">
        We are Bex and Oli, partners above and below the surface. Our shared
        passion for the ocean has taken us across the globe, documenting reefs,
        teaching new divers and supporting marine conservation efforts.
      </p>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">About Oli</h3>
        <p className="text-gray-600">
          Oli is a PADI scuba instructor and underwater photographer. He has
          taught diving from Oman to Thailand and loves capturing life in the
          blue. His goal is to inspire others to explore responsibly and help
          protect the world’s oceans.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">About Bex</h3>
        <p className="text-gray-600">
          Bex is a marine biologist specializing in coral restoration. She has
          worked on projects throughout the Pacific and Caribbean, running
          snorkeling programs and sharing reef ecology with local communities.
          Bex hopes to expand awareness of our fragile marine ecosystems.
        </p>
      </section>
    </div>
  );
}
