import React from 'react';
import { ProblemDiffStyle, ProblemTitleStyle } from '../ProblemInfo.css';
import { ProblemInfoType } from '@/type/problem';

interface TitleProps {
  problemInfo: ProblemInfoType;
}

const Title = ({ problemInfo }: TitleProps) => {
  return (
    <div>
      <p className={ProblemTitleStyle}>
        {problemInfo.problemTitle}
        <span className={ProblemDiffStyle[problemInfo.problemDiff]}>{problemInfo.problemDiff}</span>
      </p>
    </div>
  );
};

export default Title;
