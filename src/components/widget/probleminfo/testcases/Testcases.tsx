import React from 'react';
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';

// types
import { ProblemInfoType } from '@/type/problem';

interface TestcasesProps {
  problemInfo: { problemDiff: string; problemInfo: ProblemInfoType };
}

const Testcases = ({ problemInfo }: TestcasesProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>테스트 케이스</p>
      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>
          {problemInfo.problemInfo.testCases.map((line) => `${line}\n\n`)}
        </code>
      </pre>
    </div>
  );
};

export default Testcases;
