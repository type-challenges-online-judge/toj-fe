import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Status = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [resultId, problemId, snsId, mine] = [
    Number(queryParams.get('result_id')),
    Number(queryParams.get('problem_id')),
    Number(queryParams.get('snsId')),
    queryParams.get('mine') === 'true',
  ];

  useEffect(() => {
    const getSubmitStatus = async () => {
      const res = await axios.get('status', {
        params: {
          result_id: resultId,
          problem_id: problemId,
          snsId,
          mine,
        },
      });
    };
    getSubmitStatus();
  }, []);

  return <div>문제 기록 페이지 (내 제출 ,정답 보기)</div>;
};

export default Status;
