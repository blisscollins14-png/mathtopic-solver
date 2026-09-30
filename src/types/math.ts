// Mathematics topic types
export type MathTopic = 
  | 'algebra'
  | 'number-arithmetic'
  | 'logarithms'
  | 'geometry'
  | 'mensuration'
  | 'trigonometry'
  | 'statistics'
  | 'probability'
  | 'matrices'
  | 'sequences-series'
  | 'calculus'
  | 'vectors';

export type Subtopic = {
  id: string;
  name: string;
  topic: MathTopic;
  description: string;
};

export type ExplanationLevel = 'beginner' | 'normal' | 'detailed';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface MathFormula {
  id: string;
  name: string;
  topic: MathTopic;
  subtopic?: string;
  formula: string; // LaTeX format
  latex: string;
  description: string;
  symbols: Record<string, string>; // Symbol explanations
  examples: string[];
  whenToUse: string;
  relatedFormulas?: string[];
}

export interface MathQuestion {
  id: string;
  topic: MathTopic;
  subtopic?: string;
  difficulty: Difficulty;
  question: string;
  questionLatex?: string;
  correctAnswer: string;
  correctAnswerLatex?: string;
  solvedSteps: SolutionStep[];
  formulas: string[]; // Formula IDs used
  hints?: string[];
  source?: string;
  createdAt: Date;
}

export interface SolutionStep {
  stepNumber: number;
  title: string;
  description: string;
  formula?: string;
  formulaLatex?: string;
  calculation: string;
  calculationLatex?: string;
  result: string;
  resultLatex?: string;
  explanation: string;
}

export interface SolvedProblem {
  id: string;
  userId?: string;
  topic: MathTopic;
  subtopic?: string;
  question: string;
  questionLatex?: string;
  userAnswer?: string;
  correctAnswer: string;
  correctAnswerLatex?: string;
  isCorrect: boolean;
  steps: SolutionStep[];
  explanationLevel: ExplanationLevel;
  timeTaken: number; // in seconds
  savedAt: Date;
  formulas: MathFormula[];
}

export interface PracticeSession {
  id: string;
  userId?: string;
  topic: MathTopic;
  subtopic?: string;
  difficulty: Difficulty;
  totalQuestions: number;
  questionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  percentage: number;
  startedAt: Date;
  completedAt?: Date;
  questions: MathQuestion[];
  answers: Record<string, SolvedProblem>;
}

export interface ExamSession {
  id: string;
  userId?: string;
  examType: ExamType;
  topic?: MathTopic;
  difficulty: Difficulty;
  totalQuestions: number;
  questionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  percentage: number;
  timeLimit: number; // in seconds
  timeUsed: number; // in seconds
  startedAt: Date;
  completedAt?: Date;
  questions: MathQuestion[];
  answers: Record<string, SolvedProblem>;
  status: 'not-started' | 'in-progress' | 'completed';
}

export type ExamType = 
  | 'jss-math'
  | 'ss1-math'
  | 'ss2-math'
  | 'ss3-math'
  | 'waec-practice'
  | 'neco-practice'
  | 'jamb-practice'
  | 'custom';

export interface TopicProgress {
  topic: MathTopic;
  subtopics: Record<string, SubtopicProgress>;
  questionsSolved: number;
  correctAnswers: number;
  averageScore: number;
  lastPracticedAt?: Date;
  strength: 'weak' | 'fair' | 'good' | 'excellent';
}

export interface SubtopicProgress {
  name: string;
  questionsSolved: number;
  correctAnswers: number;
  averageScore: number;
  lastPracticedAt?: Date;
}

export interface MathSolverError {
  code: string;
  message: string;
  details?: string;
  suggestedTopic?: MathTopic;
}

export interface TopicConfig {
  id: string;
  name: string;
  displayName: string;
  description: string;
  icon?: string;
  color?: string;
  subtopics: Subtopic[];
  formulas: MathFormula[];
  practiceQuestions: MathQuestion[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
