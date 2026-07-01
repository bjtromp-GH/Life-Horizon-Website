import { motion } from 'motion/react';

export default function MascotIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center py-4 lg:py-8">
      {/* Background ambient glow matching the warm sunset theme of the savanna */}
      <motion.div 
        className="absolute inset-0 bg-radial from-[#D56B45]/20 via-[#FAF3F0]/10 to-transparent rounded-full opacity-60 blur-3xl pointer-events-none"
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      {/* The main picture itself (just the png transparent mascot) */}
      <motion.div 
        className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center cursor-pointer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        whileTap={{ scale: 0.95, rotate: -3 }}
        onClick={() => {
          // Use MP3 format instead of OGG for iOS Safari compatibility
          const audio = new Audio("https://orangefreesounds.com/wp-content/uploads/2014/10/Elephant-trumpet-sound.mp3");
          audio.volume = 0.5;
          audio.play().catch(e => console.log("Audio play failed:", e));
        }}
      >
        <img 
          src="/IMG/olifant-bril.png" 
          alt="Life Horizon Wijze Olifant" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain select-none"
        />
      </motion.div>
    </div>
  );
}
