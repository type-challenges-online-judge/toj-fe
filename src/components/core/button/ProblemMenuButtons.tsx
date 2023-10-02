// types
import { Level } from '@/type/problem';

// styles
import { MenuButton, ProblemDiffAndId } from './ProblemButton.css';

interface ProblemMenuButtonsProps {
  isAuth?: boolean;
  problemDiff?: Level;
  problemId?: number;
  text: string;
  _onClick: () => void;
}

const ProblemMenuButtons = ({
  isAuth,
  problemDiff,
  problemId,
  text,
  _onClick,
}: ProblemMenuButtonsProps) => {
  return (
    <button onClick={_onClick} className={MenuButton} disabled={isAuth === false}>
      {problemDiff !== undefined && problemId !== undefined && (
        <div className={`${ProblemDiffAndId} ${problemDiff}`}>
          <span>{problemId}</span>
        </div>
      )}
      {text}
    </button>
  );
};

export default ProblemMenuButtons;
