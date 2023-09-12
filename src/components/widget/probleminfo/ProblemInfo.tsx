import React from 'react';

// components
import { Title } from './title';
import { Template } from './template';
import { Example } from './example';
import { Testcases } from './testcases';
import { TsOnlineButton } from '@/components/core';

// types
import { ProblemInfoType } from '@/type/problem';

interface ProblemInfoProps {
  problemInfo: { problemDiff: string; problemInfo: ProblemInfoType };
}
const ProblemInfo = ({ problemInfo }: ProblemInfoProps) => {
  return (
    <>
      {problemInfo !== null && (
        <div>
          <Title problemInfo={problemInfo} />

          <TsOnlineButton
            text="TS 온라인에서 풀이"
            _onClick={() => (window.location.href = 'https://www.typescriptlang.org/play')}
          ></TsOnlineButton>

          <p>{problemInfo.problemInfo.problemDescription}</p>

          <Example problemInfo={problemInfo} />

          <Template problemInfo={problemInfo} />

          <Testcases problemInfo={problemInfo} />
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
