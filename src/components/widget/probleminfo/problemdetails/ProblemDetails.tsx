import React from 'react';

// styles
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';

// types
import { ProblemInfoType } from '@/type/problem';

interface codeArrProps {
  text: string;
  codeArr: ProblemInfoType['example'] | ProblemInfoType['template'] | ProblemInfoType['testCases'];
}

const ProblemDetails = ({ text, codeArr }: codeArrProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>{text}</p>
      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>{codeArr.map((line) => `${line}\n\n`)}</code>
      </pre>
    </div>
  );
};

export default ProblemDetails;
