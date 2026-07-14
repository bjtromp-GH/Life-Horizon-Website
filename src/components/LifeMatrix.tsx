import React, { memo } from 'react';
import { motion } from 'motion/react';

interface LifeMatrixProps {
  age: number;
  youthYears: number;
  aowAge: number;
  lifeExpectancy: number;
}

const LifeMatrix = memo(function LifeMatrix({ age, youthYears, aowAge, lifeExpectancy }: LifeMatrixProps) {
  // Determine how many decades to show. Show at least up to life expectancy.
  // Standard is 90 years (9 rows) or 100 years (10 rows).
  const totalYears = Math.max(100, Math.ceil((lifeExpectancy + 1) / 10) * 10);
  const decades = totalYears / 10;

  return (
    <div className="bg-[#FAF9F8] rounded-3xl p-4 sm:p-6 md:p-8 border border-[#EAEAEA] overflow-hidden w-full">
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="text-xs sm:text-sm font-bold text-gray-500 tracking-[0.2em] uppercase">
          Levensmatrix
        </h3>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-3 sm:gap-6 text-[10px] sm:text-xs md:text-sm font-mono text-gray-600">
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

      <div className="relative pb-2 flex justify-center">
        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2.5 w-full max-w-fit mx-auto">
          {Array.from({ length: decades }).map((_, decadeIndex) => (
            <div key={decadeIndex} className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              {/* Row Label */}
              <div className="w-6 sm:w-10 md:w-12 text-right font-mono text-gray-400 sm:text-gray-500 text-[9px] sm:text-[11px] md:text-sm -mr-0.5 sm:mr-0">
                {decadeIndex * 10}<span className="hidden sm:inline"> jr</span>
              </div>
              
              {/* Year Blocks */}
              <div className="flex gap-1 sm:gap-1.5 md:gap-2.5 flex-1 justify-between sm:justify-start">
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
                  let blockClass = "w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-[4px] sm:rounded-md flex items-center justify-center font-mono text-[9px] sm:text-xs md:text-sm transition-all ";
                  
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
});

export default LifeMatrix;
