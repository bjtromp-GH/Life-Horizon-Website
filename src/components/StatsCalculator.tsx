import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Compass, 
  Activity, 
  Moon, 
  Brain, 
  User, 
  Clock, 
  Check, 
  RefreshCw, 
  Calendar,
  AlertCircle,
  HelpCircle,
  Heart
} from 'lucide-react';
import { UserProfileInputs, CalculationResults } from '../types';
import LifeMatrix from './LifeMatrix';

export default function StatsCalculator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [inputs, setInputs] = useState<UserProfileInputs>({
    age: 28,
    gender: 'man',
    sleep: 'gemiddeld',
    stress: 'gemiddeld',
    activity: 'gemiddeld',
    careerStartAge: 22
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Calculate life expectancy and matrix
  const calculateHorizon = () => {
    // 1. Base expectancy by gender (Dutch CBS standards)
    let base = inputs.gender === 'man' ? 80.3 : 83.1;

    // 2. Sleep adjustments
    if (inputs.sleep === 'weinig') base -= 2.2;
    else if (inputs.sleep === 'veel') base += 0.5;
    else base += 1.2; // optimal

    // 3. Stress adjustments
    if (inputs.stress === 'hoog') base -= 3.5;
    else if (inputs.stress === 'laag') base += 1.8;
    else base += 0.5;

    // 4. Activity adjustments
    if (inputs.activity === 'laag') base -= 2.8;
    else if (inputs.activity === 'hoog') base += 3.2;
    else base += 1.0;

    // Round to 1 decimal place
    const lifeExpectancy = Math.round(base * 10) / 10;
    const safeAge = typeof inputs.age === 'number' ? inputs.age : 28;
    const safeCareerStartAge = typeof inputs.careerStartAge === 'number' ? inputs.careerStartAge : 22;

    const yearsPassed = safeAge;
    const yearsRemaining = Math.max(0, Math.round((lifeExpectancy - yearsPassed) * 10) / 10);
    
    const percentagePassed = Math.min(100, Math.round((yearsPassed / lifeExpectancy) * 100));
    const percentageRemaining = 100 - percentagePassed;

    // Automatic AOW calculation
    const aowAge = safeAge >= 60 ? 67 : safeAge >= 40 ? 68 : 69;

    // 3 Life Phases
    const youthYears = safeCareerStartAge;
    const workYears = Math.max(0, aowAge - youthYears);
    const freedomYears = Math.max(0, Math.round((lifeExpectancy - aowAge) * 10) / 10);

    const youthPercentage = Math.round((youthYears / lifeExpectancy) * 100);
    const workPercentage = Math.round((workYears / lifeExpectancy) * 100);
    const freedomPercentage = 100 - youthPercentage - workPercentage; // Ensure sums to 100

    const workYearsRemaining = Math.max(0, Math.round((aowAge - safeAge) * 10) / 10);

    setResults({
      lifeExpectancy,
      yearsPassed,
      yearsRemaining,
      percentagePassed,
      percentageRemaining,
      aowAge,
      youthYears,
      youthPercentage,
      workYears,
      workPercentage,
      workYearsRemaining,
      freedomYears,
      freedomPercentage
    });
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setResults(null);
    
    // Scroll smoothly to the top of the calculator on mobile
    setTimeout(() => {
      const element = document.getElementById("calculator-section");
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50); // slight delay for React to render step 1
  };

  return (
    <div id="calculator-section" className="w-full max-w-4xl mx-auto bg-white border border-[#E9E4E2] rounded-3xl shadow-xl overflow-hidden">
      {/* Header Info */}
      <div className="bg-brand-orange px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-xs text-white font-bold uppercase tracking-widest">
            {step === 3 ? "Analyse Voltooid" : `Stap ${step} van 2`}
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className={`w-6 h-1 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-white' : 'bg-white/30'}`} />
          <div className={`w-6 h-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-white' : 'bg-white/30'}`} />
          <div className={`w-6 h-1 rounded-full transition-all duration-300 ${step === 3 ? 'bg-white' : 'bg-white/30'}`} />
        </div>
      </div>

      <div className="p-6 sm:p-8 md:p-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark tracking-tight">
                  <span className="sm:hidden">Basisprofiel & Levensstijl</span>
                  <span className="hidden sm:inline">Vul je basisprofiel & levensstijl in</span>
                </h3>
                <p className="text-sm text-[#767676] mt-1">
                  Je profiel en gewoonten bepalen de basis van jouw levensverwachting.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Age */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                    Jouw huidige leeftijd
                  </label>
                  <div className="relative flex items-center">
                    <input 
                      type="number" 
                      min="1" 
                      max="110" 
                      value={inputs.age}
                      onChange={(e) => setInputs({...inputs, age: e.target.value === '' ? '' : parseInt(e.target.value)})}
                      className="w-full bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xl sm:text-2xl font-bold font-mono text-brand-dark focus:outline-none focus:border-brand-orange transition"
                    />
                    <span className="absolute right-4 font-mono text-xs text-[#767676]">jaar</span>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                    Biologisch geslacht
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['man', 'vrouw'] as const).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setInputs({...inputs, gender: g})}
                        className={`py-3 text-sm rounded-xl border font-medium capitalize transition flex items-center justify-center gap-2 ${
                          inputs.gender === g 
                            ? 'bg-brand-peach border-brand-orange text-brand-orange shadow-xs' 
                            : 'bg-[#FAFAFA] border-[#EAEAEA] text-[#767676] hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <User className="w-4 h-4" />
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sleep */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                      Slaapkwaliteit / Slaapduur
                    </label>
                    <button 
                      type="button" 
                      onClick={() => setShowTooltip(showTooltip === 'sleep' ? null : 'sleep')}
                      className="text-[#767676] hover:text-brand-orange"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </div>
                  {showTooltip === 'sleep' && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-xs text-[#767676] bg-brand-cream p-2.5 rounded-lg border border-[#EAEAEA]">
                      Voldoende slaap (7-8 uur per nacht) herstelt cellen en versterkt het immuunsysteem. Structureel tekort (&lt; 6 uur) is geassocieerd met een kortere levensduur.
                    </motion.p>
                  )}
                  <div className="grid grid-cols-3 gap-2">
                    {(['weinig', 'gemiddeld', 'veel'] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setInputs({...inputs, sleep: s})}
                        className={`py-2.5 text-xs rounded-xl border font-medium capitalize transition flex flex-col items-center gap-1 ${
                          inputs.sleep === s 
                            ? 'bg-brand-peach border-brand-orange text-brand-orange' 
                            : 'bg-[#FAFAFA] border-[#EAEAEA] text-[#767676] hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <Moon className="w-4 h-4" />
                        <span>{s}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                      Stressniveau in het dagelijks leven
                    </label>
                    <button 
                      type="button" 
                      onClick={() => setShowTooltip(showTooltip === 'stress' ? null : 'stress')}
                      className="text-[#767676] hover:text-brand-orange"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </div>
                  {showTooltip === 'stress' && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-xs text-[#767676] bg-brand-cream p-2.5 rounded-lg border border-[#EAEAEA]">
                      Chronische stress verhoogt cortisol, wat schadelijk is voor hart en bloedvaten. Ontspanning verlengt het actieve leven.
                    </motion.p>
                  )}
                  <div className="grid grid-cols-3 gap-2">
                    {(['laag', 'gemiddeld', 'hoog'] as const).map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setInputs({...inputs, stress: st})}
                        className={`py-2.5 text-xs rounded-xl border font-medium capitalize transition flex flex-col items-center gap-1 ${
                          inputs.stress === st 
                            ? 'bg-brand-peach border-brand-orange text-brand-orange' 
                            : 'bg-[#FAFAFA] border-[#EAEAEA] text-[#767676] hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <Brain className="w-4 h-4" />
                        <span>{st}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                    Lichamelijke activiteit
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['laag', 'gemiddeld', 'hoog'] as const).map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setInputs({...inputs, activity: a})}
                        className={`py-2.5 px-1 text-xs rounded-xl border font-medium capitalize transition flex flex-col items-center justify-center gap-1.5 text-center ${
                          inputs.activity === a 
                            ? 'bg-brand-peach border-brand-orange text-brand-orange' 
                            : 'bg-[#FAFAFA] border-[#EAEAEA] text-[#767676] hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <Activity className="w-4 h-4 flex-shrink-0" />
                        <span className="leading-tight">{a === 'laag' ? <>Zittend<br/>(laag)</> : a === 'gemiddeld' ? <>Actief<br/>(gemiddeld)</> : <>Sportief<br/>(hoog)</>}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation button */}
              <div className="pt-4 flex sm:justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2"
                >
                  Volgende stap
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark tracking-tight">
                  Carrière & Pensioen
                </h3>
                <p className="text-sm text-[#767676] mt-1">
                  Op basis van je leeftijd berekenen we je AOW-leeftijd en de bijbehorende levensfasen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Career Start Age */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">
                    Startleeftijd carrière
                  </label>
                  <p className="text-xs text-[#767676] leading-snug">Wanneer ben je begonnen met werken?</p>
                  <div className="relative flex items-center">
                    <input 
                      type="number" 
                      min="16" 
                      max="40" 
                      value={inputs.careerStartAge}
                      onChange={(e) => setInputs({...inputs, careerStartAge: e.target.value === '' ? '' : parseInt(e.target.value)})}
                      placeholder="Bijv. 22"
                      className="w-full bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xl sm:text-2xl font-bold font-mono text-brand-dark focus:outline-none focus:border-brand-orange transition"
                    />
                    <span className="absolute right-4 font-mono text-xs text-[#767676]">jaar</span>
                  </div>
                </div>

                {/* Auto AOW Age */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">
                    Verwachte AOW-leeftijd
                  </label>
                  <p className="text-xs text-[#767676] leading-snug">Wanneer verwacht je met pensioen te gaan?</p>
                  <div className="relative flex items-center">
                    <input 
                      type="text" 
                      readOnly
                      value={`${(typeof inputs.age === 'number' ? inputs.age : 28) >= 60 ? 67 : (typeof inputs.age === 'number' ? inputs.age : 28) >= 40 ? 68 : 69} (Auto)`}
                      className="w-full bg-[#F5F5F5] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xl sm:text-2xl font-bold font-mono text-brand-orange cursor-not-allowed"
                    />
                    <span className="absolute right-4 font-mono text-xs text-[#767676]">jaar</span>
                  </div>
                </div>
              </div>

              {/* Privacy protection notice */}
              <div className="bg-brand-peach border border-brand-orange/20 rounded-2xl p-4 flex gap-3 text-xs text-brand-dark">
                <AlertCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Privacy Eerst:</span> Jouw ingevulde gegevens worden uitsluitend lokaal in je browser verwerkt om deze tijdelijke matrix te genereren. Er worden absoluut geen gegevens opgeslagen op servers of gedeeld met derden.
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto text-brand-dark hover:text-brand-orange font-semibold text-sm transition flex items-center justify-center sm:justify-start gap-2 py-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Vorige stap
                </button>

                <button
                  type="button"
                  onClick={calculateHorizon}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3.5 rounded-xl font-bold transition flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg"
                >
                  Bereken mijn Horizon!
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                  Jouw Persoonlijke Life Horizon
                </h3>
                <p className="text-sm text-[#767676] max-w-lg mx-auto">
                  Gebaseerd op de statistische CBS-cohorten en jouw unieke leefstijlfactoren is dit je verwachte levensloop.
                </p>
              </div>

              {/* Key confrontation metric */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-brand-cream border border-[#EAEAEA] rounded-2xl p-5 text-center space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#767676]">
                    Verwachte Leeftijd
                  </span>
                  <div className="font-mono text-4xl font-extrabold text-brand-orange">
                    {results.lifeExpectancy} <span className="text-lg font-normal">jaar</span>
                  </div>
                  <p className="text-[11px] text-[#767676]">
                    Inclusief jouw leefstijl & genetica winst/verlies
                  </p>
                </div>

                <div className="bg-brand-cream border border-[#EAEAEA] rounded-2xl p-5 text-center space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#767676]">
                    Al Verbruikt
                  </span>
                  <div className="font-mono text-4xl font-extrabold text-brand-dark">
                    {results.percentagePassed}%
                  </div>
                  <p className="text-[11px] text-[#767676]">
                    Dat is {results.yearsPassed} jaar van kostbare tijd
                  </p>
                </div>

                <div className="bg-[#FAFDFB] border border-brand-sage/20 rounded-2xl p-5 text-center space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-sage">
                    Resterende Tijd
                  </span>
                  <div className="font-mono text-4xl font-extrabold text-brand-sage">
                    {results.yearsRemaining} <span className="text-lg font-normal">jaar</span>
                  </div>
                  <p className="text-[11px] text-[#767676]">
                    Dat zijn nog {Math.round(results.yearsRemaining * 365)} kostbare dagen!
                  </p>
                </div>
              </div>

              {/* Progress gauge visualizer */}
              <div className="space-y-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-6 pt-10">
                <div className="flex justify-between items-center text-xs font-semibold text-brand-dark uppercase tracking-wider">
                  <span>Jouw Levensbalk (Fasen)</span>
                  <span className="font-mono text-brand-orange">{results.percentagePassed}% voltooid</span>
                </div>
                
                <div className="relative w-full mt-8 mb-2">
                  <div className="h-8 w-full bg-[#EAEAEA] rounded-full overflow-hidden flex relative">
                    {/* Phase 1: Ontwikkeling */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${results.youthPercentage}%` }}
                      transition={{ duration: 1.0, ease: "easeOut" }}
                      className="h-full bg-brand-dark flex items-center justify-center border-r border-white/20 relative"
                    >
                      <span className="text-[9px] font-mono text-white font-bold opacity-90 hidden sm:inline-block">ONTWIKKELING</span>
                    </motion.div>
                    
                    {/* Phase 2: Werk */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${results.workPercentage}%` }}
                      transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-brand-orange flex items-center justify-center border-r border-white/20 relative"
                    >
                      <span className="text-[9px] font-mono text-white font-bold opacity-90 hidden sm:inline-block">WERK</span>
                    </motion.div>
                    
                    {/* Phase 3: Vrijheid */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${results.freedomPercentage}%` }}
                      transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-brand-sage flex items-center justify-center relative"
                    >
                      <span className="text-[9px] font-mono text-white font-bold opacity-90 hidden sm:inline-block">VRIJHEID</span>
                    </motion.div>
                  </div>

                  {/* "Heden" Marker */}
                  <motion.div 
                    className="absolute top-0 bottom-0 w-0 z-10"
                    initial={{ left: 0 }}
                    animate={{ left: `${results.percentagePassed}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  >
                    <div className="absolute -top-8 -translate-x-1/2 bg-white text-brand-dark text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-[#EAEAEA] whitespace-nowrap z-20">
                      Heden ({typeof inputs.age === 'number' ? inputs.age : 28})
                    </div>
                    {/* Continuous black tick */}
                    <div className="absolute -top-1.5 -bottom-1.5 -translate-x-1/2 w-[3px] bg-[#2D2D2D] rounded-full" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between text-[11px] text-[#767676] font-mono pt-2">
                  <span>Geboorte (0)</span>
                  <span>Einde (~{results.lifeExpectancy})</span>
                </div>
              </div>

              {/* Life Matrix Visualizer */}
              <LifeMatrix 
                age={typeof inputs.age === 'number' ? inputs.age : 0} 
                youthYears={results.youthYears} 
                aowAge={results.aowAge} 
                lifeExpectancy={results.lifeExpectancy} 
              />

              {/* Dynamic Phases Model explained */}
              <div className="space-y-4">
                <div className="border-l-4 border-brand-orange pl-4">
                  <h4 className="text-lg font-bold text-brand-dark tracking-tight">
                    Jouw Levensfasen Uitgelicht
                  </h4>
                  <p className="text-xs text-[#767676]">
                    Geïnspireerd op Seneca&apos;s leer over tijdbeheer. Hoe verdelen jouw verwachte {results.lifeExpectancy} jaren zich werkelijk?
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Phase 1: Ontwikkeling */}
                  <div className="bg-white border border-[#EAEAEA] rounded-2xl p-4 space-y-3 shadow-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-dark uppercase">1. Ontwikkeling</span>
                      <span className="bg-brand-dark/5 text-brand-dark text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">{results.youthPercentage}%</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-brand-dark">
                      0 - {results.youthYears} <span className="text-xs font-normal text-[#767676]">jaar</span>
                    </div>
                    <p className="text-xs text-[#767676] leading-relaxed">
                      De fundering van je leven. Onderwijs, ontdekking en de aanloop naar je carrière.
                    </p>
                    <div className="w-full bg-[#EAEAEA] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-dark h-full w-full" />
                    </div>
                  </div>

                  {/* Phase 2: Werk */}
                  <div className="bg-white border border-[#EAEAEA] rounded-2xl p-4 space-y-3 shadow-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-orange uppercase">2. Werk & Bouw</span>
                      <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">{results.workPercentage}%</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-brand-orange">
                      {results.youthYears} - {results.aowAge} <span className="text-xs font-normal text-[#767676]">jaar</span>
                    </div>
                    <p className="text-xs text-[#767676] leading-relaxed">
                      De productieve fase. Carrière, vermogensopbouw en werken richting pensioen.
                      {results.workYearsRemaining > 0 && <span className="block mt-1 font-bold text-brand-orange text-[10px]">Nog {results.workYearsRemaining} werkjaren te gaan.</span>}
                    </p>
                    <div className="w-full bg-[#EAEAEA] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-orange h-full w-full" />
                    </div>
                  </div>

                  {/* Phase 3: Pure Vrijheid */}
                  <div className="bg-white border border-[#EAEAEA] rounded-2xl p-4 space-y-3 shadow-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-sage uppercase">3. Pure Vrijheid</span>
                      <span className="bg-brand-sage/10 text-brand-sage text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">{results.freedomPercentage}%</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-brand-sage">
                      {results.aowAge} - {results.lifeExpectancy} <span className="text-xs font-normal text-[#767676]">jaar</span>
                    </div>
                    <p className="text-xs text-[#767676] leading-relaxed">
                      Oogsttijd. Wijsheid, passieprojecten, reizen en absolute vrijheid in tijd.
                      <span className="block mt-1 font-bold text-brand-sage text-[10px]">Totaal {results.freedomYears} jaren vrijheid.</span>
                    </p>
                    <div className="w-full bg-[#EAEAEA] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-sage h-full w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-4 text-center mt-2">
                <p className="text-sm text-[#767676] leading-relaxed">
                  <strong className="text-brand-dark">Let op:</strong> Dit is slechts een basisberekening. In de volledige Life Horizon app vind je veel meer diepgaande inzichten, genetica factoren, gepersonaliseerde grafieken en tools om je levensfasen te optimaliseren!
                </p>
              </div>

              {/* Reset action and CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto border border-[#EAEAEA] hover:border-brand-orange hover:text-brand-orange text-brand-dark px-6 py-3 rounded-xl text-xs font-semibold font-mono transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Opnieuw berekenen
                </button>

                <a
                  href="#cta-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta-header')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Download de Volledige App
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
