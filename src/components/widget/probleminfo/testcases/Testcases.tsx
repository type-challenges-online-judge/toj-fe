import React from 'react';
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';

interface problemInfoType {
  problemId: number;
  problemDiff: 'easy' | 'medium' | 'hard' | 'extreme';
  problemTitle: string;
  problemDescription: string;
  example: string[];
  template: string[];
  testCases: string[];
}

interface TestcasesProps {
  problemInfo: problemInfoType;
}

const Testcases = ({ problemInfo }: TestcasesProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>테스트 케이스</p>
      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>{problemInfo.testCases.map((line) => `${line}\n`)}</code>
      </pre>
    </div>
  );
};

export default Testcases;
