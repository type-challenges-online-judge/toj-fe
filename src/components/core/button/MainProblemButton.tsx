import { Level } from '@/type/problem';
import { ProblemButtonStyle, ProblemButtonTextStyle } from './MainProblemButton.css';

interface ProblemButtonProps {
  id: number;
  text: string;
  level: Level;
  _onClick: () => void;
}

const ProblemButton = ({ id, text, level, _onClick }: ProblemButtonProps) => {
  return (
    <button className={`${ProblemButtonStyle} ${level}`} onClick={_onClick}>
      <p className={ProblemButtonTextStyle}>
        {id.toString()} - {text}
      </p>
    </button>
  );
};

export default ProblemButton;
