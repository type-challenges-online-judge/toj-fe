import React from 'react';

// styles
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';

// types
import { ProblemDetailType, ProblemInfoType } from '@/type/problem';
import { extractExample, extractTestCases } from '@/util/problem';

interface codeArrProps {
  text: string;
  codeBlock:
    | ProblemDetailType['data']['description']
    | ProblemDetailType['data']['template']
    | ProblemDetailType['data']['testCase'];
}

const ProblemDetails = ({ text, codeBlock }: codeArrProps) => {
  const renderBasedOnType = (text: codeArrProps['text'], codeBlock: codeArrProps['codeBlock']) => {
    if (text === '예시') {
      return <code className={ProblemCodeStyle}>{extractExample(codeBlock as string)}</code>;
    }
    if (text === '제출 템플릿') {
      return <code className={ProblemCodeStyle}>{codeBlock as string}</code>;
    }
    if (text === '테스트 케이스') {
      return (
        <code className={ProblemCodeStyle}>
          {extractTestCases(codeBlock as ProblemDetailType['data']['testCase'])}
        </code>
      );
    }
  };

  return (
    <div>
      <p className={ProblemCategoryStyle}>{text}</p>
      <pre className={ProblemCodeBlockStyle}>{renderBasedOnType(text, codeBlock)}</pre>
    </div>
  );
};

export default ProblemDetails;
