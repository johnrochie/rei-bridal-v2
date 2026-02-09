export default function Designers() {
  const designers = [
    {
      name: "Galia Lahav",
      location: "Paris, France",
      description: "Haute couture wedding dresses with dramatic flair",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Inbal Dror",
      location: "Tel Aviv, Israel",
      description: "Modern architectural silhouettes and breathtaking details",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Pronovias",
      location: "Barcelona, Spain",
      description: "Contemporary designs for the modern bride",
      image: "https://images.unsplash.com/photo-1614253360128-29e9a9495eb0?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Vera Wang",
      location: "New York, USA",
      description: "Iconic, avant-garde bridal fashion",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Rivini",
      location: "New York, USA",
      description: "Soft romantic styles with handcrafted details",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Saiid Kobeisy",
      location: "Beirut, Lebanon",
      description: "Exquisite designs with Middle Eastern luxury",
      image: "https://images.unsplash.com/photo-1595278069441-2cf29f80067a?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="designers" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            Our Designers
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            Exclusive collections from the world's most celebrated bridal houses
          </p>
        </div>

        {/* Designers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer, index) => (
            <div key={index} className="group">
              {/* Designer card */}
              <div className="bg-white p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Designer image */}
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-champagne">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Designer info */}
                <div className="text-center">
                  <h3 className="font-playfair text-2xl text-charcoal mb-2">
                    {designer.name}
                  </h3>
                  <p className="font-inter text-gold text-sm tracking-widest uppercase mb-3">
                    {designer.location}
                  </p>
                  <p className="font-inter text-charcoal/60 text-sm leading-relaxed">
                    {designer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Designer showcase CTA */}
        <div className="text-center mt-12">
          <a
            href="#appointments"
            className="inline-block px-8 py-3 bg-charcoal text-dove font-inter text-sm tracking-wide hover:bg-charcoal/80 transition-colors"
          >
            Book Private Styling
          </a>
        </div>
      </div>
    </section>
  );
}
