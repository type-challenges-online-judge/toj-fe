import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

// components
import { ProblemMenus } from '@/components/widget';

// util
import { checkRemoveLocalStorageURL, checkWriteLocalStorageURL } from '@/util/problem';
import { useGetProblemDetail } from '@/hooks/queries/problem';
import { GetProblemDetailType } from '@/type/problem';
import { CommonLayoutStyle } from './CommonLayout.css';

interface CommonLayoutProps {
  isMenu: boolean;
}

const CommonLayout = ({ isMenu }: CommonLayoutProps) => {
  const { problemId } = useParams();
  const location = useLocation();
  const [currentProblemId, setCurrentProblemId] = useState<number | null>(null);

  useEffect(() => {
    const decideProblemId = () => {
      // "problem/", "submit/" URL에서는, 선택한 문제ID를 로컬스토리지에 저장
      if (problemId !== undefined) {
        localStorage.setItem('problemId', JSON.stringify(problemId));
        setCurrentProblemId(Number(problemId));
      }

      // 제출하기,제출현황 URL에서는 새로고침에 대비해서 로컬스토리지의 문제ID를 가져와서 사용
      if (
        !checkRemoveLocalStorageURL(location.pathname) &&
        !checkWriteLocalStorageURL(location.pathname)
      ) {
        const problemIdFromLocalStorage = Number(JSON.parse(localStorage.getItem('problemId')!));
        setCurrentProblemId(problemIdFromLocalStorage);
      }
    };
    decideProblemId();
  }, [location.pathname, problemId]);

  const { data: { data: problemDetailData = null } = {} } =
    useGetProblemDetail<GetProblemDetailType>(currentProblemId);

  console.log(currentProblemId);

  return (
    <div className={CommonLayoutStyle}>
      {problemDetailData !== null && isMenu && <ProblemMenus problemDetail={problemDetailData} />}
      <Outlet />
    </div>
  );
};

export default CommonLayout;
