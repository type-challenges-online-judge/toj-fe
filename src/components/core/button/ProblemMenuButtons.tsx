import { MenuButton } from './ProblemButton.css';

interface ProblemMenuButtonsProps {
  text: string;
  _onClick: () => void;
}

const ProblemMenuButtons = ({ text, _onClick }: ProblemMenuButtonsProps) => {
  return (
    <button onClick={_onClick} className={MenuButton}>
      {text}
    </button>
  );
};

export default ProblemMenuButtons;
