import { motion } from 'motion/react';
import { Quote, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden pt-24 pb-48 lg:pb-64 bg-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Beautiful Seneca Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              className="bg-brand-orange text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-xl border border-brand-orange-hover/25"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <Quote className="w-12 h-12 text-brand-peach opacity-90 mb-6" />
              
              <div className="space-y-4">
                <blockquote className="text-xl sm:text-2xl font-serif font-medium leading-relaxed tracking-tight text-white">
                  &ldquo;Het is niet dat we een kort leven hebben, maar dat we veel ervan verspillen.&rdquo;
                </blockquote>
                <div className="h-px bg-white/20 w-16" />
                <cite className="block text-xs font-mono uppercase tracking-widest text-brand-peach font-bold not-italic">
                  — Seneca
                </cite>
              </div>

              {/* Little decorative element removed as requested */}
            </motion.div>

            {/* Seneca quote 2 with Wise Elephant Thumbs-up image */}
            <div className="bg-[#FAF3F0] border border-brand-orange/15 p-5 rounded-2xl flex items-center gap-4 shadow-sm relative overflow-hidden">
              <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-white bg-brand-orange shadow-xs">
                <img 
                  src="/IMG/LR_Olifant_v2.png" 
                  alt="De Wijze Olifant Thumbs Up" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-orange uppercase tracking-wider font-mono">
                  <span className="w-1.5 h-1.5 bg-brand-sage rounded-full" />
                  <span>Advies van de Wijze Olifant</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-dark italic font-semibold leading-relaxed">
                  &ldquo;Vrijheid is niet het stoppen met werken, maar het starten met kiezen.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: Explaining the problem vs. the solution */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-brand-orange">
                Filosofie & Inzicht
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                Waarom we dit hebben gebouwd
              </h2>
              <p className="text-base text-[#767676] leading-relaxed">
                Mensen leven vaak alsof ze oneindig de tijd hebben. We stellen onze dromen uit tot &apos;later&apos;, tot dat magische moment van pensioen. Maar wanneer begint dat eigenlijk, en hoe vitaal ben je dan nog?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* The Problem */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-sm">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase text-brand-dark tracking-wider">
                    Het Probleem
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#767676] leading-relaxed">
                  We werken klakkeloos door tot ons 67ste (of later) en vergeten dat onze gezonde, actieve jaren eindig zijn. We leven op de automatische piloot zonder de regie over onze tijd te hebben.
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center text-white shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase text-brand-dark tracking-wider">
                    De Oplossing
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#767676] leading-relaxed">
                  Life Horizon geeft je een visuele, gepersonaliseerde &apos;reality check&apos;. Een prachtige, levendige levensmatrix die je direct stimuleert om bewuster om te gaan met elke dag die voor je ligt.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Panoramic Horizon Footer before the dark footer */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[250px] sm:h-[350px] lg:h-[450px] z-0 pointer-events-none"
        style={{ 
          backgroundImage: "url('/IMG/horizon-balk.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "bottom right",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)"
        }} 
      />

      {/* Mascot overlaid on horizon */}
      <div className="absolute bottom-0 right-8 sm:right-16 lg:right-32 z-10 w-28 sm:w-40 lg:w-56 pointer-events-none origin-bottom translate-y-2">
        <img 
          src="/IMG/LR_Olifant_v2.png" 
          alt="Wijze Olifant" 
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
