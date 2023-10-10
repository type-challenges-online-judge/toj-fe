import { SubmitProps } from '@/type/status';
import { API } from './instance';
import { COUNT_PER_PAGE } from '@/config/const';

export const submitApi = {
  getSubmitSize: async (submitProps: SubmitProps) =>
    await API.get('/api/submit/size', {
      params: {
        problemId: submitProps.problemId,
        snsId: submitProps.snsId === 0 ? null : submitProps.snsId,
        resultType: submitProps.resultType,
      },
    }),

  getSubmitList: async (submitProps: SubmitProps) =>
    await API.get('/api/submit', {
      params: {
        problemId: submitProps.problemId,
        snsId: submitProps.snsId === 0 ? null : submitProps.snsId,
        pageNum: submitProps.currentPage,
        countPerPage: COUNT_PER_PAGE,
        resultType: submitProps.resultType,
      },
    }),
};
