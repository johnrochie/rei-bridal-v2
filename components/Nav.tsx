import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-pearl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - minimal branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Rei Bridal"
                width={45}
                height={45}
                className="rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
              />
            </div>
            <span className="font-playfair text-xl font-medium tracking-wide text-charcoal">
              Rei Bridal
            </span>
          </Link>

          {/* Minimal navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#collections" className="text-charcoal/70 hover:text-charcoal font-inter text-sm tracking-wide transition-colors">
              Collections
            </Link>
            <Link href="#designers" className="text-charcoal/70 hover:text-charcoal font-inter text-sm tracking-wide transition-colors">
              Designers
            </Link>
            <Link href="#real-brides" className="text-charcoal/70 hover:text-charcoal font-inter text-sm tracking-wide transition-colors">
              Real Brides
            </Link>
          </div>

          {/* Primary CTA - Book Appointment */}
          <Link
            href="#appointments"
            className="px-6 py-2.5 bg-charcoal text-dove font-inter text-sm tracking-wide hover:bg-charcoal/80 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
