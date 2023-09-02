import React, { useEffect, useState } from 'react';
import { ProblemInfo, ProblemMenus } from '../../components';
import { ProblemPageStyle } from './ProblemPage.css';
import { getProblemList } from '../../apis/get';
import { ProblemInfoType } from '../../type/problem';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { checkURL } from '../../util/problem';

const ProblemPage = () => {
  const { problemId } = useParams();
  const location = useLocation();
  const [problemInfo, setProblemInfo] = useState<ProblemInfoType | null>(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ['problemInfo', { problemId }],
    queryFn: async () => {
      const res = await getProblemList();
      const currentProblem = res.filter((i: any) => i.problemId === Number(problemId))[0];
      return currentProblem;
    },
  });

  return (
    <div className={ProblemPageStyle}>
      {data !== undefined && (
        <>
          {/* <ProblemMenus problemInfo={problemInfo} /> */}
          <ProblemInfo problemInfo={data} />
        </>
      )}
    </div>
  );
};

export default ProblemPage;
