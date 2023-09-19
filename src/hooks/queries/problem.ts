import { useQuery } from '@tanstack/react-query';

import { problemApi } from '@/apis/problem';

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
