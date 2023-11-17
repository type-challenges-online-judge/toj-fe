import React, { useState } from 'react';

// styles
import {
  BadgeButtonStyle,
  BadgeDiscriptionStyle,
  BadgeDiscriptionVisibleStyle,
} from './BadgeButton.css';

// svg
import { Badge } from '@/svgs';

// types
import { Level } from '@/type/problem';
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
