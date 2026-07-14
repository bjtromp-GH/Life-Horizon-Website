import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Heart, Info, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import StatsCalculator from './components/StatsCalculator';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import TrustBadges from './components/TrustBadges';
import Reviews from './components/Reviews';

export default function App() {
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#2D2D2D]">
      {/* Sticky Translucent Header */}
      <header className="sticky top-0 z-50 flex flex-col">
        <div className="bg-brand-orange/95 backdrop-blur-md border-b border-black/20 text-white relative z-10">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo Brand */}
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-white" />
              <span className="font-black text-white tracking-tight text-lg">
                Life <span className="opacity-90">Horizon</span>
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden sm:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-white/80">
              <a href="#calculator-section" className="hover:text-white transition">
                Rekenmodel
              </a>
              <a href="#features-section" className="hover:text-white transition">
                Mogelijkheden
              </a>
              <a href="#philosophy-section" className="hover:text-white transition text-xs">
                Onze Visie
              </a>
            </nav>

            {/* Action Button & Info */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setShowInfoPanel(!showInfoPanel)}
                className={`p-2 rounded-full transition-colors ${showInfoPanel ? 'bg-white/20' : 'hover:bg-white/10'}`}
                aria-label="Meer informatie"
              >
                <Info className="w-5 h-5 text-white" />
              </button>
              <a
                href="#calculator-section"
                className="bg-white hover:bg-[#FAF3F0] text-brand-orange text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition shadow-xs hover:shadow-md cursor-pointer"
              >
                Bereken Nu
              </a>
            </div>
          </div>
        </div>

        {/* Info Slide-down Panel */}
        <AnimatePresence>
          {showInfoPanel && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#1C1C1C] overflow-hidden border-b border-black relative z-0 shadow-lg"
            >
              <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <img 
                    src="/IMG/olifant-bril.webp" 
                    alt="Wise Elephant" 
                    className="w-16 sm:w-20 md:w-24 h-auto object-contain shrink-0 drop-shadow-md transform -scale-x-100" 
                  />
                  <div className="max-w-2xl space-y-1.5">
                    <h4 className="text-white font-bold tracking-tight text-sm sm:text-base">Jouw tijd is nu.</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      Life Horizon is gebouwd met één missie: jou inzicht geven in je meest waardevolle bezit. Het is geen tool om je bang te maken, maar een kompas om je te helpen keuzes te maken die er écht toe doen.
                    </p>
                  </div>
                </div>
                <a
                  href="https://life-horizon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition flex items-center gap-2"
                >
                  Ontdek de volledige app
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Top App Download Banner */}
      <div className="bg-[#1C1C1C] text-white px-4 py-4 sm:py-3 text-center flex flex-col sm:flex-row items-center justify-center gap-3 relative z-40 shadow-sm border-b border-black/20">
        <span className="text-xs sm:text-sm font-medium text-gray-200">
          De volledige Life Horizon ervaring is nu exclusief beschikbaar voor Android!
        </span>
        <a
          href="https://life-horizon.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-orange hover:bg-brand-orange-hover text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition shadow-xs whitespace-nowrap"
        >
          DOWNLOAD DE APP IN DE PLAYSTORE
        </a>
      </div>

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Interactive Calculator Section */}
        <section id="calculator-section" className="pt-16 md:pt-20 pb-24 bg-white px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <motion.div 
              className="inline-flex items-center gap-1.5 bg-brand-peach border border-brand-orange/20 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-orange uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Interactieve Calculator
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight max-w-[95%] mx-auto">
              Je weet hoeveel geld je hebt.<br />
              Waarom weet je niet hoeveel tijd je <br className="hidden sm:block" />
              waarschijnlijk nog hebt?
            </h2>
            <p className="text-[#767676] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Ontdek in twee minuten hoe jouw verwachte levensjaren verdeeld zijn en krijg een nieuw perspectief op werk, gezondheid en vrijheid.
            </p>
          </div>
          <StatsCalculator />
        </section>

        {/* 2b. Trust badges marquee row */}
        <TrustBadges />

        {/* 2c. Social Proof / Reviews */}
        <Reviews />

        {/* 3. Features Bento Grid */}
        <div id="features-section" className="relative mt-8 sm:mt-0">
          {/* Mobile Coach Elephant sitting on top of the orange section */}
          <motion.div 
            className="absolute top-0 right-8 w-32 z-20 pointer-events-none sm:hidden -translate-y-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          >
            <img src="/IMG/olifant-polo.webp" alt="AI Coach" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>
          <Features />
        </div>

        {/* 4. Philosophy & Quote Section */}
        <div id="philosophy-section">
          <Philosophy />
        </div>
      </main>

      {/* 5. Footer & Call to action */}
      <Footer />
    </div>
  );
}

