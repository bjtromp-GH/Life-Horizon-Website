export type Gender = 'man' | 'vrouw';
export type SleepPattern = 'weinig' | 'gemiddeld' | 'veel';
export type StressLevel = 'laag' | 'gemiddeld' | 'hoog';
export type ActivityLevel = 'laag' | 'gemiddeld' | 'hoog';

export interface UserProfileInputs {
  age: number | '';
  gender: Gender;
  sleep: SleepPattern;
  stress: StressLevel;
  activity: ActivityLevel;
  careerStartAge: number | '';
}

export interface CalculationResults {
  lifeExpectancy: number;
  yearsPassed: number;
  yearsRemaining: number;
  percentagePassed: number;
  percentageRemaining: number;
  
  aowAge: number;

  // New phases
  youthYears: number;
  youthPercentage: number;
  
  workYears: number;
  workPercentage: number;
  workYearsRemaining: number;
  
  freedomYears: number;
  freedomPercentage: number;
}
