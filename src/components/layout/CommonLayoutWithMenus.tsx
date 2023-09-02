import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CommonLayoutStyle } from './CommonLayoutWithMenus.css';
import { ProblemInfoType } from '../../type/problem';
import { getProblemList } from '../../apis/get';
import { ProblemMenus } from '../../components';
import { checkURL } from '../../util/problem';

const CommonLayoutWithMenus = () => {
  const { problemId } = useParams();
  const location = useLocation();
  // 쿼리스트링을 사용하는 정답보기 , 내 제출 페이지에서는 값이 없어짐
  // 이 페이지는 레이아웃으로 지정한 것이기 때문에  path="/*" 에 속한 페이지에
  // 들어가게 되면 매번 실행이 됨
  // 즉 , problem/4 같은 url에 접근했을 때만 api호출을 진행하고 이걸 전역으로 저장
  // 만약 다른 페이지에서 접근할때 조건문으로 이걸 사용
  // const problemId = 4;

  const [currentProblemId, setCurrentProblemId] = useState<any | null>(null);

  useEffect(() => {
    const tmp = () => {
      if (!checkURL(location.pathname)) {
        const problemIdFromLocalStorage = JSON.parse(localStorage.getItem('problemId')!);
        setCurrentProblemId(problemIdFromLocalStorage);
      }
      if (checkURL(location.pathname)) {
        localStorage.setItem('problemId', JSON.stringify(problemId));
        setCurrentProblemId(problemId);
      }
    };
    tmp();
  }, [location.pathname]);

  console.log(currentProblemId);
  const { isLoading, error, data } = useQuery({
    queryKey: ['problemInfo', { problemId: currentProblemId }],
    queryFn: async () => {
      const res = await getProblemList();
      const currentProblem = res.filter((i: any) => i.problemId === Number(currentProblemId))[0];

      return currentProblem;
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
