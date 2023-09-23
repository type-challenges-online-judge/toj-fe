import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 내 제출
// https://localhost:3000/status?result_id=1&problem_id=4&snsId=123&mine=true
// problem_id , snsId , result_id=1(1이면 맞은 문제, -1이면 모두 ) , mine=true

// 정답
// https://localhost:3000/status?result_id=1&problem_id=4&snsId=123&mine=false
// problem_id , snsId , result_id=1 , mine=false

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
