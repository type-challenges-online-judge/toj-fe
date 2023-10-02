import { API } from './instance';

interface SubmitProps {
  problemId?: number;
  snsId?: number;
  size?: number;
}

const COUNT_PER_PAGE = 10;

export const submitApi = {
  getSubmitSize: async (submitProps: SubmitProps) =>
    await API.get('/api/submit/size', {
      params: {
        problemId: submitProps.problemId,
        snsId: submitProps.snsId,
      },
    }),

  getSubmitList: async (submitProps: SubmitProps) =>
    await API.get('/api/submit', {
      params: {
        problemId: submitProps.problemId,
        snsId: submitProps.snsId,
        pageNum: submitProps.size != null ? Number(submitProps.size / COUNT_PER_PAGE) + 1 : 1,
        countPerPage: COUNT_PER_PAGE,
      },
    }),
};
