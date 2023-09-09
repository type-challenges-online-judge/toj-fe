import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MainProblem } from '@/type/problem';

import { CommonLayoutStyle } from './CommonLayoutWithMenus.css';

import { ProblemMenus } from '../../components';
import { checkURL, getProblemDataById } from '../../util/problem';
import { getProblems } from '@/apis/get';

const CommonLayoutWithMenus = () => {
  const { problemId } = useParams();
  const location = useLocation();

  const [currentProblemId, setCurrentProblemId] = useState<number | null>(null);

  useEffect(() => {
    const decideProblemId = () => {
      // 다른 형태의 URL이라면 문제는 이미 선택이 됐고 , 이외의 기능(내 제출 등..)을 사용하는 것이므로
      // problemId는 로컬스토리지에 저장된 값을 사용
      if (!checkURL(location.pathname)) {
        const problemIdFromLocalStorage = JSON.parse(localStorage.getItem('problemId')!);
        setCurrentProblemId(problemIdFromLocalStorage);
      }

      // problem/:problemId 형태의 URL이라면 :problemId 사용 및 로컬스토리지 저장
      if (checkURL(location.pathname)) {
        localStorage.setItem('problemId', JSON.stringify(problemId));
        setCurrentProblemId(Number(problemId));
      }
    };
    decideProblemId();
  }, [location.pathname, problemId]);

  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(currentProblemId) }],
    queryFn: async () => {
      const res: MainProblem = await getProblems();

      return getProblemDataById(res, Number(problemId));
    },
    staleTime: Infinity,
    enabled: currentProblemId !== null,
  });

  return (
    <div className={CommonLayoutStyle}>
      {data !== undefined && <ProblemMenus problemInfo={data} />}
      <Outlet />
    </div>
  );
};

export default CommonLayoutWithMenus;
