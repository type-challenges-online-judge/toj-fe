import React from 'react';

// components
import { Title } from './title';
import { Template } from './template';
import { Example } from './example';
import { Testcases } from './testcases';
import { TsOnlineButton } from '@/components/core';

// types
import { fetchProblemDataById } from '@/util/problem';
import { useQuery } from '@tanstack/react-query';

const ProblemInfo = () => {
  const problemId: number = Number(JSON.parse(localStorage.getItem('problemId')!));
  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => await fetchProblemDataById(Number(problemId)),
    staleTime: Infinity,
  });

  return (
    <>
      {data !== undefined && (
        <div>
          <Title problemInfo={data} />

          <TsOnlineButton
            text="TS 온라인에서 풀이"
            _onClick={() => (window.location.href = 'https://www.typescriptlang.org/play')}
          ></TsOnlineButton>

          <p>{data.problemInfo.problemDescription}</p>

          <Example problemInfo={data} />

          <Template problemInfo={data} />

          <Testcases problemInfo={data} />
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
