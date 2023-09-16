import { getProblems } from '@/apis/get';
import { Level, MainProblem } from '@/type/problem';

// "problem/", "submit/"" URL 판별
export const checkURL = (pathname: string) => {
  const pattern = /^\/(problem|submit)\/\d+/;
  return pattern.test(pathname);
};

export const getProblemDataById = (data: MainProblem, targetId: number) => {
  for (const i in data) {
    const key = i as Level;
    const filterResult = data[key].filter((i) => i.problemId === targetId);
    if (filterResult.length !== 0) return { problemDiff: key, problemInfo: filterResult[0] };
  }
};

export const fetchProblemDataById = async (problemId: number) => {
  const res: MainProblem = await getProblems();
  return getProblemDataById(res, problemId);
};
