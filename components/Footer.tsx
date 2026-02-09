export default function Footer() {
  return (
    <footer className="bg-charcoal text-dove py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl text-gold mb-4">
              Rei Bridal
            </h3>
            <p className="font-inter text-dove/70 text-sm leading-relaxed mb-6">
              Ireland's premier bridal boutique. Exclusive designer collections and private styling experiences for the modern bride.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-inter text-xs tracking-widest uppercase text-gold mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              <li><a href="#collections" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Spring 2026</a></li>
              <li><a href="#collections" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Autumn 2026</a></li>
              <li><a href="#collections" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Spring 2025</a></li>
              <li><a href="#" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Sample Sale</a></li>
            </ul>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="font-inter text-xs tracking-widest uppercase text-gold mb-6">
              Boutique
            </h4>
            <ul className="space-y-3">
              <li><a href="#designers" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Our Designers</a></li>
              <li><a href="#real-brides" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Real Brides</a></li>
              <li><a href="#appointments" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Book Appointment</a></li>
              <li><a href="#" className="font-inter text-dove/70 text-sm hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-xs tracking-widest uppercase text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-dove/70">
              <li className="font-inter text-sm">Dublin, Ireland</li>
              <li className="font-inter text-sm">+353 1 234 5678</li>
              <li className="font-inter text-sm">hello@reibridal.ie</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-dove/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-dove/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-dove/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <span>🎵</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dove/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-dove/60">
            © 2026 Rei Bridal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-xs text-dove/60 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="font-inter text-xs text-dove/60 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
