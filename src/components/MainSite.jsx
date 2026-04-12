import React, { useEffect, useState } from 'react';

export default function MainSite() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-gray-800 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navScrolled ? 'bg-white/90 backdrop-blur shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-serif font-medium tracking-wide">A & P</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-semibold text-gray-500">
            <a href="#story" className="hover:text-[var(--color-sage-500)] transition">Our Story</a>
            <a href="#schedule" className="hover:text-[var(--color-sage-500)] transition">Schedule</a>
            <a href="#travel" className="hover:text-[var(--color-sage-500)] transition">Travel & Stay</a>
            <a href="#rsvp" className="hover:text-[var(--color-sage-500)] transition">RSVP</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-12 px-6 max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-sage-600)] mb-4 tracking-tight">Alexis & Paul</h1>
          <p className="text-gray-600 text-xl font-serif italic mb-2 tracking-wide">July 31, 2027</p>
          <p className="text-gray-500 text-sm uppercase tracking-widest">The Stavrand, Guerneville, CA</p>
        </div>

        <div className="w-full max-w-4xl mx-auto border-8 border-white shadow-xl overflow-hidden rounded-sm bg-white">
          <img src="/alexispaul.webp" alt="Alexis and Paul" className="w-full h-auto object-contain" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
        {/* Story Section */}
        <section id="story" className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-sage-600)] mb-8">Our Story</h2>
          <p className="leading-relaxed text-gray-600 max-w-2xl mx-auto">
            We are so excited to celebrate with our favorite people in one of our favorite places.
            The Russian River valley holds a special place in our hearts, combining the majestic redwoods and the serene natural beauty that we both cherish. We can't wait to share it with you!
          </p>
        </section>

        {/* Schedule */}
        <section id="schedule" className="space-y-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-sage-600)] mb-4">The Weekend Schedule</h2>
            <div className="h-px w-24 bg-[var(--color-sage-300)] mx-auto"></div>
          </div>

          <div className="grid gap-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--color-sage-300)] flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                <p className="text-[var(--color-sage-500)] font-bold uppercase tracking-wider text-sm mb-1">Thursday</p>
                <p className="font-serif text-2xl mb-1">July 29</p>
                <p className="text-gray-500 text-sm font-medium">11:00 AM</p>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Early Arrival & Russian River Float <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase rounded mt-2 md:mt-0 md:ml-2 align-middle">Extra Optional</span></h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">Daytime</p>
                <p className="text-gray-600">Come join us as we ford the Russian River in a sun-soaked afternoon of celebration before we keep living our life together. We’ll have the inflatables ready for the brave, so just bring your sunscreen and prepare to surrender to the lazy river of life.</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--color-sage-300)] flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                <p className="text-[var(--color-sage-500)] font-bold uppercase tracking-wider text-sm mb-1">Friday</p>
                <p className="font-serif text-2xl mb-1">July 30</p>
                <p className="text-gray-500 text-sm font-medium">8:00 PM</p>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Welcome Party <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs font-bold tracking-wider uppercase rounded mt-2 md:mt-0 md:ml-2 align-middle">Optional</span></h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">The Stavrand: Evening</p>
                <p className="text-gray-600">Join us for welcome drinks and light bites to kick off the celebration weekend together.</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-l-4 border-l-[var(--color-sage-500)] flex flex-col md:flex-row gap-6 items-center transform md:-translate-y-2 transition-transform">
              <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                <p className="text-[var(--color-sage-600)] font-bold uppercase tracking-wider text-sm mb-1">Saturday</p>
                <p className="font-serif text-2xl text-[var(--color-sage-600)] mb-1">July 31</p>
                <p className="text-[var(--color-sage-500)] text-sm font-bold">6:00 PM</p>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">The Wedding Ceremony & Reception</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">The Stavrand: Evening</p>
                <p className="text-gray-600">Our main event. Dinner, dancing, and celebrating under the stars.</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--color-sage-300)] flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                <p className="text-[var(--color-sage-500)] font-bold uppercase tracking-wider text-sm mb-1">Sunday</p>
                <p className="font-serif text-2xl mb-1">August 1</p>
                <p className="text-gray-500 text-sm font-medium">10:00 AM</p>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Goodbye Breakfast <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs font-bold tracking-wider uppercase rounded mt-2 md:mt-0 md:ml-2 align-middle">Optional</span></h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">TBD: Morning</p>
                <p className="text-gray-600">Grab a bite and some coffee before heading home. We'll be around to say our farewells.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel & Stay */}
        <section id="travel" className="bg-[var(--color-sage-300)]/10 -mx-6 px-6 py-20 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-sage-600)] mb-8">Travel & Stay</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-gray-600 mb-12">
            <p>
              The Stavrand is located in the heart of Guerneville. We recommend booking your accommodations early as it is a popular summer destination.
            </p>
            <p>
              <strong>Closest Airports:</strong><br />
              Charles M. Schulz–Sonoma County Airport (STS) - 25 mins<br />
              San Francisco International Airport (SFO) - 2 hours
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto h-80 md:h-96 rounded-2xl shadow-sm border border-[var(--color-sage-300)] overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=The%20Stavrand,%20Guerneville,%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) sepia(0.3) hue-rotate(60deg) saturate(0.8)' }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location of The Stavrand"
            ></iframe>
          </div>
        </section>

        {/* RSVP Placeholder */}
        <section id="rsvp" className="text-center pb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-sage-600)] mb-8">RSVP</h2>
          <p className="text-gray-600 mb-8">Formal invitations will follow.</p>
          <div className="inline-block border border-[var(--color-sage-300)] rounded-full py-3 px-8 text-[var(--color-sage-600)] font-medium tracking-wide bg-white shadow-sm italic font-serif">
            Check back closer to the date!
          </div>
        </section>
      </main>

      <footer className="bg-[var(--color-sage-600)] text-white py-12 text-center text-sm">
        <p className="font-serif text-xl tracking-widest text-white mb-4">A & P</p>
        <p>Guerneville, California &bull; July 2027</p>
      </footer>
    </div>
  );
}
