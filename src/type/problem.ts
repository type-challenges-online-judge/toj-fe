export type Level = 'warm-up' | 'easy' | 'medium' | 'hard' | 'extreme';

// // 목데이터 전용으로 임시 생성.
// export interface ProblemInfoType {
//   problemId: number;
//   problemTitle: string;
//   problemDescription: string;
//   example: string[];
//   template: string[];
//   testCases: string[];
//   isSolved: boolean;
// }

// export type MainProblem = Pick<ProblemInfoType, 'problemId' | 'problemTitle'> & {
//   isSolved?: boolean;
// };

// export interface MainProblem {
//   'warm-up': ProblemInfoType[];
//   easy: ProblemInfoType[];
//   medium: ProblemInfoType[];
//   hard: ProblemInfoType[];
//   extreme: ProblemInfoType[];
// }

// export interface MainLevel {
//   level: Level;
//   count: number;
// }

// API 전용
export interface TestCasesType {
  case: string;
  type: string;
}

export interface ProblemDetailType {
  message: string;
  data: {
    createdAt: string;
    description: string;
    id: number;
    language: string;
    level: Level;
    number: number;
    template: string;
    title: string;
    updatedAt: string;
    testCase: TestCasesType[];
  };
}
