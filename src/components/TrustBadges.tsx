import React from 'react';
import { 
  ShieldCheck, 
  Grid, 
  PieChart, 
  Clock, 
  Dna, 
  Heart, 
  Compass, 
  UserCheck 
} from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { text: "Jouw Levensmatrix", icon: <Grid className="w-5 h-5 text-brand-orange" /> },
    { text: "Het 25/50/25 Model", icon: <PieChart className="w-5 h-5 text-brand-orange" /> },
    { text: "Persoonlijke Tijdlijn", icon: <Clock className="w-5 h-5 text-brand-orange" /> },
    { text: "Wetenschappelijk Onderbouwd", icon: <Dna className="w-5 h-5 text-brand-orange" /> },
    { text: "Impact van Leefstijl", icon: <Heart className="w-5 h-5 text-brand-orange" /> },
    { text: "Start je Vrijheid", icon: <Compass className="w-5 h-5 text-brand-orange" /> },
    { text: "100% Lokaal & Veilig", icon: <ShieldCheck className="w-5 h-5 text-brand-orange" /> },
    { text: "Geen Account Nodig", icon: <UserCheck className="w-5 h-5 text-brand-orange" /> },
  ];

  // We duplicate rows to create a smooth, continuous loop
  const row1 = [...badges, ...badges, ...badges];
  const row2 = [...badges.slice(4), ...badges.slice(0, 4), ...badges.slice(4), ...badges.slice(0, 4), ...badges.slice(4), ...badges.slice(0, 4)];

  return (
    <section className="py-12 bg-brand-cream border-y border-brand-peach w-full overflow-hidden relative shadow-2xs">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 55s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 55s linear infinite;
        }
        .pause-row:hover .animate-marquee-left,
        .pause-row:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="w-full text-center mb-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark/60 font-mono">
          Jouw onafhankelijke Life & Wealth partner
        </h3>
      </div>

      <div className="relative flex flex-col gap-5 w-full">
        {/* Soft edge gradients and solid outer blocks that constrain the visible marquee precisely to the max-w-6xl content width boundaries */}
        <div className="absolute inset-y-0 left-0 right-0 max-w-6xl mx-auto px-6 pointer-events-none z-20">
          {/* Left Block and Gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-cream to-transparent hidden md:block" />
          <div className="absolute right-full mr-[-24px] top-0 bottom-0 w-screen bg-brand-cream hidden md:block" />

          {/* Right Block and Gradient */}
          <div className="absolute right-6 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-cream to-transparent hidden md:block" />
          <div className="absolute left-full ml-[-24px] top-0 bottom-0 w-screen bg-brand-cream hidden md:block" />
        </div>

        {/* Row 1 - Marquee Moving Left */}
        <div className="flex overflow-hidden select-none gap-5 relative w-full pause-row">
          <div className="flex flex-nowrap shrink-0 gap-5 animate-marquee-left">
            {row1.map((item, idx) => (
              <div 
                key={`r1-${idx}`}
                className="bg-white border border-[#E9E4E2] px-6 py-3.5 rounded-full flex items-center gap-3 shadow-2xs whitespace-nowrap text-sm font-semibold text-brand-dark hover:border-brand-orange hover:shadow-xs transition-all duration-200 cursor-default"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Marquee Moving Right */}
        <div className="flex overflow-hidden select-none gap-5 relative w-full pause-row">
          <div className="flex flex-nowrap shrink-0 gap-5 animate-marquee-right">
            {row2.map((item, idx) => (
              <div 
                key={`r2-${idx}`}
                className="bg-white border border-[#E9E4E2] px-6 py-3.5 rounded-full flex items-center gap-3 shadow-2xs whitespace-nowrap text-sm font-semibold text-brand-dark hover:border-brand-orange hover:shadow-xs transition-all duration-200 cursor-default"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
