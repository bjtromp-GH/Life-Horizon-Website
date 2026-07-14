import { motion } from 'motion/react';
import { Compass, Heart, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="cta-section" className="bg-[#1C1C1C] text-[#FAF3F0] relative overflow-hidden pt-20 pb-12">
      {/* Dynamic ambient highlight background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Big Second CTA Section */}
        <div className="text-center max-w-3xl mx-auto space-y-8 pb-12 border-b border-white/10">
          <motion.div 
            className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-brand-orange uppercase tracking-wider"
            whileInView={{ scale: [1, 1.05, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Neem Regie Over Je Leven
          </motion.div>

          <h2 id="cta-header" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Tijd is je meest<br />waardevolle bezit.
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Wil je jouw levensbalk in veel meer detail analyseren? Begin vandaag met meten en ontdek de echte, gepersonaliseerde waarde van jouw jaren in de officiële Life Horizon app.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#calculator-section" 
              className="inline-flex bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-md hover:shadow-xl cursor-pointer"
            >
              Start jouw Levensmeting
            </a>
            <a 
              href="https://life-horizon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white hover:bg-gray-100 text-brand-dark text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-md hover:shadow-xl cursor-pointer"
            >
              Download de app in de Playstore
            </a>
          </div>

          <p className="text-xs italic text-gray-500 max-w-2xl mx-auto leading-relaxed pt-2">
            &ldquo;Het is niet dat we een kort leven hebben, maar dat we veel ervan verspillen.&rdquo; — Seneca
          </p>
        </div>

        {/* Lower Footer Branding & Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-sm text-gray-400">
          
          {/* Logo Brand column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-brand-orange" />
              <span className="font-extrabold text-white text-lg tracking-tight">Life Horizon</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Een moderne lifetech tool om de balans tussen jeugd, carrière en de vrijheidsfase opnieuw te overdenken. Gevoed door actuele CBS-cohort prognoses en levenskwaliteit indicatoren.
            </p>
          </div>

          {/* Legal / Info Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Privacy & Veiligheid
            </h4>
            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-brand-sage" />
                <span>Geen cloud-opslag</span>
              </div>
              <div>Geen tracking of ad-pixel scripts. Al je ingevoerde gegevens worden lokaal verwerkt en niet opgeslagen op externe servers.</div>
            </div>
          </div>

          {/* Core concept column */}
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Het Horizon Ecosysteem
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trots lid van het eco-systeem met apps zoals <strong>Financiële Horizon</strong> en <strong>Life Horizon</strong>. Technische precisie ontmoet hoogwaardige esthetische standaarden.
              </p>
            </div>
            <img 
              src="/IMG/beste_app_badge.webp" 
              alt="Beste App" 
              className="w-20 h-auto opacity-70 hover:opacity-100 transition-opacity drop-shadow-md"
            />
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} Life Horizon. Alle rechten voorbehouden.</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span>Met passie gebouwd voor een betere balans</span>
            <Heart className="w-3 h-3 text-brand-orange fill-brand-orange" />
          </div>
        </div>

      </div>
    </footer>
  );
}
