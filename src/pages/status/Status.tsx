import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Status = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [resultId, problemId, snsId, mine] = [
    Number(queryParams.get('resultId')),
    Number(queryParams.get('problemId')),
    Number(queryParams.get('snsId')),
    queryParams.get('mine') === 'true',
  ];

  useEffect(() => {
    const getSubmitStatus = async () => {
      await axios.get('status', {
        params: {
          result_id: resultId,
          problem_id: problemId,
          snsId,
          mine,
        },
      });
    };
    getSubmitStatus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>문제 기록 페이지 (내 제출 ,정답 보기)</div>;
};

export default Status;
