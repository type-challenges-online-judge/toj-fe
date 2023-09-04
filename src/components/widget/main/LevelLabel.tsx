import { Level } from '../../../type/problem';
import {
  CountStyle,
  LevelLabelTextStyle,
  LevelLabelWrapperStyle,
  LevelStyle,
} from './LevelLabel.css';

interface LevelLabelProps {
  level: Level;
  count: number;
}

const LevelLabel = ({ level, count }: LevelLabelProps) => {
  return (
    <div className={LevelLabelWrapperStyle}>
      <div className={LevelStyle}>
        <p className={LevelLabelTextStyle}>{level}</p>
      </div>

      <div className={`${CountStyle} ${level}`}>
        <p className={LevelLabelTextStyle}>{count}</p>
      </div>
    </div>
  );
};

export default LevelLabel;
