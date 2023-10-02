import { submitApi } from '@/apis/status';
import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';

interface SubmitProps {
  problemId?: number;
  snsId?: number;
  size?: number;
}

export const useGetStatusList = <T>(submitProps: SubmitProps, options?: T) => {
  const [size, setSize] = useState<number>();

  return useQueries({
    queries: [
      {
        queryKey: ['getSubmitSize'],
        queryFn: async () => await submitApi.getSubmitSize(submitProps),
        onSuccess: (res: any) => {
          setSize(res.data.data);
        },
        retry: 0,
        staleTime: 36000000,
        cacheTime: Infinity,
      },
      {
        queryKey: ['getSubmitList'],
        queryFn: async () => await submitApi.getSubmitList({ ...submitProps, size }),
      },
    ],
  });
};
