import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

// components
import { ProblemMenus } from '@/components/widget';

// util
import { checkURL } from '@/util/problem';
import { useGetProblemDetail } from '@/hooks/queries/problem';
import { GetProblemDetailType } from '@/type/problem';
import { CommonLayoutStyle } from './CommonLayout.css';

const CommonLayoutWithMenus = () => {
  const { problemId } = useParams();
  const location = useLocation();
  const [currentProblemId, setCurrentProblemId] = useState<number | null>(null);

  useEffect(() => {
    const decideProblemId = () => {
      if (!checkURL(location.pathname)) {
        const problemIdFromLocalStorage = Number(JSON.parse(localStorage.getItem('problemId')!));
        setCurrentProblemId(problemIdFromLocalStorage);
      }

      if (checkURL(location.pathname)) {
        localStorage.setItem('problemId', JSON.stringify(problemId));
        setCurrentProblemId(Number(problemId));
      }
    };
    decideProblemId();
  }, [location.pathname, problemId]);

  const { data: { data: problemDetailData = null } = {} } =
    useGetProblemDetail<GetProblemDetailType>(currentProblemId);

  return (
    <div className={CommonLayoutStyle}>
      {problemDetailData !== null && <ProblemMenus problemDetail={problemDetailData} />}
      <Outlet />
    </div>
  );
};

export default CommonLayoutWithMenus;
