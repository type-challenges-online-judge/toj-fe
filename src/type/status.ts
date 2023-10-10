import { ProblemType } from './problem';
import { UserType } from './user';

// 목데이터 전용으로 임시 생성.
export interface StatusType {
  code: string;
  correct_score: number;
  createAt: string;
  id: number;
  problem: Partial<ProblemType> & { level: string };
  updatedAt: string;
  user: UserType;
  valid_score: number;
}

export type SubmitResultsType = null | 'right' | 'wrong' | 'correct' | 'valid';

export interface SubmitProps {
  problemId?: number;
  snsId?: number;
  size?: number;
  resultType: SubmitResultsType;
  currentPage: number;
}
