export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  passwordHash?: string;
  role: UserRole;
  profileImage?: string;
  bio?: string;
  favoriteTopics: string[];
  theme: 'light' | 'dark' | 'system';
  notificationsEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface UserProgress {
  userId: string;
  questionsSolved: number;
  questionsCorrect: number;
  averageScore: number;
  totalPracticeSessions: number;
  totalExamSessions: number;
  topicsProgress: Record<string, TopicProgressData>;
  lastActivityAt: Date;
  streak: number; // consecutive days of practice
}

export interface TopicProgressData {
  topic: string;
  questionsSolved: number;
  questionsCorrect: number;
  averageScore: number;
  strength: 'weak' | 'fair' | 'good' | 'excellent';
  lastPracticedAt: Date;
}

export interface AuthToken {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  tokenType: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: AuthToken;
  error?: string;
}
