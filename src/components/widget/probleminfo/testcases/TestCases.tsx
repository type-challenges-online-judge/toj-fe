import React from 'react';
import { ProblemDetailType } from '@/type/problem';
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';
import {
  TestCasesWrapperStyle,
  TestCaseCount,
  TestCaseCountFont,
  TestCaseTotalCount,
} from './TestCases.css';

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
      <p className={ProblemCategoryStyle}>
        {text} - 정확성 <span className={TestCaseTotalCount}>{correctCases.length}개</span>
      </p>
      {correctCases.map((i, index) => {
        return (
          <div key={index}>
            <p className={TestCaseCount}>
              <span className={TestCaseCountFont}>예시 {index + 1}</span>
            </p>
            <pre className={ProblemCodeBlockStyle}>
              <code className={ProblemCodeStyle}>{i.case}</code>
            </pre>
          </div>
        );
      })}
      <p className={ProblemCategoryStyle}>
        {text} - 유효성 <span className={TestCaseTotalCount}>{validCases.length}개</span>
      </p>
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
