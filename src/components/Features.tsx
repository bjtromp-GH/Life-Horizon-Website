import { motion } from 'motion/react';
import { 
  Heart, 
  Dna, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Eye, 
  Clock 
} from 'lucide-react';

export default function Features() {
  const list = [
    {
      icon: <Eye className="w-6 h-6 text-brand-orange" />,
      title: "De Confrontatie",
      desc: "Zie direct welk percentage van je verwachte leven je al hebt 'verbruikt', en hoeveel procent je nog hebt. Confronterend, maar uiterst verhelderend.",
      badge: "Inzicht"
    },
    {
      icon: <Dna className="w-6 h-6 text-brand-orange" />,
      title: "De Genetische Factor",
      desc: "Onze slimme algoritmes houden rekening met je genetische aanleg op basis van de levensduur van je biologische ouders en CBS-cohortprognoses.",
      badge: "Wetenschappelijk"
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-orange" />,
      title: "Het 25 / 50 / 25 Model",
      desc: "Leer hoe een optimaal leven is opgebouwd volgens Seneca: 25% jeugd en groei, 50% werk en opbouw, en 25% pure, onvoorwaardelijke vrijheid.",
      badge: "Filosofie"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
      title: "Privacy First",
      desc: "Jouw levensgegevens zijn van jou. Alles wordt lokaal in je browser berekend. Geen accounts, geen trackers, geen verkoop aan verzekeraars.",
      badge: "Veilig"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#E25C26] via-[#D56B45] to-[#B84E29] text-white relative overflow-hidden">
      {/* Abstract warm ambient circle decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.div 
            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-white uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-peach animate-pulse" />
            Unieke Mogelijkheden
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Niet zomaar statistiek.<br />Een kompas voor je leven.
          </h2>
          <p className="text-base text-brand-peach/90 leading-relaxed font-light">
            Life Horizon is geen saaie spreadsheet vol cijfers, maar een interactieve ervaring die je helpt bewust stil te staan bij je kostbare tijd.
          </p>
        </div>

        {/* Features Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {list.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -4 }}
              className="bg-white p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden text-brand-dark"
            >
              {/* Subtle hover gradient decoration */}
              <div className="absolute inset-0 bg-[#FAF3F0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-brand-peach rounded-2xl inline-block">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#767676] bg-brand-cream border border-[#E9E4E2] px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#767676] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative dynamic indicator */}
              <div className="w-12 h-1 bg-brand-orange/20 rounded-full mt-6 group-hover:w-24 group-hover:bg-brand-orange transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
