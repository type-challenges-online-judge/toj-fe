import { submitApi } from '@/apis/status';
import { SubmitProps } from '@/type/status';
import { useQueries } from '@tanstack/react-query';

export const useGetStatusList = (submitProps: SubmitProps) => {
  // const [size, setSize] = useState<number>();

  return useQueries({
    queries: [
      {
        queryKey: ['getSubmitSize', submitProps.problemId, submitProps.resultType],
        queryFn: async () => await submitApi.getSubmitSize(submitProps),
        // onSuccess: (res: any) => {
        //   setSize(res.data.data);
        // },
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
        // queryFn: async () => await submitApi.getSubmitList({ ...submitProps, size }),
        queryFn: async () => await submitApi.getSubmitList(submitProps),
      },
    ],
  });
};
