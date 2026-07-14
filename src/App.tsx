import React from 'react';
import { motion } from 'motion/react';
import { Compass, Heart } from 'lucide-react';
import Hero from './components/Hero';
import StatsCalculator from './components/StatsCalculator';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import TrustBadges from './components/TrustBadges';
import Reviews from './components/Reviews';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#2D2D2D]">
      {/* Sticky Translucent Header */}
      <header className="sticky top-0 z-50 bg-brand-orange/95 backdrop-blur-md border-b border-white/10 text-white">
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

          {/* Action Button */}
          <div>
            <a
              href="#calculator-section"
              className="bg-white hover:bg-[#FAF3F0] text-brand-orange text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition shadow-xs hover:shadow-md cursor-pointer"
            >
              Bereken Nu
            </a>
          </div>
        </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Je weet hoeveel geld je hebt.<br className="hidden sm:block" />
              Waarom weet je niet hoeveel tijd je waarschijnlijk nog hebt?
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
        <div id="features-section">
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

