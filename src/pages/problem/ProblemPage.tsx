import React, { useEffect, useState } from 'react';
import { ProblemInfo, ProblemMenus } from '../../components';
import { ProblemPageStyle } from './ProblemPage.css';
import { getProblemList } from '../../apis/get';
import { ProblemInfoType } from '../../type/problem';

const ProblemPage = () => {
  // const { problemId } = useParams();
  const problemId = 4;
  const [problemInfo, setProblemInfo] = useState<ProblemInfoType | null>(null);

  useEffect(() => {
    const updateProblemList = async () => {
      try {
        const res = await getProblemList();
        const currentProblem = res.filter((i: any) => i.problemId === problemId)[0];
        setProblemInfo(currentProblem);
      } catch (e) {}
    };
    updateProblemList();
  }, []);
  return (
    <div className={ProblemPageStyle}>
      {problemInfo !== null && (
        <>
          <ProblemMenus problemInfo={problemInfo} />
          <ProblemInfo problemInfo={problemInfo} />
        </>
      )}
    </div>
  );
};

export default ProblemPage;
