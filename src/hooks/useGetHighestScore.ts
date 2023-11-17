import { GetSolvedListType } from '@/type/user';
import { useGetSolvedProblemList } from './queries/user';
import { LEVEL_SEORE } from '@/config/const';
import { Level } from '@/type/problem';

const useGetHighestScore = (snsId: number) => {
  const { data: { data: solvedIdList = [] } = {} } = useGetSolvedProblemList<GetSolvedListType>(
    snsId,
    false,
  );

  if (solvedIdList.length === 0) return null;
  solvedIdList.sort((a, b) => {
    return LEVEL_SEORE[b.level as Level] - LEVEL_SEORE[a.level as Level];
  });

  return solvedIdList[0].level;
};

export default useGetHighestScore;
