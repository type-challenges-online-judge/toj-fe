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
import { extractExample } from '@/util/problem';

interface ProblemDetailsProps {
  text: string;
  codeBlock: ProblemDetailType['data']['description'] | ProblemDetailType['data']['template'];
}

const ProblemDetails = ({ text, codeBlock }: ProblemDetailsProps) => {
  const renderBasedOnType = (
    text: ProblemDetailsProps['text'],
    codeBlock: ProblemDetailsProps['codeBlock'],
  ) => {
    if (text === '예시') {
      console.log(codeBlock);
      console.log(extractExample(codeBlock));

      return <code className={ProblemCodeStyle}>{extractExample(codeBlock)}</code>;
    }
    if (text === '제출 템플릿') {
      return <code className={ProblemCodeStyle}>{codeBlock}</code>;
    }
  };

  return (
    <div className={ProblemDetailsWrapperStyle}>
      <p className={ProblemCategoryStyle}>{text}</p>
      <pre className={ProblemCodeBlockStyle}>{renderBasedOnType(text, codeBlock)}</pre>
    </div>
  );
};

export default ProblemDetails;
