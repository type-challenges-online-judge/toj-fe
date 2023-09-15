import React from 'react';

// components
import { Title } from './title';
import { TsOnlineButton } from '@/components/core';
import { ProblemDetails } from './problemdetails';

// types
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProblemDetail } from '@/apis/get';
import { ProblemDetailType } from '@/type/problem';
import { extractDescription } from '@/util/problem';

const ProblemInfo = () => {
  const { problemId } = useParams();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => {
      const res = await getProblemDetail<ProblemDetailType>(Number(problemId));
      return res.data;
    },
    staleTime: Infinity,
  });

  return (
    <>
      {data !== undefined && (
        <div>
          <Title problemDetail={data} />

          <TsOnlineButton
            text="TS 온라인에서 풀이"
            _onClick={() => (window.location.href = 'https://www.typescriptlang.org/play')}
          ></TsOnlineButton>

          <p>{extractDescription(data.description)}</p>

          <ProblemDetails text="예시" codeBlock={data.description} />

          <ProblemDetails text="제출 템플릿" codeBlock={data.template} />

          <ProblemDetails text="테스트 케이스" codeBlock={data.testCase} />
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
