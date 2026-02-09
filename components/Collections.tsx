export default function Collections() {
  const collections = [
    {
      year: "Spring 2026",
      name: "Ethereal Romance",
      price: "From €1,800",
      description: "Delicate lace, flowing silhouettes, and timeless elegance",
      image: "https://images.unsplash.com/photo-1594552072238-5c4a8e0a4e46?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "Autumn 2026",
      name: "Golden Hour",
      price: "From €2,500",
      description: "Rich textures, champagne hues, and sophisticated drama",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "Spring 2025",
      name: "Whisper Light",
      price: "From €1,500",
      description: "Airy designs, soft draping, and effortless beauty",
      image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="collections" className="py-24 bg-dove">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            Collections
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            Curated for every bride, crafted with love
          </p>
        </div>

        {/* Collections grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Card image with hover effect */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-champagne">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Year badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm">
                  <span className="font-inter text-xs tracking-widest uppercase text-gold">
                    {collection.year}
                  </span>
                </div>
              </div>

              {/* Collection info */}
              <div className="text-center space-y-3">
                <h3 className="font-playfair text-2xl text-charcoal">
                  {collection.name}
                </h3>
                <p className="font-playfair text-lg text-gold">
                  {collection.price}
                </p>
                <p className="font-inter text-charcoal/60 text-sm">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all collections CTA */}
        <div className="text-center mt-12">
          <a
            href="#appointments"
            className="inline-block px-8 py-3 border-2 border-charcoal text-charcoal font-inter text-sm tracking-wide hover:bg-charcoal hover:text-dove transition-colors"
          >
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
