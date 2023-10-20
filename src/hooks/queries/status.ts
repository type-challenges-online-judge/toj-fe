import { useQuery } from '@tanstack/react-query';

import { submitApi } from '@/apis/status';
import { SubmitItemProps, SubmitProps } from '@/type/status';

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

export const useGetSubmitItem = (submitItemProps: SubmitItemProps) => {
  return useQuery(['getSubmitItem', submitItemProps.type, submitItemProps.id], async () => {
    const data = await submitApi.getSubmitItem(submitItemProps);
    if (data === undefined) {
      return null;
    }
    return data;
  });
};
