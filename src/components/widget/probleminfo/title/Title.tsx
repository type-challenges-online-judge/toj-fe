import React from 'react';
import { ProblemDiffStyle, ProblemTitleStyle } from '../ProblemInfo.css';
import { Level, ProblemInfoType } from '@/type/problem';

interface TitleProps {
  problemInfo: { problemDiff: string; problemInfo: ProblemInfoType };
}

const Title = ({ problemInfo }: TitleProps) => {
  return (
    <div>
      <p className={ProblemTitleStyle}>
        {problemInfo.problemInfo.problemTitle}
        <span className={ProblemDiffStyle[problemInfo.problemDiff as Level]}>
          {problemInfo.problemDiff}
        </span>
      </p>
    </div>
  );
};

export default Title;
