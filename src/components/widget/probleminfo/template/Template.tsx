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

interface TemplateProps {
  problemInfo: problemInfoType;
}
const Template = ({ problemInfo }: TemplateProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>제출 템플릿</p>

      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>{problemInfo.template.map((line) => `${line}\n`)}</code>
      </pre>
    </div>
  );
};

export default Template;
