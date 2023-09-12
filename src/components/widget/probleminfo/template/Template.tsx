import React from 'react';
import { ProblemCategoryStyle, ProblemCodeBlockStyle, ProblemCodeStyle } from '../ProblemInfo.css';

// types
import { Level, ProblemInfoType } from '@/type/problem';

interface TemplateProps {
  problemInfo: { problemDiff: Level; problemInfo: ProblemInfoType };
}
const Template = ({ problemInfo }: TemplateProps) => {
  return (
    <div>
      <p className={ProblemCategoryStyle}>제출 템플릿</p>

      <pre className={ProblemCodeBlockStyle}>
        <code className={ProblemCodeStyle}>
          {problemInfo?.problemInfo.template.map((line) => `${line}\n\n`)}
        </code>
      </pre>
    </div>
  );
};

export default Template;
