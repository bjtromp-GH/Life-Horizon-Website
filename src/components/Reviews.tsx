import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "Het leven is kort. De Life Horizon app heeft mij echt inzicht gegeven zodat ik de juiste keuzes kan maken voordat het te laat is.",
    author: "Jan-Willem (42)",
    role: "Gebruiker",
    rating: 5
  },
  {
    quote: "Wow, dit is echt een nuttige app. Serieus, maar heel gaaf en interessant om inzicht te krijgen in je levensloop.",
    author: "Mark (50)",
    role: "Gebruiker",
    rating: 5
  },
  {
    quote: "Door het CBS model en mijn eigen leefstijlfactoren te combineren heb ik een veel beter beeld van mijn toekomst. Ik ben direct actiever gaan sporten.",
    author: "Sophie (35)",
    role: "Gebruiker",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-[#FAF9F8] relative overflow-hidden">
      {/* Background image (Mobile) */}
      <div 
        className="absolute top-0 left-0 w-full h-full lg:hidden z-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: "url('/IMG/lifehorizon-calculation-bg.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
        }} 
      />

      {/* Background image (Desktop) - Softer & customized fade */}
      <div 
        className="hidden lg:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: "url('/IMG/lifehorizon-calculation-bg.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 65%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 65%)"
        }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-1.5 bg-brand-sage/10 border border-brand-sage/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-brand-sage uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Ervaringen van anderen
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Wat testgebruikers zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAEAEA] flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-[#2D2D2D] leading-relaxed mb-6 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <span className="text-brand-orange font-bold font-mono">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm text-brand-dark">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
