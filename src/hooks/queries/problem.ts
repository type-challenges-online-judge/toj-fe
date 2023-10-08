import { useQuery } from '@tanstack/react-query';

import { problemApi } from '@/apis/problem';

export const useGetProblems = <T, K = any>(options?: K) => {
  return useQuery(['getProblems'], async () => await problemApi.getProblems<T>(), {
    retry: 0,
    onError: (err) => {
      console.log(err);
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options,
  });
};

export const useGetProblemDetail = <T, K = any>(problemId: number | null, options?: K) => {
  return useQuery<T>({
    queryKey: ['problemDetail', { problemId }],
    queryFn: async (): Promise<T> => {
      const res = await problemApi.getProblemDetail<T>(problemId!);
      return res.data;
    },
    staleTime: 36000000,
    retry: 0,
    enabled: problemId !== null,
    ...options,
  });
};
