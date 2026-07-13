import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "Dit gaf me écht het zetje om minder te gaan overwerken en vaker met mijn kinderen te zijn. Hard confronterend, maar precies wat ik nodig had.",
    author: "Anonieme Gebruiker",
    role: "Vader van 2",
    rating: 5
  },
  {
    quote: "Ik dacht altijd dat ik 'nog zeeën van tijd' had voor mijn droomreis. Life Horizon liet me zien hoe snel die tijd in de realiteit op is. Eye-opener!",
    author: "Anonieme Gebruiker",
    role: "Ondernemer",
    rating: 5
  },
  {
    quote: "De levensmatrix is simpelweg briljant. Je ziet je hele leven in één oogopslag. Het heeft mijn perspectief op 'druk zijn' volledig veranderd.",
    author: "Anonieme Gebruiker",
    role: "Manager",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-[#FAF9F8]">
      <div className="max-w-6xl mx-auto px-6">
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
