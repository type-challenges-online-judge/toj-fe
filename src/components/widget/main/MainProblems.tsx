import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  MainLevelsWrapperStyle,
  MainLevelProblemsWrapperStyle,
  MainProblemsWrapperStyle,
} from './MainProblems.css';

import { LevelLabel, MainProblemButton } from '@/components';
import { MainLevel, MainProblem, ProblemInfoType } from '@/type/problem';
import { MAIN_LEVELS } from '@/data/Problems';
// import { getProblems } from '@/apis/get';

const MainProblems = () => {
  const navigate = useNavigate();

  const [problemData, setProblemData] = useState<MainProblem | null>(null);

  // useEffect(() => {
  //   const getProblemData = async () => {
  //     try {
  //       const res = await getProblems<MainProblem>();
  //       setProblemData(res);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   getProblemData();
  // }, []);

  return (
    <div className={MainProblemsWrapperStyle}>
      {MAIN_LEVELS.map((levelLabel: MainLevel, index: number) => {
        return (
          <div key={index} className={MainLevelsWrapperStyle}>
            <LevelLabel level={levelLabel.level} count={levelLabel.count} />
            {problemData !== null && (
              <div className={MainLevelProblemsWrapperStyle}>
                {problemData[levelLabel.level].map((problem: ProblemInfoType, idx: number) => {
                  return (
                    <div key={idx}>
                      <MainProblemButton
                        id={problem.problemId}
                        text={problem.problemTitle}
                        level={levelLabel.level}
                        isSolved={problem.isSolved ?? false}
                        _onClick={() => {
                          navigate(`/problem/${problem.problemId}`);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MainProblems;
