import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProblemList } from '../../../apis/get';

const ProblemInfo = () => {
  //const { problemId } = useParams();

  const problemId = 4;
  const [problemInfo, setProblemInfo] = useState<any | null>(null);

  useEffect(() => {
    const updateProblemList = async () => {
      try {
        const res = await getProblemList();
        setProblemInfo(res);
      } catch (e) {}
    };
    updateProblemList();
  }, []);

  console.log(problemInfo);
  return <div>문제 페이지</div>;
};

export default ProblemInfo;
