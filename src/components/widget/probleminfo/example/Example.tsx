import React from 'react';
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';
import { ProblemInfoType } from 'type/problem';

interface ExampleProps {
  problemInfo: ProblemInfoType;
}
const Example = ({ problemInfo }: ExampleProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>예시</p>
      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>{problemInfo.example.map((line) => `${line}\n\n`)}</code>
      </pre>
    </div>
  );
};

export default Example;
