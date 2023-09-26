import React from 'react';

// styles
import {
  ProblemCategoryStyle,
  ProblemCodeBlockStyle,
  ProblemCodeStyle,
  ProblemDetailsWrapperStyle,
} from '../ProblemInfo.css';

// types
import { ProblemDetailType } from '@/type/problem';

interface ProblemDetailsProps {
  text: string;
  codeBlock: ProblemDetailType['data']['description'] | ProblemDetailType['data']['template'];
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
