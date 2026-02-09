export default function RealBrides() {
  const brides = [
    {
      name: "Sarah & Michael",
      location: "Kinsale",
      quote: "The experience was magical. The team understood my vision perfectly and found me a dress that made me feel like a princess on my special day.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Emma & James",
      location: "Dublin",
      quote: "I visited several boutiques but none compared to this. The designers they carry are exceptional, and the service is simply outstanding.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Megan & Robert",
      location: "Cork",
      quote: "From the moment I walked in, I knew. The atmosphere, the dresses, the attention to detail - everything was perfect. Couldn't recommend Rei Bridal more!",
      image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="real-brides" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            Love Stories
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            Real brides, real love, extraordinary dresses
          </p>
        </div>

        {/* Brides grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {brides.map((bride, index) => (
            <div key={index} className="group">
              {/* Bride image */}
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-champagne">
                <img
                  src={bride.image}
                  alt={bride.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bride testimonial */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="font-inter text-xs tracking-widest uppercase text-gold">
                    {bride.location}
                  </span>
                </div>

                <h3 className="font-playfair text-xl text-charcoal">
                  {bride.name}
                </h3>

                <p className="font-inter text-charcoal/70 text-sm leading-relaxed italic">
                  "{bride.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View more love stories */}
        <div className="text-center mt-12">
          <a
            href="#appointments"
            className="inline-block px-8 py-3 border-2 border-gold text-gold font-inter text-sm tracking-wide hover:bg-gold hover:text-dove transition-colors"
          >
            Become Our Next Love Story
          </a>
        </div>
      </div>
    </section>
  );
}
