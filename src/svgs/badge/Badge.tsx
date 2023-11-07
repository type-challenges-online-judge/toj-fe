import React from 'react';
import { BadgeStyle, ProblemDiffStyle } from '../Badge.css';
import { Level } from '@/type/problem';

interface BadgeProps {
  diff: Level;
}

const Badge = ({ diff }: BadgeProps) => {
  const badgeStr = {
    warm: 'W',
    easy: 'E',
    medium: 'M',
    hard: 'H',
    extreme: 'E',
  };

  console.log(diff); // easy

  return (
    <div className={BadgeStyle}>
      <svg
        id="레이어_1"
        data-name="레이어 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 512"
      >
        <polygon
          className={ProblemDiffStyle[diff]}
          points="0 0 0 419.74 199.77 512 400 419.74 400 0 0 0"
        />
        <text
          x="50%"
          y="55%"
          fill="#fff"
          fontFamily="Arial"
          fontSize="250"
          fontWeight="bold"
          textAnchor="middle"
        >
          {badgeStr[diff]}
        </text>
        <polygon
          style={{ fill: '#fff' }}
          points="0 339.02 0 378.94 199.77 471.2 400 378.94 400 339.02 199.77 431.28 0 339.02"
        />
      </svg>
    </div>
  );
};

export default Badge;
