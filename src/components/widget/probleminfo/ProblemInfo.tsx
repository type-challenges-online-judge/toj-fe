import React, { useState, useEffect } from 'react';
import { Title } from './title';
import { Template } from './template';
import { Example } from './example';
import { Testcases } from './testcases';
import { ProblemInfoType } from '@/type/problem';
import TsOnlineButton from '@/components/core/button/TsOnlineButton';

interface ProblemInfoProps {
  problemInfo: ProblemInfoType;
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

          <p>{problemInfo.problemDescription}</p>

          <Example problemInfo={problemInfo} />

          <Template problemInfo={problemInfo} />

          <Testcases problemInfo={problemInfo} />
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
