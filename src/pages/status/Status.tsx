import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PaginationButtons, StatusBody, StatusHeader } from '@/components';
import { useGetSubmitList, useGetSubmitSize } from '@/hooks/queries/status';
import { SubmitResultsType } from '@/type/status';

import { TableStyle } from './Status.css';

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
  const [isInProgress, setIsInProgress] = useState<boolean>(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [resultType, problemId, snsId] = [
    queryParams.get('result_type') as SubmitResultsType,
    Number(queryParams.get('problem_id')),
    Number(queryParams.get('sns_id')),
  ];

  const { data: submitList, refetch: submitListRefetch } = useGetSubmitList({
    resultType,
    problemId,
    snsId,
    currentPage,
  });

  const { data: submitSize, refetch: submitSizeRefetch } = useGetSubmitSize({
    resultType,
    problemId,
    snsId,
    currentPage,
  });

  const totalSize = submitSize?.data?.data;
  const list = submitList?.data.data;

  useEffect(() => {
    submitSizeRefetch();
    submitListRefetch();
    setIsInProgress(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snsId]);

  useEffect(() => {
    if (list !== undefined && isInProgress) {
      for (const item of list) {
        if ([-4, -3, -2].includes(item.correct_score) || [-4, -3, -2].includes(item.valid_score)) {
          return;
        }
      }

      setIsInProgress(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInProgress) {
      intervalId = setInterval(() => {
        submitListRefetch();
      }, 10000);
    }

    return () => {
      // 컴포넌트가 언마운트되면 clearInterval을 호출하여 메모리 누수를 방지합니다.
      clearInterval(intervalId);
    };
  }, [isInProgress, submitListRefetch]);

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
