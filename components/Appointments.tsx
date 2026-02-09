export default function Appointments() {
  return (
    <section id="appointments" className="py-24 bg-champagne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Booking experience info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
                Book Your Appointment
              </h2>
              <p className="font-inter text-xl text-charcoal/70 leading-relaxed">
                Experience the magic of a private styling session in our intimate bridal loft. Bring your closest friends, sip champagne, and discover your dream dress in a relaxed, supportive environment.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">✓</span>
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-charcoal mb-1">
                    Private 60-Minute Sessions
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm">
                    One-on-one attention from our expert bridal stylists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">✓</span>
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-charcoal mb-1">
                    Exclusive Designer Edit
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm">
                    Access to collections not available elsewhere in Ireland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">✓</span>
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-charcoal mb-1">
                    Bring Your Besties
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm">
                    Share the experience with up to 4 guests
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">✓</span>
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-charcoal mb-1">
                    Relaxed Boutique Atmosphere
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm">
                    Champagne bar, light refreshments, and no sales pressure
                  </p>
                </div>
              </div>
            </div>

            {/* Location info */}
            <div className="pt-8 border-t border-charcoal/10">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-charcoal">
                  <span className="text-lg">📍</span>
                  <span className="font-inter">Rei Bridal Boutique, Dublin</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal">
                  <span className="text-lg">📞</span>
                  <span className="font-inter">+353 1 234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal">
                  <span className="text-lg">📧</span>
                  <span className="font-inter">hello@reibridal.ie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking form */}
          <div className="bg-white p-10 shadow-lg">
            <h3 className="font-playfair text-3xl text-charcoal mb-2">
              Request Appointment
            </h3>
            <p className="font-inter text-charcoal/60 text-sm mb-8">
              Fill out the form and we'll confirm your reservation within 24 hours
            </p>

            <form className="space-y-6">
              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove"
                  placeholder="Full name"
                  required
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove"
                  placeholder="+353 87 XXX XXXX"
                  required
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove"
                  required
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Preferred Time
                </label>
                <select className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove" required>
                  <option value="">Select time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:30">2:30 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Number of Guests (including yourself)
                </label>
                <select className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove" required>
                  <option value="">Select</option>
                  <option value="1">1 (Just me)</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-dove resize-none"
                  placeholder="Tell us about your dream dress or any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-charcoal text-dove font-playfair text-lg tracking-wide hover:bg-charcoal/80 transition-colors"
              >
                Submit Request
              </button>

              <p className="font-inter text-xs text-charcoal/60 text-center">
                By submitting, you agree to receive communications about your appointment
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
