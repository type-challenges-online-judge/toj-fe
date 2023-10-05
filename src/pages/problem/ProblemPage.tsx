import React from 'react';
import { ProblemPageStyle } from './ProblemPage.css';

// components
import { ProblemInfo } from '@/components/widget';
import { SubmitType } from '@/type/status';

const ProblemPage = () => {
  return (
    <div className={ProblemPageStyle}>
      <ProblemInfo />
    </div>
  );
};

export default ProblemPage;
