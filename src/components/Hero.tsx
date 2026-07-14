import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import MascotIllustration from './MascotIllustration';

const TypewriterHeadline = () => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const fullString = "Ontdek hoeveel tijd je écht nog hebt.";
  
  useEffect(() => {
    if (displayedLength < fullString.length) {
      const timeout = setTimeout(() => {
        setDisplayedLength(prev => prev + 1);
      }, 50); // 50ms per char speed
      return () => clearTimeout(timeout);
    }
  }, [displayedLength]);

  const currentString = fullString.substring(0, displayedLength);
  
  const part1 = currentString.substring(0, 23);
  const part2 = currentString.substring(23, 27);
  const part3 = currentString.substring(27);

  return (
    <>
      {part1}
      {part2 && <span className="text-brand-orange">{part2}</span>}
      {part3}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[0.8em] bg-brand-orange ml-1 align-middle relative -top-[0.1em]"
      />
    </>
  );
};

export default function Hero() {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
  const mascotDelay = isMobile ? 1.0 : 0.2;

  return (
    <section className="relative overflow-hidden pt-4 sm:pt-24 lg:pt-36 pb-16 lg:pb-32 bg-white">
      {/* Panoramic Horizon Footer inside Hero */}
      <div 
        className="absolute -bottom-16 md:-bottom-24 left-0 w-full h-[250px] sm:h-[350px] lg:h-[450px] z-0 pointer-events-none"
        style={{ 
          backgroundImage: "url('/IMG/horizon-balk.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "bottom right",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)"
        }} 
      />

      {/* New Top Background fading to white (Mobile) */}
      <div 
        className="absolute top-0 left-0 w-full h-[400px] sm:h-[500px] lg:hidden z-0 pointer-events-none opacity-80"
        style={{ 
          backgroundImage: "url('/IMG/lifehorizon-calculation-bg.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "top center",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
        }} 
      />

      {/* New Top Background fading to white (Desktop) - Softer & customized fade */}
      <div 
        className="hidden lg:block absolute top-0 left-0 w-full h-[650px] z-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: "url('/IMG/lifehorizon-calculation-bg.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "top center",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 65%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 65%)"
        }} 
      />

      {/* Soft background gradients for top corners to break up the white space */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-[#D56B45]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      <div className="absolute top-10 right-0 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-[#86A789]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Tag/Badge */}
            <motion.div 
              className="inline-flex items-center gap-1.5 bg-brand-peach border border-brand-orange/15 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-brand-orange uppercase tracking-wider"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Nieuwe Bewustzijn App
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark tracking-tight leading-none min-h-[3em] sm:min-h-[2.5em] md:min-h-[2em]">
                <TypewriterHeadline />
              </h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-[#767676] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Krijg direct een voorproefje van jouw levensloop via deze interactieve web-calculator. De <strong>volledige, diepgaande ervaring</strong> om de controle over jouw tijd en gewoonten terug te pakken, vind je exclusief in de Life Horizon app.
              </motion.p>
            </div>

            {/* CTAs and trust badging */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a 
                href="#calculator-section" 
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Bereken mijn Levensloop (Gratis)
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#features-section" 
                className="border border-[#E9E4E2] hover:border-brand-orange bg-[#FAF9F8]/50 hover:bg-[#FAF9F8] text-brand-dark px-6 py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Meer weten
              </a>
            </motion.div>

            {/* Trust factors */}
            <motion.div 
              className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start pt-4 text-xs font-mono text-[#767676]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-brand-sage" />
                <span>Op basis van actuele CBS-data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-sage" />
                <span>100% lokaal & anoniem</span>
              </div>
            </motion.div>
          </div>

          {/* Right Mascot Illustration Column */}
          <motion.div 
            className="lg:col-span-5 relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: mascotDelay }}
          >
            <MascotIllustration delay={mascotDelay} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
