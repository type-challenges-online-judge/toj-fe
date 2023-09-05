export type Level = 'warm-up' | 'easy' | 'medium' | 'hard' | 'extreme';

// 목데이터 전용으로 임시 생성.
export interface ProblemInfoType {
  problemId: number;
  problemDiff: Level;
  problemTitle: string;
  problemDescription: string;
  example: string[];
  template: string[];
  testCases: string[];
}

export type MainProblem = Pick<ProblemInfoType, 'problemId' | 'problemTitle'> & {
  isSolved?: boolean;
};

export interface MainProblems {
  'warm-up': MainProblem[];
  easy: MainProblem[];
  medium: MainProblem[];
  hard: MainProblem[];
  extreme: MainProblem[];
}

export interface MainLevel {
  level: Level;
  count: number;
}
