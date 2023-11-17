import { Badge } from '@/svgs';
import { Level } from '@/type/problem';
import React, { useState } from 'react';
import {
  BadgeButtonStyle,
  BadgeDiscriptionStyle,
  BadgeDiscriptionVisibleStyle,
  DiscriptionStyle,
} from './BadgeButton.css';
import { SolvedItemType } from '@/type/user';

interface BadgeButtonProps {
  solvedInfo: SolvedItemType;
  _onClick: () => void;
}
const BadgeButton = ({ solvedInfo, _onClick }: BadgeButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      className={BadgeButtonStyle}
      onClick={_onClick}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <Badge diff={solvedInfo.level as Level} usage="solvedList" />
      <div className={isHovering ? BadgeDiscriptionVisibleStyle : BadgeDiscriptionStyle}>
        <Badge diff={solvedInfo.level as Level} usage="solvedList" />
        <p>
          {solvedInfo.number} {solvedInfo.title}
        </p>
      </div>
    </button>
  );
};

export default BadgeButton;
