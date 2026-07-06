import React from 'react';
import { motion } from 'motion/react';

interface LifeMatrixProps {
  age: number;
  youthYears: number;
  aowAge: number;
  lifeExpectancy: number;
}

export default function LifeMatrix({ age, youthYears, aowAge, lifeExpectancy }: LifeMatrixProps) {
  // Determine how many decades to show. Show at least up to life expectancy.
  // Standard is 90 years (9 rows) or 100 years (10 rows).
  const totalYears = Math.max(100, Math.ceil((lifeExpectancy + 1) / 10) * 10);
  const decades = totalYears / 10;

  return (
    <div className="bg-[#FAF9F8] rounded-3xl p-6 sm:p-8 border border-[#EAEAEA] overflow-hidden">
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">
          Levensmatrix
        </h3>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-mono text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-brand-dark opacity-90" />
            <span>Ontwikkeling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-brand-orange opacity-90" />
            <span>Werk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-brand-sage opacity-90" />
            <span>Vrijheid</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-4">
        <div className="min-w-[600px] flex flex-col gap-2.5">
          {Array.from({ length: decades }).map((_, decadeIndex) => (
            <div key={decadeIndex} className="flex items-center gap-3">
              {/* Row Label */}
              <div className="w-12 text-right font-mono text-gray-500 text-sm">
                {decadeIndex * 10} jr
              </div>
              
              {/* Year Blocks */}
              <div className="flex gap-2.5 flex-1">
                {Array.from({ length: 10 }).map((_, yearIndex) => {
                  const year = decadeIndex * 10 + yearIndex;
                  
                  // Determine phase
                  let phase = 'youth';
                  if (year >= youthYears && year < aowAge) phase = 'work';
                  if (year >= aowAge) phase = 'freedom';

                  // Determine state (past, current, future, beyond)
                  const isPast = year < age;
                  const isCurrent = year === age;
                  const isFuture = year > age && year <= lifeExpectancy;
                  const isBeyond = year > lifeExpectancy;

                  // Styling
                  let blockClass = "w-10 h-10 rounded-md flex items-center justify-center font-mono text-sm transition-all ";
                  
                  if (isBeyond) {
                    blockClass += "border border-dashed border-gray-300 text-transparent";
                  } else if (phase === 'youth') {
                    if (isPast) blockClass += "bg-brand-dark/90 text-white/70";
                    else if (isCurrent) blockClass += "bg-brand-dark text-white font-bold ring-2 ring-brand-dark/30 ring-offset-2";
                    else blockClass += "bg-brand-dark/20 text-brand-dark/60";
                  } else if (phase === 'work') {
                    if (isPast) blockClass += "bg-brand-orange text-white/80";
                    else if (isCurrent) blockClass += "bg-brand-orange text-white font-bold shadow-md scale-110 z-10";
                    else blockClass += "bg-brand-orange/30 text-brand-orange/80";
                  } else if (phase === 'freedom') {
                    if (isPast) blockClass += "bg-brand-sage text-white/80";
                    else if (isCurrent) blockClass += "bg-brand-sage text-white font-bold shadow-md scale-110 z-10";
                    else blockClass += "bg-brand-sage/40 text-brand-sage/80";
                  }

                  return (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: isCurrent ? 1.1 : 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.3, 
                        delay: Math.min((decadeIndex * 10 + yearIndex) * 0.005, 1.5) // Staggered reveal, capped at 1.5s
                      }}
                      className={blockClass}
                    >
                      {isBeyond ? null : year}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
