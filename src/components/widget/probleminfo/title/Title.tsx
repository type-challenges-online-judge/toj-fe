import React from 'react';
import { ProblemDiffStyle, ProblemTitleStyle } from '../ProblemInfo.css';

// types
import { GetProblemDetailType } from '@/type/problem';

interface TitleProps {
  problemDetail: GetProblemDetailType['data'];
}

const Title = ({ problemDetail }: TitleProps) => {
  return (
    <div>
      <p className={ProblemTitleStyle}>
        {problemDetail.title}
        <span className={ProblemDiffStyle[problemDetail.level]}>{problemDetail.level}</span>
      </p>
    </div>
  );
};

export default Title;
