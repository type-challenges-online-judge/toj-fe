import { MainProblem, ProblemDetailType } from '@/type/problem';
import axios from 'axios';

export const getProblemDetail = async <T extends ProblemDetailType>(id: number) => {
  const res = await axios.get<T>(`/api/problem/detail/${id}`);
  console.log(res.data);
  return res.data;
};
