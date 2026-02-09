export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width hero background - using a luxurious wedding dress placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-champagne to-cream" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594552072238-5c4a8e0a4e46?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-90" />

      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main headline - editorial typography */}
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight">
            <span className="block">Your Dream</span>
            <span className="block italic text-gold">Wedding Dress</span>
            <span className="block">Awaits</span>
          </h1>

          {/* Subtitle - elegant and concise */}
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover Ireland's most exclusive bridal collections in our boutique sanctuary
          </p>

          {/* Primary CTA - Book Appointment */}
          <div className="pt-8 space-y-4">
            <a
              href="#appointments"
              className="inline-block px-10 py-4 bg-white text-charcoal font-playfair text-lg tracking-wide hover:bg-dove transition-colors min-w-[220px]"
            >
              Book Your Appointment
            </a>

            {/* Secondary CTA - Browse Collections */}
            <a
              href="#collections"
              className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-playfair text-lg tracking-wide hover:bg-white hover:text-charcoal transition-colors min-w-[220px] ml-4"
            >
              Browse Collections
            </a>
          </div>

          {/* Luxury tagline */}
          <div className="pt-12">
            <p className="font-inter text-sm text-white/80 tracking-widest uppercase">
              Private Styling Sessions • Exclusive Designer Edit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
