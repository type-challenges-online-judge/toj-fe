import { useQuery } from '@tanstack/react-query';

import { problemApi } from '@/apis/problem';
import { ProblemDetailType } from '@/type/problem';

export const useGetProblems = <T>(options?: T) => {
  return useQuery(['getProblems'], async () => await problemApi.getProblems(), {
    retry: 0,
    onError: (err) => {
      console.log(err);
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options,
  });
};

export const useGetProblemDetail = <T>(problemId: number | null, options?: T) => {
  return useQuery<T>({
    queryKey: ['problemDetail', { problemId }],
    queryFn: async (): Promise<T> => {
      const res = await problemApi.getProblemDetail<T>(problemId!);
      return res.data;
    },
    staleTime: Infinity,
    retry: 0,
    enabled: problemId !== null,
    ...options,
  });
};
