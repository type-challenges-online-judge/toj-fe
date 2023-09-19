import { SubmitType } from '@/type/status';
import axios, { AxiosResponse } from 'axios';
import { API } from './instance';

// API
export const problemApi = {
  getProblems: async () => await API.get('/api/problem'),
  getProblemDetail: async <T>(id: number): Promise<AxiosResponse<T>> => {
    return await API.get<T>(`/api/problem/detail/${id}`);
  },
};

// MSW
export const submitAnswer = async (submitData: SubmitType) => {
  const res = await axios.post('/submit', submitData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
