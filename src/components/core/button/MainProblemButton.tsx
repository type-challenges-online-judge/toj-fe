import { ProblemButtonStyle, ProblemButtonTextStyle } from './MainProblemButton.css';

interface ProblemButtonProps {
  text: string;
  level: 'warm-up' | 'easy' | 'medium' | 'hard';
  _onClick: () => void;
}

const ProblemButton = ({ text, level, _onClick }: ProblemButtonProps) => {
  return (
    <button className={`${ProblemButtonStyle} ${level}`} onClick={_onClick}>
      <p className={ProblemButtonTextStyle}>{text}</p>
    </button>
  );
};

export default ProblemButton;
