import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
  MainLevelsWrapperStyle,
  MainLevelProblemsWrapperStyle,
  MainProblemsWrapperStyle,
} from './MainProblems.css';

// import { LevelLabel, MainProblemButton } from '@/components';
// import { MainLevel, MainProblem } from '@/type/problem';
// import { MAIN_LEVELS } from '@/data/Problems';

// 기존 API로직 때문에 에러가 발생하게 되므로 민지님이 추후 수정해 주세요
const MainProblems = () => {
  const navigate = useNavigate();

  // const [problemData, setProblemData] = useState<MainProblem | null>(null);

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
      {/* {MAIN_LEVELS.map((levelLabel: MainLevel, index: number) => {
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
      })} */}
    </div>
  );
};

export default MainProblems;
