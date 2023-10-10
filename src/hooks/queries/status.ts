import { useQueries, useQuery } from '@tanstack/react-query';

import { submitApi } from '@/apis/status';
import { SubmitProps } from '@/type/status';

export const useGetSubmitSize = (submitProps: SubmitProps) => {
  return useQuery(
    ['getSubmitSize', submitProps.problemId, submitProps.resultType],
    async () => await submitApi.getSubmitSize(submitProps),
    {
      retry: 0,
      staleTime: 36000000,
      cacheTime: Infinity,
    },
  );
};

export const useGetSubmitList = (submitProps: SubmitProps) => {
  return useQuery(
    ['getSubmitList', submitProps.problemId, submitProps.resultType, submitProps.currentPage],
    async () => await submitApi.getSubmitList(submitProps),
  );
};

export const useGetSubmitInfo = (submitProps: SubmitProps) => {
  return useQueries({
    queries: [
      {
        queryKey: ['getSubmitSize', submitProps.problemId, submitProps.resultType],
        queryFn: async () => await submitApi.getSubmitSize(submitProps),
        retry: 0,
        staleTime: 36000000,
        cacheTime: Infinity,
      },
      {
        queryKey: [
          'getSubmitList',
          submitProps.problemId,
          submitProps.resultType,
          submitProps.currentPage,
        ],
        queryFn: async () => await submitApi.getSubmitList(submitProps),
      },
    ],
  });
};
