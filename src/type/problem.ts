// 목데이터 전용으로 임시 생성.
export interface ProblemInfoType {
  problemId: number;
  problemDiff: 'easy' | 'medium' | 'hard' | 'extreme';
  problemTitle: string;
  problemDescription: string;
  example: string[];
  template: string[];
  testCases: string[];
}

export type Level = 'warm-up' | 'easy' | 'medium' | 'hard' | 'extreme';
