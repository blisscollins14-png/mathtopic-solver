import { MathQuestion, SolvedProblem, MathFormula, ExamSession, PracticeSession } from './math';
import { User } from './user';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  timestamp: Date;
}

// Solver API
export interface SolveRequest {
  topic: string;
  subtopic?: string;
  question: string;
  explanationLevel: 'beginner' | 'normal' | 'detailed';
  userAnswer?: string;
}

export interface SolveResponse {
  questionLatex: string;
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
    formula?: string;
    calculation: string;
    result: string;
    explanation: string;
  }>;
  finalAnswer: string;
  finalAnswerLatex: string;
  formulas: MathFormula[];
  hints: string[];
  estimatedDifficulty: 'easy' | 'medium' | 'hard';
}

// Practice API
export interface GeneratePracticeRequest {
  topic: string;
  subtopic?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  count: number;
}

export interface CheckAnswerRequest {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  topic: string;
}

export interface CheckAnswerResponse {
  isCorrect: boolean;
  message: string;
  correctAnswer: string;
  explanation?: string;
}

// History API
export interface GetHistoryRequest {
  page?: number;
  limit?: number;
  topic?: string;
  startDate?: Date;
  endDate?: Date;
}

// Formulas API
export interface GetFormulasRequest {
  topic?: string;
  subtopic?: string;
  search?: string;
  page?: number;
  limit?: number;
}

// User API
export interface UpdateUserRequest {
  name?: string;
  email?: string;
  bio?: string;
  favoriteTopics?: string[];
  theme?: 'light' | 'dark' | 'system';
}

// Admin API
export interface AdminTopicRequest {
  name: string;
  displayName: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface AdminFormulaRequest {
  name: string;
  topic: string;
  subtopic?: string;
  formula: string;
  description: string;
  symbols: Record<string, string>;
  examples: string[];
  whenToUse: string;
}

export interface AdminQuestionRequest {
  topic: string;
  subtopic?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correctAnswer: string;
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
    calculation: string;
    result: string;
  }>;
  hints?: string[];
}
