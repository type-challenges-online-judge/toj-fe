import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Status = () => {
  // 내 제출
  // https://localhost:3000/status?result_id=-1&problem_id=4&user_id=minh0518&mine=true
  // problem_id , user_id , result_id=-1(음수면 그냥 죄다 보여줌) , mine=true

  // 정답
  // https://localhost:3000/status?result_id=1&problem_id=4&user_id=minh0518&mine=false
  // problem_id , user_id , result_id=1(1이면 맞은 문제들) , mine=false
  const location = useLocation();
  const matchId = new URLSearchParams(location.search);
  const [problemId, userId, resultId, mine] = [
    matchId.get('problem_id'),
    matchId.get('user_id'),
    matchId.get('result_id'),
    matchId.get('mine'),
  ];

  return <div>문제 기록 페이지 (내 제출 ,정답 보기)</div>;
};

export default Status;
