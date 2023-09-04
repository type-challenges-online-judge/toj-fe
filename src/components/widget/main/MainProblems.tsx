import { useNavigate } from 'react-router-dom';

import {
  MainLevelsWrapperStyle,
  MainLevelProblemsWrapperStyle,
  MainProblemsWrapperStyle,
} from './MainProblems.css';

import { MAIN_LEVEL_PROBLEMS, MAIN_LEVELS } from '@/data/Problems';
import { LevelLabel, MainProblemButton } from '@/components';
import { MainLevel, MainProblem } from '@/type/problem';

const MainProblems = () => {
  const navigate = useNavigate();

  return (
    <div className={MainProblemsWrapperStyle}>
      {MAIN_LEVELS.map((levelLabel: MainLevel, index: number) => {
        return (
          <div key={index} className={MainLevelsWrapperStyle}>
            <LevelLabel level={levelLabel.level} count={levelLabel.count} />

            <div className={MainLevelProblemsWrapperStyle}>
              {MAIN_LEVEL_PROBLEMS[levelLabel.level].map((problem: MainProblem, idx: number) => {
                return (
                  <div key={idx}>
                    <MainProblemButton
                      text={problem.problemTitle}
                      level={levelLabel.level}
                      _onClick={() => {
                        navigate(`/problem/${problem.problemId}`);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainProblems;
