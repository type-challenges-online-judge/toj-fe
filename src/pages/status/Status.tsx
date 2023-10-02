import React from 'react';

/**
 *
 * 제출 현황 페이에서 사용되는 URL 명세입니다.
 * https://localhost:3000/status?result_id=1&problem_id=172&[snsId=123]
 * @route GET /status
 * @param {string} query.result_id -  1:정답 , 2:오답 , 3:정확성 , -1:전부
 * @param {number} query.problem_id - 문제의 ID를 나타냅니다.
 * @param {string} query.snsId - GITHUB의 유저ID값을 의미합니다 (존재할 경우 내 제출, 없을 경우 모든 유저 제출)
 * @returns {Object} Response object
 */

const Status = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  // const [resultId, problemId, snsId] = [
  //   Number(queryParams.get('result_id')),
  //   Number(queryParams.get('problem_id')),
  //   Number(queryParams.get('sns_id')),
  // ];

  return <div>문제 기록 페이지 (내 제출 ,정답 보기)</div>;
};

export default Status;
