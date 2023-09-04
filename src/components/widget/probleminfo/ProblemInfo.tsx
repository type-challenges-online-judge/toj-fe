import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProblemList } from '../../../apis/get';
import { Title } from './title';
import { Template } from './template';
import { Example } from './example';
import { Testcases } from './testcases';
import { ProblemInfoType } from '@/type/problem';
import { MenuButton } from '../problemmenus/ProblemMenus.css';

interface ProblemInfoProps {
  problemInfo: ProblemInfoType;
}
const ProblemInfo = ({ problemInfo }: ProblemInfoProps) => {
  return (
    <>
      {problemInfo !== null && (
        <div>
          <Title problemInfo={problemInfo} />

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
