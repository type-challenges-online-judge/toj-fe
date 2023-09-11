import React from 'react';
import { useParams } from 'react-router-dom';
import { ProblemPageStyle } from './ProblemPage.css';
import { useQuery } from '@tanstack/react-query';

// components
import { ProblemInfo } from '@/components/widget';

// api
import { getProblems } from '@/apis/get';

// types
import { MainProblem } from '@/type/problem';

// util
import { fetchProblemDataById, getProblemDataById } from '@/util/problem';

const ProblemPage = () => {
  const { problemId } = useParams();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => await fetchProblemDataById(Number(problemId)),
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
