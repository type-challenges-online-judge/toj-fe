import { MainProblem } from '@/type/problem';
import axios from 'axios';

export const getProblems = async <T extends MainProblem>() => {
  const res = await axios.get<T>('/problems');
  return res.data;
};
