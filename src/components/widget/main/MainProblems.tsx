import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainProblemButton, LevelLabel } from '@/components';
import { useGetProblems } from '@/hooks/queries/problem';
import { GetProblemListType, Level, ProblemType, ProblemsType } from '@/type/problem';

import {
  MainLevelsWrapperStyle,
  MainLevelProblemsWrapperStyle,
  MainProblemsWrapperStyle,
} from './MainProblems.css';
import { useUserInfo } from '@/stores/useUserInfoStore';
import { useGetSolvedProblemsList } from '@/hooks/queries/user';

const MainProblems = () => {
  const [problems, setProblems] = useState<ProblemsType>();
  const [solvedId, setSolvedId] = useState<Set<number>>(new Set());
  const userInfo = useUserInfo();

  const { data: { data: unsortedProblems = null } = {} } = useGetProblems<GetProblemListType>();
  const { data: { data: solvedIdList = [] } = {} } = useGetSolvedProblemsList(
    userInfo.snsId,
    false,
  );

  useEffect(() => {
    if (solvedIdList.length > 0) {
      setSolvedId(new Set(new Set(solvedIdList.map((solvedData: any) => solvedData.id))));
    }
  }, [solvedIdList]);

  const navigate = useNavigate();

  const moveProblemDetail = (id: number) => {
    navigate(`/problem/${id}`);
  };

  useEffect(() => {
    if (unsortedProblems != null) {
      const sortedProblems: ProblemsType = {
        warm: [],
        easy: [],
        medium: [],
        hard: [],
        extreme: [],
      };

      for (const unsortedProblem of unsortedProblems.data) {
        sortedProblems[unsortedProblem.level].push({
          id: unsortedProblem.id,
          title: unsortedProblem.title,
          number: unsortedProblem.number,
        });
      }

      setProblems(sortedProblems);
    }
  }, [unsortedProblems]);

  return (
    problems != null && (
      <div className={MainProblemsWrapperStyle}>
        {Object.keys(problems).map((level: string, index: number) => {
          return (
            <div key={index} className={MainLevelsWrapperStyle}>
              <LevelLabel level={level as Level} count={problems[level as Level].length} />
              <div className={MainLevelProblemsWrapperStyle}>
                {problems[level as Level].map((problem: ProblemType, idx: number) => {
                  return (
                    <div key={idx}>
                      <MainProblemButton
                        id={problem.number}
                        text={problem.title}
                        level={level as Level}
                        isSolved={solvedId.has(problem.id)}
                        _onClick={() => {
                          moveProblemDetail(problem.id);
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
    )
  );
};

export default MainProblems;
