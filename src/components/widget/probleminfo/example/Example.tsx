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

interface ExampleProps {
  problemInfo: problemInfoType;
}
const Example = ({ problemInfo }: ExampleProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>예시</p>
      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>{problemInfo.example.map((line) => `${line}\n`)}</code>
      </pre>
    </div>
  );
};

export default Example;
