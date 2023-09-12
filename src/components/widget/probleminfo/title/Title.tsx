import React from 'react';
import { ProblemDiffStyle, ProblemTitleStyle } from '../ProblemInfo.css';

// types
import { Level, ProblemInfoType } from '@/type/problem';

interface TitleProps {
  problemInfo: { problemDiff: Level; problemInfo: ProblemInfoType };
}

const Title = ({ problemInfo }: TitleProps) => {
  return (
    <div>
      <p className={ProblemTitleStyle}>
        {problemInfo.problemInfo.problemTitle}
        <span className={ProblemDiffStyle[problemInfo?.problemDiff]}>
          {problemInfo?.problemDiff}
        </span>
      </p>
    </div>
  );
};

export default Title;
