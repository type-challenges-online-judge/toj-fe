import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PaginationButtons, StatusBody, StatusHeader } from '@/components';
import { useGetSubmitInfo } from '@/hooks/queries/status';

import { TableStyle } from './Status.css';
import { SubmitResultsType } from '@/type/status';

/**
 *
 * 제출 현황 페이지에서 사용되는 URL 명세입니다.
 * https://localhost:3000/status?[result_type=right]&problem_id=172&[snsId=123]
 * @route GET /status
 * @param {string} query.result_id -  정답 옵션입니다 right, wrong, correct, valid (없을 경우 전체보기)
 * @param {number} query.problem_id - 문제의 ID를 나타냅니다.
 * @param {string} query.sns_id - GITHUB의 유저ID값을 의미합니다 (존재할 경우 내 제출, 없을 경우 모든 유저 제출)
 * @returns {Object} Response object
 */

const Status = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [resultType, problemId, snsId] = [
    queryParams.get('result_type') as SubmitResultsType,
    Number(queryParams.get('problem_id')),
    Number(queryParams.get('sns_id')),
  ];

  const info = useGetSubmitInfo({ resultType, problemId, snsId, currentPage });
  const totalSize = info[0]?.data?.data?.data;
  const list = info[1]?.data?.data?.data;

  useEffect(() => {
    info[0].refetch();
    info[1].refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snsId]);

  return (
    <div>
      <table className={TableStyle}>
        <StatusHeader />
        {list != null && <StatusBody list={list} />}
      </table>

      {totalSize != null && totalSize !== 0 && (
        <PaginationButtons totalSize={totalSize} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default Status;
