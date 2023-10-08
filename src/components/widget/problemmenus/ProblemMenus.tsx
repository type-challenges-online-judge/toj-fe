import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { ProblemMenuButtons } from '@/components/core';

// types
import { GetProblemDetailType } from '@/type/problem';

// style
import { SingleButton, ButtonList, ProblemMunusWrapperStyle } from './ProblemMenus.css';

// const
import { PAGE_URL } from '@/config/path';
import { useUserInfo } from '@/stores/useUserInfoStore';
import { useIsAuth } from '@/stores/useAuthStore';

/**
 *
 * 제출 현황 페이지 이동시 사용되는 URL 명세입니다.
 * https://localhost:3000/status?[result_type=right]&problem_id=172&[snsId=123]
 * @route GET /status
 * @param {string} query.result_id -  정답 옵션입니다 right, wrong, correct, valid (없을 경우 전체보기)
 * @param {number} query.problem_id - 문제의 ID를 나타냅니다.
 * @param {string} query.sns_id - GITHUB의 유저ID값을 의미합니다 (존재할 경우 내 제출, 없을 경우 모든 유저 제출)
 * @returns {Object} Response object
 */

interface ProblemMenusProps {
  problemDetail: GetProblemDetailType['data'];
}

const ProblemMenus = ({ problemDetail }: ProblemMenusProps) => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();
  const userInfo = useUserInfo();

  return (
    <div className={ProblemMunusWrapperStyle}>
      <ul className={ButtonList}>
        <li className={`${SingleButton} isFirst`}>
          <ProblemMenuButtons
            problemDiff={problemDetail.level}
            problemId={problemDetail.number}
            text={problemDetail.title}
            _onClick={() => {
              navigate(`/${PAGE_URL.Problem}/${problemDetail.id}`);
            }}
          />
        </li>

        <li className={SingleButton}>
          <ProblemMenuButtons
            text="제출하기"
            _onClick={() => {
              navigate(`/${PAGE_URL.Submit}/${problemDetail.id}`);
            }}
          />
        </li>
        <li className={SingleButton}>
          <ProblemMenuButtons
            text="답안 보기"
            _onClick={() => {
              navigate(`/${PAGE_URL.Status}?result_type=right&problem_id=${problemDetail.id}`);
            }}
          />
        </li>
        <li className={`${SingleButton} isLast`}>
          <ProblemMenuButtons
            text="내 제출"
            _onClick={() => {
              navigate(
                `/${PAGE_URL.Status}?problem_id=${problemDetail.id}&sns_id=${userInfo.snsId}`,
              );
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProblemMenus;
