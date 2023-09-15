import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CommonLayoutStyle } from './CommonLayoutWithMenus.css';

// components
import { ProblemMenus } from '@/components/widget';

// util
import { checkURL, fetchProblemDataById } from '@/util/problem';

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

  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: currentProblemId }],
    queryFn: async () => await fetchProblemDataById(currentProblemId!),
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
