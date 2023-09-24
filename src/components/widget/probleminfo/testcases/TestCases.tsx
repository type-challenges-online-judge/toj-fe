import React from 'react';
import { ProblemDetailType } from '@/type/problem';
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';
import { TestCasesWrapperStyle } from './TestCases.css';

interface TestCasesProps {
  text: string;
  testCases: ProblemDetailType['data']['testCase'];
}
const TestCases = ({ text, testCases }: TestCasesProps) => {
  const [correctCases, validCases] = [
    testCases.filter((i) => i.type === 'correct'),
    testCases.filter((i) => i.type === 'valid'),
  ];

  return (
    <div className={TestCasesWrapperStyle}>
      <p className={ProblemCategoryStyle}>{text} - 정확성</p>
      {correctCases.map((i, index) => {
        return (
          <div key={index}>
            <pre className={ProblemCodeBlockStyle}>
              <code className={ProblemCodeStyle}>{i.case}</code>
            </pre>
          </div>
        );
      })}
      <p className={ProblemCategoryStyle}>{text} - 유효성</p>
      {validCases.map((i, index) => {
        return (
          <div key={index}>
            <pre className={ProblemCodeBlockStyle}>
              <code className={ProblemCodeStyle}>{i.case}</code>
            </pre>
          </div>
        );
      })}
    </div>
  );
};

export default TestCases;
