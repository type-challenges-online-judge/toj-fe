import { Level } from '@/type/problem';
import { ProblemButtonStyle, ProblemButtonTextStyle } from './MainProblemButton.css';

interface ProblemButtonProps {
  id: number;
  text: string;
  level: Level;
  isSolved: boolean;
  _onClick: () => void;
}

const ProblemButton = ({ id, text, level, isSolved = false, _onClick }: ProblemButtonProps) => {
  return (
    <button className={`${ProblemButtonStyle} ${isSolved || level}`} onClick={_onClick}>
      <p className={ProblemButtonTextStyle}>
        {id.toString()} - {text}
      </p>
    </button>
  );
};

export default ProblemButton;
