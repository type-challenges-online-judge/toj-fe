import { userApi } from '@/apis/user';
import { useQuery } from '@tanstack/react-query';

export const useGetSolvedProblemsList = <T, K = any>(
  snsId: number,
  minify: boolean,
  options?: K,
) => {
  return useQuery({
    queryKey: ['solvedList', snsId],
    queryFn: async () => {
      const res = await userApi.getSolvedProblemList(snsId, minify);
      return res?.data;
    },
    retry: 0,
    enabled: snsId !== 0,
    ...options,
  });
};
