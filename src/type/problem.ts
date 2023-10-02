export type Level = 'warm' | 'easy' | 'medium' | 'hard' | 'extreme';

export type ProblemsType = Record<Level, ProblemType[]>;

export interface ProblemType {
  id: number;
  title: string;
  number: number;
}

export interface GetProblemListType {
  message: string;
  data: Array<ProblemType & { level: Level }>;
}

export interface TestCasesType {
  case: string;
  type: string;
}

export interface GetProblemDetailType {
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

export interface PostSubmitResponseType {
  message: string;
  data: {
    submitCodeId: number;
  };
}
