import React from 'react';

// components
import { Title } from './title';
import { TsOnlineButton } from '@/components/core';
import { ProblemDetails } from './problemdetails';

// types
import { fetchProblemDataById } from '@/util/problem';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ProblemInfo = () => {
  const { problemId } = useParams();

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

          <ProblemDetails text="예시" codeArr={data.problemInfo.example} />

          <ProblemDetails text="제출 템플릿" codeArr={data.problemInfo.template} />

          <ProblemDetails text="테스트케이스" codeArr={data.problemInfo.testCases} />
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
