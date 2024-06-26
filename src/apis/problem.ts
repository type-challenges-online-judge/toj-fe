import { AxiosResponse } from 'axios';

import { API } from './instance';

// API
export const problemApi = {
  getProblems: async <T>(): Promise<AxiosResponse<T>> => {
    const result = await API.get<T>('/api/problem');
    console.log(result);
    return result;
  },
  getProblemDetail: async <T>(id: number): Promise<AxiosResponse<T>> => {
    return await API.get<T>(`/api/problem/detail/${id}`);
  },
  postSumbitCode: async <T>(id: string, codeStr: string): Promise<AxiosResponse<T>> => {
    const res = await API.post<T>(`/api/submit/${id}`, { code: codeStr });
    return res;
  },
};
