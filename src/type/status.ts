import { ProblemType } from './problem';
import { UserType } from './user';

export interface StatusType {
  code: string;
  correct_score: number;
  createdAt: string;
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

export interface SubmitItemProps {
  type: 'correct' | 'valid';
  id: number;
}
