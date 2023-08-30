import React from 'react';
import { ProblemInfo } from '../../components';
import { ProblemPageStyle } from './ProblemPage.css';

const ProblemPage = () => {
  return (
    <div className={ProblemPageStyle}>
      <ProblemInfo />
    </div>
  );
};

export default ProblemPage;
