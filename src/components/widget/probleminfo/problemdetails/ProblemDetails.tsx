import React from 'react';

// styles
import {
  ProblemCategoryStyle,
  ProblemCodeBlockStyle,
  ProblemCodeStyle,
  ProblemDetailsWrapperStyle,
} from '../ProblemInfo.css';

// types
import { GetProblemDetailType } from '@/type/problem';

interface ProblemDetailsProps {
  text: string;
  codeBlock: GetProblemDetailType['data']['description'] | GetProblemDetailType['data']['template'];
}

const ProblemDetails = ({ text, codeBlock }: ProblemDetailsProps) => {
  return (
    <div className={ProblemDetailsWrapperStyle}>
      <p className={ProblemCategoryStyle}>{text}</p>
      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>{codeBlock}</code>
      </pre>
    </div>
  );
};

export default ProblemDetails;
