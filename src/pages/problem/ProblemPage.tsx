import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ProblemInfo } from '../../components';
import { ProblemPageStyle } from './ProblemPage.css';
import { getProblemDataById } from '../../util/problem';

import { MainProblem } from '@/type/problem';
import { getProblems } from '@/apis/get';

const ProblemPage = () => {
  const { problemId } = useParams();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => {
      const res: MainProblem = await getProblems();
      return getProblemDataById(res, Number(problemId));
    },
    staleTime: Infinity,
  });

  return (
    <div className={ProblemPageStyle}>
      {data !== undefined && (
        <>
          <ProblemInfo problemInfo={data} />
        </>
      )}
    </div>
  );
};

export default ProblemPage;
